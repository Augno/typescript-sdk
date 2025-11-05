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
   * const response = await client.auth.actions.loginUser({
   *   identifier: 'identifier',
   *   password: 'password',
   * });
   * ```
   */
  loginUser(body: ActionLoginUserParams, options?: RequestOptions): APIPromise<ActionLoginUserResponse> {
    return this._client.post('/v2/auth/actions/login', { body, ...options });
  }
}

/**
 * Response schema for User
 */
export interface ActionLoginUserResponse {
  /**
   * The ID of the user
   */
  id: string;

  /**
   * The created at timestamp of the user
   */
  created_at: string;

  /**
   * The email of the user
   */
  email: string | null;

  /**
   * The email verified status of the user
   */
  email_verified: string | null;

  /**
   * The image URL of the user
   */
  image_url: string | null;

  /**
   * The name of the user
   */
  name: string | null;

  /**
   * The updated at timestamp of the user
   */
  updated_at: string;

  /**
   * The username of the user
   */
  username: string | null;
}

export interface ActionLoginUserParams {
  /**
   * The username or email of the user
   */
  identifier: string;

  /**
   * The password of the user
   */
  password: string;
}

export declare namespace Actions {
  export {
    type ActionLoginUserResponse as ActionLoginUserResponse,
    type ActionLoginUserParams as ActionLoginUserParams,
  };
}
