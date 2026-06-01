// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CustomersAPI from '../sales/customers/customers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage scanning stations.
 */
export class ScanningStations extends APIResource {
  /**
   * Creates a scanning station associated with a department.
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
   *   });
   * ```
   */
  create(
    params: ScanningStationCreateParams,
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.ScanningStation> {
    const { include, ...body } = params;
    return this._client.post('/v1/operations/scanning-stations', { query: { include }, body, ...options });
  }

  /**
   * Returns a scanning station by ID.
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
  ): APIPromise<CustomersAPI.ScanningStation> {
    return this._client.get(path`/v1/operations/scanning-stations/${id}`, { query, ...options });
  }

  /**
   * Partially updates a scanning station.
   *
   * @example
   * ```ts
   * const scanningStation =
   *   await client.operations.scanningStations.update(
   *     'scst_0129335dd6286056a97024fcc1',
   *     { name: 'Station B' },
   *   );
   * ```
   */
  update(
    id: string,
    params: ScanningStationUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.ScanningStation> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/scanning-stations/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of scanning stations for the current account.
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
  ): APIPromise<CustomersAPI.ListScanningStation> {
    return this._client.get('/v1/operations/scanning-stations', { query, ...options });
  }

  /**
   * Deletes a scanning station.
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
   * Department ID.
   */
  department_id: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Operator requirement behavior for this station.
   */
  operator_requirement: 'none' | 'material_check';

  /**
   * Scanning station type.
   */
  type: 'init_batch' | 'merge_batch' | 'move_batch' | 'split_batch';

  /**
   * Label size code.
   */
  label_size?: '1x1' | '1x3' | '1x4' | '2x4';

  /**
   * Label type code.
   */
  label_type?: 'tag' | 'traveler';

  /**
   * Notes.
   */
  notes?: string;
}

/**
 * Request to partially update a scanning station.
 */
export interface UpdateScanningStationRequest {
  /**
   * Label size code.
   */
  label_size?: '1x1' | '1x3' | '1x4' | '2x4';

  /**
   * Label type code.
   */
  label_type?: 'tag' | 'traveler';

  /**
   * Display name.
   */
  name?: string;

  /**
   * Notes.
   */
  notes?: string | null;

  /**
   * Operator requirement behavior for this station.
   */
  operator_requirement?: 'none' | 'material_check';
}

export interface ScanningStationDeleteResponse {}

export interface ScanningStationCreateParams {
  /**
   * Body param: Department ID.
   */
  department_id: string;

  /**
   * Body param: Display name.
   */
  name: string;

  /**
   * Body param: Operator requirement behavior for this station.
   */
  operator_requirement: 'none' | 'material_check';

  /**
   * Body param: Scanning station type.
   */
  type: 'init_batch' | 'merge_batch' | 'move_batch' | 'split_batch';

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'department' | 'production_steps'>;

  /**
   * Body param: Label size code.
   */
  label_size?: '1x1' | '1x3' | '1x4' | '2x4';

  /**
   * Body param: Label type code.
   */
  label_type?: 'tag' | 'traveler';

  /**
   * Body param: Notes.
   */
  notes?: string;
}

export interface ScanningStationRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'department' | 'production_steps'>;
}

export interface ScanningStationUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'department' | 'production_steps'>;

  /**
   * Body param: Label size code.
   */
  label_size?: '1x1' | '1x3' | '1x4' | '2x4';

  /**
   * Body param: Label type code.
   */
  label_type?: 'tag' | 'traveler';

  /**
   * Body param: Display name.
   */
  name?: string;

  /**
   * Body param: Notes.
   */
  notes?: string | null;

  /**
   * Body param: Operator requirement behavior for this station.
   */
  operator_requirement?: 'none' | 'material_check';
}

export interface ScanningStationListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'department' | 'production_steps'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export declare namespace ScanningStations {
  export {
    type CreateScanningStationRequest as CreateScanningStationRequest,
    type UpdateScanningStationRequest as UpdateScanningStationRequest,
    type ScanningStationDeleteResponse as ScanningStationDeleteResponse,
    type ScanningStationCreateParams as ScanningStationCreateParams,
    type ScanningStationRetrieveParams as ScanningStationRetrieveParams,
    type ScanningStationUpdateParams as ScanningStationUpdateParams,
    type ScanningStationListParams as ScanningStationListParams,
  };
}
