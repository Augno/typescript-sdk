// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ItemsAPI from '../../catalog/items/items';
import * as BatchesAPI from '../batches/batches';

export class Productions extends APIResource {}

/**
 * Production output of a production step.
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
  quantity: BatchesAPI.Quantity | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export declare namespace Productions {
  export { type ProductionOutput as ProductionOutput };
}
