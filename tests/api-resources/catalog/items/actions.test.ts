// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openmrp from '@openmrp/sdk';

const client = new Openmrp({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('bulkReconcile: only required params', async () => {
    const responsePromise = client.catalog.items.actions.bulkReconcile({
      data: [
        {
          quantity: '10.5',
          sku: 'ALM-2024-1001',
          unit: 'kg',
        },
      ],
      reconcile_type: 'addition',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkReconcile: required and optional params', async () => {
    const response = await client.catalog.items.actions.bulkReconcile({
      data: [
        {
          quantity: '10.5',
          sku: 'ALM-2024-1001',
          unit: 'kg',
        },
      ],
      reconcile_type: 'addition',
    });
  });
});
