# Healthz

# AI

## Agents

Types:

- <code><a href="./src/resources/ai/agents.ts">PageInfo</a></code>

## Alerts

Types:

- <code><a href="./src/resources/ai/alerts/alerts.ts">Actor</a></code>

### Actions

## Memories

## Runs

### Actions

# Auth

## Actions

## APIKeys

Types:

- <code><a href="./src/resources/auth/api-keys/api-keys.ts">APIKey</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">CreatedAPIKey</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">APIKeyDeleteResponse</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">APIKeyRetrieveAPIKeysResponse</a></code>

Methods:

- <code title="get /v1/auth/api-keys/{id}">client.auth.apiKeys.<a href="./src/resources/auth/api-keys/api-keys.ts">retrieve</a>(id, { ...params }) -> APIKey</code>
- <code title="delete /v1/auth/api-keys/{id}">client.auth.apiKeys.<a href="./src/resources/auth/api-keys/api-keys.ts">delete</a>(id) -> APIKeyDeleteResponse</code>
- <code title="post /v1/auth/api-keys">client.auth.apiKeys.<a href="./src/resources/auth/api-keys/api-keys.ts">apiKeys</a>({ ...params }) -> CreatedAPIKey</code>
- <code title="get /v1/auth/api-keys">client.auth.apiKeys.<a href="./src/resources/auth/api-keys/api-keys.ts">retrieveAPIKeys</a>({ ...params }) -> APIKeyRetrieveAPIKeysResponse</code>

### Actions

Methods:

- <code title="post /v1/auth/api-keys/{id}/actions/rotate">client.auth.apiKeys.actions.<a href="./src/resources/auth/api-keys/actions.ts">rotate</a>(id, { ...params }) -> CreatedAPIKey</code>

## Passwords

### Actions

## RegistrationSessions

### Actions

# Billing

## Accounts

## Actions

## Plans

## SpendingCap

# Catalog

## Catalog

### ProductLines

## ItemCategories

Types:

- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">ItemCategory</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">ListItemCategory</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">Owner</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">ItemCategoryDeleteResponse</a></code>

Methods:

- <code title="get /v1/catalog/item-categories/{id}">client.catalog.itemCategories.<a href="./src/resources/catalog/item-categories/item-categories.ts">retrieve</a>(id, { ...params }) -> ItemCategory</code>
- <code title="patch /v1/catalog/item-categories/{id}">client.catalog.itemCategories.<a href="./src/resources/catalog/item-categories/item-categories.ts">update</a>(id, { ...params }) -> ItemCategory</code>
- <code title="delete /v1/catalog/item-categories/{id}">client.catalog.itemCategories.<a href="./src/resources/catalog/item-categories/item-categories.ts">delete</a>(id) -> ItemCategoryDeleteResponse</code>
- <code title="post /v1/catalog/item-categories">client.catalog.itemCategories.<a href="./src/resources/catalog/item-categories/item-categories.ts">itemCategories</a>({ ...params }) -> ItemCategory</code>
- <code title="get /v1/catalog/item-categories">client.catalog.itemCategories.<a href="./src/resources/catalog/item-categories/item-categories.ts">retrieveItemCategories</a>({ ...params }) -> ListItemCategory</code>

### Properties

Types:

- <code><a href="./src/resources/catalog/item-categories/properties.ts">PropertyUpdateResponse</a></code>
- <code><a href="./src/resources/catalog/item-categories/properties.ts">PropertyDeleteResponse</a></code>

Methods:

- <code title="put /v1/catalog/item-categories/{id}/properties/{property_id}">client.catalog.itemCategories.properties.<a href="./src/resources/catalog/item-categories/properties.ts">update</a>(propertyID, { ...params }) -> PropertyUpdateResponse</code>
- <code title="delete /v1/catalog/item-categories/{id}/properties/{property_id}">client.catalog.itemCategories.properties.<a href="./src/resources/catalog/item-categories/properties.ts">delete</a>(propertyID, { ...params }) -> PropertyDeleteResponse</code>

## Items

Types:

- <code><a href="./src/resources/catalog/items/items.ts">Item</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">ItemListResponse</a></code>

Methods:

- <code title="get /v1/catalog/items/{id}">client.catalog.items.<a href="./src/resources/catalog/items/items.ts">retrieve</a>(id, { ...params }) -> Item</code>
- <code title="put /v1/catalog/items/{id}/category/{category_id}">client.catalog.items.<a href="./src/resources/catalog/items/items.ts">update</a>(categoryID, { ...params }) -> Item</code>
- <code title="get /v1/catalog/items">client.catalog.items.<a href="./src/resources/catalog/items/items.ts">list</a>({ ...params }) -> ItemListResponse</code>

### Actions

### Attributes

Methods:

- <code title="put /v1/catalog/items/{id}/attributes/{attribute_id}">client.catalog.items.attributes.<a href="./src/resources/catalog/items/attributes.ts">update</a>(attributeID, { ...params }) -> Item</code>
- <code title="delete /v1/catalog/items/{id}/attributes/{attribute_id}">client.catalog.items.attributes.<a href="./src/resources/catalog/items/attributes.ts">delete</a>(attributeID, { ...params }) -> Item</code>

