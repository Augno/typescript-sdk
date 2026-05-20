# AI

Types:

- <code><a href="./src/resources/ai/ai.ts">AvailableTool</a></code>
- <code><a href="./src/resources/ai/ai.ts">ToolGroup</a></code>
- <code><a href="./src/resources/ai/ai.ts">AIListToolGroupsResponse</a></code>
- <code><a href="./src/resources/ai/ai.ts">AIListToolsResponse</a></code>
- <code><a href="./src/resources/ai/ai.ts">AIListUsageResponse</a></code>

Methods:

- <code title="get /v1/ai/tool-groups">client.ai.<a href="./src/resources/ai/ai.ts">listToolGroups</a>({ ...params }) -> AIListToolGroupsResponse</code>
- <code title="get /v1/ai/tools">client.ai.<a href="./src/resources/ai/ai.ts">listTools</a>({ ...params }) -> AIListToolsResponse</code>
- <code title="get /v1/ai/usage">client.ai.<a href="./src/resources/ai/ai.ts">listUsage</a>({ ...params }) -> AIListUsageResponsesDefaultCursorPage</code>

## Agents

Types:

- <code><a href="./src/resources/ai/agents.ts">AgentDefinition</a></code>
- <code><a href="./src/resources/ai/agents.ts">AgentDefinitionConfig</a></code>
- <code><a href="./src/resources/ai/agents.ts">LightRole</a></code>
- <code><a href="./src/resources/ai/agents.ts">PageInfo</a></code>
- <code><a href="./src/resources/ai/agents.ts">ToolInput</a></code>
- <code><a href="./src/resources/ai/agents.ts">AgentListResponse</a></code>
- <code><a href="./src/resources/ai/agents.ts">AgentDeleteResponse</a></code>

Methods:

- <code title="post /v1/ai/agents">client.ai.agents.<a href="./src/resources/ai/agents.ts">create</a>({ ...params }) -> AgentDefinition</code>
- <code title="get /v1/ai/agents/{id}">client.ai.agents.<a href="./src/resources/ai/agents.ts">retrieve</a>(id, { ...params }) -> AgentDefinition</code>
- <code title="put /v1/ai/agents/{id}">client.ai.agents.<a href="./src/resources/ai/agents.ts">update</a>(id, { ...params }) -> AgentDefinition</code>
- <code title="get /v1/ai/agents">client.ai.agents.<a href="./src/resources/ai/agents.ts">list</a>({ ...params }) -> AgentListResponse</code>
- <code title="delete /v1/ai/agents/{id}">client.ai.agents.<a href="./src/resources/ai/agents.ts">delete</a>(id) -> AgentDeleteResponse</code>
- <code title="put /v1/ai/agents/{id}/status">client.ai.agents.<a href="./src/resources/ai/agents.ts">updateStatus</a>(id, { ...params }) -> AgentDefinition</code>

## Alerts

Types:

- <code><a href="./src/resources/ai/alerts/alerts.ts">AgentAction</a></code>
- <code><a href="./src/resources/ai/alerts/alerts.ts">AgentAlert</a></code>
- <code><a href="./src/resources/ai/alerts/alerts.ts">LightActor</a></code>

Methods:

- <code title="get /v1/ai/alerts/{id}">client.ai.alerts.<a href="./src/resources/ai/alerts/alerts.ts">retrieve</a>(id, { ...params }) -> AgentAlert</code>
- <code title="get /v1/ai/alerts">client.ai.alerts.<a href="./src/resources/ai/alerts/alerts.ts">list</a>({ ...params }) -> AgentAlertsDefaultCursorPage</code>

### Actions

Methods:

- <code title="post /v1/ai/alerts/{id}/actions/acknowledge">client.ai.alerts.actions.<a href="./src/resources/ai/alerts/actions.ts">acknowledge</a>(id, { ...params }) -> AgentAlert</code>

## Memories

Types:

- <code><a href="./src/resources/ai/memories.ts">AgentMemory</a></code>
- <code><a href="./src/resources/ai/memories.ts">Entity</a></code>
- <code><a href="./src/resources/ai/memories.ts">MemoryDeleteResponse</a></code>

Methods:

- <code title="post /v1/ai/memories">client.ai.memories.<a href="./src/resources/ai/memories.ts">create</a>({ ...params }) -> AgentMemory</code>
- <code title="get /v1/ai/memories/{id}">client.ai.memories.<a href="./src/resources/ai/memories.ts">retrieve</a>(id) -> AgentMemory</code>
- <code title="patch /v1/ai/memories/{id}">client.ai.memories.<a href="./src/resources/ai/memories.ts">update</a>(id, { ...params }) -> AgentMemory</code>
- <code title="get /v1/ai/memories">client.ai.memories.<a href="./src/resources/ai/memories.ts">list</a>({ ...params }) -> AgentMemoriesDefaultCursorPage</code>
- <code title="delete /v1/ai/memories/{id}">client.ai.memories.<a href="./src/resources/ai/memories.ts">delete</a>(id) -> MemoryDeleteResponse</code>

