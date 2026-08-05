// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augno from '@augno/sdk';

const client = new Augno({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource analytics', () => {
  test('updateOee: only required params', async () => {
    const responsePromise = client.core.analytics.updateOee({
      ends_at: '2026-05-10T00:23:00Z',
      starts_at: '2026-05-10T00:00:00Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateOee: required and optional params', async () => {
    const response = await client.core.analytics.updateOee({
      ends_at: '2026-05-10T00:23:00Z',
      starts_at: '2026-05-10T00:00:00Z',
      department_ids: ['dp_m0jayebxnkos'],
      planned_time: [{ department_id: 'department_id', planned_hours: 0 }],
    });
  });

  test('updateOeeTrend: only required params', async () => {
    const responsePromise = client.core.analytics.updateOeeTrend({
      ends_at: '2026-05-10T00:23:00Z',
      starts_at: '2026-05-10T00:00:00Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateOeeTrend: required and optional params', async () => {
    const response = await client.core.analytics.updateOeeTrend({
      ends_at: '2026-05-10T00:23:00Z',
      starts_at: '2026-05-10T00:00:00Z',
      department_ids: ['dp_m0jayebxnkos'],
    });
  });

  test('updateScheduleAttainment: only required params', async () => {
    const responsePromise = client.core.analytics.updateScheduleAttainment({
      ends_at: '2026-05-10T00:23:00Z',
      starts_at: '2026-05-10T00:00:00Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateScheduleAttainment: required and optional params', async () => {
    const response = await client.core.analytics.updateScheduleAttainment({
      ends_at: '2026-05-10T00:23:00Z',
      starts_at: '2026-05-10T00:00:00Z',
      department_ids: ['string'],
      group_by: 'week',
      machine_ids: ['string'],
    });
  });
});
