// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SalesTargetsAPI from './sales-targets';
import { SalesTargets } from './sales-targets';

export class AccountUsers extends APIResource {
  salesTargets: SalesTargetsAPI.SalesTargets = new SalesTargetsAPI.SalesTargets(this._client);
}

AccountUsers.SalesTargets = SalesTargets;

export declare namespace AccountUsers {
  export { SalesTargets as SalesTargets };
}
