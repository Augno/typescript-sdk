# Auth

## APIKeys

Types:

- <code><a href="./src/resources/auth/api-keys/api-keys.ts">Account</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">AccountBranding</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">AccountPortal</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">Address</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">APIKey</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">CreateAPIKeyRequest</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">CreatedAPIKey</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">Geolocation</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">ListAPIKey</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">Owner</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">PageInfo</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">Role</a></code>
- <code><a href="./src/resources/auth/api-keys/api-keys.ts">APIKeyDeleteResponse</a></code>

Methods:

- <code title="get /v1/auth/api-keys/{id}">client.auth.apiKeys.<a href="./src/resources/auth/api-keys/api-keys.ts">retrieve</a>(id, { ...params }) -> APIKey</code>
- <code title="get /v1/auth/api-keys">client.auth.apiKeys.<a href="./src/resources/auth/api-keys/api-keys.ts">list</a>({ ...params }) -> ListAPIKey</code>
- <code title="post /v1/auth/api-keys">client.auth.apiKeys.<a href="./src/resources/auth/api-keys/api-keys.ts">create</a>({ ...params }) -> CreatedAPIKey</code>
- <code title="delete /v1/auth/api-keys/{id}">client.auth.apiKeys.<a href="./src/resources/auth/api-keys/api-keys.ts">delete</a>(id) -> APIKeyDeleteResponse</code>

### Actions

Types:

- <code><a href="./src/resources/auth/api-keys/actions.ts">RotateAPIKeyRequest</a></code>

Methods:

- <code title="post /v1/auth/api-keys/{id}/actions/rotate">client.auth.apiKeys.actions.<a href="./src/resources/auth/api-keys/actions.ts">rotate</a>(id, { ...params }) -> CreatedAPIKey</code>

# Core

Types:

- <code><a href="./src/resources/core/core.ts">Entity</a></code>
- <code><a href="./src/resources/core/core.ts">ListEntity</a></code>

Methods:

- <code title="get /v1/core/search">client.core.<a href="./src/resources/core/core.ts">retrieveSearch</a>({ ...params }) -> ListEntity</code>

## Sandboxes

Types:

- <code><a href="./src/resources/core/sandboxes.ts">CreateSandboxRequest</a></code>
- <code><a href="./src/resources/core/sandboxes.ts">ListSandbox</a></code>
- <code><a href="./src/resources/core/sandboxes.ts">Sandbox</a></code>
- <code><a href="./src/resources/core/sandboxes.ts">SandboxDeleteResponse</a></code>

Methods:

- <code title="get /v1/core/sandboxes">client.core.sandboxes.<a href="./src/resources/core/sandboxes.ts">list</a>({ ...params }) -> ListSandbox</code>
- <code title="get /v1/core/sandboxes/{id}">client.core.sandboxes.<a href="./src/resources/core/sandboxes.ts">retrieve</a>(id, { ...params }) -> Sandbox</code>
- <code title="post /v1/core/sandboxes">client.core.sandboxes.<a href="./src/resources/core/sandboxes.ts">create</a>({ ...params }) -> Sandbox</code>
- <code title="delete /v1/core/sandboxes/{id}">client.core.sandboxes.<a href="./src/resources/core/sandboxes.ts">delete</a>(id) -> SandboxDeleteResponse</code>

## RequestLogs

Types:

- <code><a href="./src/resources/core/request-logs.ts">Actor</a></code>
- <code><a href="./src/resources/core/request-logs.ts">ListRequestLog</a></code>
- <code><a href="./src/resources/core/request-logs.ts">RequestLog</a></code>

Methods:

- <code title="get /v1/core/request-logs">client.core.requestLogs.<a href="./src/resources/core/request-logs.ts">list</a>({ ...params }) -> ListRequestLog</code>
- <code title="get /v1/core/request-logs/{id}">client.core.requestLogs.<a href="./src/resources/core/request-logs.ts">retrieve</a>(id, { ...params }) -> RequestLog</code>

## AuditEvents

Types:

- <code><a href="./src/resources/core/audit-events.ts">AuditEvent</a></code>
- <code><a href="./src/resources/core/audit-events.ts">AuditFieldChange</a></code>
- <code><a href="./src/resources/core/audit-events.ts">ListAuditEvent</a></code>
- <code><a href="./src/resources/core/audit-events.ts">ListAuditFieldChange</a></code>
- <code><a href="./src/resources/core/audit-events.ts">ListObjectType</a></code>

Methods:

- <code title="get /v1/core/audit-events">client.core.auditEvents.<a href="./src/resources/core/audit-events.ts">list</a>({ ...params }) -> ListAuditEvent</code>
- <code title="get /v1/core/audit-events/{id}">client.core.auditEvents.<a href="./src/resources/core/audit-events.ts">retrieve</a>(id, { ...params }) -> AuditEvent</code>
- <code title="get /v1/core/audit-events/resource-types">client.core.auditEvents.<a href="./src/resources/core/audit-events.ts">retrieveResourceTypes</a>() -> ListObjectType</code>

## Addresses

Types:

- <code><a href="./src/resources/core/addresses/addresses.ts">AddressSuggestion</a></code>
- <code><a href="./src/resources/core/addresses/addresses.ts">ListAddressSuggestion</a></code>

Methods:

- <code title="get /v1/core/addresses/suggestions">client.core.addresses.<a href="./src/resources/core/addresses/addresses.ts">retrieveSuggestions</a>({ ...params }) -> ListAddressSuggestion</code>

### Actions

Types:

- <code><a href="./src/resources/core/addresses/actions.ts">AddressComponents</a></code>
- <code><a href="./src/resources/core/addresses/actions.ts">ValidateAddressRequest</a></code>
- <code><a href="./src/resources/core/addresses/actions.ts">ValidatedAddress</a></code>

Methods:

- <code title="put /v1/core/addresses/actions/validate">client.core.addresses.actions.<a href="./src/resources/core/addresses/actions.ts">validate</a>({ ...params }) -> ValidatedAddress</code>

## EmailLogs

Types:

- <code><a href="./src/resources/core/email-logs.ts">EmailLog</a></code>
- <code><a href="./src/resources/core/email-logs.ts">ListEmailLog</a></code>

Methods:

- <code title="get /v1/core/email-logs">client.core.emailLogs.<a href="./src/resources/core/email-logs.ts">list</a>({ ...params }) -> ListEmailLog</code>
- <code title="get /v1/core/email-logs/{id}">client.core.emailLogs.<a href="./src/resources/core/email-logs.ts">retrieve</a>(id, { ...params }) -> EmailLog</code>

# Catalog

## Units

Types:

- <code><a href="./src/resources/catalog/units.ts">CreateUnitRequest</a></code>
- <code><a href="./src/resources/catalog/units.ts">ListUnit</a></code>
- <code><a href="./src/resources/catalog/units.ts">Unit</a></code>
- <code><a href="./src/resources/catalog/units.ts">UpdateUnitRequest</a></code>
- <code><a href="./src/resources/catalog/units.ts">UnitDeleteResponse</a></code>

Methods:

- <code title="get /v1/catalog/units">client.catalog.units.<a href="./src/resources/catalog/units.ts">list</a>({ ...params }) -> ListUnit</code>
- <code title="get /v1/catalog/units/{id}">client.catalog.units.<a href="./src/resources/catalog/units.ts">retrieve</a>(id, { ...params }) -> Unit</code>
- <code title="post /v1/catalog/units">client.catalog.units.<a href="./src/resources/catalog/units.ts">create</a>({ ...params }) -> Unit</code>
- <code title="patch /v1/catalog/units/{id}">client.catalog.units.<a href="./src/resources/catalog/units.ts">update</a>(id, { ...params }) -> Unit</code>
- <code title="delete /v1/catalog/units/{id}">client.catalog.units.<a href="./src/resources/catalog/units.ts">delete</a>(id) -> UnitDeleteResponse</code>

## UnitGroups

Types:

- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">CreateUnitGroupRequest</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">CreateUnitGroupUnitParam</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">ListUnitGroup</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">ListUnitGroupUnit</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">UnitGroup</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">UnitGroupUnit</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">UpdateUnitGroupRequest</a></code>
- <code><a href="./src/resources/catalog/unit-groups/unit-groups.ts">UnitGroupDeleteResponse</a></code>

Methods:

- <code title="get /v1/catalog/unit-groups">client.catalog.unitGroups.<a href="./src/resources/catalog/unit-groups/unit-groups.ts">list</a>({ ...params }) -> ListUnitGroup</code>
- <code title="get /v1/catalog/unit-groups/{id}">client.catalog.unitGroups.<a href="./src/resources/catalog/unit-groups/unit-groups.ts">retrieve</a>(id, { ...params }) -> UnitGroup</code>
- <code title="post /v1/catalog/unit-groups">client.catalog.unitGroups.<a href="./src/resources/catalog/unit-groups/unit-groups.ts">create</a>({ ...params }) -> UnitGroup</code>
- <code title="patch /v1/catalog/unit-groups/{id}">client.catalog.unitGroups.<a href="./src/resources/catalog/unit-groups/unit-groups.ts">update</a>(id, { ...params }) -> UnitGroup</code>
- <code title="delete /v1/catalog/unit-groups/{id}">client.catalog.unitGroups.<a href="./src/resources/catalog/unit-groups/unit-groups.ts">delete</a>(id) -> UnitGroupDeleteResponse</code>

### Units

Types:

- <code><a href="./src/resources/catalog/unit-groups/units.ts">CreateUnitGroupUnitRequest</a></code>
- <code><a href="./src/resources/catalog/unit-groups/units.ts">UpdateUnitGroupUnitRequest</a></code>
- <code><a href="./src/resources/catalog/unit-groups/units.ts">UnitDeleteResponse</a></code>

