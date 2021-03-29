package authentication

import "github.com/google/uuid"

type Model struct {
	ID       uuid.UUID `json:"id"`
	NickName string    `json:"nickname"`
	Email    string    `json:"email"`
	Password string    `json:"password"`
	RealIP   string    `json:"real_ip"`
}
