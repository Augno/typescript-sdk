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
   * Creates a customer account with its default addresses, fulfillment settings, and
   * order policies.
   *
   * If `number` is omitted, the next sequential customer number is assigned
   * automatically.
   *
   * @example
   * ```ts
   * const customer = await client.sales.customers.create({
   *   bill_to_address: {
   *     name: 'Acme Inc.',
   *     street_line_1: '123 Main St',
   *     locality: 'New York',
   *     state: 'NY',
   *     postal_code: '10001',
   *     country: 'US',
   *   },
   *   customer_type_group_id: 'acgp_018e88072d1320808dc979cfac',
   *   default_carrier_id: 'cr_01784fd54c9ba197bb4e42f0e6',
   *   default_payment_term_id:
   *     'pytm_018694d6601ea771cd1b52e890',
   *   default_shipping_term_id:
   *     'shtm_014341ab4bb5bf94d5b6936f86',
   *   name: 'Acme Inc.',
   *   ship_to_address: {
   *     name: 'Acme Inc.',
   *     street_line_1: '123 Main St',
   *     locality: 'New York',
   *     state: 'NY',
   *     postal_code: '10001',
   *     country: 'US',
   *   },
   *   note: 'Key enterprise account',
   * });
   * ```
   */
  create(params: CustomerCreateParams, options?: RequestOptions): APIPromise<Customer> {
    const { include, ...body } = params;
    return this._client.post('/v1/sales/customers', { query: { include }, body, ...options });
  }

  /**
   * Partially updates a customer account.
   *
   * Only the fields provided in the request are changed. Nullable fields can be set
   * to `null` to clear their current value.
   *
   * @example
   * ```ts
   * const customer = await client.sales.customers.update(
   *   'ac_0170df1ac58e4d24c66fc89f5f',
   *   {
   *     default_carrier_id: 'cr_01784fd54c9ba197bb4e42f0e6',
   *     freight_policy: 'billed_freight',
   *     name: 'Acme Corp Updated',
   *     note: 'Updated account notes',
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
   * Deletes a customer.
   *
   * Fails with a conflict error if any sales orders still reference the customer;
   * delete or reassign those orders, or merge the customer into another first.
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
 * A user's membership in an account, carrying the account-specific status, role,
 * and department.
 *
 * Profile fields (name, email, username, image URL) live on the expandable `user`
 * sub-resource, which is shared across every account the user belongs to.
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
   * A functional area of a production operation, such as fabrication or packaging,
   * that groups scanning stations and machines.
   */
  department: Department | null;

  /**
   * When the user last accessed this account.
   */
  last_used_at: string | null;

  /**
   * Resource type identifier.
   */
  object: 'account_user';

  /**
   * A named set of permissions that can be assigned to users to control what they
   * can access.
   */
  role: APIKeysAPI.Role | null;

  /**
   * Account user status.
   *
   * - `active`: the user can access the account.
   * - `disabled`: the user is locked out of the account.
   * - `removed`: the user has been removed (soft-deleted) from the account.
   */
  status: 'active' | 'disabled' | 'removed';

  /**
   * When the account user was last updated.
   */
  updated_at: string;

  /**
   * A user's global profile, shared across every account they belong to.
   *
   * Account-specific settings (status, role, department) live on the account user
   * resource that links the user to each account.
   */
  user: User | null;
}

/**
 * A shipping carrier configured for fulfilling orders.
 *
 * Carriers with a Shippo-supported `code` (`fedex`, `ups`, `usps`) are connected
 * through Shippo for live rating and label purchase; other carriers represent
 * self-managed shipping methods such as will call or local delivery.
 */
export interface Carrier {
  /**
   * Carrier ID.
   */
  id: string;

  /**
   * Your account number with this carrier, used to connect UPS and USPS accounts.
   */
  account_number: string | null;

