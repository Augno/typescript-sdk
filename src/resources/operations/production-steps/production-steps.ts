// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as DepartmentsAPI from '../departments';
import * as MachinesAPI from '../machines';
import * as OperationsAPI from '../operations';
import * as ScanningStationsAPI from '../scanning-stations';
import * as ActionsAPI from './actions';
import { Actions } from './actions';
import * as ConsumptionsAPI from './consumptions';
import { Consumption, Consumptions as ConsumptionsAPIConsumptions } from './consumptions';
import * as ProductionsAPI from './productions';
import { ProductionOutput, Productions } from './productions';

export class ProductionSteps extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  consumptions: ConsumptionsAPI.Consumptions = new ConsumptionsAPI.Consumptions(this._client);
  productions: ProductionsAPI.Productions = new ProductionsAPI.Productions(this._client);
}

/**
 * List represents a paginated list of resources.
 */
export interface ListProductionStep {
  /**
   * Resources in this page.
   */
  data: Array<ProductionStep>;

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
 * Production step with all nested data.
 */
export interface ProductionStep {
  /**
   * Production step ID.
   */
  id: string;

  /**
   * Allowances as a decimal string.
   */
  allowances: string;

  /**
   * List represents a paginated list of resources.
   */
  consumptions: ProductionStep.Consumptions | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Department resource.
   */
  department: DepartmentsAPI.Department | null;

  /**
   * List represents a paginated list of resources.
   */
  in_steps: ListProductionStep | null;

  /**
   * Rate resource.
   */
  labor_rate: OperationsAPI.Rate | null;

  /**
   * Rate resource.
   */
  labor_time: OperationsAPI.Rate | null;

  /**
   * Leveling factor as a decimal string.
   */
  leveling_factor: string;

  /**
   * List represents a paginated list of resources.
   */
  machines: MachinesAPI.ListMachine | null;

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
  object: 'production_step';

  /**
   * List represents a paginated list of resources.
   */
  out_steps: ListProductionStep | null;

  /**
   * Rate resource.
   */
  overhead_rate: OperationsAPI.Rate | null;

  /**
   * Production output of a production step.
   */
  production: ProductionsAPI.ProductionOutput | null;

  /**
   * Scanning station resource.
   */
  scanning_station: ScanningStationsAPI.ScanningStation | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export namespace ProductionStep {
  /**
   * List represents a paginated list of resources.
   */
  export interface Consumptions {
    /**
     * Resources in this page.
     */
    data: Array<ConsumptionsAPI.Consumption>;

    /**
     * Resource type identifier.
     */
    object: 'list';

    /**
     * PageInfo contains URL-based pagination metadata.
     */
    page_info: AgentsAPI.PageInfo;
  }
}

ProductionSteps.Actions = Actions;
ProductionSteps.Consumptions = ConsumptionsAPIConsumptions;
ProductionSteps.Productions = Productions;

export declare namespace ProductionSteps {
  export { type ListProductionStep as ListProductionStep, type ProductionStep as ProductionStep };

  export { Actions as Actions };

  export { ConsumptionsAPIConsumptions as Consumptions, type Consumption as Consumption };

  export { Productions as Productions, type ProductionOutput as ProductionOutput };
}
