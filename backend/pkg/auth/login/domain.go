package login

import (
	"github.com/asaskevich/govalidator"
	"github.com/google/uuid"
)

type Login struct {
	ID       uuid.UUID `json:"id" db:"id" valid:"required,uuid"`
	NickName string    `json:"nick_name" db:"nick_name" valid:"required,stringlength(8|15),matches(^[a-zA-Z0-9]+$)"`
	Email    string    `json:"email" db:"email" valid:"required"`
	Password string    `json:"password" db:"password"`
	RealIP   string    `json:"real_ip" db:"real_ip"`
}

func NewLogin(id uuid.UUID, nickName, email, password string, RealIP string) *Login {
	return &Login{
		ID:       id,
		NickName: nickName,
		Email:    email,
		Password: password,
		RealIP:   RealIP,
	}
}

func (m *Login) valid() (bool, error) {
	result, err := govalidator.ValidateStruct(m)
	if err != nil {
		return result, err
	}
	return result, nil
}
