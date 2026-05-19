// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage carrier options (shipping service levels).
 */
export class Options extends APIResource {
  /**
   * This endpoint creates a new carrier option (shipping service level) for a
   * carrier.
   *
   * @example
   * ```ts
   * const carrierOption =
   *   await client.core.carriers.options.create('carrier_id', {
   *     code: 'ground',
   *     is_default: false,
   *     is_portal_enabled: true,
   *     name: 'Ground Shipping',
   *     service_level_token: null,
   *   });
   * ```
   */
  create(carrierID: string, body: OptionCreateParams, options?: RequestOptions): APIPromise<CarrierOption> {
    return this._client.post(path`/v1/core/carriers/${carrierID}/options`, { body, ...options });
  }

  /**
   * This endpoint returns a single carrier option by its ID.
   *
   * @example
   * ```ts
   * const carrierOption =
   *   await client.core.carriers.options.retrieve('id', {
   *     carrier_id: 'carrier_id',
   *   });
   * ```
   */
  retrieve(id: string, params: OptionRetrieveParams, options?: RequestOptions): APIPromise<CarrierOption> {
    const { carrier_id } = params;
    return this._client.get(path`/v1/core/carriers/${carrier_id}/options/${id}`, options);
  }

  /**
   * This endpoint partially updates a carrier option's name, code, and portal
   * visibility.
   *
   * @example
   * ```ts
   * const carrierOption =
   *   await client.core.carriers.options.update('id', {
   *     carrier_id: 'carrier_id',
   *     code: null,
   *     is_default: null,
   *     is_portal_enabled: null,
   *     name: 'Express Shipping',
   *   });
   * ```
   */
  update(id: string, params: OptionUpdateParams, options?: RequestOptions): APIPromise<CarrierOption> {
    const { carrier_id, ...body } = params;
    return this._client.patch(path`/v1/core/carriers/${carrier_id}/options/${id}`, { body, ...options });
  }

  /**
   * This endpoint returns a paginated list of carrier options (shipping service
   * levels) for a carrier.
   *
   * @example
   * ```ts
   * const options = await client.core.carriers.options.list(
   *   'carrier_id',
   * );
   * ```
   */
  list(carrierID: string, options?: RequestOptions): APIPromise<OptionListResponse> {
    return this._client.get(path`/v1/core/carriers/${carrierID}/options`, options);
  }

  /**
   * This endpoint permanently deletes a carrier option. Default (system-synced)
   * options cannot be deleted.
   *
   * @example
   * ```ts
   * const option = await client.core.carriers.options.delete(
   *   'id',
   *   { carrier_id: 'carrier_id' },
   * );
   * ```
   */
  delete(id: string, params: OptionDeleteParams, options?: RequestOptions): APIPromise<OptionDeleteResponse> {
    const { carrier_id } = params;
    return this._client.delete(path`/v1/core/carriers/${carrier_id}/options/${id}`, options);
  }
}

/**
 * CarrierOption represents a shipping service level for a carrier.
 */
export interface CarrierOption {
  /**
   * The unique identifier for the carrier option.
   */
  id: string;

  /**
   * The carrier option code.
   */
  code: string;

  /**
   * When the carrier option was created.
   */
  created_at: string;

  /**
   * Whether this is a default (system-synced) option.
   */
  is_default: boolean;

  /**
   * Whether this option is enabled for the customer portal.
   */
  is_portal_enabled: boolean;

  /**
   * The display name of the carrier option.
   */
  name: string;

  /**
   * The resource type identifier.
   */
  object: 'carrier_option';

  /**
   * The Shippo service level token, if this option maps to a Shippo service level.
   */
  service_level_token: string | null;

  /**
   * When the carrier option was last updated.
   */
  updated_at: string;
}

/**
 * A paginated list of CarrierOption resources
 */
export interface OptionListResponse {
  /**
   * Array of CarrierOption resources in this page
   */
  data: Array<CarrierOption>;

  /**
   * Object type for CarrierOption list
   */
  object: 'list';

  /**
   * PageInfo contains cursor-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface OptionDeleteResponse {}

export interface OptionCreateParams {
  /**
   * The carrier option code.
   */
  code: string;

  /**
   * Whether this is a default (system-synced) option.
   */
  is_default: boolean;

  /**
   * Whether this option is enabled for the customer portal.
   */
  is_portal_enabled: boolean;

  /**
   * The display name of the carrier option.
   */
  name: string;

  /**
   * The Shippo service level token, if this option maps to a Shippo service level.
   */
  service_level_token: string | null;
}

export interface OptionRetrieveParams {
  /**
   * The ID of the carrier.
   */
  carrier_id: string;
}

export interface OptionUpdateParams {
  /**
   * Path param: The ID of the carrier.
   */
  carrier_id: string;

  /**
   * Body param: The new carrier option code.
   */
  code: string | null;

  /**
   * Body param: Whether this is a default (system-synced) option.
   */
  is_default: boolean | null;

  /**
   * Body param: Whether this option is enabled for the customer portal.
   */
  is_portal_enabled: boolean | null;

  /**
   * Body param: The new display name for the carrier option.
   */
  name: string | null;
}

export interface OptionDeleteParams {
  /**
   * The ID of the carrier.
   */
  carrier_id: string;
}

export declare namespace Options {
  export {
    type CarrierOption as CarrierOption,
    type OptionListResponse as OptionListResponse,
    type OptionDeleteResponse as OptionDeleteResponse,
    type OptionCreateParams as OptionCreateParams,
    type OptionRetrieveParams as OptionRetrieveParams,
    type OptionUpdateParams as OptionUpdateParams,
    type OptionDeleteParams as OptionDeleteParams,
  };
}
