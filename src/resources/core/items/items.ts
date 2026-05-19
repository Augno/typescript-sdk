// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as AccountPricesAPI from '../account-prices';
import * as ActionsAPI from './actions';
import { ActionExportResponse, Actions } from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage inventory items.
 */
export class Items extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * This endpoint returns a single item by its ID.
   *
   * @example
   * ```ts
   * const item = await client.core.items.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: ItemRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Item> {
    return this._client.get(path`/v1/core/items/${id}`, { query, ...options });
  }

  /**
   * This endpoint returns a paginated list of items for the target account. Supports
   * cursor-based pagination, filtering by type, category, attributes, supplier, date
   * range, and search by SKU or description.
   *
   * @example
   * ```ts
   * const items = await client.core.items.list();
   * ```
   */
  list(
    query: ItemListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ItemListResponse> {
    return this._client.get('/v1/core/items', { query, ...options });
  }

  /**
   * This endpoint returns the production cost breakdown for an item, including
   * direct material, direct labor, overhead, and total costs.
   *
   * @example
   * ```ts
   * const response = await client.core.items.getCosts('id');
   * ```
   */
  getCosts(id: string, options?: RequestOptions): APIPromise<ItemGetCostsResponse> {
    return this._client.get(path`/v1/core/items/${id}/costs`, options);
  }

  /**
   * This endpoint returns inventory quantities for an item, including on-hand,
   * reserved, available-to-promise, and short quantities.
   *
   * @example
   * ```ts
   * const response = await client.core.items.getInventory('id');
   * ```
   */
  getInventory(id: string, options?: RequestOptions): APIPromise<ItemGetInventoryResponse> {
    return this._client.get(path`/v1/core/items/${id}/inventory`, options);
  }

  /**
   * This endpoint returns historical trend data for an item. The trend_type query
   * parameter specifies which metric to retrieve trends for.
   *
   * @example
   * ```ts
   * const response = await client.core.items.getTrends('id', {
   *   trend_type: 'trend_type',
   * });
   * ```
   */
  getTrends(
    id: string,
    query: ItemGetTrendsParams,
    options?: RequestOptions,
  ): APIPromise<ItemGetTrendsResponse> {
    return this._client.get(path`/v1/core/items/${id}/trends`, { query, ...options });
  }
}

/**
 * Item represents an inventory item (product, material, or part).
 */
export interface Item {
  /**
   * The unique identifier for the item.
   */
  id: string;

  /**
   * The attributes assigned to this item.
   */
  attributes: Array<AccountPricesAPI.LightAttribute>;

  /**
   * LightRate represents a minimal rate reference with unit sub-resources.
   */
  burn_rate: LightRate | null;

  /**
   * LightItemCategory represents a minimal item category reference.
   */
  category: AccountPricesAPI.LightItemCategory | null;

  /**
   * The timestamp when the item was created.
   */
  created_at: string;

  /**
   * A description of the item.
   */
  description: string | null;

  /**
   * Whether the item has unsaved changes.
   */
  is_dirty: boolean;

  /**
   * The item type code (e.g. product, material, part).
   */
  item_type_code: string;

  /**
   * Additional notes about the item.
   */
  notes: string | null;

  /**
   * The resource type identifier.
   */
  object: 'item';

  /**
   * The stock keeping unit code.
   */
  sku: string;

  /**
   * LightRate represents a minimal rate reference with unit sub-resources.
   */
  unit_cost: LightRate | null;

  /**
   * LightRate represents a minimal rate reference with unit sub-resources.
   */
  unit_value: LightRate | null;

  /**
   * The timestamp when the item was last updated.
   */
  updated_at: string;
}

/**
 * LightRate represents a minimal rate reference with unit sub-resources.
 */
export interface LightRate {
  /**
   * The unique identifier for the rate.
   */
  id: string;

  /**
   * LightUnit represents a minimal unit reference within a rate.
   */
  denominator_unit: LightUnit | null;

  /**
   * LightUnit represents a minimal unit reference within a rate.
   */
  numerator_unit: LightUnit | null;

  /**
   * The resource type identifier.
   */
  object: 'rate';

  /**
   * The decimal value of the rate.
   */
  value: string;
}

/**
 * LightUnit represents a minimal unit reference within a rate.
 */
export interface LightUnit {
  /**
   * The unique identifier for the unit.
   */
  id: string;

  /**
   * The resource type identifier.
   */
  object: 'unit';
}

/**
 * QuantityInfo represents a quantity with its associated unit.
 */
export interface QuantityInfo {
  /**
   * LightUnit represents a minimal unit reference within a rate.
   */
  unit: LightUnit | null;

  /**
   * The decimal quantity value.
   */
  value: string;
}

/**
 * A paginated list of Item resources
 */
export interface ItemListResponse {
  /**
   * Array of Item resources in this page
   */
  data: Array<Item>;

  /**
   * Object type for Item list
   */
  object: 'list';

  /**
   * PageInfo contains cursor-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

/**
 * ItemCosts represents cost breakdown for an item.
 */
export interface ItemGetCostsResponse {
  /**
   * The direct labor cost.
   */
  direct_labor_cost: string;

  /**
   * The direct material cost.
   */
  direct_material_cost: string;

  /**
   * The resource type identifier.
   */
  object: 'item';

  /**
   * The overhead cost.
   */
  overhead_cost: string;

  /**
   * The total cost.
   */
  total_cost: string;

  /**
   * LightUnit represents a minimal unit reference within a rate.
   */
  unit: LightUnit | null;
}

/**
 * ItemInventory represents inventory quantities for an item.
 */
export interface ItemGetInventoryResponse {
  /**
   * QuantityInfo represents a quantity with its associated unit.
   */
  available_to_promise: QuantityInfo | null;

  /**
   * The resource type identifier.
   */
  object: 'item';

  /**
   * QuantityInfo represents a quantity with its associated unit.
   */
  on_hand: QuantityInfo | null;

  /**
   * QuantityInfo represents a quantity with its associated unit.
   */
  reserved: QuantityInfo | null;

  /**
   * QuantityInfo represents a quantity with its associated unit.
   */
  short: QuantityInfo | null;
}

/**
 * ItemTrends represents historical trend data for an item.
 */
export interface ItemGetTrendsResponse {
  /**
   * The resource type identifier.
   */
  object: 'item';

  /**
   * The trend data points.
   */
  points: Array<ItemGetTrendsResponse.Point>;

  /**
   * The trend type that was requested.
   */
  trend_type: string;
}

export namespace ItemGetTrendsResponse {
  /**
   * ItemTrendPoint represents a single trend data point.
   */
  export interface Point {
    /**
     * The date of the trend data point.
     */
    date: string;

    /**
     * The value at this date.
     */
    value: string;
  }
}

export interface ItemRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'category' | 'unit_value' | 'unit_cost' | 'burn_rate'>;
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
   * Filter items created on or before this date.
   */
  end_date?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'category' | 'unit_value' | 'unit_cost' | 'burn_rate'>;

  /**
   * When true, search query must match exactly rather than partial match.
   */
  is_exact_match?: boolean;

  /**
   * When true, only return items that are initial subassemblies.
   */
  only_initial_subassemblies?: boolean;

  /**
   * Filter items created on or after this date.
   */
  start_date?: string;

  /**
   * Filter by supplier ID.
   */
  supplier_id?: string;

  /**
   * Filter by item type codes.
   */
  types?: Array<string>;
}

export interface ItemGetTrendsParams {
  /**
   * The type of trend to retrieve (e.g. "on_hand", "cost").
   */
  trend_type: string;
}

Items.Actions = Actions;

export declare namespace Items {
  export {
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

  export { Actions as Actions, type ActionExportResponse as ActionExportResponse };
}
