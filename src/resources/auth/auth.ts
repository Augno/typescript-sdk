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
   * const createAccessTokenResponse =
   *   await client.auth.refreshToken();
   * ```
   */
  refreshToken(
    body: AuthRefreshTokenParams,
    options?: RequestOptions,
  ): APIPromise<CreateAccessTokenResponse> {
    return this._client.post('/v2/auth/access-tokens', { body, ...options });
  }
}

/**
 * Response schema for CreateAccessTokenResponse
 */
export interface CreateAccessTokenResponse {
  /**
   * The new access token
   */
  access_token: string;

  /**
   * A new refresh token
   */
  refresh_token: unknown;
}

export interface AuthRefreshTokenParams {
  RefreshToken?: string;
}

Auth.Actions = Actions;

export declare namespace Auth {
  export {
    type CreateAccessTokenResponse as CreateAccessTokenResponse,
    type AuthRefreshTokenParams as AuthRefreshTokenParams,
  };

  export {
    Actions as Actions,
    type ActionLoginUserResponse as ActionLoginUserResponse,
    type ActionLoginUserParams as ActionLoginUserParams,
  };
}