### Inventory

Types:

- <code><a href="./src/resources/catalog/items/inventory.ts">InventoryListResponse</a></code>

Methods:

- <code title="get /v1/catalog/items/{id}/inventory">client.catalog.items.inventory.<a href="./src/resources/catalog/items/inventory.ts">list</a>(id, { ...params }) -> InventoryListResponse</code>

## Materials

Types:

- <code><a href="./src/resources/catalog/materials/materials.ts">Material</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">QuantityInputRequest</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">RateInput</a></code>
- <code><a href="./src/resources/catalog/materials/materials.ts">MaterialListResponse</a></code>

Methods:

- <code title="post /v1/catalog/materials">client.catalog.materials.<a href="./src/resources/catalog/materials/materials.ts">create</a>({ ...params }) -> Material</code>
- <code title="get /v1/catalog/materials/{id}">client.catalog.materials.<a href="./src/resources/catalog/materials/materials.ts">retrieve</a>(id, { ...params }) -> Material</code>
- <code title="patch /v1/catalog/materials/{id}">client.catalog.materials.<a href="./src/resources/catalog/materials/materials.ts">update</a>(id, { ...params }) -> Material</code>
- <code title="get /v1/catalog/materials">client.catalog.materials.<a href="./src/resources/catalog/materials/materials.ts">list</a>({ ...params }) -> MaterialListResponse</code>
- <code title="delete /v1/catalog/materials/{id}">client.catalog.materials.<a href="./src/resources/catalog/materials/materials.ts">delete</a>(id) -> Material</code>

### Actions

## Parts

Types:

- <code><a href="./src/resources/catalog/parts/parts.ts">Part</a></code>
- <code><a href="./src/resources/catalog/parts/parts.ts">PartListResponse</a></code>

Methods:

- <code title="post /v1/catalog/parts">client.catalog.parts.<a href="./src/resources/catalog/parts/parts.ts">create</a>({ ...params }) -> Part</code>
- <code title="get /v1/catalog/parts/{id}">client.catalog.parts.<a href="./src/resources/catalog/parts/parts.ts">retrieve</a>(id, { ...params }) -> Part</code>
- <code title="patch /v1/catalog/parts/{id}">client.catalog.parts.<a href="./src/resources/catalog/parts/parts.ts">update</a>(id, { ...params }) -> Part</code>
- <code title="get /v1/catalog/parts">client.catalog.parts.<a href="./src/resources/catalog/parts/parts.ts">list</a>({ ...params }) -> PartListResponse</code>
- <code title="delete /v1/catalog/parts/{id}">client.catalog.parts.<a href="./src/resources/catalog/parts/parts.ts">delete</a>(id) -> Part</code>

### Actions

## ProductLines

Types:

- <code><a href="./src/resources/catalog/product-lines.ts">ListProductLine</a></code>
- <code><a href="./src/resources/catalog/product-lines.ts">ProductLine</a></code>
- <code><a href="./src/resources/catalog/product-lines.ts">ProductLineDeleteResponse</a></code>

Methods:

- <code title="get /v1/catalog/product-lines/{id}">client.catalog.productLines.<a href="./src/resources/catalog/product-lines.ts">retrieve</a>(id, { ...params }) -> ProductLine</code>
- <code title="patch /v1/catalog/product-lines/{id}">client.catalog.productLines.<a href="./src/resources/catalog/product-lines.ts">update</a>(id, { ...params }) -> ProductLine</code>
- <code title="delete /v1/catalog/product-lines/{id}">client.catalog.productLines.<a href="./src/resources/catalog/product-lines.ts">delete</a>(id) -> ProductLineDeleteResponse</code>
- <code title="post /v1/catalog/product-lines">client.catalog.productLines.<a href="./src/resources/catalog/product-lines.ts">productLines</a>({ ...params }) -> ProductLine</code>
- <code title="get /v1/catalog/product-lines">client.catalog.productLines.<a href="./src/resources/catalog/product-lines.ts">retrieveProductLines</a>({ ...params }) -> ListProductLine</code>

## ProductTypes

## Products

Types:

- <code><a href="./src/resources/catalog/products/products.ts">Product</a></code>
- <code><a href="./src/resources/catalog/products/products.ts">ProductListResponse</a></code>

Methods:

- <code title="post /v1/catalog/products">client.catalog.products.<a href="./src/resources/catalog/products/products.ts">create</a>({ ...params }) -> Product</code>
- <code title="get /v1/catalog/products/{id}">client.catalog.products.<a href="./src/resources/catalog/products/products.ts">retrieve</a>(id, { ...params }) -> Product</code>
- <code title="patch /v1/catalog/products/{id}">client.catalog.products.<a href="./src/resources/catalog/products/products.ts">update</a>(id, { ...params }) -> Product</code>
- <code title="get /v1/catalog/products">client.catalog.products.<a href="./src/resources/catalog/products/products.ts">list</a>({ ...params }) -> ProductListResponse</code>
- <code title="delete /v1/catalog/products/{id}">client.catalog.products.<a href="./src/resources/catalog/products/products.ts">delete</a>(id, { ...params }) -> Product</code>

