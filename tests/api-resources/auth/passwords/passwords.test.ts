// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from 'augno';

const client = new Augno({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource passwords', () => {
  // Prism tests are disabled
  test.skip('updatePassword: only required params', async () => {
    const responsePromise = client.auth.passwords.updatePassword({
      new_password: 'new-super-secret-password',
      old_password: 'super-secret-password',
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
  test.skip('updatePassword: required and optional params', async () => {
    const response = await client.auth.passwords.updatePassword({
      new_password: 'new-super-secret-password',
      old_password: 'super-secret-password',
    });
  });
});