## Runs

Types:

- <code><a href="./src/resources/ai/runs/runs.ts">AgentRun</a></code>

Methods:

- <code title="get /v1/ai/runs/{id}">client.ai.runs.<a href="./src/resources/ai/runs/runs.ts">retrieve</a>(id, { ...params }) -> AgentRun</code>
- <code title="get /v1/ai/runs">client.ai.runs.<a href="./src/resources/ai/runs/runs.ts">list</a>({ ...params }) -> AgentRunsDefaultCursorPage</code>
- <code title="post /v1/ai/runs">client.ai.runs.<a href="./src/resources/ai/runs/runs.ts">trigger</a>({ ...params }) -> AgentRun</code>

### Actions

Methods:

- <code title="post /v1/ai/runs/{id}/actions/cancel">client.ai.runs.actions.<a href="./src/resources/ai/runs/actions.ts">cancel</a>(id, { ...params }) -> AgentRun</code>
- <code title="post /v1/ai/runs/{id}/actions/continue">client.ai.runs.actions.<a href="./src/resources/ai/runs/actions.ts">continue</a>(id, { ...params }) -> AgentRun</code>

# Auth

## APIKeys

Types:

- <code><a href="./src/resources/auth/api-keys/api-keys.ts">APIKey</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">CreatedAPIKey</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">APIKeyListResponse</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">APIKeyRevokeResponse</a></code>

Methods:

- <code title="post /v1/auth/api-keys">client.auth.apiKeys.<a href="./src/resources/auth/api-keys/api-keys.ts">create</a>({ ...params }) -> CreatedAPIKey</code>
- <code title="get /v1/auth/api-keys/{id}">client.auth.apiKeys.<a href="./src/resources/auth/api-keys/api-keys.ts">retrieve</a>(id, { ...params }) -> APIKey</code>
- <code title="get /v1/auth/api-keys">client.auth.apiKeys.<a href="./src/resources/auth/api-keys/api-keys.ts">list</a>({ ...params }) -> APIKeyListResponse</code>
- <code title="delete /v1/auth/api-keys/{id}">client.auth.apiKeys.<a href="./src/resources/auth/api-keys/api-keys.ts">revoke</a>(id) -> APIKeyRevokeResponse</code>

### Actions

Methods:

- <code title="post /v1/auth/api-keys/{id}/actions/rotate">client.auth.apiKeys.actions.<a href="./src/resources/auth/api-keys/actions.ts">rotate</a>(id, { ...params }) -> CreatedAPIKey</code>

# Core

Types:

- <code><a href="./src/resources/core/core.ts">CoreListAdjustmentTypesResponse</a></code>

Methods:

- <code title="get /v1/core/adjustment-types">client.core.<a href="./src/resources/core/core.ts">listAdjustmentTypes</a>() -> CoreListAdjustmentTypesResponse</code>

## AccountGroups

Types:

- <code><a href="./src/resources/core/account-groups.ts">AccountGroup</a></code>
- <code><a href="./src/resources/core/account-groups.ts">AccountGroupListResponse</a></code>
- <code><a href="./src/resources/core/account-groups.ts">AccountGroupDeleteResponse</a></code>

Methods:

- <code title="post /v1/core/account-groups">client.core.accountGroups.<a href="./src/resources/core/account-groups.ts">create</a>({ ...params }) -> AccountGroup</code>
- <code title="get /v1/core/account-groups/{id}">client.core.accountGroups.<a href="./src/resources/core/account-groups.ts">retrieve</a>(id) -> AccountGroup</code>
- <code title="patch /v1/core/account-groups/{id}">client.core.accountGroups.<a href="./src/resources/core/account-groups.ts">update</a>(id, { ...params }) -> AccountGroup</code>
- <code title="get /v1/core/account-groups">client.core.accountGroups.<a href="./src/resources/core/account-groups.ts">list</a>({ ...params }) -> AccountGroupListResponse</code>
- <code title="delete /v1/core/account-groups/{id}">client.core.accountGroups.<a href="./src/resources/core/account-groups.ts">delete</a>(id) -> AccountGroupDeleteResponse</code>

## AccountPrices

Types:

- <code><a href="./src/resources/core/account-prices.ts">AccountPrice</a></code>
- <code><a href="./src/resources/core/account-prices.ts">LightAccount</a></code>
- <code><a href="./src/resources/core/account-prices.ts">LightAttribute</a></code>
- <code><a href="./src/resources/core/account-prices.ts">LightItemCategory</a></code>
- <code><a href="./src/resources/core/account-prices.ts">LightProductLine</a></code>
- <code><a href="./src/resources/core/account-prices.ts">AccountPriceListResponse</a></code>
- <code><a href="./src/resources/core/account-prices.ts">AccountPriceDeleteResponse</a></code>

Methods:

- <code title="post /v1/core/account-prices">client.core.accountPrices.<a href="./src/resources/core/account-prices.ts">create</a>({ ...params }) -> AccountPrice</code>
- <code title="get /v1/core/account-prices/{id}">client.core.accountPrices.<a href="./src/resources/core/account-prices.ts">retrieve</a>(id, { ...params }) -> AccountPrice</code>
- <code title="patch /v1/core/account-prices/{id}">client.core.accountPrices.<a href="./src/resources/core/account-prices.ts">update</a>(id, { ...params }) -> AccountPrice</code>
- <code title="get /v1/core/account-prices">client.core.accountPrices.<a href="./src/resources/core/account-prices.ts">list</a>({ ...params }) -> AccountPriceListResponse</code>
- <code title="delete /v1/core/account-prices/{id}">client.core.accountPrices.<a href="./src/resources/core/account-prices.ts">delete</a>(id) -> AccountPriceDeleteResponse</code>

## AccountStatuses

Types:

- <code><a href="./src/resources/core/account-statuses.ts">AccountStatus</a></code>
- <code><a href="./src/resources/core/account-statuses.ts">AccountStatusListResponse</a></code>

Methods:

- <code title="get /v1/core/account-statuses/{id}">client.core.accountStatuses.<a href="./src/resources/core/account-statuses.ts">retrieve</a>(id) -> AccountStatus</code>
- <code title="get /v1/core/account-statuses">client.core.accountStatuses.<a href="./src/resources/core/account-statuses.ts">list</a>() -> AccountStatusListResponse</code>

## AccountUsers

Types:

- <code><a href="./src/resources/core/account-users/account-users.ts">AccountUser</a></code>
- <code><a href="./src/resources/core/account-users/account-users.ts">AccountUserListResponse</a></code>
- <code><a href="./src/resources/core/account-users/account-users.ts">AccountUserDeleteResponse</a></code>
- <code><a href="./src/resources/core/account-users/account-users.ts">AccountUserLockResponse</a></code>
- <code><a href="./src/resources/core/account-users/account-users.ts">AccountUserRestoreResponse</a></code>
- <code><a href="./src/resources/core/account-users/account-users.ts">AccountUserUnlockResponse</a></code>
- <code><a href="./src/resources/core/account-users/account-users.ts">AccountUserUpdatePasswordResponse</a></code>

Methods:

- <code title="post /v1/core/account-users">client.core.accountUsers.<a href="./src/resources/core/account-users/account-users.ts">create</a>({ ...params }) -> AccountUser</code>
- <code title="get /v1/core/account-users/{id}">client.core.accountUsers.<a href="./src/resources/core/account-users/account-users.ts">retrieve</a>(id, { ...params }) -> AccountUser</code>
- <code title="patch /v1/core/account-users/{id}">client.core.accountUsers.<a href="./src/resources/core/account-users/account-users.ts">update</a>(id, { ...params }) -> AccountUser</code>
- <code title="get /v1/core/account-users">client.core.accountUsers.<a href="./src/resources/core/account-users/account-users.ts">list</a>({ ...params }) -> AccountUserListResponse</code>
- <code title="delete /v1/core/account-users/{id}">client.core.accountUsers.<a href="./src/resources/core/account-users/account-users.ts">delete</a>(id) -> AccountUserDeleteResponse</code>
- <code title="post /v1/core/account-users/{id}/lock">client.core.accountUsers.<a href="./src/resources/core/account-users/account-users.ts">lock</a>(id) -> AccountUserLockResponse</code>
- <code title="post /v1/core/account-users/{id}/restore">client.core.accountUsers.<a href="./src/resources/core/account-users/account-users.ts">restore</a>(id) -> AccountUserRestoreResponse</code>
- <code title="post /v1/core/account-users/{id}/unlock">client.core.accountUsers.<a href="./src/resources/core/account-users/account-users.ts">unlock</a>(id) -> AccountUserUnlockResponse</code>
- <code title="put /v1/core/account-users/{id}/notification-preferences">client.core.accountUsers.<a href="./src/resources/core/account-users/account-users.ts">updateNotificationPreferences</a>(id, { ...params }) -> AccountUser</code>
- <code title="put /v1/core/account-users/{id}/password">client.core.accountUsers.<a href="./src/resources/core/account-users/account-users.ts">updatePassword</a>(id, { ...params }) -> AccountUserUpdatePasswordResponse</code>

### SalesTargets

Types:

- <code><a href="./src/resources/core/account-users/sales-targets.ts">Quantity</a></code>
- <code><a href="./src/resources/core/account-users/sales-targets.ts">SalesTarget</a></code>
- <code><a href="./src/resources/core/account-users/sales-targets.ts">SalesTargetListResponse</a></code>

Methods:

- <code title="post /v1/core/account-users/{id}/sales-targets">client.core.accountUsers.salesTargets.<a href="./src/resources/core/account-users/sales-targets.ts">create</a>(id, { ...params }) -> SalesTarget</code>
- <code title="get /v1/core/account-users/{id}/sales-targets">client.core.accountUsers.salesTargets.<a href="./src/resources/core/account-users/sales-targets.ts">list</a>(id, { ...params }) -> SalesTargetListResponse</code>
- <code title="put /v1/core/account-users/{id}/sales-targets/{target_id}">client.core.accountUsers.salesTargets.<a href="./src/resources/core/account-users/sales-targets.ts">upsert</a>(targetID, { ...params }) -> SalesTarget</code>