  /**
   * Well-known carrier identifier, set only for recognized carriers and absent for
   * custom ones.
   *
   * - `fedex`, `ups`, `usps`: integrated carriers managed through Shippo (live
   *   rating and labels).
   * - `will_call`: customer picks the order up; no carrier shipment.
   * - `delivery`: delivered by your own vehicles/drivers.
   * - `ltl`, `ltl1`: less-than-truckload freight carriers.
   * - `freight_collect`: freight billed to and arranged by the receiver.
   */
  code: 'fedex' | 'ups' | 'usps' | 'will_call' | 'delivery' | 'ltl' | 'ltl1' | 'freight_collect' | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Whether customers can see and select this carrier at checkout in the customer
   * portal.
   */
  customer_portal_visibility: 'visible' | 'hidden';

  /**
   * Soft-delete timestamp.
   */
  deleted_at: string | null;

  /**
   * Human-readable name for the carrier, unique among your account's carriers.
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
 *
 * Each consumption records one input item and how much of it the step uses.
 * Consumptions also determine the production flow: when another step produces the
 * consumed item, the two steps are linked upstream/downstream automatically.
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
   * Address details used to create an address, either directly or inline on another
   * resource.
   */
  bill_to_address: AddressesAPI.AddressInput;

  /**
   * ID of the account group of type `type_group` that categorizes this customer (for
   * example "Distributors").
   */
  customer_type_group_id: string;

  /**
   * ID of the default carrier for this customer's shipments.
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
   * The customer's business name, as shown throughout the app and on documents.
   */
  name: string;

  /**
   * Address details used to create an address, either directly or inline on another
   * resource.
   */
  ship_to_address: AddressesAPI.AddressInput;

  /**
   * Carrier billing account number charged when `carrier_billing_type` is
   * `third_party`.
   */
  carrier_billing_account?: string;

  /**
   * Who pays the carrier for shipments.
   *
   * - `sender`: the shipper (you) pays the carrier.
   * - `third_party`: a third party is billed, using `carrier_billing_account`.
   */
  carrier_billing_type?: 'sender' | 'third_party';

  /**
   * How sales commission applies to this customer's orders.
   *
   * - `commission_exempt`: this customer's orders are exempt from sales commission.
   * - `commission_applied`: sales commission is calculated on this customer's
   *   orders.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * A value with an associated unit, used in create and update requests.
   */
  credit_limit?: QuantityInput;

  /**
   * IDs of the account groups of type `pricing_group` to assign to this customer,
   * used to apply pricing rules.
   */
  customer_price_group_ids?: Array<string>;

  /**
   * Priority applied to new orders for this customer.
   */
  default_priority?: 'low' | 'normal' | 'high';

  /**
   * The ID of the account user to assign as the default sales rep.
   */
  default_sales_rep_id?: string;

  /**
   * ID of the default carrier service level.
   */
  default_service_level_id?: string;

  /**
   * Whether EDI (Electronic Data Interchange) is enabled for exchanging orders and
   * documents with this customer.
   */
  edi_status?: 'enabled' | 'disabled';

  /**
   * Email address.
   */
  email?: string;

  /**
   * Whether this customer is billed for freight on their orders.
   *
   * - `free_freight`: the customer is not billed for freight.
   * - `billed_freight`: freight is billed to the customer, unless overridden on the
   *   order.
   */
  freight_policy?: 'free_freight' | 'billed_freight';

  /**
   * Free-form note about the customer.
   */
  note?: string;

  /**
   * Human-readable customer number used to identify the account, distinct from the
   * `id`.
   *
   * Must be unique within your account. If omitted, the next sequential number is
   * assigned automatically.
   */
  number?: string;

  /**
   * Phone number.
   */
  phone?: string;

  /**
   * Account status code, controlling whether the customer can transact.
   *
   * - `normal`: standard active account with no restrictions.
   * - `preferred`: active account flagged as preferred.
   * - `hold_shipment`: orders can be placed, but shipments are held.
   * - `hold_all`: all activity is on hold.
   */
  status?: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all';

  /**
   * Website URL.
   */
  url?: string;
}

