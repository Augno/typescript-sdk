// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import {
  AgentCreateParams,
  AgentDefinition,
  AgentDefinitionConfig,
  AgentDeleteResponse,
  AgentListParams,
  AgentListResponse,
  AgentRetrieveParams,
  AgentUpdateParams,
  AgentUpdateStatusParams,
  Agents,
  LightRole,
  PageInfo,
  ToolInput,
} from './agents';
import * as MemoriesAPI from './memories';
import {
  AgentMemoriesDefaultCursorPage,
  AgentMemory,
  Entity,
  Memories,
  MemoryCreateParams,
  MemoryDeleteResponse,
  MemoryListParams,
  MemoryUpdateParams,
} from './memories';
import * as AlertsAPI from './alerts/alerts';
import {
  AgentAction,
  AgentAlert,
  AgentAlertsDefaultCursorPage,
  AlertListParams,
  AlertRetrieveParams,
  Alerts,
  LightActor,
} from './alerts/alerts';
import * as RunsAPI from './runs/runs';
import {
  AgentRun,
  AgentRunsDefaultCursorPage,
  RunListParams,
  RunRetrieveParams,
  RunTriggerParams,
  Runs,
} from './runs/runs';
import { APIPromise } from '../../core/api-promise';
import { DefaultCursorPage, type DefaultCursorPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class AI extends APIResource {
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);
  alerts: AlertsAPI.Alerts = new AlertsAPI.Alerts(this._client);
  memories: MemoriesAPI.Memories = new MemoriesAPI.Memories(this._client);
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);

  /**
   * Returns all tool groups used to organize available platform tools.
   *
   * @example
   * ```ts
   * const response = await client.ai.listToolGroups();
   * ```
   */
  listToolGroups(
    query: AIListToolGroupsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AIListToolGroupsResponse> {
    return this._client.get('/v1/ai/tool-groups', { query, ...options });
  }

  /**
   * Returns all available platform tools that can be assigned to agents.
   *
   * @example
   * ```ts
   * const response = await client.ai.listTools();
   * ```
   */
  listTools(
    query: AIListToolsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AIListToolsResponse> {
    return this._client.get('/v1/ai/tools', { query, ...options });
  }

  /**
   * Returns a paginated list of daily agent token usage records for the current
   * account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const aiListUsageResponse of client.ai.listUsage()) {
   *   // ...
   * }
   * ```
   */
  listUsage(
    query: AIListUsageParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AIListUsageResponsesDefaultCursorPage, AIListUsageResponse> {
    return this._client.getAPIList('/v1/ai/usage', DefaultCursorPage<AIListUsageResponse>, {
      query,
      ...options,
    });
  }
}

export type AIListUsageResponsesDefaultCursorPage = DefaultCursorPage<AIListUsageResponse>;

/**
 * AvailableTool represents a platform tool that can be attached to agents. Each
 * tool has a config_schema that describes what configuration options it accepts,
 * and an input_schema (internal, not exposed via API) that tells the LLM what
 * arguments to pass when invoking the tool at runtime.
 */
export interface AvailableTool {
  /**
   * The unique identifier for the tool.
   */
  id: string;

  /**
   * The tool category.
   */
  category: string;

  /**
   * A JSON schema describing what configuration options this tool accepts. Defines
   * the shape of the `config` field on AgentDefinitionTool. For example:
   * {"type":"object","properties":{"max_results":{"type":"integer","default":10}}}.
   */
  config_schema: Array<unknown>;

  /**
   * A description of the tool.
   */
  description: string | null;

  /**
   * The display name of the tool.
   */
  display_name: string;

  /**
   * ToolGroup represents a logical grouping of platform tools.
   */
  group: ToolGroup | null;

  /**
   * The resource type identifier.
   */
  object: 'available_tool';

  /**
   * Permissions required to use this tool.
   */
  required_permissions: Array<string>;
}

/**
 * ToolGroup represents a logical grouping of platform tools.
 */
export interface ToolGroup {
  /**
   * The unique identifier for the group.
   */
  id: string;

  /**
   * A description of the tool group.
   */
  description: string;

  /**
   * An icon identifier for the group (e.g. a Material Icon name).
   */
  icon: string;

  /**
   * The display name of the group.
   */
  name: string;

  /**
   * The resource type identifier.
   */
  object: 'tool_group';

  /**
   * A URL-friendly slug for the group.
   */
  slug: string;

  /**
   * Sort order for display purposes.
   */
  sort_order: number;

  /**
   * The tools belonging to this group. Expandable.
   */
  tools: Array<AvailableTool>;
}

/**
 * A paginated list of ToolGroup resources
 */
export interface AIListToolGroupsResponse {
  /**
   * Array of ToolGroup resources in this page
   */
  data: Array<ToolGroup>;

  /**
   * Object type for ToolGroup list
   */
  object: 'list';

  /**
   * PageInfo contains cursor-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

/**
 * A paginated list of AvailableTool resources
 */
export interface AIListToolsResponse {
  /**
   * Array of AvailableTool resources in this page
   */
  data: Array<AvailableTool>;

  /**
   * Object type for AvailableTool list
   */
  object: 'list';

  /**
   * PageInfo contains cursor-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

/**
 * AgentTokenUsage represents a daily token usage record for an account.
 */
export interface AIListUsageResponse {
  /**
   * The unique identifier for this usage record.
   */
  id: string;

  /**
   * When this record was created.
   */
  created_at: string;

  /**
   * The date of usage (YYYY-MM-DD).
   */
  date: string;

  /**
   * Total input tokens consumed.
   */
  input_tokens: number;

  /**
   * The resource type identifier.
   */
  object: 'agent_token_usage';

  /**
   * Total output tokens consumed.
   */
  output_tokens: number;

  /**
   * Number of agent runs.
   */
  run_count: number;

  /**
   * Total cost in USD.
   */
  total_cost: number;

  /**
   * When this record was last updated.
   */
  updated_at: string;
}

export interface AIListToolGroupsParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'tools'>;
}

export interface AIListToolsParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'group'>;
}

export interface AIListUsageParams extends DefaultCursorPageParams {
  /**
   * Number of days of usage history to return. Defaults to 30.
   */
  days?: number;
}

AI.Agents = Agents;
AI.Alerts = Alerts;
AI.Memories = Memories;
AI.Runs = Runs;

export declare namespace AI {
  export {
    type AvailableTool as AvailableTool,
    type ToolGroup as ToolGroup,
    type AIListToolGroupsResponse as AIListToolGroupsResponse,
    type AIListToolsResponse as AIListToolsResponse,
    type AIListUsageResponse as AIListUsageResponse,
    type AIListUsageResponsesDefaultCursorPage as AIListUsageResponsesDefaultCursorPage,
    type AIListToolGroupsParams as AIListToolGroupsParams,
    type AIListToolsParams as AIListToolsParams,
    type AIListUsageParams as AIListUsageParams,
  };

  export {
    Agents as Agents,
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

  export {
    Alerts as Alerts,
    type AgentAction as AgentAction,
    type AgentAlert as AgentAlert,
    type LightActor as LightActor,
    type AgentAlertsDefaultCursorPage as AgentAlertsDefaultCursorPage,
    type AlertRetrieveParams as AlertRetrieveParams,
    type AlertListParams as AlertListParams,
  };

  export {
    Memories as Memories,
    type AgentMemory as AgentMemory,
    type Entity as Entity,
    type MemoryDeleteResponse as MemoryDeleteResponse,
    type AgentMemoriesDefaultCursorPage as AgentMemoriesDefaultCursorPage,
    type MemoryCreateParams as MemoryCreateParams,
    type MemoryUpdateParams as MemoryUpdateParams,
    type MemoryListParams as MemoryListParams,
  };

  export {
    Runs as Runs,
    type AgentRun as AgentRun,
    type AgentRunsDefaultCursorPage as AgentRunsDefaultCursorPage,
    type RunRetrieveParams as RunRetrieveParams,
    type RunListParams as RunListParams,
    type RunTriggerParams as RunTriggerParams,
  };
}
