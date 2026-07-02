// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountGroupsAPI from './account-groups';
import {
  AccountGroup,
  AccountGroupCreateParams,
  AccountGroupDeleteResponse,
  AccountGroupListParams,
  AccountGroupUpdateParams,
  AccountGroups,
  CreateAccountGroupRequest,
  ListAccountGroup,
  UpdateAccountGroupRequest,
} from './account-groups';
import * as AccountStatusesAPI from './account-statuses';
import {
  AccountStatus,
  AccountStatusListParams,
  AccountStatusRetrieveParams,
  AccountStatuses,
  ListAccountStatus,
} from './account-statuses';
import * as AddressesAPI from './addresses';
import {
  AddressCreateParams,
  AddressDeleteResponse,
  AddressInput,
  AddressListParams,
  AddressUpdateParams,
  Addresses,
  ListAddress,
  UpdateAddressRequest,
} from './addresses';
import * as PrioritiesAPI from './priorities';
import { ListPriority, Priorities, Priority, PriorityListParams, PriorityRetrieveParams } from './priorities';
import * as SalesOrdersAPI from './sales-orders';
import {
  CreateSalesOrderLineInput,
  CreateSalesOrderRequest,
  CreatedBy,
  Freight,
  ListRecord,
  ListSalesOrder,
  ListSalesOrderLine,
  ListSalesOrderStatus,
  OrderContact,
  OrderDiscount,
  Record,
  SalesOrder,
  SalesOrderCreateParams,
  SalesOrderEmailContactInput,
  SalesOrderLine,
  SalesOrderListParams,
  SalesOrderRelated,
  SalesOrderRetrieveStatusesParams,
  SalesOrderStatus,
  SalesOrderTotals,
  SalesOrders,
} from './sales-orders';
import * as ContactsAPI from './contacts/contacts';
import { Contacts } from './contacts/contacts';
import * as CustomersAPI from './customers/customers';
import {
  Carrier,
  CreateCustomerRequest,
  Customer,
  CustomerContactInfo,
  CustomerCreateParams,
  CustomerDefaults,
  CustomerDeleteResponse,
  CustomerFreightPreferences,
  CustomerListParams,
  CustomerNotificationPreferences,
  CustomerRetrieveParams,
  CustomerUpdateParams,
  Customers,
  ListCustomer,
  ListServiceLevel,
  PaymentTerm,
  QuantityInput,
  ServiceLevel,
  ShippingTerm,
  UpdateCustomerRequest,
} from './customers/customers';

export class Sales extends APIResource {
  accountGroups: AccountGroupsAPI.AccountGroups = new AccountGroupsAPI.AccountGroups(this._client);
  addresses: AddressesAPI.Addresses = new AddressesAPI.Addresses(this._client);
  accountStatuses: AccountStatusesAPI.AccountStatuses = new AccountStatusesAPI.AccountStatuses(this._client);
  priorities: PrioritiesAPI.Priorities = new PrioritiesAPI.Priorities(this._client);
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
  contacts: ContactsAPI.Contacts = new ContactsAPI.Contacts(this._client);
  salesOrders: SalesOrdersAPI.SalesOrders = new SalesOrdersAPI.SalesOrders(this._client);
}

Sales.AccountGroups = AccountGroups;
Sales.Addresses = Addresses;
Sales.AccountStatuses = AccountStatuses;
Sales.Priorities = Priorities;
Sales.Customers = Customers;
Sales.Contacts = Contacts;
Sales.SalesOrders = SalesOrders;

export declare namespace Sales {
  export {
    AccountGroups as AccountGroups,
    type AccountGroup as AccountGroup,
    type CreateAccountGroupRequest as CreateAccountGroupRequest,
    type ListAccountGroup as ListAccountGroup,
    type UpdateAccountGroupRequest as UpdateAccountGroupRequest,
    type AccountGroupDeleteResponse as AccountGroupDeleteResponse,
    type AccountGroupListParams as AccountGroupListParams,
    type AccountGroupCreateParams as AccountGroupCreateParams,
    type AccountGroupUpdateParams as AccountGroupUpdateParams,
  };

  export {
    Addresses as Addresses,
    type AddressInput as AddressInput,
    type ListAddress as ListAddress,
    type UpdateAddressRequest as UpdateAddressRequest,
    type AddressDeleteResponse as AddressDeleteResponse,
    type AddressListParams as AddressListParams,
    type AddressCreateParams as AddressCreateParams,
    type AddressUpdateParams as AddressUpdateParams,
  };

  export {
    AccountStatuses as AccountStatuses,
    type AccountStatus as AccountStatus,
    type ListAccountStatus as ListAccountStatus,
    type AccountStatusListParams as AccountStatusListParams,
    type AccountStatusRetrieveParams as AccountStatusRetrieveParams,
  };

  export {
    Priorities as Priorities,
    type ListPriority as ListPriority,
    type Priority as Priority,
    type PriorityListParams as PriorityListParams,
    type PriorityRetrieveParams as PriorityRetrieveParams,
  };

  export {
    Customers as Customers,
    type Carrier as Carrier,
    type CreateCustomerRequest as CreateCustomerRequest,
    type Customer as Customer,
    type CustomerContactInfo as CustomerContactInfo,
    type CustomerDefaults as CustomerDefaults,
    type CustomerFreightPreferences as CustomerFreightPreferences,
    type CustomerNotificationPreferences as CustomerNotificationPreferences,
    type ListCustomer as ListCustomer,
    type ListServiceLevel as ListServiceLevel,
    type PaymentTerm as PaymentTerm,
    type QuantityInput as QuantityInput,
    type ServiceLevel as ServiceLevel,
    type ShippingTerm as ShippingTerm,
    type UpdateCustomerRequest as UpdateCustomerRequest,
    type CustomerDeleteResponse as CustomerDeleteResponse,
    type CustomerListParams as CustomerListParams,
    type CustomerRetrieveParams as CustomerRetrieveParams,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
  };

  export { Contacts as Contacts };

  export {
    SalesOrders as SalesOrders,
    type CreateSalesOrderLineInput as CreateSalesOrderLineInput,
    type CreateSalesOrderRequest as CreateSalesOrderRequest,
    type CreatedBy as CreatedBy,
    type Freight as Freight,
    type ListRecord as ListRecord,
    type ListSalesOrder as ListSalesOrder,
    type ListSalesOrderLine as ListSalesOrderLine,
    type ListSalesOrderStatus as ListSalesOrderStatus,
    type OrderContact as OrderContact,
    type OrderDiscount as OrderDiscount,
    type Record as Record,
    type SalesOrder as SalesOrder,
    type SalesOrderEmailContactInput as SalesOrderEmailContactInput,
    type SalesOrderLine as SalesOrderLine,
    type SalesOrderRelated as SalesOrderRelated,
    type SalesOrderStatus as SalesOrderStatus,
    type SalesOrderTotals as SalesOrderTotals,
    type SalesOrderRetrieveStatusesParams as SalesOrderRetrieveStatusesParams,
    type SalesOrderListParams as SalesOrderListParams,
    type SalesOrderCreateParams as SalesOrderCreateParams,
  };
}
