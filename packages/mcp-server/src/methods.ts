// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.auth.apiKeys.retrieve',
    fullyQualifiedName: 'auth.apiKeys.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/auth/api-keys/{id}',
  },
  {
    clientCallName: 'client.auth.apiKeys.list',
    fullyQualifiedName: 'auth.apiKeys.list',
    httpMethod: 'get',
    httpPath: '/v1/auth/api-keys',
  },
  {
    clientCallName: 'client.auth.apiKeys.create',
    fullyQualifiedName: 'auth.apiKeys.create',
    httpMethod: 'post',
    httpPath: '/v1/auth/api-keys',
  },
  {
    clientCallName: 'client.auth.apiKeys.delete',
    fullyQualifiedName: 'auth.apiKeys.delete',
    httpMethod: 'delete',
    httpPath: '/v1/auth/api-keys/{id}',
  },
  {
    clientCallName: 'client.auth.apiKeys.actions.rotate',
    fullyQualifiedName: 'auth.apiKeys.actions.rotate',
    httpMethod: 'post',
    httpPath: '/v1/auth/api-keys/{id}/actions/rotate',
  },
  {
    clientCallName: 'client.core.sandboxes.list',
    fullyQualifiedName: 'core.sandboxes.list',
    httpMethod: 'get',
    httpPath: '/v1/core/sandboxes',
  },
  {
    clientCallName: 'client.core.sandboxes.retrieve',
    fullyQualifiedName: 'core.sandboxes.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/core/sandboxes/{id}',
  },
  {
    clientCallName: 'client.core.sandboxes.create',
    fullyQualifiedName: 'core.sandboxes.create',
    httpMethod: 'post',
    httpPath: '/v1/core/sandboxes',
  },
  {
    clientCallName: 'client.core.sandboxes.delete',
    fullyQualifiedName: 'core.sandboxes.delete',
    httpMethod: 'delete',
    httpPath: '/v1/core/sandboxes/{id}',
  },
  {
    clientCallName: 'client.core.requestLogs.list',
    fullyQualifiedName: 'core.requestLogs.list',
    httpMethod: 'get',
    httpPath: '/v1/core/request-logs',
  },
  {
    clientCallName: 'client.core.requestLogs.retrieve',
    fullyQualifiedName: 'core.requestLogs.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/core/request-logs/{id}',
  },
  {
    clientCallName: 'client.core.auditEvents.list',
    fullyQualifiedName: 'core.auditEvents.list',
    httpMethod: 'get',
    httpPath: '/v1/core/audit-events',
  },
  {
    clientCallName: 'client.core.auditEvents.retrieve',
    fullyQualifiedName: 'core.auditEvents.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/core/audit-events/{id}',
  },
  {
    clientCallName: 'client.core.auditEvents.retrieveResourceTypes',
    fullyQualifiedName: 'core.auditEvents.retrieveResourceTypes',
    httpMethod: 'get',
    httpPath: '/v1/core/audit-events/resource-types',
  },
  {
    clientCallName: 'client.core.addresses.retrieveSuggestions',
    fullyQualifiedName: 'core.addresses.retrieveSuggestions',
    httpMethod: 'get',
    httpPath: '/v1/core/addresses/suggestions',
  },
  {
    clientCallName: 'client.core.addresses.actions.validate',
    fullyQualifiedName: 'core.addresses.actions.validate',
    httpMethod: 'put',
    httpPath: '/v1/core/addresses/actions/validate',
  },
  {
    clientCallName: 'client.core.emailLogs.list',
    fullyQualifiedName: 'core.emailLogs.list',
    httpMethod: 'get',
    httpPath: '/v1/core/email-logs',
  },
  {
    clientCallName: 'client.core.emailLogs.retrieve',
    fullyQualifiedName: 'core.emailLogs.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/core/email-logs/{id}',
  },
  {
    clientCallName: 'client.catalog.units.list',
    fullyQualifiedName: 'catalog.units.list',
    httpMethod: 'get',
    httpPath: '/v1/catalog/units',
  },
  {
    clientCallName: 'client.catalog.units.retrieve',
    fullyQualifiedName: 'catalog.units.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/catalog/units/{id}',
  },
  {
    clientCallName: 'client.catalog.units.create',
    fullyQualifiedName: 'catalog.units.create',
    httpMethod: 'post',
    httpPath: '/v1/catalog/units',
  },
  {
    clientCallName: 'client.catalog.units.update',
    fullyQualifiedName: 'catalog.units.update',
    httpMethod: 'patch',
    httpPath: '/v1/catalog/units/{id}',
  },
  {
    clientCallName: 'client.catalog.units.delete',
    fullyQualifiedName: 'catalog.units.delete',
    httpMethod: 'delete',
    httpPath: '/v1/catalog/units/{id}',
  },
  {
    clientCallName: 'client.catalog.unitGroups.list',
    fullyQualifiedName: 'catalog.unitGroups.list',
    httpMethod: 'get',
    httpPath: '/v1/catalog/unit-groups',
  },
  {
    clientCallName: 'client.catalog.unitGroups.retrieve',
    fullyQualifiedName: 'catalog.unitGroups.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/catalog/unit-groups/{id}',
  },
  {
    clientCallName: 'client.catalog.unitGroups.create',
    fullyQualifiedName: 'catalog.unitGroups.create',
    httpMethod: 'post',
    httpPath: '/v1/catalog/unit-groups',
  },
  {
    clientCallName: 'client.catalog.unitGroups.update',
    fullyQualifiedName: 'catalog.unitGroups.update',
    httpMethod: 'patch',
    httpPath: '/v1/catalog/unit-groups/{id}',
  },
  {
    clientCallName: 'client.catalog.unitGroups.delete',
    fullyQualifiedName: 'catalog.unitGroups.delete',
    httpMethod: 'delete',
    httpPath: '/v1/catalog/unit-groups/{id}',
  },
  {
    clientCallName: 'client.catalog.unitGroups.units.list',
    fullyQualifiedName: 'catalog.unitGroups.units.list',
    httpMethod: 'get',
    httpPath: '/v1/catalog/unit-groups/{unit_group_id}/units',
  },
  {
    clientCallName: 'client.catalog.unitGroups.units.retrieve',
    fullyQualifiedName: 'catalog.unitGroups.units.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/catalog/unit-groups/{unit_group_id}/units/{id}',
  },
  {
    clientCallName: 'client.catalog.unitGroups.units.create',
    fullyQualifiedName: 'catalog.unitGroups.units.create',
    httpMethod: 'post',
    httpPath: '/v1/catalog/unit-groups/{unit_group_id}/units',
  },
  {
    clientCallName: 'client.catalog.unitGroups.units.update',
    fullyQualifiedName: 'catalog.unitGroups.units.update',
    httpMethod: 'patch',
    httpPath: '/v1/catalog/unit-groups/{unit_group_id}/units/{id}',
  },
  {
    clientCallName: 'client.catalog.unitGroups.units.delete',
    fullyQualifiedName: 'catalog.unitGroups.units.delete',
    httpMethod: 'delete',
    httpPath: '/v1/catalog/unit-groups/{unit_group_id}/units/{id}',
  },
  {
    clientCallName: 'client.catalog.properties.list',
    fullyQualifiedName: 'catalog.properties.list',
    httpMethod: 'get',
    httpPath: '/v1/catalog/properties',
  },
  {
    clientCallName: 'client.catalog.properties.retrieve',
    fullyQualifiedName: 'catalog.properties.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/catalog/properties/{id}',
  },
  {
    clientCallName: 'client.catalog.properties.create',
    fullyQualifiedName: 'catalog.properties.create',
    httpMethod: 'post',
    httpPath: '/v1/catalog/properties',
  },
  {
    clientCallName: 'client.catalog.properties.update',
    fullyQualifiedName: 'catalog.properties.update',
    httpMethod: 'patch',
    httpPath: '/v1/catalog/properties/{id}',
  },
  {
    clientCallName: 'client.catalog.properties.delete',
    fullyQualifiedName: 'catalog.properties.delete',
    httpMethod: 'delete',
    httpPath: '/v1/catalog/properties/{id}',
  },
  {
    clientCallName: 'client.catalog.properties.attributes.list',
    fullyQualifiedName: 'catalog.properties.attributes.list',
    httpMethod: 'get',
    httpPath: '/v1/catalog/properties/{property_id}/attributes',
  },
  {
    clientCallName: 'client.catalog.properties.attributes.retrieve',
    fullyQualifiedName: 'catalog.properties.attributes.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/catalog/properties/{property_id}/attributes/{id}',
  },
  {
    clientCallName: 'client.catalog.properties.attributes.create',
    fullyQualifiedName: 'catalog.properties.attributes.create',
    httpMethod: 'post',
    httpPath: '/v1/catalog/properties/{property_id}/attributes',
  },
  {
    clientCallName: 'client.catalog.properties.attributes.update',
    fullyQualifiedName: 'catalog.properties.attributes.update',
    httpMethod: 'patch',
    httpPath: '/v1/catalog/properties/{property_id}/attributes/{id}',
  },
  {
    clientCallName: 'client.catalog.properties.attributes.delete',
    fullyQualifiedName: 'catalog.properties.attributes.delete',
    httpMethod: 'delete',
    httpPath: '/v1/catalog/properties/{property_id}/attributes/{id}',
  },
  {
    clientCallName: 'client.catalog.items.list',
    fullyQualifiedName: 'catalog.items.list',
    httpMethod: 'get',
    httpPath: '/v1/catalog/items',
  },
  {
    clientCallName: 'client.catalog.items.retrieve',
    fullyQualifiedName: 'catalog.items.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/catalog/items/{id}',
  },
  {
    clientCallName: 'client.catalog.items.retrieveInventory',
    fullyQualifiedName: 'catalog.items.retrieveInventory',
    httpMethod: 'get',
    httpPath: '/v1/catalog/items/{id}/inventory',
  },
  {
    clientCallName: 'client.catalog.items.changeCategory',
    fullyQualifiedName: 'catalog.items.changeCategory',
    httpMethod: 'put',
    httpPath: '/v1/catalog/items/{id}/category/{category_id}',
  },
  {
    clientCallName: 'client.catalog.items.attributes.update',
    fullyQualifiedName: 'catalog.items.attributes.update',
    httpMethod: 'put',
    httpPath: '/v1/catalog/items/{id}/attributes/{attribute_id}',
  },
  {
    clientCallName: 'client.catalog.items.attributes.delete',
    fullyQualifiedName: 'catalog.items.attributes.delete',
    httpMethod: 'delete',
    httpPath: '/v1/catalog/items/{id}/attributes/{attribute_id}',
  },
  {
    clientCallName: 'client.catalog.itemCategories.list',
    fullyQualifiedName: 'catalog.itemCategories.list',
    httpMethod: 'get',
    httpPath: '/v1/catalog/item-categories',
  },
  {
    clientCallName: 'client.catalog.itemCategories.retrieve',
    fullyQualifiedName: 'catalog.itemCategories.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/catalog/item-categories/{id}',
  },
  {
    clientCallName: 'client.catalog.itemCategories.create',
    fullyQualifiedName: 'catalog.itemCategories.create',
    httpMethod: 'post',
    httpPath: '/v1/catalog/item-categories',
  },
  {
    clientCallName: 'client.catalog.itemCategories.update',
    fullyQualifiedName: 'catalog.itemCategories.update',
    httpMethod: 'patch',
    httpPath: '/v1/catalog/item-categories/{id}',
  },
  {
    clientCallName: 'client.catalog.itemCategories.delete',
    fullyQualifiedName: 'catalog.itemCategories.delete',
    httpMethod: 'delete',
    httpPath: '/v1/catalog/item-categories/{id}',
  },
  {
    clientCallName: 'client.catalog.itemCategories.changeUnitGroup',
    fullyQualifiedName: 'catalog.itemCategories.changeUnitGroup',
    httpMethod: 'put',
    httpPath: '/v1/catalog/item-categories/{id}/unit-groups/{unit_group_id}',
  },
  {
    clientCallName: 'client.catalog.itemCategories.properties.update',
    fullyQualifiedName: 'catalog.itemCategories.properties.update',
    httpMethod: 'put',
    httpPath: '/v1/catalog/item-categories/{id}/properties/{property_id}',
  },
  {
    clientCallName: 'client.catalog.itemCategories.properties.delete',
    fullyQualifiedName: 'catalog.itemCategories.properties.delete',
    httpMethod: 'delete',
    httpPath: '/v1/catalog/item-categories/{id}/properties/{property_id}',
  },
  {
    clientCallName: 'client.catalog.materials.list',
    fullyQualifiedName: 'catalog.materials.list',
    httpMethod: 'get',
    httpPath: '/v1/catalog/materials',
  },
  {
    clientCallName: 'client.catalog.materials.retrieve',
    fullyQualifiedName: 'catalog.materials.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/catalog/materials/{id}',
  },
  {
    clientCallName: 'client.catalog.materials.create',
    fullyQualifiedName: 'catalog.materials.create',
    httpMethod: 'post',
    httpPath: '/v1/catalog/materials',
  },
  {
    clientCallName: 'client.catalog.materials.update',
    fullyQualifiedName: 'catalog.materials.update',
    httpMethod: 'patch',
    httpPath: '/v1/catalog/materials/{id}',
  },
  {
    clientCallName: 'client.catalog.materials.delete',
    fullyQualifiedName: 'catalog.materials.delete',
    httpMethod: 'delete',
    httpPath: '/v1/catalog/materials/{id}',
  },
  {
    clientCallName: 'client.catalog.parts.list',
    fullyQualifiedName: 'catalog.parts.list',
    httpMethod: 'get',
    httpPath: '/v1/catalog/parts',
  },
  {
    clientCallName: 'client.catalog.parts.retrieve',
    fullyQualifiedName: 'catalog.parts.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/catalog/parts/{id}',
  },
  {
    clientCallName: 'client.catalog.parts.create',
    fullyQualifiedName: 'catalog.parts.create',
    httpMethod: 'post',
    httpPath: '/v1/catalog/parts',
  },
  {
    clientCallName: 'client.catalog.parts.update',
    fullyQualifiedName: 'catalog.parts.update',
    httpMethod: 'patch',
    httpPath: '/v1/catalog/parts/{id}',
  },
  {
    clientCallName: 'client.catalog.parts.delete',
    fullyQualifiedName: 'catalog.parts.delete',
    httpMethod: 'delete',
    httpPath: '/v1/catalog/parts/{id}',
  },
  {
    clientCallName: 'client.catalog.productLines.list',
    fullyQualifiedName: 'catalog.productLines.list',
    httpMethod: 'get',
    httpPath: '/v1/catalog/product-lines',
  },
  {
    clientCallName: 'client.catalog.productLines.retrieve',
    fullyQualifiedName: 'catalog.productLines.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/catalog/product-lines/{id}',
  },
  {
    clientCallName: 'client.catalog.productLines.create',
    fullyQualifiedName: 'catalog.productLines.create',
    httpMethod: 'post',
    httpPath: '/v1/catalog/product-lines',
  },
  {
    clientCallName: 'client.catalog.productLines.update',
    fullyQualifiedName: 'catalog.productLines.update',
    httpMethod: 'patch',
    httpPath: '/v1/catalog/product-lines/{id}',
  },
  {
    clientCallName: 'client.catalog.productLines.delete',
    fullyQualifiedName: 'catalog.productLines.delete',
    httpMethod: 'delete',
    httpPath: '/v1/catalog/product-lines/{id}',
  },
  {
    clientCallName: 'client.catalog.products.list',
    fullyQualifiedName: 'catalog.products.list',
    httpMethod: 'get',
    httpPath: '/v1/catalog/products',
  },
  {
    clientCallName: 'client.catalog.products.retrieve',
    fullyQualifiedName: 'catalog.products.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/catalog/products/{id}',
  },
  {
    clientCallName: 'client.catalog.products.create',
    fullyQualifiedName: 'catalog.products.create',
    httpMethod: 'post',
    httpPath: '/v1/catalog/products',
  },
  {
    clientCallName: 'client.catalog.products.update',
    fullyQualifiedName: 'catalog.products.update',
    httpMethod: 'patch',
    httpPath: '/v1/catalog/products/{id}',
  },
  {
    clientCallName: 'client.catalog.products.delete',
    fullyQualifiedName: 'catalog.products.delete',
    httpMethod: 'delete',
    httpPath: '/v1/catalog/products/{id}',
  },
  {
    clientCallName: 'client.catalog.products.changeProductLine',
    fullyQualifiedName: 'catalog.products.changeProductLine',
    httpMethod: 'put',
    httpPath: '/v1/catalog/products/{id}/product-line/{product_line_id}',
  },
  {
    clientCallName: 'client.sales.accountGroups.list',
    fullyQualifiedName: 'sales.accountGroups.list',
    httpMethod: 'get',
    httpPath: '/v1/sales/account-groups',
  },
  {
    clientCallName: 'client.sales.accountGroups.retrieve',
    fullyQualifiedName: 'sales.accountGroups.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/sales/account-groups/{id}',
  },
  {
    clientCallName: 'client.sales.accountGroups.create',
    fullyQualifiedName: 'sales.accountGroups.create',
    httpMethod: 'post',
    httpPath: '/v1/sales/account-groups',
  },
  {
    clientCallName: 'client.sales.accountGroups.update',
    fullyQualifiedName: 'sales.accountGroups.update',
    httpMethod: 'patch',
    httpPath: '/v1/sales/account-groups/{id}',
  },
  {
    clientCallName: 'client.sales.accountGroups.delete',
    fullyQualifiedName: 'sales.accountGroups.delete',
    httpMethod: 'delete',
    httpPath: '/v1/sales/account-groups/{id}',
  },
  {
    clientCallName: 'client.sales.addresses.list',
    fullyQualifiedName: 'sales.addresses.list',
    httpMethod: 'get',
    httpPath: '/v1/sales/addresses',
  },
  {
    clientCallName: 'client.sales.addresses.retrieve',
    fullyQualifiedName: 'sales.addresses.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/sales/addresses/{id}',
  },
  {
    clientCallName: 'client.sales.addresses.create',
    fullyQualifiedName: 'sales.addresses.create',
    httpMethod: 'post',
    httpPath: '/v1/sales/addresses',
  },
  {
    clientCallName: 'client.sales.addresses.update',
    fullyQualifiedName: 'sales.addresses.update',
    httpMethod: 'patch',
    httpPath: '/v1/sales/addresses/{id}',
  },
  {
    clientCallName: 'client.sales.addresses.delete',
    fullyQualifiedName: 'sales.addresses.delete',
    httpMethod: 'delete',
    httpPath: '/v1/sales/addresses/{id}',
  },
  {
    clientCallName: 'client.sales.accountStatuses.list',
    fullyQualifiedName: 'sales.accountStatuses.list',
    httpMethod: 'get',
    httpPath: '/v1/sales/account-statuses',
  },
  {
    clientCallName: 'client.sales.accountStatuses.retrieve',
    fullyQualifiedName: 'sales.accountStatuses.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/sales/account-statuses/{id}',
  },
  {
    clientCallName: 'client.sales.priorities.list',
    fullyQualifiedName: 'sales.priorities.list',
    httpMethod: 'get',
    httpPath: '/v1/sales/priorities',
  },
  {
    clientCallName: 'client.sales.priorities.retrieve',
    fullyQualifiedName: 'sales.priorities.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/sales/priorities/{id}',
  },
  {
    clientCallName: 'client.sales.customers.list',
    fullyQualifiedName: 'sales.customers.list',
    httpMethod: 'get',
    httpPath: '/v1/sales/customers',
  },
  {
    clientCallName: 'client.sales.customers.retrieve',
    fullyQualifiedName: 'sales.customers.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/sales/customers/{id}',
  },
  {
    clientCallName: 'client.sales.customers.create',
    fullyQualifiedName: 'sales.customers.create',
    httpMethod: 'post',
    httpPath: '/v1/sales/customers',
  },
  {
    clientCallName: 'client.sales.customers.update',
    fullyQualifiedName: 'sales.customers.update',
    httpMethod: 'patch',
    httpPath: '/v1/sales/customers/{id}',
  },
  {
    clientCallName: 'client.sales.customers.delete',
    fullyQualifiedName: 'sales.customers.delete',
    httpMethod: 'delete',
    httpPath: '/v1/sales/customers/{id}',
  },
  {
    clientCallName: 'client.sales.customers.actions.merge',
    fullyQualifiedName: 'sales.customers.actions.merge',
    httpMethod: 'post',
    httpPath: '/v1/sales/customers/{id}/actions/merge',
  },
  {
    clientCallName: 'client.sales.salesOrders.retrieveStatuses',
    fullyQualifiedName: 'sales.salesOrders.retrieveStatuses',
    httpMethod: 'get',
    httpPath: '/v1/sales/sales-orders/statuses',
  },
  {
    clientCallName: 'client.sales.salesOrders.list',
    fullyQualifiedName: 'sales.salesOrders.list',
    httpMethod: 'get',
    httpPath: '/v1/sales/sales-orders',
  },
  {
    clientCallName: 'client.sales.salesOrders.create',
    fullyQualifiedName: 'sales.salesOrders.create',
    httpMethod: 'post',
    httpPath: '/v1/sales/sales-orders',
  },
  {
    clientCallName: 'client.finance.retrieveTransactionTypes',
    fullyQualifiedName: 'finance.retrieveTransactionTypes',
    httpMethod: 'get',
    httpPath: '/v1/finance/transaction-types',
  },
  {
    clientCallName: 'client.finance.retrieveTransactionMethods',
    fullyQualifiedName: 'finance.retrieveTransactionMethods',
    httpMethod: 'get',
    httpPath: '/v1/finance/transaction-methods',
  },
  {
    clientCallName: 'client.finance.retrieveAdjustmentTypes',
    fullyQualifiedName: 'finance.retrieveAdjustmentTypes',
    httpMethod: 'get',
    httpPath: '/v1/finance/adjustment-types',
  },
  {
    clientCallName: 'client.finance.paymentTerms.list',
    fullyQualifiedName: 'finance.paymentTerms.list',
    httpMethod: 'get',
    httpPath: '/v1/finance/payment-terms',
  },
  {
    clientCallName: 'client.finance.paymentTerms.retrieve',
    fullyQualifiedName: 'finance.paymentTerms.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/finance/payment-terms/{id}',
  },
  {
    clientCallName: 'client.finance.paymentTerms.create',
    fullyQualifiedName: 'finance.paymentTerms.create',
    httpMethod: 'post',
    httpPath: '/v1/finance/payment-terms',
  },
  {
    clientCallName: 'client.finance.paymentTerms.update',
    fullyQualifiedName: 'finance.paymentTerms.update',
    httpMethod: 'patch',
    httpPath: '/v1/finance/payment-terms/{id}',
  },
  {
    clientCallName: 'client.finance.paymentTerms.delete',
    fullyQualifiedName: 'finance.paymentTerms.delete',
    httpMethod: 'delete',
    httpPath: '/v1/finance/payment-terms/{id}',
  },
  {
    clientCallName: 'client.operations.shippingTerms.list',
    fullyQualifiedName: 'operations.shippingTerms.list',
    httpMethod: 'get',
    httpPath: '/v1/operations/shipping-terms',
  },
  {
    clientCallName: 'client.operations.shippingTerms.retrieve',
    fullyQualifiedName: 'operations.shippingTerms.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/operations/shipping-terms/{id}',
  },
  {
    clientCallName: 'client.operations.shippingTerms.create',
    fullyQualifiedName: 'operations.shippingTerms.create',
    httpMethod: 'post',
    httpPath: '/v1/operations/shipping-terms',
  },
  {
    clientCallName: 'client.operations.shippingTerms.update',
    fullyQualifiedName: 'operations.shippingTerms.update',
    httpMethod: 'patch',
    httpPath: '/v1/operations/shipping-terms/{id}',
  },
  {
    clientCallName: 'client.operations.shippingTerms.delete',
    fullyQualifiedName: 'operations.shippingTerms.delete',
    httpMethod: 'delete',
    httpPath: '/v1/operations/shipping-terms/{id}',
  },
  {
    clientCallName: 'client.operations.carriers.list',
    fullyQualifiedName: 'operations.carriers.list',
    httpMethod: 'get',
    httpPath: '/v1/operations/carriers',
  },
  {
    clientCallName: 'client.operations.carriers.retrieve',
    fullyQualifiedName: 'operations.carriers.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/operations/carriers/{id}',
  },
  {
    clientCallName: 'client.operations.carriers.create',
    fullyQualifiedName: 'operations.carriers.create',
    httpMethod: 'post',
    httpPath: '/v1/operations/carriers',
  },
  {
    clientCallName: 'client.operations.carriers.update',
    fullyQualifiedName: 'operations.carriers.update',
    httpMethod: 'patch',
    httpPath: '/v1/operations/carriers/{id}',
  },
  {
    clientCallName: 'client.operations.carriers.delete',
    fullyQualifiedName: 'operations.carriers.delete',
    httpMethod: 'delete',
    httpPath: '/v1/operations/carriers/{id}',
  },
  {
    clientCallName: 'client.operations.carriers.serviceLevels.list',
    fullyQualifiedName: 'operations.carriers.serviceLevels.list',
    httpMethod: 'get',
    httpPath: '/v1/operations/carriers/{carrier_id}/service-levels',
  },
  {
    clientCallName: 'client.operations.carriers.serviceLevels.retrieve',
    fullyQualifiedName: 'operations.carriers.serviceLevels.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/operations/carriers/{carrier_id}/service-levels/{id}',
  },
  {
    clientCallName: 'client.operations.carriers.serviceLevels.create',
    fullyQualifiedName: 'operations.carriers.serviceLevels.create',
    httpMethod: 'post',
    httpPath: '/v1/operations/carriers/{carrier_id}/service-levels',
  },
  {
    clientCallName: 'client.operations.carriers.serviceLevels.update',
    fullyQualifiedName: 'operations.carriers.serviceLevels.update',
    httpMethod: 'patch',
    httpPath: '/v1/operations/carriers/{carrier_id}/service-levels/{id}',
  },
  {
    clientCallName: 'client.operations.carriers.serviceLevels.delete',
    fullyQualifiedName: 'operations.carriers.serviceLevels.delete',
    httpMethod: 'delete',
    httpPath: '/v1/operations/carriers/{carrier_id}/service-levels/{id}',
  },
  {
    clientCallName: 'client.operations.locations.list',
    fullyQualifiedName: 'operations.locations.list',
    httpMethod: 'get',
    httpPath: '/v1/operations/locations',
  },
  {
    clientCallName: 'client.operations.locations.retrieve',
    fullyQualifiedName: 'operations.locations.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/operations/locations/{id}',
  },
  {
    clientCallName: 'client.operations.locations.create',
    fullyQualifiedName: 'operations.locations.create',
    httpMethod: 'post',
    httpPath: '/v1/operations/locations',
  },
  {
    clientCallName: 'client.operations.locations.update',
    fullyQualifiedName: 'operations.locations.update',
    httpMethod: 'patch',
    httpPath: '/v1/operations/locations/{id}',
  },
  {
    clientCallName: 'client.operations.locations.delete',
    fullyQualifiedName: 'operations.locations.delete',
    httpMethod: 'delete',
    httpPath: '/v1/operations/locations/{id}',
  },
  {
    clientCallName: 'client.operations.locationTypes.list',
    fullyQualifiedName: 'operations.locationTypes.list',
    httpMethod: 'get',
    httpPath: '/v1/operations/location-types',
  },
  {
    clientCallName: 'client.operations.locationTypes.retrieve',
    fullyQualifiedName: 'operations.locationTypes.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/operations/location-types/{id}',
  },
  {
    clientCallName: 'client.operations.scanningStations.list',
    fullyQualifiedName: 'operations.scanningStations.list',
    httpMethod: 'get',
    httpPath: '/v1/operations/scanning-stations',
  },
  {
    clientCallName: 'client.operations.scanningStations.retrieve',
    fullyQualifiedName: 'operations.scanningStations.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/operations/scanning-stations/{id}',
  },
  {
    clientCallName: 'client.operations.scanningStations.create',
    fullyQualifiedName: 'operations.scanningStations.create',
    httpMethod: 'post',
    httpPath: '/v1/operations/scanning-stations',
  },
  {
    clientCallName: 'client.operations.scanningStations.update',
    fullyQualifiedName: 'operations.scanningStations.update',
    httpMethod: 'patch',
    httpPath: '/v1/operations/scanning-stations/{id}',
  },
  {
    clientCallName: 'client.operations.scanningStations.delete',
    fullyQualifiedName: 'operations.scanningStations.delete',
    httpMethod: 'delete',
    httpPath: '/v1/operations/scanning-stations/{id}',
  },
  {
    clientCallName: 'client.identity.accountUsers.list',
    fullyQualifiedName: 'identity.accountUsers.list',
    httpMethod: 'get',
    httpPath: '/v1/identity/account-users',
  },
  {
    clientCallName: 'client.identity.accountUsers.retrieve',
    fullyQualifiedName: 'identity.accountUsers.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/identity/account-users/{id}',
  },
  {
    clientCallName: 'client.identity.accountUsers.create',
    fullyQualifiedName: 'identity.accountUsers.create',
    httpMethod: 'post',
    httpPath: '/v1/identity/account-users',
  },
  {
    clientCallName: 'client.identity.accountUsers.update',
    fullyQualifiedName: 'identity.accountUsers.update',
    httpMethod: 'patch',
    httpPath: '/v1/identity/account-users/{id}',
  },
  {
    clientCallName: 'client.identity.accountUsers.actions.activate',
    fullyQualifiedName: 'identity.accountUsers.actions.activate',
    httpMethod: 'put',
    httpPath: '/v1/identity/account-users/{id}/actions/activate',
  },
  {
    clientCallName: 'client.identity.accountUsers.actions.disable',
    fullyQualifiedName: 'identity.accountUsers.actions.disable',
    httpMethod: 'put',
    httpPath: '/v1/identity/account-users/{id}/actions/disable',
  },
  {
    clientCallName: 'client.identity.accountUsers.actions.remove',
    fullyQualifiedName: 'identity.accountUsers.actions.remove',
    httpMethod: 'put',
    httpPath: '/v1/identity/account-users/{id}/actions/remove',
  },
  {
    clientCallName: 'client.identity.roles.list',
    fullyQualifiedName: 'identity.roles.list',
    httpMethod: 'get',
    httpPath: '/v1/identity/roles',
  },
  {
    clientCallName: 'client.identity.roles.retrieve',
    fullyQualifiedName: 'identity.roles.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/identity/roles/{id}',
  },
  {
    clientCallName: 'client.identity.roles.create',
    fullyQualifiedName: 'identity.roles.create',
    httpMethod: 'post',
    httpPath: '/v1/identity/roles',
  },
  {
    clientCallName: 'client.identity.roles.update',
    fullyQualifiedName: 'identity.roles.update',
    httpMethod: 'patch',
    httpPath: '/v1/identity/roles/{id}',
  },
  {
    clientCallName: 'client.identity.roles.delete',
    fullyQualifiedName: 'identity.roles.delete',
    httpMethod: 'delete',
    httpPath: '/v1/identity/roles/{id}',
  },
  {
    clientCallName: 'client.settings.integrations.list',
    fullyQualifiedName: 'settings.integrations.list',
    httpMethod: 'get',
    httpPath: '/v1/settings/integrations',
  },
  {
    clientCallName: 'client.settings.integrations.create',
    fullyQualifiedName: 'settings.integrations.create',
    httpMethod: 'post',
    httpPath: '/v1/settings/integrations',
  },
  {
    clientCallName: 'client.settings.integrations.update',
    fullyQualifiedName: 'settings.integrations.update',
    httpMethod: 'put',
    httpPath: '/v1/settings/integrations/{id}',
  },
  {
    clientCallName: 'client.settings.integrations.delete',
    fullyQualifiedName: 'settings.integrations.delete',
    httpMethod: 'delete',
    httpPath: '/v1/settings/integrations/{id}',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
