// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from './api-keys';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Create and manage API keys for programmatic access.
 */
export class Actions extends APIResource {
  /**
   * This endpoint rotates an API key by revoking the existing key and creating a new
   * replacement with the same name, role, and owner. The new key inherits the old
   * key's expiration unless an explicit expires_at override is provided. The new API
   * key secret is returned once and is not retrievable after creation.
   *
   * @example
   * ```ts
   * const createdAPIKey =
   *   await client.auth.apiKeys.actions.rotate('id', {
   *     expires_at: '2026-12-31T23:59:59Z',
   *   });
   * ```
   */
  rotate(
    id: string,
    params: ActionRotateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIKeysAPI.CreatedAPIKey> {
    const { include, ...body } = params ?? {};
    return this._client.post(path`/v1/auth/api-keys/${id}/actions/rotate`, {
      query: { include },
      body,
      ...options,
    });
  }
}

export interface ActionRotateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'role' | 'role.permissions'>;

  /**
   * Body param: Optional expiration time override for the new API key.
   */
  expires_at?: string | null;
}

export declare namespace Actions {
  export { type ActionRotateParams as ActionRotateParams };
}
