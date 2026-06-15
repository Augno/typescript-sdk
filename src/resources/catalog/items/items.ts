// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as OperationsAPI from '../../operations/operations';
import * as ItemCategoriesAPI from '../item-categories/item-categories';
import * as ActionsAPI from './actions';
import { Actions } from './actions';
import * as AttributesAPI from './attributes';
import { AttributeDeleteParams, AttributeUpdateParams, Attributes } from './attributes';
import * as InventoryAPI from './inventory';
import { Inventory, InventoryListParams, InventoryListResponse } from './inventory';
import * as PropertiesAttributesAPI from '../properties/attributes';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage inventory items.
 */
export class Items extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  attributes: AttributesAPI.Attributes = new AttributesAPI.Attributes(this._client);
  inventory: InventoryAPI.Inventory = new InventoryAPI.Inventory(this._client);

  /**
   * Returns an item by ID.
   *
   * @example
   * ```ts
   * const item = await client.catalog.items.retrieve(
   *   'it_01jm4r6700f8nwq3v5hx2d9ktp',
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
   * Changes the category of an item. When the category changes, the item's rate
   * units are updated to the new category's base unit.
   *
   * @example
   * ```ts
   * const item = await client.catalog.items.update(
   *   'ic_01jm4r6700f8nwq3v5hx2d9ktp',
   *   { id: 'it_01jm4r6700f8nwq3v5hx2d9ktp' },
   * );
   * ```
   */
  update(categoryID: string, params: ItemUpdateParams, options?: RequestOptions): APIPromise<Item> {
    const { id, include } = params;
    return this._client.put(path`/v1/catalog/items/${id}/category/${categoryID}`, {
      query: { include },
      ...options,
    });
  }

  /**
   * Returns a paginated list of items.
   *
   * @example
   * ```ts
   * const items = await client.catalog.items.list();
   * ```
   */
  list(
    query: ItemListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ItemListResponse> {
    return this._client.get('/v1/catalog/items', { query, ...options });
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
  attributes: PropertiesAttributesAPI.ListAttribute | null;

  /**
   * Rate resource.
   */
  burn_rate: OperationsAPI.Rate | null;

  /**
   * ItemCategory resource.
   */
  category: ItemCategoriesAPI.ItemCategory | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Item description.
   */
  description: string | null;

  /**
   * Notes.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'item';

  /**
   * Stock keeping unit code.
   */
  sku: string;

  /**
   * Item type code.
   */
  type: 'product' | 'material' | 'part';

  /**
   * Rate resource.
   */
  unit_cost: OperationsAPI.Rate | null;

  /**
   * Rate resource.
   */
  unit_value: OperationsAPI.Rate | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ItemListResponse {
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
  page_info: AgentsAPI.PageInfo;
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

export interface ItemUpdateParams {
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
   * Cursor token used to retrieve the next or previous page of results.
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
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Filter by product line IDs (only items whose product belongs to one of these
   * lines).
   */
  product_line_ids?: Array<string>;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Filter items created on or after this date.
   */
  start_date?: string;

  /**
   * Which subassemblies to include when listing (default: all).
   */
  subassembly_filter?: 'all' | 'initial_only';

  /**
   * Filter by supplier ID.
   */
  supplier_id?: string;

  /**
   * Filter by item type codes.
   */
  types?: Array<string>;
}

Items.Actions = Actions;
Items.Attributes = Attributes;
Items.Inventory = Inventory;

export declare namespace Items {
  export {
    type Item as Item,
    type ItemListResponse as ItemListResponse,
    type ItemRetrieveParams as ItemRetrieveParams,
    type ItemUpdateParams as ItemUpdateParams,
    type ItemListParams as ItemListParams,
  };

  export { Actions as Actions };

  export {
    Attributes as Attributes,
    type AttributeUpdateParams as AttributeUpdateParams,
    type AttributeDeleteParams as AttributeDeleteParams,
  };

  export {
    Inventory as Inventory,
    type InventoryListResponse as InventoryListResponse,
    type InventoryListParams as InventoryListParams,
  };
}
