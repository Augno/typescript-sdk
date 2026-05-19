// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import * as AccountGroupsAPI from './account-groups';
import {
  AccountGroup,
  AccountGroupCreateParams,
  AccountGroupDeleteResponse,
  AccountGroupListParams,
  AccountGroupListResponse,
  AccountGroupUpdateParams,
  AccountGroups,
} from './account-groups';
import * as AccountPricesAPI from './account-prices';
import {
  AccountPrice,
  AccountPriceCreateParams,
  AccountPriceDeleteResponse,
  AccountPriceListParams,
  AccountPriceListResponse,
  AccountPriceRetrieveParams,
  AccountPriceUpdateParams,
  AccountPrices,
  LightAccount,
  LightAttribute,
  LightItemCategory,
  LightProductLine,
} from './account-prices';
import * as AccountStatusesAPI from './account-statuses';
import { AccountStatus, AccountStatusListResponse, AccountStatuses } from './account-statuses';
import * as AddressesAPI from './addresses';
import {
  AddressAutocompleteParams,
  AddressAutocompleteResponse,
  AddressComponents,
  AddressGetDetailsParams,
  AddressGetDetailsResponse,
  AddressValidateParams,
  AddressValidateResponse,
  Addresses,
} from './addresses';
import * as ChildAccountsAPI from './child-accounts';
import {
  ChildAccount,
  ChildAccountListResponse,
  ChildAccountRemoveResponse,
  ChildAccounts,
} from './child-accounts';
import * as PaymentTermsAPI from './payment-terms';
import {
  PaymentTerm,
  PaymentTermCreateParams,
  PaymentTermDeleteResponse,
  PaymentTermListResponse,
  PaymentTermUpdateParams,
  PaymentTerms,
} from './payment-terms';
import * as RequestLogsAPI from './request-logs';
import {
  RequestLogActor,
  RequestLogListParams,
  RequestLogListResponse,
  RequestLogListResponsesDefaultCursorPage,
  RequestLogRetrieveParams,
  RequestLogRetrieveResponse,
  RequestLogs,
} from './request-logs';
import * as SandboxesAPI from './sandboxes';
import {
  Sandbox,
  SandboxCreateParams,
  SandboxDeleteResponse,
  SandboxListParams,
  SandboxRetrieveParams,
  Sandboxes,
  SandboxesDefaultCursorPage,
} from './sandboxes';
import * as ShippingTermsAPI from './shipping-terms';
import {
  QuantityInputRequest,
  ShippingTerm,
  ShippingTermCreateParams,
  ShippingTermDeleteResponse,
  ShippingTermListParams,
  ShippingTermListResponse,
  ShippingTermRetrieveParams,
  ShippingTermUpdateParams,
  ShippingTerms,
} from './shipping-terms';
import * as UnitsAPI from './units';
import {
  Unit,
  UnitCreateParams,
  UnitDeleteResponse,
  UnitListParams,
  UnitListResponse,
  UnitUpdateParams,
  Units,
} from './units';
import * as AccountUsersAPI from './account-users/account-users';
import {
  AccountUser,
  AccountUserCreateParams,
  AccountUserDeleteResponse,
  AccountUserListParams,
  AccountUserListResponse,
  AccountUserLockResponse,
  AccountUserRestoreResponse,
  AccountUserRetrieveParams,
  AccountUserUnlockResponse,
  AccountUserUpdateNotificationPreferencesParams,
  AccountUserUpdateParams,
  AccountUserUpdatePasswordParams,
  AccountUserUpdatePasswordResponse,
  AccountUsers,
} from './account-users/account-users';
import * as AccountsAPI from './accounts/accounts';
import {
  Account,
  AccountGetLogoURLResponse,
  AccountRetrieveBySlugResponse,
  AccountRetrieveParams,
  AccountUpdateParams,
  AccountUploadPhotoResponse,
  Accounts,
} from './accounts/accounts';
import * as CarriersAPI from './carriers/carriers';
import {
  Carrier,
  CarrierCreateParams,
  CarrierDeleteResponse,
  CarrierGetOAuthStatusResponse,
  CarrierListParams,
  CarrierListResponse,
  CarrierRetrieveParams,
  CarrierUpdateParams,
  Carriers,
} from './carriers/carriers';
import * as IntegrationsAPI from './integrations/integrations';
import {
  AccountIntegration,
  IntegrationCreateParams,
  IntegrationListResponse,
  IntegrationUpdateParams,
  Integrations,
} from './integrations/integrations';
import * as ItemCategoriesAPI from './item-categories/item-categories';
import {
  ItemCategories,
  ItemCategoryChangeUnitGroupParams,
  ItemCategoryChangeUnitGroupResponse,
  ItemCategoryCreateParams,
  ItemCategoryCreateResponse,
  ItemCategoryDeleteResponse,
  ItemCategoryListParams,
  ItemCategoryListResponse,
  ItemCategoryRetrieveParams,
  ItemCategoryRetrieveResponse,
  ItemCategoryUpdateParams,
  ItemCategoryUpdateResponse,
} from './item-categories/item-categories';
import * as ItemsAPI from './items/items';
import {
  Item,
  ItemGetCostsResponse,
  ItemGetInventoryResponse,
  ItemGetTrendsParams,
  ItemGetTrendsResponse,
  ItemListParams,
  ItemListResponse,
  ItemRetrieveParams,
  Items,
  LightRate,
  LightUnit,
  QuantityInfo,
} from './items/items';
import * as ProductLineAccessAPI from './product-line-access/product-line-access';
import { ProductLineAccess } from './product-line-access/product-line-access';
import * as PropertiesAPI from './properties/properties';
import {
  Properties,
  Property,
  PropertyCreateParams,
  PropertyDeleteResponse,
  PropertyListResponse,
  PropertyUpdateParams,
} from './properties/properties';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * List adjustment types.
 */
