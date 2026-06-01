// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RolesAPI from '../../identity/roles';
import * as ActionsAPI from './actions';
import {
  ActionValidateParams,
  Actions,
  AddressComponents,
  ValidateAddressRequest,
  ValidatedAddress,
} from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Autocomplete, look up details, and validate addresses.
 */
export class Addresses extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Returns address suggestions based on input text.
   *
   * @example
   * ```ts
   * const listAddressSuggestion =
   *   await client.core.addresses.retrieveSuggestions({
   *     input: 'input',
   *   });
   * ```
   */
  retrieveSuggestions(
    query: AddressRetrieveSuggestionsParams,
    options?: RequestOptions,
  ): APIPromise<ListAddressSuggestion> {
    return this._client.get('/v1/core/addresses/suggestions', { query, ...options });
  }
}

/**
 * Autocomplete address suggestion.
 */
export interface AddressSuggestion {
  /**
   * Address suggestion ID.
   */
  id: string;

  /**
   * Full description of the address.
   */
  description: string;

  /**
   * Main text (typically the street address).
   */
  main_text: string;

  /**
   * Resource type identifier.
   */
  object: 'address_suggestion';

  /**
   * Secondary text (typically city, state, country).
   */
  secondary_text: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAddressSuggestion {
  /**
   * Resources in this page.
   */
  data: Array<AddressSuggestion>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: RolesAPI.PageInfo;
}

/**
 * PageInfo contains URL-based pagination metadata.
 */
export interface PageInfo {
  /**
   * Whether more results exist after this page.
   */
  has_next_page: boolean;

  /**
   * Whether results exist before this page.
   */
  has_prev_page: boolean;

  /**
   * URL to fetch the next page, `null` if no more pages.
   */
  next_page_url: string | null;

  /**
   * URL to fetch the previous page, `null` if on the first page.
   */
  previous_page_url: string | null;
}

export interface AddressRetrieveSuggestionsParams {
  /**
   * Autocomplete input text.
   */
  input: string;

  /**
   * Session token for grouping autocomplete requests.
   */
  session_token?: string;
}

Addresses.Actions = Actions;

export declare namespace Addresses {
  export {
    type AddressSuggestion as AddressSuggestion,
    type ListAddressSuggestion as ListAddressSuggestion,
    type PageInfo as PageInfo,
    type AddressRetrieveSuggestionsParams as AddressRetrieveSuggestionsParams,
  };

  export {
    Actions as Actions,
    type AddressComponents as AddressComponents,
    type ValidateAddressRequest as ValidateAddressRequest,
    type ValidatedAddress as ValidatedAddress,
    type ActionValidateParams as ActionValidateParams,
  };
}
