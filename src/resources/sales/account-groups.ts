// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage account groups.
 */
export class AccountGroups extends APIResource {
  /**
   * Creates an account group.
   *
   * @example
   * ```ts
   * const accountGroup =
   *   await client.sales.accountGroups.create({
   *     name: 'Wholesale Customers',
   *     type: 'type_group',
   *   });
   * ```
   */
  create(body: AccountGroupCreateParams, options?: RequestOptions): APIPromise<AccountGroup> {
    return this._client.post('/v1/sales/account-groups', { body, ...options });
  }

  /**
   * Returns an account group by ID.
   *
   * @example
   * ```ts
   * const accountGroup =
   *   await client.sales.accountGroups.retrieve(
   *     'acgp_018e88072d1320808dc979cfac',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AccountGroup> {
    return this._client.get(path`/v1/sales/account-groups/${id}`, options);
  }

  /**
   * Partially updates an account group.
   *
   * @example
   * ```ts
   * const accountGroup =
   *   await client.sales.accountGroups.update(
   *     'acgp_018e88072d1320808dc979cfac',
   *     { name: 'Updated Wholesale Customers' },
   *   );
   * ```
   */
  update(
    id: string,
    body: AccountGroupUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountGroup> {
    return this._client.patch(path`/v1/sales/account-groups/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of account groups.
   *
   * @example
   * ```ts
   * const listAccountGroup =
   *   await client.sales.accountGroups.list();
   * ```
   */
  list(
    query: AccountGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListAccountGroup> {
    return this._client.get('/v1/sales/account-groups', { query, ...options });
  }

  /**
   * Deletes an account group. Fails if the account group is actively used in
   * production.
   *
   * @example
   * ```ts
   * const accountGroup =
   *   await client.sales.accountGroups.delete(
   *     'acgp_018e88072d1320808dc979cfac',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<AccountGroupDeleteResponse> {
    return this._client.delete(path`/v1/sales/account-groups/${id}`, options);
  }
}

/**
 * Account group resource.
 */
export interface AccountGroup {
  /**
   * Account group ID.
   */
  id: string;

  /**
   * Commission policy.
   */
  commission_policy: 'commission_applied' | 'commission_exempt';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Description.
   */
  description: string | null;

  /**
   * Freight policy.
   */
  freight_policy: 'free_freight' | 'billed_freight';

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'account_group';

  /**
   * Account group type.
   *
   * The type `pricing_group` indicates this account group is utilized for pricing
   * rules. For example, you may have a 'Preferred' price group that receives a
   * special discount rate. The type `type_group` indicates the account group is
   * utilized to categorize a set of accounts. For example, you may have a group of
   * accounts that are 'Consumers' or 'Distributors'.
   */
  type: 'pricing_group' | 'type_group';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Request to create an account group.
 */
export interface CreateAccountGroupRequest {
  /**
   * Display name.
   */
  name: string;

  /**
   * Account group type.
   */
  type: 'pricing_group' | 'type_group';

  /**
   * Commission policy.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * Description.
   */
  description?: string;

  /**
   * Freight policy.
   */
  freight_policy?: 'free_freight' | 'billed_freight';
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAccountGroup {
  /**
   * Resources in this page.
   */
  data: Array<AccountGroup>;

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
 * Request to partially update an account group.
 */
export interface UpdateAccountGroupRequest {
  /**
   * Commission policy.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * Description.
   */
  description?: string | null;

  /**
   * Freight policy.
   */
  freight_policy?: 'free_freight' | 'billed_freight';

  /**
   * Display name.
   */
  name?: string;
}

export interface AccountGroupDeleteResponse {}

export interface AccountGroupCreateParams {
  /**
   * Display name.
   */
  name: string;

  /**
   * Account group type.
   */
  type: 'pricing_group' | 'type_group';

  /**
   * Commission policy.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * Description.
   */
  description?: string;

  /**
   * Freight policy.
   */
  freight_policy?: 'free_freight' | 'billed_freight';
}

export interface AccountGroupUpdateParams {
  /**
   * Commission policy.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * Description.
   */
  description?: string | null;

  /**
   * Freight policy.
   */
  freight_policy?: 'free_freight' | 'billed_freight';

  /**
   * Display name.
   */
  name?: string;
}

export interface AccountGroupListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Account group type filter.
   */
  type?: 'pricing_group' | 'type_group';
}

export declare namespace AccountGroups {
  export {
    type AccountGroup as AccountGroup,
    type CreateAccountGroupRequest as CreateAccountGroupRequest,
    type ListAccountGroup as ListAccountGroup,
    type UpdateAccountGroupRequest as UpdateAccountGroupRequest,
    type AccountGroupDeleteResponse as AccountGroupDeleteResponse,
    type AccountGroupCreateParams as AccountGroupCreateParams,
    type AccountGroupUpdateParams as AccountGroupUpdateParams,
    type AccountGroupListParams as AccountGroupListParams,
  };
}
