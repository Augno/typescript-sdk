// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as UnitsAPI from '../units';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage sales targets for account users.
 */
export class SalesTargets extends APIResource {
  /**
   * This endpoint creates a new sales target for an account user (sales rep).
   *
   * @example
   * ```ts
   * const salesTarget =
   *   await client.core.accountUsers.salesTargets.create('id', {
   *     amount_unit_id: 'amount_unit_id',
   *     amount_value: 'amount_value',
   *     end_date: '2019-12-27T18:11:19.117Z',
   *     start_date: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  create(id: string, body: SalesTargetCreateParams, options?: RequestOptions): APIPromise<SalesTarget> {
    return this._client.post(path`/v1/core/account-users/${id}/sales-targets`, { body, ...options });
  }

  /**
   * This endpoint returns a paginated list of sales targets for a specific account
   * user (sales rep).
   *
   * @example
   * ```ts
   * const salesTargets =
   *   await client.core.accountUsers.salesTargets.list('id');
   * ```
   */
  list(
    id: string,
    query: SalesTargetListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SalesTargetListResponse> {
    return this._client.get(path`/v1/core/account-users/${id}/sales-targets`, { query, ...options });
  }

  /**
   * This endpoint creates or updates a sales target by ID. If the target ID exists,
   * it updates it; otherwise, it creates a new target with that ID.
   *
   * @example
   * ```ts
   * const salesTarget =
   *   await client.core.accountUsers.salesTargets.upsert(
   *     'target_id',
   *     {
   *       id: 'id',
   *       amount_unit_id: 'amount_unit_id',
   *       amount_value: 'amount_value',
   *       end_date: '2019-12-27T18:11:19.117Z',
   *       start_date: '2019-12-27T18:11:19.117Z',
   *     },
   *   );
   * ```
   */
  upsert(
    targetID: string,
    params: SalesTargetUpsertParams,
    options?: RequestOptions,
  ): APIPromise<SalesTarget> {
    const { id, ...body } = params;
    return this._client.put(path`/v1/core/account-users/${id}/sales-targets/${targetID}`, {
      body,
      ...options,
    });
  }
}

/**
 * Quantity represents a value with an associated unit.
 */
export interface Quantity {
  /**
   * The unique identifier for the quantity.
   */
  id: string;

  /**
   * A human-readable formatted value including the unit (e.g. "$1,234.56" or "100
   * kg").
   */
  display_value: string;

  /**
   * The resource type identifier.
   */
  object: 'quantity';

  /**
   * Unit represents a unit of measurement used for conversions and product
   * quantities.
   */
  unit: UnitsAPI.Unit | null;

  /**
   * The decimal value of the quantity.
   */
  value: string;
}

/**
 * SalesTarget represents a sales target for an account user.
 */
export interface SalesTarget {
  /**
   * The unique identifier for the sales target.
   */
  id: string;

  /**
   * Quantity represents a value with an associated unit.
   */
  amount: Quantity | null;

  /**
   * When the sales target was created.
   */
  created_at: string;

  /**
   * The end date for this sales target.
   */
  end_date: string;

  /**
   * The resource type identifier.
   */
  object: 'sales_target';

  /**
   * LightUser is a compact user representation for use as a sub-resource.
   */
  sales_rep: SalesTarget.SalesRep | null;

  /**
   * The start date for this sales target.
   */
  start_date: string;

  /**
   * When the sales target was last updated.
   */
  updated_at: string;
}

export namespace SalesTarget {
  /**
   * LightUser is a compact user representation for use as a sub-resource.
   */
  export interface SalesRep {
    /**
     * The unique identifier for this user.
     */
    id: string;

    /**
     * The user's display name.
     */
    name: string | null;

    /**
     * The resource type identifier.
     */
    object: 'user';
  }
}

/**
 * A paginated list of SalesTarget resources
 */
export interface SalesTargetListResponse {
  /**
   * Array of SalesTarget resources in this page
   */
  data: Array<SalesTarget>;

  /**
   * Object type for SalesTarget list
   */
  object: 'list';

  /**
   * PageInfo contains cursor-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface SalesTargetCreateParams {
  /**
   * The unit ID for the target amount.
   */
  amount_unit_id: string;

  /**
   * The target amount value (decimal string).
   */
  amount_value: string;

  /**
   * The end date for the sales target.
   */
  end_date: string;

  /**
   * The start date for the sales target.
   */
  start_date: string;
}

export interface SalesTargetListParams {
  /**
   * Maximum number of results to return.
   */
  limit?: number;

  /**
   * Number of results to skip.
   */
  offset?: number;
}

export interface SalesTargetUpsertParams {
  /**
   * Path param: The user ID (sales rep) for the target.
   */
  id: string;

  /**
   * Body param: The unit ID for the target amount.
   */
  amount_unit_id: string;

  /**
   * Body param: The target amount value (decimal string).
   */
  amount_value: string;

  /**
   * Body param: The end date for the sales target.
   */
  end_date: string;

  /**
   * Body param: The start date for the sales target.
   */
  start_date: string;
}

export declare namespace SalesTargets {
  export {
    type Quantity as Quantity,
    type SalesTarget as SalesTarget,
    type SalesTargetListResponse as SalesTargetListResponse,
    type SalesTargetCreateParams as SalesTargetCreateParams,
    type SalesTargetListParams as SalesTargetListParams,
    type SalesTargetUpsertParams as SalesTargetUpsertParams,
  };
}
