// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Actions extends APIResource {
  /**
   * This endpoint is utilized to request a password reset for a user. An email will
   * be sent to the user with a link to reset their password. Learn more about
   * authentication and authorization in our
   * [documentation](https://docs.augno.com/guides/authentication).
   *
   * @example
   * ```ts
   * const response =
   *   await client.auth.passwords.actions.requestPasswordReset({
   *     identifier: 'jdoe@augno.com',
   *   });
   * ```
   */
  requestPasswordReset(
    body: ActionRequestPasswordResetParams,
    options?: RequestOptions,
  ): APIPromise<ActionRequestPasswordResetResponse> {
    return this._client.post('/v1/auth/passwords/actions/request-reset', { body, ...options });
  }

  /**
   * This endpoint is utilized to reset a user's password using a password reset
   * token. Once completed, new access and refresh tokens are set in cookies. Learn
   * more about authentication and authorization in our
   * [documentation](https://docs.augno.com/guides/authentication).
   *
   * @example
   * ```ts
   * const response =
   *   await client.auth.passwords.actions.resetPassword({
   *     token:
   *       'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1Z25vLmNvbSIsInN1YiI6InVzXzAxZ2Y3YTgyMDBlMXNyMjBwZzl3eDZkMmswIiwiZXhwIjoxNzU2ODIzMzI5LCJpYXQiOjE3NTY4MTk3Mjl9.2ZodhtiHDqIQnDjzrJZvqIdEbQbmkgbTaz4OXdbXCWNjzEsy2-5e78XQRu-aZ8MoZ2dusIVKQcN1Tm-arKR0_Q',
   *     password: 'new-super-secret-password',
   *   });
   * ```
   */
  resetPassword(
    body: ActionResetPasswordParams,
    options?: RequestOptions,
  ): APIPromise<ActionResetPasswordResponse> {
    return this._client.post('/v1/auth/passwords/actions/reset', { body, ...options });
  }
}

export interface ActionRequestPasswordResetResponse {}

export interface ActionResetPasswordResponse {}

export interface ActionRequestPasswordResetParams {
  /**
   * The username or email of the account to reset
   */
  identifier: string;

  /**
   * The account slug (optional)
   */
  account_slug?: string | null;
}

export interface ActionResetPasswordParams {
  /**
   * The password reset token
   */
  token: string;

  /**
   * The new password of the user
   */
  password: string;
}

export declare namespace Actions {
  export {
    type ActionRequestPasswordResetResponse as ActionRequestPasswordResetResponse,
    type ActionResetPasswordResponse as ActionResetPasswordResponse,
    type ActionRequestPasswordResetParams as ActionRequestPasswordResetParams,
    type ActionResetPasswordParams as ActionResetPasswordParams,
  };
}
