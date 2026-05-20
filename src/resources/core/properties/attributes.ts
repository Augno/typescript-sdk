// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage properties and their attributes.
 */
export class Attributes extends APIResource {
  /**
   * This endpoint creates a new attribute under a property.
   *
   * @example
   * ```ts
   * const attribute =
   *   await client.core.properties.attributes.create(
   *     'property_id',
   *     {
   *       color_code: 'red',
   *       order: 1,
   *       text: 'Red',
   *     },
   *   );
   * ```
   */
  create(propertyID: string, params: AttributeCreateParams, options?: RequestOptions): APIPromise<Attribute> {
    const { include, ...body } = params;
    return this._client.post(path`/v1/core/properties/${propertyID}/attributes`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * This endpoint returns a single attribute by its ID within a property.
   *
   * @example
   * ```ts
   * const attribute =
   *   await client.core.properties.attributes.retrieve('id', {
   *     property_id: 'property_id',
   *   });
   * ```
   */
  retrieve(id: string, params: AttributeRetrieveParams, options?: RequestOptions): APIPromise<Attribute> {
    const { property_id, ...query } = params;
    return this._client.get(path`/v1/core/properties/${property_id}/attributes/${id}`, { query, ...options });
  }

  /**
   * This endpoint partially updates an attribute.
   *
   * @example
   * ```ts
   * const attribute =
   *   await client.core.properties.attributes.update('id', {
   *     property_id: 'property_id',
   *     text: 'Blue',
   *   });
   * ```
   */
  update(id: string, params: AttributeUpdateParams, options?: RequestOptions): APIPromise<Attribute> {
    const { property_id, include, ...body } = params;
    return this._client.patch(path`/v1/core/properties/${property_id}/attributes/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * This endpoint returns a paginated list of attributes for a property. Supports
   * cursor-based pagination and search by text.
   *
   * @example
   * ```ts
   * const attributes =
   *   await client.core.properties.attributes.list(
   *     'property_id',
   *   );
   * ```
   */
  list(
    propertyID: string,
    query: AttributeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AttributeListResponse> {
    return this._client.get(path`/v1/core/properties/${propertyID}/attributes`, { query, ...options });
  }

  /**
   * This endpoint deletes an attribute from a property.
   *
   * @example
   * ```ts
   * const attribute =
   *   await client.core.properties.attributes.delete('id', {
   *     property_id: 'property_id',
   *   });
   * ```
   */
  delete(
    id: string,
    params: AttributeDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AttributeDeleteResponse> {
    const { property_id } = params;
    return this._client.delete(path`/v1/core/properties/${property_id}/attributes/${id}`, options);
  }
}

/**
 * Attribute represents a value option within a property.
 */
export interface Attribute {
  /**
   * The unique identifier for the attribute.
   */
  id: string;

  /**
   * The color code of the attribute.
   */
  color_code: string;

  /**
   * The timestamp when the attribute was created.
   */
  created_at: string;

  /**
   * The resource type identifier.
   */
  object: 'attribute';

  /**
   * The display order of the attribute.
   */
  order: number;

  /**
   * LightProperty represents a minimal property reference.
   */
  property: Attribute.Property | null;

  /**
   * The text value of the attribute.
   */
  text: string;

  /**
   * The timestamp when the attribute was last updated.
   */
  updated_at: string;
}

export namespace Attribute {
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
}

/**
 * A paginated list of Attribute resources
 */
export interface AttributeListResponse {
  /**
   * Array of Attribute resources in this page
   */
  data: Array<Attribute>;

  /**
   * Object type for Attribute list
   */
  object: 'list';

  /**
   * PageInfo contains cursor-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface AttributeDeleteResponse {}

export interface AttributeCreateParams {
  /**
   * Body param: The color code of the attribute.
   */
  color_code: string;

  /**
   * Body param: The display order of the attribute.
   */
  order: number;

  /**
   * Body param: The text value of the attribute.
   */
  text: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'property'>;
}

export interface AttributeRetrieveParams {
  /**
   * Path param: The ID of the property.
   */
  property_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'property'>;
}

export interface AttributeUpdateParams {
  /**
   * Path param: The ID of the property.
   */
  property_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'property'>;

  /**
   * Body param: The new color code of the attribute.
   */
  color_code?: string | null;

  /**
   * Body param: The new display order of the attribute.
   */
  order?: number | null;

  /**
   * Body param: The new text value of the attribute.
   */
  text?: string | null;
}

export interface AttributeListParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'property'>;
}

export interface AttributeDeleteParams {
  /**
   * The ID of the property.
   */
  property_id: string;
}

export declare namespace Attributes {
  export {
    type Attribute as Attribute,
    type AttributeListResponse as AttributeListResponse,
    type AttributeDeleteResponse as AttributeDeleteResponse,
    type AttributeCreateParams as AttributeCreateParams,
    type AttributeRetrieveParams as AttributeRetrieveParams,
    type AttributeUpdateParams as AttributeUpdateParams,
    type AttributeListParams as AttributeListParams,
    type AttributeDeleteParams as AttributeDeleteParams,
  };
}
