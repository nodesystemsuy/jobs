package api

import (
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/cors"
	"github.com/jmoiron/sqlx"
	"gitlab.com/team-node/jobs/backend/api/generated"
	"gitlab.com/team-node/jobs/backend/api/handler/authentication"
	graph "gitlab.com/team-node/jobs/backend/api/resolvers"
)

func routes(db *sqlx.DB, loggerHttp bool, allowedOrigins string) *chi.Mux {
	r := chi.NewRouter()

	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Recoverer)
	if loggerHttp {
		r.Use(middleware.Logger)
	}
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{allowedOrigins},
		AllowedMethods:   []string{"GET", "POST"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: false,
		MaxAge:           300, // Maximum value not ignored by any of major browsers
	}))

	ln := authentication.Handler{DB: db}

	r.Group(func(r chi.Router) {
		//dlMiddleware := dataloaders.Middleware(db)
		resolver := &graph.Resolver{}
		graphqlHandler := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: resolver}))
		//r.Method("POST", "/query", dlMiddleware(graphqlHandler))
		r.Method("POST", "/query", graphqlHandler)
		r.Method("GET", "/", playground.Handler("API JOBS Graphql", "/query"))
		r.Post("/api/v1/login", ln.Login)
	})

	return r
}
