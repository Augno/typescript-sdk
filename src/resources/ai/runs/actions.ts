// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RunsAPI from './runs';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, retrieve, trigger, cancel, and continue agent runs.
 */
export class Actions extends APIResource {
  /**
   * Cancels a running or pending agent run.
   *
   * @example
   * ```ts
   * const agentRun = await client.ai.runs.actions.cancel('id');
   * ```
   */
  cancel(
    id: string,
    params: ActionCancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RunsAPI.AgentRun> {
    const { include } = params ?? {};
    return this._client.post(path`/v1/ai/runs/${id}/actions/cancel`, { query: { include }, ...options });
  }

  /**
   * Continues an agent run that is awaiting input with a new user message.
   *
   * @example
   * ```ts
   * const agentRun = await client.ai.runs.actions.continue(
   *   'id',
   *   {
   *     allowed_tool_slugs: ['string'],
   *     approved_tool_slugs: ['string'],
   *     message: 'Yes, proceed with creating the order.',
   *   },
   * );
   * ```
   */
  continue(id: string, params: ActionContinueParams, options?: RequestOptions): APIPromise<RunsAPI.AgentRun> {
    const { include, ...body } = params;
    return this._client.post(path`/v1/ai/runs/${id}/actions/continue`, {
      query: { include },
      body,
      ...options,
    });
  }
}

export interface ActionCancelParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'actions' | 'definition' | 'definition.config' | 'definition.tools' | 'definition.role'>;
}

export interface ActionContinueParams {
  /**
   * Body param: Optional list of tool slugs to allow for the rest of the run without
   * further approval.
   */
  allowed_tool_slugs: Array<string>;

  /**
   * Body param: Optional list of tool slugs to approve individually. If empty, all
   * pending tools are approved.
   */
  approved_tool_slugs: Array<string>;

  /**
   * Body param: The user message to send to the agent.
   */
  message: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'actions' | 'definition' | 'definition.config' | 'definition.tools' | 'definition.role'>;
}

export declare namespace Actions {
  export { type ActionCancelParams as ActionCancelParams, type ActionContinueParams as ActionContinueParams };
}
