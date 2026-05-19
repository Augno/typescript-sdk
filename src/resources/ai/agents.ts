// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AIAPI from './ai';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List, create, update, and delete agent definitions.
 */
export class Agents extends APIResource {
  /**
   * Creates a new custom agent definition with optional tool configuration.
   *
   * @example
   * ```ts
   * const agentDefinition = await client.ai.agents.create({
   *   category_code: 'inventory',
   *   config: {
   *     system_prompt:
   *       'You are an order processing agent. Parse incoming emails and create draft orders.',
   *     model: 'claude-sonnet-4',
   *     provider: 'anthropic',
   *     temperature: 0.2,
   *     trigger_config: {
   *       cron_schedule: null,
   *       timezone: null,
   *       event_filters: ['email.received'],
   *     },
   *   },
   *   description:
   *     'Monitors inventory levels and creates restock alerts.',
   *   name: 'Inventory Monitor',
   *   role_id: 'rl_01gf7a8200er3ar3pkfrb6kk29',
   *   slug: 'inventory_monitor',
   *   tools: [
   *     {
   *       tool_id: 'tdef_01k0b1seed0searchproduct0',
   *       sort_order: 1,
   *       require_review: true,
   *     },
   *   ],
   *   trigger_type: 'event',
   * });
   * ```
   */
  create(params: AgentCreateParams, options?: RequestOptions): APIPromise<AgentDefinition> {
    const { include, ...body } = params;
    return this._client.post('/v1/ai/agents', { query: { include }, body, ...options });
  }

