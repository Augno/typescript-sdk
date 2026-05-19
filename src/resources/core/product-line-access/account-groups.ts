// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as AccountPricesAPI from '../account-prices';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage product line access for account groups.
 */
export class AccountGroups extends APIResource {
  /**
   * This endpoint creates product line access for an account group.
   *
   * @example
   * ```ts
   * const productLineAccess =
   *   await client.core.productLineAccess.accountGroups.create({
   *     account_group_id: 'acgp_01jm4r6700f8nwq3v5hx2d9ktp',
   *     product_line_ids: ['pl_01jm4r6700f8nwq3v5hx2d9ktp'],
   *   });
   * ```
   */
  create(body: AccountGroupCreateParams, options?: RequestOptions): APIPromise<ProductLineAccess> {
    return this._client.post('/v1/core/product-line-access/account-groups', { body, ...options });
  }

  /**
   * This endpoint returns the product line access for a single account group by its
   * ID.
   *
   * @example
   * ```ts
   * const productLineAccess =
   *   await client.core.productLineAccess.accountGroups.retrieve(
   *     'account_group_id',
   *   );
   * ```
   */
  retrieve(accountGroupID: string, options?: RequestOptions): APIPromise<ProductLineAccess> {
    return this._client.get(path`/v1/core/product-line-access/account-groups/${accountGroupID}`, options);
  }

  /**
   * This endpoint replaces all product line access for an account group.
   *
   * @example
   * ```ts
   * const productLineAccess =
   *   await client.core.productLineAccess.accountGroups.update(
   *     'account_group_id',
   *     { product_line_ids: ['pl_01jm4r6700f8nwq3v5hx2d9ktp'] },
   *   );
   * ```
   */
  update(
    accountGroupID: string,
    body: AccountGroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProductLineAccess> {
    return this._client.patch(path`/v1/core/product-line-access/account-groups/${accountGroupID}`, {
      body,
      ...options,
    });
  }

  /**
   * This endpoint returns a paginated list of product line access records grouped by
   * account group. Supports cursor-based pagination and search.
   *
   * @example
   * ```ts
   * const accountGroups =
   *   await client.core.productLineAccess.accountGroups.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<AccountGroupListResponse> {
    return this._client.get('/v1/core/product-line-access/account-groups', options);
  }

  /**
   * This endpoint removes all product line access for an account group.
   *
   * @example
   * ```ts
   * const accountGroup =
   *   await client.core.productLineAccess.accountGroups.delete(
   *     'account_group_id',
   *   );
   * ```
   */
  delete(accountGroupID: string, options?: RequestOptions): APIPromise<AccountGroupDeleteResponse> {
    return this._client.delete(path`/v1/core/product-line-access/account-groups/${accountGroupID}`, options);
  }
}

/**
 * AccountGroupProductLineAccess represents the product lines accessible to an
 * account group.
 */
export interface ProductLineAccess {
  /**
   * LightAccountGroup is a sub-resource for account group references.
   */
  account_group: ProductLineAccess.AccountGroup | null;

  /**
   * When this record was created.
   */
  created_at: string;

  /**
   * The resource type identifier.
   */
  object: 'account_group_product_line_access';

  /**
   * The product lines accessible to this account group.
   */
  product_lines: Array<AccountPricesAPI.LightProductLine>;

  /**
   * When this record was last updated.
   */
  updated_at: string;
}

export namespace ProductLineAccess {
  /**
   * LightAccountGroup is a sub-resource for account group references.
   */
  export interface AccountGroup {
    /**
     * The unique identifier.
     */
    id: string;

    /**
     * The display name.
     */
    name: string;

    /**
     * The resource type identifier.
     */
    object: 'account_group';
  }
}

/**
 * A paginated list of AccountGroupProductLineAccess resources
 */
export interface AccountGroupListResponse {
  /**
   * Array of AccountGroupProductLineAccess resources in this page
   */
  data: Array<ProductLineAccess>;

  /**
   * Object type for AccountGroupProductLineAccess list
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
   * The ID of the account group.
   */
  account_group_id: string;

  /**
   * The IDs of the product lines to grant access to.
   */
  product_line_ids: Array<string>;
}

export interface AccountGroupUpdateParams {
  /**
   * The IDs of the product lines to grant access to.
   */
  product_line_ids: Array<string>;
}

export declare namespace AccountGroups {
  export {
    type ProductLineAccess as ProductLineAccess,
    type AccountGroupListResponse as AccountGroupListResponse,
    type AccountGroupDeleteResponse as AccountGroupDeleteResponse,
    type AccountGroupCreateParams as AccountGroupCreateParams,
    type AccountGroupUpdateParams as AccountGroupUpdateParams,
  };
}
