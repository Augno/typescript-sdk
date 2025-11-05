// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'augno-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Augno from 'augno';

export const metadata: Metadata = {
  resource: 'auth',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/auth/access-tokens',
  operationId: 'postV2_auth_access-TokensAuthentication',
};

export const tool: Tool = {
  name: 'refresh_token_auth',
  description: 'Refresh an access token using a refresh token.',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Augno, args: Record<string, unknown> | undefined) => {
  return asTextContentResult((await client.auth.refreshToken()) as object);
};

export default { metadata, tool, handler };