### Actions

## Properties

Types:

- <code><a href="./src/resources/catalog/properties/properties.ts">ListProperty</a></code>
- <code><a href="./src/resources/catalog/properties/properties.ts">Property</a></code>
- <code><a href="./src/resources/catalog/properties/properties.ts">PropertyDeleteResponse</a></code>

Methods:

- <code title="post /v1/catalog/properties">client.catalog.properties.<a href="./src/resources/catalog/properties/properties.ts">create</a>({ ...params }) -> Property</code>
- <code title="get /v1/catalog/properties/{id}">client.catalog.properties.<a href="./src/resources/catalog/properties/properties.ts">retrieve</a>(id, { ...params }) -> Property</code>
- <code title="patch /v1/catalog/properties/{id}">client.catalog.properties.<a href="./src/resources/catalog/properties/properties.ts">update</a>(id, { ...params }) -> Property</code>
- <code title="get /v1/catalog/properties">client.catalog.properties.<a href="./src/resources/catalog/properties/properties.ts">list</a>({ ...params }) -> ListProperty</code>
- <code title="delete /v1/catalog/properties/{id}">client.catalog.properties.<a href="./src/resources/catalog/properties/properties.ts">delete</a>(id) -> PropertyDeleteResponse</code>

### Attributes

Types:

- <code><a href="./src/resources/catalog/properties/attributes.ts">Attribute</a></code>
- <code><a href="./src/resources/catalog/properties/attributes.ts">ListAttribute</a></code>
- <code><a href="./src/resources/catalog/properties/attributes.ts">AttributeDeleteResponse</a></code>

Methods:

- <code title="post /v1/catalog/properties/{property_id}/attributes">client.catalog.properties.attributes.<a href="./src/resources/catalog/properties/attributes.ts">create</a>(propertyID, { ...params }) -> Attribute</code>
- <code title="get /v1/catalog/properties/{property_id}/attributes/{id}">client.catalog.properties.attributes.<a href="./src/resources/catalog/properties/attributes.ts">retrieve</a>(id, { ...params }) -> Attribute</code>
- <code title="patch /v1/catalog/properties/{property_id}/attributes/{id}">client.catalog.properties.attributes.<a href="./src/resources/catalog/properties/attributes.ts">update</a>(id, { ...params }) -> Attribute</code>
- <code title="get /v1/catalog/properties/{property_id}/attributes">client.catalog.properties.attributes.<a href="./src/resources/catalog/properties/attributes.ts">list</a>(propertyID, { ...params }) -> ListAttribute</code>
- <code title="delete /v1/catalog/properties/{property_id}/attributes/{id}">client.catalog.properties.attributes.<a href="./src/resources/catalog/properties/attributes.ts">delete</a>(id, { ...params }) -> AttributeDeleteResponse</code>

## UnitGroups

Types:

- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">CreateUnitGroupUnitParam</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">UnitGroup</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">UnitGroupDeleteResponse</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">UnitGroupRetrieveUnitGroupsResponse</a></code>

Methods:

- <code title="get /v1/catalog/unit-groups/{id}">client.catalog.unitGroups.<a href="./src/resources/catalog/unit-groups/unit-groups.ts">retrieve</a>(id, { ...params }) -> UnitGroup</code>
- <code title="patch /v1/catalog/unit-groups/{id}">client.catalog.unitGroups.<a href="./src/resources/catalog/unit-groups/unit-groups.ts">update</a>(id, { ...params }) -> UnitGroup</code>
- <code title="delete /v1/catalog/unit-groups/{id}">client.catalog.unitGroups.<a href="./src/resources/catalog/unit-groups/unit-groups.ts">delete</a>(id) -> UnitGroupDeleteResponse</code>
- <code title="get /v1/catalog/unit-groups">client.catalog.unitGroups.<a href="./src/resources/catalog/unit-groups/unit-groups.ts">retrieveUnitGroups</a>({ ...params }) -> UnitGroupRetrieveUnitGroupsResponse</code>
- <code title="post /v1/catalog/unit-groups">client.catalog.unitGroups.<a href="./src/resources/catalog/unit-groups/unit-groups.ts">unitGroups</a>({ ...params }) -> UnitGroup</code>

### Units

Types:

- <code><a href="./src/resources/catalog/unit-groups/units.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/catalog/unit-groups/units.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/catalog/unit-groups/units.ts">UnitDeleteResponse</a></code>

Methods:

