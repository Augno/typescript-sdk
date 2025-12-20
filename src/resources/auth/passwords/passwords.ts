// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import {
  ActionRequestPasswordResetParams,
  ActionRequestPasswordResetResponse,
  ActionResetPasswordParams,
  ActionResetPasswordResponse,
  Actions,
} from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Passwords extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * This endpoint is utilized to update a user's password. Once completed, the user
   * object is returned. Learn more about authentication and authorization in our
   * [documentation](https://docs.augno.com/guides/authentication).
   *
   * @example
   * ```ts
   * const response = await client.auth.passwords.updatePassword(
   *   {
   *     new_password: 'new-super-secret-password',
   *     old_password: 'super-secret-password',
   *   },
   * );
   * ```
   */
  updatePassword(
    body: PasswordUpdatePasswordParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PasswordUpdatePasswordResponse> {
    return this._client.put('/v1/auth/passwords', { body, ...options });
  }
}

export interface PasswordUpdatePasswordResponse {}

export interface PasswordUpdatePasswordParams {
  /**
   * The new password to be set
   */
  new_password?: string;

  /**
   * The user's current password
   */
  old_password?: string;
}

Passwords.Actions = Actions;

export declare namespace Passwords {
  export {
    type PasswordUpdatePasswordResponse as PasswordUpdatePasswordResponse,
    type PasswordUpdatePasswordParams as PasswordUpdatePasswordParams,
  };

  export {
    Actions as Actions,
    type ActionRequestPasswordResetResponse as ActionRequestPasswordResetResponse,
    type ActionResetPasswordResponse as ActionResetPasswordResponse,
    type ActionRequestPasswordResetParams as ActionRequestPasswordResetParams,
    type ActionResetPasswordParams as ActionResetPasswordParams,
  };
}