Methods:

- <code title="get /v1/catalog/unit-groups/{unit_group_id}/units">client.catalog.unitGroups.units.<a href="./src/resources/catalog/unit-groups/units.ts">list</a>(unitGroupID, { ...params }) -> ListUnitGroupUnit</code>
- <code title="get /v1/catalog/unit-groups/{unit_group_id}/units/{id}">client.catalog.unitGroups.units.<a href="./src/resources/catalog/unit-groups/units.ts">retrieve</a>(id, { ...params }) -> UnitGroupUnit</code>
- <code title="post /v1/catalog/unit-groups/{unit_group_id}/units">client.catalog.unitGroups.units.<a href="./src/resources/catalog/unit-groups/units.ts">create</a>(unitGroupID, { ...params }) -> UnitGroupUnit</code>
- <code title="patch /v1/catalog/unit-groups/{unit_group_id}/units/{id}">client.catalog.unitGroups.units.<a href="./src/resources/catalog/unit-groups/units.ts">update</a>(id, { ...params }) -> UnitGroupUnit</code>
- <code title="delete /v1/catalog/unit-groups/{unit_group_id}/units/{id}">client.catalog.unitGroups.units.<a href="./src/resources/catalog/unit-groups/units.ts">delete</a>(id, { ...params }) -> UnitDeleteResponse</code>

## Properties

Types:

- <code><a href="./src/resources/catalog/properties/properties.ts">Attribute</a></code>
- <code><a href="./src/resources/catalog/properties/properties.ts">CreatePropertyRequest</a></code>
- <code><a href="./src/resources/catalog/properties/properties.ts">ListAttribute</a></code>
- <code><a href="./src/resources/catalog/properties/properties.ts">ListProperty</a></code>
- <code><a href="./src/resources/catalog/properties/properties.ts">Property</a></code>
- <code><a href="./src/resources/catalog/properties/properties.ts">UpdatePropertyRequest</a></code>
- <code><a href="./src/resources/catalog/properties/properties.ts">PropertyDeleteResponse</a></code>

Methods:

- <code title="get /v1/catalog/properties">client.catalog.properties.<a href="./src/resources/catalog/properties/properties.ts">list</a>({ ...params }) -> ListProperty</code>
- <code title="get /v1/catalog/properties/{id}">client.catalog.properties.<a href="./src/resources/catalog/properties/properties.ts">retrieve</a>(id, { ...params }) -> Property</code>
- <code title="post /v1/catalog/properties">client.catalog.properties.<a href="./src/resources/catalog/properties/properties.ts">create</a>({ ...params }) -> Property</code>
- <code title="patch /v1/catalog/properties/{id}">client.catalog.properties.<a href="./src/resources/catalog/properties/properties.ts">update</a>(id, { ...params }) -> Property</code>
- <code title="delete /v1/catalog/properties/{id}">client.catalog.properties.<a href="./src/resources/catalog/properties/properties.ts">delete</a>(id) -> PropertyDeleteResponse</code>

### Attributes

Types:

- <code><a href="./src/resources/catalog/properties/attributes.ts">CreateAttributeRequest</a></code>
- <code><a href="./src/resources/catalog/properties/attributes.ts">UpdateAttributeRequest</a></code>
- <code><a href="./src/resources/catalog/properties/attributes.ts">AttributeDeleteResponse</a></code>

Methods:

- <code title="get /v1/catalog/properties/{property_id}/attributes">client.catalog.properties.attributes.<a href="./src/resources/catalog/properties/attributes.ts">list</a>(propertyID, { ...params }) -> ListAttribute</code>
- <code title="get /v1/catalog/properties/{property_id}/attributes/{id}">client.catalog.properties.attributes.<a href="./src/resources/catalog/properties/attributes.ts">retrieve</a>(id, { ...params }) -> Attribute</code>
- <code title="post /v1/catalog/properties/{property_id}/attributes">client.catalog.properties.attributes.<a href="./src/resources/catalog/properties/attributes.ts">create</a>(propertyID, { ...params }) -> Attribute</code>
- <code title="patch /v1/catalog/properties/{property_id}/attributes/{id}">client.catalog.properties.attributes.<a href="./src/resources/catalog/properties/attributes.ts">update</a>(id, { ...params }) -> Attribute</code>
- <code title="delete /v1/catalog/properties/{property_id}/attributes/{id}">client.catalog.properties.attributes.<a href="./src/resources/catalog/properties/attributes.ts">delete</a>(id, { ...params }) -> AttributeDeleteResponse</code>

## Items

Types:

- <code><a href="./src/resources/catalog/items/items.ts">Item</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">ItemCategory</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">ItemInventory</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">ListItem</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">Quantity</a></code>
- <code><a href="./src/resources/catalog/items/items.ts">Rate</a></code>

Methods:

- <code title="get /v1/catalog/items">client.catalog.items.<a href="./src/resources/catalog/items/items.ts">list</a>({ ...params }) -> ListItem</code>
- <code title="get /v1/catalog/items/{id}">client.catalog.items.<a href="./src/resources/catalog/items/items.ts">retrieve</a>(id, { ...params }) -> Item</code>
- <code title="get /v1/catalog/items/{id}/inventory">client.catalog.items.<a href="./src/resources/catalog/items/items.ts">retrieveInventory</a>(id, { ...params }) -> ItemInventory</code>
- <code title="put /v1/catalog/items/{id}/category/{category_id}">client.catalog.items.<a href="./src/resources/catalog/items/items.ts">changeCategory</a>(categoryID, { ...params }) -> Item</code>

### Attributes

Methods:

- <code title="put /v1/catalog/items/{id}/attributes/{attribute_id}">client.catalog.items.attributes.<a href="./src/resources/catalog/items/attributes.ts">update</a>(attributeID, { ...params }) -> Item</code>
- <code title="delete /v1/catalog/items/{id}/attributes/{attribute_id}">client.catalog.items.attributes.<a href="./src/resources/catalog/items/attributes.ts">delete</a>(attributeID, { ...params }) -> Item</code>

## ItemCategories

Types:

- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">CreateItemCategoryRequest</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">ListItemCategory</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">UpdateItemCategoryRequest</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">ItemCategoryDeleteResponse</a></code>
- <code><a href="./src/resources/catalog/item-categories/item-categories.ts">ItemCategoryChangeUnitGroupResponse</a></code>

Methods:

- <code title="get /v1/catalog/item-categories">client.catalog.itemCategories.<a href="./src/resources/catalog/item-categories/item-categories.ts">list</a>({ ...params }) -> ListItemCategory</code>
- <code title="get /v1/catalog/item-categories/{id}">client.catalog.itemCategories.<a href="./src/resources/catalog/item-categories/item-categories.ts">retrieve</a>(id, { ...params }) -> ItemCategory</code>
- <code title="post /v1/catalog/item-categories">client.catalog.itemCategories.<a href="./src/resources/catalog/item-categories/item-categories.ts">create</a>({ ...params }) -> ItemCategory</code>
- <code title="patch /v1/catalog/item-categories/{id}">client.catalog.itemCategories.<a href="./src/resources/catalog/item-categories/item-categories.ts">update</a>(id, { ...params }) -> ItemCategory</code>
- <code title="delete /v1/catalog/item-categories/{id}">client.catalog.itemCategories.<a href="./src/resources/catalog/item-categories/item-categories.ts">delete</a>(id) -> ItemCategoryDeleteResponse</code>
- <code title="put /v1/catalog/item-categories/{id}/unit-groups/{unit_group_id}">client.catalog.itemCategories.<a href="./src/resources/catalog/item-categories/item-categories.ts">changeUnitGroup</a>(unitGroupID, { ...params }) -> ItemCategoryChangeUnitGroupResponse</code>

### Properties

Types:

- <code><a href="./src/resources/catalog/item-categories/properties.ts">PropertyUpdateResponse</a></code>
- <code><a href="./src/resources/catalog/item-categories/properties.ts">PropertyDeleteResponse</a></code>

Methods:

- <code title="put /v1/catalog/item-categories/{id}/properties/{property_id}">client.catalog.itemCategories.properties.<a href="./src/resources/catalog/item-categories/properties.ts">update</a>(propertyID, { ...params }) -> PropertyUpdateResponse</code>
- <code title="delete /v1/catalog/item-categories/{id}/properties/{property_id}">client.catalog.itemCategories.properties.<a href="./src/resources/catalog/item-categories/properties.ts">delete</a>(propertyID, { ...params }) -> PropertyDeleteResponse</code>

## Materials

Types:

- <code><a href="./src/resources/catalog/materials.ts">CreateMaterialRequest</a></code>
- <code><a href="./src/resources/catalog/materials.ts">ListMaterial</a></code>
- <code><a href="./src/resources/catalog/materials.ts">Material</a></code>
- <code><a href="./src/resources/catalog/materials.ts">QuantityInputRequest</a></code>
- <code><a href="./src/resources/catalog/materials.ts">RateInput</a></code>
- <code><a href="./src/resources/catalog/materials.ts">UpdateMaterialRequest</a></code>

Methods:

- <code title="get /v1/catalog/materials">client.catalog.materials.<a href="./src/resources/catalog/materials.ts">list</a>({ ...params }) -> ListMaterial</code>
- <code title="get /v1/catalog/materials/{id}">client.catalog.materials.<a href="./src/resources/catalog/materials.ts">retrieve</a>(id, { ...params }) -> Material</code>
- <code title="post /v1/catalog/materials">client.catalog.materials.<a href="./src/resources/catalog/materials.ts">create</a>({ ...params }) -> Material</code>
- <code title="patch /v1/catalog/materials/{id}">client.catalog.materials.<a href="./src/resources/catalog/materials.ts">update</a>(id, { ...params }) -> Material</code>
- <code title="delete /v1/catalog/materials/{id}">client.catalog.materials.<a href="./src/resources/catalog/materials.ts">delete</a>(id) -> Material</code>