export class Core extends APIResource {
  accountGroups: AccountGroupsAPI.AccountGroups = new AccountGroupsAPI.AccountGroups(this._client);
  accountPrices: AccountPricesAPI.AccountPrices = new AccountPricesAPI.AccountPrices(this._client);
  accountStatuses: AccountStatusesAPI.AccountStatuses = new AccountStatusesAPI.AccountStatuses(this._client);
  accountUsers: AccountUsersAPI.AccountUsers = new AccountUsersAPI.AccountUsers(this._client);
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  addresses: AddressesAPI.Addresses = new AddressesAPI.Addresses(this._client);
  carriers: CarriersAPI.Carriers = new CarriersAPI.Carriers(this._client);
  childAccounts: ChildAccountsAPI.ChildAccounts = new ChildAccountsAPI.ChildAccounts(this._client);
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);
  paymentTerms: PaymentTermsAPI.PaymentTerms = new PaymentTermsAPI.PaymentTerms(this._client);
  productLineAccess: ProductLineAccessAPI.ProductLineAccess = new ProductLineAccessAPI.ProductLineAccess(
    this._client,
  );
  properties: PropertiesAPI.Properties = new PropertiesAPI.Properties(this._client);
  requestLogs: RequestLogsAPI.RequestLogs = new RequestLogsAPI.RequestLogs(this._client);
  sandboxes: SandboxesAPI.Sandboxes = new SandboxesAPI.Sandboxes(this._client);
  shippingTerms: ShippingTermsAPI.ShippingTerms = new ShippingTermsAPI.ShippingTerms(this._client);
  units: UnitsAPI.Units = new UnitsAPI.Units(this._client);
  itemCategories: ItemCategoriesAPI.ItemCategories = new ItemCategoriesAPI.ItemCategories(this._client);

  /**
   * This endpoint returns a paginated list of adjustment types. Supports
   * cursor-based pagination and search by name.
   *
   * @example
   * ```ts
   * const response = await client.core.listAdjustmentTypes();
   * ```
   */
  listAdjustmentTypes(options?: RequestOptions): APIPromise<CoreListAdjustmentTypesResponse> {
    return this._client.get('/v1/core/adjustment-types', options);
  }
}

/**
 * A paginated list of AdjustmentType resources
 */
export interface CoreListAdjustmentTypesResponse {
  /**
   * Array of AdjustmentType resources in this page
   */
  data: Array<CoreListAdjustmentTypesResponse.Data>;

  /**
   * Object type for AdjustmentType list
   */
  object: 'list';

  /**
   * PageInfo contains cursor-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace CoreListAdjustmentTypesResponse {
  /**
   * AdjustmentType represents a type of inventory adjustment.
   */
  export interface Data {
    /**
     * The unique identifier for the adjustment type.
     */
    id: string;

    /**
     * The machine-readable code for the adjustment type.
     */
    code: string;

    /**
     * When this adjustment type was created.
     */
    created_at: string;

    /**
     * The display name of the adjustment type.
     */
    name: string;

    /**
     * The resource type identifier.
     */
    object: 'adjustment_type';

    /**
     * When this adjustment type was last updated.
     */
    updated_at: string;
  }
}

