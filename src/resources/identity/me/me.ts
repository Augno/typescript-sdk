// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TenancyAPI from './tenancy';
import { Tenancy } from './tenancy';

export class Me extends APIResource {
  tenancy: TenancyAPI.Tenancy = new TenancyAPI.Tenancy(this._client);
}

Me.Tenancy = Tenancy;

export declare namespace Me {
  export { Tenancy as Tenancy };
}
