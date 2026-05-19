// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import * as SalesTargetsAPI from './account-users/sales-targets';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage shipping terms.
 */
export class ShippingTerms extends APIResource {
  /**
   * This endpoint creates a new account-owned shipping term.
   *
   * @example
   * ```ts
   * const shippingTerm = await client.core.shippingTerms.create(
   *   {
   *     free_shipping_carrier_option_ids: ['string'],
   *     name: 'Prepaid',
   *     type: 'carrier_rate_freight',
   *   },
   * );
   * ```
   */
  create(params: ShippingTermCreateParams, options?: RequestOptions): APIPromise<ShippingTerm> {
    const { include, ...body } = params;
    return this._client.post('/v1/core/shipping-terms', { query: { include }, body, ...options });
  }

  /**
   * This endpoint returns a single shipping term by its ID. The shipping term must
   * belong to the requesting account or be a default (global) shipping term.
   *
   * @example
   * ```ts
   * const shippingTerm =
   *   await client.core.shippingTerms.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: ShippingTermRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ShippingTerm> {
    return this._client.get(path`/v1/core/shipping-terms/${id}`, { query, ...options });
  }

  /**
   * This endpoint partially updates an account-owned shipping term. Only provided
   * fields are updated; absent fields retain their current values. Default shipping
   * terms cannot be updated.
   *
   * @example
   * ```ts
   * const shippingTerm = await client.core.shippingTerms.update(
   *   'id',
   *   {
   *     free_shipping_carrier_option_ids: ['string'],
   *     name: 'Collect',
   *   },
   * );
   * ```
   */
  update(id: string, params: ShippingTermUpdateParams, options?: RequestOptions): APIPromise<ShippingTerm> {
    const { include, ...body } = params;
    return this._client.patch(path`/v1/core/shipping-terms/${id}`, { query: { include }, body, ...options });
  }

  /**
   * This endpoint returns a paginated list of shipping terms for the target account,
   * including both account-specific and default system shipping terms. Supports
   * cursor-based pagination and search by name.
   *
   * @example
   * ```ts
   * const shippingTerms =
   *   await client.core.shippingTerms.list();
   * ```
   */
  list(
    query: ShippingTermListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ShippingTermListResponse> {
    return this._client.get('/v1/core/shipping-terms', { query, ...options });
  }

  /**
   * This endpoint deletes an account-owned shipping term. Associated free shipping
   * rules and quantity records are also removed. Default shipping terms cannot be
   * deleted.
   *
   * @example
   * ```ts
   * const shippingTerm = await client.core.shippingTerms.delete(
   *   'id',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ShippingTermDeleteResponse> {
    return this._client.delete(path`/v1/core/shipping-terms/${id}`, options);
  }
}

/**
 * QuantityInputRequest represents a quantity value and unit pair.
 */
export interface QuantityInputRequest {
  /**
   * The unit ID for the value.
   */
  unit_id: string;

  /**
   * The decimal value.
   */
  value: string;
}

/**
 * ShippingTerm represents a shipping term configuration.
 */
export interface ShippingTerm {
  /**
   * The unique identifier for the shipping term.
   */
  id: string;

  /**
   * When this shipping term was created.
   */
  created_at: string;

  /**
   * Quantity represents a value with an associated unit.
   */
  flat_rate: SalesTargetsAPI.Quantity | null;

  /**
   * The carrier option IDs that qualify for free shipping under this term.
   */
  free_shipping_carrier_option_ids: Array<string>;

  /**
   * Quantity represents a value with an associated unit.
   */
  minimum_order_value: SalesTargetsAPI.Quantity | null;

  /**
   * The display name of the shipping term.
   */
  name: string;

  /**
   * The resource type identifier.
   */
  object: 'shipping_term';

  /**
   * The shipping term type: "free_freight", "flat_rate_freight", or
   * "carrier_rate_freight".
   */
  type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight';

  /**
   * When this shipping term was last updated.
   */
  updated_at: string;
}

/**
 * A paginated list of ShippingTerm resources
 */
export interface ShippingTermListResponse {
  /**
   * Array of ShippingTerm resources in this page
   */
  data: Array<ShippingTerm>;

  /**
   * Object type for ShippingTerm list
   */
  object: 'list';

  /**
   * PageInfo contains cursor-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface ShippingTermDeleteResponse {}

export interface ShippingTermCreateParams {
  /**
   * Body param: The carrier option IDs that qualify for free shipping.
   */
  free_shipping_carrier_option_ids: Array<string>;

  /**
   * Body param: The display name of the shipping term.
   */
  name: string;

  /**
   * Body param: The shipping term type.
   */
  type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight';

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'flat_rate.unit' | 'minimum_order_value.unit'>;

  /**
   * Body param: QuantityInputRequest represents a quantity value and unit pair.
   */
  flat_rate?: QuantityInputRequest | null;

  /**
   * Body param: QuantityInputRequest represents a quantity value and unit pair.
   */
  minimum_order_value?: QuantityInputRequest | null;
}

export interface ShippingTermRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'flat_rate.unit' | 'minimum_order_value.unit'>;
}

export interface ShippingTermUpdateParams {
  /**
   * Body param: The carrier option IDs that qualify for free shipping.
   */
  free_shipping_carrier_option_ids: Array<string>;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'flat_rate.unit' | 'minimum_order_value.unit'>;

  /**
   * Body param: QuantityInputRequest represents a quantity value and unit pair.
   */
  flat_rate?: QuantityInputRequest | null;

  /**
   * Body param: QuantityInputRequest represents a quantity value and unit pair.
   */
  minimum_order_value?: QuantityInputRequest | null;

  /**
   * Body param: The display name of the shipping term.
   */
  name?: string | null;

  /**
   * Body param: The shipping term type.
   */
  type?: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight' | null;
}

export interface ShippingTermListParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'flat_rate.unit' | 'minimum_order_value.unit'>;
}

export declare namespace ShippingTerms {
  export {
    type QuantityInputRequest as QuantityInputRequest,
    type ShippingTerm as ShippingTerm,
    type ShippingTermListResponse as ShippingTermListResponse,
    type ShippingTermDeleteResponse as ShippingTermDeleteResponse,
    type ShippingTermCreateParams as ShippingTermCreateParams,
    type ShippingTermRetrieveParams as ShippingTermRetrieveParams,
    type ShippingTermUpdateParams as ShippingTermUpdateParams,
    type ShippingTermListParams as ShippingTermListParams,
  };
}
