// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import * as ItemsAPI from '../catalog/items/items';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Block and unblock users from direct messaging.
 */
export class Blocks extends APIResource {
  /**
   * Blocks an account user (prevents DMs in both directions).
   *
   * This endpoint requires the permission: `messaging:create`.
   *
   * @example
   * ```ts
   * const messagingBlock = await client.messaging.blocks.create(
   *   {
   *     blocked_account_user_id:
   *       'acus_01ea9983ddb41dacc44ecf997c',
   *   },
   * );
   * ```
   */
  create(params: BlockCreateParams, options?: RequestOptions): APIPromise<MessagingBlock> {
    const { include, ...body } = params;
    return this._client.post('/v1/messaging/blocks', { query: { include }, body, ...options });
  }

  /**
   * Removes a block.
   *
   * This endpoint requires the permission: `messaging:delete`.
   *
   * @example
   * ```ts
   * const block = await client.messaging.blocks.delete(
   *   'example',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<BlockDeleteResponse> {
    return this._client.delete(path`/v1/messaging/blocks/${id}`, options);
  }

  /**
   * Lists the caller's messaging blocks.
   *
   * This endpoint requires the permission: `messaging:read`.
   *
   * @example
   * ```ts
   * const listMessagingBlock =
   *   await client.messaging.blocks.list();
   * ```
   */
  list(
    query: BlockListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListMessagingBlock> {
    return this._client.get('/v1/messaging/blocks', { query, ...options });
  }
}

/**
 * A user's membership in an account, carrying the account-specific status, role,
 * and department.
 *
 * Profile fields (name, email, username, image URL) live on the expandable `user`
 * sub-resource, which is shared across every account the user belongs to.
 */
export interface AccountUser {
  /**
   * Account user ID.
   */
  id: string;

  /**
   * When the account user was created.
   */
  created_at: string;

  /**
   * A functional area of a production operation, such as fabrication or packaging,
   * that groups scanning stations and machines.
   */
  department: Department | null;

  /**
   * When the user last accessed this account.
   */
  last_used_at: string | null;

  /**
   * Resource type identifier.
   */
  object: 'account_user';

  /**
   * A named set of permissions that can be assigned to users to control what they
   * can access.
   */
  role: APIKeysAPI.Role | null;

  /**
   * Account user status.
   *
   * - `active`: the user can access the account.
   * - `disabled`: the user is locked out of the account.
   * - `removed`: the user has been removed (soft-deleted) from the account.
   */
  status: 'active' | 'disabled' | 'removed';

  /**
   * When the account user was last updated.
   */
  updated_at: string;

  /**
   * A user's global profile, shared across every account they belong to.
   *
   * Account-specific settings (status, role, department) live on the account user
   * resource that links the user to each account.
   */
  user: User | null;
}

/**
 * Request to block another account user from messaging the caller.
 */
export interface BlockRequest {
  /**
   * The account user to block.
   */
  blocked_account_user_id: string;
}

/**
 * Material consumed by a production step.
 *
 * Each consumption records one input item and how much of it the step uses.
 * Consumptions also determine the production flow: when another step produces the
 * consumed item, the two steps are linked upstream/downstream automatically.
 */
export interface Consumption {
  /**
   * Consumption ID.
   */
  id: string;

  /**
   * Item is an inventory item (product, material, or part).
   */
  consumed_item: ItemsAPI.Item | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Instructions for how this material is consumed.
   */
  instructions: string | null;

  /**
   * Resource type identifier.
   */
  object: 'consumption';

  /**
   * Value with an associated unit.
   */
  quantity: ItemsAPI.Quantity | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Value with an associated unit.
   */
  waste_quantity: ItemsAPI.Quantity | null;
}

/**
 * A functional area of a production operation, such as fabrication or packaging,
 * that groups scanning stations and machines.
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
   * A physical storage location, such as a warehouse, aisle, or bin, arranged in a
   * parent-child hierarchy.
   */
  location: Location | null;

  /**
   * List represents a paginated list of resources.
   */
  machines: ListMachine | null;

