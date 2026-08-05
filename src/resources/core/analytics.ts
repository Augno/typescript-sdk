// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CoreAPI from './core';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Analyze sales, orders, manufacturing, materials, and other business metrics.
 */
export class Analytics extends APIResource {
  /**
   * Returns Overall Equipment Effectiveness (OEE) metrics by department.
   *
   * Availability is measured from logged machine downtime rather than inferred, so
   * it requires both `planned_time` for the department and downtime events in the
   * period. Departments with `has_downtime_data` false have no availability
   * measurement, and their ratios are returned as null rather than as 100%.
   *
   * This endpoint requires the permission: `machine_downtime:read`.
   *
   * @example
   * ```ts
   * const analyzeOeeResponse =
   *   await client.core.analytics.updateOee({
   *     ends_at: '2026-05-10T00:23:00Z',
   *     starts_at: '2026-05-10T00:00:00Z',
   *     department_ids: ['dp_m0jayebxnkos'],
   *   });
   * ```
   */
  updateOee(body: AnalyticsUpdateOeeParams, options?: RequestOptions): APIPromise<AnalyzeOeeResponse> {
    return this._client.put('/v1/core/analytics/oee', { body, ...options });
  }

  /**
   * Returns Overall Equipment Effectiveness (OEE) by production week.
   *
   * Each period carries the same four terms `/v1/core/analytics/oee` reports for a
   * single window, rolled up across departments and weighted by seconds rather than
   * averaged, so a department that ran for an hour does not weigh as heavily as one
   * that ran all week. Weeks start on Monday, and the first and last period of a
   * window are clipped to the window itself.
   *
   * Only departments with scheduled time take part: a department with no machines
   * has no availability, so counting its output in quality would leave the three
   * terms describing different plants. Compare two windows by calling this twice.
   *
   * This endpoint requires the permission: `machine_downtime:read`.
   *
   * @example
   * ```ts
   * const analyzeOeeTrendResponse =
   *   await client.core.analytics.updateOeeTrend({
   *     ends_at: '2026-05-10T00:23:00Z',
   *     starts_at: '2026-05-10T00:00:00Z',
   *     department_ids: ['dp_m0jayebxnkos'],
   *   });
   * ```
   */
  updateOeeTrend(
    body: AnalyticsUpdateOeeTrendParams,
    options?: RequestOptions,
  ): APIPromise<AnalyzeOeeTrendResponse> {
    return this._client.put('/v1/core/analytics/oee-trend', { body, ...options });
  }

  /**
   * Returns actual production measured against the plan that was live at the time.
   *
   * The baseline for each week is the schedule version published on or before that
   * week began, so republishing mid-horizon cannot rewrite a week the floor has
   * already worked. `baseline_schedules` names the versions used.
   *
   * Two ratios are returned because either alone misleads: `attainment_pct` caps
   * each campaign at what was asked for, so over-building one SKU cannot hide a miss
   * on another, while `output_ratio_pct` is uncapped and is what reveals
   * over-production. Production with no matching planned campaign is reported as
   * `unplanned_quantity` rather than discarded — that number is the clearest signal
   * a schedule is being worked around.
   *
   * Every ratio is null rather than zero when nothing was planned, and
   * `has_baseline` is false when nothing was ever published over the period.
   *
   * This endpoint requires the permission: `production_schedules:read`.
   *
   * @example
   * ```ts
   * const analyzeScheduleAttainmentResponse =
   *   await client.core.analytics.updateScheduleAttainment({
   *     ends_at: '2026-05-10T00:23:00Z',
   *     starts_at: '2026-05-10T00:00:00Z',
   *     group_by: 'week',
   *   });
   * ```
   */
  updateScheduleAttainment(
    body: AnalyticsUpdateScheduleAttainmentParams,
    options?: RequestOptions,
  ): APIPromise<AnalyzeScheduleAttainmentResponse> {
    return this._client.put('/v1/core/analytics/schedule-attainment', { body, ...options });
  }
}

/**
 * AnalyzeOeeRequest is the request to analyze Overall Equipment Effectiveness
 * (OEE).
 */
export interface AnalyzeOeeRequest {
  /**
   * The end date for the analysis period.
   */
  ends_at: string;

  /**
   * The start date for the analysis period.
   */
  starts_at: string;

  /**
   * Optional department IDs to filter by.
   */
  department_ids?: Array<string>;

  /**
   * Scheduled production time per department for the period. Availability,
   * performance and OEE are only returned for departments this covers.
   */
  planned_time?: Array<OeeDepartmentPlannedTime>;
}

/**
 * AnalyzeOeeResponse represents the response from the analyze OEE endpoint.
 */
export interface AnalyzeOeeResponse {
  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  departments: ListOeeDepartment | null;