/**
 * A business you sell to, with its contact details, default fulfillment settings,
 * and order policies.
 */
export interface Customer {
  /**
   * Customer ID.
   */
  id: string;

  /**
   * A saved address that can be used for billing and shipping on sales orders,
   * invoices, and shipments.
   */
  bill_to_address: APIKeysAPI.Address | null;

  /**
   * List represents a paginated list of resources.
   */
  child_accounts: ListCustomer | null;

  /**
   * How sales commission applies to this customer's orders.
   *
   * - `commission_exempt`: this customer's orders are exempt from sales commission.
   * - `commission_applied`: sales commission is calculated on this customer's
   *   orders.
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
   * Whether EDI (Electronic Data Interchange) is enabled for exchanging orders and
   * documents with this customer.
   */
  edi_status: 'enabled' | 'disabled';

  /**
   * Customer freight and carrier settings.
   */
  freight_preferences: CustomerFreightPreferences | null;

  /**
   * The customer's business name, as shown throughout the app and on documents.
   */
  name: string;

  /**
   * Free-form note about the customer.
   */
  note: string | null;

  /**
   * Customer notification settings.
   */
  notification_preferences: CustomerNotificationPreferences | null;

  /**
   * Human-readable customer number used to identify the account, distinct from the
   * `id`.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'customer';

  /**
   * A business you sell to, with its contact details, default fulfillment settings,
   * and order policies.
   */
  parent_account: Customer | null;

  /**
   * List represents a paginated list of resources.
   */
  price_groups: AccountGroupsAPI.ListAccountGroup | null;

  /**
   * The customer's position in the account hierarchy.
   *
   * - `standalone`: no parent or child accounts.
   * - `parent`: has one or more child accounts (see `child_accounts`).
   * - `child`: belongs to a parent account (see `parent_account`).
   */
  relationship_type: 'standalone' | 'parent' | 'child';

  /**
   * A saved address that can be used for billing and shipping on sales orders,
   * invoices, and shipments.
   */
  ship_to_address: APIKeysAPI.Address | null;

  /**
   * Account status code, controlling whether the customer can transact.
   *
   * - `normal`: standard active account with no restrictions.
   * - `preferred`: active account flagged as preferred.
   * - `hold_shipment`: orders can be placed, but shipments are held.
   * - `hold_all`: all activity is on hold.
   */
  status: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all';

  /**
   * A named grouping of customer accounts, used for pricing rules or to categorize
   * accounts.
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
   * A payment term describing when payment is due (e.g. `Net 30`), assignable to
   * customers, sales orders, purchase orders, and invoices.
   */
  payment_term: PaymentTerm | null;

  /**
   * Priority level used to order work on sales orders, purchase orders, and picks.
   */
  priority: PrioritiesAPI.Priority | null;

  /**
   * A user's membership in an account, carrying the account-specific status, role,
   * and department.
   *
   * Profile fields (name, email, username, image URL) live on the expandable `user`
   * sub-resource, which is shared across every account the user belongs to.
   */
  sales_rep: AccountUser | null;

  /**
   * A shipping term defining how freight charges are calculated for an order.
   */
  shipping_term: ShippingTerm | null;
}

/**
 * Customer freight and carrier settings.
 */
export interface CustomerFreightPreferences {
  /**
   * Carrier billing account number charged when `billing_type` is `third_party`.
   */
  billing_account: string | null;

  /**
   * Who pays the carrier for shipments.
   *
   * - `sender`: the shipper (you) pays the carrier.
   * - `third_party`: a third party is billed, using `billing_account`.
   */
  billing_type: 'sender' | 'third_party' | null;

  /**
   * A shipping carrier configured for fulfilling orders.
   *
   * Carriers with a Shippo-supported `code` (`fedex`, `ups`, `usps`) are connected
   * through Shippo for live rating and label purchase; other carriers represent
   * self-managed shipping methods such as will call or local delivery.
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
   * Freight policy applied to this customer's orders.
   *
   * - `free_freight`: the customer is not billed for freight.
   * - `billed_freight`: freight is billed to the customer, unless overridden
   *   elsewhere.
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
 * A functional area of a production operation, such as fabrication or packaging,
 * that groups scanning stations and machines.
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
   * A physical storage location, such as a warehouse, aisle, or bin, arranged in a
   * parent-child hierarchy.
   */
  location: Location | null;