- <code title="post /v1/catalog/unit-groups/{unit_group_id}/units">client.catalog.unitGroups.units.<a href="./src/resources/catalog/unit-groups/units.ts">create</a>(unitGroupID, { ...params }) -> UnitGroupUnit</code>
- <code title="get /v1/catalog/unit-groups/{unit_group_id}/units/{id}">client.catalog.unitGroups.units.<a href="./src/resources/catalog/unit-groups/units.ts">retrieve</a>(id, { ...params }) -> UnitGroupUnit</code>
- <code title="patch /v1/catalog/unit-groups/{unit_group_id}/units/{id}">client.catalog.unitGroups.units.<a href="./src/resources/catalog/unit-groups/units.ts">update</a>(id, { ...params }) -> UnitGroupUnit</code>
- <code title="get /v1/catalog/unit-groups/{unit_group_id}/units">client.catalog.unitGroups.units.<a href="./src/resources/catalog/unit-groups/units.ts">list</a>(unitGroupID, { ...params }) -> ListUnitGroupUnit</code>
- <code title="delete /v1/catalog/unit-groups/{unit_group_id}/units/{id}">client.catalog.unitGroups.units.<a href="./src/resources/catalog/unit-groups/units.ts">delete</a>(id, { ...params }) -> UnitDeleteResponse</code>

## Units

Types:

- <code><a href="./src/resources/catalog/units/units.ts">ListUnit</a></code>
- <code><a href="./src/resources/catalog/units/units.ts">Unit</a></code>
- <code><a href="./src/resources/catalog/units/units.ts">UnitDeleteResponse</a></code>

Methods:

- <code title="post /v1/catalog/units">client.catalog.units.<a href="./src/resources/catalog/units/units.ts">create</a>({ ...params }) -> Unit</code>
- <code title="get /v1/catalog/units/{id}">client.catalog.units.<a href="./src/resources/catalog/units/units.ts">retrieve</a>(id, { ...params }) -> Unit</code>
- <code title="patch /v1/catalog/units/{id}">client.catalog.units.<a href="./src/resources/catalog/units/units.ts">update</a>(id, { ...params }) -> Unit</code>
- <code title="get /v1/catalog/units">client.catalog.units.<a href="./src/resources/catalog/units/units.ts">list</a>({ ...params }) -> ListUnit</code>
- <code title="delete /v1/catalog/units/{id}">client.catalog.units.<a href="./src/resources/catalog/units/units.ts">delete</a>(id) -> UnitDeleteResponse</code>

### Actions

# Core

## Actions

## Addresses

Types:

- <code><a href="./src/resources/core/addresses/addresses.ts">AddressRetrieveSuggestionsResponse</a></code>

Methods:

- <code title="get /v1/core/addresses/suggestions">client.core.addresses.<a href="./src/resources/core/addresses/addresses.ts">retrieveSuggestions</a>({ ...params }) -> AddressRetrieveSuggestionsResponse</code>

### Actions

Types:

- <code><a href="./src/resources/core/addresses/actions.ts">AddressComponents</a></code>
- <code><a href="./src/resources/core/addresses/actions.ts">ActionUpdateValidateResponse</a></code>

Methods:

- <code title="put /v1/core/addresses/actions/validate">client.core.addresses.actions.<a href="./src/resources/core/addresses/actions.ts">updateValidate</a>({ ...params }) -> ActionUpdateValidateResponse</code>

## Analytics

## AuditEvents

Types:

- <code><a href="./src/resources/core/audit-events.ts">AuditEvent</a></code>
- <code><a href="./src/resources/core/audit-events.ts">AuditEventRetrieveAuditEventsResponse</a></code>
- <code><a href="./src/resources/core/audit-events.ts">AuditEventRetrieveResourceTypesResponse</a></code>

Methods:

- <code title="get /v1/core/audit-events/{id}">client.core.auditEvents.<a href="./src/resources/core/audit-events.ts">retrieve</a>(id, { ...params }) -> AuditEvent</code>
- <code title="get /v1/core/audit-events">client.core.auditEvents.<a href="./src/resources/core/audit-events.ts">retrieveAuditEvents</a>({ ...params }) -> AuditEventRetrieveAuditEventsResponse</code>
- <code title="get /v1/core/audit-events/resource-types">client.core.auditEvents.<a href="./src/resources/core/audit-events.ts">retrieveResourceTypes</a>() -> AuditEventRetrieveResourceTypesResponse</code>

## EmailLogs

Types:

- <code><a href="./src/resources/core/email-logs.ts">EmailLog</a></code>
- <code><a href="./src/resources/core/email-logs.ts">EmailLogRetrieveEmailLogsResponse</a></code>

Methods:

- <code title="get /v1/core/email-logs/{id}">client.core.emailLogs.<a href="./src/resources/core/email-logs.ts">retrieve</a>(id, { ...params }) -> EmailLog</code>
- <code title="get /v1/core/email-logs">client.core.emailLogs.<a href="./src/resources/core/email-logs.ts">retrieveEmailLogs</a>({ ...params }) -> EmailLogRetrieveEmailLogsResponse</code>

## RequestLogs

Types:

- <code><a href="./src/resources/core/request-logs.ts">RequestLog</a></code>
- <code><a href="./src/resources/core/request-logs.ts">RequestLogRetrieveRequestLogsResponse</a></code>

Methods:

- <code title="get /v1/core/request-logs/{id}">client.core.requestLogs.<a href="./src/resources/core/request-logs.ts">retrieve</a>(id, { ...params }) -> RequestLog</code>
- <code title="get /v1/core/request-logs">client.core.requestLogs.<a href="./src/resources/core/request-logs.ts">retrieveRequestLogs</a>({ ...params }) -> RequestLogRetrieveRequestLogsResponse</code>

