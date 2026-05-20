// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import { Actions } from './actions';
import * as LinesAPI from './lines/lines';
import { Lines } from './lines/lines';

export class Picks extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  lines: LinesAPI.Lines = new LinesAPI.Lines(this._client);
}

Picks.Actions = Actions;
Picks.Lines = Lines;

export declare namespace Picks {
  export { Actions as Actions };

  export { Lines as Lines };
}
