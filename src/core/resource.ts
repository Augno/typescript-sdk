// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { AugnoClient } from '../client';

export abstract class APIResource {
  protected _client: AugnoClient;

  constructor(client: AugnoClient) {
    this._client = client;
  }
}
