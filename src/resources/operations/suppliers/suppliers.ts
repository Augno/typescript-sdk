// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import { Actions } from './actions';
import * as MaterialsAPI from './materials';
import { Materials } from './materials';

export class Suppliers extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  materials: MaterialsAPI.Materials = new MaterialsAPI.Materials(this._client);
}

Suppliers.Actions = Actions;
Suppliers.Materials = Materials;

export declare namespace Suppliers {
  export { Actions as Actions };

  export { Materials as Materials };
}
