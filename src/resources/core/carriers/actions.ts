// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CarriersAPI from './carriers';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage carriers and their Shippo integrations.
 */
export class Actions extends APIResource {
  /**
   * This endpoint initiates the OAuth flow for a Shippo-managed carrier (e.g.
   * FedEx). Returns an OAuth URL to redirect the user to. Not available in sandbox
   * mode.
   *
   * @example
   * ```ts
   * const response =
   *   await client.core.carriers.actions.initiateOAuth('id', {
   *     redirect_uri:
   *       'https://app.example.com/carriers/oauth/callback',
   *     state: null,
   *   });
   * ```
   */
  initiateOAuth(
    id: string,
    body: ActionInitiateOAuthParams,
    options?: RequestOptions,
  ): APIPromise<ActionInitiateOAuthResponse> {
    return this._client.post(path`/v1/core/carriers/${id}/actions/initiate-oauth`, { body, ...options });
  }

  /**
   * This endpoint syncs carrier options from Shippo service levels. Adds new service
   * levels and removes stale ones. Not available in sandbox mode.
   *
   * @example
   * ```ts
   * const carrier =
   *   await client.core.carriers.actions.syncOptions('id');
   * ```
   */
  syncOptions(id: string, options?: RequestOptions): APIPromise<CarriersAPI.Carrier> {
    return this._client.post(path`/v1/core/carriers/${id}/actions/sync-options`, options);
  }
}

/**
 * OAuthResponse represents the response from initiating carrier OAuth.
 */
export interface ActionInitiateOAuthResponse {
  /**
   * The OAuth URL to redirect the user to.
   */
  oauth_url: string;
}

export interface ActionInitiateOAuthParams {
  /**
   * The URI to redirect to after OAuth completes.
   */
  redirect_uri: string;

  /**
   * An optional opaque state value passed through the OAuth flow.
   */
  state: string | null;
}

export declare namespace Actions {
  export {
    type ActionInitiateOAuthResponse as ActionInitiateOAuthResponse,
    type ActionInitiateOAuthParams as ActionInitiateOAuthParams,
  };
}
