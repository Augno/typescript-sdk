// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import { Actions } from './actions';
import * as APIKeysAPI from './api-keys/api-keys';
import {
  APIKey,
  APIKeyAPIKeysParams,
  APIKeyDeleteResponse,
  APIKeyRetrieveAPIKeysParams,
  APIKeyRetrieveAPIKeysResponse,
  APIKeyRetrieveParams,
  APIKeys,
  CreatedAPIKey,
} from './api-keys/api-keys';
import * as PasswordsAPI from './passwords/passwords';
import { Passwords } from './passwords/passwords';
import * as RegistrationSessionsAPI from './registration-sessions/registration-sessions';
import { RegistrationSessions } from './registration-sessions/registration-sessions';

export class Auth extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);
  passwords: PasswordsAPI.Passwords = new PasswordsAPI.Passwords(this._client);
  registrationSessions: RegistrationSessionsAPI.RegistrationSessions =
    new RegistrationSessionsAPI.RegistrationSessions(this._client);
}

Auth.Actions = Actions;
Auth.APIKeys = APIKeys;
Auth.Passwords = Passwords;
Auth.RegistrationSessions = RegistrationSessions;

export declare namespace Auth {
  export { Actions as Actions };

  export {
    APIKeys as APIKeys,
    type APIKey as APIKey,
    type CreatedAPIKey as CreatedAPIKey,
    type APIKeyDeleteResponse as APIKeyDeleteResponse,
    type APIKeyRetrieveAPIKeysResponse as APIKeyRetrieveAPIKeysResponse,
    type APIKeyRetrieveParams as APIKeyRetrieveParams,
    type APIKeyAPIKeysParams as APIKeyAPIKeysParams,
    type APIKeyRetrieveAPIKeysParams as APIKeyRetrieveAPIKeysParams,
  };

  export { Passwords as Passwords };

  export { RegistrationSessions as RegistrationSessions };
}
