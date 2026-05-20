// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountGroupsAPI from './account-groups';
import {
  AccountGroup,
  AccountGroupAccountGroupsParams,
  AccountGroupDeleteResponse,
  AccountGroupRetrieveAccountGroupsParams,
  AccountGroupUpdateParams,
  AccountGroups,
  ListAccountGroup,
} from './account-groups';
import * as AccountPricesAPI from './account-prices';
import { AccountPrices } from './account-prices';
import * as AccountStatusesAPI from './account-statuses';
import {
  AccountStatus,
  AccountStatusRetrieveAccountStatusesParams,
  AccountStatusRetrieveAccountStatusesResponse,
  AccountStatusRetrieveParams,
  AccountStatuses,
} from './account-statuses';
import * as AddressesAPI from './addresses';
import {
  Address,
  AddressCreateParams,
  AddressDeleteResponse,
  AddressInput,
  AddressListParams,
  AddressListResponse,
  AddressUpdateParams,
  Addresses,
} from './addresses';
import * as PrioritiesAPI from './priorities';
import {
  Priorities,
  Priority,
  PriorityListParams,
  PriorityListResponse,
  PriorityRetrieveParams,
} from './priorities';
import * as RegistrationFlowsAPI from './registration-flows';
import { RegistrationFlows } from './registration-flows';
import * as VolumeDiscountsAPI from './volume-discounts';
import { VolumeDiscounts } from './volume-discounts';
import * as AccountUsersAPI from './account-users/account-users';
import { AccountUsers } from './account-users/account-users';
import * as AccountsAPI from './accounts/accounts';
import { Accounts } from './accounts/accounts';
import * as CustomersAPI from './customers/customers';
import {
  Customer,
  CustomerCreateParams,
  CustomerDeleteResponse,
  CustomerListParams,
  CustomerRetrieveParams,
  CustomerUpdateParams,
  Customers,
  ListCustomer,
} from './customers/customers';
import * as OrderDiscountsAPI from './order-discounts/order-discounts';
import { OrderDiscounts } from './order-discounts/order-discounts';
import * as ProductLineAccessAPI from './product-line-access/product-line-access';
import { ProductLineAccess } from './product-line-access/product-line-access';
import * as SalesOrdersAPI from './sales-orders/sales-orders';
import { SalesOrders } from './sales-orders/sales-orders';

export class Sales extends APIResource {
  accountGroups: AccountGroupsAPI.AccountGroups = new AccountGroupsAPI.AccountGroups(this._client);
  accountPrices: AccountPricesAPI.AccountPrices = new AccountPricesAPI.AccountPrices(this._client);
  accountStatuses: AccountStatusesAPI.AccountStatuses = new AccountStatusesAPI.AccountStatuses(this._client);
  accountUsers: AccountUsersAPI.AccountUsers = new AccountUsersAPI.AccountUsers(this._client);
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  addresses: AddressesAPI.Addresses = new AddressesAPI.Addresses(this._client);
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
  orderDiscounts: OrderDiscountsAPI.OrderDiscounts = new OrderDiscountsAPI.OrderDiscounts(this._client);
  priorities: PrioritiesAPI.Priorities = new PrioritiesAPI.Priorities(this._client);
  productLineAccess: ProductLineAccessAPI.ProductLineAccess = new ProductLineAccessAPI.ProductLineAccess(
    this._client,
  );
  registrationFlows: RegistrationFlowsAPI.RegistrationFlows = new RegistrationFlowsAPI.RegistrationFlows(
    this._client,
  );
  salesOrders: SalesOrdersAPI.SalesOrders = new SalesOrdersAPI.SalesOrders(this._client);
  volumeDiscounts: VolumeDiscountsAPI.VolumeDiscounts = new VolumeDiscountsAPI.VolumeDiscounts(this._client);
}

Sales.AccountGroups = AccountGroups;
Sales.AccountPrices = AccountPrices;
Sales.AccountStatuses = AccountStatuses;
Sales.AccountUsers = AccountUsers;
Sales.Accounts = Accounts;
Sales.Addresses = Addresses;
Sales.Customers = Customers;
Sales.OrderDiscounts = OrderDiscounts;
Sales.Priorities = Priorities;
Sales.ProductLineAccess = ProductLineAccess;
Sales.RegistrationFlows = RegistrationFlows;
Sales.SalesOrders = SalesOrders;
Sales.VolumeDiscounts = VolumeDiscounts;

export declare namespace Sales {
  export {
    AccountGroups as AccountGroups,
    type AccountGroup as AccountGroup,
    type ListAccountGroup as ListAccountGroup,
    type AccountGroupDeleteResponse as AccountGroupDeleteResponse,
    type AccountGroupUpdateParams as AccountGroupUpdateParams,
    type AccountGroupAccountGroupsParams as AccountGroupAccountGroupsParams,
    type AccountGroupRetrieveAccountGroupsParams as AccountGroupRetrieveAccountGroupsParams,
  };

  export { AccountPrices as AccountPrices };

  export {
    AccountStatuses as AccountStatuses,
    type AccountStatus as AccountStatus,
    type AccountStatusRetrieveAccountStatusesResponse as AccountStatusRetrieveAccountStatusesResponse,
    type AccountStatusRetrieveParams as AccountStatusRetrieveParams,
    type AccountStatusRetrieveAccountStatusesParams as AccountStatusRetrieveAccountStatusesParams,
  };

  export { AccountUsers as AccountUsers };

  export { Accounts as Accounts };

  export {
    Addresses as Addresses,
    type Address as Address,
    type AddressInput as AddressInput,
    type AddressListResponse as AddressListResponse,
    type AddressDeleteResponse as AddressDeleteResponse,
    type AddressCreateParams as AddressCreateParams,
    type AddressUpdateParams as AddressUpdateParams,
    type AddressListParams as AddressListParams,
  };

  export {
    Customers as Customers,
    type Customer as Customer,
    type ListCustomer as ListCustomer,
    type CustomerDeleteResponse as CustomerDeleteResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerRetrieveParams as CustomerRetrieveParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
  };

  export { OrderDiscounts as OrderDiscounts };

  export {
    Priorities as Priorities,
    type Priority as Priority,
    type PriorityListResponse as PriorityListResponse,
    type PriorityRetrieveParams as PriorityRetrieveParams,
    type PriorityListParams as PriorityListParams,
  };

  export { ProductLineAccess as ProductLineAccess };

  export { RegistrationFlows as RegistrationFlows };

  export { SalesOrders as SalesOrders };

  export { VolumeDiscounts as VolumeDiscounts };
}
