package api

import "gitlab.com/team-node/jobs/backend/internal/dbx"

func Start(port int, appServiceName string, loggerHttp bool, allowedDomains string) {
	db := dbx.GetConnection()
	defer db.Close()

	r := routes(db, loggerHttp, allowedDomains)
	server := newServer(port, appServiceName, r)
	server.Start()
}