## Parts

Types:

- <code><a href="./src/resources/catalog/parts.ts">CreatePartRequest</a></code>
- <code><a href="./src/resources/catalog/parts.ts">ListPart</a></code>
- <code><a href="./src/resources/catalog/parts.ts">Part</a></code>
- <code><a href="./src/resources/catalog/parts.ts">UpdatePartRequest</a></code>

Methods:

- <code title="get /v1/catalog/parts">client.catalog.parts.<a href="./src/resources/catalog/parts.ts">list</a>({ ...params }) -> ListPart</code>
- <code title="get /v1/catalog/parts/{id}">client.catalog.parts.<a href="./src/resources/catalog/parts.ts">retrieve</a>(id, { ...params }) -> Part</code>
- <code title="post /v1/catalog/parts">client.catalog.parts.<a href="./src/resources/catalog/parts.ts">create</a>({ ...params }) -> Part</code>
- <code title="patch /v1/catalog/parts/{id}">client.catalog.parts.<a href="./src/resources/catalog/parts.ts">update</a>(id, { ...params }) -> Part</code>
- <code title="delete /v1/catalog/parts/{id}">client.catalog.parts.<a href="./src/resources/catalog/parts.ts">delete</a>(id) -> Part</code>

## ProductLines

Types:

- <code><a href="./src/resources/catalog/product-lines.ts">CreateProductLineRequest</a></code>
- <code><a href="./src/resources/catalog/product-lines.ts">ListProductLine</a></code>
- <code><a href="./src/resources/catalog/product-lines.ts">ProductLine</a></code>
- <code><a href="./src/resources/catalog/product-lines.ts">UpdateProductLineRequest</a></code>
- <code><a href="./src/resources/catalog/product-lines.ts">ProductLineDeleteResponse</a></code>

Methods:

- <code title="get /v1/catalog/product-lines">client.catalog.productLines.<a href="./src/resources/catalog/product-lines.ts">list</a>({ ...params }) -> ListProductLine</code>
- <code title="get /v1/catalog/product-lines/{id}">client.catalog.productLines.<a href="./src/resources/catalog/product-lines.ts">retrieve</a>(id, { ...params }) -> ProductLine</code>
- <code title="post /v1/catalog/product-lines">client.catalog.productLines.<a href="./src/resources/catalog/product-lines.ts">create</a>({ ...params }) -> ProductLine</code>
- <code title="patch /v1/catalog/product-lines/{id}">client.catalog.productLines.<a href="./src/resources/catalog/product-lines.ts">update</a>(id, { ...params }) -> ProductLine</code>
- <code title="delete /v1/catalog/product-lines/{id}">client.catalog.productLines.<a href="./src/resources/catalog/product-lines.ts">delete</a>(id) -> ProductLineDeleteResponse</code>

## Products

Types:

- <code><a href="./src/resources/catalog/products.ts">CreateProductRequest</a></code>
- <code><a href="./src/resources/catalog/products.ts">ListProduct</a></code>
- <code><a href="./src/resources/catalog/products.ts">Product</a></code>
- <code><a href="./src/resources/catalog/products.ts">UpdateProductRequest</a></code>

Methods:

- <code title="get /v1/catalog/products">client.catalog.products.<a href="./src/resources/catalog/products.ts">list</a>({ ...params }) -> ListProduct</code>
- <code title="get /v1/catalog/products/{id}">client.catalog.products.<a href="./src/resources/catalog/products.ts">retrieve</a>(id, { ...params }) -> Product</code>
- <code title="post /v1/catalog/products">client.catalog.products.<a href="./src/resources/catalog/products.ts">create</a>({ ...params }) -> Product</code>
- <code title="patch /v1/catalog/products/{id}">client.catalog.products.<a href="./src/resources/catalog/products.ts">update</a>(id, { ...params }) -> Product</code>
- <code title="delete /v1/catalog/products/{id}">client.catalog.products.<a href="./src/resources/catalog/products.ts">delete</a>(id, { ...params }) -> Product</code>
- <code title="put /v1/catalog/products/{id}/product-line/{product_line_id}">client.catalog.products.<a href="./src/resources/catalog/products.ts">changeProductLine</a>(productLineID, { ...params }) -> Product</code>

# Messaging

Types:

- <code><a href="./src/resources/messaging/messaging.ts">ListActor</a></code>

Methods:

- <code title="get /v1/messaging/contacts">client.messaging.<a href="./src/resources/messaging/messaging.ts">retrieveContacts</a>({ ...params }) -> ListActor</code>

## Notifications

Types:

- <code><a href="./src/resources/messaging/notifications/notifications.ts">ListNotification</a></code>
- <code><a href="./src/resources/messaging/notifications/notifications.ts">ListNotificationUnreadSummaryAccount</a></code>
- <code><a href="./src/resources/messaging/notifications/notifications.ts">Notification</a></code>
- <code><a href="./src/resources/messaging/notifications/notifications.ts">NotificationSendResult</a></code>
- <code><a href="./src/resources/messaging/notifications/notifications.ts">NotificationTargetInput</a></code>
- <code><a href="./src/resources/messaging/notifications/notifications.ts">NotificationUnreadCount</a></code>
- <code><a href="./src/resources/messaging/notifications/notifications.ts">NotificationUnreadSummary</a></code>
- <code><a href="./src/resources/messaging/notifications/notifications.ts">NotificationUnreadSummaryAccount</a></code>
- <code><a href="./src/resources/messaging/notifications/notifications.ts">SendNotificationRequest</a></code>

Methods:

- <code title="post /v1/messaging/notifications">client.messaging.notifications.<a href="./src/resources/messaging/notifications/notifications.ts">create</a>({ ...params }) -> NotificationSendResult</code>
- <code title="get /v1/messaging/notifications">client.messaging.notifications.<a href="./src/resources/messaging/notifications/notifications.ts">list</a>({ ...params }) -> ListNotification</code>
- <code title="get /v1/messaging/notifications/{id}">client.messaging.notifications.<a href="./src/resources/messaging/notifications/notifications.ts">retrieve</a>(id, { ...params }) -> Notification</code>
- <code title="get /v1/messaging/notifications/unread-count">client.messaging.notifications.<a href="./src/resources/messaging/notifications/notifications.ts">retrieveUnreadCount</a>() -> NotificationUnreadCount</code>
- <code title="get /v1/messaging/notifications/unread-summary">client.messaging.notifications.<a href="./src/resources/messaging/notifications/notifications.ts">retrieveUnreadSummary</a>() -> NotificationUnreadSummary</code>

### Actions

Types:

- <code><a href="./src/resources/messaging/notifications/actions.ts">ActionMarkAllSeenResponse</a></code>

Methods:

- <code title="post /v1/messaging/notifications/{id}/actions/seen">client.messaging.notifications.actions.<a href="./src/resources/messaging/notifications/actions.ts">seen</a>(id, { ...params }) -> Notification</code>
- <code title="post /v1/messaging/notifications/{id}/actions/read">client.messaging.notifications.actions.<a href="./src/resources/messaging/notifications/actions.ts">read</a>(id, { ...params }) -> Notification</code>
- <code title="post /v1/messaging/notifications/{id}/actions/dismiss">client.messaging.notifications.actions.<a href="./src/resources/messaging/notifications/actions.ts">dismiss</a>(id, { ...params }) -> Notification</code>
- <code title="post /v1/messaging/notifications/actions/mark-all-seen">client.messaging.notifications.actions.<a href="./src/resources/messaging/notifications/actions.ts">markAllSeen</a>() -> ActionMarkAllSeenResponse</code>

## Announcements

Types:

- <code><a href="./src/resources/messaging/announcements/announcements.ts">Announcement</a></code>
- <code><a href="./src/resources/messaging/announcements/announcements.ts">ListAnnouncement</a></code>

Methods:

- <code title="get /v1/messaging/announcements">client.messaging.announcements.<a href="./src/resources/messaging/announcements/announcements.ts">list</a>({ ...params }) -> ListAnnouncement</code>
- <code title="get /v1/messaging/announcements/{id}">client.messaging.announcements.<a href="./src/resources/messaging/announcements/announcements.ts">retrieve</a>(id, { ...params }) -> Announcement</code>

### Actions

Methods:

- <code title="post /v1/messaging/announcements/{id}/actions/seen">client.messaging.announcements.actions.<a href="./src/resources/messaging/announcements/actions.ts">seen</a>(id, { ...params }) -> Announcement</code>
- <code title="post /v1/messaging/announcements/{id}/actions/read">client.messaging.announcements.actions.<a href="./src/resources/messaging/announcements/actions.ts">read</a>(id, { ...params }) -> Announcement</code>
- <code title="post /v1/messaging/announcements/{id}/actions/dismiss">client.messaging.announcements.actions.<a href="./src/resources/messaging/announcements/actions.ts">dismiss</a>(id, { ...params }) -> Announcement</code>

## Conversations

Types:

- <code><a href="./src/resources/messaging/conversations/conversations.ts">AgentAction</a></code>
- <code><a href="./src/resources/messaging/conversations/conversations.ts">AgentDefinition</a></code>
- <code><a href="./src/resources/messaging/conversations/conversations.ts">AgentDefinitionConfig</a></code>
- <code><a href="./src/resources/messaging/conversations/conversations.ts">AgentDefinitionTool</a></code>
- <code><a href="./src/resources/messaging/conversations/conversations.ts">AgentRun</a></code>
- <code><a href="./src/resources/messaging/conversations/conversations.ts">AgentRunStep</a></code>
- <code><a href="./src/resources/messaging/conversations/conversations.ts">AvailableTool</a></code>
- <code><a href="./src/resources/messaging/conversations/conversations.ts">Conversation</a></code>
- <code><a href="./src/resources/messaging/conversations/conversations.ts">ConversationParticipant</a></code>
- <code><a href="./src/resources/messaging/conversations/conversations.ts">CreateConversationRequest</a></code>
- <code><a href="./src/resources/messaging/conversations/conversations.ts">ListAgentAction</a></code>
- <code><a href="./src/resources/messaging/conversations/conversations.ts">ListAgentDefinitionTool</a></code>
- <code><a href="./src/resources/messaging/conversations/conversations.ts">ListAgentRunStep</a></code>
- <code><a href="./src/resources/messaging/conversations/conversations.ts">ListConversation</a></code>
- <code><a href="./src/resources/messaging/conversations/conversations.ts">ListConversationParticipant</a></code>
- <code><a href="./src/resources/messaging/conversations/conversations.ts">ListMessageAttachment</a></code>
- <code><a href="./src/resources/messaging/conversations/conversations.ts">ListMessagingGroupMember</a></code>
- <code><a href="./src/resources/messaging/conversations/conversations.ts">Message</a></code>
- <code><a href="./src/resources/messaging/conversations/conversations.ts">MessageAttachment</a></code>
- <code><a href="./src/resources/messaging/conversations/conversations.ts">MessagingGroup</a></code>
- <code><a href="./src/resources/messaging/conversations/conversations.ts">MessagingGroupMember</a></code>
- <code><a href="./src/resources/messaging/conversations/conversations.ts">ReadCursor</a></code>
- <code><a href="./src/resources/messaging/conversations/conversations.ts">TriggerConfig</a></code>
- <code><a href="./src/resources/messaging/conversations/conversations.ts">UpdateConversationRequest</a></code>

Methods:

- <code title="post /v1/messaging/conversations">client.messaging.conversations.<a href="./src/resources/messaging/conversations/conversations.ts">create</a>({ ...params }) -> Conversation</code>
- <code title="get /v1/messaging/conversations">client.messaging.conversations.<a href="./src/resources/messaging/conversations/conversations.ts">list</a>({ ...params }) -> ListConversation</code>
- <code title="get /v1/messaging/conversations/{id}">client.messaging.conversations.<a href="./src/resources/messaging/conversations/conversations.ts">retrieve</a>(id, { ...params }) -> Conversation</code>
- <code title="patch /v1/messaging/conversations/{id}">client.messaging.conversations.<a href="./src/resources/messaging/conversations/conversations.ts">update</a>(id, { ...params }) -> Conversation</code>

### Actions

Types:

- <code><a href="./src/resources/messaging/conversations/actions.ts">AssignConversationRequest</a></code>
- <code><a href="./src/resources/messaging/conversations/actions.ts">MarkConversationReadRequest</a></code>
- <code><a href="./src/resources/messaging/conversations/actions.ts">MuteConversationRequest</a></code>
- <code><a href="./src/resources/messaging/conversations/actions.ts">ReportConversationRequest</a></code>
- <code><a href="./src/resources/messaging/conversations/actions.ts">SetLegalHoldRequest</a></code>
- <code><a href="./src/resources/messaging/conversations/actions.ts">SetWorkflowStatusRequest</a></code>

Methods:

- <code title="post /v1/messaging/conversations/{id}/actions/set-legal-hold">client.messaging.conversations.actions.<a href="./src/resources/messaging/conversations/actions.ts">setLegalHold</a>(id, { ...params }) -> Conversation</code>
- <code title="post /v1/messaging/conversations/{id}/actions/redact">client.messaging.conversations.actions.<a href="./src/resources/messaging/conversations/actions.ts">redact</a>(id, { ...params }) -> Conversation</code>
- <code title="post /v1/messaging/conversations/{id}/actions/read">client.messaging.conversations.actions.<a href="./src/resources/messaging/conversations/actions.ts">read</a>(id, { ...params }) -> Conversation</code>
- <code title="post /v1/messaging/conversations/{id}/actions/archive">client.messaging.conversations.actions.<a href="./src/resources/messaging/conversations/actions.ts">archive</a>(id, { ...params }) -> Conversation</code>
- <code title="post /v1/messaging/conversations/{id}/actions/unarchive">client.messaging.conversations.actions.<a href="./src/resources/messaging/conversations/actions.ts">unarchive</a>(id, { ...params }) -> Conversation</code>
- <code title="post /v1/messaging/conversations/{id}/actions/leave">client.messaging.conversations.actions.<a href="./src/resources/messaging/conversations/actions.ts">leave</a>(id, { ...params }) -> Conversation</code>
- <code title="post /v1/messaging/conversations/{id}/actions/hide">client.messaging.conversations.actions.<a href="./src/resources/messaging/conversations/actions.ts">hide</a>(id, { ...params }) -> Conversation</code>
- <code title="post /v1/messaging/conversations/{id}/actions/unhide">client.messaging.conversations.actions.<a href="./src/resources/messaging/conversations/actions.ts">unhide</a>(id, { ...params }) -> Conversation</code>
- <code title="post /v1/messaging/conversations/{id}/actions/mute">client.messaging.conversations.actions.<a href="./src/resources/messaging/conversations/actions.ts">mute</a>(id, { ...params }) -> Conversation</code>
- <code title="post /v1/messaging/conversations/{id}/actions/unmute">client.messaging.conversations.actions.<a href="./src/resources/messaging/conversations/actions.ts">unmute</a>(id, { ...params }) -> Conversation</code>
- <code title="post /v1/messaging/conversations/{id}/actions/set-status">client.messaging.conversations.actions.<a href="./src/resources/messaging/conversations/actions.ts">setStatus</a>(id, { ...params }) -> Conversation</code>
- <code title="post /v1/messaging/conversations/{id}/actions/assign">client.messaging.conversations.actions.<a href="./src/resources/messaging/conversations/actions.ts">assign</a>(id, { ...params }) -> Conversation</code>
- <code title="post /v1/messaging/conversations/{id}/actions/report">client.messaging.conversations.actions.<a href="./src/resources/messaging/conversations/actions.ts">report</a>(id, { ...params }) -> Conversation</code>

### Links

Types:

- <code><a href="./src/resources/messaging/conversations/links.ts">AddConversationLinkRequest</a></code>
- <code><a href="./src/resources/messaging/conversations/links.ts">ConversationLink</a></code>
- <code><a href="./src/resources/messaging/conversations/links.ts">ListConversationLink</a></code>
- <code><a href="./src/resources/messaging/conversations/links.ts">LinkDeleteResponse</a></code>

Methods:

- <code title="post /v1/messaging/conversations/{id}/links">client.messaging.conversations.links.<a href="./src/resources/messaging/conversations/links.ts">create</a>(id, { ...params }) -> ConversationLink</code>
- <code title="delete /v1/messaging/conversations/{id}/links/{link_id}">client.messaging.conversations.links.<a href="./src/resources/messaging/conversations/links.ts">delete</a>(linkID, { ...params }) -> LinkDeleteResponse</code>
- <code title="get /v1/messaging/conversations/{id}/links">client.messaging.conversations.links.<a href="./src/resources/messaging/conversations/links.ts">list</a>(id, { ...params }) -> ListConversationLink</code>

### Messages

Types:

- <code><a href="./src/resources/messaging/conversations/messages.ts">ListMessage</a></code>
- <code><a href="./src/resources/messaging/conversations/messages.ts">MessageAttachmentInput</a></code>
- <code><a href="./src/resources/messaging/conversations/messages.ts">SendMessageRequest</a></code>

Methods:

- <code title="post /v1/messaging/conversations/{id}/messages">client.messaging.conversations.messages.<a href="./src/resources/messaging/conversations/messages.ts">create</a>(id, { ...params }) -> Message</code>
- <code title="get /v1/messaging/conversations/{id}/messages">client.messaging.conversations.messages.<a href="./src/resources/messaging/conversations/messages.ts">list</a>(id, { ...params }) -> ListMessage</code>

### Participants

Types:

- <code><a href="./src/resources/messaging/conversations/participants/participants.ts">AddParticipantRequest</a></code>
- <code><a href="./src/resources/messaging/conversations/participants/participants.ts">ParticipantDeleteResponse</a></code>

Methods:

- <code title="post /v1/messaging/conversations/{id}/participants">client.messaging.conversations.participants.<a href="./src/resources/messaging/conversations/participants/participants.ts">create</a>(id, { ...params }) -> Conversation</code>
- <code title="delete /v1/messaging/conversations/{id}/participants/{pid}">client.messaging.conversations.participants.<a href="./src/resources/messaging/conversations/participants/participants.ts">delete</a>(pid, { ...params }) -> ParticipantDeleteResponse</code>

#### Actions

Types:

- <code><a href="./src/resources/messaging/conversations/participants/actions.ts">UpdateParticipantRoleRequest</a></code>

Methods:

- <code title="post /v1/messaging/conversations/{id}/participants/{pid}/actions/set-role">client.messaging.conversations.participants.actions.<a href="./src/resources/messaging/conversations/participants/actions.ts">setRole</a>(pid, { ...params }) -> Conversation</code>

### Attachments

#### Actions

Types:

