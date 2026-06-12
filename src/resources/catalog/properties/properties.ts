// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as AttributesAPI from './attributes';
import {
  AttributeCreateParams,
  AttributeDeleteParams,
  AttributeDeleteResponse,
  AttributeListParams,
  AttributeRetrieveParams,
  AttributeUpdateParams,
  Attributes,
  CreateAttributeRequest,
  UpdateAttributeRequest,
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
   * Returns a paginated list of properties for the target account.
   *
   * @example
   * ```ts
   * const listProperty = await client.catalog.properties.list();
   * ```
   */
  list(
    query: PropertyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListProperty> {
    return this._client.get('/v1/catalog/properties', { query, ...options });
  }

  /**
   * Returns a property by ID.
   *
   * @example
   * ```ts
   * const property = await client.catalog.properties.retrieve(
   *   'pp_01e21344878064372f69e67093',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: PropertyRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Property> {
    return this._client.get(path`/v1/catalog/properties/${id}`, { query, ...options });
  }

  /**
   * Creates a property.
   *
   * @example
   * ```ts
   * const property = await client.catalog.properties.create({
   *   name: 'Color',
   * });
   * ```
   */
  create(params: PropertyCreateParams, options?: RequestOptions): APIPromise<Property> {
    const { include, ...body } = params;
    return this._client.post('/v1/catalog/properties', { query: { include }, body, ...options });
  }

  /**
   * Partially updates a property.
   *
   * @example
   * ```ts
   * const property = await client.catalog.properties.update(
   *   'pp_01e21344878064372f69e67093',
   *   { name: 'Size' },
   * );
   * ```
   */
  update(
    id: string,
    params: PropertyUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Property> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/catalog/properties/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Deletes a property and all associated attributes.
   *
   * @example
   * ```ts
   * const property = await client.catalog.properties.delete(
   *   'pp_01e21344878064372f69e67093',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<PropertyDeleteResponse> {
    return this._client.delete(path`/v1/catalog/properties/${id}`, options);
  }
}

/**
 * A selectable value within a property, such as `Red` for a `Color` property.
 *
 * Attributes are assigned to items to classify them.
 */
export interface Attribute {
  /**
   * Attribute ID.
   */
  id: string;

  /**
   * Swatch color used to display this attribute in the UI.
   *
   * The named colors are arbitrary display choices; `default` is a neutral fallback
   * used when no specific swatch applies.
   */
  color: 'blue' | 'brown' | 'default' | 'gray' | 'green' | 'orange' | 'pink' | 'purple' | 'red' | 'yellow';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'attribute';

  /**
   * A named characteristic used to classify items, such as `Color` or `Size`.
   *
   * Each property defines a set of attributes — the selectable values (e.g. `Red`,
   * `Blue`) that can be assigned to items.
   */
  property: Property | null;

  /**
   * Position of this attribute relative to its siblings within the property,
   * starting at `1`.
   *
   * Positions are kept contiguous: creating, reordering, or deleting an attribute
   * automatically shifts its siblings.
   */
  sort_order: number;

  /**
   * Last update timestamp.
   */
  updated_at: string;

  /**
   * The selectable value this attribute represents, such as `Red` for a `Color`
   * property or `Large` for a `Size` property.
   */
  value: string;
}

/**
 * Request to create a property.
 */
export interface CreatePropertyRequest {
  /**
   * Display name of the property, such as `Color` or `Size`.
   */
  name: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAttribute {
  /**
   * Resources in this page.
   */
  data: Array<Attribute>;

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
export interface ListProperty {
  /**
   * Resources in this page.
   */
  data: Array<Property>;

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
 * A named characteristic used to classify items, such as `Color` or `Size`.
 *
 * Each property defines a set of attributes — the selectable values (e.g. `Red`,
 * `Blue`) that can be assigned to items.
 */
export interface Property {
  /**
   * Property ID.
   */
  id: string;

  /**
   * List represents a paginated list of resources.
   */
  attributes: ListAttribute | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name of the property, such as `Color` or `Size`.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'property';

  /**
   * Last update timestamp.
   */
  updated_at: string;
}

/**
 * Request to update a property.
 */
export interface UpdatePropertyRequest {
  /**
   * Display name of the property, such as `Color` or `Size`.
   */
  name?: string;
}

export interface PropertyDeleteResponse {}

export interface PropertyListParams {
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
  include?: Array<'attributes'>;

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

export interface PropertyRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'attributes'>;
}

export interface PropertyCreateParams {
  /**
   * Body param: Display name of the property, such as `Color` or `Size`.
   */
  name: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'attributes'>;
}

export interface PropertyUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'attributes'>;

  /**
   * Body param: Display name of the property, such as `Color` or `Size`.
   */
  name?: string;
}

Properties.Attributes = Attributes;

export declare namespace Properties {
  export {
    type Attribute as Attribute,
    type CreatePropertyRequest as CreatePropertyRequest,
    type ListAttribute as ListAttribute,
    type ListProperty as ListProperty,
    type Property as Property,
    type UpdatePropertyRequest as UpdatePropertyRequest,
    type PropertyDeleteResponse as PropertyDeleteResponse,
    type PropertyListParams as PropertyListParams,
    type PropertyRetrieveParams as PropertyRetrieveParams,
    type PropertyCreateParams as PropertyCreateParams,
    type PropertyUpdateParams as PropertyUpdateParams,
  };

  export {
    Attributes as Attributes,
    type CreateAttributeRequest as CreateAttributeRequest,
    type UpdateAttributeRequest as UpdateAttributeRequest,
    type AttributeDeleteResponse as AttributeDeleteResponse,
    type AttributeListParams as AttributeListParams,
    type AttributeRetrieveParams as AttributeRetrieveParams,
    type AttributeCreateParams as AttributeCreateParams,
    type AttributeUpdateParams as AttributeUpdateParams,
    type AttributeDeleteParams as AttributeDeleteParams,
  };
}
