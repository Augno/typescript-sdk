// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as ActionsAPI from './actions';
import { ActionActivateResponse, ActionDisableResponse, ActionRemoveResponse, Actions } from './actions';
import * as CustomersAPI from '../../sales/customers/customers';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage account users.
 */
export class AccountUsers extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Creates a new account user and invites them to the target account.
   *
   * @example
   * ```ts
   * const accountUser =
   *   await client.identity.accountUsers.create({
   *     preferences: [
   *       {
   *         notification_type: 'order_acknowledgement',
   *         enabled: true,
   *       },
   *     ],
   *   });
   * ```
   */
  create(
    params: AccountUserCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.AccountUser> {
    const { include, ...body } = params ?? {};
    return this._client.post('/v1/identity/account-users', { query: { include }, body, ...options });
  }

  /**
   * Returns an account user by ID.
   *
   * @example
   * ```ts
   * const accountUser =
   *   await client.identity.accountUsers.retrieve(
   *     'acus_01ea9983ddb41dacc44ecf997c',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: AccountUserRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.AccountUser> {
    return this._client.get(path`/v1/identity/account-users/${id}`, { query, ...options });
  }

  /**
   * Partially updates an account user.
   *
   * @example
   * ```ts
   * const accountUser =
   *   await client.identity.accountUsers.update(
   *     'acus_01ea9983ddb41dacc44ecf997c',
   *   );
   * ```
   */
  update(
    id: string,
    params: AccountUserUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.AccountUser> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/identity/account-users/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of account users for the current account.
   *
   * @example
   * ```ts
   * const listAccountUser =
   *   await client.identity.accountUsers.list();
   * ```
   */
  list(
    query: AccountUserListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListAccountUser> {
    return this._client.get('/v1/identity/account-users', { query, ...options });
  }
}

/**
 * Request to create an account user.
 */
export interface CreateAccountUserRequest {
  /**
   * Department assigned to the user.
   */
  department_id?: string;

  /**
   * User email address.
   */
  email?: string;

  /**
   * User display name.
   */
  name?: string;

  /**
   * Password. Only used for scanner-role users (scanning stations). Must be 8–72
   * chars and include upper, lower, number, and special character.
   */
  password?: string;

  /**
   * Notification preferences for the user (external targets only).
   */
  preferences?: Array<NotificationPreferenceItem>;

  /**
   * Role assigned to the user.
   */
  role_id?: string;

  /**
   * Unique username (3–255 chars; letters, numbers, underscores, hyphens).
   */
  username?: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAccountUser {
  /**
   * Resources in this page.
   */
  data: Array<CustomersAPI.AccountUser>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * NotificationPreferenceItem toggles a single account-relation notification type.
 */
export interface NotificationPreferenceItem {
  /**
   * Whether this notification type is enabled for the account user.
   */
  enabled: boolean;

  /**
   * Notification type.
   */
  notification_type: 'invoice' | 'order_acknowledgement' | 'purchase_order_submission';
}

/**
 * Request to partially update an account user.
 */
export interface UpdateAccountUserRequest {
  /**
   * Department assigned to the user.
   */
  department_id?: string | null;

  /**
   * User email address.
   */
  email?: string;

  /**
   * User display name.
   */
  name?: string;

  /**
   * Notification preferences to update (external targets only).
   */
  preferences?: Array<NotificationPreferenceItem>;

  /**
   * Role assigned to the user.
   */
  role_id?: string | null;

  /**
   * Unique username (3–255 chars; letters, numbers, underscores, hyphens).
   */
  username?: string;
}

export interface AccountUserCreateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'role' | 'department'>;

  /**
   * Body param: Department assigned to the user.
   */
  department_id?: string;

  /**
   * Body param: User email address.
   */
  email?: string;

  /**
   * Body param: User display name.
   */
  name?: string;

  /**
   * Body param: Password. Only used for scanner-role users (scanning stations). Must
   * be 8–72 chars and include upper, lower, number, and special character.
   */
  password?: string;

  /**
   * Body param: Notification preferences for the user (external targets only).
   */
  preferences?: Array<NotificationPreferenceItem>;

  /**
   * Body param: Role assigned to the user.
   */
  role_id?: string;

  /**
   * Body param: Unique username (3–255 chars; letters, numbers, underscores,
   * hyphens).
   */
  username?: string;
}

export interface AccountUserRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'role' | 'department'>;
}

export interface AccountUserUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'role' | 'department'>;

  /**
   * Body param: Department assigned to the user.
   */
  department_id?: string | null;

  /**
   * Body param: User email address.
   */
  email?: string;

  /**
   * Body param: User display name.
   */
  name?: string;

  /**
   * Body param: Notification preferences to update (external targets only).
   */
  preferences?: Array<NotificationPreferenceItem>;

  /**
   * Body param: Role assigned to the user.
   */
  role_id?: string | null;

  /**
   * Body param: Unique username (3–255 chars; letters, numbers, underscores,
   * hyphens).
   */
  username?: string;
}

export interface AccountUserListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'role' | 'department'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Controls whether removed account users are included.
   */
  removed_scope?: 'excluded' | 'included';

  /**
   * Filter by role type code.
   */
  role_type?: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent';
}

AccountUsers.Actions = Actions;

export declare namespace AccountUsers {
  export {
    type CreateAccountUserRequest as CreateAccountUserRequest,
    type ListAccountUser as ListAccountUser,
    type NotificationPreferenceItem as NotificationPreferenceItem,
    type UpdateAccountUserRequest as UpdateAccountUserRequest,
    type AccountUserCreateParams as AccountUserCreateParams,
    type AccountUserRetrieveParams as AccountUserRetrieveParams,
    type AccountUserUpdateParams as AccountUserUpdateParams,
    type AccountUserListParams as AccountUserListParams,
  };

  export {
    Actions as Actions,
    type ActionActivateResponse as ActionActivateResponse,
    type ActionDisableResponse as ActionDisableResponse,
    type ActionRemoveResponse as ActionRemoveResponse,
  };
}