## Accounts

Types:

- <code><a href="./src/resources/core/accounts/accounts.ts">Account</a></code>
- <code><a href="./src/resources/core/accounts/accounts.ts">AccountGetLogoURLResponse</a></code>
- <code><a href="./src/resources/core/accounts/accounts.ts">AccountRetrieveBySlugResponse</a></code>
- <code><a href="./src/resources/core/accounts/accounts.ts">AccountUploadPhotoResponse</a></code>

Methods:

- <code title="get /v1/core/accounts/{id}">client.core.accounts.<a href="./src/resources/core/accounts/accounts.ts">retrieve</a>(id, { ...params }) -> Account</code>
- <code title="patch /v1/core/accounts/{id}">client.core.accounts.<a href="./src/resources/core/accounts/accounts.ts">update</a>(id, { ...params }) -> Account</code>
- <code title="get /v1/core/accounts/{id}/logo">client.core.accounts.<a href="./src/resources/core/accounts/accounts.ts">getLogoURL</a>(id) -> AccountGetLogoURLResponse</code>
- <code title="get /v1/core/accounts/slug/{slug}">client.core.accounts.<a href="./src/resources/core/accounts/accounts.ts">retrieveBySlug</a>(slug) -> AccountRetrieveBySlugResponse</code>
- <code title="put /v1/core/accounts/{id}/photo">client.core.accounts.<a href="./src/resources/core/accounts/accounts.ts">uploadPhoto</a>(id) -> AccountUploadPhotoResponse</code>

### Addresses

Types:

- <code><a href="./src/resources/core/accounts/addresses.ts">Address</a></code>
- <code><a href="./src/resources/core/accounts/addresses.ts">AddressListResponse</a></code>
- <code><a href="./src/resources/core/accounts/addresses.ts">AddressDeleteResponse</a></code>

Methods:

- <code title="post /v1/core/accounts/{account_id}/addresses">client.core.accounts.addresses.<a href="./src/resources/core/accounts/addresses.ts">create</a>(accountID, { ...params }) -> Address</code>
- <code title="get /v1/core/accounts/{account_id}/addresses/{id}">client.core.accounts.addresses.<a href="./src/resources/core/accounts/addresses.ts">retrieve</a>(id, { ...params }) -> Address</code>
- <code title="patch /v1/core/accounts/{account_id}/addresses/{id}">client.core.accounts.addresses.<a href="./src/resources/core/accounts/addresses.ts">update</a>(id, { ...params }) -> Address</code>
- <code title="get /v1/core/accounts/{account_id}/addresses">client.core.accounts.addresses.<a href="./src/resources/core/accounts/addresses.ts">list</a>(accountID) -> AddressListResponse</code>
- <code title="delete /v1/core/accounts/{account_id}/addresses/{id}">client.core.accounts.addresses.<a href="./src/resources/core/accounts/addresses.ts">delete</a>(id, { ...params }) -> AddressDeleteResponse</code>

## Addresses

Types:

- <code><a href="./src/resources/core/addresses.ts">AddressComponents</a></code>
- <code><a href="./src/resources/core/addresses.ts">AddressAutocompleteResponse</a></code>
- <code><a href="./src/resources/core/addresses.ts">AddressGetDetailsResponse</a></code>
- <code><a href="./src/resources/core/addresses.ts">AddressValidateResponse</a></code>

Methods:

- <code title="get /v1/core/addresses/autocomplete">client.core.addresses.<a href="./src/resources/core/addresses.ts">autocomplete</a>({ ...params }) -> AddressAutocompleteResponse</code>
- <code title="get /v1/core/addresses/details/{id}">client.core.addresses.<a href="./src/resources/core/addresses.ts">getDetails</a>(id, { ...params }) -> AddressGetDetailsResponse</code>
- <code title="post /v1/core/addresses/validate">client.core.addresses.<a href="./src/resources/core/addresses.ts">validate</a>({ ...params }) -> AddressValidateResponse</code>

## Carriers

Types:

- <code><a href="./src/resources/core/carriers/carriers.ts">Carrier</a></code>
- <code><a href="./src/resources/core/carriers/carriers.ts">CarrierListResponse</a></code>
- <code><a href="./src/resources/core/carriers/carriers.ts">CarrierDeleteResponse</a></code>
- <code><a href="./src/resources/core/carriers/carriers.ts">CarrierGetOAuthStatusResponse</a></code>

Methods:

- <code title="post /v1/core/carriers">client.core.carriers.<a href="./src/resources/core/carriers/carriers.ts">create</a>({ ...params }) -> Carrier</code>
- <code title="get /v1/core/carriers/{id}">client.core.carriers.<a href="./src/resources/core/carriers/carriers.ts">retrieve</a>(id, { ...params }) -> Carrier</code>
- <code title="patch /v1/core/carriers/{id}">client.core.carriers.<a href="./src/resources/core/carriers/carriers.ts">update</a>(id, { ...params }) -> Carrier</code>
- <code title="get /v1/core/carriers">client.core.carriers.<a href="./src/resources/core/carriers/carriers.ts">list</a>({ ...params }) -> CarrierListResponse</code>
- <code title="delete /v1/core/carriers/{id}">client.core.carriers.<a href="./src/resources/core/carriers/carriers.ts">delete</a>(id) -> CarrierDeleteResponse</code>
- <code title="get /v1/core/carriers/{id}/oauth-status">client.core.carriers.<a href="./src/resources/core/carriers/carriers.ts">getOAuthStatus</a>(id) -> CarrierGetOAuthStatusResponse</code>

### Options

Types:

- <code><a href="./src/resources/core/carriers/options.ts">CarrierOption</a></code>
- <code><a href="./src/resources/core/carriers/options.ts">OptionListResponse</a></code>
- <code><a href="./src/resources/core/carriers/options.ts">OptionDeleteResponse</a></code>

Methods:

- <code title="post /v1/core/carriers/{carrier_id}/options">client.core.carriers.options.<a href="./src/resources/core/carriers/options.ts">create</a>(carrierID, { ...params }) -> CarrierOption</code>
- <code title="get /v1/core/carriers/{carrier_id}/options/{id}">client.core.carriers.options.<a href="./src/resources/core/carriers/options.ts">retrieve</a>(id, { ...params }) -> CarrierOption</code>
- <code title="patch /v1/core/carriers/{carrier_id}/options/{id}">client.core.carriers.options.<a href="./src/resources/core/carriers/options.ts">update</a>(id, { ...params }) -> CarrierOption</code>
- <code title="get /v1/core/carriers/{carrier_id}/options">client.core.carriers.options.<a href="./src/resources/core/carriers/options.ts">list</a>(carrierID) -> OptionListResponse</code>
- <code title="delete /v1/core/carriers/{carrier_id}/options/{id}">client.core.carriers.options.<a href="./src/resources/core/carriers/options.ts">delete</a>(id, { ...params }) -> OptionDeleteResponse</code>

### Actions

Types:

- <code><a href="./src/resources/core/carriers/actions.ts">ActionInitiateOAuthResponse</a></code>

Methods:

- <code title="post /v1/core/carriers/{id}/actions/initiate-oauth">client.core.carriers.actions.<a href="./src/resources/core/carriers/actions.ts">initiateOAuth</a>(id, { ...params }) -> ActionInitiateOAuthResponse</code>
- <code title="post /v1/core/carriers/{id}/actions/sync-options">client.core.carriers.actions.<a href="./src/resources/core/carriers/actions.ts">syncOptions</a>(id) -> Carrier</code>

## ChildAccounts

Types:

- <code><a href="./src/resources/core/child-accounts.ts">ChildAccount</a></code>
- <code><a href="./src/resources/core/child-accounts.ts">ChildAccountListResponse</a></code>
- <code><a href="./src/resources/core/child-accounts.ts">ChildAccountRemoveResponse</a></code>

Methods:

- <code title="get /v1/core/child-accounts">client.core.childAccounts.<a href="./src/resources/core/child-accounts.ts">list</a>() -> ChildAccountListResponse</code>
- <code title="put /v1/core/child-accounts/{child_account_id}">client.core.childAccounts.<a href="./src/resources/core/child-accounts.ts">add</a>(childAccountID) -> ChildAccount</code>
- <code title="delete /v1/core/child-accounts/{child_account_id}">client.core.childAccounts.<a href="./src/resources/core/child-accounts.ts">remove</a>(childAccountID) -> ChildAccountRemoveResponse</code>

## Integrations

Types:

- <code><a href="./src/resources/core/integrations/integrations.ts">AccountIntegration</a></code>
- <code><a href="./src/resources/core/integrations/integrations.ts">IntegrationListResponse</a></code>

Methods:

- <code title="post /v1/core/integrations">client.core.integrations.<a href="./src/resources/core/integrations/integrations.ts">create</a>({ ...params }) -> AccountIntegration</code>
- <code title="put /v1/core/integrations/{id}">client.core.integrations.<a href="./src/resources/core/integrations/integrations.ts">update</a>(id, { ...params }) -> AccountIntegration</code>
- <code title="get /v1/core/integrations">client.core.integrations.<a href="./src/resources/core/integrations/integrations.ts">list</a>() -> IntegrationListResponse</code>
- <code title="delete /v1/core/integrations/{id}">client.core.integrations.<a href="./src/resources/core/integrations/integrations.ts">delete</a>(id) -> AccountIntegration</code>

### Stripe

Types:

- <code><a href="./src/resources/core/integrations/stripe.ts">StripeGetPublishableKeyResponse</a></code>
- <code><a href="./src/resources/core/integrations/stripe.ts">StripeGetStatusResponse</a></code>