## Sandboxes

Types:

- <code><a href="./src/resources/core/sandboxes.ts">Sandbox</a></code>
- <code><a href="./src/resources/core/sandboxes.ts">SandboxListResponse</a></code>
- <code><a href="./src/resources/core/sandboxes.ts">SandboxDeleteResponse</a></code>

Methods:

- <code title="post /v1/core/sandboxes">client.core.sandboxes.<a href="./src/resources/core/sandboxes.ts">create</a>({ ...params }) -> Sandbox</code>
- <code title="get /v1/core/sandboxes/{id}">client.core.sandboxes.<a href="./src/resources/core/sandboxes.ts">retrieve</a>(id, { ...params }) -> Sandbox</code>
- <code title="get /v1/core/sandboxes">client.core.sandboxes.<a href="./src/resources/core/sandboxes.ts">list</a>({ ...params }) -> SandboxListResponse</code>
- <code title="delete /v1/core/sandboxes/{id}">client.core.sandboxes.<a href="./src/resources/core/sandboxes.ts">delete</a>(id) -> SandboxDeleteResponse</code>

## SysProperties

# Finance

## Accounts

### Actions

## Invoices

## PaymentTerms

Types:

- <code><a href="./src/resources/finance/payment-terms.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/finance/payment-terms.ts">PaymentTermDeleteResponse</a></code>
- <code><a href="./src/resources/finance/payment-terms.ts">PaymentTermRetrievePaymentTermsResponse</a></code>

Methods:

- <code title="get /v1/finance/payment-terms/{id}">client.finance.paymentTerms.<a href="./src/resources/finance/payment-terms.ts">retrieve</a>(id, { ...params }) -> PaymentTerm</code>
- <code title="patch /v1/finance/payment-terms/{id}">client.finance.paymentTerms.<a href="./src/resources/finance/payment-terms.ts">update</a>(id, { ...params }) -> PaymentTerm</code>
- <code title="delete /v1/finance/payment-terms/{id}">client.finance.paymentTerms.<a href="./src/resources/finance/payment-terms.ts">delete</a>(id) -> PaymentTermDeleteResponse</code>
- <code title="post /v1/finance/payment-terms">client.finance.paymentTerms.<a href="./src/resources/finance/payment-terms.ts">paymentTerms</a>({ ...params }) -> PaymentTerm</code>
- <code title="get /v1/finance/payment-terms">client.finance.paymentTerms.<a href="./src/resources/finance/payment-terms.ts">retrievePaymentTerms</a>({ ...params }) -> PaymentTermRetrievePaymentTermsResponse</code>

## Receivables

### Accounts

#### Actions

## Settlements

## TransactionAllocations

## Transactions

# Identity

## AccountUsers

Types:

- <code><a href="./src/resources/identity/account-users/account-users.ts">AccountUser</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">NotificationPreferenceItem</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">AccountUserRetrieveAccountUsersResponse</a></code>

Methods:

- <code title="get /v1/identity/account-users/{id}">client.identity.accountUsers.<a href="./src/resources/identity/account-users/account-users.ts">retrieve</a>(id, { ...params }) -> AccountUser</code>
- <code title="patch /v1/identity/account-users/{id}">client.identity.accountUsers.<a href="./src/resources/identity/account-users/account-users.ts">update</a>(id, { ...params }) -> AccountUser</code>
- <code title="post /v1/identity/account-users">client.identity.accountUsers.<a href="./src/resources/identity/account-users/account-users.ts">accountUsers</a>({ ...params }) -> AccountUser</code>
- <code title="get /v1/identity/account-users">client.identity.accountUsers.<a href="./src/resources/identity/account-users/account-users.ts">retrieveAccountUsers</a>({ ...params }) -> AccountUserRetrieveAccountUsersResponse</code>

### Actions

Types:

- <code><a href="./src/resources/identity/account-users/actions.ts">ActionUpdateActivateResponse</a></code>
- <code><a href="./src/resources/identity/account-users/actions.ts">ActionUpdateDisableResponse</a></code>
- <code><a href="./src/resources/identity/account-users/actions.ts">ActionUpdateRemoveResponse</a></code>

Methods:

- <code title="put /v1/identity/account-users/{id}/actions/activate">client.identity.accountUsers.actions.<a href="./src/resources/identity/account-users/actions.ts">updateActivate</a>(id) -> ActionUpdateActivateResponse</code>
- <code title="put /v1/identity/account-users/{id}/actions/disable">client.identity.accountUsers.actions.<a href="./src/resources/identity/account-users/actions.ts">updateDisable</a>(id) -> ActionUpdateDisableResponse</code>
- <code title="put /v1/identity/account-users/{id}/actions/remove">client.identity.accountUsers.actions.<a href="./src/resources/identity/account-users/actions.ts">updateRemove</a>(id) -> ActionUpdateRemoveResponse</code>

## Accounts

Types:

