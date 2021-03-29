package dataloaders

import (
	"context"
	"crypto/rsa"
	"errors"
	"fmt"
	"io/ioutil"
	"net"
	"net/http"
	"strings"

	"gitlab.com/team-node/jobs/backend/internal/response"

	"github.com/jmoiron/sqlx"

	"gitlab.com/team-node/jobs/backend/internal/models"

	"github.com/dgrijalva/jwt-go"
	"gitlab.com/team-node/jobs/backend/internal/logger"
)

var (
	UserCtxKey = contextKey("user")
	verifyKey  *rsa.PublicKey
)

func init() {
	verifyBytes, err := ioutil.ReadFile("../rsa/app.rsa.pub")
	if err != nil {
		logger.Error.Printf("leyendo el archivo público de confirmación: %s", err)
	}

	verifyKey, err = jwt.ParseRSAPublicKeyFromPEM(verifyBytes)
	if err != nil {
		logger.Error.Printf("realizando el parse en jwt RSA public: %s", err)
	}
}

type jwtCustomClaims struct {
	User      models.User `json:"user"`
	IPAddress string      `json:"ip_address"`
	jwt.StandardClaims
}

func Middleware(db *sqlx.DB) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			//var msg msgs.Model
			res := response.Model{Error: true}
			ctx := r.Context()

			tkn, err := getTokenFromHeader(r)
			if err != nil {
				logger.Warning.Printf("la petición no contiene el token en el encabezado: %v", err)
				response.RespondwithJSON(w, http.StatusForbidden, res)
				return
			}
			NewUserToken, err, _ := ValidateAuthJWT(tkn)
			if err != nil {
				logger.Warning.Printf("no se pudo validar el token: %v", err)
				response.RespondwithJSON(w, http.StatusForbidden, res)
				return
			}

			realIP, _, _ := net.SplitHostPort(r.RemoteAddr)
			if realIP != NewUserToken.RealIP {
				logger.Warning.Printf("Token creado en un origen diferente: %v", err)
				res.Data = "No se pudo validar token"
				res.Code = 36
				response.RespondwithJSON(w, http.StatusForbidden, res)
				return
			}
			loaders := newLoaders(ctx, db, &NewUserToken)
			augmentedCtx := context.WithValue(ctx, key, loaders)
			r = r.WithContext(augmentedCtx)
			ctxUsr := context.WithValue(r.Context(), UserCtxKey, NewUserToken)
			r = r.WithContext(ctxUsr)
			next.ServeHTTP(w, r)

		})
	}
}

func getTokenFromHeader(r *http.Request) (string, error) {
	ah := r.Header.Get("Authorization")
	if ah == "" {
		return "", errors.New("el encabezado no contiene la autorización")
	}
	// Should be a bearer token
	if len(ah) > 6 && strings.ToUpper(ah[0:6]) == "BEARER" {
		return ah[7:], nil
	}
	return "", errors.New("el header no contiene la palabra Bearer")
}

func ValidateAuthJWT(tkn string) (models.User, error, int) {
	// TODO decript Token
	u := models.User{}
	verifyFunction := func(tkn *jwt.Token) (interface{}, error) {
		return verifyKey, nil
	}

	token, err := jwt.ParseWithClaims(tkn, &jwtCustomClaims{}, verifyFunction)
	if err != nil {
		switch err.(type) {
		case *jwt.ValidationError:
			vErr := err.(*jwt.ValidationError)
			switch vErr.Errors {
			case jwt.ValidationErrorExpired:
				logger.Warning.Printf("token expirado: %v", err)
				return u, err, 35
			default:
				logger.Warning.Printf("Error de validacion del token: %v", err)
				return u, err, 36
			}
		default:
			logger.Warning.Printf("Error al procesar el token: %v", err)
			return u, err, 37
		}

	}
	u = models.User(token.Claims.(*jwtCustomClaims).User)
	if !token.Valid {
		logger.Warning.Printf("Token no Valido: %v", err)
		return u, fmt.Errorf("Token no Valido"), 38
	}
	return u, nil, 29
}

// Obtiene el Token.
func GetUser(ctx context.Context) models.User {
	user := ctx.Value(UserCtxKey).(models.User)
	return user
}
