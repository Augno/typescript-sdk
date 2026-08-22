// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenMRP from '@openmrp/sdk';

const client = new OpenMRP({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('emailRecord: only required params', async () => {
    const responsePromise = client.core.actions.emailRecord({ id: 'iv_m982ezb0fgp7', type: 'invoice' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('emailRecord: required and optional params', async () => {
    const response = await client.core.actions.emailRecord({ id: 'iv_m982ezb0fgp7', type: 'invoice' });
  });
});