- <code><a href="./src/resources/messaging/conversations/attachments/actions.ts">AttachmentUploadTarget</a></code>
- <code><a href="./src/resources/messaging/conversations/attachments/actions.ts">CreateAttachmentUploadURLRequest</a></code>

Methods:

- <code title="post /v1/messaging/conversations/{id}/attachments/actions/upload-url">client.messaging.conversations.attachments.actions.<a href="./src/resources/messaging/conversations/attachments/actions.ts">uploadURL</a>(id, { ...params }) -> AttachmentUploadTarget</code>

## Messages

Types:

- <code><a href="./src/resources/messaging/messages/messages.ts">UpdateDraftRequest</a></code>

Methods:

- <code title="patch /v1/messaging/messages/{id}">client.messaging.messages.<a href="./src/resources/messaging/messages/messages.ts">update</a>(id, { ...params }) -> Message</code>

### Actions

Types:

- <code><a href="./src/resources/messaging/messages/actions.ts">ApproveSendDraftRequest</a></code>

Methods:

- <code title="post /v1/messaging/messages/{id}/actions/approve-send">client.messaging.messages.actions.<a href="./src/resources/messaging/messages/actions.ts">approveSend</a>(id, { ...params }) -> Message</code>
- <code title="post /v1/messaging/messages/{id}/actions/reject">client.messaging.messages.actions.<a href="./src/resources/messaging/messages/actions.ts">reject</a>(id, { ...params }) -> Message</code>
- <code title="post /v1/messaging/messages/{id}/actions/cancel">client.messaging.messages.actions.<a href="./src/resources/messaging/messages/actions.ts">cancel</a>(id, { ...params }) -> Message</code>

## Groups

Types:

- <code><a href="./src/resources/messaging/groups/groups.ts">CreateMessagingGroupRequest</a></code>
- <code><a href="./src/resources/messaging/groups/groups.ts">ListMessagingGroup</a></code>
- <code><a href="./src/resources/messaging/groups/groups.ts">UpdateMessagingGroupRequest</a></code>
- <code><a href="./src/resources/messaging/groups/groups.ts">GroupDeleteResponse</a></code>

Methods:

- <code title="post /v1/messaging/groups">client.messaging.groups.<a href="./src/resources/messaging/groups/groups.ts">create</a>({ ...params }) -> MessagingGroup</code>
- <code title="get /v1/messaging/groups">client.messaging.groups.<a href="./src/resources/messaging/groups/groups.ts">list</a>() -> ListMessagingGroup</code>
- <code title="get /v1/messaging/groups/{id}">client.messaging.groups.<a href="./src/resources/messaging/groups/groups.ts">retrieve</a>(id) -> MessagingGroup</code>
- <code title="patch /v1/messaging/groups/{id}">client.messaging.groups.<a href="./src/resources/messaging/groups/groups.ts">update</a>(id, { ...params }) -> MessagingGroup</code>
- <code title="delete /v1/messaging/groups/{id}">client.messaging.groups.<a href="./src/resources/messaging/groups/groups.ts">delete</a>(id) -> GroupDeleteResponse</code>

### Members

Types:

- <code><a href="./src/resources/messaging/groups/members.ts">AddMessagingGroupMemberRequest</a></code>

Methods:

- <code title="post /v1/messaging/groups/{id}/members">client.messaging.groups.members.<a href="./src/resources/messaging/groups/members.ts">create</a>(id, { ...params }) -> MessagingGroup</code>
- <code title="delete /v1/messaging/groups/{id}/members/{member_id}">client.messaging.groups.members.<a href="./src/resources/messaging/groups/members.ts">delete</a>(memberID, { ...params }) -> MessagingGroup</code>

## Blocks

Types:

- <code><a href="./src/resources/messaging/blocks.ts">AccountUser</a></code>
- <code><a href="./src/resources/messaging/blocks.ts">BlockRequest</a></code>
- <code><a href="./src/resources/messaging/blocks.ts">Consumption</a></code>
- <code><a href="./src/resources/messaging/blocks.ts">Department</a></code>
- <code><a href="./src/resources/messaging/blocks.ts">ListConsumption</a></code>
- <code><a href="./src/resources/messaging/blocks.ts">ListLocation</a></code>
- <code><a href="./src/resources/messaging/blocks.ts">ListMachine</a></code>
- <code><a href="./src/resources/messaging/blocks.ts">ListMessagingBlock</a></code>
- <code><a href="./src/resources/messaging/blocks.ts">ListProductionStep</a></code>
- <code><a href="./src/resources/messaging/blocks.ts">ListScanningStation</a></code>
- <code><a href="./src/resources/messaging/blocks.ts">Location</a></code>
- <code><a href="./src/resources/messaging/blocks.ts">LocationTypeCode</a></code>
- <code><a href="./src/resources/messaging/blocks.ts">Machine</a></code>
- <code><a href="./src/resources/messaging/blocks.ts">MessagingBlock</a></code>
- <code><a href="./src/resources/messaging/blocks.ts">ProductionOutput</a></code>
- <code><a href="./src/resources/messaging/blocks.ts">ProductionStep</a></code>
- <code><a href="./src/resources/messaging/blocks.ts">ScanningStation</a></code>
- <code><a href="./src/resources/messaging/blocks.ts">User</a></code>
- <code><a href="./src/resources/messaging/blocks.ts">BlockDeleteResponse</a></code>

Methods:

- <code title="post /v1/messaging/blocks">client.messaging.blocks.<a href="./src/resources/messaging/blocks.ts">create</a>({ ...params }) -> MessagingBlock</code>
- <code title="delete /v1/messaging/blocks/{id}">client.messaging.blocks.<a href="./src/resources/messaging/blocks.ts">delete</a>(id) -> BlockDeleteResponse</code>
- <code title="get /v1/messaging/blocks">client.messaging.blocks.<a href="./src/resources/messaging/blocks.ts">list</a>({ ...params }) -> ListMessagingBlock</code>

## Preferences

Types:

- <code><a href="./src/resources/messaging/preferences.ts">ListNotificationPreference</a></code>
- <code><a href="./src/resources/messaging/preferences.ts">NotificationPreference</a></code>
- <code><a href="./src/resources/messaging/preferences.ts">UpsertNotificationPreferenceRequest</a></code>

Methods:

- <code title="get /v1/messaging/preferences">client.messaging.preferences.<a href="./src/resources/messaging/preferences.ts">list</a>() -> ListNotificationPreference</code>
- <code title="put /v1/messaging/preferences">client.messaging.preferences.<a href="./src/resources/messaging/preferences.ts">update</a>({ ...params }) -> NotificationPreference</code>

## EmailDomains

Types:

- <code><a href="./src/resources/messaging/email-domains/email-domains.ts">CreateEmailDomainRequest</a></code>
- <code><a href="./src/resources/messaging/email-domains/email-domains.ts">EmailDomain</a></code>
- <code><a href="./src/resources/messaging/email-domains/email-domains.ts">ListEmailDomain</a></code>
- <code><a href="./src/resources/messaging/email-domains/email-domains.ts">EmailDomainDeleteResponse</a></code>

Methods:

- <code title="post /v1/messaging/email-domains">client.messaging.emailDomains.<a href="./src/resources/messaging/email-domains/email-domains.ts">create</a>({ ...params }) -> EmailDomain</code>
- <code title="get /v1/messaging/email-domains">client.messaging.emailDomains.<a href="./src/resources/messaging/email-domains/email-domains.ts">list</a>() -> ListEmailDomain</code>
- <code title="get /v1/messaging/email-domains/{id}">client.messaging.emailDomains.<a href="./src/resources/messaging/email-domains/email-domains.ts">retrieve</a>(id) -> EmailDomain</code>
- <code title="delete /v1/messaging/email-domains/{id}">client.messaging.emailDomains.<a href="./src/resources/messaging/email-domains/email-domains.ts">delete</a>(id) -> EmailDomainDeleteResponse</code>

### Actions

Methods:

- <code title="post /v1/messaging/email-domains/{id}/actions/verify">client.messaging.emailDomains.actions.<a href="./src/resources/messaging/email-domains/actions.ts">verify</a>(id) -> EmailDomain</code>

## EmailInboxes

Types:

- <code><a href="./src/resources/messaging/email-inboxes.ts">CreateEmailInboxRequest</a></code>
- <code><a href="./src/resources/messaging/email-inboxes.ts">EmailInbox</a></code>
- <code><a href="./src/resources/messaging/email-inboxes.ts">ListEmailInbox</a></code>
- <code><a href="./src/resources/messaging/email-inboxes.ts">UpdateEmailInboxRequest</a></code>
- <code><a href="./src/resources/messaging/email-inboxes.ts">EmailInboxDeleteResponse</a></code>

Methods:

- <code title="post /v1/messaging/email-inboxes">client.messaging.emailInboxes.<a href="./src/resources/messaging/email-inboxes.ts">create</a>({ ...params }) -> EmailInbox</code>
- <code title="get /v1/messaging/email-inboxes">client.messaging.emailInboxes.<a href="./src/resources/messaging/email-inboxes.ts">list</a>({ ...params }) -> ListEmailInbox</code>
- <code title="get /v1/messaging/email-inboxes/{id}">client.messaging.emailInboxes.<a href="./src/resources/messaging/email-inboxes.ts">retrieve</a>(id, { ...params }) -> EmailInbox</code>
- <code title="patch /v1/messaging/email-inboxes/{id}">client.messaging.emailInboxes.<a href="./src/resources/messaging/email-inboxes.ts">update</a>(id, { ...params }) -> EmailInbox</code>
- <code title="delete /v1/messaging/email-inboxes/{id}">client.messaging.emailInboxes.<a href="./src/resources/messaging/email-inboxes.ts">delete</a>(id) -> EmailInboxDeleteResponse</code>

