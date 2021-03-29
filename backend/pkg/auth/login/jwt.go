package login

import (
	"crypto/rsa"
	"io/ioutil"
	"time"

	"github.com/dgrijalva/jwt-go"
	"gitlab.com/team-node/jobs/backend/internal/configuration"
	"gitlab.com/team-node/jobs/backend/internal/logger"
	"gitlab.com/team-node/jobs/backend/internal/models"
)

type UserToken models.User

var (
	signKey    *rsa.PrivateKey
	privateKey string
)

// JWT personzalizado
type jwtCustomClaims struct {
	User      models.User `json:"user"`
	IPAddress string      `json:"ip_address"`
	jwt.StandardClaims
}

// init lee los archivos de firma y validación RSA
func init() {
	getParams()
	signBytes, err := ioutil.ReadFile(privateKey)
	if err != nil {
		logger.Error.Printf("leyendo el archivo privado de firma: %s", err)
	}

	signKey, err = jwt.ParseRSAPrivateKeyFromPEM(signBytes)
	if err != nil {
		logger.Error.Printf("realizando el parse en authentication RSA private: %s", err)
	}
}

// Genera el token
func GenerateJWT(u models.User) (string, int, error) {
	c := &jwtCustomClaims{
		User:      u,
		IPAddress: u.RealIP,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Minute * 1200).Unix(),
			Issuer:    "Ecatch-BPM",
		},
	}

	t := jwt.NewWithClaims(jwt.SigningMethodRS256, c)
	token, err := t.SignedString(signKey)
	if err != nil {
		logger.Error.Printf("firmando el token: %v", err)
		return "", 70, err
	}
	// TODO encript Token
	return token, 29, nil
}

// Validación del token
func getParams() {
	c, err := configuration.New("config.json")
	if err != nil {
		logger.Error.Println("no se pudo cargar la configuracion RSA: ", err)
	}

	privateKey, err = c.Get("app_rsa_private_key")
	if err != nil {
		logger.Error.Println("no se pudo cargar la configuracion RSA: ", err)
	}
}
