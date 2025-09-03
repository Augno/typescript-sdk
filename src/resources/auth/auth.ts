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
  refreshToken(body: AuthRefreshTokenParams, options?: RequestOptions): APIPromise<AuthRefreshTokenResponse> {
    return this._client.post('/v2/auth/access-tokens', { body, ...options });
  }
}

/**
 * Represents a RefreshToken resource
 */
export interface RefreshToken {
  /**
   * The refresh token
   */
  token: string;

  /**
   * The refresh token expires at
   */
  expires_at: string;
}

/**
 * Response schema for CreateAccessTokenResponse
 */
export interface AuthRefreshTokenResponse {
  /**
   * The new access token
   */
  access_token: string;

  /**
   * A new refresh token
   */
  refresh_token: RefreshToken;
}

export interface AuthRefreshTokenParams {
  RefreshToken?: string;
}

Auth.Actions = Actions;

export declare namespace Auth {
  export {
    type RefreshToken as RefreshToken,
    type AuthRefreshTokenResponse as AuthRefreshTokenResponse,
    type AuthRefreshTokenParams as AuthRefreshTokenParams,
  };

  export {
    Actions as Actions,
    type ActionLoginUserResponse as ActionLoginUserResponse,
    type ActionLoginUserParams as ActionLoginUserParams,
  };
}
