// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage addresses for accounts.
 */
export class Addresses extends APIResource {
  /**
   * This endpoint creates a new address for the specified account.
   *
   * @example
   * ```ts
   * const address = await client.core.accounts.addresses.create(
   *   'account_id',
   *   {
   *     country: 'US',
   *     is_drop_ship: false,
   *     name: 'Headquarters',
   *     locality: 'Springfield',
   *     postal_code: '62701',
   *     state: 'IL',
   *     street_line_1: '123 Main St',
   *   },
   * );
   * ```
   */
  create(accountID: string, body: AddressCreateParams, options?: RequestOptions): APIPromise<Address> {
    return this._client.post(path`/v1/core/accounts/${accountID}/addresses`, { body, ...options });
  }

  /**
   * This endpoint returns a single address by its ID. The address must belong to the
   * specified account.
   *
   * @example
   * ```ts
   * const address =
   *   await client.core.accounts.addresses.retrieve('id', {
   *     account_id: 'account_id',
   *   });
   * ```
   */
  retrieve(id: string, params: AddressRetrieveParams, options?: RequestOptions): APIPromise<Address> {
    const { account_id } = params;
    return this._client.get(path`/v1/core/accounts/${account_id}/addresses/${id}`, options);
  }

  /**
   * This endpoint partially updates an address. Only provided fields are updated;
   * absent fields retain their current values.
   *
   * @example
   * ```ts
   * const address = await client.core.accounts.addresses.update(
   *   'id',
   *   { account_id: 'account_id', name: 'Warehouse' },
   * );
   * ```
   */
  update(id: string, params: AddressUpdateParams, options?: RequestOptions): APIPromise<Address> {
    const { account_id, ...body } = params;
    return this._client.patch(path`/v1/core/accounts/${account_id}/addresses/${id}`, { body, ...options });
  }

  /**
   * This endpoint returns a paginated list of addresses for the specified account.
   * Supports cursor-based pagination and search by name, street, city, state, postal
   * code, or country.
   *
   * @example
   * ```ts
   * const addresses = await client.core.accounts.addresses.list(
   *   'account_id',
   * );
   * ```
   */
  list(accountID: string, options?: RequestOptions): APIPromise<AddressListResponse> {
    return this._client.get(path`/v1/core/accounts/${accountID}/addresses`, options);
  }

  /**
   * This endpoint deletes an address from the specified account. An address cannot
   * be deleted if it is in use as a billing or shipping address on a sales order,
   * invoice, shipment, or as a default address on an account.
   *
   * @example
   * ```ts
   * const address = await client.core.accounts.addresses.delete(
   *   'id',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  delete(
    id: string,
    params: AddressDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AddressDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(path`/v1/core/accounts/${account_id}/addresses/${id}`, options);
  }
}

/**
 * Address represents an address with its associated geolocation.
 */
export interface Address {
  /**
   * The unique identifier for the address.
   */
  id: string;

  /**
   * When this address was created.
   */
  created_at: string;

  /**
   * The email address associated with this address.
   */
  email: string | null;

  /**
   * LightGeolocation represents a geolocation sub-resource within an address.
   */
  geolocation: Address.Geolocation | null;

  /**
   * Whether this is a drop ship address.
   */
  is_drop_ship: boolean;

  /**
   * The display name of the address.
   */
  name: string;

  /**
   * The resource type identifier.
   */
  object: 'address';

  /**
   * The phone number associated with this address.
   */
  phone: string | null;

  /**
   * When this address was last updated.
   */
  updated_at: string;
}

export namespace Address {
  /**
   * LightGeolocation represents a geolocation sub-resource within an address.
   */
  export interface Geolocation {
    /**
     * The unique identifier for the geolocation.
     */
    id: string;

    /**
     * The two-letter country code.
     */
    country: string;

    /**
     * The city or locality.
     */
    locality: string | null;

    /**
     * The resource type identifier.
     */
    object: 'geolocation';

    /**
     * The postal or zip code.
     */
    postal_code: string | null;

    /**
     * The state or administrative area.
     */
    state: string | null;

    /**
     * The first line of the street address.
     */
    street_line_1: string | null;

    /**
     * The second line of the street address.
     */
    street_line_2: string | null;
  }
}

/**
 * A paginated list of Address resources
 */
export interface AddressListResponse {
  /**
   * Array of Address resources in this page
   */
  data: Array<Address>;

  /**
   * Object type for Address list
   */
  object: 'list';

  /**
   * PageInfo contains cursor-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface AddressDeleteResponse {}

export interface AddressCreateParams {
  /**
   * The two-letter country code.
   */
  country: string;

  /**
   * Whether this is a drop ship address.
   */
  is_drop_ship: boolean;

  /**
   * The display name of the address.
   */
  name: string;

  /**
   * The email address associated with this address.
   */
  email?: string | null;

  /**
   * The city or locality.
   */
  locality?: string | null;

  /**
   * The phone number associated with this address.
   */
  phone?: string | null;

  /**
   * The postal or zip code.
   */
  postal_code?: string | null;

  /**
   * The state or administrative area.
   */
  state?: string | null;

  /**
   * The first line of the street address.
   */
  street_line_1?: string | null;

  /**
   * The second line of the street address.
   */
  street_line_2?: string | null;
}

export interface AddressRetrieveParams {
  /**
   * The ID of the account that owns the address.
   */
  account_id: string;
}

export interface AddressUpdateParams {
  /**
   * Path param: The ID of the account that owns the address.
   */
  account_id: string;

  /**
   * Body param: The two-letter country code.
   */
  country?: string | null;

  /**
   * Body param: The email address associated with this address.
   */
  email?: string | null;

  /**
   * Body param: Whether this is a drop ship address.
   */
  is_drop_ship?: boolean | null;

  /**
   * Body param: The city or locality.
   */
  locality?: string | null;

  /**
   * Body param: The display name of the address.
   */
  name?: string | null;

  /**
   * Body param: The phone number associated with this address.
   */
  phone?: string | null;

  /**
   * Body param: The postal or zip code.
   */
  postal_code?: string | null;

  /**
   * Body param: The state or administrative area.
   */
  state?: string | null;

  /**
   * Body param: The first line of the street address.
   */
  street_line_1?: string | null;

  /**
   * Body param: The second line of the street address.
   */
  street_line_2?: string | null;
}

export interface AddressDeleteParams {
  /**
   * The ID of the account that owns the address.
   */
  account_id: string;
}

export declare namespace Addresses {
  export {
    type Address as Address,
    type AddressListResponse as AddressListResponse,
    type AddressDeleteResponse as AddressDeleteResponse,
    type AddressCreateParams as AddressCreateParams,
    type AddressRetrieveParams as AddressRetrieveParams,
    type AddressUpdateParams as AddressUpdateParams,
    type AddressDeleteParams as AddressDeleteParams,
  };
}
