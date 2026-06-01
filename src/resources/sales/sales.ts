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
  PageInfo,
  UpdateAccountGroupRequest,
} from './account-groups';
import * as AccountStatusesAPI from './account-statuses';
import {
  Account,
  AccountBranding,
  AccountPortal,
  AccountStatus,
  AccountStatusListParams,
  AccountStatusRetrieveParams,
  AccountStatuses,
  Address,
  Geolocation,
  ListAccountStatus,
  Owner,
  PageInfo as AccountStatusesAPIPageInfo,
} from './account-statuses';
import * as AddressesAPI from './addresses';
import {
  Address as AddressesAPIAddress,
  AddressCreateParams,
  AddressDeleteResponse,
  AddressInput,
  AddressListParams,
  AddressUpdateParams,
  Addresses,
  Geolocation as AddressesAPIGeolocation,
  ListAddress,
  PageInfo as AddressesAPIPageInfo,
  UpdateAddressRequest,
} from './addresses';
import * as PrioritiesAPI from './priorities';
import {
  Account as PrioritiesAPIAccount,
  AccountBranding as PrioritiesAPIAccountBranding,
  AccountPortal as PrioritiesAPIAccountPortal,
  Address as PrioritiesAPIAddress,
  Geolocation as PrioritiesAPIGeolocation,
  ListPriority,
  Owner as PrioritiesAPIOwner,
  PageInfo as PrioritiesAPIPageInfo,
  Priorities,
  Priority,
  PriorityListParams,
  PriorityRetrieveParams,
} from './priorities';
import * as SalesOrdersAPI from './sales-orders';
import {
  Account as SalesOrdersAPIAccount,
  AccountBranding as SalesOrdersAPIAccountBranding,
  AccountPortal as SalesOrdersAPIAccountPortal,
  Address as SalesOrdersAPIAddress,
  Geolocation as SalesOrdersAPIGeolocation,
  ListSalesOrderStatus,
  Owner as SalesOrdersAPIOwner,
  PageInfo as SalesOrdersAPIPageInfo,
  SalesOrderRetrieveStatusesParams,
  SalesOrderStatus,
  SalesOrders,
} from './sales-orders';
import * as CustomersAPI from './customers/customers';
import {
  Account as CustomersAPIAccount,
  AccountBranding as CustomersAPIAccountBranding,
  AccountGroup as CustomersAPIAccountGroup,
  AccountPortal as CustomersAPIAccountPortal,
  AccountUser,
  Address as CustomersAPIAddress,
  AddressInput as CustomersAPIAddressInput,
  Attribute,
  Carrier,
  Consumption,
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
  Department,
  Geolocation as CustomersAPIGeolocation,
  Item,
  ItemCategory,
  ListAccountGroup as CustomersAPIListAccountGroup,
  ListAttribute,
  ListConsumption,
  ListCustomer,
  ListLocation,
  ListMachine,
  ListProductionStep,
  ListProperty,
  ListScanningStation,
  ListServiceLevel,
  ListUnitGroupUnit,
  Location,
  Machine,
  Owner as CustomersAPIOwner,
  PageInfo as CustomersAPIPageInfo,
  PaymentTerm,
  Priority as CustomersAPIPriority,
  ProductionOutput,
  ProductionStep,
  Property,
  Quantity,
  QuantityInput,
  Rate,
  Role,
  ScanningStation,
  ServiceLevel,
  ShippingTerm,
  Unit,
  UnitGroup,
  UnitGroupUnit,
  UpdateCustomerRequest,
} from './customers/customers';

export class Sales extends APIResource {
  accountGroups: AccountGroupsAPI.AccountGroups = new AccountGroupsAPI.AccountGroups(this._client);
  addresses: AddressesAPI.Addresses = new AddressesAPI.Addresses(this._client);
  accountStatuses: AccountStatusesAPI.AccountStatuses = new AccountStatusesAPI.AccountStatuses(this._client);
  priorities: PrioritiesAPI.Priorities = new PrioritiesAPI.Priorities(this._client);
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
  salesOrders: SalesOrdersAPI.SalesOrders = new SalesOrdersAPI.SalesOrders(this._client);
}

Sales.AccountGroups = AccountGroups;
Sales.Addresses = Addresses;
Sales.AccountStatuses = AccountStatuses;
Sales.Priorities = Priorities;
Sales.Customers = Customers;
Sales.SalesOrders = SalesOrders;

export declare namespace Sales {
  export {
    AccountGroups as AccountGroups,
    type AccountGroup as AccountGroup,
    type CreateAccountGroupRequest as CreateAccountGroupRequest,
    type ListAccountGroup as ListAccountGroup,
    type PageInfo as PageInfo,
    type UpdateAccountGroupRequest as UpdateAccountGroupRequest,
    type AccountGroupDeleteResponse as AccountGroupDeleteResponse,
    type AccountGroupCreateParams as AccountGroupCreateParams,
    type AccountGroupUpdateParams as AccountGroupUpdateParams,
    type AccountGroupListParams as AccountGroupListParams,
  };

