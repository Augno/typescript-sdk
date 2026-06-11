// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as UnitGroupsAPI from './unit-groups';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage unit groups and their associated units.
 */
export class Units extends APIResource {
  /**
   * Returns a list of associated units within a unit group.
   *
   * @example
   * ```ts
   * const listUnitGroupUnit =
   *   await client.catalog.unitGroups.units.list(
   *     'ug_01aad07abb8e41fd392d2d7013',
   *   );
   * ```
   */
  list(
    unitGroupID: string,
    query: UnitListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UnitGroupsAPI.ListUnitGroupUnit> {
    return this._client.get(path`/v1/catalog/unit-groups/${unitGroupID}/units`, { query, ...options });
  }

  /**
   * Returns an associated unit within a unit group by ID.
   *
   * @example
   * ```ts
   * const unitGroupUnit =
   *   await client.catalog.unitGroups.units.retrieve(
   *     'un_01966263f74a5a0cae356000a1',
   *     { unit_group_id: 'ug_01aad07abb8e41fd392d2d7013' },
   *   );
   * ```
   */
  retrieve(
    id: string,
    params: UnitRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<UnitGroupsAPI.UnitGroupUnit> {
    const { unit_group_id, ...query } = params;
    return this._client.get(path`/v1/catalog/unit-groups/${unit_group_id}/units/${id}`, {
      query,
      ...options,
    });
  }

  /**
   * Creates an associated unit within a unit group.
   *
   * @example
   * ```ts
   * const unitGroupUnit =
   *   await client.catalog.unitGroups.units.create(
   *     'ug_01aad07abb8e41fd392d2d7013',
   *     {
   *       unit_id: 'un_01966263f74a5a0cae356000a1',
   *       customer_portal_visibility: 'visible',
   *       discount_percentage: 1,
   *     },
   *   );
   * ```
   */
  create(
    unitGroupID: string,
    params: UnitCreateParams,
    options?: RequestOptions,
  ): APIPromise<UnitGroupsAPI.UnitGroupUnit> {
    const { include, ...body } = params;
    return this._client.post(path`/v1/catalog/unit-groups/${unitGroupID}/units`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Partially updates an associated unit within a unit group.
   *
   * @example
   * ```ts
   * const unitGroupUnit =
   *   await client.catalog.unitGroups.units.update(
   *     'un_01966263f74a5a0cae356000a1',
   *     {
   *       unit_group_id: 'ug_01aad07abb8e41fd392d2d7013',
   *       discount_percentage: 0.9,
   *       unit_id: 'un_01966263f74a5a0cae356000a1',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: UnitUpdateParams,
    options?: RequestOptions,
  ): APIPromise<UnitGroupsAPI.UnitGroupUnit> {
    const { unit_group_id, include, ...body } = params;
    return this._client.patch(path`/v1/catalog/unit-groups/${unit_group_id}/units/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Deletes an associated unit from a unit group.
   *
   * @example
   * ```ts
   * const unit = await client.catalog.unitGroups.units.delete(
   *   'un_01966263f74a5a0cae356000a1',
   *   { unit_group_id: 'ug_01aad07abb8e41fd392d2d7013' },
   * );
   * ```
   */
  delete(id: string, params: UnitDeleteParams, options?: RequestOptions): APIPromise<UnitDeleteResponse> {
    const { unit_group_id } = params;
    return this._client.delete(path`/v1/catalog/unit-groups/${unit_group_id}/units/${id}`, options);
  }
}

/**
 * CreateUnitGroupUnitRequest is a request to create an associated unit within a
 * unit group.
 */
export interface CreateUnitGroupUnitRequest {
  /**
   * Unit ID.
   */
  unit_id: string;

  /**
   * Customer portal visibility.
   */
  customer_portal_visibility?: 'visible' | 'hidden';

  /**
   * Fixed discount amount.
   */
  discount_fixed?: number;

  /**
   * Discount percentage.
   */
  discount_percentage?: number;
}

/**
 * UpdateUnitGroupUnitRequest is a request to update an associated unit.
 */
export interface UpdateUnitGroupUnitRequest {
  /**
   * Customer portal visibility.
   */
  customer_portal_visibility?: 'visible' | 'hidden';

  /**
   * Fixed discount amount.
   */
  discount_fixed?: number;

  /**
   * Discount percentage.
   */
  discount_percentage?: number;

  /**
   * Unit ID.
   */
  unit_id?: string;
}

export interface UnitDeleteResponse {}

export interface UnitListParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'unit'>;
}

export interface UnitRetrieveParams {
  /**
   * Path param: Unit group ID.
   */
  unit_group_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'unit'>;
}

export interface UnitCreateParams {
  /**
   * Body param: Unit ID.
   */
  unit_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'unit'>;

  /**
   * Body param: Customer portal visibility.
   */
  customer_portal_visibility?: 'visible' | 'hidden';

  /**
   * Body param: Fixed discount amount.
   */
  discount_fixed?: number;

  /**
   * Body param: Discount percentage.
   */
  discount_percentage?: number;
}

export interface UnitUpdateParams {
  /**
   * Path param: Unit group ID.
   */
  unit_group_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'unit'>;

  /**
   * Body param: Customer portal visibility.
   */
  customer_portal_visibility?: 'visible' | 'hidden';

  /**
   * Body param: Fixed discount amount.
   */
  discount_fixed?: number;

  /**
   * Body param: Discount percentage.
   */
  discount_percentage?: number;

  /**
   * Body param: Unit ID.
   */
  unit_id?: string;
}

export interface UnitDeleteParams {
  /**
   * Unit group ID.
   */
  unit_group_id: string;
}

export declare namespace Units {
  export {
    type CreateUnitGroupUnitRequest as CreateUnitGroupUnitRequest,
    type UpdateUnitGroupUnitRequest as UpdateUnitGroupUnitRequest,
    type UnitDeleteResponse as UnitDeleteResponse,
    type UnitListParams as UnitListParams,
    type UnitRetrieveParams as UnitRetrieveParams,
    type UnitCreateParams as UnitCreateParams,
    type UnitUpdateParams as UnitUpdateParams,
    type UnitDeleteParams as UnitDeleteParams,
  };
}
