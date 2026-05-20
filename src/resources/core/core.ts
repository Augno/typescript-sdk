// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import { Actions } from './actions';
import * as AnalyticsAPI from './analytics';
import { Analytics } from './analytics';
import * as AuditEventsAPI from './audit-events';
import {
  AuditEvent,
  AuditEventRetrieveAuditEventsParams,
  AuditEventRetrieveAuditEventsResponse,
  AuditEventRetrieveParams,
  AuditEventRetrieveResourceTypesResponse,
  AuditEvents,
} from './audit-events';
import * as EmailLogsAPI from './email-logs';
import {
  EmailLog,
  EmailLogRetrieveEmailLogsParams,
  EmailLogRetrieveEmailLogsResponse,
  EmailLogRetrieveParams,
  EmailLogs,
} from './email-logs';
import * as RequestLogsAPI from './request-logs';
import {
  RequestLog,
  RequestLogRetrieveParams,
  RequestLogRetrieveRequestLogsParams,
  RequestLogRetrieveRequestLogsResponse,
  RequestLogs,
} from './request-logs';
import * as SandboxesAPI from './sandboxes';
import {
  Sandbox,
  SandboxCreateParams,
  SandboxDeleteResponse,
  SandboxListParams,
  SandboxListResponse,
  SandboxRetrieveParams,
  Sandboxes,
} from './sandboxes';
import * as SysPropertiesAPI from './sys-properties';
import { SysProperties } from './sys-properties';
import * as AddressesAPI from './addresses/addresses';
import {
  AddressRetrieveSuggestionsParams,
  AddressRetrieveSuggestionsResponse,
  Addresses,
} from './addresses/addresses';

export class Core extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  addresses: AddressesAPI.Addresses = new AddressesAPI.Addresses(this._client);
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  auditEvents: AuditEventsAPI.AuditEvents = new AuditEventsAPI.AuditEvents(this._client);
  emailLogs: EmailLogsAPI.EmailLogs = new EmailLogsAPI.EmailLogs(this._client);
  requestLogs: RequestLogsAPI.RequestLogs = new RequestLogsAPI.RequestLogs(this._client);
  sandboxes: SandboxesAPI.Sandboxes = new SandboxesAPI.Sandboxes(this._client);
  sysProperties: SysPropertiesAPI.SysProperties = new SysPropertiesAPI.SysProperties(this._client);
}

Core.Actions = Actions;
Core.Addresses = Addresses;
Core.Analytics = Analytics;
Core.AuditEvents = AuditEvents;
Core.EmailLogs = EmailLogs;
Core.RequestLogs = RequestLogs;
Core.Sandboxes = Sandboxes;
Core.SysProperties = SysProperties;

export declare namespace Core {
  export { Actions as Actions };

  export {
    Addresses as Addresses,
    type AddressRetrieveSuggestionsResponse as AddressRetrieveSuggestionsResponse,
    type AddressRetrieveSuggestionsParams as AddressRetrieveSuggestionsParams,
  };

  export { Analytics as Analytics };

  export {
    AuditEvents as AuditEvents,
    type AuditEvent as AuditEvent,
    type AuditEventRetrieveAuditEventsResponse as AuditEventRetrieveAuditEventsResponse,
    type AuditEventRetrieveResourceTypesResponse as AuditEventRetrieveResourceTypesResponse,
    type AuditEventRetrieveParams as AuditEventRetrieveParams,
    type AuditEventRetrieveAuditEventsParams as AuditEventRetrieveAuditEventsParams,
  };

  export {
    EmailLogs as EmailLogs,
    type EmailLog as EmailLog,
    type EmailLogRetrieveEmailLogsResponse as EmailLogRetrieveEmailLogsResponse,
    type EmailLogRetrieveParams as EmailLogRetrieveParams,
    type EmailLogRetrieveEmailLogsParams as EmailLogRetrieveEmailLogsParams,
  };

  export {
    RequestLogs as RequestLogs,
    type RequestLog as RequestLog,
    type RequestLogRetrieveRequestLogsResponse as RequestLogRetrieveRequestLogsResponse,
    type RequestLogRetrieveParams as RequestLogRetrieveParams,
    type RequestLogRetrieveRequestLogsParams as RequestLogRetrieveRequestLogsParams,
  };

  export {
    Sandboxes as Sandboxes,
    type Sandbox as Sandbox,
    type SandboxListResponse as SandboxListResponse,
    type SandboxDeleteResponse as SandboxDeleteResponse,
    type SandboxCreateParams as SandboxCreateParams,
    type SandboxRetrieveParams as SandboxRetrieveParams,
    type SandboxListParams as SandboxListParams,
  };

  export { SysProperties as SysProperties };
}
