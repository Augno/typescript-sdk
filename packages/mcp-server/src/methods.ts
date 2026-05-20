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
    clientCallName: 'client.ai.listToolGroups',
    fullyQualifiedName: 'ai.listToolGroups',
    httpMethod: 'get',
    httpPath: '/v1/ai/tool-groups',
  },
  {
    clientCallName: 'client.ai.listTools',
    fullyQualifiedName: 'ai.listTools',
    httpMethod: 'get',
    httpPath: '/v1/ai/tools',
  },
  {
    clientCallName: 'client.ai.listUsage',
    fullyQualifiedName: 'ai.listUsage',
    httpMethod: 'get',
    httpPath: '/v1/ai/usage',
  },
  {
    clientCallName: 'client.ai.agents.create',
    fullyQualifiedName: 'ai.agents.create',
    httpMethod: 'post',
    httpPath: '/v1/ai/agents',
  },
  {
    clientCallName: 'client.ai.agents.retrieve',
    fullyQualifiedName: 'ai.agents.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/ai/agents/{id}',
  },
  {
    clientCallName: 'client.ai.agents.update',
    fullyQualifiedName: 'ai.agents.update',
    httpMethod: 'put',
    httpPath: '/v1/ai/agents/{id}',
  },
  {
    clientCallName: 'client.ai.agents.list',
    fullyQualifiedName: 'ai.agents.list',
    httpMethod: 'get',
    httpPath: '/v1/ai/agents',
  },
  {
    clientCallName: 'client.ai.agents.delete',
    fullyQualifiedName: 'ai.agents.delete',
    httpMethod: 'delete',
    httpPath: '/v1/ai/agents/{id}',
  },
  {
    clientCallName: 'client.ai.agents.updateStatus',
    fullyQualifiedName: 'ai.agents.updateStatus',
    httpMethod: 'put',
    httpPath: '/v1/ai/agents/{id}/status',
  },
  {
    clientCallName: 'client.ai.alerts.retrieve',
    fullyQualifiedName: 'ai.alerts.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/ai/alerts/{id}',
  },
  {
    clientCallName: 'client.ai.alerts.list',
    fullyQualifiedName: 'ai.alerts.list',
    httpMethod: 'get',
    httpPath: '/v1/ai/alerts',
  },
  {
    clientCallName: 'client.ai.alerts.actions.acknowledge',
    fullyQualifiedName: 'ai.alerts.actions.acknowledge',
    httpMethod: 'post',
    httpPath: '/v1/ai/alerts/{id}/actions/acknowledge',
  },
  {
    clientCallName: 'client.ai.memories.create',
    fullyQualifiedName: 'ai.memories.create',
    httpMethod: 'post',
    httpPath: '/v1/ai/memories',
  },
  {
    clientCallName: 'client.ai.memories.retrieve',
    fullyQualifiedName: 'ai.memories.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/ai/memories/{id}',
  },
  {
    clientCallName: 'client.ai.memories.update',
    fullyQualifiedName: 'ai.memories.update',
    httpMethod: 'patch',
    httpPath: '/v1/ai/memories/{id}',
  },
  {
    clientCallName: 'client.ai.memories.list',
    fullyQualifiedName: 'ai.memories.list',
    httpMethod: 'get',
    httpPath: '/v1/ai/memories',
  },
  {
    clientCallName: 'client.ai.memories.delete',
    fullyQualifiedName: 'ai.memories.delete',
    httpMethod: 'delete',
    httpPath: '/v1/ai/memories/{id}',
  },
  {
    clientCallName: 'client.ai.runs.retrieve',
    fullyQualifiedName: 'ai.runs.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/ai/runs/{id}',
  },
  {
    clientCallName: 'client.ai.runs.list',
    fullyQualifiedName: 'ai.runs.list',
    httpMethod: 'get',
    httpPath: '/v1/ai/runs',
  },
  {
    clientCallName: 'client.ai.runs.trigger',
    fullyQualifiedName: 'ai.runs.trigger',
    httpMethod: 'post',
    httpPath: '/v1/ai/runs',
  },
  {
    clientCallName: 'client.ai.runs.actions.cancel',
    fullyQualifiedName: 'ai.runs.actions.cancel',
    httpMethod: 'post',
    httpPath: '/v1/ai/runs/{id}/actions/cancel',
  },
  {
    clientCallName: 'client.ai.runs.actions.continue',
    fullyQualifiedName: 'ai.runs.actions.continue',
    httpMethod: 'post',
    httpPath: '/v1/ai/runs/{id}/actions/continue',
  },
  {
    clientCallName: 'client.auth.apiKeys.create',
    fullyQualifiedName: 'auth.apiKeys.create',
    httpMethod: 'post',
    httpPath: '/v1/auth/api-keys',
  },
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
    clientCallName: 'client.auth.apiKeys.revoke',
    fullyQualifiedName: 'auth.apiKeys.revoke',
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
    clientCallName: 'client.core.listAdjustmentTypes',
    fullyQualifiedName: 'core.listAdjustmentTypes',
    httpMethod: 'get',
    httpPath: '/v1/core/adjustment-types',
  },
  {
    clientCallName: 'client.core.accountGroups.create',
    fullyQualifiedName: 'core.accountGroups.create',
    httpMethod: 'post',
    httpPath: '/v1/core/account-groups',
  },
  {
    clientCallName: 'client.core.accountGroups.retrieve',
    fullyQualifiedName: 'core.accountGroups.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/core/account-groups/{id}',
  },
  {
    clientCallName: 'client.core.accountGroups.update',
    fullyQualifiedName: 'core.accountGroups.update',
    httpMethod: 'patch',
    httpPath: '/v1/core/account-groups/{id}',
  },
  {
    clientCallName: 'client.core.accountGroups.list',
    fullyQualifiedName: 'core.accountGroups.list',
    httpMethod: 'get',
    httpPath: '/v1/core/account-groups',
  },
  {
    clientCallName: 'client.core.accountGroups.delete',
    fullyQualifiedName: 'core.accountGroups.delete',
    httpMethod: 'delete',
    httpPath: '/v1/core/account-groups/{id}',
  },
  {
    clientCallName: 'client.core.accountPrices.create',
    fullyQualifiedName: 'core.accountPrices.create',
    httpMethod: 'post',
    httpPath: '/v1/core/account-prices',
  },
  {
    clientCallName: 'client.core.accountPrices.retrieve',
    fullyQualifiedName: 'core.accountPrices.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/core/account-prices/{id}',
  },
  {
    clientCallName: 'client.core.accountPrices.update',
    fullyQualifiedName: 'core.accountPrices.update',
    httpMethod: 'patch',
    httpPath: '/v1/core/account-prices/{id}',
  },
  {
    clientCallName: 'client.core.accountPrices.list',
    fullyQualifiedName: 'core.accountPrices.list',
    httpMethod: 'get',
    httpPath: '/v1/core/account-prices',
  },
  {
    clientCallName: 'client.core.accountPrices.delete',
    fullyQualifiedName: 'core.accountPrices.delete',
    httpMethod: 'delete',
    httpPath: '/v1/core/account-prices/{id}',
  },
  {
    clientCallName: 'client.core.accountStatuses.retrieve',
    fullyQualifiedName: 'core.accountStatuses.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/core/account-statuses/{id}',
  },
  {
    clientCallName: 'client.core.accountStatuses.list',
    fullyQualifiedName: 'core.accountStatuses.list',
    httpMethod: 'get',
    httpPath: '/v1/core/account-statuses',
  },
  {
    clientCallName: 'client.core.accountUsers.create',
    fullyQualifiedName: 'core.accountUsers.create',
    httpMethod: 'post',
    httpPath: '/v1/core/account-users',
  },
  {
    clientCallName: 'client.core.accountUsers.retrieve',
    fullyQualifiedName: 'core.accountUsers.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/core/account-users/{id}',
  },
  {
    clientCallName: 'client.core.accountUsers.update',
    fullyQualifiedName: 'core.accountUsers.update',
    httpMethod: 'patch',
    httpPath: '/v1/core/account-users/{id}',
  },
  {
    clientCallName: 'client.core.accountUsers.list',
    fullyQualifiedName: 'core.accountUsers.list',
    httpMethod: 'get',
    httpPath: '/v1/core/account-users',
  },
  {
    clientCallName: 'client.core.accountUsers.delete',
    fullyQualifiedName: 'core.accountUsers.delete',
    httpMethod: 'delete',
    httpPath: '/v1/core/account-users/{id}',
  },
  {
    clientCallName: 'client.core.accountUsers.lock',
    fullyQualifiedName: 'core.accountUsers.lock',
    httpMethod: 'post',
    httpPath: '/v1/core/account-users/{id}/lock',
  },
  {
    clientCallName: 'client.core.accountUsers.restore',
    fullyQualifiedName: 'core.accountUsers.restore',
    httpMethod: 'post',
    httpPath: '/v1/core/account-users/{id}/restore',
  },
  {
    clientCallName: 'client.core.accountUsers.unlock',
    fullyQualifiedName: 'core.accountUsers.unlock',
    httpMethod: 'post',
    httpPath: '/v1/core/account-users/{id}/unlock',
  },
  {
    clientCallName: 'client.core.accountUsers.updateNotificationPreferences',
    fullyQualifiedName: 'core.accountUsers.updateNotificationPreferences',
    httpMethod: 'put',
    httpPath: '/v1/core/account-users/{id}/notification-preferences',
  },
  {
    clientCallName: 'client.core.accountUsers.updatePassword',
    fullyQualifiedName: 'core.accountUsers.updatePassword',
    httpMethod: 'put',
    httpPath: '/v1/core/account-users/{id}/password',
  },
  {
    clientCallName: 'client.core.accountUsers.salesTargets.create',
    fullyQualifiedName: 'core.accountUsers.salesTargets.create',
    httpMethod: 'post',
    httpPath: '/v1/core/account-users/{id}/sales-targets',
  },
  {
    clientCallName: 'client.core.accountUsers.salesTargets.list',
    fullyQualifiedName: 'core.accountUsers.salesTargets.list',
    httpMethod: 'get',
    httpPath: '/v1/core/account-users/{id}/sales-targets',
  },
  {
    clientCallName: 'client.core.accountUsers.salesTargets.upsert',
    fullyQualifiedName: 'core.accountUsers.salesTargets.upsert',
    httpMethod: 'put',
    httpPath: '/v1/core/account-users/{id}/sales-targets/{target_id}',
  },
  {
    clientCallName: 'client.core.accounts.retrieve',
    fullyQualifiedName: 'core.accounts.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/core/accounts/{id}',
  },
  {
    clientCallName: 'client.core.accounts.update',
    fullyQualifiedName: 'core.accounts.update',
    httpMethod: 'patch',
    httpPath: '/v1/core/accounts/{id}',
  },
  {
    clientCallName: 'client.core.accounts.getLogoURL',
    fullyQualifiedName: 'core.accounts.getLogoURL',
    httpMethod: 'get',
    httpPath: '/v1/core/accounts/{id}/logo',
  },
  {
    clientCallName: 'client.core.accounts.retrieveBySlug',
    fullyQualifiedName: 'core.accounts.retrieveBySlug',
    httpMethod: 'get',
    httpPath: '/v1/core/accounts/slug/{slug}',
  },
  {
    clientCallName: 'client.core.accounts.uploadPhoto',
    fullyQualifiedName: 'core.accounts.uploadPhoto',
    httpMethod: 'put',
    httpPath: '/v1/core/accounts/{id}/photo',
  },
  {
    clientCallName: 'client.core.accounts.addresses.create',
    fullyQualifiedName: 'core.accounts.addresses.create',
    httpMethod: 'post',
    httpPath: '/v1/core/accounts/{account_id}/addresses',
  },
  {
    clientCallName: 'client.core.accounts.addresses.retrieve',
    fullyQualifiedName: 'core.accounts.addresses.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/core/accounts/{account_id}/addresses/{id}',
  },
  {
    clientCallName: 'client.core.accounts.addresses.update',
    fullyQualifiedName: 'core.accounts.addresses.update',
    httpMethod: 'patch',
    httpPath: '/v1/core/accounts/{account_id}/addresses/{id}',
  },
  {
    clientCallName: 'client.core.accounts.addresses.list',
    fullyQualifiedName: 'core.accounts.addresses.list',
    httpMethod: 'get',
    httpPath: '/v1/core/accounts/{account_id}/addresses',
  },
  {
    clientCallName: 'client.core.accounts.addresses.delete',
    fullyQualifiedName: 'core.accounts.addresses.delete',
    httpMethod: 'delete',
    httpPath: '/v1/core/accounts/{account_id}/addresses/{id}',
  },
  {
    clientCallName: 'client.core.addresses.autocomplete',
    fullyQualifiedName: 'core.addresses.autocomplete',
    httpMethod: 'get',
    httpPath: '/v1/core/addresses/autocomplete',
  },
  {
    clientCallName: 'client.core.addresses.getDetails',
    fullyQualifiedName: 'core.addresses.getDetails',
    httpMethod: 'get',
    httpPath: '/v1/core/addresses/details/{id}',
  },
  {
    clientCallName: 'client.core.addresses.validate',
    fullyQualifiedName: 'core.addresses.validate',
    httpMethod: 'post',
    httpPath: '/v1/core/addresses/validate',
  },
  {
    clientCallName: 'client.core.carriers.create',
    fullyQualifiedName: 'core.carriers.create',
    httpMethod: 'post',
    httpPath: '/v1/core/carriers',
  },
  {
    clientCallName: 'client.core.carriers.retrieve',
    fullyQualifiedName: 'core.carriers.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/core/carriers/{id}',
  },
  {
    clientCallName: 'client.core.carriers.update',
    fullyQualifiedName: 'core.carriers.update',
    httpMethod: 'patch',
    httpPath: '/v1/core/carriers/{id}',
  },
  {
    clientCallName: 'client.core.carriers.list',
    fullyQualifiedName: 'core.carriers.list',
    httpMethod: 'get',
    httpPath: '/v1/core/carriers',
  },
  {
    clientCallName: 'client.core.carriers.delete',
    fullyQualifiedName: 'core.carriers.delete',
    httpMethod: 'delete',
    httpPath: '/v1/core/carriers/{id}',
  },
  {
    clientCallName: 'client.core.carriers.getOAuthStatus',
    fullyQualifiedName: 'core.carriers.getOAuthStatus',
    httpMethod: 'get',
    httpPath: '/v1/core/carriers/{id}/oauth-status',
  },
  {
    clientCallName: 'client.core.carriers.options.create',
    fullyQualifiedName: 'core.carriers.options.create',
    httpMethod: 'post',
    httpPath: '/v1/core/carriers/{carrier_id}/options',
  },
  {
    clientCallName: 'client.core.carriers.options.retrieve',
    fullyQualifiedName: 'core.carriers.options.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/core/carriers/{carrier_id}/options/{id}',
  },
  {
    clientCallName: 'client.core.carriers.options.update',
    fullyQualifiedName: 'core.carriers.options.update',
    httpMethod: 'patch',
    httpPath: '/v1/core/carriers/{carrier_id}/options/{id}',
  },
  {
    clientCallName: 'client.core.carriers.options.list',
    fullyQualifiedName: 'core.carriers.options.list',
    httpMethod: 'get',
    httpPath: '/v1/core/carriers/{carrier_id}/options',
  },
  {
    clientCallName: 'client.core.carriers.options.delete',
    fullyQualifiedName: 'core.carriers.options.delete',
    httpMethod: 'delete',
    httpPath: '/v1/core/carriers/{carrier_id}/options/{id}',
  },
  {
    clientCallName: 'client.core.carriers.actions.initiateOAuth',
    fullyQualifiedName: 'core.carriers.actions.initiateOAuth',
    httpMethod: 'post',
    httpPath: '/v1/core/carriers/{id}/actions/initiate-oauth',
  },
  {
    clientCallName: 'client.core.carriers.actions.syncOptions',
    fullyQualifiedName: 'core.carriers.actions.syncOptions',
    httpMethod: 'post',
    httpPath: '/v1/core/carriers/{id}/actions/sync-options',
  },
  {
    clientCallName: 'client.core.childAccounts.list',
    fullyQualifiedName: 'core.childAccounts.list',
    httpMethod: 'get',
    httpPath: '/v1/core/child-accounts',
  },
  {
    clientCallName: 'client.core.childAccounts.add',
    fullyQualifiedName: 'core.childAccounts.add',
    httpMethod: 'put',
    httpPath: '/v1/core/child-accounts/{child_account_id}',
  },
  {
    clientCallName: 'client.core.childAccounts.remove',
    fullyQualifiedName: 'core.childAccounts.remove',
    httpMethod: 'delete',
    httpPath: '/v1/core/child-accounts/{child_account_id}',
  },
  {
    clientCallName: 'client.core.integrations.create',
    fullyQualifiedName: 'core.integrations.create',
    httpMethod: 'post',
    httpPath: '/v1/core/integrations',
  },
  {
    clientCallName: 'client.core.integrations.update',
    fullyQualifiedName: 'core.integrations.update',
    httpMethod: 'put',
    httpPath: '/v1/core/integrations/{id}',
  },
  {
    clientCallName: 'client.core.integrations.list',
    fullyQualifiedName: 'core.integrations.list',
    httpMethod: 'get',
    httpPath: '/v1/core/integrations',
  },
  {
    clientCallName: 'client.core.integrations.delete',
    fullyQualifiedName: 'core.integrations.delete',
    httpMethod: 'delete',
    httpPath: '/v1/core/integrations/{id}',
  },
  {
    clientCallName: 'client.core.integrations.stripe.getPublishableKey',
    fullyQualifiedName: 'core.integrations.stripe.getPublishableKey',
    httpMethod: 'get',
    httpPath: '/v1/core/integrations/stripe/publishable-key',
  },
  {
    clientCallName: 'client.core.integrations.stripe.getStatus',
    fullyQualifiedName: 'core.integrations.stripe.getStatus',
    httpMethod: 'get',
    httpPath: '/v1/core/integrations/stripe/status',
  },
  {
    clientCallName: 'client.core.items.retrieve',
    fullyQualifiedName: 'core.items.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/core/items/{id}',
  },
  {
    clientCallName: 'client.core.items.list',
    fullyQualifiedName: 'core.items.list',
    httpMethod: 'get',
    httpPath: '/v1/core/items',
  },
  {
    clientCallName: 'client.core.items.getCosts',
    fullyQualifiedName: 'core.items.getCosts',
    httpMethod: 'get',
    httpPath: '/v1/core/items/{id}/costs',
  },
  {
    clientCallName: 'client.core.items.getInventory',
    fullyQualifiedName: 'core.items.getInventory',
    httpMethod: 'get',
    httpPath: '/v1/core/items/{id}/inventory',
  },
  {
    clientCallName: 'client.core.items.getTrends',
    fullyQualifiedName: 'core.items.getTrends',
    httpMethod: 'get',
    httpPath: '/v1/core/items/{id}/trends',
  },
  {
    clientCallName: 'client.core.items.actions.export',
    fullyQualifiedName: 'core.items.actions.export',
    httpMethod: 'get',
    httpPath: '/v1/core/items/actions/export',
  },
  {
    clientCallName: 'client.core.paymentTerms.create',
    fullyQualifiedName: 'core.paymentTerms.create',
    httpMethod: 'post',
    httpPath: '/v1/core/payment-terms',
  },
  {
    clientCallName: 'client.core.paymentTerms.retrieve',
    fullyQualifiedName: 'core.paymentTerms.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/core/payment-terms/{id}',
  },
  {
    clientCallName: 'client.core.paymentTerms.update',
    fullyQualifiedName: 'core.paymentTerms.update',
    httpMethod: 'patch',
    httpPath: '/v1/core/payment-terms/{id}',
  },
  {
    clientCallName: 'client.core.paymentTerms.list',
    fullyQualifiedName: 'core.paymentTerms.list',
    httpMethod: 'get',
    httpPath: '/v1/core/payment-terms',
  },
  {
    clientCallName: 'client.core.paymentTerms.delete',
    fullyQualifiedName: 'core.paymentTerms.delete',
    httpMethod: 'delete',
    httpPath: '/v1/core/payment-terms/{id}',
  },
  {
    clientCallName: 'client.core.productLineAccess.accountGroups.create',
    fullyQualifiedName: 'core.productLineAccess.accountGroups.create',
    httpMethod: 'post',
    httpPath: '/v1/core/product-line-access/account-groups',
  },
  {
    clientCallName: 'client.core.productLineAccess.accountGroups.retrieve',
    fullyQualifiedName: 'core.productLineAccess.accountGroups.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/core/product-line-access/account-groups/{account_group_id}',
  },
  {
    clientCallName: 'client.core.productLineAccess.accountGroups.update',
    fullyQualifiedName: 'core.productLineAccess.accountGroups.update',
    httpMethod: 'patch',
    httpPath: '/v1/core/product-line-access/account-groups/{account_group_id}',
  },
  {
    clientCallName: 'client.core.productLineAccess.accountGroups.list',
    fullyQualifiedName: 'core.productLineAccess.accountGroups.list',
    httpMethod: 'get',
    httpPath: '/v1/core/product-line-access/account-groups',
  },
  {
    clientCallName: 'client.core.productLineAccess.accountGroups.delete',
    fullyQualifiedName: 'core.productLineAccess.accountGroups.delete',
    httpMethod: 'delete',
    httpPath: '/v1/core/product-line-access/account-groups/{account_group_id}',
  },
  {
    clientCallName: 'client.core.properties.create',
    fullyQualifiedName: 'core.properties.create',
    httpMethod: 'post',
    httpPath: '/v1/core/properties',
  },
  {
    clientCallName: 'client.core.properties.retrieve',
    fullyQualifiedName: 'core.properties.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/core/properties/{id}',
  },
  {
    clientCallName: 'client.core.properties.update',
    fullyQualifiedName: 'core.properties.update',
    httpMethod: 'patch',
    httpPath: '/v1/core/properties/{id}',
  },
  {
    clientCallName: 'client.core.properties.list',
    fullyQualifiedName: 'core.properties.list',
    httpMethod: 'get',
    httpPath: '/v1/core/properties',
  },
  {
    clientCallName: 'client.core.properties.delete',
    fullyQualifiedName: 'core.properties.delete',
    httpMethod: 'delete',
    httpPath: '/v1/core/properties/{id}',
  },
  {
    clientCallName: 'client.core.properties.attributes.create',
    fullyQualifiedName: 'core.properties.attributes.create',
    httpMethod: 'post',
    httpPath: '/v1/core/properties/{property_id}/attributes',
  },
  {
    clientCallName: 'client.core.properties.attributes.retrieve',
    fullyQualifiedName: 'core.properties.attributes.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/core/properties/{property_id}/attributes/{id}',
  },
  {
    clientCallName: 'client.core.properties.attributes.update',
    fullyQualifiedName: 'core.properties.attributes.update',
    httpMethod: 'patch',
    httpPath: '/v1/core/properties/{property_id}/attributes/{id}',
  },
  {
    clientCallName: 'client.core.properties.attributes.list',
    fullyQualifiedName: 'core.properties.attributes.list',
    httpMethod: 'get',
    httpPath: '/v1/core/properties/{property_id}/attributes',
  },
  {
    clientCallName: 'client.core.properties.attributes.delete',
    fullyQualifiedName: 'core.properties.attributes.delete',
    httpMethod: 'delete',
    httpPath: '/v1/core/properties/{property_id}/attributes/{id}',
  },
  {
    clientCallName: 'client.core.requestLogs.retrieve',
    fullyQualifiedName: 'core.requestLogs.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/core/request-logs/{id}',
  },
  {
    clientCallName: 'client.core.requestLogs.list',
    fullyQualifiedName: 'core.requestLogs.list',
    httpMethod: 'get',
    httpPath: '/v1/core/request-logs',
  },
  {
    clientCallName: 'client.core.sandboxes.create',
    fullyQualifiedName: 'core.sandboxes.create',
    httpMethod: 'post',
    httpPath: '/v1/core/sandboxes',
  },
  {
    clientCallName: 'client.core.sandboxes.retrieve',
    fullyQualifiedName: 'core.sandboxes.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/core/sandboxes/{id}',
  },
  {
    clientCallName: 'client.core.sandboxes.list',
    fullyQualifiedName: 'core.sandboxes.list',
    httpMethod: 'get',
    httpPath: '/v1/core/sandboxes',
  },
  {
    clientCallName: 'client.core.sandboxes.delete',
    fullyQualifiedName: 'core.sandboxes.delete',
    httpMethod: 'delete',
    httpPath: '/v1/core/sandboxes/{id}',
  },
  {
    clientCallName: 'client.core.shippingTerms.create',
    fullyQualifiedName: 'core.shippingTerms.create',
    httpMethod: 'post',
    httpPath: '/v1/core/shipping-terms',
  },
  {
    clientCallName: 'client.core.shippingTerms.retrieve',
    fullyQualifiedName: 'core.shippingTerms.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/core/shipping-terms/{id}',
  },
  {
    clientCallName: 'client.core.shippingTerms.update',
    fullyQualifiedName: 'core.shippingTerms.update',
    httpMethod: 'patch',
    httpPath: '/v1/core/shipping-terms/{id}',
  },
  {
    clientCallName: 'client.core.shippingTerms.list',
    fullyQualifiedName: 'core.shippingTerms.list',
    httpMethod: 'get',
    httpPath: '/v1/core/shipping-terms',
  },
  {
    clientCallName: 'client.core.shippingTerms.delete',
    fullyQualifiedName: 'core.shippingTerms.delete',
    httpMethod: 'delete',
    httpPath: '/v1/core/shipping-terms/{id}',
  },
  {
    clientCallName: 'client.core.units.create',
    fullyQualifiedName: 'core.units.create',
    httpMethod: 'post',
    httpPath: '/v1/core/units',
  },
  {
    clientCallName: 'client.core.units.retrieve',
    fullyQualifiedName: 'core.units.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/core/units/{id}',
  },
  {
    clientCallName: 'client.core.units.update',
    fullyQualifiedName: 'core.units.update',
    httpMethod: 'patch',
    httpPath: '/v1/core/units/{id}',
  },
  {
    clientCallName: 'client.core.units.list',
    fullyQualifiedName: 'core.units.list',
    httpMethod: 'get',
    httpPath: '/v1/core/units',
  },
  {
    clientCallName: 'client.core.units.delete',
    fullyQualifiedName: 'core.units.delete',
    httpMethod: 'delete',
    httpPath: '/v1/core/units/{id}',
  },
  {
    clientCallName: 'client.core.itemCategories.create',
    fullyQualifiedName: 'core.itemCategories.create',
    httpMethod: 'post',
    httpPath: '/v1/core/item-categories',
  },
  {
    clientCallName: 'client.core.itemCategories.retrieve',
    fullyQualifiedName: 'core.itemCategories.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/core/item-categories/{id}',
  },
  {
    clientCallName: 'client.core.itemCategories.update',
    fullyQualifiedName: 'core.itemCategories.update',
    httpMethod: 'patch',
    httpPath: '/v1/core/item-categories/{id}',
  },
  {
    clientCallName: 'client.core.itemCategories.list',
    fullyQualifiedName: 'core.itemCategories.list',
    httpMethod: 'get',
    httpPath: '/v1/core/item-categories',
  },
  {
    clientCallName: 'client.core.itemCategories.delete',
    fullyQualifiedName: 'core.itemCategories.delete',
    httpMethod: 'delete',
    httpPath: '/v1/core/item-categories/{id}',
  },
  {
    clientCallName: 'client.core.itemCategories.changeUnitGroup',
    fullyQualifiedName: 'core.itemCategories.changeUnitGroup',
    httpMethod: 'put',
    httpPath: '/v1/core/item-categories/{id}/unit-groups/{unit_group_id}',
  },
  {
    clientCallName: 'client.core.itemCategories.properties.add',
    fullyQualifiedName: 'core.itemCategories.properties.add',
    httpMethod: 'put',
    httpPath: '/v1/core/item-categories/{id}/properties/{property_id}',
  },
  {
    clientCallName: 'client.core.itemCategories.properties.remove',
    fullyQualifiedName: 'core.itemCategories.properties.remove',
    httpMethod: 'delete',
    httpPath: '/v1/core/item-categories/{id}/properties/{property_id}',
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
