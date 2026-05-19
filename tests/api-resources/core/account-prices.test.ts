// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AugnoClient from 'augno';

const client = new AugnoClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accountPrices', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.core.accountPrices.create({
      attribute_ids: ['at_01jm4r6700f8nwq3v5hx2d9ktp'],
      category_ids: ['ic_01jm4r6700f8nwq3v5hx2d9ktp'],
      product_line_id: 'pl_01jm4r6700f8nwq3v5hx2d9ktp',
      rate_denominator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
      rate_numerator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
      rate_value: '25.500000000000000000000000000000',
      recipient_account_id: 'ac_01gf7a8200eaj8fke1xvw4h50x',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.core.accountPrices.create({
      attribute_ids: ['at_01jm4r6700f8nwq3v5hx2d9ktp'],
      category_ids: ['ic_01jm4r6700f8nwq3v5hx2d9ktp'],
      product_line_id: 'pl_01jm4r6700f8nwq3v5hx2d9ktp',
      rate_denominator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
      rate_numerator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
      rate_value: '25.500000000000000000000000000000',
      recipient_account_id: 'ac_01gf7a8200eaj8fke1xvw4h50x',
      include: ['recipient_account'],
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.core.accountPrices.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.core.accountPrices.retrieve(
        'id',
        { include: ['recipient_account'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AugnoClient.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.core.accountPrices.update('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.core.accountPrices.update(
        'id',
        {
          include: ['recipient_account'],
          attribute_ids: ['string'],
          category_ids: ['string'],
          product_line_id: 'product_line_id',
          rate_denominator_unit_id: 'rate_denominator_unit_id',
          rate_numerator_unit_id: 'rate_numerator_unit_id',
          rate_value: '30.000000000000000000000000000000',
          recipient_account_id: 'recipient_account_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AugnoClient.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.core.accountPrices.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.core.accountPrices.list(
        { recipient_account_id: 'recipient_account_id' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AugnoClient.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.core.accountPrices.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
