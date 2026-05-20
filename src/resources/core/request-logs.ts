// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import * as AccountPricesAPI from './account-prices';
import { APIPromise } from '../../core/api-promise';
import { DefaultCursorPage, type DefaultCursorPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and retrieve request logs.
 */
export class RequestLogs extends APIResource {
  /**
   * This endpoint returns a single request log by its ID.
   *
   * @example
   * ```ts
   * const requestLog = await client.core.requestLogs.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: RequestLogRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RequestLogRetrieveResponse> {
    return this._client.get(path`/v1/core/request-logs/${id}`, { query, ...options });
  }

  /**
   * This endpoint returns a paginated, filterable list of request logs for the
   * target account. Supports cursor-based pagination and various filters.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const requestLogListResponse of client.core.requestLogs.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: RequestLogListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<RequestLogListResponsesDefaultCursorPage, RequestLogListResponse> {
    return this._client.getAPIList('/v1/core/request-logs', DefaultCursorPage<RequestLogListResponse>, {
      query,
      ...options,
    });
  }
}

export type RequestLogListResponsesDefaultCursorPage = DefaultCursorPage<RequestLogListResponse>;

/**
 * RequestLogActor contains the resolved actor details for a request log.
 */
export interface RequestLogActor {
  /**
   * The actor's ID (user ID or API key type_id).
   */
  id: string;

  /**
   * The actor's email (users only).
   */
  email: string | null;

  /**
   * The actor's display name.
   */
  name: string | null;

  /**
   * The resource type identifier.
   */
  object: 'user';

  /**
   * The redacted API key value (API keys only).
   */
  redacted_value: string | null;

  /**
   * LightRole represents a minimal role reference.
   */
  role: AgentsAPI.LightRole | null;
}

/**
 * RequestLog represents a single API request log entry.
 */
export interface RequestLogRetrieveResponse {
  /**
   * The unique identifier for the request log.
   */
  id: string;

  /**
   * LightAccount represents a minimal account reference.
   */
  account: AccountPricesAPI.LightAccount | null;

  /**
   * RequestLogActor contains the resolved actor details for a request log.
   */
  actor: RequestLogActor | null;

  /**
   * The API version used.
   */
  api_version: string | null;

  /**
   * The client IP address.
   */
  client_ip: string | null;

  /**
   * When the log entry was created.
   */
  created_at: string;

  /**
   * The API error code, if any.
   */
  error_code: string | null;

  /**
   * The error message, if any.
   */
  error_message: string | null;

  /**
   * The request host.
   */
  host: string;

  /**
   * The user-provided idempotency key value.
   */
  idempotency_key: string | null;

  /**
   * The identity type of the caller.
   */
  identity_type: string | null;

  /**
   * The request latency in microseconds.
   */
  latency_us: number;

  /**
   * The HTTP method.
   */
  method: string;

  /**
   * The normalized route pattern.
   */
  normalized_route: string;

  /**
   * The resource type identifier.
   */
  object: 'request_log';

  /**
   * When the request occurred.
   */
  occurred_at: string;

  /**
   * The request path.
   */
  path: string;

  /**
   * The query parameters as JSON.
   */
  query_json: string | null;

  /**
   * The referrer header.
   */
  referrer: string | null;

  /**
   * The JSON request body.
   */
  request_body_json: string | null;

  /**
   * The JSON response body.
   */
  response_body_json: string | null;

  /**
   * The HTTP status code.
   */
  status_code: number;

  /**
   * The user agent string.
   */
  user_agent: string | null;
}

/**
 * RequestLogListItem is the list representation of a request log entry. It omits
 * the request and response body JSON fields which are only available when
 * retrieving a single request log by ID.
 */
export interface RequestLogListResponse {
  /**
   * The unique identifier for the request log.
   */
  id: string;

  /**
   * LightAccount represents a minimal account reference.
   */
  account: AccountPricesAPI.LightAccount | null;

  /**
   * RequestLogActor contains the resolved actor details for a request log.
   */
  actor: RequestLogActor | null;

  /**
   * The API version used.
   */
  api_version: string | null;

  /**
   * The client IP address.
   */
  client_ip: string | null;

  /**
   * When the log entry was created.
   */
  created_at: string;

  /**
   * The API error code, if any.
   */
  error_code: string | null;

  /**
   * The error message, if any.
   */
  error_message: string | null;

  /**
   * The request host.
   */
  host: string;

  /**
   * The user-provided idempotency key value.
   */
  idempotency_key: string | null;

  /**
   * The identity type of the caller.
   */
  identity_type: string | null;

  /**
   * The request latency in microseconds.
   */
  latency_us: number;

  /**
   * The HTTP method.
   */
  method: string;

  /**
   * The normalized route pattern.
   */
  normalized_route: string;

  /**
   * The resource type identifier.
   */
  object: 'request_log';

  /**
   * When the request occurred.
   */
  occurred_at: string;

  /**
   * The request path.
   */
  path: string;

  /**
   * The query parameters as JSON.
   */
  query_json: string | null;

  /**
   * The referrer header.
   */
  referrer: string | null;

  /**
   * The HTTP status code.
   */
  status_code: number;

  /**
   * The user agent string.
   */
  user_agent: string | null;
}

export interface RequestLogRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'account' | 'actor' | 'actor.role' | 'actor.role.permissions'>;
}

export interface RequestLogListParams extends DefaultCursorPageParams {
  /**
   * Filter: actor's home account ID.
   */
  account_id?: string;

  /**
   * Filter: actor ID.
   */
  actor_id?: string;

  /**
   * Filter: actor name (partial or exact match).
   */
  actor_name?: string;

  /**
   * Filter: actor type ("user" or "api_key").
   */
  actor_type?: string;

  /**
   * Filter: end of date range for occurred_at.
   */
  end_date?: string;

  /**
   * Filter: API error code.
   */
  error_code?: string;

  /**
   * When true, string filters use exact match instead of partial (LIKE).
   */
  exact_match?: boolean;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'account' | 'actor' | 'actor.role' | 'actor.role.permissions'>;

  /**
   * Filter: HTTP method.
   */
  method?: string;

  /**
   * Search query: matches against ID (exact), path (partial), or error message
   * (partial).
   */
  q?: string;

  /**
   * Filter: start of date range for occurred_at.
   */
  start_date?: string;

  /**
   * Filter: HTTP status code.
   */
  status_code?: number;
}

export declare namespace RequestLogs {
  export {
    type RequestLogActor as RequestLogActor,
    type RequestLogRetrieveResponse as RequestLogRetrieveResponse,
    type RequestLogListResponse as RequestLogListResponse,
    type RequestLogListResponsesDefaultCursorPage as RequestLogListResponsesDefaultCursorPage,
    type RequestLogRetrieveParams as RequestLogRetrieveParams,
    type RequestLogListParams as RequestLogListParams,
  };
}