  /**
   * List represents a paginated list of resources.
   */
  machines: ListMachine | null;

  /**
   * Display name of the department.
   *
   * Unique within the account.
   */
  name: string;

  /**
   * Free-form notes about the department.
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
 * A physical storage location, such as a warehouse, aisle, or bin, arranged in a
 * parent-child hierarchy.
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
   * Display name of the location.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'location';

  /**
   * A physical storage location, such as a warehouse, aisle, or bin, arranged in a
   * parent-child hierarchy.
   */
  parent: Location | null;

  /**
   * Location type code, identifying this location's level in the storage hierarchy.
   *
   * - `building`: a building-level location.
   * - `section`: a section within a building.
   * - `aisle`: an aisle within a section.
   * - `rack`: a rack within an aisle.
   * - `shelf`: a shelf within a rack.
   * - `bin`: a bin within a shelf.
   */
  type: LocationTypeCode;

  /**
   * Last-updated timestamp.
   */
  updated_at: string;
}

export type LocationTypeCode = 'building' | 'section' | 'aisle' | 'rack' | 'shelf' | 'bin';

/**
 * A piece of production equipment, such as a CNC router or press, assigned to a
 * department.
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
   * A functional area of a production operation, such as fabrication or packaging,
   * that groups scanning stations and machines.
   */
  department: Department | null;

  /**
   * Display name of the machine.
   *
   * Unique within the account.
   */
  name: string;

  /**
   * Free-form notes about the machine.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'machine';

  /**
   * Serial number of the machine.
   */
  serial_number: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A payment term describing when payment is due (e.g. `Net 30`), assignable to
 * customers, sales orders, purchase orders, and invoices.
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
   * Display name (e.g. `Net 30`).
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
   * Lifecycle status of the payment term.
   */
  status: 'active' | 'inactive';

  /**
   * Last-updated timestamp.
   */
  updated_at: string;
}

/**
 * The output of a production step: the item it produces and the quantity produced.
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
 * A single stage of work in an item's production flow, with its output, material
 * inputs, cost rates, and graph connections.
 */
export interface ProductionStep {
  /**
   * Production step ID.
   */
  id: string;

  /**
   * Allowance correction factor applied to labor time in cost calculations, as a
   * decimal string.
   *
   * Effective labor time per unit is
   * `labor_time × (1 + leveling_factor) × (1 + allowances)`.
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
   * A functional area of a production operation, such as fabrication or packaging,
   * that groups scanning stations and machines.
   */
  department: Department | null;

  /**
   * List represents a paginated list of resources.
   */
  in_steps: ListProductionStep | null;

  /**
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  labor_rate: ItemsAPI.Rate | null;

  /**
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  labor_time: ItemsAPI.Rate | null;

  /**
   * Leveling correction factor applied to labor time in cost calculations, as a
   * decimal string.
   *
   * Effective labor time per unit is
   * `labor_time × (1 + leveling_factor) × (1 + allowances)`.
   */
  leveling_factor: string;

  /**
   * List represents a paginated list of resources.
   */
  machines: ListMachine | null;

  /**
   * Display name of the step.
   */
  name: string;

  /**
   * Free-form notes about the step.
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
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  overhead_rate: ItemsAPI.Rate | null;

  /**
   * The output of a production step: the item it produces and the quantity produced.
   */
  production: ProductionOutput | null;

  /**
   * A station on the production floor where operators scan batches to perform a
   * batch operation, such as initializing or moving a batch.
   */
  scanning_station: ScanningStation | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A value with an associated unit, used in create and update requests.
 */
export interface QuantityInput {
  /**
   * ID of the unit of measure for the value.
   */
  unit_id: string;

