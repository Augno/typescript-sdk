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
import * as LocationTypesAPI from './location-types';
import { ListLocationType, LocationType, LocationTypeListParams, LocationTypes } from './location-types';
import * as LocationsAPI from './locations';
import {
  CreateLocationRequest,
  LocationCreateParams,
  LocationDeleteResponse,
  LocationListParams,
  LocationRetrieveParams,
  LocationUpdateParams,
  Locations,
  UpdateLocationRequest,
} from './locations';
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
  ScheduleDiagnostics,
} from './production-schedules/production-schedules';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Operations extends APIResource {
  shippingTerms: ShippingTermsAPI.ShippingTerms = new ShippingTermsAPI.ShippingTerms(this._client);
  carriers: CarriersAPI.Carriers = new CarriersAPI.Carriers(this._client);
  machineDowntimeEvents: MachineDowntimeEventsAPI.MachineDowntimeEvents =
    new MachineDowntimeEventsAPI.MachineDowntimeEvents(this._client);
  demandOverrides: DemandOverridesAPI.DemandOverrides = new DemandOverridesAPI.DemandOverrides(this._client);
  productionSchedules: ProductionSchedulesAPI.ProductionSchedules =
    new ProductionSchedulesAPI.ProductionSchedules(this._client);
  productionScheduleSettings: ProductionScheduleSettingsAPI.ProductionScheduleSettings =
    new ProductionScheduleSettingsAPI.ProductionScheduleSettings(this._client);
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
  locationTypes: LocationTypesAPI.LocationTypes = new LocationTypesAPI.LocationTypes(this._client);
  scanningStations: ScanningStationsAPI.ScanningStations = new ScanningStationsAPI.ScanningStations(
    this._client,
  );

  /**
   * Returns the downtime reasons available when logging a stoppage.
   *
   * The list is the same for every account and is ordered for display.
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
 * `absolute` replaces the forecast for the period, `delta_units` adds to it, and
 * `delta_percent` scales it. When several overrides land on the same month they
 * are applied in that order.
 */
export interface DemandOverrideType {
  /**
   * Override type ID.
   */
  id: string;

  /**
   * Stable code used when creating an override.
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
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * One campaign on a machine, with how far through it the floor is.
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
   * Constraint hours the campaign consumes.
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
   * Planned for this machine this week.
   */
  week_planned_quantity: number;

  /**
   * Constraint hours planned on this machine this week.
   */
  week_planned_run_hours: number;

  /**
   * Scanned on this machine this week.
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
   * The moment to read the floor at. Defaults to now.
   */
  as_of?: string;

  /**
   * Only include machines in these departments.
   */
  department_ids?: Array<string>;
}

Operations.ShippingTerms = ShippingTerms;
Operations.Carriers = Carriers;
Operations.MachineDowntimeEvents = MachineDowntimeEvents;
Operations.DemandOverrides = DemandOverrides;
Operations.ProductionSchedules = ProductionSchedules;
Operations.Locations = Locations;
Operations.LocationTypes = LocationTypes;
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
    type ProductionSchedule as ProductionSchedule,
    type ProductionScheduleDerivedLine as ProductionScheduleDerivedLine,
    type ProductionScheduleDeviation as ProductionScheduleDeviation,
    type ProductionScheduleFinishedPolicy as ProductionScheduleFinishedPolicy,
    type ProductionScheduleItemPolicy as ProductionScheduleItemPolicy,
    type ReleaseScheduleBatch as ReleaseScheduleBatch,
    type ReleaseScheduleWeekPreview as ReleaseScheduleWeekPreview,
    type ReleasedScheduleLine as ReleasedScheduleLine,
    type ScheduleAppliedOverride as ScheduleAppliedOverride,
    type ScheduleDiagnostics as ScheduleDiagnostics,
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