- <code><a href="./src/resources/identity/accounts.ts">Account</a></code>

## ChildAccounts

## Integrations

### Stripe

## Me

### Tenancy

## Roles

Types:

- <code><a href="./src/resources/identity/roles.ts">Role</a></code>
- <code><a href="./src/resources/identity/roles.ts">RoleListResponse</a></code>
- <code><a href="./src/resources/identity/roles.ts">RoleDeleteResponse</a></code>

Methods:

- <code title="post /v1/identity/roles">client.identity.roles.<a href="./src/resources/identity/roles.ts">create</a>({ ...params }) -> Role</code>
- <code title="get /v1/identity/roles/{id}">client.identity.roles.<a href="./src/resources/identity/roles.ts">retrieve</a>(id, { ...params }) -> Role</code>
- <code title="patch /v1/identity/roles/{id}">client.identity.roles.<a href="./src/resources/identity/roles.ts">update</a>(id, { ...params }) -> Role</code>
- <code title="get /v1/identity/roles">client.identity.roles.<a href="./src/resources/identity/roles.ts">list</a>({ ...params }) -> RoleListResponse</code>
- <code title="delete /v1/identity/roles/{id}">client.identity.roles.<a href="./src/resources/identity/roles.ts">delete</a>(id) -> RoleDeleteResponse</code>

## Users

### Photo

# Operations

Types:

- <code><a href="./src/resources/operations/operations.ts">Rate</a></code>

## Analytics

## Batches

Types:

- <code><a href="./src/resources/operations/batches/batches.ts">Quantity</a></code>

### Actions

## Carriers

Types:

- <code><a href="./src/resources/operations/carriers/carriers.ts">Carrier</a></code>
- <code><a href="./src/resources/operations/carriers/carriers.ts">CarrierListResponse</a></code>
- <code><a href="./src/resources/operations/carriers/carriers.ts">CarrierDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/carriers">client.operations.carriers.<a href="./src/resources/operations/carriers/carriers.ts">create</a>({ ...params }) -> Carrier</code>
- <code title="get /v1/operations/carriers/{id}">client.operations.carriers.<a href="./src/resources/operations/carriers/carriers.ts">retrieve</a>(id, { ...params }) -> Carrier</code>
- <code title="patch /v1/operations/carriers/{id}">client.operations.carriers.<a href="./src/resources/operations/carriers/carriers.ts">update</a>(id, { ...params }) -> Carrier</code>
- <code title="get /v1/operations/carriers">client.operations.carriers.<a href="./src/resources/operations/carriers/carriers.ts">list</a>({ ...params }) -> CarrierListResponse</code>
- <code title="delete /v1/operations/carriers/{id}">client.operations.carriers.<a href="./src/resources/operations/carriers/carriers.ts">delete</a>(id) -> CarrierDeleteResponse</code>

### ServiceLevels

Types:

- <code><a href="./src/resources/operations/carriers/service-levels.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/operations/carriers/service-levels.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/operations/carriers/service-levels.ts">ServiceLevelDeleteResponse</a></code>

Methods:

- <code title="get /v1/operations/carriers/{carrier_id}/service-levels/{id}">client.operations.carriers.serviceLevels.<a href="./src/resources/operations/carriers/service-levels.ts">retrieve</a>(id, { ...params }) -> ServiceLevel</code>
- <code title="patch /v1/operations/carriers/{carrier_id}/service-levels/{id}">client.operations.carriers.serviceLevels.<a href="./src/resources/operations/carriers/service-levels.ts">update</a>(id, { ...params }) -> ServiceLevel</code>
- <code title="delete /v1/operations/carriers/{carrier_id}/service-levels/{id}">client.operations.carriers.serviceLevels.<a href="./src/resources/operations/carriers/service-levels.ts">delete</a>(id, { ...params }) -> ServiceLevelDeleteResponse</code>
- <code title="get /v1/operations/carriers/{carrier_id}/service-levels">client.operations.carriers.serviceLevels.<a href="./src/resources/operations/carriers/service-levels.ts">retrieveServiceLevels</a>(carrierID, { ...params }) -> ListServiceLevel</code>
- <code title="post /v1/operations/carriers/{carrier_id}/service-levels">client.operations.carriers.serviceLevels.<a href="./src/resources/operations/carriers/service-levels.ts">serviceLevels</a>(carrierID, { ...params }) -> ServiceLevel</code>

### Actions

## DcLocations

## Deliveries

## Departments

Types:

- <code><a href="./src/resources/operations/departments.ts">Department</a></code>

## EdiRuns

## Edi

### Actions

## InventoryChangeLogs

### Actions

## LocationTypes

Types:

- <code><a href="./src/resources/operations/location-types.ts">LocationType</a></code>
- <code><a href="./src/resources/operations/location-types.ts">LocationTypeRetrieveLocationTypesResponse</a></code>

Methods:

- <code title="get /v1/operations/location-types/{id}">client.operations.locationTypes.<a href="./src/resources/operations/location-types.ts">retrieve</a>(id) -> LocationType</code>
- <code title="get /v1/operations/location-types">client.operations.locationTypes.<a href="./src/resources/operations/location-types.ts">retrieveLocationTypes</a>({ ...params }) -> LocationTypeRetrieveLocationTypesResponse</code>

