// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
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
import * as AccountsAPI from './accounts/accounts';
import { Accounts } from './accounts/accounts';
import * as ReceivablesAPI from './receivables/receivables';
import { Receivables } from './receivables/receivables';

export class Finance extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  invoices: InvoicesAPI.Invoices = new InvoicesAPI.Invoices(this._client);
  paymentTerms: PaymentTermsAPI.PaymentTerms = new PaymentTermsAPI.PaymentTerms(this._client);
  receivables: ReceivablesAPI.Receivables = new ReceivablesAPI.Receivables(this._client);
  settlements: SettlementsAPI.Settlements = new SettlementsAPI.Settlements(this._client);
  transactionAllocations: TransactionAllocationsAPI.TransactionAllocations =
    new TransactionAllocationsAPI.TransactionAllocations(this._client);
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);
}

Finance.Accounts = Accounts;
Finance.Invoices = Invoices;
Finance.PaymentTerms = PaymentTerms;
Finance.Receivables = Receivables;
Finance.Settlements = Settlements;
Finance.TransactionAllocations = TransactionAllocations;
Finance.Transactions = Transactions;

export declare namespace Finance {
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
