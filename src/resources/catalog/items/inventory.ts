// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BatchesAPI from '../../operations/batches/batches';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage inventory items.
 */
export class Inventory extends APIResource {
  /**
   * Returns inventory quantities for an item, including on-hand, reserved,
   * available-to-promise, and short amounts.
   *
   * @example
   * ```ts
   * const inventories =
   *   await client.catalog.items.inventory.list(
   *     'it_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  list(
    id: string,
    query: InventoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InventoryListResponse> {
    return this._client.get(path`/v1/catalog/items/${id}/inventory`, { query, ...options });
  }
}

/**
 * ItemInventory contains inventory quantities for an item.
 */
export interface InventoryListResponse {
  /**
   * Value with an associated unit.
   */
  available_to_promise: BatchesAPI.Quantity | null;

  /**
   * Resource type identifier.
   */
  object: 'item_inventory';

  /**
   * Value with an associated unit.
   */
  on_hand: BatchesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  reserved: BatchesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  short: BatchesAPI.Quantity | null;
}

export interface InventoryListParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'on_hand' | 'reserved' | 'available_to_promise' | 'short'>;
}

export declare namespace Inventory {
  export {
    type InventoryListResponse as InventoryListResponse,
    type InventoryListParams as InventoryListParams,
  };
}