## Locations

Types:

- <code><a href="./src/resources/operations/locations.ts">ListLocation</a></code>
- <code><a href="./src/resources/operations/locations.ts">Location</a></code>
- <code><a href="./src/resources/operations/locations.ts">LocationDeleteResponse</a></code>

Methods:

- <code title="post /v1/operations/locations">client.operations.locations.<a href="./src/resources/operations/locations.ts">create</a>({ ...params }) -> Location</code>
- <code title="get /v1/operations/locations/{id}">client.operations.locations.<a href="./src/resources/operations/locations.ts">retrieve</a>(id, { ...params }) -> Location</code>
- <code title="patch /v1/operations/locations/{id}">client.operations.locations.<a href="./src/resources/operations/locations.ts">update</a>(id, { ...params }) -> Location</code>
- <code title="get /v1/operations/locations">client.operations.locations.<a href="./src/resources/operations/locations.ts">list</a>({ ...params }) -> ListLocation</code>
- <code title="delete /v1/operations/locations/{id}">client.operations.locations.<a href="./src/resources/operations/locations.ts">delete</a>(id) -> LocationDeleteResponse</code>

## Machines

Types:

- <code><a href="./src/resources/operations/machines.ts">ListMachine</a></code>
- <code><a href="./src/resources/operations/machines.ts">Machine</a></code>

## Picks

### Actions

### Lines

#### Actions

## ProductionFlows

### Actions

## ProductionRuns

### Batches

## ProductionSteps

Types:

- <code><a href="./src/resources/operations/production-steps/production-steps.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/operations/production-steps/production-steps.ts">ProductionStep</a></code>

### Actions

### Consumptions

Types:

- <code><a href="./src/resources/operations/production-steps/consumptions.ts">Consumption</a></code>

### Productions

Types:

- <code><a href="./src/resources/operations/production-steps/productions.ts">ProductionOutput</a></code>

## PurchaseOrders

### Actions

### Lines

## ReceivingOrders

### Actions

### Lines

#### Actions

## ScanningStations

Types:

- <code><a href="./src/resources/operations/scanning-stations.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">ScanningStation</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">ScanningStationDeleteResponse</a></code>

Methods:

- <code title="get /v1/operations/scanning-stations/{id}">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations.ts">retrieve</a>(id, { ...params }) -> ScanningStation</code>
- <code title="patch /v1/operations/scanning-stations/{id}">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations.ts">update</a>(id, { ...params }) -> ScanningStation</code>
- <code title="delete /v1/operations/scanning-stations/{id}">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations.ts">delete</a>(id) -> ScanningStationDeleteResponse</code>
- <code title="get /v1/operations/scanning-stations">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations.ts">retrieveScanningStations</a>({ ...params }) -> ListScanningStation</code>
- <code title="post /v1/operations/scanning-stations">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations.ts">scanningStations</a>({ ...params }) -> ScanningStation</code>

## Shipments

### Actions

### Lines

## ShippingCases

## ShippingTerms

Types:

- <code><a href="./src/resources/operations/shipping-terms.ts">QuantityInput</a></code>
- <code><a href="./src/resources/operations/shipping-terms.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/operations/shipping-terms.ts">ShippingTermDeleteResponse</a></code>
- <code><a href="./src/resources/operations/shipping-terms.ts">ShippingTermRetrieveShippingTermsResponse</a></code>

Methods:

- <code title="get /v1/operations/shipping-terms/{id}">client.operations.shippingTerms.<a href="./src/resources/operations/shipping-terms.ts">retrieve</a>(id, { ...params }) -> ShippingTerm</code>
- <code title="patch /v1/operations/shipping-terms/{id}">client.operations.shippingTerms.<a href="./src/resources/operations/shipping-terms.ts">update</a>(id, { ...params }) -> ShippingTerm</code>
- <code title="delete /v1/operations/shipping-terms/{id}">client.operations.shippingTerms.<a href="./src/resources/operations/shipping-terms.ts">delete</a>(id) -> ShippingTermDeleteResponse</code>
- <code title="get /v1/operations/shipping-terms">client.operations.shippingTerms.<a href="./src/resources/operations/shipping-terms.ts">retrieveShippingTerms</a>({ ...params }) -> ShippingTermRetrieveShippingTermsResponse</code>
- <code title="post /v1/operations/shipping-terms">client.operations.shippingTerms.<a href="./src/resources/operations/shipping-terms.ts">shippingTerms</a>({ ...params }) -> ShippingTerm</code>

## Suppliers

### Actions

### Materials

# Sales

## AccountGroups

Types:

- <code><a href="./src/resources/sales/account-groups.ts">AccountGroup</a></code>
- <code><a href="./src/resources/sales/account-groups.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/sales/account-groups.ts">AccountGroupDeleteResponse</a></code>

Methods:

