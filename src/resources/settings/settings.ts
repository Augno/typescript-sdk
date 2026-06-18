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

export class Settings extends APIResource {
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
}

Settings.Integrations = Integrations;

export declare namespace Settings {
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
}