Methods:

- <code title="get /v1/core/integrations/stripe/publishable-key">client.core.integrations.stripe.<a href="./src/resources/core/integrations/stripe.ts">getPublishableKey</a>() -> StripeGetPublishableKeyResponse</code>
- <code title="get /v1/core/integrations/stripe/status">client.core.integrations.stripe.<a href="./src/resources/core/integrations/stripe.ts">getStatus</a>() -> StripeGetStatusResponse</code>

## Items

Types:

- <code><a href="./src/resources/core/items/items.ts">Item</a></code>
- <code><a href="./src/resources/core/items/items.ts">LightRate</a></code>
- <code><a href="./src/resources/core/items/items.ts">LightUnit</a></code>
- <code><a href="./src/resources/core/items/items.ts">QuantityInfo</a></code>
- <code><a href="./src/resources/core/items/items.ts">ItemListResponse</a></code>
- <code><a href="./src/resources/core/items/items.ts">ItemGetCostsResponse</a></code>
- <code><a href="./src/resources/core/items/items.ts">ItemGetInventoryResponse</a></code>
- <code><a href="./src/resources/core/items/items.ts">ItemGetTrendsResponse</a></code>

Methods:

- <code title="get /v1/core/items/{id}">client.core.items.<a href="./src/resources/core/items/items.ts">retrieve</a>(id, { ...params }) -> Item</code>
- <code title="get /v1/core/items">client.core.items.<a href="./src/resources/core/items/items.ts">list</a>({ ...params }) -> ItemListResponse</code>
- <code title="get /v1/core/items/{id}/costs">client.core.items.<a href="./src/resources/core/items/items.ts">getCosts</a>(id) -> ItemGetCostsResponse</code>
- <code title="get /v1/core/items/{id}/inventory">client.core.items.<a href="./src/resources/core/items/items.ts">getInventory</a>(id) -> ItemGetInventoryResponse</code>
- <code title="get /v1/core/items/{id}/trends">client.core.items.<a href="./src/resources/core/items/items.ts">getTrends</a>(id, { ...params }) -> ItemGetTrendsResponse</code>

### Actions

Types:

- <code><a href="./src/resources/core/items/actions.ts">ActionExportResponse</a></code>

Methods:

- <code title="get /v1/core/items/actions/export">client.core.items.actions.<a href="./src/resources/core/items/actions.ts">export</a>() -> ActionExportResponse</code>

## PaymentTerms

Types:

- <code><a href="./src/resources/core/payment-terms.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/core/payment-terms.ts">PaymentTermListResponse</a></code>
- <code><a href="./src/resources/core/payment-terms.ts">PaymentTermDeleteResponse</a></code>

Methods:

- <code title="post /v1/core/payment-terms">client.core.paymentTerms.<a href="./src/resources/core/payment-terms.ts">create</a>({ ...params }) -> PaymentTerm</code>
- <code title="get /v1/core/payment-terms/{id}">client.core.paymentTerms.<a href="./src/resources/core/payment-terms.ts">retrieve</a>(id) -> PaymentTerm</code>
- <code title="patch /v1/core/payment-terms/{id}">client.core.paymentTerms.<a href="./src/resources/core/payment-terms.ts">update</a>(id, { ...params }) -> PaymentTerm</code>
- <code title="get /v1/core/payment-terms">client.core.paymentTerms.<a href="./src/resources/core/payment-terms.ts">list</a>() -> PaymentTermListResponse</code>
- <code title="delete /v1/core/payment-terms/{id}">client.core.paymentTerms.<a href="./src/resources/core/payment-terms.ts">delete</a>(id) -> PaymentTermDeleteResponse</code>

## ProductLineAccess

### AccountGroups

Types:

- <code><a href="./src/resources/core/product-line-access/account-groups.ts">ProductLineAccess</a></code>
- <code><a href="./src/resources/core/product-line-access/account-groups.ts">AccountGroupListResponse</a></code>
- <code><a href="./src/resources/core/product-line-access/account-groups.ts">AccountGroupDeleteResponse</a></code>

Methods:

- <code title="post /v1/core/product-line-access/account-groups">client.core.productLineAccess.accountGroups.<a href="./src/resources/core/product-line-access/account-groups.ts">create</a>({ ...params }) -> ProductLineAccess</code>
- <code title="get /v1/core/product-line-access/account-groups/{account_group_id}">client.core.productLineAccess.accountGroups.<a href="./src/resources/core/product-line-access/account-groups.ts">retrieve</a>(accountGroupID) -> ProductLineAccess</code>
- <code title="patch /v1/core/product-line-access/account-groups/{account_group_id}">client.core.productLineAccess.accountGroups.<a href="./src/resources/core/product-line-access/account-groups.ts">update</a>(accountGroupID, { ...params }) -> ProductLineAccess</code>
- <code title="get /v1/core/product-line-access/account-groups">client.core.productLineAccess.accountGroups.<a href="./src/resources/core/product-line-access/account-groups.ts">list</a>() -> AccountGroupListResponse</code>
- <code title="delete /v1/core/product-line-access/account-groups/{account_group_id}">client.core.productLineAccess.accountGroups.<a href="./src/resources/core/product-line-access/account-groups.ts">delete</a>(accountGroupID) -> AccountGroupDeleteResponse</code>

