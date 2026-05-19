// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as ActionsAPI from './actions';
import { ActionInitiateOAuthParams, ActionInitiateOAuthResponse, Actions } from './actions';
import * as OptionsAPI from './options';
import {
  CarrierOption,
  OptionCreateParams,
  OptionDeleteParams,
  OptionDeleteResponse,
  OptionListResponse,
  OptionRetrieveParams,
  OptionUpdateParams,
  Options,
} from './options';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage carriers and their Shippo integrations.
 */
export class Carriers extends APIResource {
  options: OptionsAPI.Options = new OptionsAPI.Options(this._client);
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * This endpoint creates a new carrier. If a Shippo-supported carrier code is
   * provided, the carrier will be registered with Shippo and service levels will be
   * auto-synced as options.
   *
   * @example
   * ```ts
   * const carrier = await client.core.carriers.create({
   *   account_number: null,
   *   code: 'fedex',
   *   is_portal_enabled: true,
   *   name: 'FedEx',
   * });
   * ```
   */
  create(body: CarrierCreateParams, options?: RequestOptions): APIPromise<Carrier> {
    return this._client.post('/v1/core/carriers', { body, ...options });
  }

  /**
   * This endpoint returns a single carrier by its ID.
   *
   * @example
   * ```ts
   * const carrier = await client.core.carriers.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: CarrierRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Carrier> {
    return this._client.get(path`/v1/core/carriers/${id}`, { query, ...options });
  }

  /**
   * This endpoint partially updates a carrier's name and portal visibility.
   *
   * @example
   * ```ts
   * const carrier = await client.core.carriers.update('id', {
   *   is_portal_enabled: null,
   *   name: 'FedEx Express',
   * });
   * ```
   */
  update(id: string, body: CarrierUpdateParams, options?: RequestOptions): APIPromise<Carrier> {
    return this._client.patch(path`/v1/core/carriers/${id}`, { body, ...options });
  }

  /**
   * This endpoint returns a paginated list of carriers for the target account.
   * Supports cursor-based pagination and search by name.
   *
   * @example
   * ```ts
   * const carriers = await client.core.carriers.list();
   * ```
   */
  list(
    query: CarrierListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CarrierListResponse> {
    return this._client.get('/v1/core/carriers', { query, ...options });
  }

  /**
   * This endpoint soft-deletes a carrier and cascades to remove all its options. If
   * the carrier is managed by Shippo, the Shippo account is deactivated.
   *
   * @example
   * ```ts
   * const carrier = await client.core.carriers.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<CarrierDeleteResponse> {
    return this._client.delete(path`/v1/core/carriers/${id}`, options);
  }

  /**
   * This endpoint returns the OAuth connection status for a carrier. Returns
   * "connected" or "disconnected". Sandbox accounts always return "disconnected".
   *
   * @example
   * ```ts
   * const response = await client.core.carriers.getOAuthStatus(
   *   'id',
   * );
   * ```
   */
  getOAuthStatus(id: string, options?: RequestOptions): APIPromise<CarrierGetOAuthStatusResponse> {
    return this._client.get(path`/v1/core/carriers/${id}/oauth-status`, options);
  }
}

/**
 * Carrier represents a shipping carrier configured for the account.
 */
export interface Carrier {
  /**
   * The unique identifier for the carrier.
   */
  id: string;

  /**
   * The carrier account number, if applicable.
   */
  account_number: string | null;

  /**
   * The carrier code (e.g. "fedex", "ups", "usps").
   */
  code: string | null;

  /**
   * When the carrier was created.
   */
  created_at: string;

  /**
   * When the carrier was soft-deleted, if applicable.
   */
  deleted_at: string | null;

  /**
   * Whether this is a system-default carrier (not account-specific).
   */
  is_default: boolean;

  /**
   * Whether this carrier is enabled for the customer portal.
   */
  is_portal_enabled: boolean;

  /**
   * The display name of the carrier.
   */
  name: string;

  /**
   * The resource type identifier.
   */
  object: 'carrier';

  /**
   * The carrier options (shipping service levels). Expandable.
   */
  options: Array<OptionsAPI.CarrierOption>;

  /**
   * The Shippo carrier account object ID, if this carrier is managed via Shippo.
   */
  shippo_carrier_account_id: string | null;

  /**
   * When the carrier was last updated.
   */
  updated_at: string;
}

/**
 * A paginated list of Carrier resources
 */
export interface CarrierListResponse {
  /**
   * Array of Carrier resources in this page
   */
  data: Array<Carrier>;

  /**
   * Object type for Carrier list
   */
  object: 'list';

  /**
   * PageInfo contains cursor-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface CarrierDeleteResponse {}

/**
 * OAuthStatusResponse represents the OAuth connection status for a carrier.
 */
export interface CarrierGetOAuthStatusResponse {
  /**
   * The OAuth connection status ("connected" or "disconnected").
   */
  status: string;
}

export interface CarrierCreateParams {
  /**
   * The carrier account number, required for UPS and USPS carriers.
   */
  account_number: string | null;

  /**
   * The carrier code (e.g. "fedex", "ups", "usps"). If a Shippo-supported code is
   * provided, the carrier will be integrated with Shippo.
   */
  code: string | null;

  /**
   * Whether this carrier is enabled for the customer portal.
   */
  is_portal_enabled: boolean;

  /**
   * The display name of the carrier.
   */
  name: string;
}

export interface CarrierRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'options'>;
}

export interface CarrierUpdateParams {
  /**
   * Whether this carrier is enabled for the customer portal.
   */
  is_portal_enabled: boolean | null;

  /**
   * The new display name for the carrier.
   */
  name: string | null;
}

export interface CarrierListParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'options'>;
}

Carriers.Options = Options;
Carriers.Actions = Actions;

export declare namespace Carriers {
  export {
    type Carrier as Carrier,
    type CarrierListResponse as CarrierListResponse,
    type CarrierDeleteResponse as CarrierDeleteResponse,
    type CarrierGetOAuthStatusResponse as CarrierGetOAuthStatusResponse,
    type CarrierCreateParams as CarrierCreateParams,
    type CarrierRetrieveParams as CarrierRetrieveParams,
    type CarrierUpdateParams as CarrierUpdateParams,
    type CarrierListParams as CarrierListParams,
  };

  export {
    Options as Options,
    type CarrierOption as CarrierOption,
    type OptionListResponse as OptionListResponse,
    type OptionDeleteResponse as OptionDeleteResponse,
    type OptionCreateParams as OptionCreateParams,
    type OptionRetrieveParams as OptionRetrieveParams,
    type OptionUpdateParams as OptionUpdateParams,
    type OptionDeleteParams as OptionDeleteParams,
  };

  export {
    Actions as Actions,
    type ActionInitiateOAuthResponse as ActionInitiateOAuthResponse,
    type ActionInitiateOAuthParams as ActionInitiateOAuthParams,
  };
}
