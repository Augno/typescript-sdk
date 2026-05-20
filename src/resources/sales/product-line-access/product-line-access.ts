// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountGroupsAPI from './account-groups';
import { AccountGroups } from './account-groups';
import * as CustomersAPI from './customers';
import { Customers } from './customers';

export class ProductLineAccess extends APIResource {
  accountGroups: AccountGroupsAPI.AccountGroups = new AccountGroupsAPI.AccountGroups(this._client);
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
}

ProductLineAccess.AccountGroups = AccountGroups;
ProductLineAccess.Customers = Customers;

export declare namespace ProductLineAccess {
  export { AccountGroups as AccountGroups };

  export { Customers as Customers };
}
