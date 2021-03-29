package main

import (
	"gitlab.com/nodesystems/jobs/backend/api"
	"gitlab.com/nodesystems/jobs/backend/internal/configuration"
	"gitlab.com/nodesystems/jobs/backend/internal/logger"
)

func main() {
	api.Start(getParams())
}

func getParams() (int, string, bool, string) {
	c, err := configuration.New("config.json")
	if err != nil {
		logger.Error.Println("no se pudo cargar la configuracion server http: ", err)
		return 0, "", true, ""
	}
	port, err := c.GetInt("app_port")
	if err != nil {
		logger.Error.Println("no se pudo cargar la configuracion port: ", err)
		return 0, "", true, ""
	}
	appServiceName, err := c.Get("app_service_name")
	if err != nil {
		logger.Error.Println("no se pudo cargar la configuracion appServiceName: ", err)
		return 0, "", true, ""
	}
	loggerHttp, err := c.GetBool("app_logger_http")
	if err != nil {
		logger.Error.Println("no se pudo cargar la configuracion loggerHttp: ", err)
		return 0, "", true, ""
	}
	allowedDomains, err := c.Get("app_allowed_domains")
	if err != nil {
		logger.Error.Println("no se pudo cargar la configuracion allowedDomains: ", err)
		return 0, "", true, ""
	}
	return port, appServiceName, loggerHttp, allowedDomains
}
