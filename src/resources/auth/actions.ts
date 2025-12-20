// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Actions extends APIResource {
  /**
   * This endpoint is utilized to login a user. Once completed, the user object is
   * returned. An access and refresh token are set in cookies. Learn more about
   * authentication and authorization in our
   * [documentation](https://docs.augno.com/guides/authentication).
   *
   * @example
   * ```ts
   * const user = await client.auth.actions.loginUser({
   *   identifier: 'jdoe',
   *   password: 'super-secret-password',
   * });
   * ```
   */
  loginUser(body: ActionLoginUserParams, options?: RequestOptions): APIPromise<User> {
    return this._client.post('/v1/auth/actions/login', { body, ...options });
  }
}

/**
 * A user in the Augno system
 */
export interface User {
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
   * The object type, always "user"
   */
  object: string;

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
   * The username or email for authentication
   */
  identifier: string;

  /**
   * The password for authentication
   */
  password: string;
}

export declare namespace Actions {
  export { type User as User, type ActionLoginUserParams as ActionLoginUserParams };
}
