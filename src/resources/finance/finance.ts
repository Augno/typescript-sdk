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
}

/**
 * Adjustment type resource.
 */
export interface AdjustmentType {
  /**
   * Adjustment ID.
   */
  id: string;

  /**
   * Machine-readable code.
   */
  code: 'discount' | 'shipping_discrepancy' | 'short_payment' | 'write_off' | 'fee' | 'refund';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name.
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
 * Transaction method resource.
 */
export interface TransactionMethod {
  /**
   * Transaction method ID.
   */
  id: string;

  /**
   * Machine-readable code.
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
 * Transaction type resource.
 */
export interface TransactionType {
  /**
   * Transaction ID.
   */
  id: string;

  /**
   * Machine-readable code.
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

export interface FinanceRetrieveAdjustmentTypesParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export interface FinanceRetrieveTransactionMethodsParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export interface FinanceRetrieveTransactionTypesParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
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
    type FinanceRetrieveAdjustmentTypesParams as FinanceRetrieveAdjustmentTypesParams,
    type FinanceRetrieveTransactionMethodsParams as FinanceRetrieveTransactionMethodsParams,
    type FinanceRetrieveTransactionTypesParams as FinanceRetrieveTransactionTypesParams,
  };

  export {
    PaymentTerms as PaymentTerms,
    type CreatePaymentTermRequest as CreatePaymentTermRequest,
    type ListPaymentTerm as ListPaymentTerm,
    type UpdatePaymentTermRequest as UpdatePaymentTermRequest,
    type PaymentTermDeleteResponse as PaymentTermDeleteResponse,
    type PaymentTermCreateParams as PaymentTermCreateParams,
    type PaymentTermRetrieveParams as PaymentTermRetrieveParams,
    type PaymentTermUpdateParams as PaymentTermUpdateParams,
    type PaymentTermListParams as PaymentTermListParams,
  };
}
