// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Actions extends APIResource {
  /**
   * Login a user and get an access and refresh token.
   *
   * @example
   * ```ts
   * const response = await client.auth.actions.loginUser();
   * ```
   */
  loginUser(body: ActionLoginUserParams, options?: RequestOptions): APIPromise<ActionLoginUserResponse> {
    return this._client.post('/v2/auth/actions/login', { body, ...options });
  }
}

/**
 * Response schema for LoginResponse
 */
export interface ActionLoginUserResponse {
  /**
   * The account affiliations
   */
  account_affiliations: Array<unknown>;

  /**
   * The current account in use
   */
  current_account: unknown;

  /**
   * The access token for the user
   */
  access_token?: string;

  /**
   * The refresh token for the user
   */
  refresh_token?: unknown;

  /**
   * The user that was logged in
   */
  user?: unknown;
}

export interface ActionLoginUserParams {
  password?: string;

  username?: string;
}

export declare namespace Actions {
  export {
    type ActionLoginUserResponse as ActionLoginUserResponse,
    type ActionLoginUserParams as ActionLoginUserParams,
  };
}
