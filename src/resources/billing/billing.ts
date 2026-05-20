// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountsAPI from './accounts';
import { Accounts } from './accounts';
import * as ActionsAPI from './actions';
import { Actions } from './actions';
import * as PlansAPI from './plans';
import { Plans } from './plans';
import * as SpendingCapAPI from './spending-cap';
import { SpendingCap } from './spending-cap';

export class Billing extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  plans: PlansAPI.Plans = new PlansAPI.Plans(this._client);
  spendingCap: SpendingCapAPI.SpendingCap = new SpendingCapAPI.SpendingCap(this._client);
}

Billing.Accounts = Accounts;
Billing.Actions = Actions;
Billing.Plans = Plans;
Billing.SpendingCap = SpendingCap;

export declare namespace Billing {
  export { Accounts as Accounts };

  export { Actions as Actions };

  export { Plans as Plans };

  export { SpendingCap as SpendingCap };
}
