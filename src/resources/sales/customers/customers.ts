// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountGroupsAPI from '../account-groups';
import * as AddressesAPI from '../addresses';
import * as PrioritiesAPI from '../priorities';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as ItemsAPI from '../../catalog/items/items';
import * as ActionsAPI from './actions';
import { ActionMergeParams, Actions, MergeCustomersRequest } from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage customer accounts.
 */
export class Customers extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Creates a customer account. Auto-generates a customer number if one is not
   * provided.
   *
   * @example
   * ```ts
   * const customer = await client.sales.customers.create({
   *   bill_to_address: { name: 'Acme Inc.', country: 'US' },
   *   customer_type_group_id: 'acgp_018e88072d1320808dc979cfac',
   *   default_carrier_id: 'cr_01784fd54c9ba197bb4e42f0e6',
   *   default_payment_term_id:
   *     'pytm_018694d6601ea771cd1b52e890',
   *   default_shipping_term_id:
   *     'shtm_014341ab4bb5bf94d5b6936f86',
   *   name: 'Acme Inc.',
   *   ship_to_address: { name: 'Acme Inc.', country: 'US' },
   *   note: 'Key enterprise account',
   * });
   * ```
   */
  create(params: CustomerCreateParams, options?: RequestOptions): APIPromise<Customer> {
    const { include, ...body } = params;
    return this._client.post('/v1/sales/customers', { query: { include }, body, ...options });
  }

  /**
   * Returns a customer by ID.
   *
   * @example
   * ```ts
   * const customer = await client.sales.customers.retrieve(
   *   'ac_0170df1ac58e4d24c66fc89f5f',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: CustomerRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Customer> {
    return this._client.get(path`/v1/sales/customers/${id}`, { query, ...options });
  }

  /**
   * Partially updates a customer account. When a Stripe integration is active,
   * customer changes are synced to Stripe.
   *
   * @example
   * ```ts
   * const customer = await client.sales.customers.update(
   *   'ac_0170df1ac58e4d24c66fc89f5f',
   *   {
   *     default_carrier_id: 'cr_01784fd54c9ba197bb4e42f0e6',
   *     freight_policy: 'billed_freight',
   *     name: 'Acme Corp Updated',
   *   },
   * );
   * ```
   */
  update(
    id: string,
    params: CustomerUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Customer> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/sales/customers/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of customers for the current account.
   *
   * @example
   * ```ts
   * const listCustomer = await client.sales.customers.list();
   * ```
   */
  list(
    query: CustomerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListCustomer> {
    return this._client.get('/v1/sales/customers', { query, ...options });
  }

  /**
   * Deletes a customer and associated account relations, addresses, and account
   * users.
   *
   * @example
   * ```ts
   * const customer = await client.sales.customers.delete(
   *   'ac_0170df1ac58e4d24c66fc89f5f',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<CustomerDeleteResponse> {
    return this._client.delete(path`/v1/sales/customers/${id}`, options);
  }
}

/**
 * Account user with profile, role, and department.
 */
export interface AccountUser {
  /**
   * Account user ID.
   */
  id: string;

  /**
   * When the account user was created.
   */
  created_at: string;

  /**
   * Department resource.
   */
  department: Department | null;

  /**
   * Email address.
   */
  email: string | null;

  /**
   * Profile image URL.
   */
  image_url: string | null;

  /**
   * When the user last used this account.
   */
  last_used_at: string | null;

  /**
   * Display name.
   */
  name: string | null;

  /**
   * Resource type identifier.
   */
  object: 'account_user';

  /**
   * Role resource.
   */
  role: APIKeysAPI.Role | null;

  /**
   * Account user status.
   */
  status: 'active' | 'disabled' | 'removed';

  /**
   * When the account user was last updated.
   */
  updated_at: string;

  /**
   * Username.
   */
  username: string | null;
}

/**
 * Carrier resource.
 */
export interface Carrier {
  /**
   * Carrier ID.
   */
  id: string;

  /**
   * Account number.
   */
  account_number: string | null;

  /**
   * Carrier code.
   */
  code: 'fedex' | 'ups' | 'usps' | 'will_call' | 'delivery' | 'ltl' | 'ltl1' | 'freight_collect' | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Customer portal visibility.
   */
  customer_portal_visibility: 'visible' | 'hidden';

  /**
   * Soft-delete timestamp.
   */
  deleted_at: string | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'carrier';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * List represents a paginated list of resources.
   */
  service_levels: ListServiceLevel | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Material consumed by a production step.
 */
export interface Consumption {
  /**
   * Consumption ID.
   */
  id: string;

  /**
   * Item is an inventory item (product, material, or part).
   */
  consumed_item: ItemsAPI.Item | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Instructions for how this material is consumed.
   */
  instructions: string | null;

  /**
   * Resource type identifier.
   */
  object: 'consumption';

  /**
   * Value with an associated unit.
   */
  quantity: ItemsAPI.Quantity | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Value with an associated unit.
   */
  waste_quantity: ItemsAPI.Quantity | null;
}

/**
 * Request to create a customer.
 */
export interface CreateCustomerRequest {
  /**
   * Request to create an address.
   */
  bill_to_address: AddressesAPI.AddressInput;

  /**
   * Customer type group ID.
   */
  customer_type_group_id: string;

  /**
   * Default carrier ID.
   */
  default_carrier_id: string;

  /**
   * Default payment term ID.
   */
  default_payment_term_id: string;

  /**
   * Default shipping term ID.
   */
  default_shipping_term_id: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Request to create an address.
   */
  ship_to_address: AddressesAPI.AddressInput;

  /**
   * Carrier billing account number.
   */
  carrier_billing_account?: string;

  /**
   * Carrier billing type.
   */
  carrier_billing_type?: 'sender' | 'third_party';

  /**
   * Commission policy.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * QuantityInput represents a value with an associated unit for create/update
   * requests.
   */
  credit_limit?: QuantityInput;

  /**
   * Price group IDs.
   */
  customer_price_group_ids?: Array<string>;

  /**
   * Default priority code.
   */
  default_priority?: 'low' | 'normal' | 'high';

  /**
   * The ID of the account user to assign as the default sales rep.
   */
  default_sales_rep_id?: string;

  /**
   * Default service level ID.
   */
  default_service_level_id?: string;

  /**
   * EDI status.
   */
  edi_status?: 'enabled' | 'disabled';

  /**
   * Email address.
   */
  email?: string;

  /**
   * Freight policy.
   */
  freight_policy?: 'free_freight' | 'billed_freight';

  /**
   * Note.
   */
  note?: string;

  /**
   * Customer number. Auto-generated if omitted.
   */
  number?: string;

  /**
   * Phone number.
   */
  phone?: string;

  /**
   * Account status code.
   */
  status?: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all';

  /**
   * Website URL.
   */
  url?: string;
}

/**
 * Customer account.
 */
export interface Customer {
  /**
   * Customer ID.
   */
  id: string;

  /**
   * Address with associated geolocation.
   */
  bill_to_address: APIKeysAPI.Address | null;

  /**
   * List represents a paginated list of resources.
   */
  child_accounts: ListCustomer | null;

  /**
   * Commission policy.
   */
  commission_policy: 'commission_applied' | 'commission_exempt';

  /**
   * Customer contact information.
   */
  contact_info: CustomerContactInfo | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Value with an associated unit.
   */
  credit_limit: ItemsAPI.Quantity | null;

  /**
   * Customer default configuration.
   */
  defaults: CustomerDefaults | null;

  /**
   * EDI status.
   */
  edi_status: 'enabled' | 'disabled';

  /**
   * Customer freight and carrier settings.
   */
  freight_preferences: CustomerFreightPreferences | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Note.
   */
  note: string | null;

  /**
   * Customer notification settings.
   */
  notification_preferences: CustomerNotificationPreferences | null;

  /**
   * Customer number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'customer';

  /**
   * Customer account.
   */
  parent_account: Customer | null;

  /**
   * List represents a paginated list of resources.
   */
  price_groups: AccountGroupsAPI.ListAccountGroup | null;

  /**
   * Customer relationship type.
   */
  relationship_type: 'standalone' | 'parent' | 'child';

  /**
   * Address with associated geolocation.
   */
  ship_to_address: APIKeysAPI.Address | null;

  /**
   * Account status code.
   */
  status: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all';

  /**
   * Account group resource.
   */
  type: AccountGroupsAPI.AccountGroup | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Customer contact information.
 */
export interface CustomerContactInfo {
  /**
   * Email address.
   */
  email: string | null;

  /**
   * Resource type identifier.
   */
  object: 'customer_contact_info';

  /**
   * Phone number.
   */
  phone: string | null;

  /**
   * Website URL.
   */
  url: string | null;
}

/**
 * Customer default configuration.
 */
export interface CustomerDefaults {
  /**
   * Resource type identifier.
   */
  object: 'customer_defaults';

  /**
   * Payment term resource.
   */
  payment_term: PaymentTerm | null;

  /**
   * Priority level used by sales orders and picks.
   */
  priority: PrioritiesAPI.Priority | null;

  /**
   * Account user with profile, role, and department.
   */
  sales_rep: AccountUser | null;

  /**
   * ShippingTerm resource.
   */
  shipping_term: ShippingTerm | null;
}

/**
 * Customer freight and carrier settings.
 */
export interface CustomerFreightPreferences {
  /**
   * Carrier billing account number.
   */
  billing_account: string | null;

  /**
   * Carrier billing type.
   */
  billing_type: 'sender' | 'third_party' | null;

  /**
   * Carrier resource.
   */
  carrier: Carrier | null;

  /**
   * Resource type identifier.
   */
  object: 'customer_freight_preferences';

  /**
   * Shipping service level for a carrier.
   */
  service_level: ServiceLevel | null;

  /**
   * Freight policy.
   */
  status: 'free_freight' | 'billed_freight';
}

/**
 * Customer notification settings.
 */
export interface CustomerNotificationPreferences {
  /**
   * Whether invoice emails are accepted.
   */
  accepts_invoice_emails: boolean;

  /**
   * Resource type identifier.
   */
  object: 'customer_notification_preferences';
}

/**
 * Department resource.
 */
export interface Department {
  /**
   * Department ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Location resource.
   */
  location: Location | null;

  /**
   * List represents a paginated list of resources.
   */
  machines: ListMachine | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Notes about the department.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'department';

  /**
   * List represents a paginated list of resources.
   */
  scanning_stations: ListScanningStation | null;

  /**
   * Last update timestamp.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListConsumption {
  /**
   * Resources in this page.
   */
  data: Array<Consumption>;

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
export interface ListCustomer {
  /**
   * Resources in this page.
   */
  data: Array<Customer>;

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
export interface ListLocation {
  /**
   * Resources in this page.
   */
  data: Array<Location>;

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
export interface ListMachine {
  /**
   * Resources in this page.
   */
  data: Array<Machine>;

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
export interface ListProductionStep {
  /**
   * Resources in this page.
   */
  data: Array<ProductionStep>;

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
export interface ListScanningStation {
  /**
   * Resources in this page.
   */
  data: Array<ScanningStation>;

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
export interface ListServiceLevel {
  /**
   * Resources in this page.
   */
  data: Array<ServiceLevel>;

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
 * Location resource.
 */
export interface Location {
  /**
   * Location ID.
   */
  id: string;

  /**
   * List represents a paginated list of resources.
   */
  children: ListLocation | null;

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
  object: 'location';

  /**
   * Location resource.
   */
  parent: Location | null;

  /**
   * Location type code.
   */
  type: 'building' | 'section' | 'aisle' | 'rack' | 'shelf' | 'bin';

  /**
   * Last-updated timestamp.
   */
  updated_at: string;
}

/**
 * Machine within an account.
 */
export interface Machine {
  /**
   * Machine ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Department resource.
   */
  department: Department | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Notes.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'machine';

  /**
   * Serial number.
   */
  serial_number: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Payment term resource.
 */
export interface PaymentTerm {
  /**
   * Payment term ID.
   */
  id: string;

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
  object: 'payment_term';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * Payment term status.
   */
  status: 'active' | 'inactive';

  /**
   * Last-updated timestamp.
   */
  updated_at: string;
}

/**
 * Production output of a production step.
 */
export interface ProductionOutput {
  /**
   * Production ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'production';

  /**
   * Item is an inventory item (product, material, or part).
   */
  produced_item: ItemsAPI.Item | null;

  /**
   * Value with an associated unit.
   */
  quantity: ItemsAPI.Quantity | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Production step with all nested data.
 */
export interface ProductionStep {
  /**
   * Production step ID.
   */
  id: string;

  /**
   * Allowances as a decimal string.
   */
  allowances: string;

  /**
   * List represents a paginated list of resources.
   */
  consumptions: ListConsumption | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Department resource.
   */
  department: Department | null;

  /**
   * List represents a paginated list of resources.
   */
  in_steps: ListProductionStep | null;

  /**
   * Rate resource.
   */
  labor_rate: ItemsAPI.Rate | null;

  /**
   * Rate resource.
   */
  labor_time: ItemsAPI.Rate | null;

  /**
   * Leveling factor as a decimal string.
   */
  leveling_factor: string;

  /**
   * List represents a paginated list of resources.
   */
  machines: ListMachine | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Notes.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'production_step';

  /**
   * List represents a paginated list of resources.
   */
  out_steps: ListProductionStep | null;

  /**
   * Rate resource.
   */
  overhead_rate: ItemsAPI.Rate | null;

  /**
   * Production output of a production step.
   */
  production: ProductionOutput | null;

  /**
   * Scanning station resource.
   */
  scanning_station: ScanningStation | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * QuantityInput represents a value with an associated unit for create/update
 * requests.
 */
export interface QuantityInput {
  /**
   * The unit ID for the value.
   */
  unit_id: string;

  /**
   * The decimal value.
   */
  value: string;
}

/**
 * Scanning station resource.
 */
export interface ScanningStation {
  /**
   * Scanning station ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Department resource.
   */
  department: Department | null;

  /**
   * Label size code.
   */
  label_size: '1x1' | '1x3' | '1x4' | '2x4' | null;

  /**
   * Label type code.
   */
  label_type: 'tag' | 'traveler' | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Notes.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'scanning_station';

  /**
   * Operator requirement behavior for this station.
   */
  operator_requirement: 'none' | 'material_check';

  /**
   * List represents a paginated list of resources.
   */
  production_steps: ListProductionStep | null;

  /**
   * Scanning station type.
   */
  type: 'init_batch' | 'merge_batch' | 'move_batch' | 'split_batch';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Shipping service level for a carrier.
 */
export interface ServiceLevel {
  /**
   * Service level ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Customer portal visibility.
   */
  customer_portal_visibility: 'visible' | 'hidden';

  /**
   * Default service level for the carrier.
   */
  is_default: boolean;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'service_level';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * Service level token.
   */
  service_level_token: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * ShippingTerm resource.
 */
export interface ShippingTerm {
  /**
   * Shipping term ID.
   */
  id: string;

  /**
   * When this shipping term was created.
   */
  created_at: string;

  /**
   * Value with an associated unit.
   */
  flat_rate: ItemsAPI.Quantity | null;

  /**
   * List represents a paginated list of resources.
   */
  free_shipping_service_levels: ListServiceLevel | null;

  /**
   * Value with an associated unit.
   */
  minimum_order_value: ItemsAPI.Quantity | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'shipping_term';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * Shipping term type.
   */
  type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight';

  /**
   * When this shipping term was last updated.
   */
  updated_at: string;
}

/**
 * Request to partially update a customer.
 */
export interface UpdateCustomerRequest {
  /**
   * Bill-to address ID.
   */
  bill_to_address_id?: string | null;

  /**
   * Carrier billing account number.
   */
  carrier_billing_account?: string | null;

  /**
   * Carrier billing type.
   */
  carrier_billing_type?: 'sender' | 'third_party';

  /**
   * Commission policy.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * QuantityInput represents a value with an associated unit for create/update
   * requests.
   */
  credit_limit?: QuantityInput | null;

  /**
   * Price group IDs. Replaces all existing price groups when provided.
   */
  customer_price_group_ids?: Array<string>;

  /**
   * Customer type group ID.
   */
  customer_type_group_id?: string;

  /**
   * Default carrier ID.
   */
  default_carrier_id?: string;

  /**
   * Default payment term ID.
   */
  default_payment_term_id?: string;

  /**
   * Default priority code.
   */
  default_priority?: 'low' | 'normal' | 'high';

  /**
   * The ID of the account user to assign as the default sales rep.
   */
  default_sales_rep_id?: string | null;

  /**
   * Default service level ID.
   */
  default_service_level_id?: string | null;

  /**
   * Default shipping term ID.
   */
  default_shipping_term_id?: string;

  /**
   * EDI status.
   */
  edi_status?: 'enabled' | 'disabled';

  /**
   * Email address. Send null to clear.
   */
  email?: string | null;

  /**
   * Freight policy.
   */
  freight_policy?: 'free_freight' | 'billed_freight';

  /**
   * Customer name.
   */
  name?: string;

  /**
   * Note.
   */
  note?: string | null;

  /**
   * Customer number.
   */
  number?: string;

  /**
   * Phone number. Send null to clear.
   */
  phone?: string | null;

  /**
   * Ship-to address ID.
   */
  ship_to_address_id?: string | null;

  /**
   * Account status code.
   */
  status?: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all';

  /**
   * Website URL. Send null to clear.
   */
  url?: string | null;
}

export interface CustomerDeleteResponse {}

export interface CustomerCreateParams {
  /**
   * Body param: Request to create an address.
   */
  bill_to_address: AddressesAPI.AddressInput;

  /**
   * Body param: Customer type group ID.
   */
  customer_type_group_id: string;

  /**
   * Body param: Default carrier ID.
   */
  default_carrier_id: string;

  /**
   * Body param: Default payment term ID.
   */
  default_payment_term_id: string;

  /**
   * Body param: Default shipping term ID.
   */
  default_shipping_term_id: string;

  /**
   * Body param: Display name.
   */
  name: string;

  /**
   * Body param: Request to create an address.
   */
  ship_to_address: AddressesAPI.AddressInput;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'bill_to_address'
    | 'ship_to_address'
    | 'type'
    | 'parent_account'
    | 'freight_preferences.carrier'
    | 'freight_preferences.service_level'
    | 'defaults.payment_term'
    | 'defaults.shipping_term'
    | 'defaults.sales_rep'
    | 'defaults.priority'
    | 'contact_info'
    | 'freight_preferences'
    | 'defaults'
    | 'notification_preferences'
    | 'price_groups'
    | 'child_accounts'
    | 'credit_limit'
  >;

  /**
   * Body param: Carrier billing account number.
   */
  carrier_billing_account?: string;

  /**
   * Body param: Carrier billing type.
   */
  carrier_billing_type?: 'sender' | 'third_party';

  /**
   * Body param: Commission policy.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * Body param: QuantityInput represents a value with an associated unit for
   * create/update requests.
   */
  credit_limit?: QuantityInput;

  /**
   * Body param: Price group IDs.
   */
  customer_price_group_ids?: Array<string>;

  /**
   * Body param: Default priority code.
   */
  default_priority?: 'low' | 'normal' | 'high';

  /**
   * Body param: The ID of the account user to assign as the default sales rep.
   */
  default_sales_rep_id?: string;

  /**
   * Body param: Default service level ID.
   */
  default_service_level_id?: string;

  /**
   * Body param: EDI status.
   */
  edi_status?: 'enabled' | 'disabled';

  /**
   * Body param: Email address.
   */
  email?: string;

  /**
   * Body param: Freight policy.
   */
  freight_policy?: 'free_freight' | 'billed_freight';

  /**
   * Body param: Note.
   */
  note?: string;

  /**
   * Body param: Customer number. Auto-generated if omitted.
   */
  number?: string;

  /**
   * Body param: Phone number.
   */
  phone?: string;

  /**
   * Body param: Account status code.
   */
  status?: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all';

  /**
   * Body param: Website URL.
   */
  url?: string;
}

export interface CustomerRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'bill_to_address'
    | 'ship_to_address'
    | 'type'
    | 'parent_account'
    | 'freight_preferences.carrier'
    | 'freight_preferences.service_level'
    | 'defaults.payment_term'
    | 'defaults.shipping_term'
    | 'defaults.sales_rep'
    | 'defaults.priority'
    | 'contact_info'
    | 'freight_preferences'
    | 'defaults'
    | 'notification_preferences'
    | 'price_groups'
    | 'child_accounts'
    | 'credit_limit'
  >;
}

export interface CustomerUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'bill_to_address'
    | 'ship_to_address'
    | 'type'
    | 'parent_account'
    | 'freight_preferences.carrier'
    | 'freight_preferences.service_level'
    | 'defaults.payment_term'
    | 'defaults.shipping_term'
    | 'defaults.sales_rep'
    | 'defaults.priority'
    | 'contact_info'
    | 'freight_preferences'
    | 'defaults'
    | 'notification_preferences'
    | 'price_groups'
    | 'child_accounts'
    | 'credit_limit'
  >;

  /**
   * Body param: Bill-to address ID.
   */
  bill_to_address_id?: string | null;

  /**
   * Body param: Carrier billing account number.
   */
  carrier_billing_account?: string | null;

  /**
   * Body param: Carrier billing type.
   */
  carrier_billing_type?: 'sender' | 'third_party';

  /**
   * Body param: Commission policy.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * Body param: QuantityInput represents a value with an associated unit for
   * create/update requests.
   */
  credit_limit?: QuantityInput | null;

  /**
   * Body param: Price group IDs. Replaces all existing price groups when provided.
   */
  customer_price_group_ids?: Array<string>;

  /**
   * Body param: Customer type group ID.
   */
  customer_type_group_id?: string;

  /**
   * Body param: Default carrier ID.
   */
  default_carrier_id?: string;

  /**
   * Body param: Default payment term ID.
   */
  default_payment_term_id?: string;

  /**
   * Body param: Default priority code.
   */
  default_priority?: 'low' | 'normal' | 'high';

  /**
   * Body param: The ID of the account user to assign as the default sales rep.
   */
  default_sales_rep_id?: string | null;

  /**
   * Body param: Default service level ID.
   */
  default_service_level_id?: string | null;

  /**
   * Body param: Default shipping term ID.
   */
  default_shipping_term_id?: string;

  /**
   * Body param: EDI status.
   */
  edi_status?: 'enabled' | 'disabled';

  /**
   * Body param: Email address. Send null to clear.
   */
  email?: string | null;

  /**
   * Body param: Freight policy.
   */
  freight_policy?: 'free_freight' | 'billed_freight';

  /**
   * Body param: Customer name.
   */
  name?: string;

  /**
   * Body param: Note.
   */
  note?: string | null;

  /**
   * Body param: Customer number.
   */
  number?: string;

  /**
   * Body param: Phone number. Send null to clear.
   */
  phone?: string | null;

  /**
   * Body param: Ship-to address ID.
   */
  ship_to_address_id?: string | null;

  /**
   * Body param: Account status code.
   */
  status?: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all';

  /**
   * Body param: Website URL. Send null to clear.
   */
  url?: string | null;
}

export interface CustomerListParams {
  /**
   * Filter by carrier IDs.
   */
  carrier_ids?: Array<string>;

  /**
   * Filter by city.
   */
  city?: string;

  /**
   * Filter by commission status codes.
   */
  commission_status_codes?: Array<'commission_applied' | 'commission_exempt'>;

  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Filter by customer group IDs.
   */
  customer_group_ids?: Array<string>;

  /**
   * Filter by end date (created before).
   */
  end_date?: string;

  /**
   * Filter by freight status codes.
   */
  freight_status_codes?: Array<'free_freight' | 'billed_freight'>;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'bill_to_address'
    | 'ship_to_address'
    | 'type'
    | 'parent_account'
    | 'freight_preferences.carrier'
    | 'freight_preferences.service_level'
    | 'defaults.payment_term'
    | 'defaults.shipping_term'
    | 'defaults.sales_rep'
    | 'defaults.priority'
    | 'contact_info'
    | 'freight_preferences'
    | 'defaults'
    | 'notification_preferences'
    | 'price_groups'
    | 'child_accounts'
    | 'credit_limit'
  >;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Filter by whether the customer has child accounts.
   */
  parent_account_status?: 'parent' | 'non_parent';

  /**
   * Filter by payment term IDs.
   */
  payment_term_ids?: Array<string>;

  /**
   * Filter by postal code.
   */
  postal_code?: string;

  /**
   * Filter by pricing group IDs.
   */
  pricing_group_ids?: Array<string>;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Filter by sales rep IDs.
   */
  sales_rep_ids?: Array<string>;

  /**
   * Filter by service level IDs.
   */
  service_level_ids?: Array<string>;

  /**
   * Filter by shipping term IDs.
   */
  shipping_term_ids?: Array<string>;

  /**
   * Filter by start date (created after).
   */
  start_date?: string;

  /**
   * Filter by state.
   */
  state?: string;

  /**
   * Filter by status codes.
   */
  status_codes?: Array<'normal' | 'preferred' | 'hold_shipment' | 'hold_all'>;
}

Customers.Actions = Actions;

export declare namespace Customers {
  export {
    type AccountUser as AccountUser,
    type Carrier as Carrier,
    type Consumption as Consumption,
    type CreateCustomerRequest as CreateCustomerRequest,
    type Customer as Customer,
    type CustomerContactInfo as CustomerContactInfo,
    type CustomerDefaults as CustomerDefaults,
    type CustomerFreightPreferences as CustomerFreightPreferences,
    type CustomerNotificationPreferences as CustomerNotificationPreferences,
    type Department as Department,
    type ListConsumption as ListConsumption,
    type ListCustomer as ListCustomer,
    type ListLocation as ListLocation,
    type ListMachine as ListMachine,
    type ListProductionStep as ListProductionStep,
    type ListScanningStation as ListScanningStation,
    type ListServiceLevel as ListServiceLevel,
    type Location as Location,
    type Machine as Machine,
    type PaymentTerm as PaymentTerm,
    type ProductionOutput as ProductionOutput,
    type ProductionStep as ProductionStep,
    type QuantityInput as QuantityInput,
    type ScanningStation as ScanningStation,
    type ServiceLevel as ServiceLevel,
    type ShippingTerm as ShippingTerm,
    type UpdateCustomerRequest as UpdateCustomerRequest,
    type CustomerDeleteResponse as CustomerDeleteResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerRetrieveParams as CustomerRetrieveParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
  };

  export {
    Actions as Actions,
    type MergeCustomersRequest as MergeCustomersRequest,
    type ActionMergeParams as ActionMergeParams,
  };
}
