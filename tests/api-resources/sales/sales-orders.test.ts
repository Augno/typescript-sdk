// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource salesOrders', () => {
  test('retrieveStatuses', async () => {
    const responsePromise = client.sales.salesOrders.retrieveStatuses();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveStatuses: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sales.salesOrders.retrieveStatuses(
        {
          cursor: 'cursor',
          include: ['owner'],
          limit: 0,
          q: 'q',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.sales.salesOrders.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sales.salesOrders.list(
        {
          cursor: 'cursor',
          customer_group_ids: ['string'],
          customer_ids: ['string'],
          end_date: 'end_date',
          include: ['customer'],
          item_ids: ['string'],
          limit: 0,
          product_line_ids: ['string'],
          q: 'q',
          sales_rep_ids: ['string'],
          start_date: 'start_date',
          status_codes: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augno.NotFoundError);
  });

  test('create: only required params', async () => {
    const responsePromise = client.sales.salesOrders.create({
      bill_to_address_id: 'ad_012c2e4aeeb20f56c1a3d06cc7',
      buyer_account_id: 'ac_0170df1ac58e4d24c66fc89f5f',
      lines: [
        {
          product_id: 'pd_013c29ab3f1518d0004094c316',
          quantity: { unit_id: 'un_01966263f74a5a0cae356000a1', value: '10' },
        },
      ],
      priority_code: 'normal',
      ship_to_address_id: 'ad_012c2e4aeeb20f56c1a3d06cc7',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.sales.salesOrders.create({
      bill_to_address_id: 'ad_012c2e4aeeb20f56c1a3d06cc7',
      buyer_account_id: 'ac_0170df1ac58e4d24c66fc89f5f',
      lines: [
        {
          product_id: 'pd_013c29ab3f1518d0004094c316',
          quantity: { unit_id: 'un_01966263f74a5a0cae356000a1', value: '10' },
          product_description: 'product_description',
          product_sku: 'product_sku',
          unit_price: {
            denominator_unit_id: 'denominator_unit_id',
            numerator_unit_id: 'numerator_unit_id',
            value: 'value',
          },
        },
      ],
      priority_code: 'normal',
      ship_to_address_id: 'ad_012c2e4aeeb20f56c1a3d06cc7',
      include: ['customer'],
      acknowledgement_email_contacts: [{ account_user_id: 'account_user_id' }],
      carrier_billing_account_number: 'carrier_billing_account_number',
      carrier_billing_type: 'sender',
      carrier_id: 'cr_01784fd54c9ba197bb4e42f0e6',
      customer_purchase_order_number: 'customer_purchase_order_number',
      invoice_email_contacts: [{ account_user_id: 'account_user_id' }],
      note: 'Rush order for trade show',
      order_discount_id: 'order_discount_id',
      payment_term_id: 'payment_term_id',
      promised_at: '2019-12-27T18:11:19.117Z',
      sales_rep_id: 'sales_rep_id',
      service_level_id: 'crop_01cfaf03f104e90ef9680e2a30',
      shipping_term_id: 'shipping_term_id',
    });
  });
});
