// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as IntegrationsAPI from './integrations';
import {
  AccountIntegration,
  CreateAccountIntegrationRequest,
  IntegrationCreateParams,
  IntegrationListParams,
  IntegrationUpdateParams,
  Integrations,
  ListAccountIntegration,
  UpdateAccountIntegrationRequest,
} from './integrations';
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
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
}

Identity.AccountUsers = AccountUsers;
Identity.Integrations = Integrations;
Identity.Roles = Roles;

export declare namespace Identity {
  export {
    AccountUsers as AccountUsers,
    type CreateAccountUserRequest as CreateAccountUserRequest,
    type ListAccountUser as ListAccountUser,
    type NotificationPreferenceItem as NotificationPreferenceItem,
    type UpdateAccountUserRequest as UpdateAccountUserRequest,
    type AccountUserListParams as AccountUserListParams,
    type AccountUserRetrieveParams as AccountUserRetrieveParams,
    type AccountUserCreateParams as AccountUserCreateParams,
    type AccountUserUpdateParams as AccountUserUpdateParams,
  };

  export {
    Integrations as Integrations,
    type AccountIntegration as AccountIntegration,
    type CreateAccountIntegrationRequest as CreateAccountIntegrationRequest,
    type ListAccountIntegration as ListAccountIntegration,
    type UpdateAccountIntegrationRequest as UpdateAccountIntegrationRequest,
    type IntegrationListParams as IntegrationListParams,
    type IntegrationCreateParams as IntegrationCreateParams,
    type IntegrationUpdateParams as IntegrationUpdateParams,
  };

  export {
    Roles as Roles,
    type CreateRoleRequest as CreateRoleRequest,
    type ListRole as ListRole,
    type UpdateRoleRequest as UpdateRoleRequest,
    type RoleDeleteResponse as RoleDeleteResponse,
    type RoleListParams as RoleListParams,
    type RoleRetrieveParams as RoleRetrieveParams,
    type RoleCreateParams as RoleCreateParams,
    type RoleUpdateParams as RoleUpdateParams,
  };
}
