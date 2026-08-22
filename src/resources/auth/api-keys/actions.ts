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
   * Rotates an [API key](https://docs.openmrp.ai/api/api-keys) by revoking the
   * existing key and issuing a replacement with the same name, role, and expiration
   * (unless overridden).
   *
   * The replacement is a new key with its own ID; the rotated key keeps its ID and
   * stays in the list, moving to a `revoked` status once its revocation takes
   * effect. Use `revoke_at` to keep the old key working while you roll the new
   * secret out.
   *
   * The secret key is returned once and cannot be retrieved later, so you should
   * store it securely. We provide some
   * [recommendations](https://docs.openmrp.ai/api/managing-api-keys) on how you can
   * manage your API keys.
   *
   * This endpoint requires the `admin` role type.
   *
   * @example
   * ```ts
   * const createdAPIKey =
   *   await client.auth.apiKeys.actions.rotate(
   *     'apke_eiylmwr6q7oz',
   *     {
   *       expires_at: '2026-12-31T23:59:59Z',
   *       revoke_at: '2026-06-16T00:00:00Z',
   *     },
   *   );
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

/**
 * Request to rotate an API key.
 */
export interface RotateAPIKeyRequest {
  /**
   * When the replacement key should expire.
   *
   * If omitted, the replacement inherits the expiration of the key being rotated.
   */
  expires_at?: string;

  /**
   * When the old key should stop authenticating requests.
   *
   * If omitted, the old key is revoked immediately. Set a future timestamp — up to
   * 30 days out — to keep the old key working during a migration window; a timestamp
   * in the past revokes it immediately.
   */
  revoke_at?: string;
}

export interface ActionRotateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'role' | 'role.permissions'>;

  /**
   * Body param: When the replacement key should expire.
   *
   * If omitted, the replacement inherits the expiration of the key being rotated.
   */
  expires_at?: string;

  /**
   * Body param: When the old key should stop authenticating requests.
   *
   * If omitted, the old key is revoked immediately. Set a future timestamp — up to
   * 30 days out — to keep the old key working during a migration window; a timestamp
   * in the past revokes it immediately.
   */
  revoke_at?: string;
}

export declare namespace Actions {
  export { type RotateAPIKeyRequest as RotateAPIKeyRequest, type ActionRotateParams as ActionRotateParams };
}
