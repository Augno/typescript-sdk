// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as PropertiesAPI from './properties';
import {
  Properties,
  PropertyAddParams,
  PropertyAddResponse,
  PropertyRemoveParams,
  PropertyRemoveResponse,
} from './properties';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage item categories.
 */
export class ItemCategories extends APIResource {
  properties: PropertiesAPI.Properties = new PropertiesAPI.Properties(this._client);

  /**
   * This endpoint creates a new account-owned item category.
   *
   * @example
   * ```ts
   * const itemCategory =
   *   await client.core.itemCategories.create({
   *     name: 'Electronics',
   *     type: 'material_category',
   *     unit_group_id: 'ug_01jm4r6700f8nwq3v5hx2d9ktp',
   *   });
   * ```
   */
  create(body: ItemCategoryCreateParams, options?: RequestOptions): APIPromise<ItemCategoryCreateResponse> {
    return this._client.post('/v1/core/item-categories', { body, ...options });
  }

  /**
   * This endpoint returns a single item category by its ID. The item category must
   * belong to the requesting account or be a system (global) category.
   *
   * @example
   * ```ts
   * const itemCategory =
   *   await client.core.itemCategories.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: ItemCategoryRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ItemCategoryRetrieveResponse> {
    return this._client.get(path`/v1/core/item-categories/${id}`, { query, ...options });
  }

  /**
   * This endpoint partially updates an account-owned item category. Only provided
   * fields are updated; absent fields retain their current values. Default system
   * categories cannot be updated.
   *
   * @example
   * ```ts
   * const itemCategory =
   *   await client.core.itemCategories.update('id', {
   *     name: 'Updated Electronics',
   *   });
   * ```
   */
  update(
    id: string,
    body: ItemCategoryUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ItemCategoryUpdateResponse> {
    return this._client.patch(path`/v1/core/item-categories/${id}`, { body, ...options });
  }

  /**
   * This endpoint returns a paginated list of item categories for the target
   * account, including both account-specific and global system categories. Supports
   * cursor-based pagination, filtering by category type, and search by name.
   *
   * @example
   * ```ts
   * const itemCategories =
   *   await client.core.itemCategories.list();
   * ```
   */
  list(
    query: ItemCategoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ItemCategoryListResponse> {
    return this._client.get('/v1/core/item-categories', { query, ...options });
  }

  /**
   * This endpoint deletes an account-owned item category. Default system categories
   * cannot be deleted.
   *
   * @example
   * ```ts
   * const itemCategory =
   *   await client.core.itemCategories.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ItemCategoryDeleteResponse> {
    return this._client.delete(path`/v1/core/item-categories/${id}`, options);
  }

  /**
   * This endpoint changes the unit group associated with an item category. The unit
   * group must be visible to the requesting account. Default system categories
   * cannot be modified. When the unit group is changed, all items in the category
   * will be updated to use the new base unit asynchronously.
   *
   * @example
   * ```ts
   * const response =
   *   await client.core.itemCategories.changeUnitGroup(
   *     'unit_group_id',
   *     { id: 'id' },
   *   );
   * ```
   */
  changeUnitGroup(
    unitGroupID: string,
    params: ItemCategoryChangeUnitGroupParams,
    options?: RequestOptions,
  ): APIPromise<ItemCategoryChangeUnitGroupResponse> {
    const { id } = params;
    return this._client.put(path`/v1/core/item-categories/${id}/unit-groups/${unitGroupID}`, options);
  }
}

/**
 * ItemCategory represents a full item category resource.
 */
export interface ItemCategoryCreateResponse {
  /**
   * The unique identifier for the item category.
   */
  id: string;

  /**
   * The timestamp when the item category was created.
   */
  created_at: string;

  /**
   * The display name of the item category.
   */
  name: string;

  /**
   * Optional notes about the item category.
   */
  notes: string | null;

  /**
   * The resource type identifier.
   */
  object: 'item_category';

  /**
   * The properties associated with this item category. Expandable.
   */
  properties: Array<ItemCategoryCreateResponse.Property>;

  /**
   * The type of item category (material_category or product_category).
   */
  type: string;

  /**
   * LightUnitGroup represents a minimal unit group reference.
   */
  unit_group: ItemCategoryCreateResponse.UnitGroup | null;

  /**
   * The timestamp when the item category was last updated.
   */
  updated_at: string;
}

export namespace ItemCategoryCreateResponse {
  /**
   * LightProperty represents a minimal property reference.
   */
  export interface Property {
    /**
     * The unique identifier for the property.
     */
    id: string;

    /**
     * The name of the property.
     */
    name: string;

    /**
     * The resource type identifier.
     */
    object: 'property';
  }

  /**
   * LightUnitGroup represents a minimal unit group reference.
   */
  export interface UnitGroup {
    /**
     * The unique identifier for the unit group.
     */
    id: string;

    /**
     * The display name of the unit group.
     */
    name: string;

    /**
     * The resource type identifier.
     */
    object: 'unit_group';
  }
}

/**
 * ItemCategory represents a full item category resource.
 */
export interface ItemCategoryRetrieveResponse {
  /**
   * The unique identifier for the item category.
   */
  id: string;

  /**
   * The timestamp when the item category was created.
   */
  created_at: string;

  /**
   * The display name of the item category.
   */
  name: string;

  /**
   * Optional notes about the item category.
   */
  notes: string | null;

  /**
   * The resource type identifier.
   */
  object: 'item_category';

  /**
   * The properties associated with this item category. Expandable.
   */
  properties: Array<ItemCategoryRetrieveResponse.Property>;

  /**
   * The type of item category (material_category or product_category).
   */
  type: string;

  /**
   * LightUnitGroup represents a minimal unit group reference.
   */
  unit_group: ItemCategoryRetrieveResponse.UnitGroup | null;

  /**
   * The timestamp when the item category was last updated.
   */
  updated_at: string;
}

export namespace ItemCategoryRetrieveResponse {
  /**
   * LightProperty represents a minimal property reference.
   */
  export interface Property {
    /**
     * The unique identifier for the property.
     */
    id: string;

    /**
     * The name of the property.
     */
    name: string;

    /**
     * The resource type identifier.
     */
    object: 'property';
  }

  /**
   * LightUnitGroup represents a minimal unit group reference.
   */
  export interface UnitGroup {
    /**
     * The unique identifier for the unit group.
     */
    id: string;

    /**
     * The display name of the unit group.
     */
    name: string;

    /**
     * The resource type identifier.
     */
    object: 'unit_group';
  }
}

/**
 * ItemCategory represents a full item category resource.
 */
export interface ItemCategoryUpdateResponse {
  /**
   * The unique identifier for the item category.
   */
  id: string;

  /**
   * The timestamp when the item category was created.
   */
  created_at: string;

  /**
   * The display name of the item category.
   */
  name: string;

  /**
   * Optional notes about the item category.
   */
  notes: string | null;

  /**
   * The resource type identifier.
   */
  object: 'item_category';

  /**
   * The properties associated with this item category. Expandable.
   */
  properties: Array<ItemCategoryUpdateResponse.Property>;

  /**
   * The type of item category (material_category or product_category).
   */
  type: string;

  /**
   * LightUnitGroup represents a minimal unit group reference.
   */
  unit_group: ItemCategoryUpdateResponse.UnitGroup | null;

  /**
   * The timestamp when the item category was last updated.
   */
  updated_at: string;
}

export namespace ItemCategoryUpdateResponse {
  /**
   * LightProperty represents a minimal property reference.
   */
  export interface Property {
    /**
     * The unique identifier for the property.
     */
    id: string;

    /**
     * The name of the property.
     */
    name: string;

    /**
     * The resource type identifier.
     */
    object: 'property';
  }

  /**
   * LightUnitGroup represents a minimal unit group reference.
   */
  export interface UnitGroup {
    /**
     * The unique identifier for the unit group.
     */
    id: string;

    /**
     * The display name of the unit group.
     */
    name: string;

    /**
     * The resource type identifier.
     */
    object: 'unit_group';
  }
}

/**
 * A paginated list of ItemCategory resources
 */
export interface ItemCategoryListResponse {
  /**
   * Array of ItemCategory resources in this page
   */
  data: Array<ItemCategoryListResponse.Data>;

  /**
   * Object type for ItemCategory list
   */
  object: 'list';

  /**
   * PageInfo contains cursor-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace ItemCategoryListResponse {
  /**
   * ItemCategory represents a full item category resource.
   */
  export interface Data {
    /**
     * The unique identifier for the item category.
     */
    id: string;

    /**
     * The timestamp when the item category was created.
     */
    created_at: string;

    /**
     * The display name of the item category.
     */
    name: string;

    /**
     * Optional notes about the item category.
     */
    notes: string | null;

    /**
     * The resource type identifier.
     */
    object: 'item_category';

    /**
     * The properties associated with this item category. Expandable.
     */
    properties: Array<Data.Property>;

    /**
     * The type of item category (material_category or product_category).
     */
    type: string;

    /**
     * LightUnitGroup represents a minimal unit group reference.
     */
    unit_group: Data.UnitGroup | null;

    /**
     * The timestamp when the item category was last updated.
     */
    updated_at: string;
  }

  export namespace Data {
    /**
     * LightProperty represents a minimal property reference.
     */
    export interface Property {
      /**
       * The unique identifier for the property.
       */
      id: string;

      /**
       * The name of the property.
       */
      name: string;

      /**
       * The resource type identifier.
       */
      object: 'property';
    }

    /**
     * LightUnitGroup represents a minimal unit group reference.
     */
    export interface UnitGroup {
      /**
       * The unique identifier for the unit group.
       */
      id: string;

      /**
       * The display name of the unit group.
       */
      name: string;

      /**
       * The resource type identifier.
       */
      object: 'unit_group';
    }
  }
}

export interface ItemCategoryDeleteResponse {}

/**
 * ItemCategory represents a full item category resource.
 */
export interface ItemCategoryChangeUnitGroupResponse {
  /**
   * The unique identifier for the item category.
   */
  id: string;

  /**
   * The timestamp when the item category was created.
   */
  created_at: string;

  /**
   * The display name of the item category.
   */
  name: string;

  /**
   * Optional notes about the item category.
   */
  notes: string | null;

  /**
   * The resource type identifier.
   */
  object: 'item_category';

  /**
   * The properties associated with this item category. Expandable.
   */
  properties: Array<ItemCategoryChangeUnitGroupResponse.Property>;

  /**
   * The type of item category (material_category or product_category).
   */
  type: string;

  /**
   * LightUnitGroup represents a minimal unit group reference.
   */
  unit_group: ItemCategoryChangeUnitGroupResponse.UnitGroup | null;

  /**
   * The timestamp when the item category was last updated.
   */
  updated_at: string;
}

export namespace ItemCategoryChangeUnitGroupResponse {
  /**
   * LightProperty represents a minimal property reference.
   */
  export interface Property {
    /**
     * The unique identifier for the property.
     */
    id: string;

    /**
     * The name of the property.
     */
    name: string;

    /**
     * The resource type identifier.
     */
    object: 'property';
  }

  /**
   * LightUnitGroup represents a minimal unit group reference.
   */
  export interface UnitGroup {
    /**
     * The unique identifier for the unit group.
     */
    id: string;

    /**
     * The display name of the unit group.
     */
    name: string;

    /**
     * The resource type identifier.
     */
    object: 'unit_group';
  }
}

export interface ItemCategoryCreateParams {
  /**
   * The display name of the item category.
   */
  name: string;

  /**
   * The type of item category (material_category or product_category).
   */
  type: string;

  /**
   * The ID of the unit group to associate with this item category.
   */
  unit_group_id: string;
}

export interface ItemCategoryRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'properties' | 'unit_group'>;
}

export interface ItemCategoryUpdateParams {
  /**
   * The display name of the item category.
   */
  name?: string | null;

  /**
   * Optional notes about the item category.
   */
  notes?: string | null;
}

export interface ItemCategoryListParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'properties' | 'unit_group'>;

  /**
   * Filter by item category type code (material_category or product_category).
   */
  type?: string;
}

export interface ItemCategoryChangeUnitGroupParams {
  /**
   * The ID of the item category.
   */
  id: string;
}

ItemCategories.Properties = Properties;

export declare namespace ItemCategories {
  export {
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

  export {
    Properties as Properties,
    type PropertyAddResponse as PropertyAddResponse,
    type PropertyRemoveResponse as PropertyRemoveResponse,
    type PropertyAddParams as PropertyAddParams,
    type PropertyRemoveParams as PropertyRemoveParams,
  };
}
