package login

import (
	"github.com/google/uuid"
	"github.com/jmoiron/sqlx"
	"gitlab.com/team-node/jobs/backend/internal/logger"
	"gitlab.com/team-node/jobs/backend/internal/models"
)

type PortServiceLogin interface {
	Login(id uuid.UUID, email, password, realIp string) (string, int, error)
}

type service struct {
	DB *sqlx.DB
}

func (s *service) Login(id uuid.UUID, email, password, realIp string) (string, int, error) {
	//TODO getUser, validations
	usr := models.User{ID: id, Email: email, Password: password, RealIP: realIp}
	token, cod, err := GenerateJWT(usr)
	if err != nil {
		logger.Error.Printf("couldn't get token", err)
		return "", cod, err
	}
	return token, 29, nil
}
