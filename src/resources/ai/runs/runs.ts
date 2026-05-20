// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../agents';
import * as AlertsAPI from '../alerts/alerts';
import * as ActionsAPI from './actions';
import { ActionCancelParams, ActionContinueParams, Actions } from './actions';
import { APIPromise } from '../../../core/api-promise';
import { DefaultCursorPage, type DefaultCursorPageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, retrieve, trigger, cancel, and continue agent runs.
 */
export class Runs extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Returns a single agent run with optional actions and definition.
   *
   * @example
   * ```ts
   * const agentRun = await client.ai.runs.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: RunRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentRun> {
    return this._client.get(path`/v1/ai/runs/${id}`, { query, ...options });
  }

  /**
   * Returns a paginated list of agent runs for the current account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const agentRun of client.ai.runs.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: RunListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AgentRunsDefaultCursorPage, AgentRun> {
    return this._client.getAPIList('/v1/ai/runs', DefaultCursorPage<AgentRun>, { query, ...options });
  }

  /**
   * Triggers a new agent run for the specified agent definition.
   *
   * @example
   * ```ts
   * const agentRun = await client.ai.runs.trigger({
   *   agent_definition_id: 'agdf_01jm4r6700f8nwq3v5hx2d9ktp',
   *   input: 'Process the latest incoming orders.',
   * });
   * ```
   */
  trigger(params: RunTriggerParams, options?: RequestOptions): APIPromise<AgentRun> {
    const { include, ...body } = params;
    return this._client.post('/v1/ai/runs', { query: { include }, body, ...options });
  }
}

export type AgentRunsDefaultCursorPage = DefaultCursorPage<AgentRun>;

/**
 * AgentRun represents an execution instance of an agent.
 */
export interface AgentRun {
  /**
   * The unique identifier for the agent run.
   */
  id: string;

  /**
   * The actions performed during this run.
   */
  actions: Array<AlertsAPI.AgentAction>;

  /**
   * When the run completed.
   */
  completed_at: string | null;

  /**
   * When this run was created.
   */
  created_at: string;

  /**
   * AgentDefinition represents an agent definition.
   */
  definition: AgentsAPI.AgentDefinition | null;

  /**
   * Duration in milliseconds.
   */
  duration_ms: number | null;

  /**
   * Error message if the run failed.
   */
  error_message: string | null;

  /**
   * The input provided to the agent.
   */
  input: Array<unknown>;

  /**
   * The resource type identifier.
   */
  object: 'agent_run';

  /**
   * The output produced by the agent.
   */
  output: Array<unknown>;

  /**
   * When the run started executing.
   */
  started_at: string | null;

  /**
   * The current status of this run.
   */
  status: string;

  /**
   * The timeline steps for this run.
   */
  steps: Array<AgentRun.Step>;

  /**
   * Total input tokens consumed.
   */
  total_input_tokens: number | null;

  /**
   * Total output tokens consumed.
   */
  total_output_tokens: number | null;

  /**
   * How this run was triggered.
   */
  trigger_type: string;

  /**
   * LightActor is a lightweight reference to an actor (user, API key, or agent).
   */
  triggered_by: AlertsAPI.LightActor | null;

  /**
   * When this run was last updated.
   */
  updated_at: string;
}

export namespace AgentRun {
  /**
   * AgentRunStep represents a single step in the agent run timeline.
   */
  export interface Step {
    /**
     * The unique identifier for the step.
     */
    id: string;

    /**
     * LightActor is a lightweight reference to an actor (user, API key, or agent).
     */
    actor: AlertsAPI.LightActor | null;

    /**
     * The content/details of the step.
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
     * Metadata for the step.
     */
    metadata: Array<unknown>;

    /**
     * The resource type identifier.
     */
    object: 'agent_run_step';

    /**
     * The sequence number of the step.
     */
    sequence: number;

    /**
     * The type of step.
     */
    step_type: string;

    /**
     * A short title for the step.
     */
    title: string;
  }
}

export interface RunRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    'actions' | 'definition' | 'steps' | 'definition.config' | 'definition.tools' | 'definition.role'
  >;
}

export interface RunListParams extends DefaultCursorPageParams {
  /**
   * Filter by agent definition ID.
   */
  agent_definition_id?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'definition' | 'actions' | 'definition.config' | 'definition.tools' | 'definition.role'>;

  /**
   * Filter by run status code (e.g. "running", "completed", "failed").
   */
  status_code?: string;
}

export interface RunTriggerParams {
  /**
   * Body param: The ID of the agent definition to run.
   */
  agent_definition_id: string;

  /**
   * Body param: Optional input text to provide to the agent at the start of the run.
   */
  input: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'actions' | 'definition' | 'definition.config' | 'definition.tools' | 'definition.role'>;
}

Runs.Actions = Actions;

export declare namespace Runs {
  export {
    type AgentRun as AgentRun,
    type AgentRunsDefaultCursorPage as AgentRunsDefaultCursorPage,
    type RunRetrieveParams as RunRetrieveParams,
    type RunListParams as RunListParams,
    type RunTriggerParams as RunTriggerParams,
  };

  export {
    Actions as Actions,
    type ActionCancelParams as ActionCancelParams,
    type ActionContinueParams as ActionContinueParams,
  };
}