  /**
   * Display name of the department.
   *
   * Unique within the account.
   */
  name: string;

  /**
   * Free-form notes about the department.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'department';

  /**
   * List represents a paginated list of resources.
   */
  scanning_stations: ListScanningStation | null;

  /**
   * Last update timestamp.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListConsumption {
  /**
   * Resources in this page.
   */
  data: Array<Consumption>;

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
export interface ListLocation {
  /**
   * Resources in this page.
   */
  data: Array<Location>;

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
export interface ListMachine {
  /**
   * Resources in this page.
   */
  data: Array<Machine>;

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
export interface ListMessagingBlock {
  /**
   * Resources in this page.
   */
  data: Array<MessagingBlock>;

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
  page_info: APIKeysAPI.PageInfo;
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
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A physical storage location, such as a warehouse, aisle, or bin, arranged in a
 * parent-child hierarchy.
 */
export interface Location {
  /**
   * Location ID.
   */
  id: string;

  /**
   * List represents a paginated list of resources.
   */
  children: ListLocation | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name of the location.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'location';

  /**
   * A physical storage location, such as a warehouse, aisle, or bin, arranged in a
   * parent-child hierarchy.
   */
  parent: Location | null;

  /**
   * Location type code, identifying this location's level in the storage hierarchy.
   *
   * - `building`: a building-level location.
   * - `section`: a section within a building.
   * - `aisle`: an aisle within a section.
   * - `rack`: a rack within an aisle.
   * - `shelf`: a shelf within a rack.
   * - `bin`: a bin within a shelf.
   */
  type: LocationTypeCode;

  /**
   * Last-updated timestamp.
   */
  updated_at: string;
}

export type LocationTypeCode = 'building' | 'section' | 'aisle' | 'rack' | 'shelf' | 'bin';

/**
 * A piece of production equipment, such as a CNC router or press, assigned to a
 * department.
 */
export interface Machine {
  /**
   * Machine ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * A functional area of a production operation, such as fabrication or packaging,
   * that groups scanning stations and machines.
   */
  department: Department | null;

  /**
   * Display name of the machine.
   *
   * Unique within the account.
   */
  name: string;

  /**
   * Free-form notes about the machine.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'machine';

  /**
   * Serial number of the machine.
   */
  serial_number: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A 1:1 messaging block: the caller has blocked another account user from
 * messaging them.
 */
export interface MessagingBlock {
  /**
   * Block ID.
   */
  id: string;

  /**
   * A user's membership in an account, carrying the account-specific status, role,
   * and department.
   *
   * Profile fields (name, email, username, image URL) live on the expandable `user`
   * sub-resource, which is shared across every account the user belongs to.
   */
  blocked_user: AccountUser | null;

  /**
   * When the block was created.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'messaging_block';
}

/**
 * The output of a production step: the item it produces and the quantity produced.
 */
export interface ProductionOutput {
  /**
   * Production ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'production';

  /**
   * Item is an inventory item (product, material, or part).
   */
  produced_item: ItemsAPI.Item | null;

  /**
   * Value with an associated unit.
   */
  quantity: ItemsAPI.Quantity | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A single stage of work in an item's production flow, with its output, material
 * inputs, cost rates, and graph connections.
 */
export interface ProductionStep {
  /**
   * Production step ID.
   */
  id: string;

  /**
   * Allowance correction factor applied to labor time in cost calculations, as a
   * decimal string.
   *
   * Effective labor time per unit is
   * `labor_time × (1 + leveling_factor) × (1 + allowances)`.
   */
  allowances: string;

  /**
   * List represents a paginated list of resources.
   */
  consumptions: ListConsumption | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * A functional area of a production operation, such as fabrication or packaging,
   * that groups scanning stations and machines.
   */
  department: Department | null;

  /**
   * List represents a paginated list of resources.
   */
  in_steps: ListProductionStep | null;

  /**
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  labor_rate: ItemsAPI.Rate | null;

  /**
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  labor_time: ItemsAPI.Rate | null;

  /**
   * Leveling correction factor applied to labor time in cost calculations, as a
   * decimal string.
   *
   * Effective labor time per unit is
   * `labor_time × (1 + leveling_factor) × (1 + allowances)`.
   */
  leveling_factor: string;