## Properties

Types:

- <code><a href="./src/resources/core/properties/properties.ts">Property</a></code>
- <code><a href="./src/resources/core/properties/properties.ts">PropertyListResponse</a></code>
- <code><a href="./src/resources/core/properties/properties.ts">PropertyDeleteResponse</a></code>

Methods:

- <code title="post /v1/core/properties">client.core.properties.<a href="./src/resources/core/properties/properties.ts">create</a>({ ...params }) -> Property</code>
- <code title="get /v1/core/properties/{id}">client.core.properties.<a href="./src/resources/core/properties/properties.ts">retrieve</a>(id) -> Property</code>
- <code title="patch /v1/core/properties/{id}">client.core.properties.<a href="./src/resources/core/properties/properties.ts">update</a>(id, { ...params }) -> Property</code>
- <code title="get /v1/core/properties">client.core.properties.<a href="./src/resources/core/properties/properties.ts">list</a>() -> PropertyListResponse</code>
- <code title="delete /v1/core/properties/{id}">client.core.properties.<a href="./src/resources/core/properties/properties.ts">delete</a>(id) -> PropertyDeleteResponse</code>

### Attributes

Types:

- <code><a href="./src/resources/core/properties/attributes.ts">Attribute</a></code>
- <code><a href="./src/resources/core/properties/attributes.ts">AttributeListResponse</a></code>
- <code><a href="./src/resources/core/properties/attributes.ts">AttributeDeleteResponse</a></code>

Methods:

- <code title="post /v1/core/properties/{property_id}/attributes">client.core.properties.attributes.<a href="./src/resources/core/properties/attributes.ts">create</a>(propertyID, { ...params }) -> Attribute</code>
- <code title="get /v1/core/properties/{property_id}/attributes/{id}">client.core.properties.attributes.<a href="./src/resources/core/properties/attributes.ts">retrieve</a>(id, { ...params }) -> Attribute</code>
- <code title="patch /v1/core/properties/{property_id}/attributes/{id}">client.core.properties.attributes.<a href="./src/resources/core/properties/attributes.ts">update</a>(id, { ...params }) -> Attribute</code>
- <code title="get /v1/core/properties/{property_id}/attributes">client.core.properties.attributes.<a href="./src/resources/core/properties/attributes.ts">list</a>(propertyID, { ...params }) -> AttributeListResponse</code>
- <code title="delete /v1/core/properties/{property_id}/attributes/{id}">client.core.properties.attributes.<a href="./src/resources/core/properties/attributes.ts">delete</a>(id, { ...params }) -> AttributeDeleteResponse</code>

## RequestLogs

Types:

- <code><a href="./src/resources/core/request-logs.ts">RequestLogActor</a></code>
- <code><a href="./src/resources/core/request-logs.ts">RequestLogRetrieveResponse</a></code>
- <code><a href="./src/resources/core/request-logs.ts">RequestLogListResponse</a></code>

Methods:

- <code title="get /v1/core/request-logs/{id}">client.core.requestLogs.<a href="./src/resources/core/request-logs.ts">retrieve</a>(id, { ...params }) -> RequestLogRetrieveResponse</code>
- <code title="get /v1/core/request-logs">client.core.requestLogs.<a href="./src/resources/core/request-logs.ts">list</a>({ ...params }) -> RequestLogListResponsesDefaultCursorPage</code>

## Sandboxes

Types:

- <code><a href="./src/resources/core/sandboxes.ts">Sandbox</a></code>
- <code><a href="./src/resources/core/sandboxes.ts">SandboxDeleteResponse</a></code>

Methods:

- <code title="post /v1/core/sandboxes">client.core.sandboxes.<a href="./src/resources/core/sandboxes.ts">create</a>({ ...params }) -> Sandbox</code>
- <code title="get /v1/core/sandboxes/{id}">client.core.sandboxes.<a href="./src/resources/core/sandboxes.ts">retrieve</a>(id, { ...params }) -> Sandbox</code>
- <code title="get /v1/core/sandboxes">client.core.sandboxes.<a href="./src/resources/core/sandboxes.ts">list</a>({ ...params }) -> SandboxesDefaultCursorPage</code>
- <code title="delete /v1/core/sandboxes/{id}">client.core.sandboxes.<a href="./src/resources/core/sandboxes.ts">delete</a>(id) -> SandboxDeleteResponse</code>

## ShippingTerms

Types:

- <code><a href="./src/resources/core/shipping-terms.ts">QuantityInputRequest</a></code>
- <code><a href="./src/resources/core/shipping-terms.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/core/shipping-terms.ts">ShippingTermListResponse</a></code>
- <code><a href="./src/resources/core/shipping-terms.ts">ShippingTermDeleteResponse</a></code>