  /**
   * Resource type identifier.
   */
  object: 'analyze_oee_response';
}

/**
 * AnalyzeOeeTrendRequest is the request to analyze Overall Equipment Effectiveness
 * (OEE) over time.
 */
export interface AnalyzeOeeTrendRequest {
  /**
   * The end date for the analysis period.
   */
  ends_at: string;

  /**
   * The start date for the analysis period.
   */
  starts_at: string;

  /**
   * Restrict the analysis to these departments.
   */
  department_ids?: Array<string>;
}

/**
 * AnalyzeOeeTrendResponse represents the response from the OEE trend endpoint.
 */
export interface AnalyzeOeeTrendResponse {
  /**
   * Resource type identifier.
   */
  object: 'analyze_oee_trend_response';

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  periods: ListOeeTrendPeriod | null;
}

/**
 * AnalyzeScheduleAttainmentRequest is the request to measure production against
 * plan.
 */
export interface AnalyzeScheduleAttainmentRequest {
  /**
   * The end date for the analysis period.
   */
  ends_at: string;

  /**
   * The start date for the analysis period.
   */
  starts_at: string;

  /**
   * Only measure production in these departments.
   */
  department_ids?: Array<string>;

  /**
   * The dimension to break the results down by. Defaults to `week`.
   */
  group_by?: 'week' | 'machine' | 'department' | 'item';

  /**
   * Only measure production on these machines.
   */
  machine_ids?: Array<string>;
}

/**
 * Actual production measured against the plan that was live at the time.
 *
 * The baseline for each week is the version that was published on or before that
 * week began, so republishing mid-horizon cannot rewrite a week the floor has
 * already worked. `baseline_schedules` names the versions used, so any number here
 * can be traced back to the plan that produced it.
 */
export interface AnalyzeScheduleAttainmentResponse {
  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  baseline_schedules: CoreAPI.ListEntity | null;

  /**
   * Whether the period had a plan to measure against. When `no_baseline`, every
   * ratio is null and the period has no plan rather than a missed one.
   */
  baseline_status: 'measured' | 'no_baseline';

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  buckets: ListAttainmentBucket | null;

  /**
   * End of the measured period.
   */
  ends_at: string;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  frozen_adherence: ListFrozenAdherence | null;

  /**
   * The dimension the breakdown is grouped by.
   */
  group_by: 'week' | 'machine' | 'department' | 'item';

  /**
   * Resource type identifier.
   */
  object: 'analyze_schedule_attainment_response';

  /**
   * Start of the measured period.
   */
  starts_at: string;

  /**
   * One row of a schedule-attainment breakdown.
   *
   * Both ratios are reported because either alone misleads. `attainment_pct` caps
   * each SKU at what was asked for, so over-building one easy item cannot paper over
   * a total miss on another; `output_ratio_pct` does not cap, so it is the only one
   * that reveals over-production.
   */
  totals: AttainmentBucket;
}

/**
 * One row of a schedule-attainment breakdown.
 *
 * Both ratios are reported because either alone misleads. `attainment_pct` caps
 * each SKU at what was asked for, so over-building one easy item cannot paper over
 * a total miss on another; `output_ratio_pct` does not cap, so it is the only one
 * that reveals over-production.
 */
export interface AttainmentBucket {
  /**
   * Units actually produced.
   */
  actual_quantity: number;

  /**
   * Share of the plan that was met. Null when nothing was planned.
   */
  attainment_pct: number | null;

  /**
   * Batches scanned in this bucket.
   */
  batch_count: number;

  /**
   * Identifies the bucket within the chosen grouping — a week start, machine ID,
   * department ID or item ID.
   */
  key: string;

  /**
   * Display label for the bucket.
   */
  label: string;

  /**
   * Units produced that were planned for, capped per campaign at what was asked.
   */
  matched_quantity: number;

  /**
   * Output as a share of plan, uncapped. Null when nothing was planned.
   */
  output_ratio_pct: number | null;

  /**
   * Planned campaigns in this bucket.
   */
  planned_lines: number;

  /**
   * Units the live plan called for.
   */
  planned_quantity: number;

  /**
   * Machine hours the plan called for.
   */
  planned_run_hours: number;

  /**
   * Units produced with no matching planned campaign.
   */
  unplanned_quantity: number;

  /**
   * Units scrapped.
   */
  waste_quantity: number;

  /**
   * First day of the week, when grouping by week.
   */
  week_starts_at: string | null;
}

/**
 * How well a published commitment survived the week it covered.
 */
export interface FrozenAdherence {
  /**
   * Total absolute unit change across frozen-week deviations.
   */
  abs_delta_units: number;

  /**
   * Campaigns added into the frozen window after publish.
   */
  added_lines: number;

