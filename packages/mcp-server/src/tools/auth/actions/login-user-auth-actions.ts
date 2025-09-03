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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLogin a user and get an access and refresh token.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Response schema for LoginResponse',\n  properties: {\n    access_token: {\n      type: 'string',\n      description: 'The access token for the user'\n    },\n    account_affiliations: {\n      type: 'array',\n      description: 'The account affiliations',\n      items: {\n        type: 'object',\n        description: 'Represents a AccountAffiliation resource',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'The ID of the account affiliation'\n          },\n          name: {\n            type: 'string',\n            description: 'The name of the account affiliation'\n          },\n          role: {\n            type: 'object',\n            description: 'Represents a AccountAffiliationRole resource',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'The ID of the role'\n              },\n              name: {\n                type: 'string',\n                description: 'The name of the role'\n              }\n            },\n            required: [              'id',\n              'name'\n            ]\n          }\n        },\n        required: [          'id',\n          'name',\n          'role'\n        ]\n      }\n    },\n    current_account: {\n      type: 'object',\n      description: 'The current account in use',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the current account'\n        }\n      },\n      required: [        'id'\n      ]\n    },\n    refresh_token: {\n      $ref: '#/$defs/refresh_token'\n    },\n    user: {\n      type: 'object',\n      description: 'The user that was logged in',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the user'\n        },\n        created_at: {\n          type: 'string',\n          description: 'The created at timestamp of the user'\n        },\n        email: {\n          type: 'string',\n          description: 'The email of the user'\n        },\n        email_verified: {\n          type: 'string',\n          description: 'The email verified status of the user'\n        },\n        image_url: {\n          type: 'string',\n          description: 'The image URL of the user'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the user'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'The updated at timestamp of the user'\n        },\n        username: {\n          type: 'string',\n          description: 'The username of the user'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'email',\n        'email_verified',\n        'image_url',\n        'name',\n        'updated_at',\n        'username'\n      ]\n    }\n  },\n  required: [    'access_token',\n    'account_affiliations',\n    'current_account',\n    'refresh_token',\n    'user'\n  ],\n  $defs: {\n    refresh_token: {\n      type: 'object',\n      description: 'Represents a RefreshToken resource',\n      properties: {\n        token: {\n          type: 'string',\n          description: 'The refresh token'\n        },\n        expires_at: {\n          type: 'string',\n          description: 'The refresh token expires at'\n        }\n      },\n      required: [        'token',\n        'expires_at'\n      ]\n    }\n  }\n}\n```",
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