  /**
   * Decimal value, as a string to preserve precision.
   */
  value: string;
}

/**
 * A station on the production floor where operators scan batches to perform a
 * batch operation, such as initializing or moving a batch.
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
   * A functional area of a production operation, such as fabrication or packaging,
   * that groups scanning stations and machines.
   */
  department: Department | null;

  /**
   * Size of the labels printed at this station, given as width-by-height (for
   * example, `1x1`).
   */
  label_size: '1x1' | '1x3' | '1x4' | '2x4' | null;

  /**
   * Type of label printed at this station.
   *
   * - `tag`: a label attached to the physical product.
   * - `traveler`: a routing sheet that accompanies the batch through every
   *   production step.
   */
  label_type: 'tag' | 'traveler' | null;

  /**
   * Display name of the scanning station.
   *
   * Unique within the account.
   */
  name: string;

  /**
   * Free-form notes about the scanning station.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'scanning_station';

  /**
   * Whether operators must perform a material check at this station.
   *
   * - `none`: no additional operator check is required.
   * - `material_check`: a material check is expected before the operation.
   */
  operator_requirement: 'none' | 'material_check';

  /**
   * List represents a paginated list of resources.
   */
  production_steps: ListProductionStep | null;

  /**
   * Scanning station type, determining which batch operation the station performs.
   *
   * - `init_batch`: initializes a new batch.
   * - `merge_batch`: merges multiple batches into one.
   * - `move_batch`: moves a batch to another location or step.
   * - `split_batch`: splits a batch into multiple batches.
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
   * Whether customers can see and select this service level at checkout in the
   * customer portal.
   */
  customer_portal_visibility: 'visible' | 'hidden';

  /**
   * Whether this is the carrier's default service level, pre-selected when the
   * carrier is chosen.
   *
   * Each carrier has at most one default; setting a new default clears the previous
   * one.
   */
  is_default: boolean;

  /**
   * Human-readable name for the service level, shown to customers at checkout when
   * the service level is visible.
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
   * Carrier-specific code identifying this service level (e.g. `fedex_ground`,
   * `ups_next_day_air`).
   *
   * Values are carrier-defined, so any non-empty string is accepted.
   */
  service_level_token: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A shipping term defining how freight charges are calculated for an order.
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
   * Human-readable name for the shipping term, used to identify it when assigning
   * shipping terms to customers and orders.
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
   * Freight pricing model applied by this shipping term.
   *
   * - `free_freight`: no shipping cost to the buyer.
   * - `flat_rate_freight`: a fixed shipping cost regardless of order details (see
   *   `flat_rate`).
   * - `carrier_rate_freight`: shipping cost is determined by the carrier's quoted
   *   rate.
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
   * ID of an existing address to use as the default billing address.
   */
  bill_to_address_id?: string | null;

  /**
   * Carrier billing account number charged when `carrier_billing_type` is
   * `third_party`.
   */
  carrier_billing_account?: string | null;

  /**
   * Who pays the carrier for shipments.
   *
   * - `sender`: the shipper (you) pays the carrier.
   * - `third_party`: a third party is billed, using `carrier_billing_account`.
   */
  carrier_billing_type?: 'sender' | 'third_party';

  /**
   * How sales commission applies to this customer's orders.
   *
   * - `commission_exempt`: this customer's orders are exempt from sales commission.
   * - `commission_applied`: sales commission is calculated on this customer's
   *   orders.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * A value with an associated unit, used in create and update requests.
   */
  credit_limit?: QuantityInput | null;

  /**
   * IDs of the account groups of type `pricing_group` to assign to this customer,
   * used to apply pricing rules.
   *
   * When provided, replaces the customer's full set of existing price groups.
   */
  customer_price_group_ids?: Array<string>;

  /**
   * ID of the account group of type `type_group` that categorizes this customer (for
   * example "Distributors").
   */
  customer_type_group_id?: string;

