package dbx

import (
	"fmt"
	"strings"
	"sync"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
	"gitlab.com/team-node/jobs/backend/internal/configuration"
	"gitlab.com/team-node/jobs/backend/internal/logger"
)

var (
	dbx          *sqlx.DB
	once         sync.Once
	DBConnection string
	DBHost       string
	DBDatabase   string
	DBUserName   string
	DBPassword   string
	DBInstance   string
	DBPort       int
)

func init() {
	once.Do(func() {
		setConnection()
	})
}

func setConnection() {
	var err error
	loadParams()
	dbx, err = sqlx.Open(DBConnection, connectionString())
	if err != nil {
		logger.Error.Printf("couldn't connect to database: ", err)
		panic(err)
	}

}

func GetConnection() *sqlx.DB {
	return dbx
}

//TODO encrypt-decrypt password
func connectionString() string {
	var host, database, username, password, instance string
	var port int

	host = DBHost
	database = DBDatabase
	username = DBUserName
	password = DBPassword
	instance = DBInstance
	port = DBPort

	switch strings.ToLower(DBConnection) {
	case "postgres":
		return fmt.Sprintf("dbname=%s user=%s password=%s host=%s port=%d sslmode=disable", database, username, password, host, port)
	case "sqlserver":
		return fmt.Sprintf(
			"server=%s\\%s;user id=%s;database=%s;password=%s;port=%d", host, instance, username, database, password, port)
	}
	logger.Error.Printf("database engine is not configured")
	return ""
}

func loadParams() {
	c, err := configuration.New("config.json")
	if err != nil {
		fmt.Println("no se pudo cargar la configuracion: ", err)
	}
	DBConnection, err = c.Get("db_connection")
	if err != nil {
		fmt.Println("no se pudo cargar configuracion db_connection: ", err)
		return
	}
	DBHost, err = c.Get("db_server")
	if err != nil {
		fmt.Println("no se pudo cargar configuracion db_server: ", err)
		return
	}
	DBDatabase, err = c.Get("db_name")
	if err != nil {
		fmt.Println("no se pudo cargar configuracion db_name: ", err)
		return
	}
	DBUserName, err = c.Get("db_user")
	if err != nil {
		fmt.Println("no se pudo cargar configuracion db_user: ", err)
		return
	}
	DBPassword, err = c.Get("db_password")
	if err != nil {
		fmt.Println("no se pudo cargar configuracion db_password: ", err)
		return
	}
	DBInstance, err = c.Get("db_instance")
	if err != nil {
		fmt.Println("no se pudo cargar configuracion db_instance: ", err)
		return
	}
	DBPort, err = c.GetInt("db_port")
	if err != nil {
		fmt.Println("no se pudo cargar configuracion db_port: ", err)
		return
	}
}
