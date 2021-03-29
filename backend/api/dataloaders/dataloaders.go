package dataloaders

import (
	"context"

	"github.com/jmoiron/sqlx"
	"gitlab.com/team-node/jobs/backend/internal/models"
)

type contextKey string

const key = contextKey("dataloaders")

// Loaders holds references to the individual dataloaders.
type Loaders struct {
	// individual loaders will be defined here
}

func newLoaders(ctx context.Context, db *sqlx.DB, usr *models.User) *Loaders {
	return &Loaders{
		// individual loaders will be initialized here

	}
}

// Retriever retrieves dataloaders from the request context.
type Retriever interface {
	Retrieve(context.Context) *Loaders
}

type retriever struct {
	key contextKey
}

func (r *retriever) Retrieve(ctx context.Context) *Loaders {
	return ctx.Value(r.key).(*Loaders)
}

// NewRetriever instantiates a new implementation of Retriever.
func NewRetriever() Retriever {
	return &retriever{key: key}
}

//Region dataloader_script
//go run github.com/vektah/dataloaden DoctypesByDoctypeGroupIDLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/doctypes.Doctype'
//go run github.com/vektah/dataloaden EntitiesByEntitiesIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/Entities.Entities'
//go run github.com/vektah/dataloaden EntitiesByEntitiesIDLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/Entities.Entities'
//go run github.com/vektah/dataloaden DatasetByAttributesIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/datasets.Dataset'
//go run github.com/vektah/dataloaden EntitiesByDoctypesIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/Entities.Entities'
//go run github.com/vektah/dataloaden RolesAllowByRoleIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/auth/roles_allow.RolesAllow'
//go run github.com/vektah/dataloaden RolesDatesDisallowedsByRoleIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/auth/roles_dates_disalloweds.RolesDateDisallowed'
//go run github.com/vektah/dataloaden RolesPasswordPolicyByIDsLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/auth/roles_password_policy.RolesPasswordPolicy'
//go run github.com/vektah/dataloaden AutofillsByAutofillsIDsLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/autofills.Autofills'
//go run github.com/vektah/dataloaden AttributesByAttributesIDsLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/entities_attributes.Attribute'
//go run github.com/vektah/dataloaden DoctypeByRoleIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/doctypes.Doctype'
//go run github.com/vektah/dataloaden ElementsByRoleIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/auth/elements.Element'
//go run github.com/vektah/dataloaden ProjectsByRoleIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/customers_projects.Project'
//go run github.com/vektah/dataloaden SecurityEntitiesByRoleIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/auth/roles_security_entities.RolesSecurityEntity'
//go run github.com/vektah/dataloaden SecurityEntitiesAttributesByRoleIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/auth/roles_security_entities_attributes.RolesAttribute'
//go run github.com/vektah/dataloaden DoctypesByDoctypeIDsLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/doctypes.Doctype'
//go run github.com/vektah/dataloaden UserByUserIDsLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/auth/users.User'
//go run github.com/vektah/dataloaden VersionsByDocumentsIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/doc/versions.Versions'
//go run github.com/vektah/dataloaden PagesByVersionsIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/doc/pages.Pages'
//go run github.com/vektah/dataloaden StorageByStorageIDsLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/storages.Storage'
//go run github.com/vektah/dataloaden DoctypesByStorageIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/doctypes.Doctype'
//go run github.com/vektah/dataloaden EntitiesValuesByDocumentsIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/doc/entities_values.EntityValue'
//go run github.com/vektah/dataloaden DoctypesFormatByDoctypeGroupIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/doctypes.Doctype'
//go run github.com/vektah/dataloaden DoctypesByProcessIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/doctypes.Doctype'
//go run github.com/vektah/dataloaden RolesByProcessIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/auth/roles.Role'
//go run github.com/vektah/dataloaden QueuesByProcessIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/queues.Queue'
//go run github.com/vektah/dataloaden RoleByRoleIDsLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/auth/roles.Role'
//go run github.com/vektah/dataloaden DoctypeByDoctypeIDsLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/doctypes.Doctype'
//go run github.com/vektah/dataloaden ProcessDoctypeByProcessIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/process_doctypes.ProcessDoctype'
//go run github.com/vektah/dataloaden ProcessRoleByProcessIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/process_roles.ProcessRole'
//go run github.com/vektah/dataloaden EntityByEntitiesIDsLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/entities.Entities'
//go run github.com/vektah/dataloaden RolesDoctypesByRolesIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/auth/roles_doctypes.RolesDoctype'
//go run github.com/vektah/dataloaden RolesElementsByRolesIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/auth/roles_elements.RolesElement'
//go run github.com/vektah/dataloaden RolesProjectsByRolesIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/auth/roles_projects.RolesProject'
//go run github.com/vektah/dataloaden ElementByElementsIDsLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/auth/elements.Element'
//go run github.com/vektah/dataloaden ProjectByProjectIDsLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/customers_projects.Project'
//go run github.com/vektah/dataloaden QueuesCommentsByQueueIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/queues_comments.QueueComment'
//go run github.com/vektah/dataloaden QueuesAttributesByQueueIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/queues_attributes.QueueAttribute'
//go run github.com/vektah/dataloaden ExecutionsByQueueIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/executions.Execution'
//go run github.com/vektah/dataloaden QueuesRolesByQueueIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/queues_roles.QueueRole'
//go run github.com/vektah/dataloaden ExecutionRolesByExecutionIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/executions_roles.ExecutionRole'
//go run github.com/vektah/dataloaden RulesByExecutionIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/rules.Rule'
//go run github.com/vektah/dataloaden RuleParamsByRuleIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/rules_params.RuleParam'
//go run github.com/vektah/dataloaden DocumentsByIDsLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/doc/documents.Documents'
//go run github.com/vektah/dataloaden PagesByIDsLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/doc/pages.Pages'
//go run github.com/vektah/dataloaden QueueByIDsLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/queues.Queue'
//go run github.com/vektah/dataloaden ProcessByIDsLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/process.Process'
//go run github.com/vektah/dataloaden TokensByIDsLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/process/tokens.Tokens'
//go run github.com/vektah/dataloaden ExecutionByIDsLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/executions.Execution'
//go run github.com/vektah/dataloaden EntitiesAttributesAutofillByAttributeIDsLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/entities_attributes_autofills.AttributeAutofill'
//go run github.com/vektah/dataloaden EntitiesAttributesCascadingDatasetByAttributeIDsLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/entities_attributes_cascading_dataset.AttributeCascadingDataset'
//go run github.com/vektah/dataloaden DatasetByIDsLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/datasets.Dataset'
//go run github.com/vektah/dataloaden CascadingDatasetByIDsLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/cascading_datasets.CascadingDatasets'
//go run github.com/vektah/dataloaden RoleByUserIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/auth/roles.Role'
//go run github.com/vektah/dataloaden SecurityEntitiesByUserIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/auth/users_security_entities.UsersSecurityEntity'
//go run github.com/vektah/dataloaden SecurityEntitiesAttributesByUSEIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/auth/users_security_entities_attributes.UsersAttribute'
//go run github.com/vektah/dataloaden GetLoggedUsersByIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/auth/users_loggeds.LoggedUsers'
//go run github.com/vektah/dataloaden ModulesComponentsByRoleLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/auth/components.Component'
//go run github.com/vektah/dataloaden ModulesElementsByRoleLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/auth/elements.Element'
//go run github.com/vektah/dataloaden DoctypesEntitiesBYDoctypesIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/doctypes_entities.DoctypeEntities'
//go run github.com/vektah/dataloaden EntityByDoctypesIDsLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/Entities.Entities'
//go run github.com/vektah/dataloaden TimerByExecutionIDsLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/timers.Timer'
//go run github.com/vektah/dataloaden TxTokensByIDsLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/transactions/tx_tokens.TxTokens'
//go run github.com/vektah/dataloaden RuleByIDsLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/rules.Rule'
//go run github.com/vektah/dataloaden ActivityByIDsLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/activities.Activity'

//go run github.com/vektah/dataloaden EntitiesAttributesByAttributeIDsLoader string '*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/config/entities_attributes.Attribute'

//go run github.com/vektah/dataloaden AttributesValueByIDsLoader string '[]*gitlab.com/e-capture/ecatch-bpm/ecatch-engine/pkg/doc/entities_values.AttributesValue'

//endRegion
