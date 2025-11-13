// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'augno-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'augno-mcp/tools/types';

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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRevoke a refresh token.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/empty_resource',\n  $defs: {\n    empty_resource: {\n      type: 'object',\n      description: 'Request schema for EmptyResource',\n      properties: {}\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Augno, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.auth.revokeRefreshToken()));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