  /**
   * ID of the default carrier for this customer's shipments.
   */
  default_carrier_id?: string;

  /**
   * Default payment term ID.
   */
  default_payment_term_id?: string;

  /**
   * Priority applied to new orders for this customer.
   */
  default_priority?: 'low' | 'normal' | 'high';

  /**
   * The ID of the account user to assign as the default sales rep.
   */
  default_sales_rep_id?: string | null;

  /**
   * ID of the default carrier service level.
   */
  default_service_level_id?: string | null;

  /**
   * Default shipping term ID.
   */
  default_shipping_term_id?: string;

  /**
   * Whether EDI (Electronic Data Interchange) is enabled for exchanging orders and
   * documents with this customer.
   */
  edi_status?: 'enabled' | 'disabled';

  /**
   * Email address.
   */
  email?: string | null;

  /**
   * Whether this customer is billed for freight on their orders.
   *
   * - `free_freight`: the customer is not billed for freight.
   * - `billed_freight`: freight is billed to the customer, unless overridden on the
   *   order.
   */
  freight_policy?: 'free_freight' | 'billed_freight';

  /**
   * The customer's business name, as shown throughout the app and on documents.
   */
  name?: string;

  /**
   * Free-form note about the customer.
   */
  note?: string | null;

  /**
   * Human-readable customer number used to identify the account, distinct from the
   * `id`.
   *
   * Must be unique within your account.
   */
  number?: string;

  /**
   * Phone number.
   */
  phone?: string | null;

  /**
   * ID of an existing address to use as the default shipping address.
   */
  ship_to_address_id?: string | null;

  /**
   * Account status code, controlling whether the customer can transact.
   *
   * - `normal`: standard active account with no restrictions.
   * - `preferred`: active account flagged as preferred.
   * - `hold_shipment`: orders can be placed, but shipments are held.
   * - `hold_all`: all activity is on hold.
   */
  status?: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all';

  /**
   * Website URL.
   */
  url?: string | null;
}

/**
 * A user's global profile, shared across every account they belong to.
 *
 * Account-specific settings (status, role, department) live on the account user
 * resource that links the user to each account.
 */
export interface User {
  /**
   * User ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Email address.
   */
  email: string | null;

  /**
   * When the user verified their email address.
   */
  email_verified_at: string | null;

  /**
   * URL of the user's profile image.
   */
  image_url: string | null;

  /**
   * User's full display name.
   */
  name: string | null;

  /**
   * Resource type identifier.
   */
  object: 'user';

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Username.
   */
  username: string | null;
}

export interface CustomerDeleteResponse {}

export interface CustomerListParams {
  /**
   * Filter by default carrier IDs.
   */
  carrier_ids?: Array<string>;

  /**
   * Filter to customers with any address in this city (exact match).
   *
   * When combined with `state` or `postal_code`, a single address must match all
   * provided values.
   */
  city?: string;

