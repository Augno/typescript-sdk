// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AugnoClient from 'augno';

const client = new AugnoClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource addresses', () => {
  // Mock server tests are disabled
  test.skip('autocomplete: only required params', async () => {
    const responsePromise = client.core.addresses.autocomplete({ input: 'input' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('autocomplete: required and optional params', async () => {
    const response = await client.core.addresses.autocomplete({
      input: 'input',
      'session_token,omitempty': 'session_token,omitempty',
    });
  });

  // Mock server tests are disabled
  test.skip('getDetails', async () => {
    const responsePromise = client.core.addresses.getDetails('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getDetails: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.core.addresses.getDetails(
        'id',
        { 'session_token,omitempty': 'session_token,omitempty' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AugnoClient.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('validate: only required params', async () => {
    const responsePromise = client.core.addresses.validate({
      address_line_1: '123 Main St',
      city: 'Springfield',
      country: 'US',
      postal_code: '62701',
      state: 'IL',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('validate: required and optional params', async () => {
    const response = await client.core.addresses.validate({
      address_line_1: '123 Main St',
      city: 'Springfield',
      country: 'US',
      postal_code: '62701',
      state: 'IL',
      address_line_2: 'address_line_2',
    });
  });
});
