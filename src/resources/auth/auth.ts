// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from './api-keys/api-keys';
import {
  APIKey,
  APIKeyCreateParams,
  APIKeyListParams,
  APIKeyListResponse,
  APIKeyRetrieveParams,
  APIKeyRevokeResponse,
  APIKeys,
  CreatedAPIKey,
} from './api-keys/api-keys';

export class Auth extends APIResource {
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);
}

Auth.APIKeys = APIKeys;

export declare namespace Auth {
  export {
    APIKeys as APIKeys,
    type APIKey as APIKey,
    type CreatedAPIKey as CreatedAPIKey,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyRevokeResponse as APIKeyRevokeResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyRetrieveParams as APIKeyRetrieveParams,
    type APIKeyListParams as APIKeyListParams,
  };
}
