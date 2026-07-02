// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CoreAPI from '../../core/core';
import * as RequestLogsAPI from '../../core/request-logs';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as ActionsAPI from './actions';
import {
  ActionArchiveParams,
  ActionAssignParams,
  ActionHideParams,
  ActionLeaveParams,
  ActionMuteParams,
  ActionReadParams,
  ActionRedactParams,
  ActionReportParams,
  ActionSetLegalHoldParams,
  ActionSetStatusParams,
  ActionUnarchiveParams,
  ActionUnhideParams,
  ActionUnmuteParams,
  Actions,
  AssignConversationRequest,
  MarkConversationReadRequest,
  MuteConversationRequest,
  ReportConversationRequest,
  SetLegalHoldRequest,
  SetWorkflowStatusRequest,
} from './actions';
import * as LinksAPI from './links';
import {
  AddConversationLinkRequest,
  ConversationLink,
  LinkCreateParams,
  LinkDeleteParams,
  LinkDeleteResponse,
  LinkListParams,
  Links,
  ListConversationLink,
} from './links';
import * as MessagesAPI from './messages';
import {
  ListMessage,
  MessageAttachmentInput,
  MessageCreateParams,
  MessageListParams,
  Messages,
  SendMessageRequest,
} from './messages';
import * as AttachmentsAPI from './attachments/attachments';
import { Attachments } from './attachments/attachments';
import * as ParticipantsAPI from './participants/participants';
import {
  AddParticipantRequest,
  ParticipantCreateParams,
  ParticipantDeleteParams,
  ParticipantDeleteResponse,
  Participants,
} from './participants/participants';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Create conversations, send and read messages (1:1 direct messages).
 */
