// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import * as DepartmentsAPI from './departments';
import * as ProductionStepsAPI from './production-steps/production-steps';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage scanning stations.
 */
export class ScanningStations extends APIResource {
  /**
   * Returns a scanning station by ID.
   *
   * @example
   * ```ts
   * const scanningStation =
   *   await client.operations.scanningStations.retrieve(
   *     'scst_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: ScanningStationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScanningStation> {
    return this._client.get(path`/v1/operations/scanning-stations/${id}`, { query, ...options });
  }

  /**
   * Partially updates a scanning station.
   *
   * @example
   * ```ts
   * const scanningStation =
   *   await client.operations.scanningStations.update(
   *     'scst_01jm4r6700f8nwq3v5hx2d9ktp',
   *     { name: 'Station B' },
   *   );
   * ```
   */
  update(
    id: string,
    params: ScanningStationUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScanningStation> {
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
   * @example
   * ```ts
   * const scanningStation =
   *   await client.operations.scanningStations.delete(
   *     'scst_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ScanningStationDeleteResponse> {
    return this._client.delete(path`/v1/operations/scanning-stations/${id}`, options);
  }

  /**
   * Returns a paginated list of scanning stations for the current account.
   *
   * @example
   * ```ts
   * const listScanningStation =
   *   await client.operations.scanningStations.retrieveScanningStations();
   * ```
   */
  retrieveScanningStations(
    query: ScanningStationRetrieveScanningStationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListScanningStation> {
    return this._client.get('/v1/operations/scanning-stations', { query, ...options });
  }

  /**
   * Creates a scanning station associated with a department.
   *
   * @example
   * ```ts
   * const scanningStation =
   *   await client.operations.scanningStations.scanningStations(
   *     {
   *       department_id: 'dp_01gf7a8200er3ar3pkfrb6kk30',
   *       name: 'Packaging Line 1',
   *       operator_requirement: 'none',
   *       type: 'init_batch',
   *       label_size: '1x1',
   *       label_type: 'tag',
   *     },
   *   );
   * ```
   */
  scanningStations(
    params: ScanningStationScanningStationsParams,
    options?: RequestOptions,
  ): APIPromise<ScanningStation> {
    const { include, ...body } = params;
    return this._client.post('/v1/operations/scanning-stations', { query: { include }, body, ...options });
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ListScanningStation {
  /**
   * Resources in this page.
   */
  data: Array<ScanningStation>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

/**
 * Scanning station resource.
 */
export interface ScanningStation {
  /**
   * Scanning station ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Department resource.
   */
  department: DepartmentsAPI.Department | null;

  /**
   * Label size code.
   */
  label_size: '1x1' | '1x3' | '1x4' | '2x4' | null;

  /**
   * Label type code.
   */
  label_type: 'tag' | 'traveler' | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Notes.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'scanning_station';

  /**
   * Operator requirement behavior for this station.
   */
  operator_requirement: 'none' | 'material_check';

  /**
   * List represents a paginated list of resources.
   */
  production_steps: ProductionStepsAPI.ListProductionStep | null;

  /**
   * Scanning station type.
   */
  type: 'init_batch' | 'merge_batch' | 'move_batch' | 'split_batch';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export interface ScanningStationDeleteResponse {}

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

export interface ScanningStationRetrieveScanningStationsParams {
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

export interface ScanningStationScanningStationsParams {
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

export declare namespace ScanningStations {
  export {
    type ListScanningStation as ListScanningStation,
    type ScanningStation as ScanningStation,
    type ScanningStationDeleteResponse as ScanningStationDeleteResponse,
    type ScanningStationRetrieveParams as ScanningStationRetrieveParams,
    type ScanningStationUpdateParams as ScanningStationUpdateParams,
    type ScanningStationRetrieveScanningStationsParams as ScanningStationRetrieveScanningStationsParams,
    type ScanningStationScanningStationsParams as ScanningStationScanningStationsParams,
  };
}