Methods:

- <code title="post /v1/core/shipping-terms">client.core.shippingTerms.<a href="./src/resources/core/shipping-terms.ts">create</a>({ ...params }) -> ShippingTerm</code>
- <code title="get /v1/core/shipping-terms/{id}">client.core.shippingTerms.<a href="./src/resources/core/shipping-terms.ts">retrieve</a>(id, { ...params }) -> ShippingTerm</code>
- <code title="patch /v1/core/shipping-terms/{id}">client.core.shippingTerms.<a href="./src/resources/core/shipping-terms.ts">update</a>(id, { ...params }) -> ShippingTerm</code>
- <code title="get /v1/core/shipping-terms">client.core.shippingTerms.<a href="./src/resources/core/shipping-terms.ts">list</a>({ ...params }) -> ShippingTermListResponse</code>
- <code title="delete /v1/core/shipping-terms/{id}">client.core.shippingTerms.<a href="./src/resources/core/shipping-terms.ts">delete</a>(id) -> ShippingTermDeleteResponse</code>

## Units

Types:

- <code><a href="./src/resources/core/units.ts">Unit</a></code>
- <code><a href="./src/resources/core/units.ts">UnitListResponse</a></code>
- <code><a href="./src/resources/core/units.ts">UnitDeleteResponse</a></code>

Methods:

- <code title="post /v1/core/units">client.core.units.<a href="./src/resources/core/units.ts">create</a>({ ...params }) -> Unit</code>
- <code title="get /v1/core/units/{id}">client.core.units.<a href="./src/resources/core/units.ts">retrieve</a>(id) -> Unit</code>
- <code title="patch /v1/core/units/{id}">client.core.units.<a href="./src/resources/core/units.ts">update</a>(id, { ...params }) -> Unit</code>
- <code title="get /v1/core/units">client.core.units.<a href="./src/resources/core/units.ts">list</a>({ ...params }) -> UnitListResponse</code>
- <code title="delete /v1/core/units/{id}">client.core.units.<a href="./src/resources/core/units.ts">delete</a>(id) -> UnitDeleteResponse</code>

## ItemCategories

Types:

- <code><a href="./src/resources/core/item-categories/item-categories.ts">ItemCategoryCreateResponse</a></code>
- <code><a href="./src/resources/core/item-categories/item-categories.ts">ItemCategoryRetrieveResponse</a></code>
- <code><a href="./src/resources/core/item-categories/item-categories.ts">ItemCategoryUpdateResponse</a></code>
- <code><a href="./src/resources/core/item-categories/item-categories.ts">ItemCategoryListResponse</a></code>
- <code><a href="./src/resources/core/item-categories/item-categories.ts">ItemCategoryDeleteResponse</a></code>
- <code><a href="./src/resources/core/item-categories/item-categories.ts">ItemCategoryChangeUnitGroupResponse</a></code>

Methods:

- <code title="post /v1/core/item-categories">client.core.itemCategories.<a href="./src/resources/core/item-categories/item-categories.ts">create</a>({ ...params }) -> ItemCategoryCreateResponse</code>
- <code title="get /v1/core/item-categories/{id}">client.core.itemCategories.<a href="./src/resources/core/item-categories/item-categories.ts">retrieve</a>(id, { ...params }) -> ItemCategoryRetrieveResponse</code>
- <code title="patch /v1/core/item-categories/{id}">client.core.itemCategories.<a href="./src/resources/core/item-categories/item-categories.ts">update</a>(id, { ...params }) -> ItemCategoryUpdateResponse</code>
- <code title="get /v1/core/item-categories">client.core.itemCategories.<a href="./src/resources/core/item-categories/item-categories.ts">list</a>({ ...params }) -> ItemCategoryListResponse</code>
- <code title="delete /v1/core/item-categories/{id}">client.core.itemCategories.<a href="./src/resources/core/item-categories/item-categories.ts">delete</a>(id) -> ItemCategoryDeleteResponse</code>
- <code title="put /v1/core/item-categories/{id}/unit-groups/{unit_group_id}">client.core.itemCategories.<a href="./src/resources/core/item-categories/item-categories.ts">changeUnitGroup</a>(unitGroupID, { ...params }) -> ItemCategoryChangeUnitGroupResponse</code>

### Properties

Types:

- <code><a href="./src/resources/core/item-categories/properties.ts">PropertyAddResponse</a></code>
- <code><a href="./src/resources/core/item-categories/properties.ts">PropertyRemoveResponse</a></code>

Methods:

- <code title="put /v1/core/item-categories/{id}/properties/{property_id}">client.core.itemCategories.properties.<a href="./src/resources/core/item-categories/properties.ts">add</a>(propertyID, { ...params }) -> PropertyAddResponse</code>
- <code title="delete /v1/core/item-categories/{id}/properties/{property_id}">client.core.itemCategories.properties.<a href="./src/resources/core/item-categories/properties.ts">remove</a>(propertyID, { ...params }) -> PropertyRemoveResponse</code>
