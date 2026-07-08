// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MaterialsAPI from '../catalog/materials';
import * as ProductsAPI from '../catalog/products';
import * as RequestLogsAPI from '../core/request-logs';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import * as ItemsAPI from '../catalog/items/items';
import * as CustomersAPI from './customers/customers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class SalesOrders extends APIResource {
  /**
   * Returns a paginated list of sales order statuses.
   *
   * @example
   * ```ts
   * const listSalesOrderStatus =
   *   await client.sales.salesOrders.retrieveStatuses();
   * ```
   */
  retrieveStatuses(
    query: SalesOrderRetrieveStatusesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListSalesOrderStatus> {
    return this._client.get('/v1/sales/sales-orders/statuses', { query, ...options });
  }

  /**
   * Returns a paginated list of sales orders for the current account.
   *
   * This endpoint requires the permissions: `sales_orders:read`, `customers:read`,
   * `suppliers:read`.
   *
   * @example
   * ```ts
   * const listSalesOrder =
   *   await client.sales.salesOrders.list();
   * ```
   */
  list(
    query: SalesOrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListSalesOrder> {
    return this._client.get('/v1/sales/sales-orders', { query, ...options });
  }

  /**
   * Creates a sales order in `estimate` status.
   *
   * The order number is assigned automatically, and a sales rep is auto-assigned
   * when none is provided. A shipping line is always added to the order, plus a
   * discount line when an order discount is supplied.
   *
   * This endpoint requires the permission: `sales_orders:create`.
   *
   * @example
   * ```ts
   * const salesOrder = await client.sales.salesOrders.create({
   *   bill_to_address_id: 'ad_012c2e4aeeb20f56c1a3d06cc7',
   *   buyer_account_id: 'ac_0170df1ac58e4d24c66fc89f5f',
   *   lines: [
   *     {
   *       product_id: 'pd_013c29ab3f1518d0004094c316',
   *       quantity: { ... },
   *     },
   *   ],
   *   priority_code: 'normal',
   *   ship_to_address_id: 'ad_012c2e4aeeb20f56c1a3d06cc7',
   *   acknowledgement_email_contacts: [
   *     { account_user_id: 'acus_01ea9983ddb41dacc44ecf997c' },
   *   ],
   *   carrier_billing_account_number: '123456789',
   *   carrier_billing_type: 'sender',
   *   carrier_id: 'cr_01784fd54c9ba197bb4e42f0e6',
   *   customer_purchase_order_number: 'PO-88231',
   *   invoice_email_contacts: [{ account_user_id: 'acus_01ea9983ddb41dacc44ecf997c' }],
   *   note: 'Rush order for trade show',
   *   order_discount_id: 'ords_01121c5e2f6937a6b896daad3a',
   *   payment_term_id: 'pytm_018694d6601ea771cd1b52e890',
   *   promised_at: '2026-05-20T00:00:00Z',
   *   sales_rep_id: 'acus_01ea9983ddb41dacc44ecf997c',
   *   service_level_id: 'crop_01cfaf03f104e90ef9680e2a30',
   *   shipping_term_id: 'shtm_014341ab4bb5bf94d5b6936f86',
   * });
   * ```
   */
  create(params: SalesOrderCreateParams, options?: RequestOptions): APIPromise<SalesOrder> {
    const { include, ...body } = params;
    return this._client.post('/v1/sales/sales-orders', { query: { include }, body, ...options });
  }
}

/**
 * Line item input for a create sales order request.
 *
 * The item, unit cost, and (unless an internal user supplies a `unit_price`
 * override) the unit price are resolved server-side from the product. The quantity
 * unit must belong to the product's unit group.
 */
export interface CreateSalesOrderLineInput {
  /**
   * ID of the product being ordered.
   */
  product_id: string;

  /**
   * A value with an associated unit, used in create and update requests.
   */
  quantity: CustomersAPI.QuantityInput;

  /**
   * Description recorded on the line.
   *
   * Defaults to the product's description when omitted.
   */
  product_description?: string;

  /**
   * SKU recorded on the line.
   *
   * Defaults to the product's SKU when omitted.
   */
  product_sku?: string;

  /**
   * A rate value with its numerator and denominator units, used in create and update
   * requests.
   */
  unit_price?: MaterialsAPI.RateInput;
}

/**
 * Request to create a sales order.
 */
export interface CreateSalesOrderRequest {
  /**
   * Bill-to address ID.
   *
   * Must reference an existing address on the order's owner or buyer account.
   */
  bill_to_address_id: string;

  /**
   * ID of the customer account the order is for.
   */
  buyer_account_id: string;

  /**
   * Order lines to create.
   */
  lines: Array<CreateSalesOrderLineInput>;

  /**
   * Fulfillment priority used to rank the order on the shop floor.
   */
  priority_code: string;

  /**
   * Ship-to address ID.
   *
   * Must reference an existing address on the order's owner or buyer account.
   */
  ship_to_address_id: string;

  /**
   * Account users who should receive order acknowledgement emails.
   */
  acknowledgement_email_contacts?: Array<SalesOrderEmailContactInput>;

  /**
   * Carrier billing account number.
   */
  carrier_billing_account_number?: string;

  /**
   * Who is billed for freight.
   *
   * - `sender`: the sender pays for shipping.
   * - `third_party`: a third party pays for shipping, using the carrier billing
   *   account number.
   */
  carrier_billing_type?: 'sender' | 'third_party';

  /**
   * Carrier ID.
   */
  carrier_id?: string;

  /**
   * The customer's own purchase order number, for cross-referencing.
   *
   * Must be unique among your orders for this customer.
   */
  customer_purchase_order_number?: string;

  /**
   * Account users who should receive invoice emails.
   */
  invoice_email_contacts?: Array<SalesOrderEmailContactInput>;

  /**
   * Order note.
   */
  note?: string;

  /**
   * Order discount ID.
   *
   * When supplied, a discount line is added to the order automatically.
   */
  order_discount_id?: string;

  /**
   * Payment term ID.
   */
  payment_term_id?: string;

  /**
   * Promised delivery date.
   */
  promised_at?: string;

  /**
   * Sales rep ID.
   *
   * When omitted, a rep is assigned automatically: the customer's default sales rep
   * first, then the sales territory matching the ship-to postal code, then the
   * ship-to state.
   */
  sales_rep_id?: string;

  /**
   * Service level ID.
   */
  service_level_id?: string;

  /**
   * Shipping term ID.
   */
  shipping_term_id?: string;
}

/**
 * CreatedBy describes who created a resource and their relationship to the account
 * that owns it.
 *
 * It is resolved from the resource's create audit event.
 */
export interface CreatedBy {
  /**
   * Reference to an actor — the user, API key, agent, or group identity associated
   * with an action.
   */
  actor: RequestLogsAPI.Actor | null;

  /**
   * Resource type identifier.
   */
  object: 'created_by';

  /**
   * The creator's relationship to the account that owns the resource.
   *
   * - `internal`: created by a user of the owning account.
   * - `customer`: created by a customer of the owning account.
   * - `system`: created automatically with no human actor (e.g. an EDI import).
   */
  relation: 'internal' | 'customer' | 'system';
}

/**
 * Freight describes the carrier selection and freight billing for a record.
 *
 * It is a generic, reusable sub-resource shared by anything that carries shipping
 * configuration — for example a sales order's chosen freight, or a customer's
 * default freight preferences.
 */
export interface Freight {
  /**
   * Carrier account number to bill, used when `billing_type` is `third_party`.
   */
  billing_account_number: string | null;

  /**
   * Which party the carrier bills for the shipment.
   *
   * - `sender`: the shipper (your account) is billed.
   * - `third_party`: a third party is billed via `billing_account_number`.
   */
  billing_type: 'sender' | 'third_party' | null;

  /**
   * A shipping carrier configured for fulfilling orders.
   *
   * Carriers with a Shippo-supported `code` (`fedex`, `ups`, `usps`) are connected
   * through Shippo for live rating and label purchase; other carriers represent
   * self-managed shipping methods such as will call or local delivery.
   */
  carrier: CustomersAPI.Carrier | null;

  /**
   * Resource type identifier.
   */
  object: 'freight';

  /**
   * How freight is arranged and billed for the record.
   *
   * Populated where a freight policy applies, such as a customer's default
   * preferences.
   *
   * - `free_freight`: no shipping cost to the buyer.
   * - `billed_freight`: freight is billed to the buyer.
   */
  policy: 'free_freight' | 'billed_freight' | null;

  /**
   * Shipping service level for a carrier.
   */
  service_level: CustomersAPI.ServiceLevel | null;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListRecord {
  /**
   * Resources in this page.
   */
  data: Array<Record>;

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
export interface ListSalesOrder {
  /**
   * Resources in this page.
   */
  data: Array<SalesOrder>;

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
export interface ListSalesOrderLine {
  /**
   * Resources in this page.
   */
  data: Array<SalesOrderLine>;

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
export interface ListSalesOrderStatus {
  /**
   * Resources in this page.
   */
  data: Array<SalesOrderStatus>;

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
 * OrderContact groups a sales order's email recipients by notification purpose.
 */
export interface OrderContact {
  /**
   * Email addresses that receive order acknowledgements for this order.
   */
  acknowledgement: Array<string>;

  /**
   * Email addresses that receive invoices for this order.
   */
  invoice: Array<string>;

  /**
   * Resource type identifier.
   */
  object: 'order_contact';
}

/**
 * A discount code that can be applied to a sales order.
 *
 * An order discount reduces the order total by either a percentage or a fixed
 * amount, depending on `discount_type`.
 */
export interface OrderDiscount {
  /**
   * Order discount ID.
   */
  id: string;

  /**
   * Fixed amount off as a decimal string.
   *
   * Applies when `discount_type` is `amount`; otherwise `0`.
   */
  amount: string;

  /**
   * The code entered to apply this discount to an order.
   *
   * Must be unique within the account.
   */
  code: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * How the discount is calculated, determining whether `percentage` or `amount` is
   * used.
   *
   * - `percentage`: the discount is a percent off, taken from `percentage`.
   * - `amount`: the discount is a fixed amount off, taken from `amount`.
   */
  discount_type: 'percentage' | 'amount';

  /**
   * Display name of the discount.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'order_discount';

  /**
   * Number of orders currently using this discount.
   */
  order_count: number;

  /**
   * Percent off as a decimal string (e.g. `10` for 10%).
   *
   * Applies when `discount_type` is `percentage`; otherwise `0`.
   */
  percentage: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Record is a lightweight reference to a business record — a sales order, purchase
 * order, pick, shipment, production run, invoice, etc.
 *
 * Like Actor and Entity, it carries just enough to identify and label the
 * referenced record without embedding its full resource. The optional status and
 * metadata fields hold type-specific detail that varies by the kind of record
 * referenced.
 */
export interface Record {
  /**
   * Unique identifier for the record.
   */
  id: string;

  /**
   * Type-specific metadata.
   *
   * The set of keys varies by record type.
   */
  metadata: { [key: string]: string };

  /**
   * Human-readable record number, when the record has one.
   */
  number: string | null;

  /**
   * Resource type identifier.
   */
  object: 'record';

  /**
   * Type-specific status code, when applicable.
   */
  status: string | null;

  /**
   * The kind of business record referenced.
   *
   * Determines how to resolve the record and which `status` and `metadata` keys may
   * appear.
   *
   * - `sales_order`: a customer order.
   * - `purchase_order`: an order placed with a supplier.
   * - `receiving_order`: an inbound order being received into inventory.
   * - `pick`: a warehouse pick task.
   * - `shipment`: an outbound shipment.
   * - `delivery`: a delivery of one or more shipments to a destination.
   * - `production_run`: a manufacturing production run.
   * - `invoice`: a customer invoice.
   * - `transaction`: a payment or financial transaction.
   * - `settlement`: a settlement reconciling transactions against invoices.
   */
  type:
    | 'sales_order'
    | 'purchase_order'
    | 'receiving_order'
    | 'pick'
    | 'shipment'
    | 'delivery'
    | 'production_run'
    | 'invoice'
    | 'transaction'
    | 'settlement';
}

/**
 * Full sales order resource.
 */
export interface SalesOrder {
  /**
   * Sales order ID.
   */
  id: string;

  /**
   * Whether an order acknowledgment has been sent to the customer.
   */
  acknowledgment_status: 'not_sent' | 'sent';

  /**
   * A saved address that can be used for billing and shipping on sales orders,
   * invoices, and shipments.
   */
  bill_to_address: APIKeysAPI.Address | null;

  /**
   * When the order was fulfilled and closed.
   */
  completed_at: string | null;

  /**
   * OrderContact groups a sales order's email recipients by notification purpose.
   */
  contacts: OrderContact | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * CreatedBy describes who created a resource and their relationship to the account
   * that owns it.
   *
   * It is resolved from the resource's create audit event.
   */
  created_by: CreatedBy | null;

  /**
   * A business you sell to, with its contact details, default fulfillment settings,
   * and order policies.
   */
  customer: CustomersAPI.Customer | null;

  /**
   * The customer's own purchase order number, for cross-referencing.
   *
   * Unique among this customer's orders.
   */
  customer_purchase_order_number: string | null;

  /**
   * When this estimate expires, if an expiration was set.
   */
  expired_at: string | null;

  /**
   * When the first shipment against this order went out.
   */
  first_ship_at: string | null;

  /**
   * Freight describes the carrier selection and freight billing for a record.
   *
   * It is a generic, reusable sub-resource shared by anything that carries shipping
   * configuration — for example a sales order's chosen freight, or a customer's
   * default freight preferences.
   */
  freight: Freight | null;

  /**
   * When the order was issued (moved out of `estimate`).
   */
  issued_at: string | null;

  /**
   * Number of order lines on this order, returned even when the `lines` list itself
   * is not expanded.
   */
  line_count: number;

  /**
   * List represents a paginated list of resources.
   */
  lines: ListSalesOrderLine | null;

  /**
   * Order note.
   */
  note: string | null;

  /**
   * Human-readable order number, e.g. `SO-001`.
   *
   * Assigned automatically when the order is created; unique within your account.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'sales_order';

  /**
   * A discount code that can be applied to a sales order.
   *
   * An order discount reduces the order total by either a percentage or a fixed
   * amount, depending on `discount_type`.
   */
  order_discount: OrderDiscount | null;

  /**
   * Stripe payment intent IDs recorded against this order.
   */
  payment_intent_ids: Array<string>;

  /**
   * Payment state of the order, derived from settlement allocations, invoices, and
   * Stripe payments.
   */
  payment_status: 'unpaid' | 'partially_paid' | 'paid';

  /**
   * A payment term describing when payment is due (e.g. `Net 30`), assignable to
   * customers, sales orders, purchase orders, and invoices.
   */
  payment_term: CustomersAPI.PaymentTerm | null;

  /**
   * Fulfillment priority, used to rank orders on the shop floor.
   */
  priority: 'low' | 'normal' | 'high';

  /**
   * Date promised to the customer for delivery, if one was committed.
   */
  promised_at: string | null;

  /**
   * SalesOrderRelated groups the records related to a sales order.
   *
   * The members are individually expandable (e.g. include[]=related.pick). The group
   * is null unless at least one of its members is expanded.
   */
  related: SalesOrderRelated | null;

  /**
   * Reference to an actor — the user, API key, agent, or group identity associated
   * with an action.
   */
  sales_rep: RequestLogsAPI.Actor | null;

  /**
   * A saved address that can be used for billing and shipping on sales orders,
   * invoices, and shipments.
   */
  ship_to_address: APIKeysAPI.Address | null;

  /**
   * A shipping term defining how freight charges are calculated for an order.
   */
  shipping_term: CustomersAPI.ShippingTerm | null;

  /**
   * Order lifecycle status.
   *
   * - `estimate`: a draft quote that has not yet been committed; not counted as a
   *   real order.
   * - `issued`: the order has been issued and is being fulfilled.
   * - `fulfilled`: the order has been completed and closed.
   *
   * Status changes are made through the issue, unissue, close, and reopen action
   * endpoints rather than by updating this field.
   */
  status: 'estimate' | 'issued' | 'fulfilled';

  /**
   * SalesOrderTotals holds the derived monetary totals for a sales order or one of
   * its lines, following the lifecycle ordered -> packed -> invoiced.
   */
  totals: SalesOrderTotals | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * SalesOrderEmailContactInput represents an account user subscribed to a
 * sales-order email notification type.
 */
export interface SalesOrderEmailContactInput {
  /**
   * Account user ID to receive the notification.
   */
  account_user_id: string;
}

/**
 * Full sales order line resource.
 */
export interface SalesOrderLine {
  /**
   * Sales order line ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Position of the line on the order.
   *
   * Assigned automatically in sequence, starting at `1`.
   */
  line_item_number: number;

  /**
   * Resource type identifier.
   */
  object: 'sales_order_line';

  /**
   * Product pairs an inventory item with how it is sold: its product type, optional
   * product line, and customer portal visibility.
   */
  product: ProductsAPI.Product | null;

  /**
   * Product description.
   */
  product_description: string | null;

  /**
   * Product SKU.
   */
  product_sku: string;

  /**
   * Value with an associated unit.
   */
  quantity_ordered: ItemsAPI.Quantity | null;

  /**
   * SalesOrderTotals holds the derived monetary totals for a sales order or one of
   * its lines, following the lifecycle ordered -> packed -> invoiced.
   */
  totals: SalesOrderTotals | null;

  /**
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  unit_cost: ItemsAPI.Rate | null;

  /**
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  unit_price: ItemsAPI.Rate | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * SalesOrderRelated groups the records related to a sales order.
 *
 * The members are individually expandable (e.g. include[]=related.pick). The group
 * is null unless at least one of its members is expanded.
 */
export interface SalesOrderRelated {
  /**
   * Resource type identifier.
   */
  object: 'sales_order_related';

  /**
   * Record is a lightweight reference to a business record — a sales order, purchase
   * order, pick, shipment, production run, invoice, etc.
   *
   * Like Actor and Entity, it carries just enough to identify and label the
   * referenced record without embedding its full resource. The optional status and
   * metadata fields hold type-specific detail that varies by the kind of record
   * referenced.
   */
  pick: Record | null;

  /**
   * Record is a lightweight reference to a business record — a sales order, purchase
   * order, pick, shipment, production run, invoice, etc.
   *
   * Like Actor and Entity, it carries just enough to identify and label the
   * referenced record without embedding its full resource. The optional status and
   * metadata fields hold type-specific detail that varies by the kind of record
   * referenced.
   */
  production_run: Record | null;

  /**
   * List represents a paginated list of resources.
   */
  shipments: ListRecord | null;
}

/**
 * A lookup value describing where a sales order is in its lifecycle, from estimate
 * through fulfillment.
 */
export interface SalesOrderStatus {
  /**
   * Sales order status ID.
   */
  id: string;

  /**
   * Machine-readable status code.
   *
   * - `estimate`: a draft quote that has not yet been committed.
   * - `issued`: the order has been issued and is being fulfilled.
   * - `fulfilled`: the order has been completed and closed.
   */
  code: 'estimate' | 'issued' | 'fulfilled';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Human-readable name of the status.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'sales_order_status';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * SalesOrderTotals holds the derived monetary totals for a sales order or one of
 * its lines, following the lifecycle ordered -> packed -> invoiced.
 */
export interface SalesOrderTotals {
  /**
   * Total invoiced amount as a decimal string (unit price x quantity invoiced).
   */
  invoiced: string;

  /**
   * Resource type identifier.
   */
  object: 'sales_order_totals';

  /**
   * Total ordered amount as a decimal string (unit price x quantity ordered).
   */
  ordered: string;

  /**
   * Total packed amount as a decimal string (unit price x quantity packed).
   */
  packed: string;
}

export interface SalesOrderRetrieveStatusesParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner'>;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;
}

export interface SalesOrderListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Filter by customer group IDs.
   */
  customer_group_ids?: Array<string>;

  /**
   * Filter by customer IDs.
   */
  customer_ids?: Array<string>;

  /**
   * Latest order creation date to include, in `YYYY-MM-DD` format (inclusive).
   */
  end_date?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'customer'
    | 'sales_rep'
    | 'created_by'
    | 'bill_to_address'
    | 'ship_to_address'
    | 'freight'
    | 'payment_term'
    | 'shipping_term'
    | 'order_discount'
    | 'totals'
    | 'contacts'
    | 'related.pick'
    | 'related.production_run'
    | 'related.shipments'
    | 'lines'
    | 'lines.product'
    | 'lines.product.item'
    | 'lines.product.product_line'
    | 'lines.quantity_ordered'
    | 'lines.quantity_ordered.unit'
    | 'lines.unit_price'
    | 'lines.unit_price.numerator_unit'
    | 'lines.unit_price.denominator_unit'
    | 'lines.unit_cost'
    | 'lines.unit_cost.numerator_unit'
    | 'lines.unit_cost.denominator_unit'
    | 'lines.totals'
  >;

  /**
   * Filter by item IDs.
   */
  item_ids?: Array<string>;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Filter by product line IDs.
   */
  product_line_ids?: Array<string>;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;

  /**
   * Filter by sales rep IDs.
   */
  sales_rep_ids?: Array<string>;

  /**
   * Earliest order creation date to include, in `YYYY-MM-DD` format (inclusive).
   */
  start_date?: string;

  /**
   * Filter by status codes.
   */
  status_codes?: Array<string>;
}

export interface SalesOrderCreateParams {
  /**
   * Body param: Bill-to address ID.
   *
   * Must reference an existing address on the order's owner or buyer account.
   */
  bill_to_address_id: string;

  /**
   * Body param: ID of the customer account the order is for.
   */
  buyer_account_id: string;

  /**
   * Body param: Order lines to create.
   */
  lines: Array<CreateSalesOrderLineInput>;

  /**
   * Body param: Fulfillment priority used to rank the order on the shop floor.
   */
  priority_code: string;

  /**
   * Body param: Ship-to address ID.
   *
   * Must reference an existing address on the order's owner or buyer account.
   */
  ship_to_address_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'customer'
    | 'sales_rep'
    | 'bill_to_address'
    | 'ship_to_address'
    | 'freight'
    | 'payment_term'
    | 'shipping_term'
    | 'order_discount'
    | 'totals'
    | 'contacts'
    | 'related.pick'
    | 'related.production_run'
    | 'related.shipments'
    | 'lines'
    | 'lines.product'
    | 'lines.quantity_ordered'
    | 'lines.quantity_ordered.unit'
    | 'lines.unit_price'
    | 'lines.unit_price.numerator_unit'
    | 'lines.unit_price.denominator_unit'
    | 'lines.unit_cost'
    | 'lines.unit_cost.numerator_unit'
    | 'lines.unit_cost.denominator_unit'
    | 'lines.totals'
  >;

  /**
   * Body param: Account users who should receive order acknowledgement emails.
   */
  acknowledgement_email_contacts?: Array<SalesOrderEmailContactInput>;

  /**
   * Body param: Carrier billing account number.
   */
  carrier_billing_account_number?: string;

  /**
   * Body param: Who is billed for freight.
   *
   * - `sender`: the sender pays for shipping.
   * - `third_party`: a third party pays for shipping, using the carrier billing
   *   account number.
   */
  carrier_billing_type?: 'sender' | 'third_party';

  /**
   * Body param: Carrier ID.
   */
  carrier_id?: string;

  /**
   * Body param: The customer's own purchase order number, for cross-referencing.
   *
   * Must be unique among your orders for this customer.
   */
  customer_purchase_order_number?: string;

  /**
   * Body param: Account users who should receive invoice emails.
   */
  invoice_email_contacts?: Array<SalesOrderEmailContactInput>;

  /**
   * Body param: Order note.
   */
  note?: string;

  /**
   * Body param: Order discount ID.
   *
   * When supplied, a discount line is added to the order automatically.
   */
  order_discount_id?: string;

  /**
   * Body param: Payment term ID.
   */
  payment_term_id?: string;

  /**
   * Body param: Promised delivery date.
   */
  promised_at?: string;

  /**
   * Body param: Sales rep ID.
   *
   * When omitted, a rep is assigned automatically: the customer's default sales rep
   * first, then the sales territory matching the ship-to postal code, then the
   * ship-to state.
   */
  sales_rep_id?: string;

  /**
   * Body param: Service level ID.
   */
  service_level_id?: string;

  /**
   * Body param: Shipping term ID.
   */
  shipping_term_id?: string;
}

export declare namespace SalesOrders {
  export {
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
