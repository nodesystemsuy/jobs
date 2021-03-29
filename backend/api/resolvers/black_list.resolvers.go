package api

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"gitlab.com/team-node/jobs/backend/api/generated"
	"gitlab.com/team-node/jobs/backend/api/model"
)

func (r *mutationResolver) CreateBlackList(ctx context.Context, input model.RequestNewBlackList) (*model.ResponseBlackList, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) UpdateBlackList(ctx context.Context, input model.RequestNewBlackList) (*model.ResponseBlackList, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) DeleteBlackList(ctx context.Context, id int) (*model.ResponseBlackList, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) GetBlackList(ctx context.Context) (*model.AllResponseBlackList, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) GetBlackListByID(ctx context.Context, id int) (*model.AllResponseBlackList, error) {
	panic(fmt.Errorf("not implemented"))
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
