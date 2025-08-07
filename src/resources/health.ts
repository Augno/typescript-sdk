// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Health extends APIResource {
  /**
   * Returns the current health status, environment, and version information of the
   * API service.
   *
   * @example
   * ```ts
   * const response = await client.health.check();
   * ```
   */
  check(options?: RequestOptions): APIPromise<HealthCheckResponse> {
    return this._client.get('/health', options);
  }
}

/**
 * Represents a Healthcheck resource
 */
export interface HealthCheckResponse {
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

export declare namespace Health {
  export { type HealthCheckResponse as HealthCheckResponse };
}
