// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ItemsAPI from './items';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * List and manage inventory items.
 */
export class Actions extends APIResource {
  /**
   * This endpoint exports all items with their on-hand inventory for the target
   * account.
   *
   * @example
   * ```ts
   * const response = await client.core.items.actions.export();
   * ```
   */
  export(options?: RequestOptions): APIPromise<ActionExportResponse> {
    return this._client.get('/v1/core/items/actions/export', options);
  }
}

/**
 * ExportItemsResponse represents the export items response.
 */
export interface ActionExportResponse {
  /**
   * The total count of exported items.
   */
  count: number;

  /**
   * The exported items.
   */
  items: Array<ActionExportResponse.Item>;

  /**
   * The resource type identifier.
   */
  object: 'list';
}

export namespace ActionExportResponse {
  /**
   * ExportItem represents an item with inventory for export.
   */
  export interface Item {
    /**
     * The unique identifier for the item.
     */
    id: string;

    /**
     * The category name.
     */
    category_name: string;

    /**
     * The timestamp when the item was created.
     */
    created_at: string;

    /**
     * A description of the item.
     */
    description: string | null;

    /**
     * The item type code.
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
     * The on-hand quantity.
     */
    on_hand_quantity: string;

    /**
     * LightUnit represents a minimal unit reference within a rate.
     */
    on_hand_unit: ItemsAPI.LightUnit | null;

    /**
     * The stock keeping unit code.
     */
    sku: string;

    /**
     * The timestamp when the item was last updated.
     */
    updated_at: string;
  }
}

export declare namespace Actions {
  export { type ActionExportResponse as ActionExportResponse };
}
