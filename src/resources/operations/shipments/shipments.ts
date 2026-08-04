// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import {
  ActionRateShopParams,
  Actions,
  ListRateShopOption,
  ParcelInput,
  RateShopOption,
  RateShopRequest,
  RateShopResult,
} from './actions';

export class Shipments extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
}

Shipments.Actions = Actions;

export declare namespace Shipments {
  export {
    Actions as Actions,
    type ListRateShopOption as ListRateShopOption,
    type ParcelInput as ParcelInput,
    type RateShopOption as RateShopOption,
    type RateShopRequest as RateShopRequest,
    type RateShopResult as RateShopResult,
    type ActionRateShopParams as ActionRateShopParams,
  };
}
