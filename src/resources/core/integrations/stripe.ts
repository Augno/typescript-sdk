// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * List and manage third-party account integrations.
 */
export class Stripe extends APIResource {
  /**
   * This endpoint returns the Stripe publishable key for the target account.
   * Available to both internal and customer actors with read access.
   *
   * @example
   * ```ts
   * const response =
   *   await client.core.integrations.stripe.getPublishableKey();
   * ```
   */
  getPublishableKey(options?: RequestOptions): APIPromise<StripeGetPublishableKeyResponse> {
    return this._client.get('/v1/core/integrations/stripe/publishable-key', options);
  }

  /**
   * This endpoint returns whether the target account has a Stripe integration
   * configured. Available to both internal and customer actors with read access.
   *
   * @example
   * ```ts
   * const response =
   *   await client.core.integrations.stripe.getStatus();
   * ```
   */
  getStatus(options?: RequestOptions): APIPromise<StripeGetStatusResponse> {
    return this._client.get('/v1/core/integrations/stripe/status', options);
  }
}

/**
 * StripePublishableKey represents the Stripe publishable key for an account.
 */
export interface StripeGetPublishableKeyResponse {
  /**
   * The Stripe publishable key.
   */
  publishable_key: string;
}

/**
 * StripeStatus represents whether an account has a Stripe integration.
 */
export interface StripeGetStatusResponse {
  /**
   * Whether the account has a Stripe integration configured.
   */
  has_stripe_integration: boolean;
}

export declare namespace Stripe {
  export {
    type StripeGetPublishableKeyResponse as StripeGetPublishableKeyResponse,
    type StripeGetStatusResponse as StripeGetStatusResponse,
  };
}
