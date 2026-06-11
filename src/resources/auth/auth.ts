// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from './api-keys/api-keys';
import {
  APIKey,
  APIKeyCreateParams,
  APIKeyDeleteResponse,
  APIKeyListParams,
  APIKeyRetrieveParams,
  APIKeys,
  Account,
  AccountBranding,
  AccountPortal,
  Address,
  CreateAPIKeyRequest,
  CreatedAPIKey,
  Geolocation,
  ListAPIKey,
  Owner,
  PageInfo,
  Role,
} from './api-keys/api-keys';

export class Auth extends APIResource {
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);
}

Auth.APIKeys = APIKeys;

export declare namespace Auth {
  export {
    APIKeys as APIKeys,
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPortal as AccountPortal,
    type Address as Address,
    type APIKey as APIKey,
    type CreateAPIKeyRequest as CreateAPIKeyRequest,
    type CreatedAPIKey as CreatedAPIKey,
    type Geolocation as Geolocation,
    type ListAPIKey as ListAPIKey,
    type Owner as Owner,
    type PageInfo as PageInfo,
    type Role as Role,
    type APIKeyDeleteResponse as APIKeyDeleteResponse,
    type APIKeyRetrieveParams as APIKeyRetrieveParams,
    type APIKeyListParams as APIKeyListParams,
    type APIKeyCreateParams as APIKeyCreateParams,
  };
}