Core.AccountGroups = AccountGroups;
Core.AccountPrices = AccountPrices;
Core.AccountStatuses = AccountStatuses;
Core.AccountUsers = AccountUsers;
Core.Accounts = Accounts;
Core.Addresses = Addresses;
Core.Carriers = Carriers;
Core.ChildAccounts = ChildAccounts;
Core.Integrations = Integrations;
Core.Items = Items;
Core.PaymentTerms = PaymentTerms;
Core.ProductLineAccess = ProductLineAccess;
Core.Properties = Properties;
Core.RequestLogs = RequestLogs;
Core.Sandboxes = Sandboxes;
Core.ShippingTerms = ShippingTerms;
Core.Units = Units;
Core.ItemCategories = ItemCategories;

export declare namespace Core {
  export { type CoreListAdjustmentTypesResponse as CoreListAdjustmentTypesResponse };

  export {
    AccountGroups as AccountGroups,
    type AccountGroup as AccountGroup,
    type AccountGroupListResponse as AccountGroupListResponse,
    type AccountGroupDeleteResponse as AccountGroupDeleteResponse,
    type AccountGroupCreateParams as AccountGroupCreateParams,
    type AccountGroupUpdateParams as AccountGroupUpdateParams,
    type AccountGroupListParams as AccountGroupListParams,
  };

  export {
    AccountPrices as AccountPrices,
    type AccountPrice as AccountPrice,
    type LightAccount as LightAccount,
    type LightAttribute as LightAttribute,
    type LightItemCategory as LightItemCategory,
    type LightProductLine as LightProductLine,
    type AccountPriceListResponse as AccountPriceListResponse,
    type AccountPriceDeleteResponse as AccountPriceDeleteResponse,
    type AccountPriceCreateParams as AccountPriceCreateParams,
    type AccountPriceRetrieveParams as AccountPriceRetrieveParams,
    type AccountPriceUpdateParams as AccountPriceUpdateParams,
    type AccountPriceListParams as AccountPriceListParams,
  };

  export {
    AccountStatuses as AccountStatuses,
    type AccountStatus as AccountStatus,
    type AccountStatusListResponse as AccountStatusListResponse,
  };

  export {
    AccountUsers as AccountUsers,
    type AccountUser as AccountUser,
    type AccountUserListResponse as AccountUserListResponse,
    type AccountUserDeleteResponse as AccountUserDeleteResponse,
    type AccountUserLockResponse as AccountUserLockResponse,
    type AccountUserRestoreResponse as AccountUserRestoreResponse,
    type AccountUserUnlockResponse as AccountUserUnlockResponse,
    type AccountUserUpdatePasswordResponse as AccountUserUpdatePasswordResponse,
    type AccountUserCreateParams as AccountUserCreateParams,
    type AccountUserRetrieveParams as AccountUserRetrieveParams,
    type AccountUserUpdateParams as AccountUserUpdateParams,
    type AccountUserListParams as AccountUserListParams,
    type AccountUserUpdateNotificationPreferencesParams as AccountUserUpdateNotificationPreferencesParams,
    type AccountUserUpdatePasswordParams as AccountUserUpdatePasswordParams,
  };

  export {
    Accounts as Accounts,
    type Account as Account,
    type AccountGetLogoURLResponse as AccountGetLogoURLResponse,
    type AccountRetrieveBySlugResponse as AccountRetrieveBySlugResponse,
    type AccountUploadPhotoResponse as AccountUploadPhotoResponse,
    type AccountRetrieveParams as AccountRetrieveParams,
    type AccountUpdateParams as AccountUpdateParams,
  };

  export {
    Addresses as Addresses,
    type AddressComponents as AddressComponents,
    type AddressAutocompleteResponse as AddressAutocompleteResponse,
    type AddressGetDetailsResponse as AddressGetDetailsResponse,
    type AddressValidateResponse as AddressValidateResponse,
    type AddressAutocompleteParams as AddressAutocompleteParams,
    type AddressGetDetailsParams as AddressGetDetailsParams,
    type AddressValidateParams as AddressValidateParams,
  };

  export {
    Carriers as Carriers,
    type Carrier as Carrier,
    type CarrierListResponse as CarrierListResponse,
    type CarrierDeleteResponse as CarrierDeleteResponse,
    type CarrierGetOAuthStatusResponse as CarrierGetOAuthStatusResponse,
    type CarrierCreateParams as CarrierCreateParams,
    type CarrierRetrieveParams as CarrierRetrieveParams,
    type CarrierUpdateParams as CarrierUpdateParams,
    type CarrierListParams as CarrierListParams,
  };

