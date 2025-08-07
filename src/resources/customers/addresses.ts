// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Addresses extends APIResource {
  /**
   * Creates and validates a new address for a customer using Google Address
   * Validation.
   *
   * @example
   * ```ts
   * const address = await client.customers.addresses.create(
   *   'customer_id',
   *   {
   *     address_line_1: '123 Main St',
   *     city: 'West Lafayette',
   *     country: 'USA',
   *     name: 'John Doe',
   *     postal_code: '47906',
   *   },
   * );
   * ```
   */
  create(customerID: string, body: AddressCreateParams, options?: RequestOptions): APIPromise<Address> {
    return this._client.post(path`/customers/${customerID}/addresses`, { body, ...options });
  }

  /**
   * Retrieves detailed information for a specific customer address by ID.
   *
   * @example
   * ```ts
   * const getCustomerAddress =
   *   await client.customers.addresses.retrieve('address_id', {
   *     customer_id: 'customer_id',
   *   });
   * ```
   */
  retrieve(
    addressID: string,
    params: AddressRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<GetCustomerAddress> {
    const { customer_id } = params;
    return this._client.get(path`/customers/${customer_id}/addresses/${addressID}`, options);
  }

  /**
   * Updates address information with automatic address validation and geolocation
   * updates.
   *
   * @example
   * ```ts
   * const address = await client.customers.addresses.update(
   *   'address_id',
   *   { customer_id: 'customer_id' },
   * );
   * ```
   */
  update(addressID: string, params: AddressUpdateParams, options?: RequestOptions): APIPromise<Address> {
    const { customer_id, ...body } = params;
    return this._client.put(path`/customers/${customer_id}/addresses/${addressID}`, { body, ...options });
  }

  /**
   * Retrieves all addresses associated with a specific customer including
   * geolocation data.
   *
   * @example
   * ```ts
   * const getCustomerAddress =
   *   await client.customers.addresses.list('customer_id');
   * ```
   */
  list(customerID: string, options?: RequestOptions): APIPromise<GetCustomerAddress> {
    return this._client.get(path`/customers/${customerID}/addresses`, options);
  }

  /**
   * Deletes an address for a customer.
   *
   * @example
   * ```ts
   * await client.customers.addresses.delete('address_id', {
   *   customer_id: 'customer_id',
   * });
   * ```
   */
  delete(addressID: string, params: AddressDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { customer_id } = params;
    return this._client.delete(path`/customers/${customer_id}/addresses/${addressID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Represents a Address resource
 */
export interface Address {
  /**
   * Unique identifier for the address. We use type ids, which are k-sortable and
   * human readable. You can read more about them
   * [here](https://github.com/jetify-com/typeid).
   */
  id: string;

  /**
   * Timestamp when the address was created
   */
  created_at: string;

  /**
   * Contact name associated with this address
   */
  name: string;

  /**
   * City or locality name
   */
  city?: string;

  /**
   * ISO country code
   */
  country?: string;

  /**
   * Contact email address for this address
   */
  email?: string;

  /**
   * Whether this address is for drop shipping
   */
  is_drop_ship?: boolean;

  /**
   * Contact phone number for this address
   */
  phone?: string;

  /**
   * ZIP or postal code
   */
  postal_code?: string;

  /**
   * State or province code
   */
  state?: string;

  /**
   * First line of the street address
   */
  street_line_1?: string;

  /**
   * Second line of the street address
   */
  street_line_2?: string;

  /**
   * Timestamp when the address was last updated
   */
  updated_at?: string;
}

/**
 * Response schema for GetCustomerAddressRequest
 */
export interface GetCustomerAddress {
  /**
   * ID of the address
   */
  id: string;

  /**
   * Address line 1 of the address
   */
  address_line_1: string;

  /**
   * City of the address
   */
  city: string;

  /**
   * Country of the address
   */
  country: string;

  /**
   * created at
   */
  created_at: string;

  /**
   * Name of the address
   */
  name: string;

  /**
   * Postal code of the address
   */
  postal_code: string;

  /**
   * updated at
   */
  updated_at: string;

  /**
   * Address line 2 of the address
   */
  address_line_2?: string;

  /**
   * Email of the address
   */
  email?: string;

  /**
   * Is drop ship of the address
   */
  is_drop_ship?: boolean;

  /**
   * Phone of the address
   */
  phone?: string;

  /**
   * State of the address
   */
  state?: string;
}

export interface AddressCreateParams {
  /**
   * Address line 1 of the address
   */
  address_line_1: string;

  /**
   * Locality of the address
   */
  city: string;

  /**
   * Country of the address
   */
  country: string;

  /**
   * Name of the address
   */
  name: string;

  /**
   * Postal code of the address
   */
  postal_code: string;

  /**
   * Address line 2 of the address
   */
  address_line_2?: string;

  /**
   * Email of the address
   */
  email?: string;

  /**
   * options for return granularity
   */
  include?: Array<unknown>;

  /**
   * Is drop ship of the address
   */
  is_drop_ship?: boolean;

  /**
   * Phone of the address
   */
  phone?: string;

  /**
   * State of the address
   */
  state?: string;
}

export interface AddressRetrieveParams {
  /**
   * Unique identifier for the customer id
   */
  customer_id: string;
}

export interface AddressUpdateParams {
  /**
   * Path param: Unique identifier for the customer id
   */
  customer_id: string;

  /**
   * Body param: Address line 1 of the address
   */
  address_line_1?: string;

  /**
   * Body param: Address line 2 of the address
   */
  address_line_2?: string;

  /**
   * Body param: City of the address
   */
  city?: string;

  /**
   * Body param: Country of the address
   */
  country?: string;

  /**
   * Body param: Email of the address
   */
  email?: string;

  /**
   * Body param: options for return granularity
   */
  include?: Array<unknown>;

  /**
   * Body param: Is drop ship of the address
   */
  is_drop_ship?: boolean;

  /**
   * Body param: Name of the address
   */
  name?: string;

  /**
   * Body param: Phone of the address
   */
  phone?: string;

  /**
   * Body param: Postal code of the address
   */
  postal_code?: string;

  /**
   * Body param: State of the address
   */
  state?: string;
}

export interface AddressDeleteParams {
  /**
   * Unique identifier for the customer id
   */
  customer_id: string;
}

export declare namespace Addresses {
  export {
    type Address as Address,
    type GetCustomerAddress as GetCustomerAddress,
    type AddressCreateParams as AddressCreateParams,
    type AddressRetrieveParams as AddressRetrieveParams,
    type AddressUpdateParams as AddressUpdateParams,
    type AddressDeleteParams as AddressDeleteParams,
  };
}
