// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as SalesTargetsAPI from './sales-targets';
import {
  Quantity,
  SalesTarget,
  SalesTargetCreateParams,
  SalesTargetListParams,
  SalesTargetListResponse,
  SalesTargetUpsertParams,
  SalesTargets,
} from './sales-targets';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage account users.
 */
export class AccountUsers extends APIResource {
  salesTargets: SalesTargetsAPI.SalesTargets = new SalesTargetsAPI.SalesTargets(this._client);

  /**
   * This endpoint creates a new account user and invites them to the account.
   *
   * @example
   * ```ts
   * const accountUser = await client.core.accountUsers.create({
   *   custom_email: 'custom_email',
   *   name: 'name',
   *   password: 'password',
   *   receives_invoice_notifications: true,
   *   receives_order_acknowledgements: true,
   *   receives_purchase_order_submission_notifications: true,
   *   username: 'username',
   * });
   * ```
   */
  create(body: AccountUserCreateParams, options?: RequestOptions): APIPromise<AccountUser> {
    return this._client.post('/v1/core/account-users', { body, ...options });
  }

  /**
   * This endpoint returns a single account user by their ID.
   *
   * @example
   * ```ts
   * const accountUser = await client.core.accountUsers.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: AccountUserRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUser> {
    return this._client.get(path`/v1/core/account-users/${id}`, { query, ...options });
  }

  /**
   * This endpoint partially updates an account user. Only provided fields are
   * updated; absent fields retain their current values.
   *
   * @example
   * ```ts
   * const accountUser = await client.core.accountUsers.update(
   *   'id',
   * );
   * ```
   */
  update(
    id: string,
    body: AccountUserUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUser> {
    return this._client.patch(path`/v1/core/account-users/${id}`, { body, ...options });
  }

  /**
   * This endpoint returns a paginated list of account users for the target account.
   * Supports cursor-based pagination, filtering by role type, and search by name,
   * email, or username.
   *
   * @example
   * ```ts
   * const accountUsers = await client.core.accountUsers.list();
   * ```
   */
  list(
    query: AccountUserListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUserListResponse> {
    return this._client.get('/v1/core/account-users', { query, ...options });
  }

  /**
   * This endpoint soft-deletes an account user, setting their status to removed.
   *
   * @example
   * ```ts
   * const accountUser = await client.core.accountUsers.delete(
   *   'id',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<AccountUserDeleteResponse> {
    return this._client.delete(path`/v1/core/account-users/${id}`, options);
  }

  /**
   * This endpoint locks an account user, preventing them from accessing the account.
   *
   * @example
   * ```ts
   * const response = await client.core.accountUsers.lock('id');
   * ```
   */
  lock(id: string, options?: RequestOptions): APIPromise<AccountUserLockResponse> {
    return this._client.post(path`/v1/core/account-users/${id}/lock`, options);
  }

  /**
   * This endpoint restores a previously removed account user, setting their status
   * back to active.
   *
   * @example
   * ```ts
   * const response = await client.core.accountUsers.restore(
   *   'id',
   * );
   * ```
   */
  restore(id: string, options?: RequestOptions): APIPromise<AccountUserRestoreResponse> {
    return this._client.post(path`/v1/core/account-users/${id}/restore`, options);
  }

  /**
   * This endpoint unlocks a previously locked account user, restoring their access
   * to the account.
   *
   * @example
   * ```ts
   * const response = await client.core.accountUsers.unlock(
   *   'id',
   * );
   * ```
   */
  unlock(id: string, options?: RequestOptions): APIPromise<AccountUserUnlockResponse> {
    return this._client.post(path`/v1/core/account-users/${id}/unlock`, options);
  }

  /**
   * This endpoint updates notification preferences for an account user. Only valid
   * for external (cross-account) targets.
   *
   * @example
   * ```ts
   * const accountUser =
   *   await client.core.accountUsers.updateNotificationPreferences(
   *     'id',
   *     {
   *       preferences: [
   *         {
   *           enabled: true,
   *           notification_type_code: 'notification_type_code',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  updateNotificationPreferences(
    id: string,
    body: AccountUserUpdateNotificationPreferencesParams,
    options?: RequestOptions,
  ): APIPromise<AccountUser> {
    return this._client.put(path`/v1/core/account-users/${id}/notification-preferences`, {
      body,
      ...options,
    });
  }

  /**
   * This endpoint updates an account user's password. The requester must provide
   * their own password for verification.
   *
   * @example
   * ```ts
   * const response =
   *   await client.core.accountUsers.updatePassword('id', {
   *     new_password: 'new_password',
   *     requester_password: 'requester_password',
   *   });
   * ```
   */
  updatePassword(
    id: string,
    body: AccountUserUpdatePasswordParams,
    options?: RequestOptions,
  ): APIPromise<AccountUserUpdatePasswordResponse> {
    return this._client.put(path`/v1/core/account-users/${id}/password`, { body, ...options });
  }
}

/**
 * AccountUser represents an account user with their profile, role, and department.
 */
export interface AccountUser {
  /**
   * The account_user join record ID.
   */
  id: string;

  /**
   * When the account user was created.
   */
  created_at: string;

  /**
   * LightDepartment represents a minimal department reference.
   */
  department: AccountUser.Department | null;

  /**
   * The user's email address.
   */
  email: string | null;

  /**
   * The user's profile image URL.
   */
  image_url: string | null;

  /**
   * Whether the user's email is verified.
   */
  is_verified: boolean;

  /**
   * When the user last used this account.
   */
  last_used_at: string | null;

  /**
   * The user's display name.
   */
  name: string | null;

  /**
   * The resource type identifier.
   */
  object: 'account_user';

  /**
   * LightRole represents a minimal role reference.
   */
  role: AgentsAPI.LightRole | null;

  /**
   * The account user status.
   */
  status: 'active' | 'disabled' | 'removed';

  /**
   * When the account user was last updated.
   */
  updated_at: string;

  /**
   * The user's username.
   */
  username: string | null;
}

export namespace AccountUser {
  /**
   * LightDepartment represents a minimal department reference.
   */
  export interface Department {
    /**
     * The unique identifier for the department.
     */
    id: string;

    /**
     * The display name of the department.
     */
    name: string;

    /**
     * The resource type identifier.
     */
    object: 'department';
  }
}

/**
 * A paginated list of AccountUser resources
 */
export interface AccountUserListResponse {
  /**
   * Array of AccountUser resources in this page
   */
  data: Array<AccountUser>;

  /**
   * Object type for AccountUser list
   */
  object: 'list';

  /**
   * PageInfo contains cursor-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface AccountUserDeleteResponse {}

export interface AccountUserLockResponse {}

export interface AccountUserRestoreResponse {}

export interface AccountUserUnlockResponse {}

export interface AccountUserUpdatePasswordResponse {}

export interface AccountUserCreateParams {
  /**
   * The user's email address.
   */
  custom_email: string | null;

  /**
   * The user's display name.
   */
  name: string | null;

  /**
   * The user's password.
   */
  password: string | null;

  /**
   * Whether the user receives invoice notifications.
   */
  receives_invoice_notifications: boolean;

  /**
   * Whether the user receives order acknowledgement notifications.
   */
  receives_order_acknowledgements: boolean;

  /**
   * Whether the user receives purchase order submission notifications.
   */
  receives_purchase_order_submission_notifications: boolean;

  /**
   * The user's username.
   */
  username: string | null;

  /**
   * The ID of the department to assign. Expandable.
   */
  department_id?: string | null;

  /**
   * Whether the user is a sales representative.
   */
  is_sales_rep?: boolean | null;

  /**
   * The ID of the role to assign. Expandable.
   */
  role_id?: string | null;
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
   * The user's email address.
   */
  custom_email?: string | null;

  /**
   * The ID of the department to assign.
   */
  department_id?: string | null;

  /**
   * The user's display name.
   */
  name?: string | null;

  /**
   * The ID of the role to assign.
   */
  role_id?: string | null;

  /**
   * The user's username.
   */
  username?: string | null;
}

export interface AccountUserListParams {
  /**
   * Whether to include removed account users in the results.
   */
  include_removed?: boolean;

  /**
   * Filter by role type code.
   */
  role_type?: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent';
}

export interface AccountUserUpdateNotificationPreferencesParams {
  /**
   * The notification preferences to update.
   */
  preferences: Array<AccountUserUpdateNotificationPreferencesParams.Preference>;
}

export namespace AccountUserUpdateNotificationPreferencesParams {
  /**
   * NotificationPreferenceItem represents a single notification preference toggle.
   */
  export interface Preference {
    /**
     * Whether the notification is enabled.
     */
    enabled: boolean;

    /**
     * The notification type code (e.g. "invoice", "order_acknowledgement",
     * "purchase_order_submission").
     */
    notification_type_code: string;
  }
}

export interface AccountUserUpdatePasswordParams {
  /**
   * The new password to set for the account user.
   */
  new_password: string;

  /**
   * The requester's current password for verification.
   */
  requester_password: string;
}

AccountUsers.SalesTargets = SalesTargets;

export declare namespace AccountUsers {
  export {
    type AccountUser as AccountUser,
    type AccountUserListResponse as AccountUserListResponse,
    type AccountUserDeleteResponse as AccountUserDeleteResponse,
    type AccountUserLockResponse as AccountUserLockResponse,
    type AccountUserRestoreResponse as AccountUserRestoreResponse,
    type AccountUserUnlockResponse as AccountUserUnlockResponse,
    type AccountUserUpdatePasswordResponse as AccountUserUpdatePasswordResponse,
    type AccountUserCreateParams as AccountUserCreateParams,
    type AccountUserRetrieveParams as AccountUserRetrieveParams,
    type AccountUserUpdateParams as AccountUserUpdateParams,
    type AccountUserListParams as AccountUserListParams,
    type AccountUserUpdateNotificationPreferencesParams as AccountUserUpdateNotificationPreferencesParams,
    type AccountUserUpdatePasswordParams as AccountUserUpdatePasswordParams,
  };

  export {
    SalesTargets as SalesTargets,
    type Quantity as Quantity,
    type SalesTarget as SalesTarget,
    type SalesTargetListResponse as SalesTargetListResponse,
    type SalesTargetCreateParams as SalesTargetCreateParams,
    type SalesTargetListParams as SalesTargetListParams,
    type SalesTargetUpsertParams as SalesTargetUpsertParams,
  };
}