  /**
   * Returns a single agent definition with its tool configuration.
   *
   * @example
   * ```ts
   * const agentDefinition = await client.ai.agents.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: AgentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentDefinition> {
    return this._client.get(path`/v1/ai/agents/${id}`, { query, ...options });
  }

  /**
   * Updates a custom agent definition. System agents cannot be modified.
   *
   * @example
   * ```ts
   * const agentDefinition = await client.ai.agents.update('id', {
   *   category_code: 'inventory',
   *   config: {
   *     system_prompt:
   *       'You are an order processing agent. Parse incoming emails and create draft orders.',
   *     model: 'claude-sonnet-4',
   *     provider: 'anthropic',
   *     temperature: 0.2,
   *     trigger_config: { ... },
   *   },
   *   description: 'Monitors inventory levels and creates restock alerts.',
   *   name: 'Inventory Monitor',
   *   role_id: 'rl_01gf7a8200er3ar3pkfrb6kk29',
   *   slug: 'inventory_monitor',
   *   tools: [
   *     {
   *       config_json: 'config_json',
   *       require_review: true,
   *       sort_order: 1,
   *       tool_id: 'tdef_01k0b1seed0searchproduct0',
   *     },
   *   ],
   *   trigger_type: 'event',
   * });
   * ```
   */
  update(id: string, params: AgentUpdateParams, options?: RequestOptions): APIPromise<AgentDefinition> {
    const { include, ...body } = params;
    return this._client.put(path`/v1/ai/agents/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns all system and custom agent definitions for the current account.
   *
   * @example
   * ```ts
   * const agents = await client.ai.agents.list();
   * ```
   */
  list(
    query: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentListResponse> {
    return this._client.get('/v1/ai/agents', { query, ...options });
  }

  /**
   * Soft-deletes a custom agent definition. System agents cannot be deleted.
   *
   * @example
   * ```ts
   * const agent = await client.ai.agents.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<AgentDeleteResponse> {
    return this._client.delete(path`/v1/ai/agents/${id}`, options);
  }

  /**
   * Upserts the per-account status for an agent definition.
   *
   * @example
   * ```ts
   * const agentDefinition = await client.ai.agents.updateStatus(
   *   'id',
   *   { status_code: 'active' },
   * );
   * ```
   */
  updateStatus(
    id: string,
    params: AgentUpdateStatusParams,
    options?: RequestOptions,
  ): APIPromise<AgentDefinition> {
    const { include, ...body } = params;
    return this._client.put(path`/v1/ai/agents/${id}/status`, { query: { include }, body, ...options });
  }
}

/**
 * AgentDefinition represents an agent definition.
 */
export interface AgentDefinition {
  /**
   * The unique identifier for the agent definition.
   */
  id: string;

  /**
   * The category code for this agent.
   */
  category_code: string;

  /**
   * AgentDefinitionConfig holds agent-level configuration that controls LLM
   * behavior. This is separate from tool-level config (AgentDefinitionTool.Config)
   * which configures individual tools attached to the agent.
   */
  config: AgentDefinitionConfig | null;

  /**
   * When this agent definition was created.
   */
  created_at: string;

  /**
   * Agent definition type.
   */
  definition_type: 'system' | 'custom';

  /**
   * A description of what the agent does.
   */
  description: string | null;

  /**
   * Whether the current user can edit this agent definition.
   */
  is_editable: boolean;

  /**
   * The display name of the agent.
   */
  name: string;

  /**
   * The resource type identifier.
   */
  object: 'agent_definition';

  /**
   * LightRole represents a minimal role reference.
   */
  role: LightRole | null;

  /**
   * The unique slug identifier.
   */
  slug: string;

  /**
   * The per-account activation status for this agent definition.
   */
  status: 'active' | 'inactive';

  /**
   * The tools attached to this agent.
   */
  tools: Array<AgentDefinition.Tool>;

  /**
   * How this agent is triggered.
   */
  trigger_type: 'scheduled' | 'manual' | 'event';

  /**
   * When this agent definition was last updated.
   */
  updated_at: string;
}

export namespace AgentDefinition {
  /**
   * AgentDefinitionTool represents a tool attached to an agent definition. It pairs
   * an AvailableTool with agent-specific configuration and settings. The tool's
   * config_schema defines what options are available; the config field here holds
   * the actual values chosen for this particular agent. Different agents using the
   * same tool can have different config values.
   */
  export interface Tool {
    /**
     * The unique identifier for this agent-tool link.
     */
    id: string;

    /**
     * The instance-specific configuration values for this tool on this agent. Must
     * conform to the tool's config_schema. These values are used by the tool handler
     * at runtime but are not exposed to the LLM.
     */
    config: Array<unknown>;

    /**
     * The resource type identifier.
     */
    object: 'agent_definition_tool';

    /**
     * Whether this tool requires human review before execution.
     */
    require_review: boolean;

    /**
     * The sort order of this tool within the agent.
     */
    sort_order: number;

    /**
     * AvailableTool represents a platform tool that can be attached to agents. Each
     * tool has a config_schema that describes what configuration options it accepts,
     * and an input_schema (internal, not exposed via API) that tells the LLM what
     * arguments to pass when invoking the tool at runtime.
     */
    tool: AIAPI.AvailableTool;
  }
}

/**
 * AgentDefinitionConfig holds agent-level configuration that controls LLM
 * behavior. This is separate from tool-level config (AgentDefinitionTool.Config)
 * which configures individual tools attached to the agent.
 */
export interface AgentDefinitionConfig {
  /**
   * The LLM model identifier (e.g. "claude-sonnet-4").
   */
  model: string | null;

  /**
   * The LLM provider name (e.g. "anthropic", "openai"). Inferred from model if
   * omitted.
   */
  provider: string | null;

  /**
   * The system prompt / instructions given to the agent.
   */
  system_prompt: string | null;

  /**
   * LLM sampling temperature between 0 and 1.
   */
  temperature: number | null;

  /**
   * TriggerConfig holds trigger-type-specific settings. For "scheduled":
   * CronSchedule is populated. For "event": EventFilters is populated. For "manual":
   * all fields are empty.
   */
  trigger_config: AgentDefinitionConfig.TriggerConfig | null;
}

export namespace AgentDefinitionConfig {
  /**
   * TriggerConfig holds trigger-type-specific settings. For "scheduled":
   * CronSchedule is populated. For "event": EventFilters is populated. For "manual":
   * all fields are empty.
   */
  export interface TriggerConfig {
    /**
     * Cron expression for scheduled triggers (e.g. "0 9 \* \* \*").
     */
    cron_schedule: string | null;

    /**
     * Event types that trigger this agent (e.g. ["email.received", "order.created"]).
     */
    event_filters: Array<string>;

    /**
     * IANA timezone for the cron schedule (e.g. "America/New_York").
     */
    timezone: string | null;
  }
}

/**
 * LightRole represents a minimal role reference.
 */
export interface LightRole {
  /**
   * The unique identifier for the role.
   */
  id: string;

  /**
   * The display name of the role.
   */
  name: string;

  /**
   * The resource type identifier.
   */
  object: 'role';

  /**
   * The permission set granted to this role. Keys are permission strings (e.g.
   * "customer:read"), values are always true.
   */
  permissions: { [key: string]: boolean };

  /**
   * The role type code.
   */
  role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent';
}

/**
 * PageInfo contains cursor-based pagination metadata.
 */
export interface PageInfo {
  /**
   * Whether there are more results after this page.
   */
  has_next_page: boolean;

  /**
   * Whether there are results before this page.
   */
  has_prev_page: boolean;

  /**
   * Cursor to fetch the next page of results, null if no more pages.
   */
  next_cursor: string | null;

  /**
   * Cursor to fetch the previous page of results, null if on the first page.
   */
  prev_cursor: string | null;
}

/**
 * ToolInput represents a tool to attach to an agent definition.
 */
export interface ToolInput {
  /**
   * Optional JSON configuration for this tool instance.
   */
  config_json: string;

  /**
   * Whether actions from this tool require human review before execution.
   */
  require_review: boolean;

  /**
   * Display order among the agent's tools (lower values appear first).
   */
  sort_order: number;

  /**
   * The identifier of the available tool to attach.
   */
  tool_id: string;
}

/**
 * A paginated list of AgentDefinition resources
 */
export interface AgentListResponse {
  /**
   * Array of AgentDefinition resources in this page
   */
  data: Array<AgentDefinition>;

  /**
   * Object type for AgentDefinition list
   */
  object: 'list';

  /**
   * PageInfo contains cursor-based pagination metadata.
   */
  page_info: PageInfo;
}

export interface AgentDeleteResponse {}

export interface AgentCreateParams {
  /**
   * Body param: The category code that classifies this agent (e.g.
   * "order_processing").
   */
  category_code: string;

  /**
   * Body param: AgentDefinitionConfig holds agent-level configuration that controls
   * LLM behavior. This is separate from tool-level config
   * (AgentDefinitionTool.Config) which configures individual tools attached to the
   * agent.
   */
  config: AgentDefinitionConfig;

  /**
   * Body param: A human-readable description of what the agent does.
   */
  description: string;

  /**
   * Body param: The display name of the agent.
   */
  name: string;

  /**
   * Body param: The ID of the role that defines this agent's permissions.
   */
  role_id: string;

  /**
   * Body param: A unique URL-friendly identifier for the agent.
   */
  slug: string;

  /**
   * Body param: The tools to attach to this agent.
   */
  tools: Array<ToolInput>;

  /**
   * Body param: How this agent is triggered: "manual", "scheduled", or "event".
   */
  trigger_type: 'scheduled' | 'manual' | 'event';

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'config' | 'tools' | 'role' | 'role.permissions'>;
}

export interface AgentRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'config' | 'tools' | 'role' | 'role.permissions'>;
}

export interface AgentUpdateParams {
  /**
   * Body param: The category code that classifies this agent (e.g.
   * "order_processing").
   */
  category_code: string;

