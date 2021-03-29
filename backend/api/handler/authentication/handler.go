package authentication

import (
	"encoding/json"
	"net"
	"net/http"

	"gitlab.com/team-node/jobs/backend/internal/logger"

	"github.com/jmoiron/sqlx"
	"gitlab.com/team-node/jobs/backend/internal/response"
)

type Handler struct {
	DB *sqlx.DB
}

func (h *Handler) Login(w http.ResponseWriter, r *http.Request) {
	res := response.Model{Error: true}
	m := Model{}
	err := json.NewDecoder(r.Body).Decode(&m)
	if err != nil {
		logger.Error.Printf("no se pudo leer el Modelo User en login: %v", err)
		response.RespondwithJSON(w, http.StatusAccepted, res)
		return
	}
	m.RealIP, _, _ = net.SplitHostPort(r.RemoteAddr)

	res.Data = ""
	//res.Code, res.Type, res.Msg = msg.GetByCode(cod)
	res.Error = false
	response.RespondwithJSON(w, http.StatusOK, res)
	return
}
