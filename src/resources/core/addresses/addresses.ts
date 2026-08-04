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
   * Returns address suggestions for partial address text, for use in type-ahead
   * address entry.
   *
   * Only street addresses are suggested; cities, regions, and business listings are
   * not returned. Suggestions are lookup results, not saved addresses in your
   * account. Pass a suggestion's `id` to the address details endpoint to get the
   * full parsed address.
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
 * A candidate address returned by address autocomplete.
 *
 * A suggestion is a lookup result from the address provider, not a saved address
 * in your account. Creating an address from one is a separate step.
 */
export interface AddressSuggestion {
  /**
   * Identifier of the suggested place.
   *
   * Pass this value as the `id` path parameter of the address details endpoint to
   * retrieve the full parsed address. It is issued by the underlying address
   * provider rather than by Augno, so it is not a durable Augno resource ID.
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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
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
   * Reuse the same token for each keystroke of one address entry, and again when you
   * retrieve the details of the suggestion the user picks, so the whole entry is
   * treated as one lookup.
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
