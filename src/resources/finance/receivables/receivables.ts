// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountsAPI from './accounts/accounts';
import { Accounts } from './accounts/accounts';

export class Receivables extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
}

Receivables.Accounts = Accounts;

export declare namespace Receivables {
  export { Accounts as Accounts };
}
