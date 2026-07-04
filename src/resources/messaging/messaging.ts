// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RequestLogsAPI from '../core/request-logs';
import * as BlocksAPI from './blocks';
import {
  AccountUser,
  BlockCreateParams,
  BlockDeleteResponse,
  BlockListParams,
  BlockRequest,
  Blocks,
  Consumption,
  Department,
  ListConsumption,
  ListLocation,
  ListMachine,
  ListMessagingBlock,
  ListProductionStep,
  ListScanningStation,
  Location,
  LocationTypeCode,
  Machine,
  MessagingBlock,
  ProductionOutput,
  ProductionStep,
  ScanningStation,
  User,
} from './blocks';
import * as EmailInboxesAPI from './email-inboxes';
import {
  CreateEmailInboxRequest,
  EmailInbox,
  EmailInboxCreateParams,
  EmailInboxDeleteResponse,
  EmailInboxListParams,
  EmailInboxRetrieveParams,
  EmailInboxUpdateParams,
  EmailInboxes,
  ListEmailInbox,
  UpdateEmailInboxRequest,
} from './email-inboxes';
import * as PreferencesAPI from './preferences';
import {
  ListNotificationPreference,
  NotificationPreference,
  PreferenceUpdateParams,
  Preferences,
  UpsertNotificationPreferenceRequest,
} from './preferences';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import * as AnnouncementsAPI from './announcements/announcements';
import {
  Announcement,
  AnnouncementListParams,
  AnnouncementRetrieveParams,
  Announcements,
  ListAnnouncement,
} from './announcements/announcements';
import * as ConversationsAPI from './conversations/conversations';
import {
  AgentAction,
  AgentDefinition,
  AgentDefinitionConfig,
  AgentDefinitionTool,
  AgentRun,
  AgentRunStep,
  AvailableTool,
  Conversation,
  ConversationCreateParams,
  ConversationListParams,
  ConversationParticipant,
  ConversationRetrieveParams,
  ConversationUpdateParams,
  Conversations,
  CreateConversationRequest,
  ListAgentAction,
  ListAgentDefinitionTool,
  ListAgentRunStep,
  ListConversation,
  ListConversationParticipant,
  ListMessageAttachment,
  ListMessagingGroupMember,
  Message,
  MessageAttachment,
  MessagingGroup,
  MessagingGroupMember,
  ReadCursor,
  TriggerConfig,
  UpdateConversationRequest,
} from './conversations/conversations';
import * as EmailDomainsAPI from './email-domains/email-domains';
import {
  CreateEmailDomainRequest,
  EmailDomain,
  EmailDomainCreateParams,
  EmailDomainDeleteResponse,
  EmailDomains,
  ListEmailDomain,
} from './email-domains/email-domains';
import * as GroupsAPI from './groups/groups';
import {
  CreateMessagingGroupRequest,
  GroupCreateParams,
  GroupDeleteResponse,
  GroupUpdateParams,
  Groups,
  ListMessagingGroup,
  UpdateMessagingGroupRequest,
} from './groups/groups';
import * as MessagesAPI from './messages/messages';
import { MessageUpdateParams, Messages, UpdateDraftRequest } from './messages/messages';
import * as NotificationsAPI from './notifications/notifications';
import {
  ListNotification,
  ListNotificationUnreadSummaryAccount,
  Notification,
  NotificationCreateParams,
  NotificationListParams,
  NotificationRetrieveParams,
  NotificationSendResult,
  NotificationTargetInput,
  NotificationUnreadCount,
  NotificationUnreadSummary,
  NotificationUnreadSummaryAccount,
  Notifications,
  SendNotificationRequest,
} from './notifications/notifications';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * List messageable contacts (the messaging directory).
 */
