// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage payment terms.
 */
export class PaymentTerms extends APIResource {
  /**
   * This endpoint creates a new account-owned payment term.
   *
   * @example
   * ```ts
   * const paymentTerm = await client.core.paymentTerms.create({
   *   name: 'Net 30',
   * });
   * ```
   */
  create(body: PaymentTermCreateParams, options?: RequestOptions): APIPromise<PaymentTerm> {
    return this._client.post('/v1/core/payment-terms', { body, ...options });
  }

  /**
   * This endpoint returns a single payment term by its ID. The payment term must
   * belong to the requesting account or be a default (global) payment term.
   *
   * @example
   * ```ts
   * const paymentTerm = await client.core.paymentTerms.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PaymentTerm> {
    return this._client.get(path`/v1/core/payment-terms/${id}`, options);
  }

  /**
   * This endpoint partially updates an account-owned payment term. Only provided
   * fields are updated; absent fields retain their current values. Default payment
   * terms cannot be updated.
   *
   * @example
   * ```ts
   * const paymentTerm = await client.core.paymentTerms.update(
   *   'id',
   *   { name: 'Net 60' },
   * );
   * ```
   */
  update(
    id: string,
    body: PaymentTermUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaymentTerm> {
    return this._client.patch(path`/v1/core/payment-terms/${id}`, { body, ...options });
  }

  /**
   * This endpoint returns a paginated list of payment terms for the target account,
   * including both account-specific and default system payment terms. Supports
   * cursor-based pagination and search by name.
   *
   * @example
   * ```ts
   * const paymentTerms = await client.core.paymentTerms.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<PaymentTermListResponse> {
    return this._client.get('/v1/core/payment-terms', options);
  }

  /**
   * This endpoint deletes an account-owned payment term. Default payment terms
   * cannot be deleted.
   *
   * @example
   * ```ts
   * const paymentTerm = await client.core.paymentTerms.delete(
   *   'id',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<PaymentTermDeleteResponse> {
    return this._client.delete(path`/v1/core/payment-terms/${id}`, options);
  }
}

/**
 * PaymentTerm represents an account-owned or default payment term.
 */
export interface PaymentTerm {
  /**
   * The unique identifier for the payment term.
   */
  id: string;

  /**
   * When this payment term was created.
   */
  created_at: string;

  /**
   * Whether this payment term is active.
   */
  is_active: boolean;

  /**
   * The display name of the payment term.
   */
  name: string;

  /**
   * The resource type identifier.
   */
  object: 'payment_term';

  /**
   * When this payment term was last updated.
   */
  updated_at: string;
}

/**
 * A paginated list of PaymentTerm resources
 */
export interface PaymentTermListResponse {
  /**
   * Array of PaymentTerm resources in this page
   */
  data: Array<PaymentTerm>;

  /**
   * Object type for PaymentTerm list
   */
  object: 'list';

  /**
   * PageInfo contains cursor-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface PaymentTermDeleteResponse {}

export interface PaymentTermCreateParams {
  /**
   * The display name of the payment term (e.g. "Net 30").
   */
  name: string;
}

export interface PaymentTermUpdateParams {
  /**
   * The display name of the payment term.
   */
  name?: string | null;
}

export declare namespace PaymentTerms {
  export {
    type PaymentTerm as PaymentTerm,
    type PaymentTermListResponse as PaymentTermListResponse,
    type PaymentTermDeleteResponse as PaymentTermDeleteResponse,
    type PaymentTermCreateParams as PaymentTermCreateParams,
    type PaymentTermUpdateParams as PaymentTermUpdateParams,
  };
}
