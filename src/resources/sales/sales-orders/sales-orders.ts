// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import { Actions } from './actions';
import * as LinesAPI from './lines';
import { Lines } from './lines';

export class SalesOrders extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  lines: LinesAPI.Lines = new LinesAPI.Lines(this._client);
}

SalesOrders.Actions = Actions;
SalesOrders.Lines = Lines;

export declare namespace SalesOrders {
  export { Actions as Actions };

  export { Lines as Lines };
}
