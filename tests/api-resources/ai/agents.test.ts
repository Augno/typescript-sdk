// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AugnoClient from 'augno';

const client = new AugnoClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource agents', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.ai.agents.create({
      category_code: 'inventory',
      config: {
        model: 'claude-sonnet-4',
        provider: 'anthropic',
        system_prompt: 'You are an order processing agent. Parse incoming emails and create draft orders.',
        temperature: 0.2,
        trigger_config: {
          cron_schedule: null,
          event_filters: ['email.received'],
          timezone: null,
        },
      },
      description: 'Monitors inventory levels and creates restock alerts.',
      name: 'Inventory Monitor',
      role_id: 'rl_01gf7a8200er3ar3pkfrb6kk29',
      slug: 'inventory_monitor',
      tools: [
        {
          config_json: 'config_json',
          require_review: true,
          sort_order: 1,
          tool_id: 'tdef_01k0b1seed0searchproduct0',
        },
      ],
      trigger_type: 'event',
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
    const response = await client.ai.agents.create({
      category_code: 'inventory',
      config: {
        model: 'claude-sonnet-4',
        provider: 'anthropic',
        system_prompt: 'You are an order processing agent. Parse incoming emails and create draft orders.',
        temperature: 0.2,
        trigger_config: {
          cron_schedule: null,
          event_filters: ['email.received'],
          timezone: null,
        },
      },
      description: 'Monitors inventory levels and creates restock alerts.',
      name: 'Inventory Monitor',
      role_id: 'rl_01gf7a8200er3ar3pkfrb6kk29',
      slug: 'inventory_monitor',
      tools: [
        {
          config_json: 'config_json',
          require_review: true,
          sort_order: 1,
          tool_id: 'tdef_01k0b1seed0searchproduct0',
        },
      ],
      trigger_type: 'event',
      include: ['config'],
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.ai.agents.retrieve('id');
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
      client.ai.agents.retrieve('id', { include: ['config'] }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(AugnoClient.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.ai.agents.update('id', {
      category_code: 'inventory',
      config: {
        model: 'claude-sonnet-4',
        provider: 'anthropic',
        system_prompt: 'You are an order processing agent. Parse incoming emails and create draft orders.',
        temperature: 0.2,
        trigger_config: {
          cron_schedule: null,
          event_filters: ['email.received'],
          timezone: null,
        },
      },
      description: 'Monitors inventory levels and creates restock alerts.',
      name: 'Inventory Monitor',
      role_id: 'rl_01gf7a8200er3ar3pkfrb6kk29',
      slug: 'inventory_monitor',
      tools: [
        {
          config_json: 'config_json',
          require_review: true,
          sort_order: 1,
          tool_id: 'tdef_01k0b1seed0searchproduct0',
        },
      ],
      trigger_type: 'event',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.ai.agents.update('id', {
      category_code: 'inventory',
      config: {
        model: 'claude-sonnet-4',
        provider: 'anthropic',
        system_prompt: 'You are an order processing agent. Parse incoming emails and create draft orders.',
        temperature: 0.2,
        trigger_config: {
          cron_schedule: null,
          event_filters: ['email.received'],
          timezone: null,
        },
      },
      description: 'Monitors inventory levels and creates restock alerts.',
      name: 'Inventory Monitor',
      role_id: 'rl_01gf7a8200er3ar3pkfrb6kk29',
      slug: 'inventory_monitor',
      tools: [
        {
          config_json: 'config_json',
          require_review: true,
          sort_order: 1,
          tool_id: 'tdef_01k0b1seed0searchproduct0',
        },
      ],
      trigger_type: 'event',
      include: ['config'],
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.ai.agents.list();
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
      client.ai.agents.list(
        {
          definition_type: ['string'],
          include: ['config'],
          status: ['active'],
          trigger_type: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AugnoClient.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.ai.agents.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateStatus: only required params', async () => {
    const responsePromise = client.ai.agents.updateStatus('id', { status_code: 'active' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateStatus: required and optional params', async () => {
    const response = await client.ai.agents.updateStatus('id', {
      status_code: 'active',
      include: ['config'],
    });
  });
});
