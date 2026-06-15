// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as StripeAPI from './stripe';
import { Stripe } from './stripe';

export class Integrations extends APIResource {
  stripe: StripeAPI.Stripe = new StripeAPI.Stripe(this._client);
}

Integrations.Stripe = Stripe;

export declare namespace Integrations {
  export { Stripe as Stripe };
}