# Sales

## AccountGroups

Types:

- <code><a href="./src/resources/sales/account-groups.ts">AccountGroup</a></code>
- <code><a href="./src/resources/sales/account-groups.ts">CreateAccountGroupRequest</a></code>
- <code><a href="./src/resources/sales/account-groups.ts">ListAccountGroup</a></code>
- <code><a href="./src/resources/sales/account-groups.ts">UpdateAccountGroupRequest</a></code>
- <code><a href="./src/resources/sales/account-groups.ts">AccountGroupDeleteResponse</a></code>

Methods:

- <code title="get /v1/sales/account-groups">client.sales.accountGroups.<a href="./src/resources/sales/account-groups.ts">list</a>({ ...params }) -> ListAccountGroup</code>
- <code title="get /v1/sales/account-groups/{id}">client.sales.accountGroups.<a href="./src/resources/sales/account-groups.ts">retrieve</a>(id) -> AccountGroup</code>
- <code title="post /v1/sales/account-groups">client.sales.accountGroups.<a href="./src/resources/sales/account-groups.ts">create</a>({ ...params }) -> AccountGroup</code>
- <code title="patch /v1/sales/account-groups/{id}">client.sales.accountGroups.<a href="./src/resources/sales/account-groups.ts">update</a>(id, { ...params }) -> AccountGroup</code>
- <code title="delete /v1/sales/account-groups/{id}">client.sales.accountGroups.<a href="./src/resources/sales/account-groups.ts">delete</a>(id) -> AccountGroupDeleteResponse</code>

## Addresses

Types:

- <code><a href="./src/resources/sales/addresses.ts">AddressInput</a></code>
- <code><a href="./src/resources/sales/addresses.ts">ListAddress</a></code>
- <code><a href="./src/resources/sales/addresses.ts">UpdateAddressRequest</a></code>
- <code><a href="./src/resources/sales/addresses.ts">AddressDeleteResponse</a></code>

Methods:

- <code title="get /v1/sales/addresses">client.sales.addresses.<a href="./src/resources/sales/addresses.ts">list</a>({ ...params }) -> ListAddress</code>
- <code title="get /v1/sales/addresses/{id}">client.sales.addresses.<a href="./src/resources/sales/addresses.ts">retrieve</a>(id) -> Address</code>
- <code title="post /v1/sales/addresses">client.sales.addresses.<a href="./src/resources/sales/addresses.ts">create</a>({ ...params }) -> Address</code>
- <code title="patch /v1/sales/addresses/{id}">client.sales.addresses.<a href="./src/resources/sales/addresses.ts">update</a>(id, { ...params }) -> Address</code>
- <code title="delete /v1/sales/addresses/{id}">client.sales.addresses.<a href="./src/resources/sales/addresses.ts">delete</a>(id) -> AddressDeleteResponse</code>

## AccountStatuses

Types:

- <code><a href="./src/resources/sales/account-statuses.ts">AccountStatus</a></code>
- <code><a href="./src/resources/sales/account-statuses.ts">ListAccountStatus</a></code>

Methods:

- <code title="get /v1/sales/account-statuses">client.sales.accountStatuses.<a href="./src/resources/sales/account-statuses.ts">list</a>({ ...params }) -> ListAccountStatus</code>
- <code title="get /v1/sales/account-statuses/{id}">client.sales.accountStatuses.<a href="./src/resources/sales/account-statuses.ts">retrieve</a>(id, { ...params }) -> AccountStatus</code>

## Priorities

Types:

- <code><a href="./src/resources/sales/priorities.ts">ListPriority</a></code>
- <code><a href="./src/resources/sales/priorities.ts">Priority</a></code>

Methods:

- <code title="get /v1/sales/priorities">client.sales.priorities.<a href="./src/resources/sales/priorities.ts">list</a>({ ...params }) -> ListPriority</code>
- <code title="get /v1/sales/priorities/{id}">client.sales.priorities.<a href="./src/resources/sales/priorities.ts">retrieve</a>(id, { ...params }) -> Priority</code>

## Customers

Types:

- <code><a href="./src/resources/sales/customers/customers.ts">Carrier</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">CreateCustomerRequest</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">Customer</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">CustomerContactInfo</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">CustomerDefaults</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">CustomerFreightPreferences</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">CustomerNotificationPreferences</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">ListCustomer</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">ListServiceLevel</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">PaymentTerm</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">QuantityInput</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">ServiceLevel</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">ShippingTerm</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">UpdateCustomerRequest</a></code>
- <code><a href="./src/resources/sales/customers/customers.ts">CustomerDeleteResponse</a></code>

Methods:

- <code title="get /v1/sales/customers">client.sales.customers.<a href="./src/resources/sales/customers/customers.ts">list</a>({ ...params }) -> ListCustomer</code>
- <code title="get /v1/sales/customers/{id}">client.sales.customers.<a href="./src/resources/sales/customers/customers.ts">retrieve</a>(id, { ...params }) -> Customer</code>
- <code title="post /v1/sales/customers">client.sales.customers.<a href="./src/resources/sales/customers/customers.ts">create</a>({ ...params }) -> Customer</code>
- <code title="patch /v1/sales/customers/{id}">client.sales.customers.<a href="./src/resources/sales/customers/customers.ts">update</a>(id, { ...params }) -> Customer</code>
- <code title="delete /v1/sales/customers/{id}">client.sales.customers.<a href="./src/resources/sales/customers/customers.ts">delete</a>(id) -> CustomerDeleteResponse</code>

### Actions

Types:

- <code><a href="./src/resources/sales/customers/actions.ts">MergeCustomersRequest</a></code>

Methods:

- <code title="post /v1/sales/customers/{id}/actions/merge">client.sales.customers.actions.<a href="./src/resources/sales/customers/actions.ts">merge</a>(id, { ...params }) -> Customer</code>

## Contacts

### Actions

Types:

- <code><a href="./src/resources/sales/contacts/actions.ts">ContactMatch</a></code>
- <code><a href="./src/resources/sales/contacts/actions.ts">FindContactByEmailRequest</a></code>
- <code><a href="./src/resources/sales/contacts/actions.ts">ListContactMatch</a></code>

Methods:

- <code title="post /v1/sales/contacts/actions/find-by-email">client.sales.contacts.actions.<a href="./src/resources/sales/contacts/actions.ts">findByEmail</a>({ ...params }) -> ListContactMatch</code>

## SalesOrders

Types:

- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">CheckoutSalesOrderRequest</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">CheckoutSalesOrderResponse</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">CreateSalesOrderLineInput</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">CreateSalesOrderRequest</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">CreatedBy</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">Freight</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ListQuotedSalesOrderLine</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ListRecord</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ListSalesOrder</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ListSalesOrderLine</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">ListSalesOrderStatus</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">OrderContact</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">OrderDiscount</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">QuoteSalesOrderLineInput</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">QuoteSalesOrderPricesRequest</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">QuoteSalesOrderPricesResponse</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">QuotedSalesOrderLine</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">Record</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrder</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrderEmailContactInput</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrderLine</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrderQuoteRate</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrderRelated</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrderStageTotal</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrderStatus</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrderTotals</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">UpdateSalesOrderRequest</a></code>
- <code><a href="./src/resources/sales/sales-orders/sales-orders.ts">SalesOrderDeleteResponse</a></code>

Methods:

- <code title="get /v1/sales/sales-orders/statuses">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">retrieveStatuses</a>({ ...params }) -> ListSalesOrderStatus</code>
- <code title="get /v1/sales/sales-orders">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">list</a>({ ...params }) -> ListSalesOrder</code>
- <code title="get /v1/sales/sales-orders/{id}">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">retrieve</a>(id, { ...params }) -> SalesOrder</code>
- <code title="post /v1/sales/sales-orders">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">create</a>({ ...params }) -> SalesOrder</code>
- <code title="patch /v1/sales/sales-orders/{id}">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">update</a>(id, { ...params }) -> SalesOrder</code>
- <code title="delete /v1/sales/sales-orders/{id}">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">delete</a>(id) -> SalesOrderDeleteResponse</code>
- <code title="post /v1/sales/sales-orders/{id}/checkout">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">checkout</a>(id, { ...params }) -> CheckoutSalesOrderResponse</code>
- <code title="post /v1/sales/sales-orders/price-quote">client.sales.salesOrders.<a href="./src/resources/sales/sales-orders/sales-orders.ts">priceQuote</a>({ ...params }) -> QuoteSalesOrderPricesResponse</code>

### Actions

Types:

- <code><a href="./src/resources/sales/sales-orders/actions.ts">BulkDeleteSalesOrdersRequest</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">IssueSalesOrderRequest</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">ProductionRun</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">QuoteSalesOrderFreightResponse</a></code>
- <code><a href="./src/resources/sales/sales-orders/actions.ts">ActionBulkDeleteResponse</a></code>

Methods:

