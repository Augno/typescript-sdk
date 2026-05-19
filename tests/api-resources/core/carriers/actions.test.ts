// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AugnoClient from 'augno';

const client = new AugnoClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  // Mock server tests are disabled
  test.skip('initiateOAuth: only required params', async () => {
    const responsePromise = client.core.carriers.actions.initiateOAuth('id', {
      redirect_uri: 'https://app.example.com/carriers/oauth/callback',
      state: null,
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
  test.skip('initiateOAuth: required and optional params', async () => {
    const response = await client.core.carriers.actions.initiateOAuth('id', {
      redirect_uri: 'https://app.example.com/carriers/oauth/callback',
      state: null,
    });
  });

  // Mock server tests are disabled
  test.skip('syncOptions', async () => {
    const responsePromise = client.core.carriers.actions.syncOptions('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