  export {
    ChildAccounts as ChildAccounts,
    type ChildAccount as ChildAccount,
    type ChildAccountListResponse as ChildAccountListResponse,
    type ChildAccountRemoveResponse as ChildAccountRemoveResponse,
  };

  export {
    Integrations as Integrations,
    type AccountIntegration as AccountIntegration,
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationCreateParams as IntegrationCreateParams,
    type IntegrationUpdateParams as IntegrationUpdateParams,
  };

  export {
    Items as Items,
    type Item as Item,
    type LightRate as LightRate,
    type LightUnit as LightUnit,
    type QuantityInfo as QuantityInfo,
    type ItemListResponse as ItemListResponse,
    type ItemGetCostsResponse as ItemGetCostsResponse,
    type ItemGetInventoryResponse as ItemGetInventoryResponse,
    type ItemGetTrendsResponse as ItemGetTrendsResponse,
    type ItemRetrieveParams as ItemRetrieveParams,
    type ItemListParams as ItemListParams,
    type ItemGetTrendsParams as ItemGetTrendsParams,
  };

  export {
    PaymentTerms as PaymentTerms,
    type PaymentTerm as PaymentTerm,
    type PaymentTermListResponse as PaymentTermListResponse,
    type PaymentTermDeleteResponse as PaymentTermDeleteResponse,
    type PaymentTermCreateParams as PaymentTermCreateParams,
    type PaymentTermUpdateParams as PaymentTermUpdateParams,
  };

  export { ProductLineAccess as ProductLineAccess };

  export {
    Properties as Properties,
    type Property as Property,
    type PropertyListResponse as PropertyListResponse,
    type PropertyDeleteResponse as PropertyDeleteResponse,
    type PropertyCreateParams as PropertyCreateParams,
    type PropertyUpdateParams as PropertyUpdateParams,
  };

  export {
    RequestLogs as RequestLogs,
    type RequestLogActor as RequestLogActor,
    type RequestLogRetrieveResponse as RequestLogRetrieveResponse,
    type RequestLogListResponse as RequestLogListResponse,
    type RequestLogListResponsesDefaultCursorPage as RequestLogListResponsesDefaultCursorPage,
    type RequestLogRetrieveParams as RequestLogRetrieveParams,
    type RequestLogListParams as RequestLogListParams,
  };

  export {
    Sandboxes as Sandboxes,
    type Sandbox as Sandbox,
    type SandboxDeleteResponse as SandboxDeleteResponse,
    type SandboxesDefaultCursorPage as SandboxesDefaultCursorPage,
    type SandboxCreateParams as SandboxCreateParams,
    type SandboxRetrieveParams as SandboxRetrieveParams,
    type SandboxListParams as SandboxListParams,
  };

  export {
    ShippingTerms as ShippingTerms,
    type QuantityInputRequest as QuantityInputRequest,
    type ShippingTerm as ShippingTerm,
    type ShippingTermListResponse as ShippingTermListResponse,
    type ShippingTermDeleteResponse as ShippingTermDeleteResponse,
    type ShippingTermCreateParams as ShippingTermCreateParams,
    type ShippingTermRetrieveParams as ShippingTermRetrieveParams,
    type ShippingTermUpdateParams as ShippingTermUpdateParams,
    type ShippingTermListParams as ShippingTermListParams,
  };

  export {
    Units as Units,
    type Unit as Unit,
    type UnitListResponse as UnitListResponse,
    type UnitDeleteResponse as UnitDeleteResponse,
    type UnitCreateParams as UnitCreateParams,
    type UnitUpdateParams as UnitUpdateParams,
    type UnitListParams as UnitListParams,
  };

  export {
    ItemCategories as ItemCategories,
    type ItemCategoryCreateResponse as ItemCategoryCreateResponse,
    type ItemCategoryRetrieveResponse as ItemCategoryRetrieveResponse,
    type ItemCategoryUpdateResponse as ItemCategoryUpdateResponse,
    type ItemCategoryListResponse as ItemCategoryListResponse,
    type ItemCategoryDeleteResponse as ItemCategoryDeleteResponse,
    type ItemCategoryChangeUnitGroupResponse as ItemCategoryChangeUnitGroupResponse,
    type ItemCategoryCreateParams as ItemCategoryCreateParams,
    type ItemCategoryRetrieveParams as ItemCategoryRetrieveParams,
    type ItemCategoryUpdateParams as ItemCategoryUpdateParams,
    type ItemCategoryListParams as ItemCategoryListParams,
    type ItemCategoryChangeUnitGroupParams as ItemCategoryChangeUnitGroupParams,
  };
}
