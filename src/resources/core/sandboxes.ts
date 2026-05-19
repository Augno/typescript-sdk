// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountPricesAPI from './account-prices';
import { APIPromise } from '../../core/api-promise';
import { DefaultCursorPage, type DefaultCursorPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage sandbox environments.
 */
export class Sandboxes extends APIResource {
  /**
   * This endpoint creates a new sandbox account for the target account. Enforces a
   * per-account sandbox limit. Requires admin permissions.
   *
   * @example
   * ```ts
   * const sandbox = await client.core.sandboxes.create({
   *   mode: 'blank',
   *   name: 'Integration Testing',
   * });
   * ```
   */
  create(params: SandboxCreateParams, options?: RequestOptions): APIPromise<Sandbox> {
    const { include, ...body } = params;
    return this._client.post('/v1/core/sandboxes', { query: { include }, body, ...options });
  }

  /**
   * This endpoint returns a single sandbox account by its ID.
   *
   * @example
   * ```ts
   * const sandbox = await client.core.sandboxes.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: SandboxRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Sandbox> {
    return this._client.get(path`/v1/core/sandboxes/${id}`, { query, ...options });
  }

  /**
   * This endpoint returns a paginated list of sandbox accounts for the target
   * account. Supports cursor-based pagination.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const sandbox of client.core.sandboxes.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SandboxListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SandboxesDefaultCursorPage, Sandbox> {
    return this._client.getAPIList('/v1/core/sandboxes', DefaultCursorPage<Sandbox>, { query, ...options });
  }

  /**
   * This endpoint deletes a sandbox account. At least one sandbox must remain per
   * production account. The sandbox and its account record are removed
   * synchronously, and all account-scoped data is purged asynchronously.
   *
   * @example
   * ```ts
   * const sandbox = await client.core.sandboxes.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<SandboxDeleteResponse> {
    return this._client.delete(path`/v1/core/sandboxes/${id}`, options);
  }
}

export type SandboxesDefaultCursorPage = DefaultCursorPage<Sandbox>;

/**
 * Sandbox represents an isolated testing environment for an account.
 */
export interface Sandbox {
  /**
   * The unique identifier for the sandbox.
   */
  id: string;

  /**
   * When this sandbox was created.
   */
  created_at: string;

  /**
   * The display name of the sandbox.
   */
  name: string;

  /**
   * The resource type identifier.
   */
  object: 'sandbox';

  /**
   * LightAccount represents a minimal account reference.
   */
  owner_account: AccountPricesAPI.LightAccount | null;

  /**
   * When this sandbox was last updated.
   */
  updated_at: string;
}

export interface SandboxDeleteResponse {}

export interface SandboxCreateParams {
  /**
   * Body param: Controls whether the sandbox is blank or seeded with tutorial data.
   */
  mode: 'blank' | 'seeded';

  /**
   * Body param: The display name for the sandbox.
   */
  name: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner_account'>;
}

export interface SandboxRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner_account'>;
}

export interface SandboxListParams extends DefaultCursorPageParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner_account'>;

  /**
   * Optional search query to filter results.
   */
  q?: string;
}

export declare namespace Sandboxes {
  export {
    type Sandbox as Sandbox,
    type SandboxDeleteResponse as SandboxDeleteResponse,
    type SandboxesDefaultCursorPage as SandboxesDefaultCursorPage,
    type SandboxCreateParams as SandboxCreateParams,
    type SandboxRetrieveParams as SandboxRetrieveParams,
    type SandboxListParams as SandboxListParams,
  };
}