- <code title="get /v1/sales/account-groups/{id}">client.sales.accountGroups.<a href="./src/resources/sales/account-groups.ts">retrieve</a>(id) -> AccountGroup</code>
- <code title="patch /v1/sales/account-groups/{id}">client.sales.accountGroups.<a href="./src/resources/sales/account-groups.ts">update</a>(id, { ...params }) -> AccountGroup</code>
- <code title="delete /v1/sales/account-groups/{id}">client.sales.accountGroups.<a href="./src/resources/sales/account-groups.ts">delete</a>(id) -> AccountGroupDeleteResponse</code>
- <code title="post /v1/sales/account-groups">client.sales.accountGroups.<a href="./src/resources/sales/account-groups.ts">accountGroups</a>({ ...params }) -> AccountGroup</code>
- <code title="get /v1/sales/account-groups">client.sales.accountGroups.<a href="./src/resources/sales/account-groups.ts">retrieveAccountGroups</a>({ ...params }) -> ListAccountGroup</code>

## AccountPrices

## AccountStatuses

Types:

- <code><a href="./src/resources/sales/account-statuses.ts">AccountStatus</a></code>
- <code><a href="./src/resources/sales/account-statuses.ts">AccountStatusRetrieveAccountStatusesResponse</a></code>

Methods:

- <code title="get /v1/sales/account-statuses/{id}">client.sales.accountStatuses.<a href="./src/resources/sales/account-statuses.ts">retrieve</a>(id, { ...params }) -> AccountStatus</code>
- <code title="get /v1/sales/account-statuses">client.sales.accountStatuses.<a href="./src/resources/sales/account-statuses.ts">retrieveAccountStatuses</a>({ ...params }) -> AccountStatusRetrieveAccountStatusesResponse</code>

## AccountUsers

### SalesTargets

## Accounts

### Territories

## Addresses

Types:

- <code><a href="./src/resources/sales/addresses.ts">Address</a></code>
- <code><a href="./src/resources/sales/addresses.ts">AddressInput</a></code>
- <code><a href="./src/resources/sales/addresses.ts">AddressListResponse</a></code>
- <code><a href="./src/resources/sales/addresses.ts">AddressDeleteResponse</a></code>

Methods:

- <code title="post /v1/sales/addresses">client.sales.addresses.<a href="./src/resources/sales/addresses.ts">create</a>({ ...params }) -> Address</code>
- <code title="get /v1/sales/addresses/{id}">client.sales.addresses.<a href="./src/resources/sales/addresses.ts">retrieve</a>(id) -> Address</code>
- <code title="patch /v1/sales/addresses/{id}">client.sales.addresses.<a href="./src/resources/sales/addresses.ts">update</a>(id, { ...params }) -> Address</code>
- <code title="get /v1/sales/addresses">client.sales.addresses.<a href="./src/resources/sales/addresses.ts">list</a>({ ...params }) -> AddressListResponse</code>
- <code title="delete /v1/sales/addresses/{id}">client.sales.addresses.<a href="./src/resources/sales/addresses.ts">delete</a>(id) -> AddressDeleteResponse</code>

## Customers

Types:

- <code><a href="./src/resources/sales/customers/customers.ts">Customer</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">ListCustomer</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">CustomerDeleteResponse</a></code>

Methods:

- <code title="post /v1/sales/customers">client.sales.customers.<a href="./src/resources/sales/customers/customers.ts">create</a>({ ...params }) -> Customer</code>
- <code title="get /v1/sales/customers/{id}">client.sales.customers.<a href="./src/resources/sales/customers/customers.ts">retrieve</a>(id, { ...params }) -> Customer</code>
- <code title="patch /v1/sales/customers/{id}">client.sales.customers.<a href="./src/resources/sales/customers/customers.ts">update</a>(id, { ...params }) -> Customer</code>
- <code title="get /v1/sales/customers">client.sales.customers.<a href="./src/resources/sales/customers/customers.ts">list</a>({ ...params }) -> ListCustomer</code>
- <code title="delete /v1/sales/customers/{id}">client.sales.customers.<a href="./src/resources/sales/customers/customers.ts">delete</a>(id) -> CustomerDeleteResponse</code>

### Actions

Methods:

- <code title="post /v1/sales/customers/{id}/actions/merge">client.sales.customers.actions.<a href="./src/resources/sales/customers/actions.ts">merge</a>(id, { ...params }) -> Customer</code>

## OrderDiscounts

### Actions

## Priorities

Types:

- <code><a href="./src/resources/sales/priorities.ts">Priority</a></code>
- <code><a href="./src/resources/sales/priorities.ts">PriorityListResponse</a></code>

Methods:

- <code title="get /v1/sales/priorities/{id}">client.sales.priorities.<a href="./src/resources/sales/priorities.ts">retrieve</a>(id, { ...params }) -> Priority</code>
- <code title="get /v1/sales/priorities">client.sales.priorities.<a href="./src/resources/sales/priorities.ts">list</a>({ ...params }) -> PriorityListResponse</code>

## ProductLineAccess

### AccountGroups

### Customers

## RegistrationFlows

## SalesOrders

### Actions

### Lines

## VolumeDiscounts

# Webhooks