  /**
   * Filter by commission policy.
   */
  commission_status_codes?: Array<'commission_applied' | 'commission_exempt'>;

  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Filter by customer type group IDs (the account group of type `type_group`
   * returned in the customer's `type` field).
   */
  customer_group_ids?: Array<string>;

  /**
   * Filter to customers created at or before this timestamp (inclusive).
   */
  end_date?: string;

  /**
   * Filter by freight policy.
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
    | 'defaults.sales_rep.user'
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
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Filter by whether the customer has child accounts.
   */
  parent_account_status?: 'parent' | 'non_parent';

  /**
   * Filter by default payment term IDs.
   */
  payment_term_ids?: Array<string>;

  /**
   * Filter to customers with any address in this postal code (exact match).
   */
  postal_code?: string;

  /**
   * Filter to customers that belong to any of these pricing groups.
   */
  pricing_group_ids?: Array<string>;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;

  /**
   * Filter by default sales rep IDs.
   */
  sales_rep_ids?: Array<string>;

  /**
   * Filter by default service level IDs.
   */
  service_level_ids?: Array<string>;

  /**
   * Filter by default shipping term IDs.
   */
  shipping_term_ids?: Array<string>;

  /**
   * Filter to customers created at or after this timestamp (inclusive).
   */
  start_date?: string;

  /**
   * Filter to customers with any address in this state (exact match).
   */
  state?: string;

  /**
   * Filter by account status codes.
   */
  status_codes?: Array<'normal' | 'preferred' | 'hold_shipment' | 'hold_all'>;
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
    | 'defaults.sales_rep.user'
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

export interface CustomerCreateParams {
  /**
   * Body param: Address details used to create an address, either directly or inline
   * on another resource.
   */
  bill_to_address: AddressesAPI.AddressInput;

  /**
   * Body param: ID of the account group of type `type_group` that categorizes this
   * customer (for example "Distributors").
   */
  customer_type_group_id: string;

  /**
   * Body param: ID of the default carrier for this customer's shipments.
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
   * Body param: The customer's business name, as shown throughout the app and on
   * documents.
   */
  name: string;

  /**
   * Body param: Address details used to create an address, either directly or inline
   * on another resource.
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
    | 'defaults.sales_rep.user'
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
   * Body param: Carrier billing account number charged when `carrier_billing_type`
   * is `third_party`.
   */
  carrier_billing_account?: string;

  /**
   * Body param: Who pays the carrier for shipments.
   *
   * - `sender`: the shipper (you) pays the carrier.
   * - `third_party`: a third party is billed, using `carrier_billing_account`.
   */
  carrier_billing_type?: 'sender' | 'third_party';

  /**
   * Body param: How sales commission applies to this customer's orders.
   *
   * - `commission_exempt`: this customer's orders are exempt from sales commission.
   * - `commission_applied`: sales commission is calculated on this customer's
   *   orders.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * Body param: A value with an associated unit, used in create and update requests.
   */
  credit_limit?: QuantityInput;

  /**
   * Body param: IDs of the account groups of type `pricing_group` to assign to this
   * customer, used to apply pricing rules.
   */
  customer_price_group_ids?: Array<string>;

  /**
   * Body param: Priority applied to new orders for this customer.
   */
  default_priority?: 'low' | 'normal' | 'high';

  /**
   * Body param: The ID of the account user to assign as the default sales rep.
   */
  default_sales_rep_id?: string;

  /**
   * Body param: ID of the default carrier service level.
   */
  default_service_level_id?: string;

  /**
   * Body param: Whether EDI (Electronic Data Interchange) is enabled for exchanging
   * orders and documents with this customer.
   */
  edi_status?: 'enabled' | 'disabled';

  /**
   * Body param: Email address.
   */
  email?: string;

  /**
   * Body param: Whether this customer is billed for freight on their orders.
   *
   * - `free_freight`: the customer is not billed for freight.
   * - `billed_freight`: freight is billed to the customer, unless overridden on the
   *   order.
   */
  freight_policy?: 'free_freight' | 'billed_freight';

  /**
   * Body param: Free-form note about the customer.
   */
  note?: string;

  /**
   * Body param: Human-readable customer number used to identify the account,
   * distinct from the `id`.
   *
   * Must be unique within your account. If omitted, the next sequential number is
   * assigned automatically.
   */
  number?: string;

  /**
   * Body param: Phone number.
   */
  phone?: string;

  /**
   * Body param: Account status code, controlling whether the customer can transact.
   *
   * - `normal`: standard active account with no restrictions.
   * - `preferred`: active account flagged as preferred.
   * - `hold_shipment`: orders can be placed, but shipments are held.
   * - `hold_all`: all activity is on hold.
   */
  status?: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all';

  /**
   * Body param: Website URL.
   */
  url?: string;
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
    | 'defaults.sales_rep.user'
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
   * Body param: ID of an existing address to use as the default billing address.
   */
  bill_to_address_id?: string | null;

  /**
   * Body param: Carrier billing account number charged when `carrier_billing_type`
   * is `third_party`.
   */
  carrier_billing_account?: string | null;

  /**
   * Body param: Who pays the carrier for shipments.
   *
   * - `sender`: the shipper (you) pays the carrier.
   * - `third_party`: a third party is billed, using `carrier_billing_account`.
   */
  carrier_billing_type?: 'sender' | 'third_party';

  /**
   * Body param: How sales commission applies to this customer's orders.
   *
   * - `commission_exempt`: this customer's orders are exempt from sales commission.
   * - `commission_applied`: sales commission is calculated on this customer's
   *   orders.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * Body param: A value with an associated unit, used in create and update requests.
   */
  credit_limit?: QuantityInput | null;

  /**
   * Body param: IDs of the account groups of type `pricing_group` to assign to this
   * customer, used to apply pricing rules.
   *
   * When provided, replaces the customer's full set of existing price groups.
   */
  customer_price_group_ids?: Array<string>;

  /**
   * Body param: ID of the account group of type `type_group` that categorizes this
   * customer (for example "Distributors").
   */
  customer_type_group_id?: string;

  /**
   * Body param: ID of the default carrier for this customer's shipments.
   */
  default_carrier_id?: string;

  /**
   * Body param: Default payment term ID.
   */
  default_payment_term_id?: string;

  /**
   * Body param: Priority applied to new orders for this customer.
   */
  default_priority?: 'low' | 'normal' | 'high';

  /**
   * Body param: The ID of the account user to assign as the default sales rep.
   */
  default_sales_rep_id?: string | null;

  /**
   * Body param: ID of the default carrier service level.
   */
  default_service_level_id?: string | null;

  /**
   * Body param: Default shipping term ID.
   */
  default_shipping_term_id?: string;

  /**
   * Body param: Whether EDI (Electronic Data Interchange) is enabled for exchanging
   * orders and documents with this customer.
   */
  edi_status?: 'enabled' | 'disabled';

  /**
   * Body param: Email address.
   */
  email?: string | null;

  /**
   * Body param: Whether this customer is billed for freight on their orders.
   *
   * - `free_freight`: the customer is not billed for freight.
   * - `billed_freight`: freight is billed to the customer, unless overridden on the
   *   order.
   */
  freight_policy?: 'free_freight' | 'billed_freight';

  /**
   * Body param: The customer's business name, as shown throughout the app and on
   * documents.
   */
  name?: string;

  /**
   * Body param: Free-form note about the customer.
   */
  note?: string | null;

  /**
   * Body param: Human-readable customer number used to identify the account,
   * distinct from the `id`.
   *
   * Must be unique within your account.
   */
  number?: string;

  /**
   * Body param: Phone number.
   */
  phone?: string | null;

  /**
   * Body param: ID of an existing address to use as the default shipping address.
   */
  ship_to_address_id?: string | null;

  /**
   * Body param: Account status code, controlling whether the customer can transact.
   *
   * - `normal`: standard active account with no restrictions.
   * - `preferred`: active account flagged as preferred.
   * - `hold_shipment`: orders can be placed, but shipments are held.
   * - `hold_all`: all activity is on hold.
   */
  status?: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all';

  /**
   * Body param: Website URL.
   */
  url?: string | null;
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
    type LocationTypeCode as LocationTypeCode,
    type Machine as Machine,
    type PaymentTerm as PaymentTerm,
    type ProductionOutput as ProductionOutput,
    type ProductionStep as ProductionStep,
    type QuantityInput as QuantityInput,
    type ScanningStation as ScanningStation,
    type ServiceLevel as ServiceLevel,
    type ShippingTerm as ShippingTerm,
    type UpdateCustomerRequest as UpdateCustomerRequest,
    type User as User,
    type CustomerDeleteResponse as CustomerDeleteResponse,
    type CustomerListParams as CustomerListParams,
    type CustomerRetrieveParams as CustomerRetrieveParams,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
  };

  export {
    Actions as Actions,
    type MergeCustomersRequest as MergeCustomersRequest,
    type ActionMergeParams as ActionMergeParams,
  };
}
