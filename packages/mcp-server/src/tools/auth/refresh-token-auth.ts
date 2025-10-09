// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'augno-mcp/filtering';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRefresh an access token using a refresh token.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/auth_refresh_token_response',\n  $defs: {\n    auth_refresh_token_response: {\n      type: 'object',\n      description: 'Response schema for CreateAccessTokenResponse',\n      properties: {\n        access_token: {\n          type: 'string',\n          description: 'The new access token'\n        },\n        refresh_token: {\n          $ref: '#/$defs/refresh_token'\n        }\n      },\n      required: [        'access_token',\n        'refresh_token'\n      ]\n    },\n    refresh_token: {\n      type: 'object',\n      description: 'Represents a RefreshToken resource',\n      properties: {\n        token: {\n          type: 'string',\n          description: 'The refresh token'\n        },\n        expires_at: {\n          type: 'string',\n          description: 'The refresh token expires at'\n        }\n      },\n      required: [        'token',\n        'expires_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      RefreshToken: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Augno, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.auth.refreshToken(body)));
};

export default { metadata, tool, handler };
