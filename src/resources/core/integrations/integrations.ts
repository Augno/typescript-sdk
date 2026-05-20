// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as StripeAPI from './stripe';
import { Stripe, StripeGetPublishableKeyResponse, StripeGetStatusResponse } from './stripe';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage third-party account integrations.
 */
export class Integrations extends APIResource {
  stripe: StripeAPI.Stripe = new StripeAPI.Stripe(this._client);

  /**
   * This endpoint creates a new account integration or updates an existing one with
   * the same integration code. Credentials are encrypted at rest and never returned
   * in API responses.
   *
   * @example
   * ```ts
   * const accountIntegration =
   *   await client.core.integrations.create({
   *     credentials:
   *       '{"privateKey":"sk_test_...","publishableKey":"pk_test_...","webhookSecret":"whsec_..."}',
   *     integration_code: 'stripe',
   *     name: 'My Stripe Integration',
   *   });
   * ```
   */
  create(body: IntegrationCreateParams, options?: RequestOptions): APIPromise<AccountIntegration> {
    return this._client.post('/v1/core/integrations', { body, ...options });
  }

  /**
   * This endpoint updates an account integration's name and/or active status. Only
   * provided fields are updated; absent fields retain their current values.
   *
   * @example
   * ```ts
   * const accountIntegration =
   *   await client.core.integrations.update('id', {
   *     name: 'Updated Stripe Integration',
   *   });
   * ```
   */
  update(
    id: string,
    body: IntegrationUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountIntegration> {
    return this._client.put(path`/v1/core/integrations/${id}`, { body, ...options });
  }

  /**
   * This endpoint returns a paginated list of integrations for the target account.
   * Supports cursor-based pagination and search by name.
   *
   * @example
   * ```ts
   * const integrations = await client.core.integrations.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<IntegrationListResponse> {
    return this._client.get('/v1/core/integrations', options);
  }

  /**
   * This endpoint deletes an account integration and returns the deleted resource.
   *
   * @example
   * ```ts
   * const accountIntegration =
   *   await client.core.integrations.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<AccountIntegration> {
    return this._client.delete(path`/v1/core/integrations/${id}`, options);
  }
}

/**
 * AccountIntegration represents a third-party integration connected to an account.
 */
export interface AccountIntegration {
  /**
   * The unique identifier for the account integration.
   */
  id: string;

  /**
   * When this integration was created.
   */
  created_at: string;

  /**
   * The integration provider code (e.g. "stripe", "shippo").
   */
  integration_code: 'stripe' | 'shippo';

  /**
   * Whether this integration is currently active.
   */
  is_active: boolean;

  /**
   * The human-readable name for the integration.
   */
  name: string;

  /**
   * The resource type identifier.
   */
  object: 'account_integration';

  /**
   * When this integration was last updated.
   */
  updated_at: string;
}

/**
 * A paginated list of AccountIntegration resources
 */
export interface IntegrationListResponse {
  /**
   * Array of AccountIntegration resources in this page
   */
  data: Array<AccountIntegration>;

  /**
   * Object type for AccountIntegration list
   */
  object: 'list';

  /**
   * PageInfo contains cursor-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface IntegrationCreateParams {
  /**
   * The credentials JSON string containing provider-specific keys.
   */
  credentials: string;

  /**
   * The integration provider code (e.g. "stripe", "shippo").
   */
  integration_code: 'stripe' | 'shippo';

  /**
   * The human-readable name for the integration.
   */
  name: string;
}

export interface IntegrationUpdateParams {
  /**
   * Whether this integration is currently active.
   */
  is_active?: boolean | null;

  /**
   * The human-readable name for the integration.
   */
  name?: string | null;
}

Integrations.Stripe = Stripe;

export declare namespace Integrations {
  export {
    type AccountIntegration as AccountIntegration,
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationCreateParams as IntegrationCreateParams,
    type IntegrationUpdateParams as IntegrationUpdateParams,
  };

  export {
    Stripe as Stripe,
    type StripeGetPublishableKeyResponse as StripeGetPublishableKeyResponse,
    type StripeGetStatusResponse as StripeGetStatusResponse,
  };
}
