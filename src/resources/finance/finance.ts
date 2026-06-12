// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PaymentTermsAPI from './payment-terms';
import {
  CreatePaymentTermRequest,
  ListPaymentTerm,
  PaymentTermCreateParams,
  PaymentTermDeleteResponse,
  PaymentTermListParams,
  PaymentTermRetrieveParams,
  PaymentTermUpdateParams,
  PaymentTerms,
  UpdatePaymentTermRequest,
} from './payment-terms';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Create, view, update, and delete transactions.
 */
export class Finance extends APIResource {
  paymentTerms: PaymentTermsAPI.PaymentTerms = new PaymentTermsAPI.PaymentTerms(this._client);

  /**
   * Returns a paginated list of transaction types.
   *
   * @example
   * ```ts
   * const listTransactionType =
   *   await client.finance.retrieveTransactionTypes();
   * ```
   */
  retrieveTransactionTypes(
    query: FinanceRetrieveTransactionTypesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListTransactionType> {
    return this._client.get('/v1/finance/transaction-types', { query, ...options });
  }

  /**
   * Returns a paginated list of transaction methods.
   *
   * @example
   * ```ts
   * const listTransactionMethod =
   *   await client.finance.retrieveTransactionMethods();
   * ```
   */
  retrieveTransactionMethods(
    query: FinanceRetrieveTransactionMethodsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListTransactionMethod> {
    return this._client.get('/v1/finance/transaction-methods', { query, ...options });
  }

  /**
   * Returns a paginated list of adjustment types.
   *
   * @example
   * ```ts
   * const listAdjustmentType =
   *   await client.finance.retrieveAdjustmentTypes();
   * ```
   */
  retrieveAdjustmentTypes(
    query: FinanceRetrieveAdjustmentTypesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListAdjustmentType> {
    return this._client.get('/v1/finance/adjustment-types', { query, ...options });
  }
}

/**
 * A category of financial adjustment, such as a discount, fee, or write-off.
 *
 * Adjustment types classify adjustment transactions recorded against customer
 * invoices.
 */
export interface AdjustmentType {
  /**
   * Adjustment type ID.
   */
  id: string;

  /**
   * Machine-readable code identifying what kind of adjustment this is.
   *
   * - `discount`: a price reduction.
   * - `shipping_discrepancy`: corrects a difference between quoted and actual
   *   freight.
   * - `short_payment`: reconciles an invoice paid for less than the amount due.
   * - `write_off`: cancels an uncollectible balance.
   * - `fee`: an additional charge.
   * - `refund`: returns money to the customer.
   */
  code: 'discount' | 'shipping_discrepancy' | 'short_payment' | 'write_off' | 'fee' | 'refund';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Human-readable name of the adjustment type (e.g. "Discount").
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'adjustment_type';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAdjustmentType {
  /**
   * Resources in this page.
   */
  data: Array<AdjustmentType>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListTransactionMethod {
  /**
   * Resources in this page.
   */
  data: Array<TransactionMethod>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListTransactionType {
  /**
   * Resources in this page.
   */
  data: Array<TransactionType>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * The payment method used to make a transaction, such as cash or check.
 */
export interface TransactionMethod {
  /**
   * Transaction method ID.
   */
  id: string;

  /**
   * Machine-readable code identifying how the transaction was made.
   */
  code: 'cash' | 'check' | 'credit_card' | 'gift_card' | 'ach';

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'transaction_method';
}

/**
 * The category of a financial transaction, such as a payment or credit memo.
 */
export interface TransactionType {
  /**
   * Transaction type ID.
   */
  id: string;

  /**
   * Machine-readable code identifying the kind of transaction.
   *
   * - `payment`: money received from the customer.
   * - `credit_memo`: a credit issued to the customer.
   * - `adjustment`: a manual correction (see the transaction's `adjustment_type`).
   * - `rebate`: a rebate granted to the customer.
   */
  code: 'payment' | 'credit_memo' | 'adjustment' | 'rebate';

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'transaction_type';
}

export interface FinanceRetrieveTransactionTypesParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;
}

export interface FinanceRetrieveTransactionMethodsParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;
}

export interface FinanceRetrieveAdjustmentTypesParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner'>;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;
}

Finance.PaymentTerms = PaymentTerms;

export declare namespace Finance {
  export {
    type AdjustmentType as AdjustmentType,
    type ListAdjustmentType as ListAdjustmentType,
    type ListTransactionMethod as ListTransactionMethod,
    type ListTransactionType as ListTransactionType,
    type TransactionMethod as TransactionMethod,
    type TransactionType as TransactionType,
    type FinanceRetrieveTransactionTypesParams as FinanceRetrieveTransactionTypesParams,
    type FinanceRetrieveTransactionMethodsParams as FinanceRetrieveTransactionMethodsParams,
    type FinanceRetrieveAdjustmentTypesParams as FinanceRetrieveAdjustmentTypesParams,
  };

  export {
    PaymentTerms as PaymentTerms,
    type CreatePaymentTermRequest as CreatePaymentTermRequest,
    type ListPaymentTerm as ListPaymentTerm,
    type UpdatePaymentTermRequest as UpdatePaymentTermRequest,
    type PaymentTermDeleteResponse as PaymentTermDeleteResponse,
    type PaymentTermListParams as PaymentTermListParams,
    type PaymentTermRetrieveParams as PaymentTermRetrieveParams,
    type PaymentTermCreateParams as PaymentTermCreateParams,
    type PaymentTermUpdateParams as PaymentTermUpdateParams,
  };
}
