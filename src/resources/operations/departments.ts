// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LocationsAPI from './locations';
import * as MachinesAPI from './machines';
import * as ScanningStationsAPI from './scanning-stations';

export class Departments extends APIResource {}

/**
 * Department resource.
 */
export interface Department {
  /**
   * Department ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Location resource.
   */
  location: LocationsAPI.Location | null;

  /**
   * List represents a paginated list of resources.
   */
  machines: MachinesAPI.ListMachine | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Notes about the department.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'department';

  /**
   * List represents a paginated list of resources.
   */
  scanning_stations: ScanningStationsAPI.ListScanningStation | null;

  /**
   * Last update timestamp.
   */
  updated_at: string;
}

export declare namespace Departments {
  export { type Department as Department };
}
