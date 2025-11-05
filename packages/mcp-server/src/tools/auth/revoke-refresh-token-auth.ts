// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'augno-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Augno from 'augno';

export const metadata: Metadata = {
  resource: 'auth',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/auth/refresh-tokens',
  operationId: 'deleteV2_auth_refresh-TokensAuthentication',
};

export const tool: Tool = {
  name: 'revoke_refresh_token_auth',
  description: 'Revoke a refresh token.',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Augno, args: Record<string, unknown> | undefined) => {
  return asTextContentResult((await client.auth.revokeRefreshToken()) as object);
};

export default { metadata, tool, handler };