- <code title="post /v1/sales/sales-orders/actions/bulk-delete">client.sales.salesOrders.actions.<a href="./src/resources/sales/sales-orders/actions.ts">bulkDelete</a>({ ...params }) -> ActionBulkDeleteResponse</code>
- <code title="put /v1/sales/sales-orders/{id}/actions/issue">client.sales.salesOrders.actions.<a href="./src/resources/sales/sales-orders/actions.ts">issue</a>(id, { ...params }) -> SalesOrder</code>
- <code title="put /v1/sales/sales-orders/{id}/actions/unissue">client.sales.salesOrders.actions.<a href="./src/resources/sales/sales-orders/actions.ts">unissue</a>(id) -> SalesOrder</code>
- <code title="put /v1/sales/sales-orders/{id}/actions/close">client.sales.salesOrders.actions.<a href="./src/resources/sales/sales-orders/actions.ts">close</a>(id) -> SalesOrder</code>
- <code title="put /v1/sales/sales-orders/{id}/actions/open">client.sales.salesOrders.actions.<a href="./src/resources/sales/sales-orders/actions.ts">open</a>(id) -> SalesOrder</code>
- <code title="post /v1/sales/sales-orders/{id}/actions/quote-freight">client.sales.salesOrders.actions.<a href="./src/resources/sales/sales-orders/actions.ts">quoteFreight</a>(id) -> QuoteSalesOrderFreightResponse</code>
- <code title="post /v1/sales/sales-orders/{id}/actions/create-production-run">client.sales.salesOrders.actions.<a href="./src/resources/sales/sales-orders/actions.ts">createProductionRun</a>(id, { ...params }) -> ProductionRun</code>

### Lines

Types:

- <code><a href="./src/resources/sales/sales-orders/lines/lines.ts">CreateSalesOrderLineRequest</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines/lines.ts">UpdateSalesOrderLineRequest</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines/lines.ts">LineDeleteResponse</a></code>

Methods:

- <code title="post /v1/sales/sales-orders/{id}/lines">client.sales.salesOrders.lines.<a href="./src/resources/sales/sales-orders/lines/lines.ts">create</a>(id, { ...params }) -> SalesOrderLine</code>
- <code title="patch /v1/sales/sales-orders/{id}/lines/{line_id}">client.sales.salesOrders.lines.<a href="./src/resources/sales/sales-orders/lines/lines.ts">update</a>(lineID, { ...params }) -> SalesOrderLine</code>
- <code title="delete /v1/sales/sales-orders/{id}/lines/{line_id}">client.sales.salesOrders.lines.<a href="./src/resources/sales/sales-orders/lines/lines.ts">delete</a>(lineID, { ...params }) -> LineDeleteResponse</code>

#### Actions

Types:

- <code><a href="./src/resources/sales/sales-orders/lines/actions.ts">ReorderSalesOrderLinesRequest</a></code>
- <code><a href="./src/resources/sales/sales-orders/lines/actions.ts">ActionReorderResponse</a></code>

Methods:

- <code title="post /v1/sales/sales-orders/{id}/lines/actions/reorder">client.sales.salesOrders.lines.actions.<a href="./src/resources/sales/sales-orders/lines/actions.ts">reorder</a>(id, { ...params }) -> ActionReorderResponse</code>

# Finance

Types:

- <code><a href="./src/resources/finance/finance.ts">AdjustmentType</a></code>
- <code><a href="./src/resources/finance/finance.ts">ListAdjustmentType</a></code>
- <code><a href="./src/resources/finance/finance.ts">ListTransactionMethod</a></code>
- <code><a href="./src/resources/finance/finance.ts">ListTransactionType</a></code>
- <code><a href="./src/resources/finance/finance.ts">TransactionMethod</a></code>
- <code><a href="./src/resources/finance/finance.ts">TransactionType</a></code>

Methods:

- <code title="get /v1/finance/transaction-types">client.finance.<a href="./src/resources/finance/finance.ts">retrieveTransactionTypes</a>({ ...params }) -> ListTransactionType</code>
- <code title="get /v1/finance/transaction-methods">client.finance.<a href="./src/resources/finance/finance.ts">retrieveTransactionMethods</a>({ ...params }) -> ListTransactionMethod</code>
- <code title="get /v1/finance/adjustment-types">client.finance.<a href="./src/resources/finance/finance.ts">retrieveAdjustmentTypes</a>({ ...params }) -> ListAdjustmentType</code>

## PaymentTerms

Types:

- <code><a href="./src/resources/finance/payment-terms.ts">CreatePaymentTermRequest</a></code>
- <code><a href="./src/resources/finance/payment-terms.ts">ListPaymentTerm</a></code>
- <code><a href="./src/resources/finance/payment-terms.ts">UpdatePaymentTermRequest</a></code>
- <code><a href="./src/resources/finance/payment-terms.ts">PaymentTermDeleteResponse</a></code>

Methods:

- <code title="get /v1/finance/payment-terms">client.finance.paymentTerms.<a href="./src/resources/finance/payment-terms.ts">list</a>({ ...params }) -> ListPaymentTerm</code>
- <code title="get /v1/finance/payment-terms/{id}">client.finance.paymentTerms.<a href="./src/resources/finance/payment-terms.ts">retrieve</a>(id, { ...params }) -> PaymentTerm</code>
- <code title="post /v1/finance/payment-terms">client.finance.paymentTerms.<a href="./src/resources/finance/payment-terms.ts">create</a>({ ...params }) -> PaymentTerm</code>
- <code title="patch /v1/finance/payment-terms/{id}">client.finance.paymentTerms.<a href="./src/resources/finance/payment-terms.ts">update</a>(id, { ...params }) -> PaymentTerm</code>
- <code title="delete /v1/finance/payment-terms/{id}">client.finance.paymentTerms.<a href="./src/resources/finance/payment-terms.ts">delete</a>(id) -> PaymentTermDeleteResponse</code>

# Operations

## ShippingTerms

Types:

- <code><a href="./src/resources/operations/shipping-terms.ts">CreateShippingTermRequest</a></code>
- <code><a href="./src/resources/operations/shipping-terms.ts">ListShippingTerm</a></code>
- <code><a href="./src/resources/operations/shipping-terms.ts">UpdateShippingTermRequest</a></code>
- <code><a href="./src/resources/operations/shipping-terms.ts">ShippingTermDeleteResponse</a></code>

Methods:

- <code title="get /v1/operations/shipping-terms">client.operations.shippingTerms.<a href="./src/resources/operations/shipping-terms.ts">list</a>({ ...params }) -> ListShippingTerm</code>
- <code title="get /v1/operations/shipping-terms/{id}">client.operations.shippingTerms.<a href="./src/resources/operations/shipping-terms.ts">retrieve</a>(id, { ...params }) -> ShippingTerm</code>
- <code title="post /v1/operations/shipping-terms">client.operations.shippingTerms.<a href="./src/resources/operations/shipping-terms.ts">create</a>({ ...params }) -> ShippingTerm</code>
- <code title="patch /v1/operations/shipping-terms/{id}">client.operations.shippingTerms.<a href="./src/resources/operations/shipping-terms.ts">update</a>(id, { ...params }) -> ShippingTerm</code>
- <code title="delete /v1/operations/shipping-terms/{id}">client.operations.shippingTerms.<a href="./src/resources/operations/shipping-terms.ts">delete</a>(id) -> ShippingTermDeleteResponse</code>

## Carriers

Types:

- <code><a href="./src/resources/operations/carriers/carriers.ts">CreateCarrierRequest</a></code>
- <code><a href="./src/resources/operations/carriers/carriers.ts">ListCarrier</a></code>
- <code><a href="./src/resources/operations/carriers/carriers.ts">UpdateCarrierRequest</a></code>
- <code><a href="./src/resources/operations/carriers/carriers.ts">CarrierDeleteResponse</a></code>

Methods:

- <code title="get /v1/operations/carriers">client.operations.carriers.<a href="./src/resources/operations/carriers/carriers.ts">list</a>({ ...params }) -> ListCarrier</code>
- <code title="get /v1/operations/carriers/{id}">client.operations.carriers.<a href="./src/resources/operations/carriers/carriers.ts">retrieve</a>(id, { ...params }) -> Carrier</code>
- <code title="post /v1/operations/carriers">client.operations.carriers.<a href="./src/resources/operations/carriers/carriers.ts">create</a>({ ...params }) -> Carrier</code>
- <code title="patch /v1/operations/carriers/{id}">client.operations.carriers.<a href="./src/resources/operations/carriers/carriers.ts">update</a>(id, { ...params }) -> Carrier</code>
- <code title="delete /v1/operations/carriers/{id}">client.operations.carriers.<a href="./src/resources/operations/carriers/carriers.ts">delete</a>(id) -> CarrierDeleteResponse</code>

### ServiceLevels

Types:

- <code><a href="./src/resources/operations/carriers/service-levels.ts">CreateServiceLevelRequest</a></code>
- <code><a href="./src/resources/operations/carriers/service-levels.ts">UpdateServiceLevelRequest</a></code>
- <code><a href="./src/resources/operations/carriers/service-levels.ts">ServiceLevelDeleteResponse</a></code>

Methods:

- <code title="get /v1/operations/carriers/{carrier_id}/service-levels">client.operations.carriers.serviceLevels.<a href="./src/resources/operations/carriers/service-levels.ts">list</a>(carrierID, { ...params }) -> ListServiceLevel</code>
- <code title="get /v1/operations/carriers/{carrier_id}/service-levels/{id}">client.operations.carriers.serviceLevels.<a href="./src/resources/operations/carriers/service-levels.ts">retrieve</a>(id, { ...params }) -> ServiceLevel</code>
- <code title="post /v1/operations/carriers/{carrier_id}/service-levels">client.operations.carriers.serviceLevels.<a href="./src/resources/operations/carriers/service-levels.ts">create</a>(carrierID, { ...params }) -> ServiceLevel</code>
- <code title="patch /v1/operations/carriers/{carrier_id}/service-levels/{id}">client.operations.carriers.serviceLevels.<a href="./src/resources/operations/carriers/service-levels.ts">update</a>(id, { ...params }) -> ServiceLevel</code>
- <code title="delete /v1/operations/carriers/{carrier_id}/service-levels/{id}">client.operations.carriers.serviceLevels.<a href="./src/resources/operations/carriers/service-levels.ts">delete</a>(id, { ...params }) -> ServiceLevelDeleteResponse</code>

