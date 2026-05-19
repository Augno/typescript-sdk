// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as AttributesAPI from './attributes';
import {
  Attribute,
  AttributeCreateParams,
  AttributeDeleteParams,
  AttributeDeleteResponse,
  AttributeListParams,
  AttributeListResponse,
  AttributeRetrieveParams,
  AttributeUpdateParams,
  Attributes,
} from './attributes';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage properties and their attributes.
 */
export class Properties extends APIResource {
  attributes: AttributesAPI.Attributes = new AttributesAPI.Attributes(this._client);

  /**
   * This endpoint creates a new property.
   *
   * @example
   * ```ts
   * const property = await client.core.properties.create({
   *   name: 'Color',
   * });
   * ```
   */
  create(body: PropertyCreateParams, options?: RequestOptions): APIPromise<Property> {
    return this._client.post('/v1/core/properties', { body, ...options });
  }

  /**
   * This endpoint returns a single property by its ID.
   *
   * @example
   * ```ts
   * const property = await client.core.properties.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Property> {
    return this._client.get(path`/v1/core/properties/${id}`, options);
  }

  /**
   * This endpoint partially updates a property.
   *
   * @example
   * ```ts
   * const property = await client.core.properties.update('id', {
   *   name: 'Size',
   * });
   * ```
   */
  update(
    id: string,
    body: PropertyUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Property> {
    return this._client.patch(path`/v1/core/properties/${id}`, { body, ...options });
  }

  /**
   * This endpoint returns a paginated list of properties for the target account.
   * Supports cursor-based pagination and search by name.
   *
   * @example
   * ```ts
   * const properties = await client.core.properties.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<PropertyListResponse> {
    return this._client.get('/v1/core/properties', options);
  }

  /**
   * This endpoint deletes a property and all its associated attributes.
   *
   * @example
   * ```ts
   * const property = await client.core.properties.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<PropertyDeleteResponse> {
    return this._client.delete(path`/v1/core/properties/${id}`, options);
  }
}

/**
 * Property represents a property that groups attributes.
 */
export interface Property {
  /**
   * The unique identifier for the property.
   */
  id: string;

  /**
   * The timestamp when the property was created.
   */
  created_at: string;

  /**
   * The name of the property.
   */
  name: string;

  /**
   * The resource type identifier.
   */
  object: 'property';

  /**
   * The timestamp when the property was last updated.
   */
  updated_at: string;
}

/**
 * A paginated list of Property resources
 */
export interface PropertyListResponse {
  /**
   * Array of Property resources in this page
   */
  data: Array<Property>;

  /**
   * Object type for Property list
   */
  object: 'list';

  /**
   * PageInfo contains cursor-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface PropertyDeleteResponse {}

export interface PropertyCreateParams {
  /**
   * The name of the property.
   */
  name: string;
}

export interface PropertyUpdateParams {
  /**
   * The new name of the property.
   */
  name?: string | null;
}

Properties.Attributes = Attributes;

export declare namespace Properties {
  export {
    type Property as Property,
    type PropertyListResponse as PropertyListResponse,
    type PropertyDeleteResponse as PropertyDeleteResponse,
    type PropertyCreateParams as PropertyCreateParams,
    type PropertyUpdateParams as PropertyUpdateParams,
  };

  export {
    Attributes as Attributes,
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
