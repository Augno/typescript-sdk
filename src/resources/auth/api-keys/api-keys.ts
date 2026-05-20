// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as ActionsAPI from './actions';
import { ActionRotateParams, Actions } from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Create and manage API keys for programmatic access.
 */
export class APIKeys extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * This endpoint is used to create an API key. Once completed, the API key object
   * is returned, and the API key secret is returned. The secret is only returned
   * once at creation, and is not retrievable after creation.
   *
   * @example
   * ```ts
   * const createdAPIKey = await client.auth.apiKeys.create({
   *   name: 'Production API Key',
   *   role_id: 'rl_01gf7a8200er3ar3pkfrb6kk29',
   * });
   * ```
   */
  create(params: APIKeyCreateParams, options?: RequestOptions): APIPromise<CreatedAPIKey> {
    const { include, ...body } = params;
    return this._client.post('/v1/auth/api-keys', { query: { include }, body, ...options });
  }

  /**
   * This endpoint returns a single API key's metadata by its ID.
   *
   * @example
   * ```ts
   * const apiKey = await client.auth.apiKeys.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: APIKeyRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIKey> {
    return this._client.get(path`/v1/auth/api-keys/${id}`, { query, ...options });
  }

  /**
   * This endpoint returns a paginated list of API keys for the target account.
   * Supports cursor-based pagination and optional search filtering by name.
   *
   * @example
   * ```ts
   * const apiKeys = await client.auth.apiKeys.list();
   * ```
   */
  list(
    query: APIKeyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIKeyListResponse> {
    return this._client.get('/v1/auth/api-keys', { query, ...options });
  }

  /**
   * This endpoint revokes an API key so it can no longer be used to authenticate
   * requests. The API key will be marked as revoked and will no longer be usable.
   *
   * @example
   * ```ts
   * const response = await client.auth.apiKeys.revoke('id');
   * ```
   */
  revoke(id: string, options?: RequestOptions): APIPromise<APIKeyRevokeResponse> {
    return this._client.delete(path`/v1/auth/api-keys/${id}`, options);
  }
}

/**
 * APIKey represents an API key for authenticating API requests.
 */
export interface APIKey {
  /**
   * The unique identifier for the API key.
   */
  id: string;

  /**
   * The timestamp when the API key was created.
   */
  created_at: string;

  /**
   * The timestamp when the API key expires.
   */
  expires_at: string | null;

  /**
   * The timestamp when the API key was last used.
   */
  last_used_at: string | null;

  /**
   * The human-readable name for the API key.
   */
  name: string;

  /**
   * The resource type identifier.
   */
  object: 'api_key';

  /**
   * The redacted value of the API key for display purposes.
   */
  redacted_value: string;

  /**
   * The timestamp when the API key was revoked.
   */
  revoked_at: string | null;

  /**
   * LightRole represents a minimal role reference.
   */
  role: AgentsAPI.LightRole | null;

  /**
   * The timestamp when the API key was last updated.
   */
  updated_at: string;
}

/**
 * CreatedAPIKey represents a newly created API key with the full secret value.
 */
export interface CreatedAPIKey {
  /**
   * APIKey represents an API key for authenticating API requests.
   */
  api_key_info: APIKey;

  /**
   * The full API key secret value (only shown once at creation).
   */
  api_key_secret: string;
}

/**
 * A paginated list of APIKey resources
 */
export interface APIKeyListResponse {
  /**
   * Array of APIKey resources in this page
   */
  data: Array<APIKey>;

  /**
   * Object type for APIKey list
   */
  object: 'list';

  /**
   * PageInfo contains cursor-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface APIKeyRevokeResponse {}

export interface APIKeyCreateParams {
  /**
   * Body param: The name for the API key.
   */
  name: string;

  /**
   * Body param: The role ID for the API key.
   */
  role_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'role' | 'role.permissions'>;

  /**
   * Body param: Optional expiration time for the API key.
   */
  expires_at?: string | null;
}

export interface APIKeyRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'role' | 'role.permissions'>;
}

export interface APIKeyListParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'role' | 'role.permissions'>;

  /**
   * Filter API keys by status.
   */
  status?: Array<'active' | 'expired' | 'revoked'>;
}

APIKeys.Actions = Actions;

export declare namespace APIKeys {
  export {
    type APIKey as APIKey,
    type CreatedAPIKey as CreatedAPIKey,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyRevokeResponse as APIKeyRevokeResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyRetrieveParams as APIKeyRetrieveParams,
    type APIKeyListParams as APIKeyListParams,
  };

  export { Actions as Actions, type ActionRotateParams as ActionRotateParams };
}
