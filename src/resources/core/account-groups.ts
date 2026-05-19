// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage account groups.
 */
export class AccountGroups extends APIResource {
  /**
   * This endpoint creates a new account group.
   *
   * @example
   * ```ts
   * const accountGroup = await client.core.accountGroups.create(
   *   {
   *     commission_status: 'commission_applied',
   *     freight_status: 'billed_freight',
   *     name: 'Wholesale Customers',
   *     type: 'pricing_group',
   *   },
   * );
   * ```
   */
  create(body: AccountGroupCreateParams, options?: RequestOptions): APIPromise<AccountGroup> {
    return this._client.post('/v1/core/account-groups', { body, ...options });
  }

  /**
   * This endpoint returns a single account group by its ID.
   *
   * @example
   * ```ts
   * const accountGroup =
   *   await client.core.accountGroups.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AccountGroup> {
    return this._client.get(path`/v1/core/account-groups/${id}`, options);
  }

  /**
   * This endpoint partially updates an account group. Only provided fields are
   * updated; absent fields retain their current values.
   *
   * @example
   * ```ts
   * const accountGroup = await client.core.accountGroups.update(
   *   'id',
   *   { name: 'Updated Wholesale Customers' },
   * );
   * ```
   */
  update(
    id: string,
    body: AccountGroupUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountGroup> {
    return this._client.patch(path`/v1/core/account-groups/${id}`, { body, ...options });
  }

  /**
   * This endpoint returns a paginated list of account groups for the target account.
   * Supports cursor-based pagination, filtering by type, and search by name or
   * description.
   *
   * @example
   * ```ts
   * const accountGroups =
   *   await client.core.accountGroups.list();
   * ```
   */
  list(
    query: AccountGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountGroupListResponse> {
    return this._client.get('/v1/core/account-groups', { query, ...options });
  }

  /**
   * This endpoint deletes an account group.
   *
   * @example
   * ```ts
   * const accountGroup = await client.core.accountGroups.delete(
   *   'id',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<AccountGroupDeleteResponse> {
    return this._client.delete(path`/v1/core/account-groups/${id}`, options);
  }
}

/**
 * AccountGroup represents an account group used for organizing customer accounts.
 */
export interface AccountGroup {
  /**
   * The unique identifier for the account group.
   */
  id: string;

  /**
   * The commission status of the account group.
   */
  commission_status: 'commission_applied' | 'commission_exempt';

  /**
   * When this account group was created.
   */
  created_at: string;

  /**
   * An optional description of the account group.
   */
  description: string | null;

  /**
   * The freight status of the account group.
   */
  freight_status: 'free_freight' | 'billed_freight';

  /**
   * The display name of the account group.
   */
  name: string;

  /**
   * The resource type identifier.
   */
  object: 'account_group';

  /**
   * The account group type.
   */
  type: 'pricing_group' | 'type_group';

  /**
   * When this account group was last updated.
   */
  updated_at: string;
}

/**
 * A paginated list of AccountGroup resources
 */
export interface AccountGroupListResponse {
  /**
   * Array of AccountGroup resources in this page
   */
  data: Array<AccountGroup>;

  /**
   * Object type for AccountGroup list
   */
  object: 'list';

  /**
   * PageInfo contains cursor-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface AccountGroupDeleteResponse {}

export interface AccountGroupCreateParams {
  /**
   * The commission status code.
   */
  commission_status: 'commission_applied' | 'commission_exempt';

  /**
   * The freight status code.
   */
  freight_status: 'free_freight' | 'billed_freight';

  /**
   * The display name of the account group.
   */
  name: string;

  /**
   * The account group type code.
   */
  type: 'pricing_group' | 'type_group';

  /**
   * An optional description of the account group.
   */
  description?: string | null;
}

export interface AccountGroupUpdateParams {
  /**
   * The commission status code.
   */
  commission_status?: 'commission_applied' | 'commission_exempt' | null;

  /**
   * An optional description of the account group.
   */
  description?: string | null;

  /**
   * The freight status code.
   */
  freight_status?: 'free_freight' | 'billed_freight' | null;

  /**
   * The display name of the account group.
   */
  name?: string | null;
}

export interface AccountGroupListParams {
  /**
   * Filter by account group type code.
   */
  type?: 'pricing_group' | 'type_group';
}

export declare namespace AccountGroups {
  export {
    type AccountGroup as AccountGroup,
    type AccountGroupListResponse as AccountGroupListResponse,
    type AccountGroupDeleteResponse as AccountGroupDeleteResponse,
    type AccountGroupCreateParams as AccountGroupCreateParams,
    type AccountGroupUpdateParams as AccountGroupUpdateParams,
    type AccountGroupListParams as AccountGroupListParams,
  };
}
