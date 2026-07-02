// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BlocksAPI from '../messaging/blocks';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage scanning stations.
 */
export class ScanningStations extends APIResource {
  /**
   * Returns a paginated list of scanning stations in your account.
   *
   * This endpoint requires the permission: `scanners:read`.
   *
   * @example
   * ```ts
   * const listScanningStation =
   *   await client.operations.scanningStations.list();
   * ```
   */
  list(
    query: ScanningStationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BlocksAPI.ListScanningStation> {
    return this._client.get('/v1/operations/scanning-stations', { query, ...options });
  }

  /**
   * Returns a scanning station by ID.
   *
   * This endpoint requires the permission: `scanners:read`.
   *
   * @example
   * ```ts
   * const scanningStation =
   *   await client.operations.scanningStations.retrieve(
   *     'scst_0129335dd6286056a97024fcc1',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: ScanningStationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BlocksAPI.ScanningStation> {
    return this._client.get(path`/v1/operations/scanning-stations/${id}`, { query, ...options });
  }

  /**
   * Creates a scanning station and assigns it to a department.
   *
   * Returns a conflict error if a scanning station with the same name already
   * exists.
   *
   * This endpoint requires the permission: `scanners:create`.
   *
   * @example
   * ```ts
   * const scanningStation =
   *   await client.operations.scanningStations.create({
   *     department_id: 'dp_01791c25ab59da4704cba61874',
   *     name: 'Packaging Line 1',
   *     operator_requirement: 'none',
   *     type: 'init_batch',
   *     label_size: '1x1',
   *     label_type: 'tag',
   *     notes: 'Primary intake station on the receiving dock.',
   *   });
   * ```
   */
  create(
    params: ScanningStationCreateParams,
    options?: RequestOptions,
  ): APIPromise<BlocksAPI.ScanningStation> {
    const { include, ...body } = params;
    return this._client.post('/v1/operations/scanning-stations', { query: { include }, body, ...options });
  }

  /**
   * Partially updates a scanning station.
   *
   * Only the fields provided in the request are changed. Returns a conflict error if
   * the new name is already in use by another scanning station.
   *
   * This endpoint requires the permission: `scanners:update`.
   *
   * @example
   * ```ts
   * const scanningStation =
   *   await client.operations.scanningStations.update(
   *     'scst_0129335dd6286056a97024fcc1',
   *     {
   *       label_size: '1x1',
   *       label_type: 'tag',
   *       name: 'Station B',
   *       notes: 'Relocated to the finishing area.',
   *       operator_requirement: 'material_check',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: ScanningStationUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BlocksAPI.ScanningStation> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/scanning-stations/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Deletes a scanning station.
   *
   * This endpoint requires the permission: `scanners:delete`.
   *
   * @example
   * ```ts
   * const scanningStation =
   *   await client.operations.scanningStations.delete(
   *     'scst_0129335dd6286056a97024fcc1',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ScanningStationDeleteResponse> {
    return this._client.delete(path`/v1/operations/scanning-stations/${id}`, options);
  }
}

/**
 * Request to create a scanning station.
 */
export interface CreateScanningStationRequest {
  /**
   * ID of the department this station belongs to.
   */
  department_id: string;

  /**
   * Display name of the scanning station.
   *
   * Must be unique within your account; maximum 255 characters.
   */
  name: string;

  /**
   * Whether operators must perform a material check at this station.
   *
   * - `none`: no additional operator check is required.
   * - `material_check`: a material check is expected before the operation.
   */
  operator_requirement: 'none' | 'material_check';

  /**
   * Scanning station type, determining which batch operation the station performs.
   *
   * - `init_batch`: initializes a new batch.
   * - `merge_batch`: merges multiple batches into one.
   * - `move_batch`: moves a batch to another location or step.
   * - `split_batch`: splits a batch into multiple batches.
   *
   * The type cannot be changed after creation.
   */
  type: 'init_batch' | 'merge_batch' | 'move_batch' | 'split_batch';

  /**
   * Size of the labels printed at this station, given as width-by-height (for
   * example, `1x1`).
   */
  label_size?: '1x1' | '1x3' | '1x4' | '2x4';

  /**
   * Type of label printed at this station.
   *
   * - `tag`: a label attached to the physical product.
   * - `traveler`: a routing sheet that accompanies the batch through every
   *   production step.
   */
  label_type?: 'tag' | 'traveler';

  /**
   * Free-form notes about the scanning station.
   */
  notes?: string;
}

/**
 * Request to partially update a scanning station.
 */
export interface UpdateScanningStationRequest {
  /**
   * Size of the labels printed at this station, given as width-by-height (for
   * example, `1x1`).
   */
  label_size?: '1x1' | '1x3' | '1x4' | '2x4';

  /**
   * Type of label printed at this station.
   *
   * - `tag`: a label attached to the physical product.
   * - `traveler`: a routing sheet that accompanies the batch through every
   *   production step.
   */
  label_type?: 'tag' | 'traveler';

  /**
   * Display name of the scanning station.
   *
   * Must be unique within your account; maximum 255 characters.
   */
  name?: string;

  /**
   * Free-form notes about the scanning station.
   *
   * Send `null` to clear.
   */
  notes?: string | null;

  /**
   * Whether operators must perform a material check at this station.
   *
   * - `none`: no additional operator check is required.
   * - `material_check`: a material check is expected before the operation.
   */
  operator_requirement?: 'none' | 'material_check';
}

export interface ScanningStationDeleteResponse {}

export interface ScanningStationListParams {
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
  include?: Array<'department' | 'production_steps'>;

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

export interface ScanningStationRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'department' | 'production_steps'>;
}

export interface ScanningStationCreateParams {
  /**
   * Body param: ID of the department this station belongs to.
   */
  department_id: string;

  /**
   * Body param: Display name of the scanning station.
   *
   * Must be unique within your account; maximum 255 characters.
   */
  name: string;

  /**
   * Body param: Whether operators must perform a material check at this station.
   *
   * - `none`: no additional operator check is required.
   * - `material_check`: a material check is expected before the operation.
   */
  operator_requirement: 'none' | 'material_check';

  /**
   * Body param: Scanning station type, determining which batch operation the station
   * performs.
   *
   * - `init_batch`: initializes a new batch.
   * - `merge_batch`: merges multiple batches into one.
   * - `move_batch`: moves a batch to another location or step.
   * - `split_batch`: splits a batch into multiple batches.
   *
   * The type cannot be changed after creation.
   */
  type: 'init_batch' | 'merge_batch' | 'move_batch' | 'split_batch';

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'department' | 'production_steps'>;

  /**
   * Body param: Size of the labels printed at this station, given as width-by-height
   * (for example, `1x1`).
   */
  label_size?: '1x1' | '1x3' | '1x4' | '2x4';

  /**
   * Body param: Type of label printed at this station.
   *
   * - `tag`: a label attached to the physical product.
   * - `traveler`: a routing sheet that accompanies the batch through every
   *   production step.
   */
  label_type?: 'tag' | 'traveler';

  /**
   * Body param: Free-form notes about the scanning station.
   */
  notes?: string;
}

export interface ScanningStationUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'department' | 'production_steps'>;

  /**
   * Body param: Size of the labels printed at this station, given as width-by-height
   * (for example, `1x1`).
   */
  label_size?: '1x1' | '1x3' | '1x4' | '2x4';

  /**
   * Body param: Type of label printed at this station.
   *
   * - `tag`: a label attached to the physical product.
   * - `traveler`: a routing sheet that accompanies the batch through every
   *   production step.
   */
  label_type?: 'tag' | 'traveler';

  /**
   * Body param: Display name of the scanning station.
   *
   * Must be unique within your account; maximum 255 characters.
   */
  name?: string;

  /**
   * Body param: Free-form notes about the scanning station.
   *
   * Send `null` to clear.
   */
  notes?: string | null;

  /**
   * Body param: Whether operators must perform a material check at this station.
   *
   * - `none`: no additional operator check is required.
   * - `material_check`: a material check is expected before the operation.
   */
  operator_requirement?: 'none' | 'material_check';
}

export declare namespace ScanningStations {
  export {
    type CreateScanningStationRequest as CreateScanningStationRequest,
    type UpdateScanningStationRequest as UpdateScanningStationRequest,
    type ScanningStationDeleteResponse as ScanningStationDeleteResponse,
    type ScanningStationListParams as ScanningStationListParams,
    type ScanningStationRetrieveParams as ScanningStationRetrieveParams,
    type ScanningStationCreateParams as ScanningStationCreateParams,
    type ScanningStationUpdateParams as ScanningStationUpdateParams,
  };
}
