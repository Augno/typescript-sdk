// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as ItemCategoriesAPI from '../../catalog/item-categories/item-categories';
import * as ActionsAPI from './actions';
import { Actions } from './actions';
import * as LinesAPI from './lines';
import { Lines } from './lines';

export class PurchaseOrders extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  lines: LinesAPI.Lines = new LinesAPI.Lines(this._client);
}

/**
 * List represents a paginated list of resources.
 */
export interface ListSalesOrderStatus {
  /**
   * Resources in this page.
   */
  data: Array<ListSalesOrderStatus.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace ListSalesOrderStatus {
  /**
   * Sales order status lookup value.
   */
  export interface Data {
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
    owner: ItemCategoriesAPI.Owner | null;

    /**
     * Last updated timestamp.
     */
    updated_at: string;
  }
}

PurchaseOrders.Actions = Actions;
PurchaseOrders.Lines = Lines;

export declare namespace PurchaseOrders {
  export { type ListSalesOrderStatus as ListSalesOrderStatus };

  export { Actions as Actions };

  export { Lines as Lines };
}
