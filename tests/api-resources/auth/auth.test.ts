// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from 'augno';

const client = new Augno({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource auth', () => {
  // Some required params are not supported yet.
  test.skip('refreshToken', async () => {
    const responsePromise = client.auth.refreshToken();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('registerUser: only required params', async () => {
    const responsePromise = client.auth.registerUser({
      email: 'jdoe@augno.com',
      name: 'John Doe',
      password: 'super-secret-password',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('registerUser: required and optional params', async () => {
    const response = await client.auth.registerUser({
      email: 'jdoe@augno.com',
      name: 'John Doe',
      password: 'super-secret-password',
    });
  });

  // Some required params are not supported yet.
  test.skip('revokeRefreshToken', async () => {
    const responsePromise = client.auth.revokeRefreshToken();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
