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
   * const response = await client.auth.refreshToken();
   * ```
   */
  refreshToken(options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v2/auth/access-tokens', options);
  }
}

/**
 * Request schema for EmptyResource
 */
export type AuthRefreshTokenResponse = unknown;

Auth.Actions = Actions;

export declare namespace Auth {
  export { type AuthRefreshTokenResponse as AuthRefreshTokenResponse };

  export {
    Actions as Actions,
    type ActionLoginUserResponse as ActionLoginUserResponse,
    type ActionLoginUserParams as ActionLoginUserParams,
  };
}
