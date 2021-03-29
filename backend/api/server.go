package api

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"time"

	"github.com/fatih/color"
	"github.com/go-chi/chi"
)

const (
	version = "0.0.1"
	website = "http://www.ecapture.com.co"
	banner  = `██   ██  ██████  ██████  ███████      ██████  ███    ██ ██      ██ ███    ██ ███████ 
█    ██ ██    ██ ██   ██ ██          ██    ██ ████   ██ ██      ██ ████   ██ ██      
     ██ ██    ██ ██████  ███████     ██    ██ ██ ██  ██ ██      ██ ██ ██  ██ █████   
█    ██ ██    ██ ██   ██      ██     ██    ██ ██  ██ ██ ██      ██ ██  ██ ██ ██      
 █████   ██████  ██████  ███████      ██████  ██   ████ ███████ ██ ██   ████ ███████`
	description = `Backend JOBS - %s - Port: %s
by NodeSystems
Version: %s
%s`
)

type server struct {
	app string
	*http.Server
}

func newServer(listening int, app string, mux *chi.Mux) *server {
	s := &http.Server{
		Addr:         ":" + fmt.Sprintf("%d", listening),
		Handler:      mux,
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 10 * time.Second,
		IdleTimeout:  15 * time.Second,
	}

	return &server{app, s}
}

func (srv *server) Start() {
	color.Blue(banner)

	go func() {
		if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("could not listen on %s due to %s", srv.Addr, err.Error())
		}
	}()
	color.Cyan(fmt.Sprintf(description, srv.app, srv.Addr, version, website))
	srv.gracefulShutdown()
}

func (srv *server) gracefulShutdown() {
	quit := make(chan os.Signal, 1)

	signal.Notify(quit, os.Interrupt)
	sig := <-quit
	log.Printf("cmd is shutting down %s", sig.String())

	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()

	srv.SetKeepAlivesEnabled(false)
	if err := srv.Shutdown(ctx); err != nil {
		log.Fatalf("could not gracefully shutdown the cmd %s", err.Error())
	}
	log.Printf("cmd stopped")
}
