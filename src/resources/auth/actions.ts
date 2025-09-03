// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthAPI from './auth';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Actions extends APIResource {
  /**
   * Login a user and get an access and refresh token.
   *
   * @example
   * ```ts
   * const createAccessTokenResponse =
   *   await client.auth.actions.loginUser();
   * ```
   */
  loginUser(
    body: ActionLoginUserParams,
    options?: RequestOptions,
  ): APIPromise<AuthAPI.CreateAccessTokenResponse> {
    return this._client.post('/v2/auth/actions/login', { body, ...options });
  }
}

export interface ActionLoginUserParams {
  password?: string;

  username?: string;
}

export declare namespace Actions {
  export { type ActionLoginUserParams as ActionLoginUserParams };
}