  /**
   * List represents a paginated list of resources.
   */
  machines: ListMachine | null;

  /**
   * Display name of the step.
   */
  name: string;

  /**
   * Free-form notes about the step.
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
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  overhead_rate: ItemsAPI.Rate | null;

  /**
   * The output of a production step: the item it produces and the quantity produced.
   */
  production: ProductionOutput | null;

  /**
   * A station on the production floor where operators scan batches to perform a
   * batch operation, such as initializing or moving a batch.
   */
  scanning_station: ScanningStation | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A station on the production floor where operators scan batches to perform a
 * batch operation, such as initializing or moving a batch.
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
   * A functional area of a production operation, such as fabrication or packaging,
   * that groups scanning stations and machines.
   */
  department: Department | null;

  /**
   * Size of the labels printed at this station, given as width-by-height (for
   * example, `1x1`).
   */
  label_size: '1x1' | '1x3' | '1x4' | '2x4' | null;

  /**
   * Type of label printed at this station.
   *
   * - `tag`: a label attached to the physical product.
   * - `traveler`: a routing sheet that accompanies the batch through every
   *   production step.
   */
  label_type: 'tag' | 'traveler' | null;

  /**
   * Display name of the scanning station.
   *
   * Unique within the account.
   */
  name: string;

  /**
   * Free-form notes about the scanning station.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'scanning_station';

  /**
   * Whether operators must perform a material check at this station.
   *
   * - `none`: no additional operator check is required.
   * - `material_check`: a material check is expected before the operation.
   */
  operator_requirement: 'none' | 'material_check';

  /**
   * List represents a paginated list of resources.
   */
  production_steps: ListProductionStep | null;

  /**
   * Scanning station type, determining which batch operation the station performs.
   *
   * - `init_batch`: initializes a new batch.
   * - `merge_batch`: merges multiple batches into one.
   * - `move_batch`: moves a batch to another location or step.
   * - `split_batch`: splits a batch into multiple batches.
   */
  type: 'init_batch' | 'merge_batch' | 'move_batch' | 'split_batch';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A user's global profile, shared across every account they belong to.
 *
 * Account-specific settings (status, role, department) live on the account user
 * resource that links the user to each account.
 */
export interface User {
  /**
   * User ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Email address.
   */
  email: string | null;

  /**
   * When the user verified their email address.
   */
  email_verified_at: string | null;

  /**
   * URL of the user's profile image.
   */
  image_url: string | null;

  /**
   * User's full display name.
   */
  name: string | null;

  /**
   * Resource type identifier.
   */
  object: 'user';

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Username.
   */
  username: string | null;
}

export interface BlockDeleteResponse {}

export interface BlockCreateParams {
  /**
   * Body param: The account user to block.
   */
  blocked_account_user_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'blocked_user' | 'blocked_user.user' | 'blocked_user.role' | 'blocked_user.department'>;
}

export interface BlockListParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'blocked_user' | 'blocked_user.user' | 'blocked_user.role' | 'blocked_user.department'>;
}

export declare namespace Blocks {
  export {
    type AccountUser as AccountUser,
    type BlockRequest as BlockRequest,
    type Consumption as Consumption,
    type Department as Department,
    type ListConsumption as ListConsumption,
    type ListLocation as ListLocation,
    type ListMachine as ListMachine,
    type ListMessagingBlock as ListMessagingBlock,
    type ListProductionStep as ListProductionStep,
    type ListScanningStation as ListScanningStation,
    type Location as Location,
    type LocationTypeCode as LocationTypeCode,
    type Machine as Machine,
    type MessagingBlock as MessagingBlock,
    type ProductionOutput as ProductionOutput,
    type ProductionStep as ProductionStep,
    type ScanningStation as ScanningStation,
    type User as User,
    type BlockDeleteResponse as BlockDeleteResponse,
    type BlockCreateParams as BlockCreateParams,
    type BlockListParams as BlockListParams,
  };
}
