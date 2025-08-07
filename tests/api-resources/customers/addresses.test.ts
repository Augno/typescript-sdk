// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from 'augno';

const client = new Augno({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource addresses', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.customers.addresses.create('customer_id', {
      address_line_1: '123 Main St',
      city: 'West Lafayette',
      country: 'USA',
      name: 'John Doe',
      postal_code: '47906',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.customers.addresses.create('customer_id', {
      address_line_1: '123 Main St',
      city: 'West Lafayette',
      country: 'USA',
      name: 'John Doe',
      postal_code: '47906',
      address_line_2: 'Apt 1',
      email: 'john.doe@example.com',
      include: ['full'],
      is_drop_ship: false,
      phone: '+15551234567',
      state: 'IN',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.customers.addresses.retrieve('address_id', { customer_id: 'customer_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.customers.addresses.retrieve('address_id', { customer_id: 'customer_id' });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.customers.addresses.update('address_id', { customer_id: 'customer_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.customers.addresses.update('address_id', {
      customer_id: 'customer_id',
      address_line_1: '123 Main St',
      address_line_2: 'Apt 1',
      city: 'West Lafayette',
      country: 'USA',
      email: 'john.doe@example.com',
      include: ['full'],
      is_drop_ship: false,
      name: 'John Doe',
      phone: '+15551234567',
      postal_code: '47906',
      state: 'IN',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.customers.addresses.list('customer_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.customers.addresses.delete('address_id', { customer_id: 'customer_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await client.customers.addresses.delete('address_id', { customer_id: 'customer_id' });
  });
});
