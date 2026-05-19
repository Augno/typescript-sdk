// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and retrieve account statuses.
 */
export class AccountStatuses extends APIResource {
  /**
   * This endpoint returns a single account status by its ID.
   *
   * @example
   * ```ts
   * const accountStatus =
   *   await client.core.accountStatuses.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AccountStatus> {
    return this._client.get(path`/v1/core/account-statuses/${id}`, options);
  }

  /**
   * This endpoint returns a paginated list of account statuses. Account statuses are
   * global lookup values used when setting account relationship statuses.
   *
   * @example
   * ```ts
   * const accountStatuses =
   *   await client.core.accountStatuses.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<AccountStatusListResponse> {
    return this._client.get('/v1/core/account-statuses', options);
  }
}

/**
 * AccountStatus represents an account status lookup value.
 */
export interface AccountStatus {
  /**
   * The unique identifier for the account status.
   */
  id: string;

  /**
   * The machine-readable code for this status.
   */
  code: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all';

  /**
   * When this account status was created.
   */
  created_at: string;

  /**
   * The display name of the account status.
   */
  name: string;

  /**
   * The resource type identifier.
   */
  object: 'account_status';

  /**
   * When this account status was last updated.
   */
  updated_at: string;
}

/**
 * A paginated list of AccountStatus resources
 */
export interface AccountStatusListResponse {
  /**
   * Array of AccountStatus resources in this page
   */
  data: Array<AccountStatus>;

  /**
   * Object type for AccountStatus list
   */
  object: 'list';

  /**
   * PageInfo contains cursor-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export declare namespace AccountStatuses {
  export { type AccountStatus as AccountStatus, type AccountStatusListResponse as AccountStatusListResponse };
}
