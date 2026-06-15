// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProductLinesAPI from './product-lines';
import { ProductLines } from './product-lines';

export class Catalog extends APIResource {
  productLines: ProductLinesAPI.ProductLines = new ProductLinesAPI.ProductLines(this._client);
}

Catalog.ProductLines = ProductLines;

export declare namespace Catalog {
  export { ProductLines as ProductLines };
}
