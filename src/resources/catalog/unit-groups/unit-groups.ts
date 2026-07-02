// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as UnitsAPI from '../units';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as UnitGroupsUnitsAPI from './units';
import {
  CreateUnitGroupUnitRequest,
  UnitCreateParams,
  UnitDeleteParams,
  UnitDeleteResponse,
  UnitListParams,
  UnitRetrieveParams,
  UnitUpdateParams,
  Units,
  UpdateUnitGroupUnitRequest,
} from './units';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage unit groups and their associated units.
 */
export class UnitGroups extends APIResource {
  units: UnitGroupsUnitsAPI.Units = new UnitGroupsUnitsAPI.Units(this._client);

  /**
   * Returns a paginated list of unit groups, including system unit groups.
   *
   * This endpoint requires the permission: `unit_groups:read`.
   *
   * @example
   * ```ts
   * const listUnitGroup =
   *   await client.catalog.unitGroups.list();
   * ```
   */
  list(
    query: UnitGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListUnitGroup> {
    return this._client.get('/v1/catalog/unit-groups', { query, ...options });
  }

  /**
   * Returns a unit group by ID.
   *
   * This endpoint requires the permission: `unit_groups:read`.
   *
   * @example
   * ```ts
   * const unitGroup = await client.catalog.unitGroups.retrieve(
   *   'ug_01aad07abb8e41fd392d2d7013',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: UnitGroupRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UnitGroup> {
    return this._client.get(path`/v1/catalog/unit-groups/${id}`, { query, ...options });
  }

  /**
   * Creates a unit group with optional associated units.
   *
   * This endpoint requires the permission: `unit_groups:create`.
   *
   * @example
   * ```ts
   * const unitGroup = await client.catalog.unitGroups.create({
   *   base_unit_id: 'un_01966263f74a5a0cae356000a1',
   *   name: 'Weight Units',
   *   type: 'mass',
   *   associated_units: [
   *     {
   *       unit_id: 'un_01966263f74a5a0cae356000a1',
   *       discount_percentage: 1,
   *       discount_fixed: 0,
   *       customer_portal_visibility: 'visible',
   *     },
   *   ],
   * });
   * ```
   */
  create(params: UnitGroupCreateParams, options?: RequestOptions): APIPromise<UnitGroup> {
    const { include, ...body } = params;
    return this._client.post('/v1/catalog/unit-groups', { query: { include }, body, ...options });
  }

  /**
   * Partially updates a unit group. System unit groups cannot be updated.
   *
   * This endpoint requires the permission: `unit_groups:update`.
   *
   * @example
   * ```ts
   * const unitGroup = await client.catalog.unitGroups.update(
   *   'ug_01aad07abb8e41fd392d2d7013',
   *   {
   *     base_unit_id: 'un_01966263f74a5a0cae356000a1',
   *     name: 'Weight Units (Updated)',
   *   },
   * );
   * ```
   */
  update(
    id: string,
    params: UnitGroupUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UnitGroup> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/catalog/unit-groups/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Deletes a unit group and all of its associated units. System unit groups cannot
   * be deleted.
   *
   * This endpoint requires the permission: `unit_groups:delete`.
   *
   * @example
   * ```ts
   * const unitGroup = await client.catalog.unitGroups.delete(
   *   'ug_01aad07abb8e41fd392d2d7013',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<UnitGroupDeleteResponse> {
    return this._client.delete(path`/v1/catalog/unit-groups/${id}`, options);
  }
}

/**
 * Request to create a unit group.
 */
export interface CreateUnitGroupRequest {
  /**
   * ID of the unit to designate as the group's reference unit.
   */
  base_unit_id: string;

  /**
   * Display name of the unit group.
   *
   * Must be unique within the account.
   */
  name: string;

  /**
   * Dimension shared by every unit in this group.
   *
   * All associated units must be of this dimension.
   */
  type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';

  /**
   * Associated units to create with the group.
   */
  associated_units?: Array<CreateUnitGroupUnitParam>;

  /**
   * Free-form notes about the unit group.
   */
  notes?: string;
}

/**
 * Parameters for associating a unit with a unit group.
 */
export interface CreateUnitGroupUnitParam {
  /**
   * ID of the unit to associate with the group.
   *
   * The unit's dimension must match the group's `type`.
   */
  unit_id: string;

  /**
   * Whether the unit is shown to customers in the customer portal.
   */
  customer_portal_visibility?: 'visible' | 'hidden';

  /**
   * Flat amount subtracted from the unit's price when an order is placed in this
   * unit.
   */
  discount_fixed?: number;

  /**
   * Percentage discount applied to the unit's price when an order is placed in this
   * unit (e.g. `10` is a 10% discount).
   */
  discount_percentage?: number;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListUnitGroup {
  /**
   * Resources in this page.
   */
  data: Array<UnitGroup>;

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
 * List represents a paginated list of resources.
 */
export interface ListUnitGroupUnit {
  /**
   * Resources in this page.
   */
  data: Array<UnitGroupUnit>;

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
 * Named collection of units sharing one dimension, defining which units products
 * can be ordered in along with per-unit discounts and customer portal visibility.
 */
export interface UnitGroup {
  /**
   * Unit group ID.
   */
  id: string;

  /**
   * List represents a paginated list of resources.
   */
  associated_units: ListUnitGroupUnit | null;

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  base_unit: UnitsAPI.Unit | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name of the unit group.
   *
   * Unique within the account.
   */
  name: string;

  /**
   * Free-form notes about the unit group.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'unit_group';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * Physical dimension shared by every unit in this group, such as mass, volume, or
   * currency.
   *
   * Only units of this dimension can belong to the group.
   */
  type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Membership of a unit in a unit group, carrying the discount and customer portal
 * visibility settings applied when ordering in that unit.
 */
export interface UnitGroupUnit {
  /**
   * Unit group unit ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Whether this unit is shown to customers in the customer portal.
   */
  customer_portal_visibility: 'visible' | 'hidden';

  /**
   * Flat amount subtracted from the unit's price when an order is placed in this
   * unit.
   */
  discount_fixed: number;

  /**
   * Percentage discount applied to the unit's price when an order is placed in this
   * unit (e.g. `10` is a 10% discount).
   */
  discount_percentage: number;

  /**
   * Resource type identifier.
   */
  object: 'unit_group_unit';

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  unit: UnitsAPI.Unit | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Request to partially update a unit group.
 */
export interface UpdateUnitGroupRequest {
  /**
   * Associated units to add or update in the group.
   *
   * Upserted by unit: a listed unit already in the group has its association
   * updated, otherwise it is added. Existing units not in the list are preserved.
   */
  associated_units?: Array<CreateUnitGroupUnitParam>;

  /**
   * ID of the group's base unit.
   */
  base_unit_id?: string;

  /**
   * Display name of the unit group.
   *
   * Must be unique within the account.
   */
  name?: string;

  /**
   * Free-form notes about the unit group.
   *
   * Set to `null` to clear.
   */
  notes?: string | null;
}

export interface UnitGroupDeleteResponse {}

export interface UnitGroupListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'base_unit' | 'associated_units'>;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;

  /**
   * Filter by unit dimension.
   */
  type?: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';
}

export interface UnitGroupRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'base_unit' | 'associated_units'>;
}

export interface UnitGroupCreateParams {
  /**
   * Body param: ID of the unit to designate as the group's reference unit.
   */
  base_unit_id: string;

  /**
   * Body param: Display name of the unit group.
   *
   * Must be unique within the account.
   */
  name: string;

  /**
   * Body param: Dimension shared by every unit in this group.
   *
   * All associated units must be of this dimension.
   */
  type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'base_unit' | 'associated_units'>;

  /**
   * Body param: Associated units to create with the group.
   */
  associated_units?: Array<CreateUnitGroupUnitParam>;

  /**
   * Body param: Free-form notes about the unit group.
   */
  notes?: string;
}

export interface UnitGroupUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'base_unit' | 'associated_units'>;

  /**
   * Body param: Associated units to add or update in the group.
   *
   * Upserted by unit: a listed unit already in the group has its association
   * updated, otherwise it is added. Existing units not in the list are preserved.
   */
  associated_units?: Array<CreateUnitGroupUnitParam>;

  /**
   * Body param: ID of the group's base unit.
   */
  base_unit_id?: string;

  /**
   * Body param: Display name of the unit group.
   *
   * Must be unique within the account.
   */
  name?: string;

  /**
   * Body param: Free-form notes about the unit group.
   *
   * Set to `null` to clear.
   */
  notes?: string | null;
}

UnitGroups.Units = Units;

export declare namespace UnitGroups {
  export {
    type CreateUnitGroupRequest as CreateUnitGroupRequest,
    type CreateUnitGroupUnitParam as CreateUnitGroupUnitParam,
    type ListUnitGroup as ListUnitGroup,
    type ListUnitGroupUnit as ListUnitGroupUnit,
    type UnitGroup as UnitGroup,
    type UnitGroupUnit as UnitGroupUnit,
    type UpdateUnitGroupRequest as UpdateUnitGroupRequest,
    type UnitGroupDeleteResponse as UnitGroupDeleteResponse,
    type UnitGroupListParams as UnitGroupListParams,
    type UnitGroupRetrieveParams as UnitGroupRetrieveParams,
    type UnitGroupCreateParams as UnitGroupCreateParams,
    type UnitGroupUpdateParams as UnitGroupUpdateParams,
  };

  export {
    Units as Units,
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
