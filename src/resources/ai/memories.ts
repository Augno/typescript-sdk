// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultCursorPage, type DefaultCursorPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List, create, update, and delete agent memories.
 */
export class Memories extends APIResource {
  /**
   * Creates a new agent memory for the current account.
   *
   * @example
   * ```ts
   * const agentMemory = await client.ai.memories.create({
   *   category: 'preference',
   *   content:
   *     'Customer prefers express shipping on all orders.',
   *   importance: 0.8,
   *   metadata: null,
   * });
   * ```
   */
  create(body: MemoryCreateParams, options?: RequestOptions): APIPromise<AgentMemory> {
    return this._client.post('/v1/ai/memories', { body, ...options });
  }

  /**
   * Returns a single agent memory by ID.
   *
   * @example
   * ```ts
   * const agentMemory = await client.ai.memories.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AgentMemory> {
    return this._client.get(path`/v1/ai/memories/${id}`, options);
  }

  /**
   * Updates an existing agent memory.
   *
   * @example
   * ```ts
   * const agentMemory = await client.ai.memories.update('id', {
   *   category: 'category',
   *   content:
   *     'Customer prefers next-day shipping on all orders.',
   *   importance: 0.9,
   *   metadata: [{}],
   * });
   * ```
   */
  update(id: string, body: MemoryUpdateParams, options?: RequestOptions): APIPromise<AgentMemory> {
    return this._client.patch(path`/v1/ai/memories/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of agent memories for the current account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const agentMemory of client.ai.memories.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: MemoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AgentMemoriesDefaultCursorPage, AgentMemory> {
    return this._client.getAPIList('/v1/ai/memories', DefaultCursorPage<AgentMemory>, { query, ...options });
  }

  /**
   * Deletes an agent memory.
   *
   * @example
   * ```ts
   * const memory = await client.ai.memories.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<MemoryDeleteResponse> {
    return this._client.delete(path`/v1/ai/memories/${id}`, options);
  }
}

export type AgentMemoriesDefaultCursorPage = DefaultCursorPage<AgentMemory>;

/**
 * AgentMemory represents a piece of agent memory stored for contextual recall.
 */
export interface AgentMemory {
  /**
   * The unique identifier for the memory.
   */
  id: string;

  /**
   * The category of memory.
   */
  category: string;

  /**
   * The content of the memory.
   */
  content: string;

  /**
   * When this memory was created.
   */
  created_at: string;

  /**
   * Entity represents an entity in the system.
   */
  entity: Entity | null;

  /**
   * When this memory expires. Null means it never expires.
   */
  expires_at: string | null;

  /**
   * How important this memory is (0-1 scale).
   */
  importance: number;

  /**
   * Arbitrary metadata as JSON.
   */
  metadata: Array<unknown>;

  /**
   * The resource type identifier.
   */
  object: 'agent_memory';

  /**
   * When this memory was last updated.
   */
  updated_at: string;
}

/**
 * Entity represents an entity in the system.
 */
export interface Entity {
  /**
   * The unique identifier for the entity.
   */
  id: string;

  /**
   * The resource type identifier.
   */
  object:
    | 'account'
    | 'user'
    | 'address'
    | 'api_key'
    | 'list'
    | 'sandbox'
    | 'registration_session'
    | 'pricing_plan'
    | 'plan_change'
    | 'enterprise_inquiry'
    | 'request_log'
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
    | 'agent_alert'
    | 'tool_group'
    | 'payment_term'
    | 'shipping_term'
    | 'quantity'
    | 'account_group'
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
    | 'carrier_option'
    | 'item'
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
    | 'consumption'
    | 'customer_product_line_access'
    | 'customer'
    | 'customer_summary'
    | 'priority'
    | 'delivery'
    | 'delivery_line'
    | 'sales_order'
    | 'storage_location'
    | 'lot';
}

export interface MemoryDeleteResponse {}

export interface MemoryCreateParams {
  /**
   * The memory category (e.g. "preference", "fact", "instruction").
   */
  category: string;

  /**
   * The text content of the memory.
   */
  content: string;

  /**
   * A numeric importance score between 0 and 1.
   */
  importance: number;

  /**
   * Optional JSON metadata associated with this memory.
   */
  metadata: Array<unknown>;

  /**
   * The ID of the entity this memory is scoped to.
   */
  entity_id?: string | null;

  /**
   * The type of entity this memory is scoped to (e.g. "customer", "product").
   */
  entity_type?: string | null;

  /**
   * An ISO 8601 timestamp after which this memory expires.
   */
  expires_at?: string | null;
}

export interface MemoryUpdateParams {
  /**
   * The memory category (e.g. "preference", "fact", "instruction").
   */
  category: string;

  /**
   * The text content of the memory.
   */
  content: string;

  /**
   * A numeric importance score between 0 and 1.
   */
  importance: number;

  /**
   * Optional JSON metadata associated with this memory.
   */
  metadata: Array<unknown>;

  /**
   * The ID of the entity this memory is scoped to.
   */
  entity_id?: string | null;

  /**
   * The type of entity this memory is scoped to (e.g. "customer", "product").
   */
  entity_type?: string | null;

  /**
   * An ISO 8601 timestamp after which this memory expires.
   */
  expires_at?: string | null;
}

export interface MemoryListParams extends DefaultCursorPageParams {
  /**
   * Filter by memory category (e.g. "preference", "fact").
   */
  category?: string;

  /**
   * Filter by entity type (e.g. "customer", "product").
   */
  entity_type?: string;
}

export declare namespace Memories {
  export {
    type AgentMemory as AgentMemory,
    type Entity as Entity,
    type MemoryDeleteResponse as MemoryDeleteResponse,
    type AgentMemoriesDefaultCursorPage as AgentMemoriesDefaultCursorPage,
    type MemoryCreateParams as MemoryCreateParams,
    type MemoryUpdateParams as MemoryUpdateParams,
    type MemoryListParams as MemoryListParams,
  };
}
