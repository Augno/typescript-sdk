// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuditEventsAPI from './audit-events';
import {
  Account,
  AccountBranding,
  AccountPortal,
  Actor,
  Address,
  AuditEvent,
  AuditEventListParams,
  AuditEventRetrieveParams,
  AuditEvents,
  AuditFieldChange,
  Geolocation,
  ListAuditEvent,
  ListAuditFieldChange,
  ListObjectType,
  Owner,
  PageInfo,
  RequestLog,
  Role,
} from './audit-events';
import * as EmailLogsAPI from './email-logs';
import {
  Account as EmailLogsAPIAccount,
  AccountBranding as EmailLogsAPIAccountBranding,
  AccountPortal as EmailLogsAPIAccountPortal,
  Actor as EmailLogsAPIActor,
  Address as EmailLogsAPIAddress,
  EmailLog,
  EmailLogListParams,
  EmailLogRetrieveParams,
  EmailLogs,
  Geolocation as EmailLogsAPIGeolocation,
  ListEmailLog,
  Owner as EmailLogsAPIOwner,
  PageInfo as EmailLogsAPIPageInfo,
  Role as EmailLogsAPIRole,
} from './email-logs';
import * as RequestLogsAPI from './request-logs';
import {
  Account as RequestLogsAPIAccount,
  AccountBranding as RequestLogsAPIAccountBranding,
  AccountPortal as RequestLogsAPIAccountPortal,
  Actor as RequestLogsAPIActor,
  Address as RequestLogsAPIAddress,
  Geolocation as RequestLogsAPIGeolocation,
  ListRequestLog,
  Owner as RequestLogsAPIOwner,
  PageInfo as RequestLogsAPIPageInfo,
  RequestLog as RequestLogsAPIRequestLog,
  RequestLogListParams,
  RequestLogRetrieveParams,
  RequestLogs,
  Role as RequestLogsAPIRole,
} from './request-logs';
import * as SandboxesAPI from './sandboxes';
import {
  Account as SandboxesAPIAccount,
  AccountBranding as SandboxesAPIAccountBranding,
  AccountPortal as SandboxesAPIAccountPortal,
  Address as SandboxesAPIAddress,
  CreateSandboxRequest,
  Geolocation as SandboxesAPIGeolocation,
  ListSandbox,
  PageInfo as SandboxesAPIPageInfo,
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
  PageInfo as AddressesAPIPageInfo,
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
    type SandboxesAPIAccount as Account,
    type SandboxesAPIAccountBranding as AccountBranding,
    type SandboxesAPIAccountPortal as AccountPortal,
    type SandboxesAPIAddress as Address,
    type CreateSandboxRequest as CreateSandboxRequest,
    type SandboxesAPIGeolocation as Geolocation,
    type ListSandbox as ListSandbox,
    type SandboxesAPIPageInfo as PageInfo,
    type Sandbox as Sandbox,
    type SandboxDeleteResponse as SandboxDeleteResponse,
    type SandboxCreateParams as SandboxCreateParams,
    type SandboxRetrieveParams as SandboxRetrieveParams,
    type SandboxListParams as SandboxListParams,
  };

  export {
    RequestLogs as RequestLogs,
    type RequestLogsAPIAccount as Account,
    type RequestLogsAPIAccountBranding as AccountBranding,
    type RequestLogsAPIAccountPortal as AccountPortal,
    type RequestLogsAPIActor as Actor,
    type RequestLogsAPIAddress as Address,
    type RequestLogsAPIGeolocation as Geolocation,
    type ListRequestLog as ListRequestLog,
    type RequestLogsAPIOwner as Owner,
    type RequestLogsAPIPageInfo as PageInfo,
    type RequestLogsAPIRequestLog as RequestLog,
    type RequestLogsAPIRole as Role,
    type RequestLogRetrieveParams as RequestLogRetrieveParams,
    type RequestLogListParams as RequestLogListParams,
  };

  export {
    AuditEvents as AuditEvents,
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPortal as AccountPortal,
    type Actor as Actor,
    type Address as Address,
    type AuditEvent as AuditEvent,
    type AuditFieldChange as AuditFieldChange,
    type Geolocation as Geolocation,
    type ListAuditEvent as ListAuditEvent,
    type ListAuditFieldChange as ListAuditFieldChange,
    type ListObjectType as ListObjectType,
    type Owner as Owner,
    type PageInfo as PageInfo,
    type RequestLog as RequestLog,
    type Role as Role,
    type AuditEventRetrieveParams as AuditEventRetrieveParams,
    type AuditEventListParams as AuditEventListParams,
  };

  export {
    Addresses as Addresses,
    type AddressSuggestion as AddressSuggestion,
    type ListAddressSuggestion as ListAddressSuggestion,
    type AddressesAPIPageInfo as PageInfo,
    type AddressRetrieveSuggestionsParams as AddressRetrieveSuggestionsParams,
  };

  export {
    EmailLogs as EmailLogs,
    type EmailLogsAPIAccount as Account,
    type EmailLogsAPIAccountBranding as AccountBranding,
    type EmailLogsAPIAccountPortal as AccountPortal,
    type EmailLogsAPIActor as Actor,
    type EmailLogsAPIAddress as Address,
    type EmailLog as EmailLog,
    type EmailLogsAPIGeolocation as Geolocation,
    type ListEmailLog as ListEmailLog,
    type EmailLogsAPIOwner as Owner,
    type EmailLogsAPIPageInfo as PageInfo,
    type EmailLogsAPIRole as Role,
    type EmailLogRetrieveParams as EmailLogRetrieveParams,
    type EmailLogListParams as EmailLogListParams,
  };
}
