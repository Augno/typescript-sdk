// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'augno-mcp/filtering';
import { Metadata, asTextContentResult } from 'augno-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Augno from 'augno';

export const metadata: Metadata = {
  resource: 'healthz',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/healthz',
  operationId: 'getHealthzHealth',
};

export const tool: Tool = {
  name: 'check_healthz',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the current health status, environment, and version.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Represents a Healthcheck resource',\n  properties: {\n    environment: {\n      type: 'string',\n      description: 'Deployment environment (development, production)'\n    },\n    status: {\n      type: 'string',\n      description: 'Current operational status of the API service'\n    },\n    version: {\n      type: 'string',\n      description: 'Application version number'\n    }\n  },\n  required: [    'environment',\n    'status'\n  ]\n}\n```",
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
    readOnlyHint: true,
  },
};

export const handler = async (client: Augno, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.healthz.check()));
};

export default { metadata, tool, handler };