  export {
    Addresses as Addresses,
    type AddressesAPIAddress as Address,
    type AddressInput as AddressInput,
    type AddressesAPIGeolocation as Geolocation,
    type ListAddress as ListAddress,
    type AddressesAPIPageInfo as PageInfo,
    type UpdateAddressRequest as UpdateAddressRequest,
    type AddressDeleteResponse as AddressDeleteResponse,
    type AddressCreateParams as AddressCreateParams,
    type AddressUpdateParams as AddressUpdateParams,
    type AddressListParams as AddressListParams,
  };

  export {
    AccountStatuses as AccountStatuses,
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPortal as AccountPortal,
    type AccountStatus as AccountStatus,
    type Address as Address,
    type Geolocation as Geolocation,
    type ListAccountStatus as ListAccountStatus,
    type Owner as Owner,
    type AccountStatusesAPIPageInfo as PageInfo,
    type AccountStatusRetrieveParams as AccountStatusRetrieveParams,
    type AccountStatusListParams as AccountStatusListParams,
  };

  export {
    Priorities as Priorities,
    type PrioritiesAPIAccount as Account,
    type PrioritiesAPIAccountBranding as AccountBranding,
    type PrioritiesAPIAccountPortal as AccountPortal,
    type PrioritiesAPIAddress as Address,
    type PrioritiesAPIGeolocation as Geolocation,
    type ListPriority as ListPriority,
    type PrioritiesAPIOwner as Owner,
    type PrioritiesAPIPageInfo as PageInfo,
    type Priority as Priority,
    type PriorityRetrieveParams as PriorityRetrieveParams,
    type PriorityListParams as PriorityListParams,
  };

  export {
    Customers as Customers,
    type CustomersAPIAccount as Account,
    type CustomersAPIAccountBranding as AccountBranding,
    type CustomersAPIAccountGroup as AccountGroup,
    type CustomersAPIAccountPortal as AccountPortal,
    type AccountUser as AccountUser,
    type CustomersAPIAddress as Address,
    type CustomersAPIAddressInput as AddressInput,
    type Attribute as Attribute,
    type Carrier as Carrier,
    type Consumption as Consumption,
    type CreateCustomerRequest as CreateCustomerRequest,
    type Customer as Customer,
    type CustomerContactInfo as CustomerContactInfo,
    type CustomerDefaults as CustomerDefaults,
    type CustomerFreightPreferences as CustomerFreightPreferences,
    type CustomerNotificationPreferences as CustomerNotificationPreferences,
    type Department as Department,
    type CustomersAPIGeolocation as Geolocation,
    type Item as Item,
    type ItemCategory as ItemCategory,
    type CustomersAPIListAccountGroup as ListAccountGroup,
    type ListAttribute as ListAttribute,
    type ListConsumption as ListConsumption,
    type ListCustomer as ListCustomer,
    type ListLocation as ListLocation,
    type ListMachine as ListMachine,
    type ListProductionStep as ListProductionStep,
    type ListProperty as ListProperty,
    type ListScanningStation as ListScanningStation,
    type ListServiceLevel as ListServiceLevel,
    type ListUnitGroupUnit as ListUnitGroupUnit,
    type Location as Location,
    type Machine as Machine,
    type CustomersAPIOwner as Owner,
    type CustomersAPIPageInfo as PageInfo,
    type PaymentTerm as PaymentTerm,
    type CustomersAPIPriority as Priority,
    type ProductionOutput as ProductionOutput,
    type ProductionStep as ProductionStep,
    type Property as Property,
    type Quantity as Quantity,
    type QuantityInput as QuantityInput,
    type Rate as Rate,
    type Role as Role,
    type ScanningStation as ScanningStation,
    type ServiceLevel as ServiceLevel,
    type ShippingTerm as ShippingTerm,
    type Unit as Unit,
    type UnitGroup as UnitGroup,
    type UnitGroupUnit as UnitGroupUnit,
    type UpdateCustomerRequest as UpdateCustomerRequest,
    type CustomerDeleteResponse as CustomerDeleteResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerRetrieveParams as CustomerRetrieveParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
  };

  export {
    SalesOrders as SalesOrders,
    type SalesOrdersAPIAccount as Account,
    type SalesOrdersAPIAccountBranding as AccountBranding,
    type SalesOrdersAPIAccountPortal as AccountPortal,
    type SalesOrdersAPIAddress as Address,
    type SalesOrdersAPIGeolocation as Geolocation,
    type ListSalesOrderStatus as ListSalesOrderStatus,
    type SalesOrdersAPIOwner as Owner,
    type SalesOrdersAPIPageInfo as PageInfo,
    type SalesOrderStatus as SalesOrderStatus,
    type SalesOrderRetrieveStatusesParams as SalesOrderRetrieveStatusesParams,
  };
}
