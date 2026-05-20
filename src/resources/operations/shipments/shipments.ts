// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import { Actions } from './actions';
import * as LinesAPI from './lines';
import { Lines } from './lines';

export class Shipments extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  lines: LinesAPI.Lines = new LinesAPI.Lines(this._client);
}

Shipments.Actions = Actions;
Shipments.Lines = Lines;

export declare namespace Shipments {
  export { Actions as Actions };

  export { Lines as Lines };
}
