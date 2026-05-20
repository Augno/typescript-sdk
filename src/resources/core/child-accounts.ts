// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import * as AccountPricesAPI from './account-prices';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage parent-child relationships between customer accounts.
 */
export class ChildAccounts extends APIResource {
  /**
   * This endpoint returns a paginated list of child accounts for the target account
   * (parent). Supports cursor-based pagination and search by account name.
   *
   * @example
   * ```ts
   * const childAccounts =
   *   await client.core.childAccounts.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ChildAccountListResponse> {
    return this._client.get('/v1/core/child-accounts', options);
  }

  /**
   * This endpoint adds a child account to the target account (parent). The child
   * must be an existing account relation. The operation is idempotent.
   *
   * @example
   * ```ts
   * const childAccount = await client.core.childAccounts.add(
   *   'child_account_id',
   * );
   * ```
   */
  add(childAccountID: string, options?: RequestOptions): APIPromise<ChildAccount> {
    return this._client.put(path`/v1/core/child-accounts/${childAccountID}`, options);
  }

  /**
   * This endpoint removes a child account from the target account (parent). The
   * operation is idempotent — removing an already-removed child returns success.
   *
   * @example
   * ```ts
   * const childAccount = await client.core.childAccounts.remove(
   *   'child_account_id',
   * );
   * ```
   */
  remove(childAccountID: string, options?: RequestOptions): APIPromise<ChildAccountRemoveResponse> {
    return this._client.delete(path`/v1/core/child-accounts/${childAccountID}`, options);
  }
}

/**
 * ChildAccount represents a child customer account in a parent-child relationship.
 */
export interface ChildAccount {
  /**
   * The account relation ID.
   */
  id: string;

  /**
   * LightAccount represents a minimal account reference.
   */
  account: AccountPricesAPI.LightAccount | null;

  /**
   * When this relation was created.
   */
  created_at: string;

  /**
   * The support email from account branding.
   */
  email: string | null;

  /**
   * The external number for the account relation.
   */
  external_number: string | null;

  /**
   * The resource type identifier.
   */
  object: 'child_account';

  /**
   * When this relation was last updated.
   */
  updated_at: string;
}

/**
 * A paginated list of ChildAccount resources
 */
export interface ChildAccountListResponse {
  /**
   * Array of ChildAccount resources in this page
   */
  data: Array<ChildAccount>;

  /**
   * Object type for ChildAccount list
   */
  object: 'list';

  /**
   * PageInfo contains cursor-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface ChildAccountRemoveResponse {}

export declare namespace ChildAccounts {
  export {
    type ChildAccount as ChildAccount,
    type ChildAccountListResponse as ChildAccountListResponse,
    type ChildAccountRemoveResponse as ChildAccountRemoveResponse,
  };
}
