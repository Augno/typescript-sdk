// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Autocomplete, look up details, and validate addresses.
 */
export class Addresses extends APIResource {
  /**
   * This endpoint returns address autocomplete suggestions based on the input text.
   * Uses the Google Places API for address lookups.
   *
   * @example
   * ```ts
   * const response = await client.core.addresses.autocomplete({
   *   input: 'input',
   * });
   * ```
   */
  autocomplete(
    query: AddressAutocompleteParams,
    options?: RequestOptions,
  ): APIPromise<AddressAutocompleteResponse> {
    return this._client.get('/v1/core/addresses/autocomplete', { query, ...options });
  }

  /**
   * This endpoint returns parsed address components for a Google Places ID.
   * Typically used after an autocomplete selection to get full address details.
   *
   * @example
   * ```ts
   * const response = await client.core.addresses.getDetails(
   *   'id',
   * );
   * ```
   */
  getDetails(
    id: string,
    query: AddressGetDetailsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AddressGetDetailsResponse> {
    return this._client.get(path`/v1/core/addresses/details/${id}`, { query, ...options });
  }

  /**
   * This endpoint validates an address using the Google Address Validation API.
   * Returns whether the address is valid, a formatted version, and any validation
   * messages.
   *
   * @example
   * ```ts
   * const response = await client.core.addresses.validate({
   *   address_line_1: '123 Main St',
   *   city: 'Springfield',
   *   country: 'US',
   *   postal_code: '62701',
   *   state: 'IL',
   * });
   * ```
   */
  validate(body: AddressValidateParams, options?: RequestOptions): APIPromise<AddressValidateResponse> {
    return this._client.post('/v1/core/addresses/validate', { body, ...options });
  }
}

/**
 * AddressComponents represents parsed address components.
 */
export interface AddressComponents {
  /**
   * The first line of the street address.
   */
  address_line_1: string;

  /**
   * The second line of the street address.
   */
  address_line_2: string | null;

  /**
   * The city.
   */
  city: string;

  /**
   * The country name or code.
   */
  country: string;

  /**
   * The two-letter country code.
   */
  country_code: string;

  /**
   * The postal or zip code.
   */
  postal_code: string;

  /**
   * The state or administrative area.
   */
  state: string;
}

/**
 * A paginated list of AddressSuggestion resources
 */
export interface AddressAutocompleteResponse {
  /**
   * Array of AddressSuggestion resources in this page
   */
  data: Array<AddressAutocompleteResponse.Data>;

  /**
   * Object type for AddressSuggestion list
   */
  object: 'list';

  /**
   * PageInfo contains cursor-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace AddressAutocompleteResponse {
  /**
   * AddressSuggestion represents an autocomplete suggestion.
   */
  export interface Data {
    /**
     * The Google Places ID for the suggestion.
     */
    id: string;

    /**
     * The full text description of the suggestion.
     */
    description: string;

    /**
     * The main text of the suggestion (typically the street address).
     */
    main_text: string;

    /**
     * The secondary text of the suggestion (typically city, state, country).
     */
    secondary_text: string;
  }
}

/**
 * AddressDetailsResult represents the result of a place details lookup.
 */
export interface AddressGetDetailsResponse {
  /**
   * AddressComponents represents parsed address components.
   */
  address: AddressComponents | null;

  /**
   * The formatted full address string.
   */
  formatted_address: string;
}

/**
 * ValidatedAddress represents the result of address validation.
 */
export interface AddressValidateResponse {
  /**
   * AddressComponents represents parsed address components.
   */
  components: AddressComponents | null;

  /**
   * The formatted address as returned by the validation service.
   */
  formatted_address: string | null;

  /**
   * Whether the address is considered valid.
   */
  is_valid: boolean;

  /**
   * Validation messages describing any issues found.
   */
  validation_messages: Array<string>;
}

export interface AddressAutocompleteParams {
  /**
   * The text input for autocomplete.
   */
  input: string;

  /**
   * An optional session token for grouping autocomplete requests.
   */
  'session_token,omitempty'?: string;
}

export interface AddressGetDetailsParams {
  /**
   * An optional session token for grouping with a previous autocomplete request.
   */
  'session_token,omitempty'?: string;
}

export interface AddressValidateParams {
  /**
   * The first line of the street address.
   */
  address_line_1: string;

  /**
   * The city.
   */
  city: string;

  /**
   * The country name or code.
   */
  country: string;

  /**
   * The postal or zip code.
   */
  postal_code: string;

  /**
   * The state or administrative area.
   */
  state: string;

  /**
   * The second line of the street address.
   */
  address_line_2?: string | null;
}

export declare namespace Addresses {
  export {
    type AddressComponents as AddressComponents,
    type AddressAutocompleteResponse as AddressAutocompleteResponse,
    type AddressGetDetailsResponse as AddressGetDetailsResponse,
    type AddressValidateResponse as AddressValidateResponse,
    type AddressAutocompleteParams as AddressAutocompleteParams,
    type AddressGetDetailsParams as AddressGetDetailsParams,
    type AddressValidateParams as AddressValidateParams,
  };
}
