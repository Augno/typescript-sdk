// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage item categories.
 */
export class Properties extends APIResource {
  /**
   * This endpoint adds a property to an item category. Both the item category and
   * the property must belong to the requesting account. Default system categories
   * cannot be modified.
   *
   * @example
   * ```ts
   * const response =
   *   await client.core.itemCategories.properties.add(
   *     'property_id',
   *     { id: 'id' },
   *   );
   * ```
   */
  add(
    propertyID: string,
    params: PropertyAddParams,
    options?: RequestOptions,
  ): APIPromise<PropertyAddResponse> {
    const { id } = params;
    return this._client.put(path`/v1/core/item-categories/${id}/properties/${propertyID}`, options);
  }

  /**
   * This endpoint removes a property from an item category. Both the item category
   * and the property must belong to the requesting account. Default system
   * categories cannot be modified.
   *
   * @example
   * ```ts
   * const property =
   *   await client.core.itemCategories.properties.remove(
   *     'property_id',
   *     { id: 'id' },
   *   );
   * ```
   */
  remove(
    propertyID: string,
    params: PropertyRemoveParams,
    options?: RequestOptions,
  ): APIPromise<PropertyRemoveResponse> {
    const { id } = params;
    return this._client.delete(path`/v1/core/item-categories/${id}/properties/${propertyID}`, options);
  }
}

/**
 * ItemCategory represents a full item category resource.
 */
export interface PropertyAddResponse {
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
  properties: Array<PropertyAddResponse.Property>;

  /**
   * The type of item category (material_category or product_category).
   */
  type: string;

  /**
   * LightUnitGroup represents a minimal unit group reference.
   */
  unit_group: PropertyAddResponse.UnitGroup | null;

  /**
   * The timestamp when the item category was last updated.
   */
  updated_at: string;
}

export namespace PropertyAddResponse {
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
export interface PropertyRemoveResponse {
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
  properties: Array<PropertyRemoveResponse.Property>;

  /**
   * The type of item category (material_category or product_category).
   */
  type: string;

  /**
   * LightUnitGroup represents a minimal unit group reference.
   */
  unit_group: PropertyRemoveResponse.UnitGroup | null;

  /**
   * The timestamp when the item category was last updated.
   */
  updated_at: string;
}

export namespace PropertyRemoveResponse {
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

export interface PropertyAddParams {
  /**
   * The ID of the item category.
   */
  id: string;
}

export interface PropertyRemoveParams {
  /**
   * The ID of the item category.
   */
  id: string;
}

export declare namespace Properties {
  export {
    type PropertyAddResponse as PropertyAddResponse,
    type PropertyRemoveResponse as PropertyRemoveResponse,
    type PropertyAddParams as PropertyAddParams,
    type PropertyRemoveParams as PropertyRemoveParams,
  };
}
