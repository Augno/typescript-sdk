// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuditEventsAPI from './audit-events';
import {
  AuditEvent,
  AuditEventListParams,
  AuditEventRetrieveParams,
  AuditEvents,
  AuditFieldChange,
  ListAuditEvent,
  ListAuditFieldChange,
  ListObjectType,
} from './audit-events';
import * as EmailLogsAPI from './email-logs';
import { EmailLog, EmailLogListParams, EmailLogRetrieveParams, EmailLogs, ListEmailLog } from './email-logs';
import * as RequestLogsAPI from './request-logs';
import {
  Actor,
  ListRequestLog,
  RequestLog,
  RequestLogListParams,
  RequestLogRetrieveParams,
  RequestLogs,
} from './request-logs';
import * as SandboxesAPI from './sandboxes';
import {
  CreateSandboxRequest,
  ListSandbox,
  Sandbox,
  SandboxCreateParams,
  SandboxDeleteResponse,
  SandboxListParams,
  SandboxRetrieveParams,
  Sandboxes,
} from './sandboxes';
import * as AddressesAPI from './addresses/addresses';
import {
  AddressRetrieveSuggestionsParams,
  AddressSuggestion,
  Addresses,
  ListAddressSuggestion,
} from './addresses/addresses';

export class Core extends APIResource {
  sandboxes: SandboxesAPI.Sandboxes = new SandboxesAPI.Sandboxes(this._client);
  requestLogs: RequestLogsAPI.RequestLogs = new RequestLogsAPI.RequestLogs(this._client);
  auditEvents: AuditEventsAPI.AuditEvents = new AuditEventsAPI.AuditEvents(this._client);
  addresses: AddressesAPI.Addresses = new AddressesAPI.Addresses(this._client);
  emailLogs: EmailLogsAPI.EmailLogs = new EmailLogsAPI.EmailLogs(this._client);
}

Core.Sandboxes = Sandboxes;
Core.RequestLogs = RequestLogs;
Core.AuditEvents = AuditEvents;
Core.Addresses = Addresses;
Core.EmailLogs = EmailLogs;

export declare namespace Core {
  export {
    Sandboxes as Sandboxes,
    type CreateSandboxRequest as CreateSandboxRequest,
    type ListSandbox as ListSandbox,
    type Sandbox as Sandbox,
    type SandboxDeleteResponse as SandboxDeleteResponse,
    type SandboxListParams as SandboxListParams,
    type SandboxRetrieveParams as SandboxRetrieveParams,
    type SandboxCreateParams as SandboxCreateParams,
  };

  export {
    RequestLogs as RequestLogs,
    type Actor as Actor,
    type ListRequestLog as ListRequestLog,
    type RequestLog as RequestLog,
    type RequestLogListParams as RequestLogListParams,
    type RequestLogRetrieveParams as RequestLogRetrieveParams,
  };

  export {
    AuditEvents as AuditEvents,
    type AuditEvent as AuditEvent,
    type AuditFieldChange as AuditFieldChange,
    type ListAuditEvent as ListAuditEvent,
    type ListAuditFieldChange as ListAuditFieldChange,
    type ListObjectType as ListObjectType,
    type AuditEventListParams as AuditEventListParams,
    type AuditEventRetrieveParams as AuditEventRetrieveParams,
  };

  export {
    Addresses as Addresses,
    type AddressSuggestion as AddressSuggestion,
    type ListAddressSuggestion as ListAddressSuggestion,
    type AddressRetrieveSuggestionsParams as AddressRetrieveSuggestionsParams,
  };

  export {
    EmailLogs as EmailLogs,
    type EmailLog as EmailLog,
    type ListEmailLog as ListEmailLog,
    type EmailLogListParams as EmailLogListParams,
    type EmailLogRetrieveParams as EmailLogRetrieveParams,
  };
}
