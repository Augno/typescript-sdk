// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import { ActionLoginUserParams, Actions, User } from './actions';
import * as PasswordsAPI from './passwords/passwords';
import {
  PasswordUpdatePasswordParams,
  PasswordUpdatePasswordResponse,
  Passwords,
} from './passwords/passwords';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Auth extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  passwords: PasswordsAPI.Passwords = new PasswordsAPI.Passwords(this._client);

  /**
   * This endpoint is utilized to refresh an access token using a refresh token. Once
   * completed, a new access token is set in a cookie. Learn more about
   * authentication and authorization in our
   * [documentation](https://docs.augno.com/guides/authentication).
   *
   * @example
   * ```ts
   * const response = await client.auth.refreshToken();
   * ```
   */
  refreshToken(options?: RequestOptions): APIPromise<AuthRefreshTokenResponse> {
    return this._client.post('/v1/auth/access-tokens', options);
  }

  /**
   * This endpoint is utilized to register a new user. Once completed, the user
   * object is returned. An access and refresh token are set in cookies. Learn more
   * about authentication and authorization in our
   * [documentation](https://docs.augno.com/guides/authentication).
   *
   * @example
   * ```ts
   * const user = await client.auth.registerUser({
   *   email: 'jdoe@augno.com',
   *   name: 'John Doe',
   *   password: 'super-secret-password',
   * });
   * ```
   */
  registerUser(
    body: AuthRegisterUserParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionsAPI.User> {
    return this._client.post('/v1/auth/users', { body, ...options });
  }

  /**
   * This endpoint is utilized to revoke a refresh token. Once completed, the refresh
   * token is revoked and is no longer valid for refreshing an access token. Learn
   * more about authentication and authorization in our
   * [documentation](https://docs.augno.com/guides/authentication).
   *
   * @example
   * ```ts
   * const response = await client.auth.revokeRefreshToken();
   * ```
   */
  revokeRefreshToken(options?: RequestOptions): APIPromise<AuthRevokeRefreshTokenResponse> {
    return this._client.delete('/v1/auth/refresh-tokens', options);
  }
}

export interface AuthRefreshTokenResponse {}

export interface AuthRevokeRefreshTokenResponse {}

export interface AuthRegisterUserParams {
  /**
   * The email address for the new user
   */
  email?: string;

  /**
   * The full name of the new user
   */
  name?: string;

  /**
   * The password for the new user
   */
  password?: string;
}

Auth.Actions = Actions;
Auth.Passwords = Passwords;

export declare namespace Auth {
  export {
    type AuthRefreshTokenResponse as AuthRefreshTokenResponse,
    type AuthRevokeRefreshTokenResponse as AuthRevokeRefreshTokenResponse,
    type AuthRegisterUserParams as AuthRegisterUserParams,
  };

  export { Actions as Actions, type User as User, type ActionLoginUserParams as ActionLoginUserParams };

  export {
    Passwords as Passwords,
    type PasswordUpdatePasswordResponse as PasswordUpdatePasswordResponse,
    type PasswordUpdatePasswordParams as PasswordUpdatePasswordParams,
  };
}