export class Messaging extends APIResource {
  notifications: NotificationsAPI.Notifications = new NotificationsAPI.Notifications(this._client);
  announcements: AnnouncementsAPI.Announcements = new AnnouncementsAPI.Announcements(this._client);
  conversations: ConversationsAPI.Conversations = new ConversationsAPI.Conversations(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  blocks: BlocksAPI.Blocks = new BlocksAPI.Blocks(this._client);
  preferences: PreferencesAPI.Preferences = new PreferencesAPI.Preferences(this._client);
  emailDomains: EmailDomainsAPI.EmailDomains = new EmailDomainsAPI.EmailDomains(this._client);
  emailInboxes: EmailInboxesAPI.EmailInboxes = new EmailInboxesAPI.EmailInboxes(this._client);

  /**
   * Lists the caller's messageable contacts.
   *
   * This endpoint requires the permission: `messaging:read`.
   *
   * @example
   * ```ts
   * const listActor = await client.messaging.retrieveContacts();
   * ```
   */
  retrieveContacts(
    query: MessagingRetrieveContactsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListActor> {
    return this._client.get('/v1/messaging/contacts', { query, ...options });
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ListActor {
  /**
   * Resources in this page.
   */
  data: Array<RequestLogsAPI.Actor>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

export interface MessagingRetrieveContactsParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'role'>;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;
}

Messaging.Notifications = Notifications;
Messaging.Announcements = Announcements;
Messaging.Conversations = Conversations;
Messaging.Messages = Messages;
Messaging.Groups = Groups;
Messaging.Blocks = Blocks;
Messaging.Preferences = Preferences;
Messaging.EmailDomains = EmailDomains;
Messaging.EmailInboxes = EmailInboxes;

export declare namespace Messaging {
  export {
    type ListActor as ListActor,
    type MessagingRetrieveContactsParams as MessagingRetrieveContactsParams,
  };

  export {
    Notifications as Notifications,
    type ListNotification as ListNotification,
    type ListNotificationUnreadSummaryAccount as ListNotificationUnreadSummaryAccount,
    type Notification as Notification,
    type NotificationSendResult as NotificationSendResult,
    type NotificationTargetInput as NotificationTargetInput,
    type NotificationUnreadCount as NotificationUnreadCount,
    type NotificationUnreadSummary as NotificationUnreadSummary,
    type NotificationUnreadSummaryAccount as NotificationUnreadSummaryAccount,
    type SendNotificationRequest as SendNotificationRequest,
    type NotificationCreateParams as NotificationCreateParams,
    type NotificationListParams as NotificationListParams,
    type NotificationRetrieveParams as NotificationRetrieveParams,
  };

  export {
    Announcements as Announcements,
    type Announcement as Announcement,
    type ListAnnouncement as ListAnnouncement,
    type AnnouncementListParams as AnnouncementListParams,
    type AnnouncementRetrieveParams as AnnouncementRetrieveParams,
  };

  export {
    Conversations as Conversations,
    type AgentAction as AgentAction,
    type AgentDefinition as AgentDefinition,
    type AgentDefinitionConfig as AgentDefinitionConfig,
    type AgentDefinitionTool as AgentDefinitionTool,
    type AgentRun as AgentRun,
    type AgentRunStep as AgentRunStep,
    type AvailableTool as AvailableTool,
    type Conversation as Conversation,
    type ConversationParticipant as ConversationParticipant,
    type CreateConversationRequest as CreateConversationRequest,
    type ListAgentAction as ListAgentAction,
    type ListAgentDefinitionTool as ListAgentDefinitionTool,
    type ListAgentRunStep as ListAgentRunStep,
    type ListConversation as ListConversation,
    type ListConversationParticipant as ListConversationParticipant,
    type ListMessageAttachment as ListMessageAttachment,
    type ListMessagingGroupMember as ListMessagingGroupMember,
    type Message as Message,
    type MessageAttachment as MessageAttachment,
    type MessagingGroup as MessagingGroup,
    type MessagingGroupMember as MessagingGroupMember,
    type ReadCursor as ReadCursor,
    type TriggerConfig as TriggerConfig,
    type UpdateConversationRequest as UpdateConversationRequest,
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationListParams as ConversationListParams,
    type ConversationRetrieveParams as ConversationRetrieveParams,
    type ConversationUpdateParams as ConversationUpdateParams,
  };

  export {
    Messages as Messages,
    type UpdateDraftRequest as UpdateDraftRequest,
    type MessageUpdateParams as MessageUpdateParams,
  };

  export {
    Groups as Groups,
    type CreateMessagingGroupRequest as CreateMessagingGroupRequest,
    type ListMessagingGroup as ListMessagingGroup,
    type UpdateMessagingGroupRequest as UpdateMessagingGroupRequest,
    type GroupDeleteResponse as GroupDeleteResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
  };

  export {
    Blocks as Blocks,
    type AccountUser as AccountUser,
    type BlockRequest as BlockRequest,
    type Consumption as Consumption,
    type Department as Department,
    type ListConsumption as ListConsumption,
    type ListLocation as ListLocation,
    type ListMachine as ListMachine,
    type ListMessagingBlock as ListMessagingBlock,
    type ListProductionStep as ListProductionStep,
    type ListScanningStation as ListScanningStation,
    type Location as Location,
    type LocationTypeCode as LocationTypeCode,
    type Machine as Machine,
    type MessagingBlock as MessagingBlock,
    type ProductionOutput as ProductionOutput,
    type ProductionStep as ProductionStep,
    type ScanningStation as ScanningStation,
    type User as User,
    type BlockDeleteResponse as BlockDeleteResponse,
    type BlockCreateParams as BlockCreateParams,
    type BlockListParams as BlockListParams,
  };

  export {
    Preferences as Preferences,
    type ListNotificationPreference as ListNotificationPreference,
    type NotificationPreference as NotificationPreference,
    type UpsertNotificationPreferenceRequest as UpsertNotificationPreferenceRequest,
    type PreferenceUpdateParams as PreferenceUpdateParams,
  };

  export {
    EmailDomains as EmailDomains,
    type CreateEmailDomainRequest as CreateEmailDomainRequest,
    type EmailDomain as EmailDomain,
    type ListEmailDomain as ListEmailDomain,
    type EmailDomainDeleteResponse as EmailDomainDeleteResponse,
    type EmailDomainCreateParams as EmailDomainCreateParams,
  };

  export {
    EmailInboxes as EmailInboxes,
    type CreateEmailInboxRequest as CreateEmailInboxRequest,
    type EmailInbox as EmailInbox,
    type ListEmailInbox as ListEmailInbox,
    type UpdateEmailInboxRequest as UpdateEmailInboxRequest,
    type EmailInboxDeleteResponse as EmailInboxDeleteResponse,
    type EmailInboxCreateParams as EmailInboxCreateParams,
    type EmailInboxListParams as EmailInboxListParams,
    type EmailInboxRetrieveParams as EmailInboxRetrieveParams,
    type EmailInboxUpdateParams as EmailInboxUpdateParams,
  };
}
