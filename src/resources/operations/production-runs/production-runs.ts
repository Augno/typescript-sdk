// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BatchesAPI from './batches';
import { Batches } from './batches';

export class ProductionRuns extends APIResource {
  batches: BatchesAPI.Batches = new BatchesAPI.Batches(this._client);
}

ProductionRuns.Batches = Batches;

export declare namespace ProductionRuns {
  export { Batches as Batches };
}
