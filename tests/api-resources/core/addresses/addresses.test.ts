// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openmrp from '@openmrp/sdk';

const client = new Openmrp({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource addresses', () => {
  test('retrieveSuggestions: only required params', async () => {
    const responsePromise = client.core.addresses.retrieveSuggestions({ input: 'input' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveSuggestions: required and optional params', async () => {
    const response = await client.core.addresses.retrieveSuggestions({
      input: 'input',
      session_token: 'session_token',
    });
  });
});
