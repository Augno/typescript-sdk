// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * List sales order statuses.
 */
export class SalesOrders extends APIResource {
  /**
   * Returns a paginated list of sales order statuses.
   *
   * @example
   * ```ts
   * const listSalesOrderStatus =
   *   await client.sales.salesOrders.retrieveStatuses();
   * ```
   */
  retrieveStatuses(
    query: SalesOrderRetrieveStatusesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListSalesOrderStatus> {
    return this._client.get('/v1/sales/sales-orders/statuses', { query, ...options });
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ListSalesOrderStatus {
  /**
   * Resources in this page.
   */
  data: Array<SalesOrderStatus>;

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
 * Sales order status lookup value.
 */
export interface SalesOrderStatus {
  /**
   * Sales order status ID.
   */
  id: string;

  /**
   * Machine-readable status code.
   */
  code: 'estimate' | 'issued' | 'fulfilled';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'sales_order_status';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export interface SalesOrderRetrieveStatusesParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export declare namespace SalesOrders {
  export {
    type ListSalesOrderStatus as ListSalesOrderStatus,
    type SalesOrderStatus as SalesOrderStatus,
    type SalesOrderRetrieveStatusesParams as SalesOrderRetrieveStatusesParams,
  };
}
