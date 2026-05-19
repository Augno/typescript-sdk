// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountGroupsAPI from './account-groups';
import {
  AccountGroupCreateParams,
  AccountGroupDeleteResponse,
  AccountGroupListResponse,
  AccountGroupUpdateParams,
  AccountGroups,
  ProductLineAccess as AccountGroupsAPIProductLineAccess,
} from './account-groups';

export class ProductLineAccess extends APIResource {
  accountGroups: AccountGroupsAPI.AccountGroups = new AccountGroupsAPI.AccountGroups(this._client);
}

ProductLineAccess.AccountGroups = AccountGroups;

export declare namespace ProductLineAccess {
  export {
    AccountGroups as AccountGroups,
    type AccountGroupsAPIProductLineAccess as ProductLineAccess,
    type AccountGroupListResponse as AccountGroupListResponse,
    type AccountGroupDeleteResponse as AccountGroupDeleteResponse,
    type AccountGroupCreateParams as AccountGroupCreateParams,
    type AccountGroupUpdateParams as AccountGroupUpdateParams,
  };
}
