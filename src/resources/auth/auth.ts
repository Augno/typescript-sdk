// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import { ActionLoginUserParams, ActionLoginUserResponse, Actions } from './actions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Auth extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Refresh an access token using a refresh token.
   *
   * @example
   * ```ts
   * const emptyResource = await client.auth.refreshToken();
   * ```
   */
  refreshToken(options?: RequestOptions): APIPromise<EmptyResource> {
    return this._client.post('/v2/auth/access-tokens', options);
  }

  /**
   * Revoke a refresh token.
   *
   * @example
   * ```ts
   * const emptyResource =
   *   await client.auth.revokeRefreshToken();
   * ```
   */
  revokeRefreshToken(options?: RequestOptions): APIPromise<EmptyResource> {
    return this._client.delete('/v2/auth/refresh-tokens', options);
  }
}

/**
 * Request schema for EmptyResource
 */
export interface EmptyResource {}

Auth.Actions = Actions;

export declare namespace Auth {
  export { type EmptyResource as EmptyResource };

  export {
    Actions as Actions,
    type ActionLoginUserResponse as ActionLoginUserResponse,
    type ActionLoginUserParams as ActionLoginUserParams,
  };
}
