// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage units.
 */
export class Units extends APIResource {
  /**
   * This endpoint creates a new account-owned unit.
   *
   * @example
   * ```ts
   * const unit = await client.core.units.create({
   *   abbreviation: 'g',
   *   is_base_unit: true,
   *   name: 'Gram',
   *   offset_denominator: '1.000000000000000000000000000000',
   *   offset_numerator: '0.000000000000000000000000000000',
   *   ratio_denominator: '1.000000000000000000000000000000',
   *   ratio_numerator: '1.000000000000000000000000000000',
   *   type: 'mass',
   * });
   * ```
   */
  create(body: UnitCreateParams, options?: RequestOptions): APIPromise<Unit> {
    return this._client.post('/v1/core/units', { body, ...options });
  }

  /**
   * This endpoint returns a single unit by its ID. The unit must belong to the
   * requesting account or be a system (global) unit.
   *
   * @example
   * ```ts
   * const unit = await client.core.units.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Unit> {
    return this._client.get(path`/v1/core/units/${id}`, options);
  }

  /**
   * This endpoint partially updates an account-owned unit. Only provided fields are
   * updated; absent fields retain their current values. System units cannot be
   * updated.
   *
   * @example
   * ```ts
   * const unit = await client.core.units.update('id', {
   *   abbreviation: 'kg',
   *   name: 'Kilogram',
   * });
   * ```
   */
  update(
    id: string,
    body: UnitUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Unit> {
    return this._client.patch(path`/v1/core/units/${id}`, { body, ...options });
  }

  /**
   * This endpoint returns a paginated list of units for the target account,
   * including both account-specific and global system units. Supports cursor-based
   * pagination, filtering by dimension type and unit group membership, and search by
   * name or abbreviation.
   *
   * @example
   * ```ts
   * const units = await client.core.units.list();
   * ```
   */
  list(
    query: UnitListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UnitListResponse> {
    return this._client.get('/v1/core/units', { query, ...options });
  }

  /**
   * This endpoint deletes an account-owned unit. Associated unit group memberships
   * are also removed. System units cannot be deleted.
   *
   * @example
   * ```ts
   * const unit = await client.core.units.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<UnitDeleteResponse> {
    return this._client.delete(path`/v1/core/units/${id}`, options);
  }
}

/**
 * Unit represents a unit of measurement used for conversions and product
 * quantities.
 */
export interface Unit {
  /**
   * The unique identifier for the unit.
   */
  id: string;

  /**
   * The short abbreviation for the unit (e.g. "g", "kg").
   */
  abbreviation: string;

  /**
   * When this unit was created.
   */
  created_at: string;

  /**
   * Whether this unit is the base unit for its dimension. Conversion ratios are
   * relative to this unit.
   */
  is_base_unit: boolean;

  /**
   * Whether this unit belongs to the requesting account. False for system/global
   * units.
   */
  is_internal: boolean;

  /**
   * The display name of the unit (e.g. "Gram", "Kilogram").
   */
  name: string;

  /**
   * The resource type identifier.
   */
  object: 'unit';

  /**
   * The conversion offset denominator. Typically 1.
   */
  offset_denominator: string;

  /**
   * The conversion offset numerator, used for temperature-like conversions. Zero for
   * most unit types.
   */
  offset_numerator: string;

  /**
   * The conversion ratio denominator relative to the base unit in the same
   * dimension.
   */
  ratio_denominator: string;

  /**
   * The conversion ratio numerator relative to the base unit in the same dimension.
   */
  ratio_numerator: string;

  /**
   * The unit dimension.
   */
  type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';

  /**
   * When this unit was last updated.
   */
  updated_at: string;
}

/**
 * A paginated list of Unit resources
 */
export interface UnitListResponse {
  /**
   * Array of Unit resources in this page
   */
  data: Array<Unit>;

  /**
   * Object type for Unit list
   */
  object: 'list';

  /**
   * PageInfo contains cursor-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface UnitDeleteResponse {}

export interface UnitCreateParams {
  /**
   * The short abbreviation for the unit (e.g. "g").
   */
  abbreviation: string;

  /**
   * Whether this unit is the base unit for its dimension.
   */
  is_base_unit: boolean;

  /**
   * The display name of the unit (e.g. "Gram").
   */
  name: string;

  /**
   * The conversion offset denominator, as a decimal string.
   */
  offset_denominator: string;

  /**
   * The conversion offset numerator, as a decimal string.
   */
  offset_numerator: string;

  /**
   * The conversion ratio denominator relative to the base unit, as a decimal string.
   */
  ratio_denominator: string;

  /**
   * The conversion ratio numerator relative to the base unit, as a decimal string.
   */
  ratio_numerator: string;

  /**
   * The unit dimension code.
   */
  type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';
}

export interface UnitUpdateParams {
  /**
   * The short abbreviation for the unit.
   */
  abbreviation?: string | null;

  /**
   * The display name of the unit.
   */
  name?: string | null;

  /**
   * The conversion offset denominator, as a decimal string.
   */
  offset_denominator?: string | null;

  /**
   * The conversion offset numerator, as a decimal string.
   */
  offset_numerator?: string | null;

  /**
   * The conversion ratio denominator, as a decimal string.
   */
  ratio_denominator?: string | null;

  /**
   * The conversion ratio numerator, as a decimal string.
   */
  ratio_numerator?: string | null;
}

export interface UnitListParams {
  /**
   * Filter by unit dimension code (e.g. "mass", "quantity").
   */
  type?: string;

  /**
   * Filter by unit group membership.
   */
  unit_group_ids?: Array<string>;
}

export declare namespace Units {
  export {
    type Unit as Unit,
    type UnitListResponse as UnitListResponse,
    type UnitDeleteResponse as UnitDeleteResponse,
    type UnitCreateParams as UnitCreateParams,
    type UnitUpdateParams as UnitUpdateParams,
    type UnitListParams as UnitListParams,
  };
}