export class Conversations extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  links: LinksAPI.Links = new LinksAPI.Links(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  participants: ParticipantsAPI.Participants = new ParticipantsAPI.Participants(this._client);
  attachments: AttachmentsAPI.Attachments = new AttachmentsAPI.Attachments(this._client);

  /**
   * Starts a conversation between participants.
   *
   * This endpoint requires the permission: `messaging:create`.
   *
   * @example
   * ```ts
   * const conversation =
   *   await client.messaging.conversations.create({
   *     type: 'group',
   *     group_id: 'cvgp_018e88072d1320808dc97abc',
   *     participant_account_user_ids: [
   *       'acus_01ea9983ddb41dacc44ecf997c',
   *     ],
   *     title: 'Order #1042 — shipping question',
   *     topic_resource_id: 'or_01d5034136c3ccc048abecc312',
   *     topic_resource_type: 'sales_order',
   *   });
   * ```
   */
  create(params: ConversationCreateParams, options?: RequestOptions): APIPromise<Conversation> {
    const { include, ...body } = params;
    return this._client.post('/v1/messaging/conversations', { query: { include }, body, ...options });
  }

  /**
   * Returns the caller's conversations, most-recently-active first.
   *
   * This endpoint requires the permission: `messaging:read`.
   *
   * @example
   * ```ts
   * const listConversation =
   *   await client.messaging.conversations.list();
   * ```
   */
  list(
    query: ConversationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListConversation> {
    return this._client.get('/v1/messaging/conversations', { query, ...options });
  }

  /**
   * Returns one conversation (with participants) the caller belongs to.
   *
   * This endpoint requires the permission: `messaging:read`.
   *
   * @example
   * ```ts
   * const conversation =
   *   await client.messaging.conversations.retrieve(
   *     'cv_01h9z8q1w2e3r4t5y6u7i8cv',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: ConversationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Conversation> {
    return this._client.get(path`/v1/messaging/conversations/${id}`, { query, ...options });
  }

  /**
   * Renames a conversation.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const conversation =
   *   await client.messaging.conversations.update(
   *     'cv_01h9z8q1w2e3r4t5y6u7i8cv',
   *     { title: 'Fulfillment war room' },
   *   );
   * ```
   */
  update(
    id: string,
    params: ConversationUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Conversation> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/messaging/conversations/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }
}

/**
 * A single tool invocation performed by an agent during a run.
 *
 * Each action records the tool that was called, its input and output, and any
 * human review decision.
 */
export interface AgentAction {
  /**
   * Agent action ID.
   */
  id: string;

  /**
   * When this action was created.
   */
  created_at: string;

  /**
   * Longer description of what the action does.
   */
  description: string | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  entity: CoreAPI.Entity | null;

  /**
   * Error message if the action failed.
   */
  error_message: string | null;

  /**
   * When the action was executed.
   */
  executed_at: string | null;

  /**
   * Arguments passed to the tool, as JSON.
   *
   * Shape depends on `tool`. Encoded as a JSON value (object, array, string, number,
   * boolean, or null), not a JSON-encoded string.
   */
  input: unknown | null;

  /**
   * Short human-readable label summarizing the action.
   */
  label: string | null;

  /**
   * Resource type identifier.
   */
  object: 'agent_action';

  /**
   * Result returned by the tool, as JSON.
   *
   * Recorded when the tool runs, so it is present even while the action is still
   * `pending_review` or `auto_approved`; the shape depends on `tool`, and it is `{}`
   * when the tool returned no output. Encoded as a JSON value (object, array,
   * string, number, boolean, or null), not a JSON-encoded string.
   */
  output: unknown | null;

  /**
   * Whether this action must be reviewed by a human before it can execute.
   */
  review_requirement: 'not_required' | 'required';

  /**
   * When a human review decision was recorded for the action.
   */
  reviewed_at: string | null;

  /**
   * Reference to an actor — the user, API key, agent, or group identity associated
   * with an action.
   */
  reviewed_by: RequestLogsAPI.Actor | null;

  /**
   * A single execution of an agent, from trigger through completion.
   */
  run: AgentRun | null;

  /**
   * Current action status.
   *
   * - `pending_review`: awaiting human review before it can execute.
   * - `auto_approved`: automatically approved by policy.
   * - `approved`: manually approved by a user.
   * - `rejected`: rejected by a user; will not execute.
   * - `executed`: successfully executed.
   * - `failed`: errored during execution; see `error_message`.
   */
  status: 'pending_review' | 'auto_approved' | 'approved' | 'rejected' | 'executed' | 'failed';

  /**
   * The tool the agent invoked for this action.
   *
   * - `create_artifact`: create an artifact such as a report, document, or data
   *   export.
   * - `read_doc`: read Augno documentation pages.
   * - `fetch_url`: fetch content from a public URL.
   * - `draft_reply`: propose a reply to the case's external party as a draft held
   *   for human approval (not sent).
   * - `send_email`: send an email reply through the conversation's bound inbox.
   */
  tool: 'create_artifact' | 'read_doc' | 'fetch_url' | 'send_email' | 'draft_reply';

  /**
   * When this action was last updated.
   */
  updated_at: string;
}

/**
 * An AI agent available to the account.
 *
 * The definition describes what the agent does, how its runs are triggered, the
 * tools it can use, and whether it is currently enabled for the account.
 */
export interface AgentDefinition {
  /**
   * Agent definition ID.
   */
  id: string;

  /**
   * Category grouping for the agent (e.g. `order_processing`), used to organize
   * agents in the UI.
   */
  category_code: string;

  /**
   * Agent-level configuration controlling LLM behavior and trigger settings.
   *
   * Distinct from per-tool configuration (`tools[].config`), which configures
   * individual tools attached to the agent.
   */
  config: AgentDefinitionConfig | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Whether the agent is provided by Augno or created in this account.
   *
   * - `system`: provided by Augno; cannot be edited or deleted.
   * - `custom`: created by a user in this account.
   */
  definition_type: 'system' | 'custom';

  /**
   * Description of what the agent does.
   */
  description: string | null;

  /**
   * Whether the current user can edit this agent definition.
   *
   * Always `read_only` for `system` definitions.
   */
  editability: 'editable' | 'read_only';

  /**
   * Human-readable name of the agent.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'agent_definition';

  /**
   * A named set of permissions that can be assigned to users to control what they
   * can access.
   */
  role: APIKeysAPI.Role | null;

  /**
   * URL-friendly identifier for the agent.
   */
  slug: string;

  /**
   * Whether this agent is enabled for the current account.
   *
   * Activation is per-account: a `system` agent shared across accounts can be
   * `active` for one account and `inactive` for another. An `inactive` agent does
   * not run.
   */
  status: 'active' | 'inactive';

  /**
   * List represents a paginated list of resources.
   */
  tools: ListAgentDefinitionTool | null;

  /**
   * How runs of this agent are initiated.
   *
   * - `scheduled`: runs on a cron schedule (see
   *   `config.trigger_config.cron_schedule`).
   * - `event`: runs in response to platform events (see
   *   `config.trigger_config.event_filters`).
   * - `manual`: runs only when explicitly invoked.
   * - `chat`: runs in response to a chat message; the run is linked to a
   *   conversation and posts its reply back into it.
   */
  trigger_type: 'scheduled' | 'manual' | 'event' | 'chat';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Agent-level configuration controlling LLM behavior and trigger settings.
 *
 * Distinct from per-tool configuration (`tools[].config`), which configures
 * individual tools attached to the agent.
 */
export interface AgentDefinitionConfig {
  /**
   * Per-endpoint-tool human-review overrides, keyed by tool slug.
   *
   * When an entry is `true`, the run pauses in `awaiting_approval` each time the
   * agent calls that endpoint-tool until it is approved via the Continue Agent Run
   * endpoint. Slugs absent from the map do not require review.
   */
  endpoint_tool_review: { [key: string]: boolean };

  /**
   * API-endpoint tools the agent may discover and use, by slug (e.g.
   * `create_account_group`).
   *
   * These correspond to tools listed by the List Tools endpoint with category
   * `api_endpoint`. A single entry `*` grants the entire endpoint-tool catalog.
   */
  endpoint_tool_slugs: Array<string>;

  /**
   * Resource type identifier.
   */
  object: 'agent_definition_config';

  /**
   * System prompt / instructions for the agent.
   */
  system_prompt: string | null;

  /**
   * LLM sampling temperature between 0 and 1.
   */
  temperature: number | null;

  /**
   * Intelligence and cost tier for the agent's reasoning.
   *
   * Selects how capable and expensive a model the agent uses without pinning a
   * specific model; higher tiers reason better but cost more. Leaving it unset uses
   * the default tier.
   *
   * - `frontier`: the most capable tier, for multi-step planning, ambiguous agent
   *   work, and hard coding or architecture tasks.
   * - `high`: the default tier, for normal planning, code edits, synthesis, and
   *   customer-facing reasoning.
   * - `balanced`: for research, summarization, classification, structured
   *   extraction, and light tool use.
   * - `cheap`: for simple transforms, validation, formatting, and routing.
   */
  tier: 'frontier' | 'high' | 'balanced' | 'cheap' | 'legacy' | null;

  /**
   * Trigger-type-specific configuration.
   *
   * Which fields are populated depends on the agent's `trigger_type`:
   *
   * - `scheduled`: `cron_schedule` (and optionally `timezone`) is set.
   * - `event`: `event_filters` is set.
   * - `manual`: all fields are empty.
   */
  trigger_config: TriggerConfig | null;
}

/**
 * Tool attached to an agent definition.
 *
 * Pairs an AvailableTool with agent-specific config values.
 */
export interface AgentDefinitionTool {
  /**
   * Agent definition tool ID.
   */
  id: string;

  /**
   * Instance-specific configuration for this tool.
   *
   * Must conform to the tool's `config_schema`. Encoded as a JSON value (object,
   * array, string, number, boolean, or null), not a JSON-encoded string.
   */
  config: unknown | null;

  /**
   * Resource type identifier.
   */
  object: 'agent_definition_tool';

  /**
   * Whether calls to this tool must be approved by a user before they execute.
   *
   * When `required`, the run pauses in the `awaiting_approval` status each time the
   * agent invokes this tool; approve or allow the tool via the Continue Agent Run
   * endpoint to proceed.
   */
  review_requirement: 'not_required' | 'required';

  /**
   * Sort order within the agent.
   */
  sort_order: number;

  /**
   * Platform tool that can be attached to agents.
   */
  tool: AvailableTool;
}

/**
 * A single execution of an agent, from trigger through completion.
 */
export interface AgentRun {
  /**
   * Agent run ID.
   */
  id: string;

  /**
   * List represents a paginated list of resources.
   */
  actions: ListAgentAction | null;

  /**
   * When the run completed.
   */
  completed_at: string | null;

  /**
   * When this run was created.
   */
  created_at: string;

  /**
   * An AI agent available to the account.
   *
   * The definition describes what the agent does, how its runs are triggered, the
   * tools it can use, and whether it is currently enabled for the account.
   */
  definition: AgentDefinition | null;

  /**
   * Duration in milliseconds.
   */
  duration_ms: number | null;

  /**
   * Error message if the run failed.
   */
  error_message: string | null;

  /**
   * Input provided to the agent at the start of the run, as JSON. Encoded as a JSON
   * value (object, array, string, number, boolean, or null), not a JSON-encoded
   * string.
   */
  input: unknown | null;

  /**
   * Resource type identifier.
   */
  object: 'agent_run';

  /**
   * Final output produced by the agent, as JSON.
   *
   * Populated only once the run has completed successfully. Encoded as a JSON value
   * (object, array, string, number, boolean, or null), not a JSON-encoded string.
   */
  output: unknown | null;

  /**
   * When the run started executing.
   */
  started_at: string | null;

  /**
   * Current run status.
   *
   * - `pending`: queued but not yet started.
   * - `running`: currently executing.
   * - `awaiting_input`: paused, waiting for user input before continuing.
   * - `awaiting_approval`: paused, waiting for a pending action to be approved.
   * - `completed`: finished successfully.
   * - `failed`: stopped after an error; see `error_message`.
   * - `cancelled`: stopped before completion by a user.
   */
  status:
    | 'pending'
    | 'running'
    | 'completed'
    | 'failed'
    | 'cancelled'
    | 'awaiting_input'
    | 'awaiting_approval';

  /**
   * List represents a paginated list of resources.
   */
  steps: ListAgentRunStep | null;

  /**
   * How this run was initiated.
   *
   * - `scheduled`: started by the agent's cron schedule.
   * - `event`: started in response to a platform event.
   * - `manual`: started by an explicit request; see `triggered_by`.
   * - `chat`: started by a message in a conversation, with the agent's reply posted
   *   back into that conversation.
   */
  trigger_type: 'scheduled' | 'manual' | 'event' | 'chat';

  /**
   * Reference to an actor — the user, API key, agent, or group identity associated
   * with an action.
   */
  triggered_by: RequestLogsAPI.Actor | null;

  /**
   * When this run was last updated.
   */
  updated_at: string;
}

/**
 * A single event in an agent run's execution timeline.
 */
export interface AgentRunStep {
  /**
   * Agent run step ID.
   */
  id: string;

  /**
   * Reference to an actor — the user, API key, agent, or group identity associated
   * with an action.
   */
  actor: RequestLogsAPI.Actor | null;

  /**
   * Text payload for the step, such as a message body or a tool result.
   */
  content: string | null;

  /**
   * When this step was created.
   */
  created_at: string;

  /**
   * Duration in milliseconds.
   */
  duration_ms: number | null;

  /**
   * Additional structured data for the step, as JSON. Encoded as a JSON value
   * (object, array, string, number, boolean, or null), not a JSON-encoded string.
   */
  metadata: unknown | null;

  /**
   * Resource type identifier.
   */
  object: 'agent_run_step';

  /**
   * Zero-based position of this step within the run's timeline.
   */
  sequence: number;

  /**
   * The kind of timeline event (e.g. `trigger_received`, `user_message`,
   * `assistant_message`, `tool_call`, `tool_result`, `awaiting_approval`,
   * `completion`, `error`).
   */
  step_type: string;

  /**
   * Short title for the step.
   */
  title: string;
}

/**
 * Platform tool that can be attached to agents.
 */
export interface AvailableTool {
  /**
   * Category grouping for the tool (e.g. `built_in`).
   */
  category: string;

  /**
   * JSON schema describing the configuration options this tool accepts.
   *
   * Defines the shape of the `config` field on AgentDefinitionTool.
   *
   * For example:
   *
   * ````json
   * {
   *   "type": "object",
   *   "properties": {
   *     "max_results": {
   *       "type": "integer",
   *       "default": 10
   *     }
   *   }
   * }
   * ``` Encoded as a JSON value (object, array, string, number, boolean, or null), not a JSON-encoded string.
   * ````
   */
  config_schema: unknown | null;

  /**
   * Tool description.
   */
  description: string | null;

  /**
   * Whether invoking this tool changes server state.
   *
   * True for any `api_endpoint` tool whose underlying operation is not a read
   * (non-GET); always false for `built_in` tools. The agent-configuration UI uses
   * this to default such tools to requiring human review.
   */
  mutating: boolean;

  /**
   * Tool name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'available_tool';

  /**
   * Permission scopes the agent's role must hold for this tool to be usable (e.g.
   * `products:read`).
   */
  required_permissions: Array<string>;

  /**
   * Role type the caller must have for this tool, when the operation is gated by
   * role rather than a permission (e.g. `admin`).
   */
  required_role_type: string | null;

  /**
   * A stable identifier used when attaching the tool to an agent.
   */
  slug: string;
}

/**
 * A conversation thread the caller participates in.
 */
export interface Conversation {
  /**
   * Conversation ID.
   */
  id: string;

  /**
   * Reference to an actor — the user, API key, agent, or group identity associated
   * with an action.
   */
  assignee: RequestLogsAPI.Actor | null;

  /**
   * Whether this is a team-only conversation (`internal`) or a customer-facing case
   * (`customer`).
   */
  audience: 'internal' | 'customer';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * A reusable roster: a named set of members (users and/or agents) that seeds new
   * conversations.
   *
   * Starting a conversation from a group snapshots its current members into that
   * conversation, so the same group can back many conversations (each with its own
   * title); later edits to the group never change conversations already created from
   * it.
   */
  group: MessagingGroup | null;

  /**
   * A chat message within a conversation.
   */
  last_message: Message | null;

  /**
   * When the most recent message was sent.
   *
   * `null` when the conversation has no messages yet.
   */
  last_message_at: string | null;

  /**
   * Whether the conversation is under legal hold.
   *
   * Exempts the conversation from retention purging and redaction.
   */
  legal_hold: 'released' | 'held';

  /**
   * Resource type identifier.
   */
  object: 'conversation';

  /**
   * List represents a paginated list of resources.
   */
  participants: ListConversationParticipant | null;

  /**
   * The caller's effective status.
   *
   * - `hidden` when the caller has hidden the conversation
   * - otherwise the account-level lifecycle state
   */
  status: 'active' | 'archived' | 'hidden';

  /**
   * The display title of a group conversation.
   *
   * `null` for direct messages, where the client derives a title from the
   * participants.
   */
  title: string | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  topic: CoreAPI.Entity | null;

  /**
   * What kind of conversation this is.
   *
   * - `direct_message`: a 1:1 thread between two users.
   * - `group`: a named thread with multiple user or agent members (including
   *   customer-facing support cases).
   * - `system`: a system channel that delivers automated account alerts.
   */
  type: 'direct_message' | 'group' | 'system';

  /**
   * Number of messages the caller has not yet read.
   */
  unread: number;

  /**
   * Last update timestamp.
   */
  updated_at: string;

  /**
   * The triage lane of a customer-facing case.
   *
   * Only set for customer-audience conversations.
   *
   * - `new`: opened but not yet triaged.
   * - `open`: actively being worked.
   * - `waiting_internal`: blocked on the internal team.
   * - `waiting_external`: blocked on an external reply.
   * - `needs_approval`: a drafted reply is awaiting human approval.
   * - `resolved`: closed out.
   */
  workflow_status:
    | 'new'
    | 'open'
    | 'waiting_internal'
    | 'waiting_external'
    | 'needs_approval'
    | 'resolved'
    | null;
}

/**
 * A participant (membership) in a conversation.
 */
export interface ConversationParticipant {
  /**
   * Participant ID.
   */
  id: string;

  /**
   * Reference to an actor — the user, API key, agent, or group identity associated
   * with an action.
   */
  actor: RequestLogsAPI.Actor | null;

  /**
   * For agent participants with a keyword/mention policy, the keywords that trigger
   * it.
   */
  agent_trigger_keywords: Array<string>;

  /**
   * For agent participants, when the agent is invoked in response to messages.
   *
   * `null` for non-agent participants.
   *
   * - `mention`: only when the agent is @mentioned.
   * - `keyword`: when a message contains one of the agent's trigger keywords.
   * - `always`: on every human message in the conversation.
   */
  agent_trigger_policy: 'mention' | 'keyword' | 'always' | null;

  /**
   * The participant's membership in the conversation.
   *
   * - `active`: currently a member.
   * - `left`: voluntarily left the conversation.
   * - `removed`: removed by an admin.
   * - `hidden`: still a member but has hidden the conversation from their own list.
   */
  membership: 'active' | 'left' | 'removed' | 'hidden';

  /**
   * The participant's notification preference for the conversation.
   *
   * - `unmuted`: receives normal notifications.
   * - `muted`: notifications are suppressed (mentions may still pierce the mute).
   */
  notifications: 'unmuted' | 'muted';

  /**
   * Resource type identifier.
   */
  object: 'conversation_participant';

  /**
   * The participant's permission level in the conversation.
   *
   * - `owner`: can rename or delete the conversation and manage its members and
   *   their roles.
   * - `admin`: can add or remove members and rename the conversation.
   * - `member`: can post, react, mute, and leave.
   * - `viewer`: read-only access.
   */
  role: 'owner' | 'admin' | 'member' | 'viewer';

  /**
   * The kind of participant.
   *
   * - `user`: an account user (a teammate).
   * - `agent`: an AI agent.
   * - `system`: the system itself, which posts automated messages.
   * - `customer`: an external customer in a support case.
   */
  type: 'user' | 'agent' | 'system' | 'customer';
}

/**
 * Request to create a conversation.
 */
export interface CreateConversationRequest {
  /**
   * The kind of conversation to create.
   */
  type: 'direct_message' | 'group' | 'system';

  /**
   * Seed a group conversation from a reusable roster.
   *
   * The roster's current members are copied into this conversation (in addition to
   * any `participant_account_user_ids`); the conversation is independent afterward.
   * Ignored for direct messages.
   */
  group_id?: string;

  /**
   * The other participant(s).
   *
   * For a direct message, exactly one account_user ID. For a group, the members to
   * add — optional when `group_id` seeds the roster.
   */
  participant_account_user_ids?: Array<string>;

  /**
   * Title for a group conversation.
   *
   * Ignored for direct messages.
   */
  title?: string;

  /**
   * The id of the business record to anchor this conversation to.
   */
  topic_resource_id?: string;

  /**
   * The type of business record to anchor this conversation to.
   */
  topic_resource_type?:
    | 'account'
    | 'actor'
    | 'entity'
    | 'record'
    | 'freight'
    | 'sales_order_totals'
    | 'sales_order_related'
    | 'order_contact'
    | 'user'
    | 'address'
    | 'api_key'
    | 'created_api_key'
    | 'refresh_token'
    | 'list'
    | 'sandbox'
    | 'registration_session'
    | 'pricing_plan'
    | 'account_plan'
    | 'plan_change'
    | 'enterprise_inquiry'
    | 'request_log'
    | 'audit_event'
    | 'audit_field_change'
    | 'role'
    | 'unit'
    | 'account_affiliation'
    | 'agent_definition'
    | 'available_tool'
    | 'agent_definition_tool'
    | 'agent_account_status'
    | 'agent_run'
    | 'agent_action'
    | 'agent_run_step'
    | 'agent_token_usage'
    | 'agent_memory'
    | 'notification'
    | 'notification_unread_count'
    | 'notification_send_result'
    | 'notification_unread_summary'
    | 'announcement'
    | 'conversation'
    | 'conversation_participant'
    | 'chat_message'
    | 'notification_unread_summary_account'
    | 'messaging_block'
    | 'notification_preference'
    | 'message_attachment'
    | 'attachment_upload_target'
    | 'scheduled_message'
    | 'messaging_contact'
    | 'message_report'
    | 'tool_group'
    | 'model'
    | 'payment_term'
    | 'shipping_term'
    | 'quantity'
    | 'account_group'
    | 'support_route'
    | 'support_availability'
    | 'account_status'
    | 'geolocation'
    | 'account_user'
    | 'department'
    | 'account_integration'
    | 'account_price'
    | 'product_line'
    | 'item_category'
    | 'attribute'
    | 'rate'
    | 'account_group_product_line_access'
    | 'sales_target'
    | 'adjustment_type'
    | 'account_branding'
    | 'account_portal'
    | 'account_logo_url'
    | 'public_account'
    | 'property'
    | 'carrier'
    | 'service_level'
    | 'item'
    | 'item_inventory'
    | 'product'
    | 'batch'
    | 'batch_flow_node'
    | 'scanning_consumption'
    | 'open_batch_summary'
    | 'scanning_production_step_info'
    | 'scanning_station'
    | 'production_step'
    | 'production_run'
    | 'machine'
    | 'child_account'
    | 'unit_group'
    | 'unit_group_unit'
    | 'consumption'
    | 'customer_product_line_access'
    | 'customer'
    | 'frequently_ordered_product'
    | 'priority'
    | 'delivery'
    | 'delivery_line'
    | 'sales_order'
    | 'location'
    | 'location_type'
    | 'lot'
    | 'email_log'
    | 'email_domain'
    | 'email_inbox'
    | 'inventory_change_log'
    | 'invoice'
    | 'invoice_summary'
    | 'invoice_line'
    | 'invoice_allocation'
    | 'invoice_for_payment'
    | 'shipment'
    | 'shipment_summary'
    | 'shipment_line'
    | 'shipping_case'
    | 'shipping_case_label_url'
    | 'settlement'
    | 'settlement_summary'
    | 'role_permission'
    | 'registration_flow'
    | 'registration_flow_option'
    | 'transaction'
    | 'transaction_summary'
    | 'transaction_method'
    | 'transaction_type'
    | 'transaction_allocation'
    | 'usage_item'
    | 'account_usage_response'
    | 'subscription_info'
    | 'billing_portal_session_response'
    | 'switch_plan_response'
    | 'ensure_billing_customer_response'
    | 'spending_cap_response'
    | 'agent_spend_info'
    | 'webhook_response'
    | 'address_suggestion'
    | 'address_components'
    | 'address_details_result'
    | 'validated_address'
    | 'plan_limit'
    | 'plan_change_proration'
    | 'plan_change_line_item'
    | 'setup_billing_response'
    | 'confirm_payment_response'
    | 'oauth_response'
    | 'oauth_status_response'
    | 'stripe_publishable_key'
    | 'stripe_status'
    | 'healthcheck'
    | 'agent_definition_config'
    | 'trigger_config'
    | 'customer_contact_info'
    | 'customer_freight_preferences'
    | 'customer_defaults'
    | 'customer_notification_preferences'
    | 'order_discount'
    | 'sales_order_line'
    | 'sales_order_type'
    | 'sales_order_status'
    | 'material'
    | 'supplier_material'
    | 'part'
    | 'permission_group'
    | 'permission'
    | 'pick'
    | 'pick_line'
    | 'product_type'
    | 'production'
    | 'production_flow'
    | 'map'
    | 'purchase_order'
    | 'purchase_order_line'
    | 'supplier'
    | 'supplier_summary'
    | 'receivable_entry'
    | 'receiving_order'
    | 'receiving_order_line'
    | 'email_contact'
    | 'allocation_entry'
    | 'open_credit_entry'
    | 'volume_discount'
    | 'volume_discount_tier'
    | 'analyze_deliveries_response'
    | 'analyze_manufacturing_response'
    | 'analyze_manufacturing_batch_response'
    | 'analyze_quarterly_orders_response'
    | 'analyze_new_customers_response'
    | 'analyze_oee_response'
    | 'catalog_product_line'
    | 'catalog_category'
    | 'catalog_product'
    | 'catalog_property'
    | 'catalog_attribute'
    | 'dc_location'
    | 'edi_run'
    | 'inventory_item'
    | 'analyze_weeks_of_sales_response'
    | 'bulk_reconcile_items_response'
    | 'sys_property'
    | 'sys_property_type'
    | 'sys_property_value'
    | 'territory'
    | 'tenancy'
    | 'checkout_session'
    | 'estimate_rate_result'
    | 'rate_shop_option'
    | 'rate_shop_result'
    | 'owner'
    | 'created_by'
    | 'message'
    | 'account_photo_upload_result'
    | 'user_photo_upload_result'
    | 'user_photo_url'
    | 'batch_lot'
    | 'check_duplicate_result'
    | 'item_trend_point'
    | 'pack_pick_response'
    | 'pick_shipments_response'
    | 'tenancy_pending_registration'
    | 'invoice_allocation_entry'
    | 'allocation_customer'
    | 'checkout_sales_order_response'
    | 'create_production_run_response'
    | 'sales_order_price_quote'
    | 'hubspot_sync_job'
    | 'hubspot_sync_report'
    | 'hubspot_company_review'
    | 'hubspot_company_candidate'
    | 'contact_match'
    | 'reply_draft'
    | 'conversation_link'
    | 'messaging_group'
    | 'messaging_group_member';
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAgentAction {
  /**
   * Resources in this page.
   */
  data: Array<AgentAction>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAgentDefinitionTool {
  /**
   * Resources in this page.
   */
  data: Array<AgentDefinitionTool>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAgentRunStep {
  /**
   * Resources in this page.
   */
  data: Array<AgentRunStep>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListConversation {
  /**
   * Resources in this page.
   */
  data: Array<Conversation>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListConversationParticipant {
  /**
   * Resources in this page.
   */
  data: Array<ConversationParticipant>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListMessageAttachment {
  /**
   * Resources in this page.
   */
  data: Array<MessageAttachment>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListMessagingGroupMember {
  /**
   * Resources in this page.
   */
  data: Array<MessagingGroupMember>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A chat message within a conversation.
 */
export interface Message {
  /**
   * Message ID.
   */
  id: string;

  /**
   * A single execution of an agent, from trigger through completion.
   */
  agent_run: AgentRun | null;

  /**
   * List represents a paginated list of resources.
   */
  attachments: ListMessageAttachment | null;

  /**
   * Reference to an actor — the user, API key, agent, or group identity associated
   * with an action.
   */
  author: RequestLogsAPI.Actor | null;

  /**
   * Message body.
   *
   * `null` for templated or deleted messages.
   */
  body: string | null;

  /**
   * How the message was delivered (or, for a draft, how it will be on approve).
   *
   * - `message`: delivered as an in-conversation chat message.
   * - `email`: delivered as email through the conversation's bridged inbox.
   */
  channel: 'message' | 'email';

  /**
   * The client-supplied dedupe key echoed back for optimistic-UI reconciliation.
   *
   * `null` for server-generated messages.
   */
  client_message_id: string | null;

  /**
   * A conversation thread the caller participates in.
   */
  conversation: Conversation | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * When the message was deleted (tombstone).
   */
  deleted_at: string | null;

  /**
   * When the message was last edited.
   */
  edited_at: string | null;

  /**
   * The kind of message.
   *
   * - `chat`: a user-authored chat message.
   * - `system_event`: a system-generated event message.
   * - `agent`: a message authored by an AI agent participant.
   * - `scheduled`: a message materialized from a scheduled send.
   * - `alert`: a system or producer alert rendered as a message.
   * - `email`: an inbound email materialized into the conversation by the email
   *   bridge.
   */
  kind: 'chat' | 'system_event' | 'agent' | 'scheduled' | 'alert' | 'email';

  /**
   * Resource type identifier.
   */
  object: 'chat_message';

  /**
   * A chat message within a conversation.
   */
  reply_to: Message | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  resource: CoreAPI.Entity | null;

  /**
   * When a `scheduled` message is due to be delivered.
   */
  scheduled_at: string | null;

  /**
   * Reference to an actor — the user, API key, agent, or group identity associated
   * with an action.
   */
  sender: RequestLogsAPI.Actor | null;

  /**
   * Monotonic per-conversation ordering sequence.
   */
  sequence: number;

  /**
   * The lifecycle state of the message.
   *
   * - `draft`: an editable customer-reply draft awaiting approval; not in the
   *   timeline.
   * - `scheduled`: queued for delivery at a future time; not yet in the timeline.
   * - `sent`: a delivered timeline message; only `sent` messages carry a `sequence`.
   * - `canceled`: a scheduled message canceled before delivery.
   * - `rejected`: a draft discarded without sending.
   * - `failed`: a scheduled message that exhausted delivery attempts.
   * - `superseded`: a draft replaced by a newer one for the same source thread.
   */
  status: 'draft' | 'scheduled' | 'sent' | 'canceled' | 'rejected' | 'failed' | 'superseded';

  /**
   * The streaming state of a reply.
   *
   * `streaming` while the body is still being generated (it fills in via realtime
   * updates); `complete` once finalized.
   *
   * `null` for ordinary messages.
   */
  streaming_state: string | null;

  /**
   * The email subject of a customer-reply `draft` on an email-bridged case.
   */
  subject: string | null;

  /**
   * Last update timestamp.
   */
  updated_at: string;

  /**
   * Who can see this message.
   *
   * - `internal`: a team-only note.
   * - `external`: sent to or received from an external party (e.g. the customer on a
   *   support case).
   * - `system`: an event shown to both the team and the customer.
   *
   * On a customer-facing conversation, customer payloads only ever carry `external`
   * and `system` messages.
   */
  visibility: 'internal' | 'external' | 'system';
}

/**
 * A file, image, link, or resource attached to a message.
 */
export interface MessageAttachment {
  /**
   * Attachment ID.
   */
  id: string;

  /**
   * The MIME content type for uploaded attachments.
   *
   * `null` for link/resource attachments.
   */
  content_type: string | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * The original filename for uploaded attachments.
   *
   * `null` for link/resource attachments.
   */
  filename: string | null;

  /**
   * The kind of attachment, which determines how it is stored and which of the
   * fields below are populated.
   *
   * - `file`: an uploaded non-image file.
   * - `image`: an uploaded image.
   * - `link`: an external URL reference, with no stored file.
   * - `resource`: a reference to an in-app resource, such as an order.
   */
  kind: 'file' | 'image' | 'link' | 'resource';

  /**
   * Resource type identifier.
   */
  object: 'message_attachment';

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  resource: CoreAPI.Entity | null;

  /**
   * The size in bytes for uploaded attachments.
   *
   * `null` when unknown or for link/resource attachments.
   */
  size_bytes: number | null;

  /**
   * A time-limited download URL for uploaded (file/image) attachments, or the link
   * URL.
   *
   * `null` for resource attachments.
   */
  url: string | null;
}

/**
 * A reusable roster: a named set of members (users and/or agents) that seeds new
 * conversations.
 *
 * Starting a conversation from a group snapshots its current members into that
 * conversation, so the same group can back many conversations (each with its own
 * title); later edits to the group never change conversations already created from
 * it.
 */
export interface MessagingGroup {
  /**
   * Messaging group ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * List represents a paginated list of resources.
   */
  members: ListMessagingGroupMember | null;

  /**
   * The roster's display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'messaging_group';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A member of a reusable roster: either a user or an agent, represented by its
 * actor.
 */
export interface MessagingGroupMember {
  /**
   * Membership ID (used to remove the member from the roster).
   */
  id: string;

  /**
   * Reference to an actor — the user, API key, agent, or group identity associated
   * with an action.
   */
  actor: RequestLogsAPI.Actor | null;

  /**
   * Resource type identifier.
   */
  object: 'messaging_group_member';
}

/**
 * Trigger-type-specific configuration.
 *
 * Which fields are populated depends on the agent's `trigger_type`:
 *
 * - `scheduled`: `cron_schedule` (and optionally `timezone`) is set.
 * - `event`: `event_filters` is set.
 * - `manual`: all fields are empty.
 */
export interface TriggerConfig {
  /**
   * Cron expression for scheduled triggers (e.g. `0 9 * * *`).
   */
  cron_schedule: string | null;

  /**
   * Event types that trigger this agent (e.g.
   * `["email.received", "order.created"]`).
   */
  event_filters: Array<string>;

  /**
   * Resource type identifier.
   */
  object: 'trigger_config';

  /**
   * IANA timezone for the cron schedule (e.g. `America/New_York`).
   */
  timezone: string | null;
}

/**
 * Request to rename a conversation (owner/admin; groups only).
 */
export interface UpdateConversationRequest {
  /**
   * New group title.
   *
   * Send `null` to clear the title; omit to leave it unchanged.
   */
  title?: string | null;
}

export interface ConversationCreateParams {
  /**
   * Body param: The kind of conversation to create.
   */
  type: 'direct_message' | 'group' | 'system';

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'assignee'
    | 'group'
    | 'participants'
    | 'topic'
    | 'last_message'
    | 'last_message.sender'
    | 'last_message.author'
    | 'last_message.resource'
    | 'last_message.attachments'
    | 'last_message.attachments.resource'
  >;

  /**
   * Body param: Seed a group conversation from a reusable roster.
   *
   * The roster's current members are copied into this conversation (in addition to
   * any `participant_account_user_ids`); the conversation is independent afterward.
   * Ignored for direct messages.
   */
  group_id?: string;

  /**
   * Body param: The other participant(s).
   *
   * For a direct message, exactly one account_user ID. For a group, the members to
   * add — optional when `group_id` seeds the roster.
   */
  participant_account_user_ids?: Array<string>;

  /**
   * Body param: Title for a group conversation.
   *
   * Ignored for direct messages.
   */
  title?: string;

  /**
   * Body param: The id of the business record to anchor this conversation to.
   */
  topic_resource_id?: string;

  /**
   * Body param: The type of business record to anchor this conversation to.
   */
  topic_resource_type?:
    | 'account'
    | 'actor'
    | 'entity'
    | 'record'
    | 'freight'
    | 'sales_order_totals'
    | 'sales_order_related'
    | 'order_contact'
    | 'user'
    | 'address'
    | 'api_key'
    | 'created_api_key'
    | 'refresh_token'
    | 'list'
    | 'sandbox'
    | 'registration_session'
    | 'pricing_plan'
    | 'account_plan'
    | 'plan_change'
    | 'enterprise_inquiry'
    | 'request_log'
    | 'audit_event'
    | 'audit_field_change'
    | 'role'
    | 'unit'
    | 'account_affiliation'
    | 'agent_definition'
    | 'available_tool'
    | 'agent_definition_tool'
    | 'agent_account_status'
    | 'agent_run'
    | 'agent_action'
    | 'agent_run_step'
    | 'agent_token_usage'
    | 'agent_memory'
    | 'notification'
    | 'notification_unread_count'
    | 'notification_send_result'
    | 'notification_unread_summary'
    | 'announcement'
    | 'conversation'
    | 'conversation_participant'
    | 'chat_message'
    | 'notification_unread_summary_account'
    | 'messaging_block'
    | 'notification_preference'
    | 'message_attachment'
    | 'attachment_upload_target'
    | 'scheduled_message'
    | 'messaging_contact'
    | 'message_report'
    | 'tool_group'
    | 'model'
    | 'payment_term'
    | 'shipping_term'
    | 'quantity'
    | 'account_group'
    | 'support_route'
    | 'support_availability'
    | 'account_status'
    | 'geolocation'
    | 'account_user'
    | 'department'
    | 'account_integration'
    | 'account_price'
    | 'product_line'
    | 'item_category'
    | 'attribute'
    | 'rate'
    | 'account_group_product_line_access'
    | 'sales_target'
    | 'adjustment_type'
    | 'account_branding'
    | 'account_portal'
    | 'account_logo_url'
    | 'public_account'
    | 'property'
    | 'carrier'
    | 'service_level'
    | 'item'
    | 'item_inventory'
    | 'product'
    | 'batch'
    | 'batch_flow_node'
    | 'scanning_consumption'
    | 'open_batch_summary'
    | 'scanning_production_step_info'
    | 'scanning_station'
    | 'production_step'
    | 'production_run'
    | 'machine'
    | 'child_account'
    | 'unit_group'
    | 'unit_group_unit'
    | 'consumption'
    | 'customer_product_line_access'
    | 'customer'
    | 'frequently_ordered_product'
    | 'priority'
    | 'delivery'
    | 'delivery_line'
    | 'sales_order'
    | 'location'
    | 'location_type'
    | 'lot'
    | 'email_log'
    | 'email_domain'
    | 'email_inbox'
    | 'inventory_change_log'
    | 'invoice'
    | 'invoice_summary'
    | 'invoice_line'
    | 'invoice_allocation'
    | 'invoice_for_payment'
    | 'shipment'
    | 'shipment_summary'
    | 'shipment_line'
    | 'shipping_case'
    | 'shipping_case_label_url'
    | 'settlement'
    | 'settlement_summary'
    | 'role_permission'
    | 'registration_flow'
    | 'registration_flow_option'
    | 'transaction'
    | 'transaction_summary'
    | 'transaction_method'
    | 'transaction_type'
    | 'transaction_allocation'
    | 'usage_item'
    | 'account_usage_response'
    | 'subscription_info'
    | 'billing_portal_session_response'
    | 'switch_plan_response'
    | 'ensure_billing_customer_response'
    | 'spending_cap_response'
    | 'agent_spend_info'
    | 'webhook_response'
    | 'address_suggestion'
    | 'address_components'
    | 'address_details_result'
    | 'validated_address'
    | 'plan_limit'
    | 'plan_change_proration'
    | 'plan_change_line_item'
    | 'setup_billing_response'
    | 'confirm_payment_response'
    | 'oauth_response'
    | 'oauth_status_response'
    | 'stripe_publishable_key'
    | 'stripe_status'
    | 'healthcheck'
    | 'agent_definition_config'
    | 'trigger_config'
    | 'customer_contact_info'
    | 'customer_freight_preferences'
    | 'customer_defaults'
    | 'customer_notification_preferences'
    | 'order_discount'
    | 'sales_order_line'
    | 'sales_order_type'
    | 'sales_order_status'
    | 'material'
    | 'supplier_material'
    | 'part'
    | 'permission_group'
    | 'permission'
    | 'pick'
    | 'pick_line'
    | 'product_type'
    | 'production'
    | 'production_flow'
    | 'map'
    | 'purchase_order'
    | 'purchase_order_line'
    | 'supplier'
    | 'supplier_summary'
    | 'receivable_entry'
    | 'receiving_order'
    | 'receiving_order_line'
    | 'email_contact'
    | 'allocation_entry'
    | 'open_credit_entry'
    | 'volume_discount'
    | 'volume_discount_tier'
    | 'analyze_deliveries_response'
    | 'analyze_manufacturing_response'
    | 'analyze_manufacturing_batch_response'
    | 'analyze_quarterly_orders_response'
    | 'analyze_new_customers_response'
    | 'analyze_oee_response'
    | 'catalog_product_line'
    | 'catalog_category'
    | 'catalog_product'
    | 'catalog_property'
    | 'catalog_attribute'
    | 'dc_location'
    | 'edi_run'
    | 'inventory_item'
    | 'analyze_weeks_of_sales_response'
    | 'bulk_reconcile_items_response'
    | 'sys_property'
    | 'sys_property_type'
    | 'sys_property_value'
    | 'territory'
    | 'tenancy'
    | 'checkout_session'
    | 'estimate_rate_result'
    | 'rate_shop_option'
    | 'rate_shop_result'
    | 'owner'
    | 'created_by'
    | 'message'
    | 'account_photo_upload_result'
    | 'user_photo_upload_result'
    | 'user_photo_url'
    | 'batch_lot'
    | 'check_duplicate_result'
    | 'item_trend_point'
    | 'pack_pick_response'
    | 'pick_shipments_response'
    | 'tenancy_pending_registration'
    | 'invoice_allocation_entry'
    | 'allocation_customer'
    | 'checkout_sales_order_response'
    | 'create_production_run_response'
    | 'sales_order_price_quote'
    | 'hubspot_sync_job'
    | 'hubspot_sync_report'
    | 'hubspot_company_review'
    | 'hubspot_company_candidate'
    | 'contact_match'
    | 'reply_draft'
    | 'conversation_link'
    | 'messaging_group'
    | 'messaging_group_member';
}

export interface ConversationListParams {
  /**
   * Support inbox: filter to cases owned by this assignee (a user or a team),
   * matched by id.
   */
  assignee_resource_id?: string;

  /**
   * Filter by conversation audience direction.
   */
  audience?: 'internal' | 'customer';

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
  include?: Array<
    | 'assignee'
    | 'group'
    | 'participants'
    | 'topic'
    | 'last_message'
    | 'last_message.sender'
    | 'last_message.author'
    | 'last_message.resource'
    | 'last_message.attachments'
    | 'last_message.attachments.resource'
  >;

  /**
   * Support inbox: include archived (resolved-and-closed) cases.
   */
  include_archived?: boolean;

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

  /**
   * Filter by conversation visibility.
   */
  status?: 'active' | 'hidden';

  /**
   * The id of the anchoring business record (with `topic_resource_type`).
   */
  topic_resource_id?: string;

  /**
   * Restrict to conversations anchored to a business record of this type (with
   * `topic_resource_id`).
   */
  topic_resource_type?:
    | 'account'
    | 'actor'
    | 'entity'
    | 'record'
    | 'freight'
    | 'sales_order_totals'
    | 'sales_order_related'
    | 'order_contact'
    | 'user'
    | 'address'
    | 'api_key'
    | 'created_api_key'
    | 'refresh_token'
    | 'list'
    | 'sandbox'
    | 'registration_session'
    | 'pricing_plan'
    | 'account_plan'
    | 'plan_change'
    | 'enterprise_inquiry'
    | 'request_log'
    | 'audit_event'
    | 'audit_field_change'
    | 'role'
    | 'unit'
    | 'account_affiliation'
    | 'agent_definition'
    | 'available_tool'
    | 'agent_definition_tool'
    | 'agent_account_status'
    | 'agent_run'
    | 'agent_action'
    | 'agent_run_step'
    | 'agent_token_usage'
    | 'agent_memory'
    | 'notification'
    | 'notification_unread_count'
    | 'notification_send_result'
    | 'notification_unread_summary'
    | 'announcement'
    | 'conversation'
    | 'conversation_participant'
    | 'chat_message'
    | 'notification_unread_summary_account'
    | 'messaging_block'
    | 'notification_preference'
    | 'message_attachment'
    | 'attachment_upload_target'
    | 'scheduled_message'
    | 'messaging_contact'
    | 'message_report'
    | 'tool_group'
    | 'model'
    | 'payment_term'
    | 'shipping_term'
    | 'quantity'
    | 'account_group'
    | 'support_route'
    | 'support_availability'
    | 'account_status'
    | 'geolocation'
    | 'account_user'
    | 'department'
    | 'account_integration'
    | 'account_price'
    | 'product_line'
    | 'item_category'
    | 'attribute'
    | 'rate'
    | 'account_group_product_line_access'
    | 'sales_target'
    | 'adjustment_type'
    | 'account_branding'
    | 'account_portal'
    | 'account_logo_url'
    | 'public_account'
    | 'property'
    | 'carrier'
    | 'service_level'
    | 'item'
    | 'item_inventory'
    | 'product'
    | 'batch'
    | 'batch_flow_node'
    | 'scanning_consumption'
    | 'open_batch_summary'
    | 'scanning_production_step_info'
    | 'scanning_station'
    | 'production_step'
    | 'production_run'
    | 'machine'
    | 'child_account'
    | 'unit_group'
    | 'unit_group_unit'
    | 'consumption'
    | 'customer_product_line_access'
    | 'customer'
    | 'frequently_ordered_product'
    | 'priority'
    | 'delivery'
    | 'delivery_line'
    | 'sales_order'
    | 'location'
    | 'location_type'
    | 'lot'
    | 'email_log'
    | 'email_domain'
    | 'email_inbox'
    | 'inventory_change_log'
    | 'invoice'
    | 'invoice_summary'
    | 'invoice_line'
    | 'invoice_allocation'
    | 'invoice_for_payment'
    | 'shipment'
    | 'shipment_summary'
    | 'shipment_line'
    | 'shipping_case'
    | 'shipping_case_label_url'
    | 'settlement'
    | 'settlement_summary'
    | 'role_permission'
    | 'registration_flow'
    | 'registration_flow_option'
    | 'transaction'
    | 'transaction_summary'
    | 'transaction_method'
    | 'transaction_type'
    | 'transaction_allocation'
    | 'usage_item'
    | 'account_usage_response'
    | 'subscription_info'
    | 'billing_portal_session_response'
    | 'switch_plan_response'
    | 'ensure_billing_customer_response'
    | 'spending_cap_response'
    | 'agent_spend_info'
    | 'webhook_response'
    | 'address_suggestion'
    | 'address_components'
    | 'address_details_result'
    | 'validated_address'
    | 'plan_limit'
    | 'plan_change_proration'
    | 'plan_change_line_item'
    | 'setup_billing_response'
    | 'confirm_payment_response'
    | 'oauth_response'
    | 'oauth_status_response'
    | 'stripe_publishable_key'
    | 'stripe_status'
    | 'healthcheck'
    | 'agent_definition_config'
    | 'trigger_config'
    | 'customer_contact_info'
    | 'customer_freight_preferences'
    | 'customer_defaults'
    | 'customer_notification_preferences'
    | 'order_discount'
    | 'sales_order_line'
    | 'sales_order_type'
    | 'sales_order_status'
    | 'material'
    | 'supplier_material'
    | 'part'
    | 'permission_group'
    | 'permission'
    | 'pick'
    | 'pick_line'
    | 'product_type'
    | 'production'
    | 'production_flow'
    | 'map'
    | 'purchase_order'
    | 'purchase_order_line'
    | 'supplier'
    | 'supplier_summary'
    | 'receivable_entry'
    | 'receiving_order'
    | 'receiving_order_line'
    | 'email_contact'
    | 'allocation_entry'
    | 'open_credit_entry'
    | 'volume_discount'
    | 'volume_discount_tier'
    | 'analyze_deliveries_response'
    | 'analyze_manufacturing_response'
    | 'analyze_manufacturing_batch_response'
    | 'analyze_quarterly_orders_response'
    | 'analyze_new_customers_response'
    | 'analyze_oee_response'
    | 'catalog_product_line'
    | 'catalog_category'
    | 'catalog_product'
    | 'catalog_property'
    | 'catalog_attribute'
    | 'dc_location'
    | 'edi_run'
    | 'inventory_item'
    | 'analyze_weeks_of_sales_response'
    | 'bulk_reconcile_items_response'
    | 'sys_property'
    | 'sys_property_type'
    | 'sys_property_value'
    | 'territory'
    | 'tenancy'
    | 'checkout_session'
    | 'estimate_rate_result'
    | 'rate_shop_option'
    | 'rate_shop_result'
    | 'owner'
    | 'created_by'
    | 'message'
    | 'account_photo_upload_result'
    | 'user_photo_upload_result'
    | 'user_photo_url'
    | 'batch_lot'
    | 'check_duplicate_result'
    | 'item_trend_point'
    | 'pack_pick_response'
    | 'pick_shipments_response'
    | 'tenancy_pending_registration'
    | 'invoice_allocation_entry'
    | 'allocation_customer'
    | 'checkout_sales_order_response'
    | 'create_production_run_response'
    | 'sales_order_price_quote'
    | 'hubspot_sync_job'
    | 'hubspot_sync_report'
    | 'hubspot_company_review'
    | 'hubspot_company_candidate'
    | 'contact_match'
    | 'reply_draft'
    | 'conversation_link'
    | 'messaging_group'
    | 'messaging_group_member';

  /**
   * Filter by conversation type.
   */
  type?: 'direct_message' | 'group' | 'system';

  /**
   * Support inbox: restrict to cases with no assignee.
   */
  unassigned?: boolean;

  /**
   * Support inbox: filter external cases to a single triage lane.
   */
  workflow_status?: 'new' | 'open' | 'waiting_internal' | 'waiting_external' | 'needs_approval' | 'resolved';
}

export interface ConversationRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'assignee'
    | 'group'
    | 'participants'
    | 'topic'
    | 'last_message'
    | 'last_message.sender'
    | 'last_message.author'
    | 'last_message.resource'
    | 'last_message.attachments'
    | 'last_message.attachments.resource'
  >;
}

export interface ConversationUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'assignee'
    | 'group'
    | 'participants'
    | 'topic'
    | 'last_message'
    | 'last_message.sender'
    | 'last_message.author'
    | 'last_message.resource'
    | 'last_message.attachments'
    | 'last_message.attachments.resource'
  >;

  /**
   * Body param: New group title.
   *
   * Send `null` to clear the title; omit to leave it unchanged.
   */
  title?: string | null;
}

Conversations.Actions = Actions;
Conversations.Links = Links;
Conversations.Messages = Messages;
Conversations.Participants = Participants;
Conversations.Attachments = Attachments;

export declare namespace Conversations {
  export {
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
    type TriggerConfig as TriggerConfig,
    type UpdateConversationRequest as UpdateConversationRequest,
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationListParams as ConversationListParams,
    type ConversationRetrieveParams as ConversationRetrieveParams,
    type ConversationUpdateParams as ConversationUpdateParams,
  };

  export {
    Actions as Actions,
    type AssignConversationRequest as AssignConversationRequest,
    type MarkConversationReadRequest as MarkConversationReadRequest,
    type MuteConversationRequest as MuteConversationRequest,
    type ReportConversationRequest as ReportConversationRequest,
    type SetLegalHoldRequest as SetLegalHoldRequest,
    type SetWorkflowStatusRequest as SetWorkflowStatusRequest,
    type ActionSetLegalHoldParams as ActionSetLegalHoldParams,
    type ActionRedactParams as ActionRedactParams,
    type ActionReadParams as ActionReadParams,
    type ActionArchiveParams as ActionArchiveParams,
    type ActionUnarchiveParams as ActionUnarchiveParams,
    type ActionLeaveParams as ActionLeaveParams,
    type ActionHideParams as ActionHideParams,
    type ActionUnhideParams as ActionUnhideParams,
    type ActionMuteParams as ActionMuteParams,
    type ActionUnmuteParams as ActionUnmuteParams,
    type ActionSetStatusParams as ActionSetStatusParams,
    type ActionAssignParams as ActionAssignParams,
    type ActionReportParams as ActionReportParams,
  };

  export {
    Links as Links,
    type AddConversationLinkRequest as AddConversationLinkRequest,
    type ConversationLink as ConversationLink,
    type ListConversationLink as ListConversationLink,
    type LinkDeleteResponse as LinkDeleteResponse,
    type LinkCreateParams as LinkCreateParams,
    type LinkDeleteParams as LinkDeleteParams,
    type LinkListParams as LinkListParams,
  };

  export {
    Messages as Messages,
    type ListMessage as ListMessage,
    type MessageAttachmentInput as MessageAttachmentInput,
    type SendMessageRequest as SendMessageRequest,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
  };

  export {
    Participants as Participants,
    type AddParticipantRequest as AddParticipantRequest,
    type ParticipantDeleteResponse as ParticipantDeleteResponse,
    type ParticipantCreateParams as ParticipantCreateParams,
    type ParticipantDeleteParams as ParticipantDeleteParams,
  };

  export { Attachments as Attachments };
}
