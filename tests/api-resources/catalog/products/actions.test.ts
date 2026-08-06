// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('bulkUpsert: only required params', async () => {
    const responsePromise = client.catalog.products.actions.bulkUpsert({
      products: [
        {
          category: { id: 'ic_d06g9c6yc9ck', name: 'name' },
          properties: [{ name: 'name', value: 'value' }],
          sku: 'ALM-2024-1001',
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkUpsert: required and optional params', async () => {
    const response = await client.catalog.products.actions.bulkUpsert({
      products: [
        {
          category: { id: 'ic_d06g9c6yc9ck', name: 'name' },
          properties: [{ name: 'name', value: 'value' }],
          sku: 'ALM-2024-1001',
          description: 'description',
          notes: 'notes',
          portal_visibility: 'visible',
          product_line: { id: 'id', name: 'name' },
          type: 'sale',
          unit_cost: {
            denominator_unit_id: 'denominator_unit_id',
            numerator_unit_id: 'numerator_unit_id',
            value: 'value',
          },
          unit_price: {
            denominator_unit_id: 'denominator_unit_id',
            numerator_unit_id: 'numerator_unit_id',
            value: 'value',
          },
        },
      ],
    });
  });
});
