// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RolesAPI from './roles';
import {
  CreateRoleRequest,
  ListRole,
  RoleCreateParams,
  RoleDeleteResponse,
  RoleListParams,
  RoleRetrieveParams,
  RoleUpdateParams,
  Roles,
  UpdateRoleRequest,
} from './roles';
import * as AccountUsersAPI from './account-users/account-users';
import {
  AccountUserCreateParams,
  AccountUserListParams,
  AccountUserRetrieveParams,
  AccountUserUpdateParams,
  AccountUsers,
  CreateAccountUserRequest,
  ListAccountUser,
  NotificationPreferenceItem,
  UpdateAccountUserRequest,
} from './account-users/account-users';

export class Identity extends APIResource {
  accountUsers: AccountUsersAPI.AccountUsers = new AccountUsersAPI.AccountUsers(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
}

Identity.AccountUsers = AccountUsers;
Identity.Roles = Roles;

export declare namespace Identity {
  export {
    AccountUsers as AccountUsers,
    type CreateAccountUserRequest as CreateAccountUserRequest,
    type ListAccountUser as ListAccountUser,
    type NotificationPreferenceItem as NotificationPreferenceItem,
    type UpdateAccountUserRequest as UpdateAccountUserRequest,
    type AccountUserCreateParams as AccountUserCreateParams,
    type AccountUserRetrieveParams as AccountUserRetrieveParams,
    type AccountUserUpdateParams as AccountUserUpdateParams,
    type AccountUserListParams as AccountUserListParams,
  };

  export {
    Roles as Roles,
    type CreateRoleRequest as CreateRoleRequest,
    type ListRole as ListRole,
    type UpdateRoleRequest as UpdateRoleRequest,
    type RoleDeleteResponse as RoleDeleteResponse,
    type RoleCreateParams as RoleCreateParams,
    type RoleRetrieveParams as RoleRetrieveParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleListParams as RoleListParams,
  };
}
