// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import * as InvoicesAPI from './invoices';
import { Invoices } from './invoices';
import * as PaymentTermsAPI from './payment-terms';
import {
  PaymentTerm,
  PaymentTermDeleteResponse,
  PaymentTermPaymentTermsParams,
  PaymentTermRetrieveParams,
  PaymentTermRetrievePaymentTermsParams,
  PaymentTermRetrievePaymentTermsResponse,
  PaymentTermUpdateParams,
  PaymentTerms,
} from './payment-terms';
import * as SettlementsAPI from './settlements';
import { Settlements } from './settlements';
import * as TransactionAllocationsAPI from './transaction-allocations';
import { TransactionAllocations } from './transaction-allocations';
import * as TransactionsAPI from './transactions';
import { Transactions } from './transactions';
import * as ItemCategoriesAPI from '../catalog/item-categories/item-categories';
import * as AccountsAPI from './accounts/accounts';
import { Accounts } from './accounts/accounts';
import * as ReceivablesAPI from './receivables/receivables';
import { Receivables } from './receivables/receivables';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Create, view, update, and delete transactions.
 */
export class Finance extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  invoices: InvoicesAPI.Invoices = new InvoicesAPI.Invoices(this._client);
  paymentTerms: PaymentTermsAPI.PaymentTerms = new PaymentTermsAPI.PaymentTerms(this._client);
  receivables: ReceivablesAPI.Receivables = new ReceivablesAPI.Receivables(this._client);
  settlements: SettlementsAPI.Settlements = new SettlementsAPI.Settlements(this._client);
  transactionAllocations: TransactionAllocationsAPI.TransactionAllocations =
    new TransactionAllocationsAPI.TransactionAllocations(this._client);
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);

  /**
   * Returns a paginated list of adjustment types.
   *
   * @example
   * ```ts
   * const response =
   *   await client.finance.retrieveAdjustmentTypes();
   * ```
   */
  retrieveAdjustmentTypes(
    query: FinanceRetrieveAdjustmentTypesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FinanceRetrieveAdjustmentTypesResponse> {
    return this._client.get('/v1/finance/adjustment-types', { query, ...options });
  }

  /**
   * Returns a paginated list of transaction types.
   *
   * @example
   * ```ts
   * const response =
   *   await client.finance.retrieveTransactionTypes();
   * ```
   */
  retrieveTransactionTypes(
    query: FinanceRetrieveTransactionTypesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FinanceRetrieveTransactionTypesResponse> {
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
  owner: ItemCategoriesAPI.Owner | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
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

/**
 * List represents a paginated list of resources.
 */
export interface FinanceRetrieveAdjustmentTypesResponse {
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
  page_info: AgentsAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface FinanceRetrieveTransactionTypesResponse {
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
  page_info: AgentsAPI.PageInfo;
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

Finance.Accounts = Accounts;
Finance.Invoices = Invoices;
Finance.PaymentTerms = PaymentTerms;
Finance.Receivables = Receivables;
Finance.Settlements = Settlements;
Finance.TransactionAllocations = TransactionAllocations;
Finance.Transactions = Transactions;

export declare namespace Finance {
  export {
    type AdjustmentType as AdjustmentType,
    type TransactionType as TransactionType,
    type FinanceRetrieveAdjustmentTypesResponse as FinanceRetrieveAdjustmentTypesResponse,
    type FinanceRetrieveTransactionTypesResponse as FinanceRetrieveTransactionTypesResponse,
    type FinanceRetrieveAdjustmentTypesParams as FinanceRetrieveAdjustmentTypesParams,
    type FinanceRetrieveTransactionTypesParams as FinanceRetrieveTransactionTypesParams,
  };

  export { Accounts as Accounts };

  export { Invoices as Invoices };

  export {
    PaymentTerms as PaymentTerms,
    type PaymentTerm as PaymentTerm,
    type PaymentTermDeleteResponse as PaymentTermDeleteResponse,
    type PaymentTermRetrievePaymentTermsResponse as PaymentTermRetrievePaymentTermsResponse,
    type PaymentTermRetrieveParams as PaymentTermRetrieveParams,
    type PaymentTermUpdateParams as PaymentTermUpdateParams,
    type PaymentTermPaymentTermsParams as PaymentTermPaymentTermsParams,
    type PaymentTermRetrievePaymentTermsParams as PaymentTermRetrievePaymentTermsParams,
  };

  export { Receivables as Receivables };

  export { Settlements as Settlements };

  export { TransactionAllocations as TransactionAllocations };

  export { Transactions as Transactions };
}