## Locations

Types:

- <code><a href="./src/resources/operations/locations.ts">CreateLocationRequest</a></code>
- <code><a href="./src/resources/operations/locations.ts">UpdateLocationRequest</a></code>
- <code><a href="./src/resources/operations/locations.ts">LocationDeleteResponse</a></code>

Methods:

- <code title="get /v1/operations/locations">client.operations.locations.<a href="./src/resources/operations/locations.ts">list</a>({ ...params }) -> ListLocation</code>
- <code title="get /v1/operations/locations/{id}">client.operations.locations.<a href="./src/resources/operations/locations.ts">retrieve</a>(id, { ...params }) -> Location</code>
- <code title="post /v1/operations/locations">client.operations.locations.<a href="./src/resources/operations/locations.ts">create</a>({ ...params }) -> Location</code>
- <code title="patch /v1/operations/locations/{id}">client.operations.locations.<a href="./src/resources/operations/locations.ts">update</a>(id, { ...params }) -> Location</code>
- <code title="delete /v1/operations/locations/{id}">client.operations.locations.<a href="./src/resources/operations/locations.ts">delete</a>(id) -> LocationDeleteResponse</code>

## LocationTypes

Types:

- <code><a href="./src/resources/operations/location-types.ts">ListLocationType</a></code>
- <code><a href="./src/resources/operations/location-types.ts">LocationType</a></code>

Methods:

- <code title="get /v1/operations/location-types">client.operations.locationTypes.<a href="./src/resources/operations/location-types.ts">list</a>({ ...params }) -> ListLocationType</code>
- <code title="get /v1/operations/location-types/{id}">client.operations.locationTypes.<a href="./src/resources/operations/location-types.ts">retrieve</a>(id) -> LocationType</code>

## ScanningStations

Types:

- <code><a href="./src/resources/operations/scanning-stations.ts">CreateScanningStationRequest</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">UpdateScanningStationRequest</a></code>
- <code><a href="./src/resources/operations/scanning-stations.ts">ScanningStationDeleteResponse</a></code>

Methods:

- <code title="get /v1/operations/scanning-stations">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations.ts">list</a>({ ...params }) -> ListScanningStation</code>
- <code title="get /v1/operations/scanning-stations/{id}">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations.ts">retrieve</a>(id, { ...params }) -> ScanningStation</code>
- <code title="post /v1/operations/scanning-stations">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations.ts">create</a>({ ...params }) -> ScanningStation</code>
- <code title="patch /v1/operations/scanning-stations/{id}">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations.ts">update</a>(id, { ...params }) -> ScanningStation</code>
- <code title="delete /v1/operations/scanning-stations/{id}">client.operations.scanningStations.<a href="./src/resources/operations/scanning-stations.ts">delete</a>(id) -> ScanningStationDeleteResponse</code>

# Identity

## AccountUsers

Types:

- <code><a href="./src/resources/identity/account-users/account-users.ts">CreateAccountUserRequest</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">ListAccountUser</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">NotificationPreferenceItem</a></code>
- <code><a href="./src/resources/identity/account-users/account-users.ts">UpdateAccountUserRequest</a></code>

Methods:

- <code title="get /v1/identity/account-users">client.identity.accountUsers.<a href="./src/resources/identity/account-users/account-users.ts">list</a>({ ...params }) -> ListAccountUser</code>
- <code title="get /v1/identity/account-users/{id}">client.identity.accountUsers.<a href="./src/resources/identity/account-users/account-users.ts">retrieve</a>(id, { ...params }) -> AccountUser</code>
- <code title="post /v1/identity/account-users">client.identity.accountUsers.<a href="./src/resources/identity/account-users/account-users.ts">create</a>({ ...params }) -> AccountUser</code>
- <code title="patch /v1/identity/account-users/{id}">client.identity.accountUsers.<a href="./src/resources/identity/account-users/account-users.ts">update</a>(id, { ...params }) -> AccountUser</code>

### Actions

Types:

- <code><a href="./src/resources/identity/account-users/actions.ts">ActionActivateResponse</a></code>
- <code><a href="./src/resources/identity/account-users/actions.ts">ActionDisableResponse</a></code>
- <code><a href="./src/resources/identity/account-users/actions.ts">ActionRemoveResponse</a></code>

Methods:

- <code title="put /v1/identity/account-users/{id}/actions/activate">client.identity.accountUsers.actions.<a href="./src/resources/identity/account-users/actions.ts">activate</a>(id) -> ActionActivateResponse</code>
- <code title="put /v1/identity/account-users/{id}/actions/disable">client.identity.accountUsers.actions.<a href="./src/resources/identity/account-users/actions.ts">disable</a>(id) -> ActionDisableResponse</code>
- <code title="put /v1/identity/account-users/{id}/actions/remove">client.identity.accountUsers.actions.<a href="./src/resources/identity/account-users/actions.ts">remove</a>(id) -> ActionRemoveResponse</code>

## Accounts

Types:

- <code><a href="./src/resources/identity/accounts.ts">AccountUpdateFaviconResponse</a></code>

Methods:

- <code title="put /v1/identity/accounts/{id}/favicon">client.identity.accounts.<a href="./src/resources/identity/accounts.ts">updateFavicon</a>(id) -> AccountUpdateFaviconResponse</code>

## Roles

Types:

- <code><a href="./src/resources/identity/roles.ts">CreateRoleRequest</a></code>
- <code><a href="./src/resources/identity/roles.ts">ListRole</a></code>
- <code><a href="./src/resources/identity/roles.ts">UpdateRoleRequest</a></code>
- <code><a href="./src/resources/identity/roles.ts">RoleDeleteResponse</a></code>

Methods:

- <code title="get /v1/identity/roles">client.identity.roles.<a href="./src/resources/identity/roles.ts">list</a>({ ...params }) -> ListRole</code>
- <code title="get /v1/identity/roles/{id}">client.identity.roles.<a href="./src/resources/identity/roles.ts">retrieve</a>(id, { ...params }) -> Role</code>
- <code title="post /v1/identity/roles">client.identity.roles.<a href="./src/resources/identity/roles.ts">create</a>({ ...params }) -> Role</code>
- <code title="patch /v1/identity/roles/{id}">client.identity.roles.<a href="./src/resources/identity/roles.ts">update</a>(id, { ...params }) -> Role</code>
- <code title="delete /v1/identity/roles/{id}">client.identity.roles.<a href="./src/resources/identity/roles.ts">delete</a>(id) -> RoleDeleteResponse</code>

# Settings

## PortalDomains

Types:

- <code><a href="./src/resources/settings/portal-domains/portal-domains.ts">CreatePortalDomainRequest</a></code>
- <code><a href="./src/resources/settings/portal-domains/portal-domains.ts">DNSRecord</a></code>
- <code><a href="./src/resources/settings/portal-domains/portal-domains.ts">ListDNSRecord</a></code>
- <code><a href="./src/resources/settings/portal-domains/portal-domains.ts">ListPortalDomain</a></code>
- <code><a href="./src/resources/settings/portal-domains/portal-domains.ts">PortalDomain</a></code>
- <code><a href="./src/resources/settings/portal-domains/portal-domains.ts">PortalDomainDeleteResponse</a></code>

Methods:

- <code title="post /v1/settings/portal-domains">client.settings.portalDomains.<a href="./src/resources/settings/portal-domains/portal-domains.ts">create</a>({ ...params }) -> PortalDomain</code>
- <code title="get /v1/settings/portal-domains">client.settings.portalDomains.<a href="./src/resources/settings/portal-domains/portal-domains.ts">list</a>() -> ListPortalDomain</code>
- <code title="get /v1/settings/portal-domains/{id}">client.settings.portalDomains.<a href="./src/resources/settings/portal-domains/portal-domains.ts">retrieve</a>(id) -> PortalDomain</code>
- <code title="delete /v1/settings/portal-domains/{id}">client.settings.portalDomains.<a href="./src/resources/settings/portal-domains/portal-domains.ts">delete</a>(id) -> PortalDomainDeleteResponse</code>

### Actions

Methods:

- <code title="post /v1/settings/portal-domains/{id}/actions/verify">client.settings.portalDomains.actions.<a href="./src/resources/settings/portal-domains/actions.ts">verify</a>(id) -> PortalDomain</code>

## Integrations

Types:

- <code><a href="./src/resources/settings/integrations.ts">AccountIntegration</a></code>
- <code><a href="./src/resources/settings/integrations.ts">CreateAccountIntegrationRequest</a></code>
- <code><a href="./src/resources/settings/integrations.ts">ListAccountIntegration</a></code>
- <code><a href="./src/resources/settings/integrations.ts">UpdateAccountIntegrationRequest</a></code>

Methods:

- <code title="get /v1/settings/integrations">client.settings.integrations.<a href="./src/resources/settings/integrations.ts">list</a>({ ...params }) -> ListAccountIntegration</code>
- <code title="post /v1/settings/integrations">client.settings.integrations.<a href="./src/resources/settings/integrations.ts">create</a>({ ...params }) -> AccountIntegration</code>
- <code title="put /v1/settings/integrations/{id}">client.settings.integrations.<a href="./src/resources/settings/integrations.ts">update</a>(id, { ...params }) -> AccountIntegration</code>
- <code title="delete /v1/settings/integrations/{id}">client.settings.integrations.<a href="./src/resources/settings/integrations.ts">delete</a>(id) -> AccountIntegration</code>
