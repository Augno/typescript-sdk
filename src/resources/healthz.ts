// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Healthz extends APIResource {
  /**
   * Returns the current health status, environment, and version.
   *
   * @example
   * ```ts
   * const response = await client.healthz.check();
   * ```
   */
  check(options?: RequestOptions): APIPromise<HealthzCheckResponse> {
    return this._client.get('/healthz', options);
  }
}

/**
 * Represents a Healthcheck resource
 */
export interface HealthzCheckResponse {
  /**
   * Deployment environment (development, production)
   */
  environment: string;

  /**
   * Current operational status of the API service
   */
  status: string;

  /**
   * Application version number
   */
  version?: string;
}

export declare namespace Healthz {
  export { type HealthzCheckResponse as HealthzCheckResponse };
}
