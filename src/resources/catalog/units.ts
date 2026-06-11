// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage units.
 */
export class Units extends APIResource {
  /**
   * Returns a paginated list of units for the current account, including both
   * account-owned and global system units.
   *
   * @example
   * ```ts
   * const listUnit = await client.catalog.units.list();
   * ```
   */
  list(query: UnitListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListUnit> {
    return this._client.get('/v1/catalog/units', { query, ...options });
  }

  /**
   * Returns a unit by ID, including both account-owned and global system units.
   *
   * @example
   * ```ts
   * const unit = await client.catalog.units.retrieve(
   *   'un_01966263f74a5a0cae356000a1',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: UnitRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Unit> {
    return this._client.get(path`/v1/catalog/units/${id}`, { query, ...options });
  }

  /**
   * Creates an account-owned unit.
   *
   * @example
   * ```ts
   * const unit = await client.catalog.units.create({
   *   abbreviation: 'g',
   *   name: 'Gram',
   *   offset_denominator: '1',
   *   offset_numerator: '0',
   *   ratio_denominator: '1',
   *   ratio_numerator: '1',
   *   type: 'mass',
   * });
   * ```
   */
  create(params: UnitCreateParams, options?: RequestOptions): APIPromise<Unit> {
    const { include, ...body } = params;
    return this._client.post('/v1/catalog/units', { query: { include }, body, ...options });
  }

  /**
   * Partially updates an account-owned unit; system units cannot be updated.
   *
   * @example
   * ```ts
   * const unit = await client.catalog.units.update(
   *   'un_01966263f74a5a0cae356000a1',
   *   { abbreviation: 'kg', name: 'Kilogram' },
   * );
   * ```
   */
  update(
    id: string,
    params: UnitUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Unit> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/catalog/units/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Deletes an account-owned unit. Associated unit group memberships are also
   * removed, and system units cannot be deleted.
   *
   * @example
   * ```ts
   * const unit = await client.catalog.units.delete(
   *   'un_01966263f74a5a0cae356000a1',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<UnitDeleteResponse> {
    return this._client.delete(path`/v1/catalog/units/${id}`, options);
  }
}

/**
 * Request to create a unit.
 */
export interface CreateUnitRequest {
  /**
   * Short abbreviation for the unit (e.g. "g").
   */
  abbreviation: string;

  /**
   * Display name of the unit (e.g. "Gram").
   */
  name: string;

  /**
   * Conversion offset denominator, as a decimal string. Must not be zero.
   */
  offset_denominator: string;

  /**
   * Conversion offset numerator, as a decimal string.
   */
  offset_numerator: string;

  /**
   * Conversion ratio denominator relative to the base unit, as a decimal string.
   * Must not be zero.
   */
  ratio_denominator: string;

  /**
   * Conversion ratio numerator relative to the base unit, as a decimal string.
   */
  ratio_numerator: string;

  /**
   * Unit dimension code.
   */
  type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';
}

/**
 * List represents a paginated list of resources.
 */
export interface ListUnit {
  /**
   * Resources in this page.
   */
  data: Array<Unit>;

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
 * Unit of measurement used for conversions and product quantities.
 */
export interface Unit {
  /**
   * Unit ID.
   */
  id: string;

  /**
   * Short abbreviation for the unit (e.g. "g", "kg").
   */
  abbreviation: string;

  /**
   * When this unit was created.
   */
  created_at: string;

  /**
   * Whether this is the base unit for its dimension.
   *
   * Conversion ratios are relative to this unit.
   */
  is_base_unit: boolean;

  /**
   * Display name of the unit (e.g. "Gram", "Kilogram").
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'unit';

  /**
   * Conversion offset denominator.
   *
   * Typically 1. Cannot be zero.
   */
  offset_denominator: string;

  /**
   * Conversion offset numerator, used for temperature-like conversions.
   *
   * Zero for most unit types.
   */
  offset_numerator: string;

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * Conversion ratio denominator relative to the base unit in the same dimension.
   *
   * Cannot be zero.
   */
  ratio_denominator: string;

  /**
   * Conversion ratio numerator relative to the base unit in the same dimension.
   */
  ratio_numerator: string;

  /**
   * Unit dimension.
   *
   * Units can only be converted to other units sharing the same dimension.
   *
   * - `currency`: monetary units such as dollars or euros.
   * - `quantity`: discrete countable units.
   * - `time`: time-based units such as hours or minutes.
   * - `mass`: weight-based units such as kilograms or pounds.
   * - `volume`: volumetric units such as liters or gallons.
   * - `length`: distance-based units such as meters or feet.
   * - `temperature`: temperature units such as Celsius or Fahrenheit.
   * - `area`: area-based units such as square meters or acres.
   */
  type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';

  /**
   * When this unit was last updated.
   */
  updated_at: string;
}

/**
 * Request to partially update a unit.
 */
export interface UpdateUnitRequest {
  /**
   * Short abbreviation for the unit.
   */
  abbreviation?: string;

  /**
   * Display name of the unit.
   */
  name?: string;

  /**
   * Conversion offset denominator, as a decimal string. Must not be zero.
   */
  offset_denominator?: string;

  /**
   * Conversion offset numerator, as a decimal string.
   */
  offset_numerator?: string;

  /**
   * Conversion ratio denominator, as a decimal string. Must not be zero.
   */
  ratio_denominator?: string;

  /**
   * Conversion ratio numerator, as a decimal string.
   */
  ratio_numerator?: string;
}

export interface UnitDeleteResponse {}

export interface UnitListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner' | 'owner.account'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Filter by unit dimension code.
   */
  type?: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';

  /**
   * Filter by unit group membership.
   */
  unit_group_ids?: Array<string>;
}

export interface UnitRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner' | 'owner.account'>;
}

export interface UnitCreateParams {
  /**
   * Body param: Short abbreviation for the unit (e.g. "g").
   */
  abbreviation: string;

  /**
   * Body param: Display name of the unit (e.g. "Gram").
   */
  name: string;

  /**
   * Body param: Conversion offset denominator, as a decimal string. Must not be
   * zero.
   */
  offset_denominator: string;

  /**
   * Body param: Conversion offset numerator, as a decimal string.
   */
  offset_numerator: string;

  /**
   * Body param: Conversion ratio denominator relative to the base unit, as a decimal
   * string. Must not be zero.
   */
  ratio_denominator: string;

  /**
   * Body param: Conversion ratio numerator relative to the base unit, as a decimal
   * string.
   */
  ratio_numerator: string;

  /**
   * Body param: Unit dimension code.
   */
  type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account'>;
}

export interface UnitUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account'>;

  /**
   * Body param: Short abbreviation for the unit.
   */
  abbreviation?: string;

  /**
   * Body param: Display name of the unit.
   */
  name?: string;

  /**
   * Body param: Conversion offset denominator, as a decimal string. Must not be
   * zero.
   */
  offset_denominator?: string;

  /**
   * Body param: Conversion offset numerator, as a decimal string.
   */
  offset_numerator?: string;

  /**
   * Body param: Conversion ratio denominator, as a decimal string. Must not be zero.
   */
  ratio_denominator?: string;

  /**
   * Body param: Conversion ratio numerator, as a decimal string.
   */
  ratio_numerator?: string;
}

export declare namespace Units {
  export {
    type CreateUnitRequest as CreateUnitRequest,
    type ListUnit as ListUnit,
    type Unit as Unit,
    type UpdateUnitRequest as UpdateUnitRequest,
    type UnitDeleteResponse as UnitDeleteResponse,
    type UnitListParams as UnitListParams,
    type UnitRetrieveParams as UnitRetrieveParams,
    type UnitCreateParams as UnitCreateParams,
    type UnitUpdateParams as UnitUpdateParams,
  };
}
