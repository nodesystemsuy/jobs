package models

import (
	"time"

	"github.com/google/uuid"
)

type User struct {
	ID                 uuid.UUID `json:"id" db:"id" valid:"required,uuid"`
	NickName           string    `json:"nick_name" db:"nick_name" valid:"required"`
	Password           string    `json:"password" db:"password" valid:"required"`
	Roles              []string  `json:"roles" db:"roles" valid:"required"`
	Email              string    `json:"email" db:"email" valid:"required"`
	Status             int       `json:"status,omitempty" db:"status" valid:"required"`
	FailedAttempts     int       `json:"failed_attempts,omitempty" db:"failed_attempts" valid:"required"`
	BlockDate          time.Time `json:"blockDate,omitempty" db:"blockDate" valid:"required"`
	DisabledDate       time.Time `json:"disabled_date,omitempty" db:"disabled_date" valid:"required"`
	LastLogin          time.Time `json:"last_login,omitempty" db:"last_login" valid:"required"`
	LastChangePassword time.Time `json:"last_change_password,omitempty" db:"last_change_password" valid:"required"`
	RealIP             string    `json:"real_ip,omitempty" db:"real_ip" valid:"required"`
	CreatedAt          time.Time `json:"created_at" db:"created_at" valid:"required"`
	UpdatedAt          time.Time `json:"updated_at" db:"updated_at" valid:"required"`
}
