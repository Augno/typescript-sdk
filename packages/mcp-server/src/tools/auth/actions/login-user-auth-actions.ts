// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'augno-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'augno-mcp/tools/types';

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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLogin a user and get an access and refresh token.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_login_user_response',\n  $defs: {\n    action_login_user_response: {\n      type: 'object',\n      description: 'Response schema for User',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the user'\n        },\n        created_at: {\n          type: 'string',\n          description: 'The created at timestamp of the user',\n          format: 'date-time'\n        },\n        email: {\n          type: 'string',\n          description: 'The email of the user'\n        },\n        email_verified: {\n          type: 'string',\n          description: 'The email verified status of the user',\n          format: 'date-time'\n        },\n        image_url: {\n          type: 'string',\n          description: 'The image URL of the user'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the user'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'The updated at timestamp of the user',\n          format: 'date-time'\n        },\n        username: {\n          type: 'string',\n          description: 'The username of the user'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'email',\n        'email_verified',\n        'image_url',\n        'name',\n        'updated_at',\n        'username'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      identifier: {
        type: 'string',
        description: 'The username or email of the user',
      },
      password: {
        type: 'string',
        description: 'The password of the user',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['identifier', 'password'],
  },
  annotations: {},
};

export const handler = async (client: Augno, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.auth.actions.loginUser(body)));
  } catch (error) {
    if (error instanceof Augno.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
