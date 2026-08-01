// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as UnitsAPI from '../units';
import * as CoreAPI from '../../core/core';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as AttributesAPI from './attributes';
import { AttributeDeleteParams, AttributeUpdateParams, Attributes } from './attributes';
import * as PropertiesAPI from '../properties/properties';
import * as UnitGroupsAPI from '../unit-groups/unit-groups';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage inventory items.
 */
export class Items extends APIResource {
  attributes: AttributesAPI.Attributes = new AttributesAPI.Attributes(this._client);

  /**
   * Returns a paginated list of items.
   *
   * This endpoint requires the permission: `items:read`.
   *
   * @example
   * ```ts
   * const listItem = await client.catalog.items.list();
   * ```
   */
  list(query: ItemListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListItem> {
    return this._client.get('/v1/catalog/items', { query, ...options });
  }

  /**
   * Returns an item by ID.
   *
   * This endpoint requires the permission: `items:read`.
   *
   * @example
   * ```ts
   * const item = await client.catalog.items.retrieve(
   *   'it_0131e386ac683e8c29a71f6f1f',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: ItemRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Item> {
    return this._client.get(path`/v1/catalog/items/${id}`, { query, ...options });
  }

  /**
   * Returns inventory quantities for an item, including on-hand, reserved,
   * available-to-promise, and short amounts.
   *
   * This endpoint requires the permission: `items:read`.
   *
   * @example
   * ```ts
   * const itemInventory =
   *   await client.catalog.items.retrieveInventory(
   *     'it_0131e386ac683e8c29a71f6f1f',
   *   );
   * ```
   */
  retrieveInventory(
    id: string,
    query: ItemRetrieveInventoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ItemInventory> {
    return this._client.get(path`/v1/catalog/items/${id}/inventory`, { query, ...options });
  }

  /**
   * Returns the lot this item is made in — how many, counted in what.
   *
   * A lot is a doff, a pallet, a batch: the quantity production is issued in. The
   * unit is what makes it meaningful, since 60 pairs and 60 eaches are different
   * lots, so `quantity` should never be read without `unit`.
   *
   * Resolved through the same chain the production schedule uses, most specific
   * first: a per-item override, then the item's own product line, then the product
   * lines of the finished goods it becomes, then the account-wide default. `source`
   * names which rule applied. Intermediate items like greige are not sold and have
   * no product line of their own, which is why they inherit from what they become.
   *
   * `quantity` is `0` when nothing in the chain supplies a lot. That means the item
   * has no lot convention, not that its lot is zero.
   *
   * This endpoint requires the permission: `items:read`.
   *
   * @example
   * ```ts
   * const itemLotDefault =
   *   await client.catalog.items.retrieveLotDefault(
   *     'it_0131e386ac683e8c29a71f6f1f',
   *   );
   * ```
   */
  retrieveLotDefault(
    id: string,
    query: ItemRetrieveLotDefaultParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ItemLotDefault> {
    return this._client.get(path`/v1/catalog/items/${id}/lot-default`, { query, ...options });
  }

  /**
   * Moves an item to a different category.
   *
   * The item's rate units (unit value, unit cost, burn rate) and any related
   * order-point, consumption, and production quantity units are updated to the new
   * category's base unit. Re-assigning the item's current category is a no-op.
   *
   * This endpoint requires the permission: `items:update`.
   *
   * @example
   * ```ts
   * const item = await client.catalog.items.changeCategory(
   *   'ic_01ae7bd7bfd21ca0ab81e1357e',
   *   { id: 'it_0131e386ac683e8c29a71f6f1f' },
   * );
   * ```
   */
  changeCategory(
    categoryID: string,
    params: ItemChangeCategoryParams,
    options?: RequestOptions,
  ): APIPromise<Item> {
    const { id, include } = params;
    return this._client.put(path`/v1/catalog/items/${id}/category/${categoryID}`, {
      query: { include },
      ...options,
    });
  }
}

/**
 * Item is an inventory item (product, material, or part).
 */
export interface Item {
  /**
   * Item ID.
   */
  id: string;

  /**
   * List represents a paginated list of resources.
   */
  attributes: PropertiesAPI.ListAttribute | null;

  /**
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  burn_rate: Rate | null;

  /**
   * A grouping of related catalog items that defines the unit group and properties
   * available to the items within it.
   */
  category: ItemCategory | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Item description.
   */
  description: string | null;

  /**
   * Free-form notes about the item.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'item';

  /**
   * Stock keeping unit code, unique within the account.
   */
  sku: string;

  /**
   * What kind of item this is.
   *
   * - `product`: a finished product.
   * - `material`: a raw material or component consumed in production.
   * - `part`: a part used in production.
   */
  type: 'product' | 'material' | 'part';

  /**
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  unit_cost: Rate | null;

  /**
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  unit_value: Rate | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A grouping of related catalog items that defines the unit group and properties
 * available to the items within it.
 */
export interface ItemCategory {
  /**
   * Item category ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name of the item category.
   */
  name: string;

  /**
   * Free-form notes about the item category.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'item_category';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * List represents a paginated list of resources.
   */
  properties: PropertiesAPI.ListProperty | null;

  /**
   * What kind of items this category groups.
   *
   * An item can only be assigned to a category whose type matches the item's `type`.
   *
   * - `material_category`: groups raw materials and components (items of type
   *   `material`).
   * - `product_category`: groups finished products and parts (items of type
   *   `product` or `part`).
   */
  type: 'material_category' | 'product_category';

  /**
   * Named collection of units sharing one dimension, defining which units products
   * can be ordered in along with per-unit discounts and customer portal visibility.
   */
  unit_group: UnitGroupsAPI.UnitGroup | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * ItemInventory contains inventory quantities for an item.
 */
export interface ItemInventory {
  /**
   * Value with an associated unit.
   */
  available_to_promise: Quantity | null;

  /**
   * Resource type identifier.
   */
  object: 'item_inventory';

  /**
   * Value with an associated unit.
   */
  on_hand: Quantity | null;

  /**
   * Value with an associated unit.
   */
  reserved: Quantity | null;

  /**
   * Value with an associated unit.
   */
  short: Quantity | null;
}

/**
 * The lot an item is made in — how many, counted in what.
 *
 * A lot is the quantity production is issued in: a doff, a pallet, a batch. The
 * unit is what makes it meaningful, since 60 pairs and 60 eaches are different
 * lots.
 */
export interface ItemLotDefault {
  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  item: CoreAPI.Entity | null;

  /**
   * Resource type identifier.
   */
  object: 'item_lot_default';

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  product_line: CoreAPI.Entity | null;

  /**
   * Units in one lot.
   *
   * `0` means the item has no lot convention, not that its lot is zero.
   */
  quantity: number;

  /**
   * Which rule in the chain produced this lot.
   *
   * - `item_override`: a lot size set on the item itself.
   * - `product_line`: the convention of the line the item sells under.
   * - `downstream_product_line`: inherited from the finished goods this item
   *   becomes, for intermediates that are not themselves sold.
   * - `account_default`: the account-wide fallback.
   */
  source: 'item_override' | 'product_line' | 'downstream_product_line' | 'account_default' | '';

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  unit: UnitsAPI.Unit | null;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListItem {
  /**
   * Resources in this page.
   */
  data: Array<Item>;

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
 * Value with an associated unit.
 */
export interface Quantity {
  /**
   * Quantity ID.
   */
  id: string;

  /**
   * Formatted value with unit abbreviation (e.g. "$1,234.56" or "100 kg").
   */
  display_value: string;

  /**
   * Resource type identifier.
   */
  object: 'quantity';

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  unit: UnitsAPI.Unit | null;

  /**
   * Raw decimal value of the quantity, as a string to preserve precision.
   *
   * This is the unformatted machine value; see `display_value` for the
   * human-readable rendering with unit and thousands separators.
   */
  value: string;
}

/**
 * Value expressed as a ratio of two units, such as a price per kilogram or a
 * throughput per hour.
 */
export interface Rate {
  /**
   * Rate ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  denominator_unit: UnitsAPI.Unit | null;

  /**
   * Human-readable formatted value (e.g. "$25.50 / kg" or "100 kg / hr").
   */
  display_value: string;

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  numerator_unit: UnitsAPI.Unit | null;

  /**
   * Resource type identifier.
   */
  object: 'rate';

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Decimal value of the rate, as a string to preserve precision.
   *
   * Expressed as the amount of the numerator unit per one denominator unit.
   */
  value: string;
}

export interface ItemListParams {
  /**
   * Filter by attribute IDs.
   */
  attribute_ids?: Array<string>;

  /**
   * Filter by category IDs.
   */
  category_ids?: Array<string>;

  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Filter by customer account IDs (only items whose product line is accessible to
   * any of these customers).
   */
  customer_ids?: Array<string>;

  /**
   * Filter items created on or before this date.
   */
  end_date?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'category'
    | 'unit_value'
    | 'unit_cost'
    | 'burn_rate'
    | 'attributes'
    | 'category.unit_group'
    | 'category.properties'
    | 'category.unit_group.base_unit'
    | 'category.unit_group.associated_units'
    | 'category.unit_group.associated_units.unit'
  >;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Filter by product line IDs (only items whose product belongs to one of these
   * lines).
   */
  product_line_ids?: Array<string>;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;

  /**
   * Filter items created on or after this date.
   */
  start_date?: string;

  /**
   * Restricts results based on where the item is produced in its production flow.
   *
   * - `all`: no restriction.
   * - `initial_only`: only items produced by an initial production step, i.e. a step
   *   with no upstream steps feeding into it.
   */
  subassembly_filter?: 'all' | 'initial_only';

  /**
   * Filter by supplier ID.
   */
  supplier_id?: string;

  /**
   * Filter to items of these types (`product`, `material`, `part`).
   */
  types?: Array<string>;
}

export interface ItemRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'category'
    | 'unit_value'
    | 'unit_cost'
    | 'burn_rate'
    | 'attributes'
    | 'category.unit_group'
    | 'category.properties'
    | 'category.unit_group.base_unit'
    | 'category.unit_group.associated_units'
    | 'category.unit_group.associated_units.unit'
  >;
}

export interface ItemRetrieveInventoryParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'on_hand' | 'reserved' | 'available_to_promise' | 'short'>;
}

export interface ItemRetrieveLotDefaultParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'unit'>;
}

export interface ItemChangeCategoryParams {
  /**
   * Path param: Item ID.
   */
  id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'category'
    | 'unit_value'
    | 'unit_cost'
    | 'burn_rate'
    | 'attributes'
    | 'category.unit_group'
    | 'category.properties'
    | 'category.unit_group.base_unit'
    | 'category.unit_group.associated_units'
    | 'category.unit_group.associated_units.unit'
  >;
}

Items.Attributes = Attributes;

export declare namespace Items {
  export {
    type Item as Item,
    type ItemCategory as ItemCategory,
    type ItemInventory as ItemInventory,
    type ItemLotDefault as ItemLotDefault,
    type ListItem as ListItem,
    type Quantity as Quantity,
    type Rate as Rate,
    type ItemListParams as ItemListParams,
    type ItemRetrieveParams as ItemRetrieveParams,
    type ItemRetrieveInventoryParams as ItemRetrieveInventoryParams,
    type ItemRetrieveLotDefaultParams as ItemRetrieveLotDefaultParams,
    type ItemChangeCategoryParams as ItemChangeCategoryParams,
  };

  export {
    Attributes as Attributes,
    type AttributeUpdateParams as AttributeUpdateParams,
    type AttributeDeleteParams as AttributeDeleteParams,
  };
}
