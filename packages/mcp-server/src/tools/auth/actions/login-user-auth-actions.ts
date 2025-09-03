// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'augno-mcp/filtering';
import { Metadata, asTextContentResult } from 'augno-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Augno from 'augno';

export const metadata: Metadata = {
  resource: 'auth.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/auth/actions/login',
  operationId: 'postV2_auth_actions_loginAuthentication',
};

export const tool: Tool = {
  name: 'login_user_auth_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLogin a user and get an access and refresh token.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/create_access_token_response',\n  $defs: {\n    create_access_token_response: {\n      type: 'object',\n      description: 'Response schema for CreateAccessTokenResponse',\n      properties: {\n        accessToken: {\n          type: 'string',\n          description: 'The new access token'\n        },\n        accountAffiliations: {\n          type: 'array',\n          description: 'The account affiliations',\n          items: {\n            type: 'object',\n            additionalProperties: true\n          }\n        },\n        currentAccount: {\n          type: 'object',\n          description: 'The current account in use',\n          additionalProperties: true\n        },\n        refreshToken: {\n          type: 'string',\n          description: 'A new refresh token'\n        },\n        user: {\n          type: 'object',\n          description: 'The user',\n          additionalProperties: true\n        }\n      },\n      required: [        'accessToken',\n        'accountAffiliations',\n        'currentAccount',\n        'refreshToken',\n        'user'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      password: {
        type: 'string',
      },
      username: {
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.auth.actions.loginUser(body)));
};

export default { metadata, tool, handler };
