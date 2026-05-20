// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TerritoriesAPI from './territories';
import { Territories } from './territories';

export class Accounts extends APIResource {
  territories: TerritoriesAPI.Territories = new TerritoriesAPI.Territories(this._client);
}

Accounts.Territories = Territories;

export declare namespace Accounts {
  export { Territories as Territories };
}
