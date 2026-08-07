// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CoreAPI from '../core/core';
import * as DemandOverridesAPI from './demand-overrides';
import {
  CreateDemandOverrideRequest,
  DemandOverride,
  DemandOverrideCreateParams,
  DemandOverrideDeleteResponse,
  DemandOverrideListParams,
  DemandOverrideRetrieveParams,
  DemandOverrideUpdateParams,
  DemandOverrides,
  ListDemandOverride,
  UpdateDemandOverrideRequest,
} from './demand-overrides';
import * as DepartmentsAPI from './departments';
import {
  CreateDepartmentRequest,
  DepartmentCreateParams,
  DepartmentDeleteResponse,
  DepartmentListParams,
  DepartmentRateInput,
  DepartmentRetrieveParams,
  DepartmentUpdateParams,
  Departments,
  ListDepartment,
  UpdateDepartmentRequest,
} from './departments';
import * as LocationTypesAPI from './location-types';
import { ListLocationType, LocationType, LocationTypeListParams, LocationTypes } from './location-types';
import * as MachineDowntimeEventsAPI from './machine-downtime-events';
import {
  CreateMachineDowntimeEventRequest,
  ListMachineDowntimeEvent,
  MachineDowntimeEvent,
  MachineDowntimeEventCreateParams,
  MachineDowntimeEventDeleteResponse,
  MachineDowntimeEventListParams,
  MachineDowntimeEventRetrieveParams,
  MachineDowntimeEventUpdateParams,
  MachineDowntimeEvents,
  UpdateMachineDowntimeEventRequest,
} from './machine-downtime-events';
import * as MachinesAPI from './machines';
import {
  CreateMachineRequest,
  MachineCreateParams,
  MachineDeleteResponse,
  MachineListParams,
  MachineRetrieveParams,
  MachineUpdateParams,
  Machines,
  UpdateMachineRequest,
} from './machines';
import * as ScanningStationsAPI from './scanning-stations';
import {
  CreateScanningStationRequest,
  ScanningStationCreateParams,
  ScanningStationDeleteResponse,
  ScanningStationListParams,
  ScanningStationRetrieveParams,
  ScanningStationUpdateParams,
  ScanningStations,
  UpdateScanningStationRequest,
} from './scanning-stations';
import * as ShippingTermsAPI from './shipping-terms';
import {
  CreateShippingTermRequest,
  ListShippingTerm,
  ShippingTermCreateParams,
  ShippingTermDeleteResponse,
  ShippingTermListParams,
  ShippingTermRetrieveParams,
  ShippingTermUpdateParams,
  ShippingTerms,
  UpdateShippingTermRequest,
} from './shipping-terms';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import * as CarriersAPI from './carriers/carriers';
import {
  CarrierCreateParams,
  CarrierDeleteResponse,
  CarrierListParams,
  CarrierRetrieveParams,
  CarrierUpdateParams,
  Carriers,
  CreateCarrierRequest,
  ListCarrier,
  UpdateCarrierRequest,
} from './carriers/carriers';
import * as FulfillmentRecommendationsAPI from './fulfillment-recommendations/fulfillment-recommendations';
import {
  FulfillmentRecommendation,
  FulfillmentRecommendations,
  ListFulfillmentRecommendation,
} from './fulfillment-recommendations/fulfillment-recommendations';
import * as LocationsAPI from './locations/locations';
import {
  CreateLocationRequest,
  LocationCreateParams,
  LocationDeleteResponse,
  LocationListParams,
  LocationRetrieveParams,
  LocationUpdateParams,
  Locations,
  UpdateLocationRequest,
} from './locations/locations';
import * as ProductionScheduleSettingsAPI from './production-schedule-settings/production-schedule-settings';
import {
  ProductionScheduleSettingUpdateParams,
  ProductionScheduleSettings,
  UpdateProductionScheduleSettingsRequest,
} from './production-schedule-settings/production-schedule-settings';
import * as ProductionSchedulesAPI from './production-schedules/production-schedules';
import {
  GenerateProductionScheduleRequest,
  ListProductionSchedule,
  ListProductionScheduleDerivedLine,
  ListProductionScheduleDeviation,
  ListProductionScheduleFinishedPolicy,
  ListProductionScheduleItemPolicy,
  ListReleaseScheduleBatch,
  ListReleasedScheduleLine,
  ListScheduleAppliedOverride,
  ListScheduleAtRiskOrder,
  ListScheduleOrderCoverage,
  ListScheduleOrderCoverageLine,
  ProductionSchedule,
  ProductionScheduleCreateParams,
  ProductionScheduleDeleteResponse,
  ProductionScheduleDerivedLine,
  ProductionScheduleDeviation,
  ProductionScheduleFinishedPolicy,
  ProductionScheduleItemPolicy,
  ProductionScheduleListParams,
  ProductionScheduleRetrieveDerivedLinesParams,
  ProductionScheduleRetrieveDeviationsParams,
  ProductionScheduleRetrieveWeekReleasePreviewParams,
  ProductionSchedules,
  ReleaseScheduleBatch,
  ReleaseScheduleWeekPreview,
  ReleasedScheduleLine,
  ScheduleAppliedOverride,
  ScheduleAtRiskOrder,
  ScheduleDiagnostics,
  ScheduleOrderCoverage,
  ScheduleOrderCoverageLine,
} from './production-schedules/production-schedules';
import * as ShipmentsAPI from './shipments/shipments';
import { Shipments } from './shipments/shipments';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Operations extends APIResource {
  shippingTerms: ShippingTermsAPI.ShippingTerms = new ShippingTermsAPI.ShippingTerms(this._client);
  carriers: CarriersAPI.Carriers = new CarriersAPI.Carriers(this._client);
  departments: DepartmentsAPI.Departments = new DepartmentsAPI.Departments(this._client);
  machines: MachinesAPI.Machines = new MachinesAPI.Machines(this._client);
  machineDowntimeEvents: MachineDowntimeEventsAPI.MachineDowntimeEvents =
    new MachineDowntimeEventsAPI.MachineDowntimeEvents(this._client);
  demandOverrides: DemandOverridesAPI.DemandOverrides = new DemandOverridesAPI.DemandOverrides(this._client);
  productionSchedules: ProductionSchedulesAPI.ProductionSchedules =
    new ProductionSchedulesAPI.ProductionSchedules(this._client);
  productionScheduleSettings: ProductionScheduleSettingsAPI.ProductionScheduleSettings =
    new ProductionScheduleSettingsAPI.ProductionScheduleSettings(this._client);
  fulfillmentRecommendations: FulfillmentRecommendationsAPI.FulfillmentRecommendations =
    new FulfillmentRecommendationsAPI.FulfillmentRecommendations(this._client);
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
  locationTypes: LocationTypesAPI.LocationTypes = new LocationTypesAPI.LocationTypes(this._client);
  shipments: ShipmentsAPI.Shipments = new ShipmentsAPI.Shipments(this._client);
  scanningStations: ScanningStationsAPI.ScanningStations = new ScanningStationsAPI.ScanningStations(
    this._client,
  );

  /**
   * Returns the downtime reasons available when logging a stoppage.
   *
   * The list is the same for every account and is ordered for display, so it can be
   * rendered straight into a reason picker. Each reason carries the OEE term its
   * stoppages charge, which is what makes the choice of reason matter beyond
   * labeling.
   *
   * This endpoint requires the permission: `machine_downtime:read`.
   *
   * @example
   * ```ts
   * const listMachineDowntimeReason =
   *   await client.operations.retrieveMachineDowntimeReasons();
   * ```
   */
  retrieveMachineDowntimeReasons(options?: RequestOptions): APIPromise<ListMachineDowntimeReason> {
    return this._client.get('/v1/operations/machine-downtime-reasons', options);
  }

  /**
   * Returns what every machine is running right now, how much is left on it, and
   * what is queued behind that.
   *
   * The whole floor comes back in one response rather than a page at a time, so a
   * wall display can render it in a single call.
   *
   * Assembled from the published schedule, the batches the floor has scanned against
   * each campaign, and any open downtime. A campaign is `current` once its week is
   * released and while it still has batches to scan; when the last one is scanned it
   * hands over to the next, so this advances on its own as a shift progresses.
   *
   * A machine with an open stoppage reads `down` even when it has a released
   * campaign, because a broken machine is not producing whatever the plan says. A
   * machine with nothing released reads `idle`, which is a state worth seeing rather
   * than an absence from the list.
   *
   * Reads the published version rather than the newest draft: the floor works to
   * what was committed, and a draft regenerating underneath a wall display would
   * make machines appear to change job on their own. With nothing published every
   * machine reads idle rather than the request failing.
   *
   * This endpoint requires the permission: `machines:read`.
   *
   * @example
   * ```ts
   * const listMachineStatus =
   *   await client.operations.retrieveMachineStatus();
   * ```
   */
  retrieveMachineStatus(
    query: OperationRetrieveMachineStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListMachineStatus> {
    return this._client.get('/v1/operations/machine-status', { query, ...options });
  }

  /**
   * Returns the demand override types, which describe how an override's value
   * adjusts the forecast.
   *
   * The taxonomy is platform-provided and identical for every account; each type's
   * `code` is a value accepted as an override's `adjustment`.
   *
   * This endpoint requires the permission: `demand_overrides:read`.
   *
   * @example
   * ```ts
   * const listDemandOverrideType =
   *   await client.operations.retrieveDemandOverrideTypes();
   * ```
   */
  retrieveDemandOverrideTypes(options?: RequestOptions): APIPromise<ListDemandOverrideType> {
    return this._client.get('/v1/operations/demand-override-types', options);
  }

  /**
   * Returns the kinds of hand change a schedule deviation can record.
   *
   * This endpoint requires the permission: `production_schedules:read`.
   *
   * @example
   * ```ts
   * const listScheduleDeviationType =
   *   await client.operations.retrieveScheduleDeviationTypes();
   * ```
   */
  retrieveScheduleDeviationTypes(options?: RequestOptions): APIPromise<ListScheduleDeviationType> {
    return this._client.get('/v1/operations/schedule-deviation-types', options);
  }
}

/**
 * A way of adjusting planned demand.
 *
 * `absolute` replaces the forecast for each month an override covers,
 * `delta_units` adds to it, and `delta_percent` scales it. When several overrides
 * land on the same month they are applied in that order.
 */
export interface DemandOverrideType {
  /**
   * Override type ID.
   */
  id: string;

  /**
   * The value to send as an override's `adjustment`.
   */
  code: 'absolute' | 'delta_units' | 'delta_percent';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name of the type.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'demand_override_type';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListDemandOverrideType {
  /**
   * Resources in this page.
   */
  data: Array<DemandOverrideType>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListMachineDowntimeReason {
  /**
   * Resources in this page.
   */
  data: Array<MachineDowntimeReason>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListMachineStatus {
  /**
   * Resources in this page.
   */
  data: Array<MachineStatus>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListScheduleDeviationType {
  /**
   * Resources in this page.
   */
  data: Array<ScheduleDeviationType>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * One campaign on a machine, with how far through it the floor is.
 *
 * A campaign is one item scheduled to run on one machine for one week. Progress is
 * taken from the batches the floor has scanned against it rather than reported by
 * hand, so it advances on its own as a shift runs.
 */
export interface MachineCampaign {
  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  item: CoreAPI.Entity | null;

  /**
   * Quantity the plan asked for.
   */
  planned_quantity: number;

  /**
   * Machine hours the plan allocates to the campaign.
   */
  planned_run_hours: number;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  production_run: CoreAPI.Entity | null;

  /**
   * Batches issued to the floor for this campaign.
   */
  released_batch_count: number;

  /**
   * Quantity still to make.
   *
   * Never negative: an over-run shows up in `scanned_quantity` rather than as
   * negative remaining work.
   */
  remaining_quantity: number;

  /**
   * Batches of this campaign the floor has scanned.
   */
  scanned_batch_count: number;

  /**
   * Quantity the floor has scanned so far.
   */
  scanned_quantity: number;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  schedule_line: CoreAPI.Entity | null;

  /**
   * SKU of the item.
   */
  sku: string;

  /**
   * Where the campaign is in its lifecycle.
   *
   * - `planned`: scheduled, but not yet released to the floor.
   * - `released`: issued to the floor as a production run, so batches can be scanned
   *   against it.
   * - `in_progress`: being run.
   * - `complete`: finished.
   * - `cancelled`: will not be run.
   */
  status: 'planned' | 'released' | 'in_progress' | 'complete' | 'cancelled';

  /**
   * Unit the quantities are counted in.
   */
  unit: string | null;

  /**
   * Zero-based week offset from the start of the horizon.
   */
  week_index: number;

  /**
   * First day of the week the campaign belongs to.
   */
  week_starts_at: string;
}

/**
 * A reason a machine stopped running.
 *
 * The `oee_bucket` decides which OEE term the stoppage charges: `availability`
 * losses reduce run time, `performance` losses are minor stops and speed loss,
 * `quality` losses cover rework and holds, and `not_scheduled` time is removed
 * from the OEE calculation entirely rather than counted against it.
 */
export interface MachineDowntimeReason {
  /**
   * Downtime reason ID.
   */
  id: string;

  /**
   * Stable code used when logging downtime.
   *
   * This is the value to send as `reason` when creating or updating a downtime
   * event.
   */
  code:
    | 'breakdown'
    | 'changeover'
    | 'material_shortage'
    | 'no_operator'
    | 'planned_maintenance'
    | 'minor_stop'
    | 'quality_hold'
    | 'no_schedule';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name of the reason.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'machine_downtime_reason';

  /**
   * Which OEE term this reason charges.
   */
  oee_bucket: 'availability' | 'performance' | 'quality' | 'not_scheduled';

  /**
   * Whether the stoppage was scheduled in advance, such as preventive maintenance.
   */
  planning_status: 'planned' | 'unplanned';

  /**
   * Display order, ascending.
   */
  sort_order: number;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * The reason for a stoppage, as carried on a downtime event.
 *
 * A denormalized view of the reason taxonomy: the stable code plus the display
 * name and OEE bucket resolved from it at read time.
 */
export interface MachineDowntimeReasonSummary {
  /**
   * Stable code identifying the reason.
   */
  code:
    | 'breakdown'
    | 'changeover'
    | 'material_shortage'
    | 'no_operator'
    | 'planned_maintenance'
    | 'minor_stop'
    | 'quality_hold'
    | 'no_schedule';

  /**
   * Display name of the reason.
   */
  name: string | null;

  /**
   * Resource type identifier.
   */
  object: 'machine_downtime_reason';

  /**
   * Which OEE term this reason charges.
   */
  oee_bucket: 'availability' | 'performance' | 'quality' | 'not_scheduled' | null;
}

/**
 * An open stoppage on a machine.
 */
export interface MachineDowntimeSummary {
  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  event: CoreAPI.Entity | null;

  /**
   * Free-text note left by whoever logged it.
   */
  note: string | null;

  /**
   * The reason for a stoppage, as carried on a downtime event.
   *
   * A denormalized view of the reason taxonomy: the stable code plus the display
   * name and OEE bucket resolved from it at read time.
   */
  reason: MachineDowntimeReasonSummary | null;

  /**
   * When the machine went down.
   */
  started_at: string;
}

/**
 * What one machine is doing right now.
 *
 * Assembled from the published schedule, the batches the floor has scanned against
 * it, and any open downtime. A machine with an open stoppage reads `down` even
 * when it has a released campaign, because a broken machine is not producing
 * whatever the plan says.
 */
export interface MachineStatus {
  /**
   * One campaign on a machine, with how far through it the floor is.
   *
   * A campaign is one item scheduled to run on one machine for one week. Progress is
   * taken from the batches the floor has scanned against it rather than reported by
   * hand, so it advances on its own as a shift runs.
   */
  current: MachineCampaign | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  department: CoreAPI.Entity | null;

  /**
   * An open stoppage on a machine.
   */
  downtime: MachineDowntimeSummary | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  machine: CoreAPI.Entity | null;

  /**
   * One campaign on a machine, with how far through it the floor is.
   *
   * A campaign is one item scheduled to run on one machine for one week. Progress is
   * taken from the batches the floor has scanned against it rather than reported by
   * hand, so it advances on its own as a shift runs.
   */
  next: MachineCampaign | null;

  /**
   * Resource type identifier.
   */
  object: 'machine_status';

  /**
   * What the machine is doing.
   *
   * - `running`: a released campaign with work still to scan.
   * - `idle`: nothing released to it.
   * - `down`: an open downtime event, which outranks running.
   */
  status: 'running' | 'idle' | 'down';

  /**
   * Unit the week's quantities are counted in.
   */
  unit: string | null;

  /**
   * Quantity planned on this machine for the current week.
   *
   * Summed across every campaign scheduled on the machine that week, not just the
   * current one.
   */
  week_planned_quantity: number;

  /**
   * Machine hours the plan allocates on this machine for the current week.
   */
  week_planned_run_hours: number;

  /**
   * Quantity scanned on this machine so far in the current week.
   */
  week_scanned_quantity: number;
}

/**
 * A kind of hand change to a plan.
 */
export interface ScheduleDeviationType {
  /**
   * Deviation type ID.
   */
  id: string;

  /**
   * Stable code recorded on a deviation.
   */
  code: 'line_added' | 'line_removed' | 'quantity_changed' | 'machine_changed' | 'resequenced' | 'week_moved';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name of the type.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'schedule_deviation_type';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export interface OperationRetrieveMachineStatusParams {
  /**
   * The moment to read the floor at.
   *
   * Chooses the week the campaigns are read for, and the published schedule whose
   * horizon covers that moment; open downtime and scan progress are always read as
   * they stand now. Omit it to read the floor as it is at this instant.
   */
  as_of?: string;

  /**
   * Only include machines in these departments.
   */
  department_ids?: Array<string>;
}

Operations.ShippingTerms = ShippingTerms;
Operations.Carriers = Carriers;
Operations.Departments = Departments;
Operations.Machines = Machines;
Operations.MachineDowntimeEvents = MachineDowntimeEvents;
Operations.DemandOverrides = DemandOverrides;
Operations.ProductionSchedules = ProductionSchedules;
Operations.FulfillmentRecommendations = FulfillmentRecommendations;
Operations.Locations = Locations;
Operations.LocationTypes = LocationTypes;
Operations.Shipments = Shipments;
Operations.ScanningStations = ScanningStations;

export declare namespace Operations {
  export {
    type DemandOverrideType as DemandOverrideType,
    type ListDemandOverrideType as ListDemandOverrideType,
    type ListMachineDowntimeReason as ListMachineDowntimeReason,
    type ListMachineStatus as ListMachineStatus,
    type ListScheduleDeviationType as ListScheduleDeviationType,
    type MachineCampaign as MachineCampaign,
    type MachineDowntimeReason as MachineDowntimeReason,
    type MachineDowntimeReasonSummary as MachineDowntimeReasonSummary,
    type MachineDowntimeSummary as MachineDowntimeSummary,
    type MachineStatus as MachineStatus,
    type ScheduleDeviationType as ScheduleDeviationType,
    type OperationRetrieveMachineStatusParams as OperationRetrieveMachineStatusParams,
  };

  export {
    ShippingTerms as ShippingTerms,
    type CreateShippingTermRequest as CreateShippingTermRequest,
    type ListShippingTerm as ListShippingTerm,
    type UpdateShippingTermRequest as UpdateShippingTermRequest,
    type ShippingTermDeleteResponse as ShippingTermDeleteResponse,
    type ShippingTermListParams as ShippingTermListParams,
    type ShippingTermRetrieveParams as ShippingTermRetrieveParams,
    type ShippingTermCreateParams as ShippingTermCreateParams,
    type ShippingTermUpdateParams as ShippingTermUpdateParams,
  };

  export {
    Carriers as Carriers,
    type CreateCarrierRequest as CreateCarrierRequest,
    type ListCarrier as ListCarrier,
    type UpdateCarrierRequest as UpdateCarrierRequest,
    type CarrierDeleteResponse as CarrierDeleteResponse,
    type CarrierListParams as CarrierListParams,
    type CarrierRetrieveParams as CarrierRetrieveParams,
    type CarrierCreateParams as CarrierCreateParams,
    type CarrierUpdateParams as CarrierUpdateParams,
  };

  export {
    Departments as Departments,
    type CreateDepartmentRequest as CreateDepartmentRequest,
    type DepartmentRateInput as DepartmentRateInput,
    type ListDepartment as ListDepartment,
    type UpdateDepartmentRequest as UpdateDepartmentRequest,
    type DepartmentDeleteResponse as DepartmentDeleteResponse,
    type DepartmentListParams as DepartmentListParams,
    type DepartmentRetrieveParams as DepartmentRetrieveParams,
    type DepartmentCreateParams as DepartmentCreateParams,
    type DepartmentUpdateParams as DepartmentUpdateParams,
  };

  export {
    Machines as Machines,
    type CreateMachineRequest as CreateMachineRequest,
    type UpdateMachineRequest as UpdateMachineRequest,
    type MachineDeleteResponse as MachineDeleteResponse,
    type MachineListParams as MachineListParams,
    type MachineRetrieveParams as MachineRetrieveParams,
    type MachineCreateParams as MachineCreateParams,
    type MachineUpdateParams as MachineUpdateParams,
  };

  export {
    MachineDowntimeEvents as MachineDowntimeEvents,
    type CreateMachineDowntimeEventRequest as CreateMachineDowntimeEventRequest,
    type ListMachineDowntimeEvent as ListMachineDowntimeEvent,
    type MachineDowntimeEvent as MachineDowntimeEvent,
    type UpdateMachineDowntimeEventRequest as UpdateMachineDowntimeEventRequest,
    type MachineDowntimeEventDeleteResponse as MachineDowntimeEventDeleteResponse,
    type MachineDowntimeEventListParams as MachineDowntimeEventListParams,
    type MachineDowntimeEventRetrieveParams as MachineDowntimeEventRetrieveParams,
    type MachineDowntimeEventCreateParams as MachineDowntimeEventCreateParams,
    type MachineDowntimeEventUpdateParams as MachineDowntimeEventUpdateParams,
  };

  export {
    DemandOverrides as DemandOverrides,
    type CreateDemandOverrideRequest as CreateDemandOverrideRequest,
    type DemandOverride as DemandOverride,
    type ListDemandOverride as ListDemandOverride,
    type UpdateDemandOverrideRequest as UpdateDemandOverrideRequest,
    type DemandOverrideDeleteResponse as DemandOverrideDeleteResponse,
    type DemandOverrideListParams as DemandOverrideListParams,
    type DemandOverrideRetrieveParams as DemandOverrideRetrieveParams,
    type DemandOverrideCreateParams as DemandOverrideCreateParams,
    type DemandOverrideUpdateParams as DemandOverrideUpdateParams,
  };

  export {
    ProductionSchedules as ProductionSchedules,
    type GenerateProductionScheduleRequest as GenerateProductionScheduleRequest,
    type ListProductionSchedule as ListProductionSchedule,
    type ListProductionScheduleDerivedLine as ListProductionScheduleDerivedLine,
    type ListProductionScheduleDeviation as ListProductionScheduleDeviation,
    type ListProductionScheduleFinishedPolicy as ListProductionScheduleFinishedPolicy,
    type ListProductionScheduleItemPolicy as ListProductionScheduleItemPolicy,
    type ListReleaseScheduleBatch as ListReleaseScheduleBatch,
    type ListReleasedScheduleLine as ListReleasedScheduleLine,
    type ListScheduleAppliedOverride as ListScheduleAppliedOverride,
    type ListScheduleAtRiskOrder as ListScheduleAtRiskOrder,
    type ListScheduleOrderCoverage as ListScheduleOrderCoverage,
    type ListScheduleOrderCoverageLine as ListScheduleOrderCoverageLine,
    type ProductionSchedule as ProductionSchedule,
    type ProductionScheduleDerivedLine as ProductionScheduleDerivedLine,
    type ProductionScheduleDeviation as ProductionScheduleDeviation,
    type ProductionScheduleFinishedPolicy as ProductionScheduleFinishedPolicy,
    type ProductionScheduleItemPolicy as ProductionScheduleItemPolicy,
    type ReleaseScheduleBatch as ReleaseScheduleBatch,
    type ReleaseScheduleWeekPreview as ReleaseScheduleWeekPreview,
    type ReleasedScheduleLine as ReleasedScheduleLine,
    type ScheduleAppliedOverride as ScheduleAppliedOverride,
    type ScheduleAtRiskOrder as ScheduleAtRiskOrder,
    type ScheduleDiagnostics as ScheduleDiagnostics,
    type ScheduleOrderCoverage as ScheduleOrderCoverage,
    type ScheduleOrderCoverageLine as ScheduleOrderCoverageLine,
    type ProductionScheduleDeleteResponse as ProductionScheduleDeleteResponse,
    type ProductionScheduleListParams as ProductionScheduleListParams,
    type ProductionScheduleCreateParams as ProductionScheduleCreateParams,
    type ProductionScheduleRetrieveDerivedLinesParams as ProductionScheduleRetrieveDerivedLinesParams,
    type ProductionScheduleRetrieveDeviationsParams as ProductionScheduleRetrieveDeviationsParams,
    type ProductionScheduleRetrieveWeekReleasePreviewParams as ProductionScheduleRetrieveWeekReleasePreviewParams,
  };

  export {
    type ProductionScheduleSettings as ProductionScheduleSettings,
    type UpdateProductionScheduleSettingsRequest as UpdateProductionScheduleSettingsRequest,
    type ProductionScheduleSettingUpdateParams as ProductionScheduleSettingUpdateParams,
  };

  export {
    FulfillmentRecommendations as FulfillmentRecommendations,
    type FulfillmentRecommendation as FulfillmentRecommendation,
    type ListFulfillmentRecommendation as ListFulfillmentRecommendation,
  };

  export {
    Locations as Locations,
    type CreateLocationRequest as CreateLocationRequest,
    type UpdateLocationRequest as UpdateLocationRequest,
    type LocationDeleteResponse as LocationDeleteResponse,
    type LocationListParams as LocationListParams,
    type LocationRetrieveParams as LocationRetrieveParams,
    type LocationCreateParams as LocationCreateParams,
    type LocationUpdateParams as LocationUpdateParams,
  };

  export {
    LocationTypes as LocationTypes,
    type ListLocationType as ListLocationType,
    type LocationType as LocationType,
    type LocationTypeListParams as LocationTypeListParams,
  };

  export { Shipments as Shipments };

  export {
    ScanningStations as ScanningStations,
    type CreateScanningStationRequest as CreateScanningStationRequest,
    type UpdateScanningStationRequest as UpdateScanningStationRequest,
    type ScanningStationDeleteResponse as ScanningStationDeleteResponse,
    type ScanningStationListParams as ScanningStationListParams,
    type ScanningStationRetrieveParams as ScanningStationRetrieveParams,
    type ScanningStationCreateParams as ScanningStationCreateParams,
    type ScanningStationUpdateParams as ScanningStationUpdateParams,
  };
}
