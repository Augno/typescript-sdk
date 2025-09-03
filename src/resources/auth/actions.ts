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
   * const response = await client.auth.actions.loginUser({
   *   password: '',
   *   username: '',
   * });
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
   * The access token for the user
   */
  access_token: string;

  /**
   * The account affiliations
   */
  account_affiliations: Array<ActionLoginUserResponse.AccountAffiliation>;

  /**
   * The current account in use
   */
  current_account: ActionLoginUserResponse.CurrentAccount;

  /**
   * The refresh token for the user
   */
  refresh_token: AuthAPI.RefreshToken;

  /**
   * The user that was logged in
   */
  user: ActionLoginUserResponse.User;
}

export namespace ActionLoginUserResponse {
  /**
   * Represents a AccountAffiliation resource
   */
  export interface AccountAffiliation {
    /**
     * The ID of the account affiliation
     */
    id: string;

    /**
     * The name of the account affiliation
     */
    name: string;

    /**
     * Represents a AccountAffiliationRole resource
     */
    role: AccountAffiliation.Role;
  }

  export namespace AccountAffiliation {
    /**
     * Represents a AccountAffiliationRole resource
     */
    export interface Role {
      /**
       * The ID of the role
       */
      id: string;

      /**
       * The name of the role
       */
      name: string;
    }
  }

  /**
   * The current account in use
   */
  export interface CurrentAccount {
    /**
     * The ID of the current account
     */
    id: string;
  }

  /**
   * The user that was logged in
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
     * The updated at timestamp of the user
     */
    updated_at: string;

    /**
     * The username of the user
     */
    username: string | null;
  }
}

export interface ActionLoginUserParams {
  password: string;

  username: string;
}

export declare namespace Actions {
  export {
    type ActionLoginUserResponse as ActionLoginUserResponse,
    type ActionLoginUserParams as ActionLoginUserParams,
  };
}
