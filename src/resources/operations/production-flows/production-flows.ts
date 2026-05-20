// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import { Actions } from './actions';

export class ProductionFlows extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
}

ProductionFlows.Actions = Actions;

export declare namespace ProductionFlows {
  export { Actions as Actions };
}
