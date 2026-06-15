// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountsAPI from './accounts';
import { Account, Accounts } from './accounts';
import * as ChildAccountsAPI from './child-accounts';
import { ChildAccounts } from './child-accounts';
import * as RolesAPI from './roles';
import {
  Role,
  RoleCreateParams,
  RoleDeleteResponse,
  RoleListParams,
  RoleListResponse,
  RoleRetrieveParams,
  RoleUpdateParams,
  Roles,
} from './roles';
import * as AccountUsersAPI from './account-users/account-users';
import {
  AccountUser,
  AccountUserAccountUsersParams,
  AccountUserRetrieveAccountUsersParams,
  AccountUserRetrieveAccountUsersResponse,
  AccountUserRetrieveParams,
  AccountUserUpdateParams,
  AccountUsers,
  NotificationPreferenceItem,
} from './account-users/account-users';
import * as IntegrationsAPI from './integrations/integrations';
import { Integrations } from './integrations/integrations';
import * as MeAPI from './me/me';
import { Me } from './me/me';
import * as UsersAPI from './users/users';
import { Users } from './users/users';

export class Identity extends APIResource {
  accountUsers: AccountUsersAPI.AccountUsers = new AccountUsersAPI.AccountUsers(this._client);
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  childAccounts: ChildAccountsAPI.ChildAccounts = new ChildAccountsAPI.ChildAccounts(this._client);
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
  me: MeAPI.Me = new MeAPI.Me(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
}

Identity.AccountUsers = AccountUsers;
Identity.Accounts = Accounts;
Identity.ChildAccounts = ChildAccounts;
Identity.Integrations = Integrations;
Identity.Me = Me;
Identity.Roles = Roles;
Identity.Users = Users;

export declare namespace Identity {
  export {
    AccountUsers as AccountUsers,
    type AccountUser as AccountUser,
    type NotificationPreferenceItem as NotificationPreferenceItem,
    type AccountUserRetrieveAccountUsersResponse as AccountUserRetrieveAccountUsersResponse,
    type AccountUserRetrieveParams as AccountUserRetrieveParams,
    type AccountUserUpdateParams as AccountUserUpdateParams,
    type AccountUserAccountUsersParams as AccountUserAccountUsersParams,
    type AccountUserRetrieveAccountUsersParams as AccountUserRetrieveAccountUsersParams,
  };

  export { Accounts as Accounts, type Account as Account };

  export { ChildAccounts as ChildAccounts };

  export { Integrations as Integrations };

  export { Me as Me };

  export {
    Roles as Roles,
    type Role as Role,
    type RoleListResponse as RoleListResponse,
    type RoleDeleteResponse as RoleDeleteResponse,
    type RoleCreateParams as RoleCreateParams,
    type RoleRetrieveParams as RoleRetrieveParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleListParams as RoleListParams,
  };

  export { Users as Users };
}
