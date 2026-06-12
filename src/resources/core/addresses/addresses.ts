// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
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
  page_info: APIKeysAPI.PageInfo;
}

export interface AddressRetrieveSuggestionsParams {
  /**
   * Partial address text to generate suggestions for.
   */
  input: string;

  /**
   * Opaque token that groups a series of related autocomplete requests into a single
   * session.
   *
   * Reuse the same token for each keystroke of one address entry.
   */
  session_token?: string;
}

Addresses.Actions = Actions;

export declare namespace Addresses {
  export {
    type AddressSuggestion as AddressSuggestion,
    type ListAddressSuggestion as ListAddressSuggestion,
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