  /**
   * Body param: AgentDefinitionConfig holds agent-level configuration that controls
   * LLM behavior. This is separate from tool-level config
   * (AgentDefinitionTool.Config) which configures individual tools attached to the
   * agent.
   */
  config: AgentDefinitionConfig;

  /**
   * Body param: A human-readable description of what the agent does.
   */
  description: string;

  /**
   * Body param: The display name of the agent.
   */
  name: string;

  /**
   * Body param: The ID of the role that defines this agent's permissions.
   */
  role_id: string;

  /**
   * Body param: A unique URL-friendly identifier for the agent.
   */
  slug: string;

  /**
   * Body param: The tools to attach to this agent. Replaces the existing tool set.
   */
  tools: Array<ToolInput>;

  /**
   * Body param: How this agent is triggered: "manual", "scheduled", or "event".
   */
  trigger_type: 'scheduled' | 'manual' | 'event';

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'config' | 'tools' | 'role' | 'role.permissions'>;
}

export interface AgentListParams {
  /**
   * Filter by definition type (e.g. "system", "custom").
   */
  definition_type?: Array<string>;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'config' | 'tools' | 'role' | 'role.permissions'>;

  /**
   * Filter by account-level status. Defaults to "active".
   */
  status?: Array<'active' | 'inactive'>;

  /**
   * Filter by trigger type (e.g. "manual", "scheduled", "event").
   */
  trigger_type?: Array<string>;
}

export interface AgentUpdateStatusParams {
  /**
   * Body param: The new account-level status code: "active" or "inactive".
   */
  status_code: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'config' | 'tools' | 'role' | 'role.permissions'>;
}

export declare namespace Agents {
  export {
    type AgentDefinition as AgentDefinition,
    type AgentDefinitionConfig as AgentDefinitionConfig,
    type LightRole as LightRole,
    type PageInfo as PageInfo,
    type ToolInput as ToolInput,
    type AgentListResponse as AgentListResponse,
    type AgentDeleteResponse as AgentDeleteResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentRetrieveParams as AgentRetrieveParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
    type AgentUpdateStatusParams as AgentUpdateStatusParams,
  };
}