  /**
   * Frozen campaigns that were changed after publish.
   */
  deviated_lines: number;

  /**
   * Campaigns frozen at publish.
   */
  frozen_line_count: number;

  /**
   * Units frozen at publish.
   */
  frozen_planned_quantity: number;

  /**
   * Last day of the frozen window.
   */
  frozen_through_at: string | null;

  /**
   * Share of frozen campaigns that survived untouched. Null when nothing was frozen.
   */
  line_adherence_pct: number | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  schedule: CoreAPI.Entity | null;

  /**
   * Share of frozen units that survived untouched. Null when nothing was frozen.
   */
  units_adherence_pct: number | null;

  /**
   * Version number of that schedule.
   */
  version: number;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListAttainmentBucket {
  /**
   * Resources in this page.
   */
  data: Array<AttainmentBucket>;

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
export interface ListFrozenAdherence {
  /**
   * Resources in this page.
   */
  data: Array<FrozenAdherence>;

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
export interface ListOeeDepartment {
  /**
   * Resources in this page.
   */
  data: Array<OeeDepartment>;

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
export interface ListOeeDowntimeReason {
  /**
   * Resources in this page.
   */
  data: Array<OeeDowntimeReason>;

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
export interface ListOeeTrendPeriod {
  /**
   * Resources in this page.
   */
  data: Array<OeeTrendPeriod>;

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
 * OeeDepartment represents OEE metrics for a single department.
 */
export interface OeeDepartment {
  /**
   * Data-quality warnings for this grouping. Empty when the numbers can be taken at
   * face value.
   */
  anomalies: Array<'performance_above_capacity'>;

  /**
   * Logged downtime charged against availability, in seconds.
   */
  availability_loss_seconds: number;

  /**
   * Run time divided by scheduled time.
   */
  availability_pct: number | null;

  /**
   * Time spent changing over between products, in seconds.
   */
  changeover_seconds: number;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  department: CoreAPI.Entity | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  downtime_breakdown: ListOeeDowntimeReason | null;

  /**
   * Number of downtime events logged in the period.
   */
  downtime_event_count: number;

  /**
   * The estimated runtime in hours.
   */
  estimated_runtime_hours: number;

  /**
   * The number of good units produced.
   */
  good_units: number;

  /**
   * Whether availability was measured from logged downtime or estimated from
   * runtime. A department with no logged downtime computes as perfectly available,
   * so an estimate is labelled rather than presented as a measurement.
   */
  measurement_status: 'measured' | 'estimated';

  /**
   * Time nobody planned to run, removed from the OEE denominator rather than counted
   * as a loss.
   */
  not_scheduled_seconds: number;

  /**
   * Availability multiplied by performance multiplied by quality.
   */
  oee_pct: number | null;

  /**
   * Logged downtime charged against performance, in seconds.
   */
  performance_loss_seconds: number;

  /**
   * Standard seconds earned divided by run time: how fast the department ran against
   * the designed speed of its production steps.
   */
  performance_pct: number | null;

  /**
   * Logged downtime charged against quality, in seconds.
   */
  quality_loss_seconds: number;

  /**
   * Good units divided by total units produced.
   */
  quality_pct: number | null;

  /**
   * Scheduled time net of availability losses, in seconds.
   */
  run_time_seconds: number;

  /**
   * Planned time net of not-scheduled downtime, in seconds.
   */
  scheduled_seconds: number;

  /**
   * The number of seconds units.
   */
  seconds_units: number;

  /**
   * The time this output should have taken at each production step's own labor rate:
   * ideal cycle time multiplied by the units produced. This is the numerator of
   * Performance.
   */
  standard_seconds_earned: number;

  /**
   * The number of waste units.
   */
  waste_units: number;
}

/**
 * OeeDepartmentPlannedTime supplies the scheduled production time for one
 * department.
 */
export interface OeeDepartmentPlannedTime {
  /**
   * The department ID.
   */
  department_id: string;

  /**
   * Scheduled production hours for the period.
   */
  planned_hours: number;
}

/**
 * OeeDowntimeReason represents one reason's contribution to a department's
 * downtime.
 */
export interface OeeDowntimeReason {
  /**
   * Downtime attributed to this reason, in seconds.
   */
  downtime_seconds: number;

  /**
   * Number of events logged against this reason.
   */
  event_count: number;

  /**
   * Which OEE term this reason charges.
   */
  oee_bucket: 'availability' | 'performance' | 'quality' | 'not_scheduled';

  /**
   * Why the machine stopped.
   */
  reason:
    | 'breakdown'
    | 'changeover'
    | 'material_shortage'
    | 'no_operator'
    | 'planned_maintenance'
    | 'minor_stop'
    | 'quality_hold'
    | 'no_schedule';
}

/**
 * OeeTrendPeriod represents one production week of OEE, rolled up across the
 * departments that had scheduled time in it. Departments with no scheduled time
 * have no OEE and take no part in the roll-up, so their output is not counted here
 * either.
 */
export interface OeeTrendPeriod {
  /**
   * Logged downtime charged against availability, in seconds.
   */
  availability_loss_seconds: number;

  /**
   * Run time divided by scheduled time.
   */
  availability_pct: number | null;

  /**
   * Number of downtime events overlapping this period.
   */
  downtime_event_count: number;

  /**
   * The instant this period ends, exclusive.
   */
  ends_at: string;

  /**
   * The number of good units produced.
   */
  good_units: number;

  /**
   * Whether availability was measured from logged downtime or estimated from
   * runtime.
   */
  measurement_status: 'measured' | 'estimated';

  /**
   * Time nobody planned to run, removed from the denominator rather than counted as
   * a loss.
   */
  not_scheduled_seconds: number;

  /**
   * Availability multiplied by performance multiplied by quality.
   */
  oee_pct: number | null;

  /**
   * Standard seconds earned divided by run time.
   */
  performance_pct: number | null;

  /**
   * Good units divided by total units produced.
   */
  quality_pct: number | null;

  /**
   * Scheduled time net of availability losses, in seconds.
   */
  run_time_seconds: number;

  /**
   * Planned time net of not-scheduled downtime, in seconds.
   */
  scheduled_seconds: number;

  /**
   * The number of seconds units.
   */
  seconds_units: number;

  /**
   * The time this output should have taken at each production step's own labor rate:
   * ideal cycle time multiplied by the units produced.
   */
  standard_seconds_earned: number;

  /**
   * The first instant this period covers. Weeks start on Monday; the first and last
   * periods of a window are clipped to the window itself.
   */
  starts_at: string;

  /**
   * The number of waste units.
   */
  waste_units: number;
}

export interface AnalyticsUpdateOeeParams {
  /**
   * The end date for the analysis period.
   */
  ends_at: string;

  /**
   * The start date for the analysis period.
   */
  starts_at: string;

  /**
   * Optional department IDs to filter by.
   */
  department_ids?: Array<string>;

  /**
   * Scheduled production time per department for the period. Availability,
   * performance and OEE are only returned for departments this covers.
   */
  planned_time?: Array<OeeDepartmentPlannedTime>;
}

export interface AnalyticsUpdateOeeTrendParams {
  /**
   * The end date for the analysis period.
   */
  ends_at: string;

  /**
   * The start date for the analysis period.
   */
  starts_at: string;

  /**
   * Restrict the analysis to these departments.
   */
  department_ids?: Array<string>;
}

export interface AnalyticsUpdateScheduleAttainmentParams {
  /**
   * The end date for the analysis period.
   */
  ends_at: string;

  /**
   * The start date for the analysis period.
   */
  starts_at: string;

  /**
   * Only measure production in these departments.
   */
  department_ids?: Array<string>;

  /**
   * The dimension to break the results down by. Defaults to `week`.
   */
  group_by?: 'week' | 'machine' | 'department' | 'item';

  /**
   * Only measure production on these machines.
   */
  machine_ids?: Array<string>;
}

export declare namespace Analytics {
  export {
    type AnalyzeOeeRequest as AnalyzeOeeRequest,
    type AnalyzeOeeResponse as AnalyzeOeeResponse,
    type AnalyzeOeeTrendRequest as AnalyzeOeeTrendRequest,
    type AnalyzeOeeTrendResponse as AnalyzeOeeTrendResponse,
    type AnalyzeScheduleAttainmentRequest as AnalyzeScheduleAttainmentRequest,
    type AnalyzeScheduleAttainmentResponse as AnalyzeScheduleAttainmentResponse,
    type AttainmentBucket as AttainmentBucket,
    type FrozenAdherence as FrozenAdherence,
    type ListAttainmentBucket as ListAttainmentBucket,
    type ListFrozenAdherence as ListFrozenAdherence,
    type ListOeeDepartment as ListOeeDepartment,
    type ListOeeDowntimeReason as ListOeeDowntimeReason,
    type ListOeeTrendPeriod as ListOeeTrendPeriod,
    type OeeDepartment as OeeDepartment,
    type OeeDepartmentPlannedTime as OeeDepartmentPlannedTime,
    type OeeDowntimeReason as OeeDowntimeReason,
    type OeeTrendPeriod as OeeTrendPeriod,
    type AnalyticsUpdateOeeParams as AnalyticsUpdateOeeParams,
    type AnalyticsUpdateOeeTrendParams as AnalyticsUpdateOeeTrendParams,
    type AnalyticsUpdateScheduleAttainmentParams as AnalyticsUpdateScheduleAttainmentParams,
  };
}
