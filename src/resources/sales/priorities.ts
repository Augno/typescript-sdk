// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and retrieve priorities.
 */
export class Priorities extends APIResource {
  /**
   * Returns a paginated list of priorities.
   *
   * This endpoint requires the permission: `priorities:read`.
   *
   * @example
   * ```ts
   * const listPriority = await client.sales.priorities.list();
   * ```
   */
  list(
    query: PriorityListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListPriority> {
    return this._client.get('/v1/sales/priorities', { query, ...options });
  }

  /**
   * Returns a priority by ID or code.
   *
   * This endpoint requires the permission: `priorities:read`.
   *
   * @example
   * ```ts
   * const priority = await client.sales.priorities.retrieve(
   *   'pi_01fc435701244bb3978bfb77ff',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: PriorityRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Priority> {
    return this._client.get(path`/v1/sales/priorities/${id}`, { query, ...options });
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ListPriority {
  /**
   * Resources in this page.
   */
  data: Array<Priority>;

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
 * Priority level used to order work on sales orders, purchase orders, and picks.
 */
export interface Priority {
  /**
   * Priority ID.
   */
  id: string;

  /**
   * Machine-readable code identifying the priority level.
   *
   * - `low`: lowest urgency; worked after normal and high.
   * - `normal`: default urgency for most orders and picks.
   * - `high`: highest urgency; worked ahead of normal and low.
   */
  code: 'low' | 'normal' | 'high';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name of the priority level.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'priority';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export interface PriorityListParams {
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
  include?: Array<'owner'>;

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

export interface PriorityRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner'>;
}

export declare namespace Priorities {
  export {
    type ListPriority as ListPriority,
    type Priority as Priority,
    type PriorityListParams as PriorityListParams,
    type PriorityRetrieveParams as PriorityRetrieveParams,
  };
}
