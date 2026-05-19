// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'list_tool_groups',
    endpoint: '/v1/ai/tool-groups',
    httpMethod: 'get',
    summary: 'List Tool Groups',
    description: 'Returns all tool groups used to organize available platform tools.',
    stainlessPath: '(resource) ai > (method) list_tool_groups',
    qualified: 'client.ai.listToolGroups',
    params: ["include?: 'tools'[];"],
    response:
      "{ data: { id: string; description: string; icon: string; name: string; object: 'tool_group'; slug: string; sort_order: number; tools: available_tool[]; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }",
    markdown:
      "## list_tool_groups\n\n`client.ai.listToolGroups(include?: 'tools'[]): { data: tool_group[]; object: 'list'; page_info: page_info; }`\n\n**get** `/v1/ai/tool-groups`\n\nReturns all tool groups used to organize available platform tools.\n\n### Parameters\n\n- `include?: 'tools'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ data: { id: string; description: string; icon: string; name: string; object: 'tool_group'; slug: string; sort_order: number; tools: available_tool[]; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }`\n  A paginated list of ToolGroup resources\n\n  - `data: { id: string; description: string; icon: string; name: string; object: 'tool_group'; slug: string; sort_order: number; tools: { id: string; category: string; config_schema: object[]; description: string; display_name: string; group: tool_group; object: 'available_tool'; required_permissions: string[]; }[]; }[]`\n  - `object: 'list'`\n  - `page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst response = await client.ai.listToolGroups();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.ai.listToolGroups',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.ai.listToolGroups();\n\nconsole.log(response.data);",
      },
      python: {
        method: 'ai.list_tool_groups',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.ai.list_tool_groups()\nprint(response.data)',
      },
      kotlin: {
        method: 'ai().listToolGroups',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.ai.AiListToolGroupsParams\nimport com.augno.api.models.ai.AiListToolGroupsResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val response: AiListToolGroupsResponse = client.ai().listToolGroups()\n}',
      },
      go: {
        method: 'client.AI.ListToolGroups',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.AI.ListToolGroups(context.TODO(), augno.AIListToolGroupsParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      ruby: {
        method: 'ai.list_tool_groups',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nresponse = augno_client.ai.list_tool_groups\n\nputs(response)',
      },
      csharp: {
        method: 'AI.ListToolGroups',
        example:
          'AIListToolGroupsParams parameters = new();\n\nvar response = await client.AI.ListToolGroups(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/ai/tool-groups \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'list_tools',
    endpoint: '/v1/ai/tools',
    httpMethod: 'get',
    summary: 'List Tools',
    description: 'Returns all available platform tools that can be assigned to agents.',
    stainlessPath: '(resource) ai > (method) list_tools',
    qualified: 'client.ai.listTools',
    params: ["include?: 'group'[];"],
    response:
      "{ data: { id: string; category: string; config_schema: object[]; description: string; display_name: string; group: tool_group; object: 'available_tool'; required_permissions: string[]; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }",
    markdown:
      "## list_tools\n\n`client.ai.listTools(include?: 'group'[]): { data: available_tool[]; object: 'list'; page_info: page_info; }`\n\n**get** `/v1/ai/tools`\n\nReturns all available platform tools that can be assigned to agents.\n\n### Parameters\n\n- `include?: 'group'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ data: { id: string; category: string; config_schema: object[]; description: string; display_name: string; group: tool_group; object: 'available_tool'; required_permissions: string[]; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }`\n  A paginated list of AvailableTool resources\n\n  - `data: { id: string; category: string; config_schema: object[]; description: string; display_name: string; group: { id: string; description: string; icon: string; name: string; object: 'tool_group'; slug: string; sort_order: number; tools: available_tool[]; }; object: 'available_tool'; required_permissions: string[]; }[]`\n  - `object: 'list'`\n  - `page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst response = await client.ai.listTools();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.ai.listTools',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.ai.listTools();\n\nconsole.log(response.data);",
      },
      python: {
        method: 'ai.list_tools',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.ai.list_tools()\nprint(response.data)',
      },
      kotlin: {
        method: 'ai().listTools',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.ai.AiListToolsParams\nimport com.augno.api.models.ai.AiListToolsResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val response: AiListToolsResponse = client.ai().listTools()\n}',
      },
      go: {
        method: 'client.AI.ListTools',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.AI.ListTools(context.TODO(), augno.AIListToolsParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      ruby: {
        method: 'ai.list_tools',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nresponse = augno_client.ai.list_tools\n\nputs(response)',
      },
      csharp: {
        method: 'AI.ListTools',
        example:
          'AIListToolsParams parameters = new();\n\nvar response = await client.AI.ListTools(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example: 'curl https://api.augno.com/v1/ai/tools \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'list_usage',
    endpoint: '/v1/ai/usage',
    httpMethod: 'get',
    summary: 'List Agent Usage',
    description: 'Returns a paginated list of daily agent token usage records for the current account.',
    stainlessPath: '(resource) ai > (method) list_usage',
    qualified: 'client.ai.listUsage',
    params: ['cursor?: string;', 'days?: number;', 'limit?: number;'],
    response:
      "{ id: string; created_at: string; date: string; input_tokens: number; object: 'agent_token_usage'; output_tokens: number; run_count: number; total_cost: number; updated_at: string; }",
    markdown:
      "## list_usage\n\n`client.ai.listUsage(cursor?: string, days?: number, limit?: number): { id: string; created_at: string; date: string; input_tokens: number; object: 'agent_token_usage'; output_tokens: number; run_count: number; total_cost: number; updated_at: string; }`\n\n**get** `/v1/ai/usage`\n\nReturns a paginated list of daily agent token usage records for the current account.\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor from a previous response.\n\n- `days?: number`\n  Number of days of usage history to return. Defaults to 30.\n\n- `limit?: number`\n  Maximum number of records to return per page. Defaults to 100.\n\n### Returns\n\n- `{ id: string; created_at: string; date: string; input_tokens: number; object: 'agent_token_usage'; output_tokens: number; run_count: number; total_cost: number; updated_at: string; }`\n  AgentTokenUsage represents a daily token usage record for an account.\n\n  - `id: string`\n  - `created_at: string`\n  - `date: string`\n  - `input_tokens: number`\n  - `object: 'agent_token_usage'`\n  - `output_tokens: number`\n  - `run_count: number`\n  - `total_cost: number`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\n// Automatically fetches more pages as needed.\nfor await (const aiListUsageResponse of client.ai.listUsage()) {\n  console.log(aiListUsageResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.ai.listUsage',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const aiListUsageResponse of client.ai.listUsage()) {\n  console.log(aiListUsageResponse.id);\n}",
      },
      python: {
        method: 'ai.list_usage',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\npage = client.ai.list_usage()\npage = page.data[0]\nprint(page.id)',
      },
      kotlin: {
        method: 'ai().listUsage',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.ai.AiListUsagePage\nimport com.augno.api.models.ai.AiListUsageParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val page: AiListUsagePage = client.ai().listUsage()\n}',
      },
      go: {
        method: 'client.AI.ListUsage',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.AI.ListUsage(context.TODO(), augno.AIListUsageParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      ruby: {
        method: 'ai.list_usage',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\npage = augno_client.ai.list_usage\n\nputs(page)',
      },
      csharp: {
        method: 'AI.ListUsage',
        example:
          'AIListUsageParams parameters = new();\n\nvar page = await client.AI.ListUsage(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      http: {
        example: 'curl https://api.augno.com/v1/ai/usage \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/ai/agents',
    httpMethod: 'get',
    summary: 'List Agents',
    description: 'Returns all system and custom agent definitions for the current account.',
    stainlessPath: '(resource) ai.agents > (method) list',
    qualified: 'client.ai.agents.list',
    params: [
      'definition_type?: string[];',
      "include?: 'config' | 'tools' | 'role' | 'role.permissions'[];",
      "status?: 'active' | 'inactive'[];",
      'trigger_type?: string[];',
    ],
    response:
      "{ data: { id: string; category_code: string; config: agent_definition_config; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: light_role; slug: string; status: 'active' | 'inactive'; tools: object[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }",
    markdown:
      "## list\n\n`client.ai.agents.list(definition_type?: string[], include?: 'config' | 'tools' | 'role' | 'role.permissions'[], status?: 'active' | 'inactive'[], trigger_type?: string[]): { data: agent_definition[]; object: 'list'; page_info: page_info; }`\n\n**get** `/v1/ai/agents`\n\nReturns all system and custom agent definitions for the current account.\n\n### Parameters\n\n- `definition_type?: string[]`\n  Filter by definition type (e.g. \"system\", \"custom\").\n\n- `include?: 'config' | 'tools' | 'role' | 'role.permissions'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n- `status?: 'active' | 'inactive'[]`\n  Filter by account-level status. Defaults to \"active\".\n\n- `trigger_type?: string[]`\n  Filter by trigger type (e.g. \"manual\", \"scheduled\", \"event\").\n\n### Returns\n\n- `{ data: { id: string; category_code: string; config: agent_definition_config; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: light_role; slug: string; status: 'active' | 'inactive'; tools: object[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }`\n  A paginated list of AgentDefinition resources\n\n  - `data: { id: string; category_code: string; config: { model: string; provider: string; system_prompt: string; temperature: number; trigger_config: object; }; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; slug: string; status: 'active' | 'inactive'; tools: { id: string; config: object[]; object: 'agent_definition_tool'; require_review: boolean; sort_order: number; tool: object; }[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }[]`\n  - `object: 'list'`\n  - `page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst agents = await client.ai.agents.list();\n\nconsole.log(agents);\n```",
    perLanguage: {
      typescript: {
        method: 'client.ai.agents.list',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst agents = await client.ai.agents.list();\n\nconsole.log(agents.data);",
      },
      python: {
        method: 'ai.agents.list',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nagents = client.ai.agents.list()\nprint(agents.data)',
      },
      kotlin: {
        method: 'ai().agents().list',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.ai.agents.AgentListParams\nimport com.augno.api.models.ai.agents.AgentListResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val agents: AgentListResponse = client.ai().agents().list()\n}',
      },
      go: {
        method: 'client.AI.Agents.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tagents, err := client.AI.Agents.List(context.TODO(), augno.AIAgentListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", agents.Data)\n}\n',
      },
      ruby: {
        method: 'ai.agents.list',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nagents = augno_client.ai.agents.list\n\nputs(agents)',
      },
      csharp: {
        method: 'AI.Agents.List',
        example:
          'AgentListParams parameters = new();\n\nvar agents = await client.AI.Agents.List(parameters);\n\nConsole.WriteLine(agents);',
      },
      http: {
        example: 'curl https://api.augno.com/v1/ai/agents \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/ai/agents',
    httpMethod: 'post',
    summary: 'Create Agent',
    description: 'Creates a new custom agent definition with optional tool configuration.',
    stainlessPath: '(resource) ai.agents > (method) create',
    qualified: 'client.ai.agents.create',
    params: [
      'category_code: string;',
      'config: { model: string; provider: string; system_prompt: string; temperature: number; trigger_config: { cron_schedule: string; event_filters: string[]; timezone: string; }; };',
      'description: string;',
      'name: string;',
      'role_id: string;',
      'slug: string;',
      'tools: { config_json: string; require_review: boolean; sort_order: number; tool_id: string; }[];',
      "trigger_type: 'scheduled' | 'manual' | 'event';",
      "include?: 'config' | 'tools' | 'role' | 'role.permissions'[];",
    ],
    response:
      "{ id: string; category_code: string; config: { model: string; provider: string; system_prompt: string; temperature: number; trigger_config: object; }; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; slug: string; status: 'active' | 'inactive'; tools: { id: string; config: object[]; object: 'agent_definition_tool'; require_review: boolean; sort_order: number; tool: object; }[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }",
    markdown:
      "## create\n\n`client.ai.agents.create(category_code: string, config: { model: string; provider: string; system_prompt: string; temperature: number; trigger_config: object; }, description: string, name: string, role_id: string, slug: string, tools: { config_json: string; require_review: boolean; sort_order: number; tool_id: string; }[], trigger_type: 'scheduled' | 'manual' | 'event', include?: 'config' | 'tools' | 'role' | 'role.permissions'[]): { id: string; category_code: string; config: agent_definition_config; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: light_role; slug: string; status: 'active' | 'inactive'; tools: object[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }`\n\n**post** `/v1/ai/agents`\n\nCreates a new custom agent definition with optional tool configuration.\n\n### Parameters\n\n- `category_code: string`\n  The category code that classifies this agent (e.g. \"order_processing\").\n\n- `config: { model: string; provider: string; system_prompt: string; temperature: number; trigger_config: { cron_schedule: string; event_filters: string[]; timezone: string; }; }`\n  AgentDefinitionConfig holds agent-level configuration that controls LLM behavior.\nThis is separate from tool-level config (AgentDefinitionTool.Config) which\nconfigures individual tools attached to the agent.\n  - `model: string`\n    The LLM model identifier (e.g. \"claude-sonnet-4\").\n  - `provider: string`\n    The LLM provider name (e.g. \"anthropic\", \"openai\"). Inferred from model if omitted.\n  - `system_prompt: string`\n    The system prompt / instructions given to the agent.\n  - `temperature: number`\n    LLM sampling temperature between 0 and 1.\n  - `trigger_config: { cron_schedule: string; event_filters: string[]; timezone: string; }`\n    TriggerConfig holds trigger-type-specific settings.\nFor \"scheduled\": CronSchedule is populated.\nFor \"event\": EventFilters is populated.\nFor \"manual\": all fields are empty.\n\n- `description: string`\n  A human-readable description of what the agent does.\n\n- `name: string`\n  The display name of the agent.\n\n- `role_id: string`\n  The ID of the role that defines this agent's permissions.\n\n- `slug: string`\n  A unique URL-friendly identifier for the agent.\n\n- `tools: { config_json: string; require_review: boolean; sort_order: number; tool_id: string; }[]`\n  The tools to attach to this agent.\n\n- `trigger_type: 'scheduled' | 'manual' | 'event'`\n  How this agent is triggered: \"manual\", \"scheduled\", or \"event\".\n\n- `include?: 'config' | 'tools' | 'role' | 'role.permissions'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ id: string; category_code: string; config: { model: string; provider: string; system_prompt: string; temperature: number; trigger_config: object; }; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; slug: string; status: 'active' | 'inactive'; tools: { id: string; config: object[]; object: 'agent_definition_tool'; require_review: boolean; sort_order: number; tool: object; }[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }`\n  AgentDefinition represents an agent definition.\n\n  - `id: string`\n  - `category_code: string`\n  - `config: { model: string; provider: string; system_prompt: string; temperature: number; trigger_config: { cron_schedule: string; event_filters: string[]; timezone: string; }; }`\n  - `created_at: string`\n  - `definition_type: 'system' | 'custom'`\n  - `description: string`\n  - `is_editable: boolean`\n  - `name: string`\n  - `object: 'agent_definition'`\n  - `role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }`\n  - `slug: string`\n  - `status: 'active' | 'inactive'`\n  - `tools: { id: string; config: object[]; object: 'agent_definition_tool'; require_review: boolean; sort_order: number; tool: { id: string; category: string; config_schema: object[]; description: string; display_name: string; group: object; object: 'available_tool'; required_permissions: string[]; }; }[]`\n  - `trigger_type: 'scheduled' | 'manual' | 'event'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst agentDefinition = await client.ai.agents.create({\n  category_code: 'inventory',\n  config: {\n  model: 'claude-sonnet-4',\n  provider: 'anthropic',\n  system_prompt: 'You are an order processing agent. Parse incoming emails and create draft orders.',\n  temperature: 0.2,\n  trigger_config: {\n  cron_schedule: null,\n  event_filters: ['email.received'],\n  timezone: null,\n},\n},\n  description: 'Monitors inventory levels and creates restock alerts.',\n  name: 'Inventory Monitor',\n  role_id: 'rl_01gf7a8200er3ar3pkfrb6kk29',\n  slug: 'inventory_monitor',\n  tools: [{\n  config_json: 'config_json',\n  require_review: true,\n  sort_order: 1,\n  tool_id: 'tdef_01k0b1seed0searchproduct0',\n}],\n  trigger_type: 'event',\n});\n\nconsole.log(agentDefinition);\n```",
    perLanguage: {
      typescript: {
        method: 'client.ai.agents.create',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst agentDefinition = await client.ai.agents.create({\n  category_code: 'inventory',\n  config: {\n    system_prompt:\n      'You are an order processing agent. Parse incoming emails and create draft orders.',\n    model: 'claude-sonnet-4',\n    provider: 'anthropic',\n    temperature: 0.2,\n    trigger_config: {\n      cron_schedule: null,\n      timezone: null,\n      event_filters: ['email.received'],\n    },\n  },\n  description: 'Monitors inventory levels and creates restock alerts.',\n  name: 'Inventory Monitor',\n  role_id: 'rl_01gf7a8200er3ar3pkfrb6kk29',\n  slug: 'inventory_monitor',\n  tools: [\n    {\n      tool_id: 'tdef_01k0b1seed0searchproduct0',\n      sort_order: 1,\n      require_review: true,\n    },\n  ],\n  trigger_type: 'event',\n});\n\nconsole.log(agentDefinition.id);",
      },
      python: {
        method: 'ai.agents.create',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nagent_definition = client.ai.agents.create(\n    category_code="inventory",\n    config={\n        "system_prompt": "You are an order processing agent. Parse incoming emails and create draft orders.",\n        "model": "claude-sonnet-4",\n        "provider": "anthropic",\n        "temperature": 0.2,\n        "trigger_config": {\n            "cron_schedule": None,\n            "timezone": None,\n            "event_filters": ["email.received"],\n        },\n    },\n    description="Monitors inventory levels and creates restock alerts.",\n    name="Inventory Monitor",\n    role_id="rl_01gf7a8200er3ar3pkfrb6kk29",\n    slug="inventory_monitor",\n    tools=[{\n        "tool_id": "tdef_01k0b1seed0searchproduct0",\n        "sort_order": 1,\n        "require_review": True,\n    }],\n    trigger_type="event",\n)\nprint(agent_definition.id)',
      },
      kotlin: {
        method: 'ai().agents().create',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.ai.agents.AgentCreateParams\nimport com.augno.api.models.ai.agents.AgentDefinition\nimport com.augno.api.models.ai.agents.AgentDefinitionConfig\nimport com.augno.api.models.ai.agents.ToolInput\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: AgentCreateParams = AgentCreateParams.builder()\n        .categoryCode("inventory")\n        .config(AgentDefinitionConfig.builder()\n            .model("claude-sonnet-4")\n            .provider("anthropic")\n            .systemPrompt("You are an order processing agent. Parse incoming emails and create draft orders.")\n            .temperature(0.2)\n            .triggerConfig(AgentDefinitionConfig.TriggerConfig.builder()\n                .cronSchedule(null)\n                .addEventFilter("email.received")\n                .timezone(null)\n                .build())\n            .build())\n        .description("Monitors inventory levels and creates restock alerts.")\n        .name("Inventory Monitor")\n        .roleId("rl_01gf7a8200er3ar3pkfrb6kk29")\n        .slug("inventory_monitor")\n        .addTool(ToolInput.builder()\n            .configJson("config_json")\n            .requireReview(true)\n            .sortOrder(1L)\n            .toolId("tdef_01k0b1seed0searchproduct0")\n            .build())\n        .triggerType(AgentCreateParams.TriggerType.EVENT)\n        .build()\n    val agentDefinition: AgentDefinition = client.ai().agents().create(params)\n}',
      },
      go: {
        method: 'client.AI.Agents.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n\t"github.com/stainless-sdks/augno-go/packages/param"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tagentDefinition, err := client.AI.Agents.New(context.TODO(), augno.AIAgentNewParams{\n\t\tCategoryCode: "inventory",\n\t\tConfig: augno.AgentDefinitionConfigParam{\n\t\t\tSystemPrompt: augno.String("You are an order processing agent. Parse incoming emails and create draft orders."),\n\t\t\tModel:        augno.String("claude-sonnet-4"),\n\t\t\tProvider:     augno.String("anthropic"),\n\t\t\tTemperature:  augno.Float(0.2),\n\t\t\tTriggerConfig: augno.AgentDefinitionConfigTriggerConfigParam{\n\t\t\t\tCronSchedule: param.Null[string](),\n\t\t\t\tTimezone:     param.Null[string](),\n\t\t\t\tEventFilters: []string{"email.received"},\n\t\t\t},\n\t\t},\n\t\tDescription: "Monitors inventory levels and creates restock alerts.",\n\t\tName:        "Inventory Monitor",\n\t\tRoleID:      "rl_01gf7a8200er3ar3pkfrb6kk29",\n\t\tSlug:        "inventory_monitor",\n\t\tTools: []augno.ToolInputParam{{\n\t\t\tToolID:        "tdef_01k0b1seed0searchproduct0",\n\t\t\tSortOrder:     1,\n\t\t\tRequireReview: true,\n\t\t}},\n\t\tTriggerType: augno.AIAgentNewParamsTriggerTypeEvent,\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", agentDefinition.ID)\n}\n',
      },
      ruby: {
        method: 'ai.agents.create',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nagent_definition = augno_client.ai.agents.create(\n  category_code: "inventory",\n  config: {\n    model: "claude-sonnet-4",\n    provider: "anthropic",\n    system_prompt: "You are an order processing agent. Parse incoming emails and create draft orders.",\n    temperature: 0.2,\n    trigger_config: {cron_schedule: nil, event_filters: ["email.received"], timezone: nil}\n  },\n  description: "Monitors inventory levels and creates restock alerts.",\n  name: "Inventory Monitor",\n  role_id: "rl_01gf7a8200er3ar3pkfrb6kk29",\n  slug: "inventory_monitor",\n  tools: [\n    {config_json: "config_json", require_review: true, sort_order: 1, tool_id: "tdef_01k0b1seed0searchproduct0"}\n  ],\n  trigger_type: :event\n)\n\nputs(agent_definition)',
      },
      csharp: {
        method: 'AI.Agents.Create',
        example:
          'AgentCreateParams parameters = new()\n{\n    CategoryCode = "inventory",\n    Config = new()\n    {\n        Model = "claude-sonnet-4",\n        Provider = "anthropic",\n        SystemPrompt = "You are an order processing agent. Parse incoming emails and create draft orders.",\n        Temperature = 0.2,\n        TriggerConfig = new()\n        {\n            CronSchedule = null,\n            EventFilters =\n            [\n                "email.received"\n            ],\n            Timezone = null,\n        },\n    },\n    Description = "Monitors inventory levels and creates restock alerts.",\n    Name = "Inventory Monitor",\n    RoleID = "rl_01gf7a8200er3ar3pkfrb6kk29",\n    Slug = "inventory_monitor",\n    Tools =\n    [\n        new()\n        {\n            ConfigJson = "config_json",\n            RequireReview = true,\n            SortOrder = 1,\n            ToolID = "tdef_01k0b1seed0searchproduct0",\n        },\n    ],\n    TriggerType = TriggerType.Event,\n};\n\nvar agentDefinition = await client.AI.Agents.Create(parameters);\n\nConsole.WriteLine(agentDefinition);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/ai/agents \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "category_code": "inventory",\n          "config": {\n            "model": "claude-sonnet-4",\n            "provider": "anthropic",\n            "system_prompt": "You are an order processing agent. Parse incoming emails and create draft orders.",\n            "temperature": 0.2,\n            "trigger_config": {\n              "cron_schedule": null,\n              "event_filters": [\n                "email.received"\n              ],\n              "timezone": null\n            }\n          },\n          "description": "Monitors inventory levels and creates restock alerts.",\n          "name": "Inventory Monitor",\n          "role_id": "rl_01gf7a8200er3ar3pkfrb6kk29",\n          "slug": "inventory_monitor",\n          "tools": [\n            {\n              "config_json": "config_json",\n              "require_review": true,\n              "sort_order": 1,\n              "tool_id": "tdef_01k0b1seed0searchproduct0"\n            }\n          ],\n          "trigger_type": "event"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/ai/agents/{id}',
    httpMethod: 'delete',
    summary: 'Delete Agent',
    description: 'Soft-deletes a custom agent definition. System agents cannot be deleted.',
    stainlessPath: '(resource) ai.agents > (method) delete',
    qualified: 'client.ai.agents.delete',
    params: ['id: string;'],
    response: '{  }',
    markdown:
      "## delete\n\n`client.ai.agents.delete(id: string): {  }`\n\n**delete** `/v1/ai/agents/{id}`\n\nSoft-deletes a custom agent definition. System agents cannot be deleted.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{  }`\n\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst agent = await client.ai.agents.delete('id');\n\nconsole.log(agent);\n```",
    perLanguage: {
      typescript: {
        method: 'client.ai.agents.delete',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst agent = await client.ai.agents.delete('id');\n\nconsole.log(agent);",
      },
      python: {
        method: 'ai.agents.delete',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nagent = client.ai.agents.delete(\n    "id",\n)\nprint(agent)',
      },
      kotlin: {
        method: 'ai().agents().delete',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.ai.agents.AgentDeleteParams\nimport com.augno.api.models.ai.agents.AgentDeleteResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val agent: AgentDeleteResponse = client.ai().agents().delete("id")\n}',
      },
      go: {
        method: 'client.AI.Agents.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tagent, err := client.AI.Agents.Delete(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", agent)\n}\n',
      },
      ruby: {
        method: 'ai.agents.delete',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nagent = augno_client.ai.agents.delete("id")\n\nputs(agent)',
      },
      csharp: {
        method: 'AI.Agents.Delete',
        example:
          'AgentDeleteParams parameters = new() { ID = "id" };\n\nvar agent = await client.AI.Agents.Delete(parameters);\n\nConsole.WriteLine(agent);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/ai/agents/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/ai/agents/{id}',
    httpMethod: 'get',
    summary: 'Get Agent',
    description: 'Returns a single agent definition with its tool configuration.',
    stainlessPath: '(resource) ai.agents > (method) retrieve',
    qualified: 'client.ai.agents.retrieve',
    params: ['id: string;', "include?: 'config' | 'tools' | 'role' | 'role.permissions'[];"],
    response:
      "{ id: string; category_code: string; config: { model: string; provider: string; system_prompt: string; temperature: number; trigger_config: object; }; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; slug: string; status: 'active' | 'inactive'; tools: { id: string; config: object[]; object: 'agent_definition_tool'; require_review: boolean; sort_order: number; tool: object; }[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }",
    markdown:
      "## retrieve\n\n`client.ai.agents.retrieve(id: string, include?: 'config' | 'tools' | 'role' | 'role.permissions'[]): { id: string; category_code: string; config: agent_definition_config; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: light_role; slug: string; status: 'active' | 'inactive'; tools: object[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }`\n\n**get** `/v1/ai/agents/{id}`\n\nReturns a single agent definition with its tool configuration.\n\n### Parameters\n\n- `id: string`\n\n- `include?: 'config' | 'tools' | 'role' | 'role.permissions'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ id: string; category_code: string; config: { model: string; provider: string; system_prompt: string; temperature: number; trigger_config: object; }; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; slug: string; status: 'active' | 'inactive'; tools: { id: string; config: object[]; object: 'agent_definition_tool'; require_review: boolean; sort_order: number; tool: object; }[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }`\n  AgentDefinition represents an agent definition.\n\n  - `id: string`\n  - `category_code: string`\n  - `config: { model: string; provider: string; system_prompt: string; temperature: number; trigger_config: { cron_schedule: string; event_filters: string[]; timezone: string; }; }`\n  - `created_at: string`\n  - `definition_type: 'system' | 'custom'`\n  - `description: string`\n  - `is_editable: boolean`\n  - `name: string`\n  - `object: 'agent_definition'`\n  - `role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }`\n  - `slug: string`\n  - `status: 'active' | 'inactive'`\n  - `tools: { id: string; config: object[]; object: 'agent_definition_tool'; require_review: boolean; sort_order: number; tool: { id: string; category: string; config_schema: object[]; description: string; display_name: string; group: object; object: 'available_tool'; required_permissions: string[]; }; }[]`\n  - `trigger_type: 'scheduled' | 'manual' | 'event'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst agentDefinition = await client.ai.agents.retrieve('id');\n\nconsole.log(agentDefinition);\n```",
    perLanguage: {
      typescript: {
        method: 'client.ai.agents.retrieve',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst agentDefinition = await client.ai.agents.retrieve('id');\n\nconsole.log(agentDefinition.id);",
      },
      python: {
        method: 'ai.agents.retrieve',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nagent_definition = client.ai.agents.retrieve(\n    id="id",\n)\nprint(agent_definition.id)',
      },
      kotlin: {
        method: 'ai().agents().retrieve',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.ai.agents.AgentDefinition\nimport com.augno.api.models.ai.agents.AgentRetrieveParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val agentDefinition: AgentDefinition = client.ai().agents().retrieve("id")\n}',
      },
      go: {
        method: 'client.AI.Agents.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tagentDefinition, err := client.AI.Agents.Get(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.AIAgentGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", agentDefinition.ID)\n}\n',
      },
      ruby: {
        method: 'ai.agents.retrieve',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nagent_definition = augno_client.ai.agents.retrieve("id")\n\nputs(agent_definition)',
      },
      csharp: {
        method: 'AI.Agents.Retrieve',
        example:
          'AgentRetrieveParams parameters = new() { ID = "id" };\n\nvar agentDefinition = await client.AI.Agents.Retrieve(parameters);\n\nConsole.WriteLine(agentDefinition);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/ai/agents/$ID \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/ai/agents/{id}',
    httpMethod: 'put',
    summary: 'Update Agent',
    description: 'Updates a custom agent definition. System agents cannot be modified.',
    stainlessPath: '(resource) ai.agents > (method) update',
    qualified: 'client.ai.agents.update',
    params: [
      'id: string;',
      'category_code: string;',
      'config: { model: string; provider: string; system_prompt: string; temperature: number; trigger_config: { cron_schedule: string; event_filters: string[]; timezone: string; }; };',
      'description: string;',
      'name: string;',
      'role_id: string;',
      'slug: string;',
      'tools: { config_json: string; require_review: boolean; sort_order: number; tool_id: string; }[];',
      "trigger_type: 'scheduled' | 'manual' | 'event';",
      "include?: 'config' | 'tools' | 'role' | 'role.permissions'[];",
    ],
    response:
      "{ id: string; category_code: string; config: { model: string; provider: string; system_prompt: string; temperature: number; trigger_config: object; }; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; slug: string; status: 'active' | 'inactive'; tools: { id: string; config: object[]; object: 'agent_definition_tool'; require_review: boolean; sort_order: number; tool: object; }[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }",
    markdown:
      "## update\n\n`client.ai.agents.update(id: string, category_code: string, config: { model: string; provider: string; system_prompt: string; temperature: number; trigger_config: object; }, description: string, name: string, role_id: string, slug: string, tools: { config_json: string; require_review: boolean; sort_order: number; tool_id: string; }[], trigger_type: 'scheduled' | 'manual' | 'event', include?: 'config' | 'tools' | 'role' | 'role.permissions'[]): { id: string; category_code: string; config: agent_definition_config; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: light_role; slug: string; status: 'active' | 'inactive'; tools: object[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }`\n\n**put** `/v1/ai/agents/{id}`\n\nUpdates a custom agent definition. System agents cannot be modified.\n\n### Parameters\n\n- `id: string`\n\n- `category_code: string`\n  The category code that classifies this agent (e.g. \"order_processing\").\n\n- `config: { model: string; provider: string; system_prompt: string; temperature: number; trigger_config: { cron_schedule: string; event_filters: string[]; timezone: string; }; }`\n  AgentDefinitionConfig holds agent-level configuration that controls LLM behavior.\nThis is separate from tool-level config (AgentDefinitionTool.Config) which\nconfigures individual tools attached to the agent.\n  - `model: string`\n    The LLM model identifier (e.g. \"claude-sonnet-4\").\n  - `provider: string`\n    The LLM provider name (e.g. \"anthropic\", \"openai\"). Inferred from model if omitted.\n  - `system_prompt: string`\n    The system prompt / instructions given to the agent.\n  - `temperature: number`\n    LLM sampling temperature between 0 and 1.\n  - `trigger_config: { cron_schedule: string; event_filters: string[]; timezone: string; }`\n    TriggerConfig holds trigger-type-specific settings.\nFor \"scheduled\": CronSchedule is populated.\nFor \"event\": EventFilters is populated.\nFor \"manual\": all fields are empty.\n\n- `description: string`\n  A human-readable description of what the agent does.\n\n- `name: string`\n  The display name of the agent.\n\n- `role_id: string`\n  The ID of the role that defines this agent's permissions.\n\n- `slug: string`\n  A unique URL-friendly identifier for the agent.\n\n- `tools: { config_json: string; require_review: boolean; sort_order: number; tool_id: string; }[]`\n  The tools to attach to this agent. Replaces the existing tool set.\n\n- `trigger_type: 'scheduled' | 'manual' | 'event'`\n  How this agent is triggered: \"manual\", \"scheduled\", or \"event\".\n\n- `include?: 'config' | 'tools' | 'role' | 'role.permissions'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ id: string; category_code: string; config: { model: string; provider: string; system_prompt: string; temperature: number; trigger_config: object; }; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; slug: string; status: 'active' | 'inactive'; tools: { id: string; config: object[]; object: 'agent_definition_tool'; require_review: boolean; sort_order: number; tool: object; }[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }`\n  AgentDefinition represents an agent definition.\n\n  - `id: string`\n  - `category_code: string`\n  - `config: { model: string; provider: string; system_prompt: string; temperature: number; trigger_config: { cron_schedule: string; event_filters: string[]; timezone: string; }; }`\n  - `created_at: string`\n  - `definition_type: 'system' | 'custom'`\n  - `description: string`\n  - `is_editable: boolean`\n  - `name: string`\n  - `object: 'agent_definition'`\n  - `role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }`\n  - `slug: string`\n  - `status: 'active' | 'inactive'`\n  - `tools: { id: string; config: object[]; object: 'agent_definition_tool'; require_review: boolean; sort_order: number; tool: { id: string; category: string; config_schema: object[]; description: string; display_name: string; group: object; object: 'available_tool'; required_permissions: string[]; }; }[]`\n  - `trigger_type: 'scheduled' | 'manual' | 'event'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst agentDefinition = await client.ai.agents.update('id', {\n  category_code: 'inventory',\n  config: {\n  model: 'claude-sonnet-4',\n  provider: 'anthropic',\n  system_prompt: 'You are an order processing agent. Parse incoming emails and create draft orders.',\n  temperature: 0.2,\n  trigger_config: {\n  cron_schedule: null,\n  event_filters: ['email.received'],\n  timezone: null,\n},\n},\n  description: 'Monitors inventory levels and creates restock alerts.',\n  name: 'Inventory Monitor',\n  role_id: 'rl_01gf7a8200er3ar3pkfrb6kk29',\n  slug: 'inventory_monitor',\n  tools: [{\n  config_json: 'config_json',\n  require_review: true,\n  sort_order: 1,\n  tool_id: 'tdef_01k0b1seed0searchproduct0',\n}],\n  trigger_type: 'event',\n});\n\nconsole.log(agentDefinition);\n```",
    perLanguage: {
      typescript: {
        method: 'client.ai.agents.update',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst agentDefinition = await client.ai.agents.update('id', {\n  category_code: 'inventory',\n  config: {\n    system_prompt:\n      'You are an order processing agent. Parse incoming emails and create draft orders.',\n    model: 'claude-sonnet-4',\n    provider: 'anthropic',\n    temperature: 0.2,\n    trigger_config: {\n      cron_schedule: null,\n      timezone: null,\n      event_filters: ['email.received'],\n    },\n  },\n  description: 'Monitors inventory levels and creates restock alerts.',\n  name: 'Inventory Monitor',\n  role_id: 'rl_01gf7a8200er3ar3pkfrb6kk29',\n  slug: 'inventory_monitor',\n  tools: [\n    {\n      config_json: 'config_json',\n      require_review: true,\n      sort_order: 1,\n      tool_id: 'tdef_01k0b1seed0searchproduct0',\n    },\n  ],\n  trigger_type: 'event',\n});\n\nconsole.log(agentDefinition.id);",
      },
      python: {
        method: 'ai.agents.update',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nagent_definition = client.ai.agents.update(\n    id="id",\n    category_code="inventory",\n    config={\n        "system_prompt": "You are an order processing agent. Parse incoming emails and create draft orders.",\n        "model": "claude-sonnet-4",\n        "provider": "anthropic",\n        "temperature": 0.2,\n        "trigger_config": {\n            "cron_schedule": None,\n            "timezone": None,\n            "event_filters": ["email.received"],\n        },\n    },\n    description="Monitors inventory levels and creates restock alerts.",\n    name="Inventory Monitor",\n    role_id="rl_01gf7a8200er3ar3pkfrb6kk29",\n    slug="inventory_monitor",\n    tools=[{\n        "config_json": "config_json",\n        "require_review": True,\n        "sort_order": 1,\n        "tool_id": "tdef_01k0b1seed0searchproduct0",\n    }],\n    trigger_type="event",\n)\nprint(agent_definition.id)',
      },
      kotlin: {
        method: 'ai().agents().update',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.ai.agents.AgentDefinition\nimport com.augno.api.models.ai.agents.AgentDefinitionConfig\nimport com.augno.api.models.ai.agents.AgentUpdateParams\nimport com.augno.api.models.ai.agents.ToolInput\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: AgentUpdateParams = AgentUpdateParams.builder()\n        .id("id")\n        .categoryCode("inventory")\n        .config(AgentDefinitionConfig.builder()\n            .model("claude-sonnet-4")\n            .provider("anthropic")\n            .systemPrompt("You are an order processing agent. Parse incoming emails and create draft orders.")\n            .temperature(0.2)\n            .triggerConfig(AgentDefinitionConfig.TriggerConfig.builder()\n                .cronSchedule(null)\n                .addEventFilter("email.received")\n                .timezone(null)\n                .build())\n            .build())\n        .description("Monitors inventory levels and creates restock alerts.")\n        .name("Inventory Monitor")\n        .roleId("rl_01gf7a8200er3ar3pkfrb6kk29")\n        .slug("inventory_monitor")\n        .addTool(ToolInput.builder()\n            .configJson("config_json")\n            .requireReview(true)\n            .sortOrder(1L)\n            .toolId("tdef_01k0b1seed0searchproduct0")\n            .build())\n        .triggerType(AgentUpdateParams.TriggerType.EVENT)\n        .build()\n    val agentDefinition: AgentDefinition = client.ai().agents().update(params)\n}',
      },
      go: {
        method: 'client.AI.Agents.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n\t"github.com/stainless-sdks/augno-go/packages/param"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tagentDefinition, err := client.AI.Agents.Update(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.AIAgentUpdateParams{\n\t\t\tCategoryCode: "inventory",\n\t\t\tConfig: augno.AgentDefinitionConfigParam{\n\t\t\t\tSystemPrompt: augno.String("You are an order processing agent. Parse incoming emails and create draft orders."),\n\t\t\t\tModel:        augno.String("claude-sonnet-4"),\n\t\t\t\tProvider:     augno.String("anthropic"),\n\t\t\t\tTemperature:  augno.Float(0.2),\n\t\t\t\tTriggerConfig: augno.AgentDefinitionConfigTriggerConfigParam{\n\t\t\t\t\tCronSchedule: param.Null[string](),\n\t\t\t\t\tTimezone:     param.Null[string](),\n\t\t\t\t\tEventFilters: []string{"email.received"},\n\t\t\t\t},\n\t\t\t},\n\t\t\tDescription: "Monitors inventory levels and creates restock alerts.",\n\t\t\tName:        "Inventory Monitor",\n\t\t\tRoleID:      "rl_01gf7a8200er3ar3pkfrb6kk29",\n\t\t\tSlug:        "inventory_monitor",\n\t\t\tTools: []augno.ToolInputParam{{\n\t\t\t\tConfigJson:    "config_json",\n\t\t\t\tRequireReview: true,\n\t\t\t\tSortOrder:     1,\n\t\t\t\tToolID:        "tdef_01k0b1seed0searchproduct0",\n\t\t\t}},\n\t\t\tTriggerType: augno.AIAgentUpdateParamsTriggerTypeEvent,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", agentDefinition.ID)\n}\n',
      },
      ruby: {
        method: 'ai.agents.update',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nagent_definition = augno_client.ai.agents.update(\n  "id",\n  category_code: "inventory",\n  config: {\n    model: "claude-sonnet-4",\n    provider: "anthropic",\n    system_prompt: "You are an order processing agent. Parse incoming emails and create draft orders.",\n    temperature: 0.2,\n    trigger_config: {cron_schedule: nil, event_filters: ["email.received"], timezone: nil}\n  },\n  description: "Monitors inventory levels and creates restock alerts.",\n  name: "Inventory Monitor",\n  role_id: "rl_01gf7a8200er3ar3pkfrb6kk29",\n  slug: "inventory_monitor",\n  tools: [\n    {config_json: "config_json", require_review: true, sort_order: 1, tool_id: "tdef_01k0b1seed0searchproduct0"}\n  ],\n  trigger_type: :event\n)\n\nputs(agent_definition)',
      },
      csharp: {
        method: 'AI.Agents.Update',
        example:
          'AgentUpdateParams parameters = new()\n{\n    ID = "id",\n    CategoryCode = "inventory",\n    Config = new()\n    {\n        Model = "claude-sonnet-4",\n        Provider = "anthropic",\n        SystemPrompt = "You are an order processing agent. Parse incoming emails and create draft orders.",\n        Temperature = 0.2,\n        TriggerConfig = new()\n        {\n            CronSchedule = null,\n            EventFilters =\n            [\n                "email.received"\n            ],\n            Timezone = null,\n        },\n    },\n    Description = "Monitors inventory levels and creates restock alerts.",\n    Name = "Inventory Monitor",\n    RoleID = "rl_01gf7a8200er3ar3pkfrb6kk29",\n    Slug = "inventory_monitor",\n    Tools =\n    [\n        new()\n        {\n            ConfigJson = "config_json",\n            RequireReview = true,\n            SortOrder = 1,\n            ToolID = "tdef_01k0b1seed0searchproduct0",\n        },\n    ],\n    TriggerType = TriggerType.Event,\n};\n\nvar agentDefinition = await client.AI.Agents.Update(parameters);\n\nConsole.WriteLine(agentDefinition);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/ai/agents/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "category_code": "inventory",\n          "config": {\n            "model": "claude-sonnet-4",\n            "provider": "anthropic",\n            "system_prompt": "You are an order processing agent. Parse incoming emails and create draft orders.",\n            "temperature": 0.2,\n            "trigger_config": {\n              "cron_schedule": null,\n              "event_filters": [\n                "email.received"\n              ],\n              "timezone": null\n            }\n          },\n          "description": "Monitors inventory levels and creates restock alerts.",\n          "name": "Inventory Monitor",\n          "role_id": "rl_01gf7a8200er3ar3pkfrb6kk29",\n          "slug": "inventory_monitor",\n          "tools": [\n            {\n              "config_json": "config_json",\n              "require_review": true,\n              "sort_order": 1,\n              "tool_id": "tdef_01k0b1seed0searchproduct0"\n            }\n          ],\n          "trigger_type": "event"\n        }\'',
      },
    },
  },
  {
    name: 'update_status',
    endpoint: '/v1/ai/agents/{id}/status',
    httpMethod: 'put',
    summary: 'Update Agent Status',
    description: 'Upserts the per-account status for an agent definition.',
    stainlessPath: '(resource) ai.agents > (method) update_status',
    qualified: 'client.ai.agents.updateStatus',
    params: [
      'id: string;',
      'status_code: string;',
      "include?: 'config' | 'tools' | 'role' | 'role.permissions'[];",
    ],
    response:
      "{ id: string; category_code: string; config: { model: string; provider: string; system_prompt: string; temperature: number; trigger_config: object; }; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; slug: string; status: 'active' | 'inactive'; tools: { id: string; config: object[]; object: 'agent_definition_tool'; require_review: boolean; sort_order: number; tool: object; }[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }",
    markdown:
      "## update_status\n\n`client.ai.agents.updateStatus(id: string, status_code: string, include?: 'config' | 'tools' | 'role' | 'role.permissions'[]): { id: string; category_code: string; config: agent_definition_config; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: light_role; slug: string; status: 'active' | 'inactive'; tools: object[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }`\n\n**put** `/v1/ai/agents/{id}/status`\n\nUpserts the per-account status for an agent definition.\n\n### Parameters\n\n- `id: string`\n\n- `status_code: string`\n  The new account-level status code: \"active\" or \"inactive\".\n\n- `include?: 'config' | 'tools' | 'role' | 'role.permissions'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ id: string; category_code: string; config: { model: string; provider: string; system_prompt: string; temperature: number; trigger_config: object; }; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; slug: string; status: 'active' | 'inactive'; tools: { id: string; config: object[]; object: 'agent_definition_tool'; require_review: boolean; sort_order: number; tool: object; }[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }`\n  AgentDefinition represents an agent definition.\n\n  - `id: string`\n  - `category_code: string`\n  - `config: { model: string; provider: string; system_prompt: string; temperature: number; trigger_config: { cron_schedule: string; event_filters: string[]; timezone: string; }; }`\n  - `created_at: string`\n  - `definition_type: 'system' | 'custom'`\n  - `description: string`\n  - `is_editable: boolean`\n  - `name: string`\n  - `object: 'agent_definition'`\n  - `role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }`\n  - `slug: string`\n  - `status: 'active' | 'inactive'`\n  - `tools: { id: string; config: object[]; object: 'agent_definition_tool'; require_review: boolean; sort_order: number; tool: { id: string; category: string; config_schema: object[]; description: string; display_name: string; group: object; object: 'available_tool'; required_permissions: string[]; }; }[]`\n  - `trigger_type: 'scheduled' | 'manual' | 'event'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst agentDefinition = await client.ai.agents.updateStatus('id', { status_code: 'active' });\n\nconsole.log(agentDefinition);\n```",
    perLanguage: {
      typescript: {
        method: 'client.ai.agents.updateStatus',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst agentDefinition = await client.ai.agents.updateStatus('id', { status_code: 'active' });\n\nconsole.log(agentDefinition.id);",
      },
      python: {
        method: 'ai.agents.update_status',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nagent_definition = client.ai.agents.update_status(\n    id="id",\n    status_code="active",\n)\nprint(agent_definition.id)',
      },
      kotlin: {
        method: 'ai().agents().updateStatus',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.ai.agents.AgentDefinition\nimport com.augno.api.models.ai.agents.AgentUpdateStatusParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: AgentUpdateStatusParams = AgentUpdateStatusParams.builder()\n        .id("id")\n        .statusCode("active")\n        .build()\n    val agentDefinition: AgentDefinition = client.ai().agents().updateStatus(params)\n}',
      },
      go: {
        method: 'client.AI.Agents.UpdateStatus',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tagentDefinition, err := client.AI.Agents.UpdateStatus(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.AIAgentUpdateStatusParams{\n\t\t\tStatusCode: "active",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", agentDefinition.ID)\n}\n',
      },
      ruby: {
        method: 'ai.agents.update_status',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nagent_definition = augno_client.ai.agents.update_status("id", status_code: "active")\n\nputs(agent_definition)',
      },
      csharp: {
        method: 'AI.Agents.UpdateStatus',
        example:
          'AgentUpdateStatusParams parameters = new()\n{\n    ID = "id",\n    StatusCode = "active",\n};\n\nvar agentDefinition = await client.AI.Agents.UpdateStatus(parameters);\n\nConsole.WriteLine(agentDefinition);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/ai/agents/$ID/status \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "status_code": "active"\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/ai/alerts',
    httpMethod: 'get',
    summary: 'List Agent Alerts',
    description: 'Returns a paginated list of agent alerts for the current account.',
    stainlessPath: '(resource) ai.alerts > (method) list',
    qualified: 'client.ai.alerts.list',
    params: [
      'cursor?: string;',
      "include?: 'run' | 'action'[];",
      'limit?: number;',
      "severity?: 'info' | 'warning' | 'urgent' | 'critical';",
      "status?: 'open' | 'acknowledged';",
    ],
    response:
      "{ id: string; acknowledged_at: string; acknowledged_by: { id: string; name: string; object: 'user|api_key|agent'; }; action: { id: string; created_at: string; description: string; entity: entity; error_message: string; executed_at: string; input: object[]; label: string; object: 'agent_action'; output: object[]; requires_review: boolean; reviewed_at: string; reviewed_by: light_actor; run: object; status: 'pending_review' | 'auto_approved' | 'approved' | 'rejected' | 'executed' | 'failed'; tool_slug: string; updated_at: string; }; created_at: string; message: string; metadata: object[]; object: 'agent_alert'; run: { id: string; actions: agent_action[]; completed_at: string; created_at: string; definition: agent_definition; duration_ms: number; error_message: string; input: object[]; object: 'agent_run'; output: object[]; started_at: string; status: string; steps: object[]; total_input_tokens: number; total_output_tokens: number; trigger_type: string; triggered_by: light_actor; updated_at: string; }; severity: 'info' | 'warning' | 'urgent' | 'critical'; status: 'open' | 'acknowledged'; title: string; updated_at: string; }",
    markdown:
      "## list\n\n`client.ai.alerts.list(cursor?: string, include?: 'run' | 'action'[], limit?: number, severity?: 'info' | 'warning' | 'urgent' | 'critical', status?: 'open' | 'acknowledged'): { id: string; acknowledged_at: string; acknowledged_by: light_actor; action: agent_action; created_at: string; message: string; metadata: object[]; object: 'agent_alert'; run: agent_run; severity: 'info' | 'warning' | 'urgent' | 'critical'; status: 'open' | 'acknowledged'; title: string; updated_at: string; }`\n\n**get** `/v1/ai/alerts`\n\nReturns a paginated list of agent alerts for the current account.\n\n### Parameters\n\n- `cursor?: string`\n  Pagination cursor from a previous response.\n\n- `include?: 'run' | 'action'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n- `limit?: number`\n  Maximum number of records to return per page. Defaults to 100.\n\n- `severity?: 'info' | 'warning' | 'urgent' | 'critical'`\n  Filter by severity.\n\n- `status?: 'open' | 'acknowledged'`\n  Filter by alert status.\n\n### Returns\n\n- `{ id: string; acknowledged_at: string; acknowledged_by: { id: string; name: string; object: 'user|api_key|agent'; }; action: { id: string; created_at: string; description: string; entity: entity; error_message: string; executed_at: string; input: object[]; label: string; object: 'agent_action'; output: object[]; requires_review: boolean; reviewed_at: string; reviewed_by: light_actor; run: object; status: 'pending_review' | 'auto_approved' | 'approved' | 'rejected' | 'executed' | 'failed'; tool_slug: string; updated_at: string; }; created_at: string; message: string; metadata: object[]; object: 'agent_alert'; run: { id: string; actions: agent_action[]; completed_at: string; created_at: string; definition: agent_definition; duration_ms: number; error_message: string; input: object[]; object: 'agent_run'; output: object[]; started_at: string; status: string; steps: object[]; total_input_tokens: number; total_output_tokens: number; trigger_type: string; triggered_by: light_actor; updated_at: string; }; severity: 'info' | 'warning' | 'urgent' | 'critical'; status: 'open' | 'acknowledged'; title: string; updated_at: string; }`\n  AgentAlert represents an alert generated by an agent.\n\n  - `id: string`\n  - `acknowledged_at: string`\n  - `acknowledged_by: { id: string; name: string; object: 'user|api_key|agent'; }`\n  - `action: { id: string; created_at: string; description: string; entity: { id: string; object: string; }; error_message: string; executed_at: string; input: object[]; label: string; object: 'agent_action'; output: object[]; requires_review: boolean; reviewed_at: string; reviewed_by: { id: string; name: string; object: 'user|api_key|agent'; }; run: { id: string; object: 'agent_run'; }; status: 'pending_review' | 'auto_approved' | 'approved' | 'rejected' | 'executed' | 'failed'; tool_slug: string; updated_at: string; }`\n  - `created_at: string`\n  - `message: string`\n  - `metadata: object[]`\n  - `object: 'agent_alert'`\n  - `run: { id: string; actions: { id: string; created_at: string; description: string; entity: entity; error_message: string; executed_at: string; input: object[]; label: string; object: 'agent_action'; output: object[]; requires_review: boolean; reviewed_at: string; reviewed_by: light_actor; run: object; status: 'pending_review' | 'auto_approved' | 'approved' | 'rejected' | 'executed' | 'failed'; tool_slug: string; updated_at: string; }[]; completed_at: string; created_at: string; definition: { id: string; category_code: string; config: agent_definition_config; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: light_role; slug: string; status: 'active' | 'inactive'; tools: object[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }; duration_ms: number; error_message: string; input: object[]; object: 'agent_run'; output: object[]; started_at: string; status: string; steps: { id: string; actor: object; content: string; created_at: string; duration_ms: number; metadata: object[]; object: 'agent_run_step'; sequence: number; step_type: string; title: string; }[]; total_input_tokens: number; total_output_tokens: number; trigger_type: string; triggered_by: { id: string; name: string; object: 'user|api_key|agent'; }; updated_at: string; }`\n  - `severity: 'info' | 'warning' | 'urgent' | 'critical'`\n  - `status: 'open' | 'acknowledged'`\n  - `title: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\n// Automatically fetches more pages as needed.\nfor await (const agentAlert of client.ai.alerts.list()) {\n  console.log(agentAlert);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.ai.alerts.list',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const agentAlert of client.ai.alerts.list()) {\n  console.log(agentAlert.id);\n}",
      },
      python: {
        method: 'ai.alerts.list',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\npage = client.ai.alerts.list()\npage = page.data[0]\nprint(page.id)',
      },
      kotlin: {
        method: 'ai().alerts().list',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.ai.alerts.AlertListPage\nimport com.augno.api.models.ai.alerts.AlertListParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val page: AlertListPage = client.ai().alerts().list()\n}',
      },
      go: {
        method: 'client.AI.Alerts.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.AI.Alerts.List(context.TODO(), augno.AIAlertListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      ruby: {
        method: 'ai.alerts.list',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\npage = augno_client.ai.alerts.list\n\nputs(page)',
      },
      csharp: {
        method: 'AI.Alerts.List',
        example:
          'AlertListParams parameters = new();\n\nvar page = await client.AI.Alerts.List(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      http: {
        example: 'curl https://api.augno.com/v1/ai/alerts \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/ai/alerts/{id}',
    httpMethod: 'get',
    summary: 'Get Agent Alert',
    description: 'Returns a single agent alert by ID.',
    stainlessPath: '(resource) ai.alerts > (method) retrieve',
    qualified: 'client.ai.alerts.retrieve',
    params: ['id: string;', "include?: 'run' | 'action'[];"],
    response:
      "{ id: string; acknowledged_at: string; acknowledged_by: { id: string; name: string; object: 'user|api_key|agent'; }; action: { id: string; created_at: string; description: string; entity: entity; error_message: string; executed_at: string; input: object[]; label: string; object: 'agent_action'; output: object[]; requires_review: boolean; reviewed_at: string; reviewed_by: light_actor; run: object; status: 'pending_review' | 'auto_approved' | 'approved' | 'rejected' | 'executed' | 'failed'; tool_slug: string; updated_at: string; }; created_at: string; message: string; metadata: object[]; object: 'agent_alert'; run: { id: string; actions: agent_action[]; completed_at: string; created_at: string; definition: agent_definition; duration_ms: number; error_message: string; input: object[]; object: 'agent_run'; output: object[]; started_at: string; status: string; steps: object[]; total_input_tokens: number; total_output_tokens: number; trigger_type: string; triggered_by: light_actor; updated_at: string; }; severity: 'info' | 'warning' | 'urgent' | 'critical'; status: 'open' | 'acknowledged'; title: string; updated_at: string; }",
    markdown:
      "## retrieve\n\n`client.ai.alerts.retrieve(id: string, include?: 'run' | 'action'[]): { id: string; acknowledged_at: string; acknowledged_by: light_actor; action: agent_action; created_at: string; message: string; metadata: object[]; object: 'agent_alert'; run: agent_run; severity: 'info' | 'warning' | 'urgent' | 'critical'; status: 'open' | 'acknowledged'; title: string; updated_at: string; }`\n\n**get** `/v1/ai/alerts/{id}`\n\nReturns a single agent alert by ID.\n\n### Parameters\n\n- `id: string`\n\n- `include?: 'run' | 'action'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ id: string; acknowledged_at: string; acknowledged_by: { id: string; name: string; object: 'user|api_key|agent'; }; action: { id: string; created_at: string; description: string; entity: entity; error_message: string; executed_at: string; input: object[]; label: string; object: 'agent_action'; output: object[]; requires_review: boolean; reviewed_at: string; reviewed_by: light_actor; run: object; status: 'pending_review' | 'auto_approved' | 'approved' | 'rejected' | 'executed' | 'failed'; tool_slug: string; updated_at: string; }; created_at: string; message: string; metadata: object[]; object: 'agent_alert'; run: { id: string; actions: agent_action[]; completed_at: string; created_at: string; definition: agent_definition; duration_ms: number; error_message: string; input: object[]; object: 'agent_run'; output: object[]; started_at: string; status: string; steps: object[]; total_input_tokens: number; total_output_tokens: number; trigger_type: string; triggered_by: light_actor; updated_at: string; }; severity: 'info' | 'warning' | 'urgent' | 'critical'; status: 'open' | 'acknowledged'; title: string; updated_at: string; }`\n  AgentAlert represents an alert generated by an agent.\n\n  - `id: string`\n  - `acknowledged_at: string`\n  - `acknowledged_by: { id: string; name: string; object: 'user|api_key|agent'; }`\n  - `action: { id: string; created_at: string; description: string; entity: { id: string; object: string; }; error_message: string; executed_at: string; input: object[]; label: string; object: 'agent_action'; output: object[]; requires_review: boolean; reviewed_at: string; reviewed_by: { id: string; name: string; object: 'user|api_key|agent'; }; run: { id: string; object: 'agent_run'; }; status: 'pending_review' | 'auto_approved' | 'approved' | 'rejected' | 'executed' | 'failed'; tool_slug: string; updated_at: string; }`\n  - `created_at: string`\n  - `message: string`\n  - `metadata: object[]`\n  - `object: 'agent_alert'`\n  - `run: { id: string; actions: { id: string; created_at: string; description: string; entity: entity; error_message: string; executed_at: string; input: object[]; label: string; object: 'agent_action'; output: object[]; requires_review: boolean; reviewed_at: string; reviewed_by: light_actor; run: object; status: 'pending_review' | 'auto_approved' | 'approved' | 'rejected' | 'executed' | 'failed'; tool_slug: string; updated_at: string; }[]; completed_at: string; created_at: string; definition: { id: string; category_code: string; config: agent_definition_config; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: light_role; slug: string; status: 'active' | 'inactive'; tools: object[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }; duration_ms: number; error_message: string; input: object[]; object: 'agent_run'; output: object[]; started_at: string; status: string; steps: { id: string; actor: object; content: string; created_at: string; duration_ms: number; metadata: object[]; object: 'agent_run_step'; sequence: number; step_type: string; title: string; }[]; total_input_tokens: number; total_output_tokens: number; trigger_type: string; triggered_by: { id: string; name: string; object: 'user|api_key|agent'; }; updated_at: string; }`\n  - `severity: 'info' | 'warning' | 'urgent' | 'critical'`\n  - `status: 'open' | 'acknowledged'`\n  - `title: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst agentAlert = await client.ai.alerts.retrieve('id');\n\nconsole.log(agentAlert);\n```",
    perLanguage: {
      typescript: {
        method: 'client.ai.alerts.retrieve',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst agentAlert = await client.ai.alerts.retrieve('id');\n\nconsole.log(agentAlert.id);",
      },
      python: {
        method: 'ai.alerts.retrieve',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nagent_alert = client.ai.alerts.retrieve(\n    id="id",\n)\nprint(agent_alert.id)',
      },
      kotlin: {
        method: 'ai().alerts().retrieve',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.ai.alerts.AgentAlert\nimport com.augno.api.models.ai.alerts.AlertRetrieveParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val agentAlert: AgentAlert = client.ai().alerts().retrieve("id")\n}',
      },
      go: {
        method: 'client.AI.Alerts.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tagentAlert, err := client.AI.Alerts.Get(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.AIAlertGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", agentAlert.ID)\n}\n',
      },
      ruby: {
        method: 'ai.alerts.retrieve',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nagent_alert = augno_client.ai.alerts.retrieve("id")\n\nputs(agent_alert)',
      },
      csharp: {
        method: 'AI.Alerts.Retrieve',
        example:
          'AlertRetrieveParams parameters = new() { ID = "id" };\n\nvar agentAlert = await client.AI.Alerts.Retrieve(parameters);\n\nConsole.WriteLine(agentAlert);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/ai/alerts/$ID \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'acknowledge',
    endpoint: '/v1/ai/alerts/{id}/actions/acknowledge',
    httpMethod: 'post',
    summary: 'Acknowledge Agent Alert',
    description: 'Marks an agent alert as acknowledged.',
    stainlessPath: '(resource) ai.alerts.actions > (method) acknowledge',
    qualified: 'client.ai.alerts.actions.acknowledge',
    params: ['id: string;', "include?: 'run' | 'action'[];"],
    response:
      "{ id: string; acknowledged_at: string; acknowledged_by: { id: string; name: string; object: 'user|api_key|agent'; }; action: { id: string; created_at: string; description: string; entity: entity; error_message: string; executed_at: string; input: object[]; label: string; object: 'agent_action'; output: object[]; requires_review: boolean; reviewed_at: string; reviewed_by: light_actor; run: object; status: 'pending_review' | 'auto_approved' | 'approved' | 'rejected' | 'executed' | 'failed'; tool_slug: string; updated_at: string; }; created_at: string; message: string; metadata: object[]; object: 'agent_alert'; run: { id: string; actions: agent_action[]; completed_at: string; created_at: string; definition: agent_definition; duration_ms: number; error_message: string; input: object[]; object: 'agent_run'; output: object[]; started_at: string; status: string; steps: object[]; total_input_tokens: number; total_output_tokens: number; trigger_type: string; triggered_by: light_actor; updated_at: string; }; severity: 'info' | 'warning' | 'urgent' | 'critical'; status: 'open' | 'acknowledged'; title: string; updated_at: string; }",
    markdown:
      "## acknowledge\n\n`client.ai.alerts.actions.acknowledge(id: string, include?: 'run' | 'action'[]): { id: string; acknowledged_at: string; acknowledged_by: light_actor; action: agent_action; created_at: string; message: string; metadata: object[]; object: 'agent_alert'; run: agent_run; severity: 'info' | 'warning' | 'urgent' | 'critical'; status: 'open' | 'acknowledged'; title: string; updated_at: string; }`\n\n**post** `/v1/ai/alerts/{id}/actions/acknowledge`\n\nMarks an agent alert as acknowledged.\n\n### Parameters\n\n- `id: string`\n\n- `include?: 'run' | 'action'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ id: string; acknowledged_at: string; acknowledged_by: { id: string; name: string; object: 'user|api_key|agent'; }; action: { id: string; created_at: string; description: string; entity: entity; error_message: string; executed_at: string; input: object[]; label: string; object: 'agent_action'; output: object[]; requires_review: boolean; reviewed_at: string; reviewed_by: light_actor; run: object; status: 'pending_review' | 'auto_approved' | 'approved' | 'rejected' | 'executed' | 'failed'; tool_slug: string; updated_at: string; }; created_at: string; message: string; metadata: object[]; object: 'agent_alert'; run: { id: string; actions: agent_action[]; completed_at: string; created_at: string; definition: agent_definition; duration_ms: number; error_message: string; input: object[]; object: 'agent_run'; output: object[]; started_at: string; status: string; steps: object[]; total_input_tokens: number; total_output_tokens: number; trigger_type: string; triggered_by: light_actor; updated_at: string; }; severity: 'info' | 'warning' | 'urgent' | 'critical'; status: 'open' | 'acknowledged'; title: string; updated_at: string; }`\n  AgentAlert represents an alert generated by an agent.\n\n  - `id: string`\n  - `acknowledged_at: string`\n  - `acknowledged_by: { id: string; name: string; object: 'user|api_key|agent'; }`\n  - `action: { id: string; created_at: string; description: string; entity: { id: string; object: string; }; error_message: string; executed_at: string; input: object[]; label: string; object: 'agent_action'; output: object[]; requires_review: boolean; reviewed_at: string; reviewed_by: { id: string; name: string; object: 'user|api_key|agent'; }; run: { id: string; object: 'agent_run'; }; status: 'pending_review' | 'auto_approved' | 'approved' | 'rejected' | 'executed' | 'failed'; tool_slug: string; updated_at: string; }`\n  - `created_at: string`\n  - `message: string`\n  - `metadata: object[]`\n  - `object: 'agent_alert'`\n  - `run: { id: string; actions: { id: string; created_at: string; description: string; entity: entity; error_message: string; executed_at: string; input: object[]; label: string; object: 'agent_action'; output: object[]; requires_review: boolean; reviewed_at: string; reviewed_by: light_actor; run: object; status: 'pending_review' | 'auto_approved' | 'approved' | 'rejected' | 'executed' | 'failed'; tool_slug: string; updated_at: string; }[]; completed_at: string; created_at: string; definition: { id: string; category_code: string; config: agent_definition_config; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: light_role; slug: string; status: 'active' | 'inactive'; tools: object[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }; duration_ms: number; error_message: string; input: object[]; object: 'agent_run'; output: object[]; started_at: string; status: string; steps: { id: string; actor: object; content: string; created_at: string; duration_ms: number; metadata: object[]; object: 'agent_run_step'; sequence: number; step_type: string; title: string; }[]; total_input_tokens: number; total_output_tokens: number; trigger_type: string; triggered_by: { id: string; name: string; object: 'user|api_key|agent'; }; updated_at: string; }`\n  - `severity: 'info' | 'warning' | 'urgent' | 'critical'`\n  - `status: 'open' | 'acknowledged'`\n  - `title: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst agentAlert = await client.ai.alerts.actions.acknowledge('id');\n\nconsole.log(agentAlert);\n```",
    perLanguage: {
      typescript: {
        method: 'client.ai.alerts.actions.acknowledge',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst agentAlert = await client.ai.alerts.actions.acknowledge('id');\n\nconsole.log(agentAlert.id);",
      },
      python: {
        method: 'ai.alerts.actions.acknowledge',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nagent_alert = client.ai.alerts.actions.acknowledge(\n    id="id",\n)\nprint(agent_alert.id)',
      },
      kotlin: {
        method: 'ai().alerts().actions().acknowledge',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.ai.alerts.AgentAlert\nimport com.augno.api.models.ai.alerts.actions.ActionAcknowledgeParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val agentAlert: AgentAlert = client.ai().alerts().actions().acknowledge("id")\n}',
      },
      go: {
        method: 'client.AI.Alerts.Actions.Acknowledge',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tagentAlert, err := client.AI.Alerts.Actions.Acknowledge(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.AIAlertActionAcknowledgeParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", agentAlert.ID)\n}\n',
      },
      ruby: {
        method: 'ai.alerts.actions.acknowledge',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nagent_alert = augno_client.ai.alerts.actions.acknowledge("id")\n\nputs(agent_alert)',
      },
      csharp: {
        method: 'AI.Alerts.Actions.Acknowledge',
        example:
          'ActionAcknowledgeParams parameters = new() { ID = "id" };\n\nvar agentAlert = await client.AI.Alerts.Actions.Acknowledge(parameters);\n\nConsole.WriteLine(agentAlert);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/ai/alerts/$ID/actions/acknowledge \\\n    -X POST \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/ai/memories',
    httpMethod: 'get',
    summary: 'List Agent Memories',
    description: 'Returns a paginated list of agent memories for the current account.',
    stainlessPath: '(resource) ai.memories > (method) list',
    qualified: 'client.ai.memories.list',
    params: ['category?: string;', 'cursor?: string;', 'entity_type?: string;', 'limit?: number;'],
    response:
      "{ id: string; category: string; content: string; created_at: string; entity: { id: string; object: string; }; expires_at: string; importance: number; metadata: object[]; object: 'agent_memory'; updated_at: string; }",
    markdown:
      '## list\n\n`client.ai.memories.list(category?: string, cursor?: string, entity_type?: string, limit?: number): { id: string; category: string; content: string; created_at: string; entity: entity; expires_at: string; importance: number; metadata: object[]; object: \'agent_memory\'; updated_at: string; }`\n\n**get** `/v1/ai/memories`\n\nReturns a paginated list of agent memories for the current account.\n\n### Parameters\n\n- `category?: string`\n  Filter by memory category (e.g. "preference", "fact").\n\n- `cursor?: string`\n  Pagination cursor from a previous response.\n\n- `entity_type?: string`\n  Filter by entity type (e.g. "customer", "product").\n\n- `limit?: number`\n  Maximum number of records to return per page. Defaults to 100.\n\n### Returns\n\n- `{ id: string; category: string; content: string; created_at: string; entity: { id: string; object: string; }; expires_at: string; importance: number; metadata: object[]; object: \'agent_memory\'; updated_at: string; }`\n  AgentMemory represents a piece of agent memory stored for contextual recall.\n\n  - `id: string`\n  - `category: string`\n  - `content: string`\n  - `created_at: string`\n  - `entity: { id: string; object: string; }`\n  - `expires_at: string`\n  - `importance: number`\n  - `metadata: object[]`\n  - `object: \'agent_memory\'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from \'augno\';\n\nconst client = new AugnoClient();\n\n// Automatically fetches more pages as needed.\nfor await (const agentMemory of client.ai.memories.list()) {\n  console.log(agentMemory);\n}\n```',
    perLanguage: {
      typescript: {
        method: 'client.ai.memories.list',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const agentMemory of client.ai.memories.list()) {\n  console.log(agentMemory.id);\n}",
      },
      python: {
        method: 'ai.memories.list',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\npage = client.ai.memories.list()\npage = page.data[0]\nprint(page.id)',
      },
      kotlin: {
        method: 'ai().memories().list',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.ai.memories.MemoryListPage\nimport com.augno.api.models.ai.memories.MemoryListParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val page: MemoryListPage = client.ai().memories().list()\n}',
      },
      go: {
        method: 'client.AI.Memories.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.AI.Memories.List(context.TODO(), augno.AIMemoryListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      ruby: {
        method: 'ai.memories.list',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\npage = augno_client.ai.memories.list\n\nputs(page)',
      },
      csharp: {
        method: 'AI.Memories.List',
        example:
          'MemoryListParams parameters = new();\n\nvar page = await client.AI.Memories.List(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/ai/memories \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/ai/memories',
    httpMethod: 'post',
    summary: 'Create Agent Memory',
    description: 'Creates a new agent memory for the current account.',
    stainlessPath: '(resource) ai.memories > (method) create',
    qualified: 'client.ai.memories.create',
    params: [
      'category: string;',
      'content: string;',
      'importance: number;',
      'metadata: object[];',
      'entity_id?: string;',
      'entity_type?: string;',
      'expires_at?: string;',
    ],
    response:
      "{ id: string; category: string; content: string; created_at: string; entity: { id: string; object: string; }; expires_at: string; importance: number; metadata: object[]; object: 'agent_memory'; updated_at: string; }",
    markdown:
      "## create\n\n`client.ai.memories.create(category: string, content: string, importance: number, metadata: object[], entity_id?: string, entity_type?: string, expires_at?: string): { id: string; category: string; content: string; created_at: string; entity: entity; expires_at: string; importance: number; metadata: object[]; object: 'agent_memory'; updated_at: string; }`\n\n**post** `/v1/ai/memories`\n\nCreates a new agent memory for the current account.\n\n### Parameters\n\n- `category: string`\n  The memory category (e.g. \"preference\", \"fact\", \"instruction\").\n\n- `content: string`\n  The text content of the memory.\n\n- `importance: number`\n  A numeric importance score between 0 and 1.\n\n- `metadata: object[]`\n  Optional JSON metadata associated with this memory.\n\n- `entity_id?: string`\n  The ID of the entity this memory is scoped to.\n\n- `entity_type?: string`\n  The type of entity this memory is scoped to (e.g. \"customer\", \"product\").\n\n- `expires_at?: string`\n  An ISO 8601 timestamp after which this memory expires.\n\n### Returns\n\n- `{ id: string; category: string; content: string; created_at: string; entity: { id: string; object: string; }; expires_at: string; importance: number; metadata: object[]; object: 'agent_memory'; updated_at: string; }`\n  AgentMemory represents a piece of agent memory stored for contextual recall.\n\n  - `id: string`\n  - `category: string`\n  - `content: string`\n  - `created_at: string`\n  - `entity: { id: string; object: string; }`\n  - `expires_at: string`\n  - `importance: number`\n  - `metadata: object[]`\n  - `object: 'agent_memory'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst agentMemory = await client.ai.memories.create({\n  category: 'preference',\n  content: 'Customer prefers express shipping on all orders.',\n  importance: 0.8,\n  metadata: [{}],\n});\n\nconsole.log(agentMemory);\n```",
    perLanguage: {
      typescript: {
        method: 'client.ai.memories.create',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst agentMemory = await client.ai.memories.create({\n  category: 'preference',\n  content: 'Customer prefers express shipping on all orders.',\n  importance: 0.8,\n  metadata: null,\n});\n\nconsole.log(agentMemory.id);",
      },
      python: {
        method: 'ai.memories.create',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nagent_memory = client.ai.memories.create(\n    category="preference",\n    content="Customer prefers express shipping on all orders.",\n    importance=0.8,\n    metadata=None,\n)\nprint(agent_memory.id)',
      },
      kotlin: {
        method: 'ai().memories().create',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.core.JsonValue\nimport com.augno.api.models.ai.memories.AgentMemory\nimport com.augno.api.models.ai.memories.MemoryCreateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: MemoryCreateParams = MemoryCreateParams.builder()\n        .category("preference")\n        .content("Customer prefers express shipping on all orders.")\n        .importance(0.8)\n        .addMetadata(JsonValue.from(mapOf<String, Any>()))\n        .build()\n    val agentMemory: AgentMemory = client.ai().memories().create(params)\n}',
      },
      go: {
        method: 'client.AI.Memories.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tagentMemory, err := client.AI.Memories.New(context.TODO(), augno.AIMemoryNewParams{\n\t\tCategory:   "preference",\n\t\tContent:    "Customer prefers express shipping on all orders.",\n\t\tImportance: 0.8,\n\t\tMetadata:   nil,\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", agentMemory.ID)\n}\n',
      },
      ruby: {
        method: 'ai.memories.create',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nagent_memory = augno_client.ai.memories.create(\n  category: "preference",\n  content: "Customer prefers express shipping on all orders.",\n  importance: 0.8,\n  metadata: [{}]\n)\n\nputs(agent_memory)',
      },
      csharp: {
        method: 'AI.Memories.Create',
        example:
          'MemoryCreateParams parameters = new()\n{\n    Category = "preference",\n    Content = "Customer prefers express shipping on all orders.",\n    Importance = 0.8,\n    Metadata =\n    [\n        JsonSerializer.Deserialize<JsonElement>("{}")\n    ],\n};\n\nvar agentMemory = await client.AI.Memories.Create(parameters);\n\nConsole.WriteLine(agentMemory);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/ai/memories \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "category": "preference",\n          "content": "Customer prefers express shipping on all orders.",\n          "importance": 0.8,\n          "metadata": [\n            {}\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/ai/memories/{id}',
    httpMethod: 'delete',
    summary: 'Delete Agent Memory',
    description: 'Deletes an agent memory.',
    stainlessPath: '(resource) ai.memories > (method) delete',
    qualified: 'client.ai.memories.delete',
    params: ['id: string;'],
    response: '{  }',
    markdown:
      "## delete\n\n`client.ai.memories.delete(id: string): {  }`\n\n**delete** `/v1/ai/memories/{id}`\n\nDeletes an agent memory.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{  }`\n\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst memory = await client.ai.memories.delete('id');\n\nconsole.log(memory);\n```",
    perLanguage: {
      typescript: {
        method: 'client.ai.memories.delete',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst memory = await client.ai.memories.delete('id');\n\nconsole.log(memory);",
      },
      python: {
        method: 'ai.memories.delete',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nmemory = client.ai.memories.delete(\n    "id",\n)\nprint(memory)',
      },
      kotlin: {
        method: 'ai().memories().delete',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.ai.memories.MemoryDeleteParams\nimport com.augno.api.models.ai.memories.MemoryDeleteResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val memory: MemoryDeleteResponse = client.ai().memories().delete("id")\n}',
      },
      go: {
        method: 'client.AI.Memories.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tmemory, err := client.AI.Memories.Delete(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", memory)\n}\n',
      },
      ruby: {
        method: 'ai.memories.delete',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nmemory = augno_client.ai.memories.delete("id")\n\nputs(memory)',
      },
      csharp: {
        method: 'AI.Memories.Delete',
        example:
          'MemoryDeleteParams parameters = new() { ID = "id" };\n\nvar memory = await client.AI.Memories.Delete(parameters);\n\nConsole.WriteLine(memory);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/ai/memories/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/ai/memories/{id}',
    httpMethod: 'get',
    summary: 'Get Agent Memory',
    description: 'Returns a single agent memory by ID.',
    stainlessPath: '(resource) ai.memories > (method) retrieve',
    qualified: 'client.ai.memories.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; category: string; content: string; created_at: string; entity: { id: string; object: string; }; expires_at: string; importance: number; metadata: object[]; object: 'agent_memory'; updated_at: string; }",
    markdown:
      "## retrieve\n\n`client.ai.memories.retrieve(id: string): { id: string; category: string; content: string; created_at: string; entity: entity; expires_at: string; importance: number; metadata: object[]; object: 'agent_memory'; updated_at: string; }`\n\n**get** `/v1/ai/memories/{id}`\n\nReturns a single agent memory by ID.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; category: string; content: string; created_at: string; entity: { id: string; object: string; }; expires_at: string; importance: number; metadata: object[]; object: 'agent_memory'; updated_at: string; }`\n  AgentMemory represents a piece of agent memory stored for contextual recall.\n\n  - `id: string`\n  - `category: string`\n  - `content: string`\n  - `created_at: string`\n  - `entity: { id: string; object: string; }`\n  - `expires_at: string`\n  - `importance: number`\n  - `metadata: object[]`\n  - `object: 'agent_memory'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst agentMemory = await client.ai.memories.retrieve('id');\n\nconsole.log(agentMemory);\n```",
    perLanguage: {
      typescript: {
        method: 'client.ai.memories.retrieve',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst agentMemory = await client.ai.memories.retrieve('id');\n\nconsole.log(agentMemory.id);",
      },
      python: {
        method: 'ai.memories.retrieve',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nagent_memory = client.ai.memories.retrieve(\n    "id",\n)\nprint(agent_memory.id)',
      },
      kotlin: {
        method: 'ai().memories().retrieve',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.ai.memories.AgentMemory\nimport com.augno.api.models.ai.memories.MemoryRetrieveParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val agentMemory: AgentMemory = client.ai().memories().retrieve("id")\n}',
      },
      go: {
        method: 'client.AI.Memories.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tagentMemory, err := client.AI.Memories.Get(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", agentMemory.ID)\n}\n',
      },
      ruby: {
        method: 'ai.memories.retrieve',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nagent_memory = augno_client.ai.memories.retrieve("id")\n\nputs(agent_memory)',
      },
      csharp: {
        method: 'AI.Memories.Retrieve',
        example:
          'MemoryRetrieveParams parameters = new() { ID = "id" };\n\nvar agentMemory = await client.AI.Memories.Retrieve(parameters);\n\nConsole.WriteLine(agentMemory);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/ai/memories/$ID \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/ai/memories/{id}',
    httpMethod: 'patch',
    summary: 'Update Agent Memory',
    description: 'Updates an existing agent memory.',
    stainlessPath: '(resource) ai.memories > (method) update',
    qualified: 'client.ai.memories.update',
    params: [
      'id: string;',
      'category: string;',
      'content: string;',
      'importance: number;',
      'metadata: object[];',
      'entity_id?: string;',
      'entity_type?: string;',
      'expires_at?: string;',
    ],
    response:
      "{ id: string; category: string; content: string; created_at: string; entity: { id: string; object: string; }; expires_at: string; importance: number; metadata: object[]; object: 'agent_memory'; updated_at: string; }",
    markdown:
      "## update\n\n`client.ai.memories.update(id: string, category: string, content: string, importance: number, metadata: object[], entity_id?: string, entity_type?: string, expires_at?: string): { id: string; category: string; content: string; created_at: string; entity: entity; expires_at: string; importance: number; metadata: object[]; object: 'agent_memory'; updated_at: string; }`\n\n**patch** `/v1/ai/memories/{id}`\n\nUpdates an existing agent memory.\n\n### Parameters\n\n- `id: string`\n\n- `category: string`\n  The memory category (e.g. \"preference\", \"fact\", \"instruction\").\n\n- `content: string`\n  The text content of the memory.\n\n- `importance: number`\n  A numeric importance score between 0 and 1.\n\n- `metadata: object[]`\n  Optional JSON metadata associated with this memory.\n\n- `entity_id?: string`\n  The ID of the entity this memory is scoped to.\n\n- `entity_type?: string`\n  The type of entity this memory is scoped to (e.g. \"customer\", \"product\").\n\n- `expires_at?: string`\n  An ISO 8601 timestamp after which this memory expires.\n\n### Returns\n\n- `{ id: string; category: string; content: string; created_at: string; entity: { id: string; object: string; }; expires_at: string; importance: number; metadata: object[]; object: 'agent_memory'; updated_at: string; }`\n  AgentMemory represents a piece of agent memory stored for contextual recall.\n\n  - `id: string`\n  - `category: string`\n  - `content: string`\n  - `created_at: string`\n  - `entity: { id: string; object: string; }`\n  - `expires_at: string`\n  - `importance: number`\n  - `metadata: object[]`\n  - `object: 'agent_memory'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst agentMemory = await client.ai.memories.update('id', {\n  category: 'category',\n  content: 'Customer prefers next-day shipping on all orders.',\n  importance: 0.9,\n  metadata: [{}],\n});\n\nconsole.log(agentMemory);\n```",
    perLanguage: {
      typescript: {
        method: 'client.ai.memories.update',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst agentMemory = await client.ai.memories.update('id', {\n  category: 'category',\n  content: 'Customer prefers next-day shipping on all orders.',\n  importance: 0.9,\n  metadata: [{}],\n});\n\nconsole.log(agentMemory.id);",
      },
      python: {
        method: 'ai.memories.update',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nagent_memory = client.ai.memories.update(\n    id="id",\n    category="category",\n    content="Customer prefers next-day shipping on all orders.",\n    importance=0.9,\n    metadata=[{}],\n)\nprint(agent_memory.id)',
      },
      kotlin: {
        method: 'ai().memories().update',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.core.JsonValue\nimport com.augno.api.models.ai.memories.AgentMemory\nimport com.augno.api.models.ai.memories.MemoryUpdateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: MemoryUpdateParams = MemoryUpdateParams.builder()\n        .id("id")\n        .category("category")\n        .content("Customer prefers next-day shipping on all orders.")\n        .importance(0.9)\n        .addMetadata(JsonValue.from(mapOf<String, Any>()))\n        .build()\n    val agentMemory: AgentMemory = client.ai().memories().update(params)\n}',
      },
      go: {
        method: 'client.AI.Memories.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tagentMemory, err := client.AI.Memories.Update(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.AIMemoryUpdateParams{\n\t\t\tCategory:   "category",\n\t\t\tContent:    "Customer prefers next-day shipping on all orders.",\n\t\t\tImportance: 0.9,\n\t\t\tMetadata:   []any{map[string]any{}},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", agentMemory.ID)\n}\n',
      },
      ruby: {
        method: 'ai.memories.update',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nagent_memory = augno_client.ai.memories.update(\n  "id",\n  category: "category",\n  content: "Customer prefers next-day shipping on all orders.",\n  importance: 0.9,\n  metadata: [{}]\n)\n\nputs(agent_memory)',
      },
      csharp: {
        method: 'AI.Memories.Update',
        example:
          'MemoryUpdateParams parameters = new()\n{\n    ID = "id",\n    Category = "category",\n    Content = "Customer prefers next-day shipping on all orders.",\n    Importance = 0.9,\n    Metadata =\n    [\n        JsonSerializer.Deserialize<JsonElement>("{}")\n    ],\n};\n\nvar agentMemory = await client.AI.Memories.Update(parameters);\n\nConsole.WriteLine(agentMemory);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/ai/memories/$ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "category": "category",\n          "content": "Customer prefers next-day shipping on all orders.",\n          "importance": 0.9,\n          "metadata": [\n            {}\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/ai/runs',
    httpMethod: 'get',
    summary: 'List Runs',
    description: 'Returns a paginated list of agent runs for the current account.',
    stainlessPath: '(resource) ai.runs > (method) list',
    qualified: 'client.ai.runs.list',
    params: [
      'agent_definition_id?: string;',
      'cursor?: string;',
      "include?: 'definition' | 'actions' | 'definition.config' | 'definition.tools' | 'definition.role'[];",
      'limit?: number;',
      'status_code?: string;',
    ],
    response:
      "{ id: string; actions: object[]; completed_at: string; created_at: string; definition: object; duration_ms: number; error_message: string; input: object[]; object: 'agent_run'; output: object[]; started_at: string; status: string; steps: { id: string; actor: light_actor; content: string; created_at: string; duration_ms: number; metadata: object[]; object: 'agent_run_step'; sequence: number; step_type: string; title: string; }[]; total_input_tokens: number; total_output_tokens: number; trigger_type: string; triggered_by: object; updated_at: string; }",
    markdown:
      "## list\n\n`client.ai.runs.list(agent_definition_id?: string, cursor?: string, include?: 'definition' | 'actions' | 'definition.config' | 'definition.tools' | 'definition.role'[], limit?: number, status_code?: string): { id: string; actions: agent_action[]; completed_at: string; created_at: string; definition: agent_definition; duration_ms: number; error_message: string; input: object[]; object: 'agent_run'; output: object[]; started_at: string; status: string; steps: object[]; total_input_tokens: number; total_output_tokens: number; trigger_type: string; triggered_by: light_actor; updated_at: string; }`\n\n**get** `/v1/ai/runs`\n\nReturns a paginated list of agent runs for the current account.\n\n### Parameters\n\n- `agent_definition_id?: string`\n  Filter by agent definition ID.\n\n- `cursor?: string`\n  Pagination cursor from a previous response.\n\n- `include?: 'definition' | 'actions' | 'definition.config' | 'definition.tools' | 'definition.role'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n- `limit?: number`\n  Maximum number of records to return per page. Defaults to 100.\n\n- `status_code?: string`\n  Filter by run status code (e.g. \"running\", \"completed\", \"failed\").\n\n### Returns\n\n- `{ id: string; actions: { id: string; created_at: string; description: string; entity: entity; error_message: string; executed_at: string; input: object[]; label: string; object: 'agent_action'; output: object[]; requires_review: boolean; reviewed_at: string; reviewed_by: light_actor; run: object; status: 'pending_review' | 'auto_approved' | 'approved' | 'rejected' | 'executed' | 'failed'; tool_slug: string; updated_at: string; }[]; completed_at: string; created_at: string; definition: { id: string; category_code: string; config: agent_definition_config; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: light_role; slug: string; status: 'active' | 'inactive'; tools: object[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }; duration_ms: number; error_message: string; input: object[]; object: 'agent_run'; output: object[]; started_at: string; status: string; steps: { id: string; actor: object; content: string; created_at: string; duration_ms: number; metadata: object[]; object: 'agent_run_step'; sequence: number; step_type: string; title: string; }[]; total_input_tokens: number; total_output_tokens: number; trigger_type: string; triggered_by: { id: string; name: string; object: 'user|api_key|agent'; }; updated_at: string; }`\n  AgentRun represents an execution instance of an agent.\n\n  - `id: string`\n  - `actions: { id: string; created_at: string; description: string; entity: { id: string; object: string; }; error_message: string; executed_at: string; input: object[]; label: string; object: 'agent_action'; output: object[]; requires_review: boolean; reviewed_at: string; reviewed_by: { id: string; name: string; object: 'user|api_key|agent'; }; run: { id: string; object: 'agent_run'; }; status: 'pending_review' | 'auto_approved' | 'approved' | 'rejected' | 'executed' | 'failed'; tool_slug: string; updated_at: string; }[]`\n  - `completed_at: string`\n  - `created_at: string`\n  - `definition: { id: string; category_code: string; config: { model: string; provider: string; system_prompt: string; temperature: number; trigger_config: object; }; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; slug: string; status: 'active' | 'inactive'; tools: { id: string; config: object[]; object: 'agent_definition_tool'; require_review: boolean; sort_order: number; tool: object; }[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }`\n  - `duration_ms: number`\n  - `error_message: string`\n  - `input: object[]`\n  - `object: 'agent_run'`\n  - `output: object[]`\n  - `started_at: string`\n  - `status: string`\n  - `steps: { id: string; actor: { id: string; name: string; object: 'user|api_key|agent'; }; content: string; created_at: string; duration_ms: number; metadata: object[]; object: 'agent_run_step'; sequence: number; step_type: string; title: string; }[]`\n  - `total_input_tokens: number`\n  - `total_output_tokens: number`\n  - `trigger_type: string`\n  - `triggered_by: { id: string; name: string; object: 'user|api_key|agent'; }`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\n// Automatically fetches more pages as needed.\nfor await (const agentRun of client.ai.runs.list()) {\n  console.log(agentRun);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.ai.runs.list',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const agentRun of client.ai.runs.list()) {\n  console.log(agentRun.id);\n}",
      },
      python: {
        method: 'ai.runs.list',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\npage = client.ai.runs.list()\npage = page.data[0]\nprint(page.id)',
      },
      kotlin: {
        method: 'ai().runs().list',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.ai.runs.RunListPage\nimport com.augno.api.models.ai.runs.RunListParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val page: RunListPage = client.ai().runs().list()\n}',
      },
      go: {
        method: 'client.AI.Runs.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.AI.Runs.List(context.TODO(), augno.AIRunListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      ruby: {
        method: 'ai.runs.list',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\npage = augno_client.ai.runs.list\n\nputs(page)',
      },
      csharp: {
        method: 'AI.Runs.List',
        example:
          'RunListParams parameters = new();\n\nvar page = await client.AI.Runs.List(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      http: {
        example: 'curl https://api.augno.com/v1/ai/runs \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'trigger',
    endpoint: '/v1/ai/runs',
    httpMethod: 'post',
    summary: 'Trigger Run',
    description: 'Triggers a new agent run for the specified agent definition.',
    stainlessPath: '(resource) ai.runs > (method) trigger',
    qualified: 'client.ai.runs.trigger',
    params: [
      'agent_definition_id: string;',
      'input: string;',
      "include?: 'actions' | 'definition' | 'definition.config' | 'definition.tools' | 'definition.role'[];",
    ],
    response:
      "{ id: string; actions: object[]; completed_at: string; created_at: string; definition: object; duration_ms: number; error_message: string; input: object[]; object: 'agent_run'; output: object[]; started_at: string; status: string; steps: { id: string; actor: light_actor; content: string; created_at: string; duration_ms: number; metadata: object[]; object: 'agent_run_step'; sequence: number; step_type: string; title: string; }[]; total_input_tokens: number; total_output_tokens: number; trigger_type: string; triggered_by: object; updated_at: string; }",
    markdown:
      "## trigger\n\n`client.ai.runs.trigger(agent_definition_id: string, input: string, include?: 'actions' | 'definition' | 'definition.config' | 'definition.tools' | 'definition.role'[]): { id: string; actions: agent_action[]; completed_at: string; created_at: string; definition: agent_definition; duration_ms: number; error_message: string; input: object[]; object: 'agent_run'; output: object[]; started_at: string; status: string; steps: object[]; total_input_tokens: number; total_output_tokens: number; trigger_type: string; triggered_by: light_actor; updated_at: string; }`\n\n**post** `/v1/ai/runs`\n\nTriggers a new agent run for the specified agent definition.\n\n### Parameters\n\n- `agent_definition_id: string`\n  The ID of the agent definition to run.\n\n- `input: string`\n  Optional input text to provide to the agent at the start of the run.\n\n- `include?: 'actions' | 'definition' | 'definition.config' | 'definition.tools' | 'definition.role'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ id: string; actions: { id: string; created_at: string; description: string; entity: entity; error_message: string; executed_at: string; input: object[]; label: string; object: 'agent_action'; output: object[]; requires_review: boolean; reviewed_at: string; reviewed_by: light_actor; run: object; status: 'pending_review' | 'auto_approved' | 'approved' | 'rejected' | 'executed' | 'failed'; tool_slug: string; updated_at: string; }[]; completed_at: string; created_at: string; definition: { id: string; category_code: string; config: agent_definition_config; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: light_role; slug: string; status: 'active' | 'inactive'; tools: object[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }; duration_ms: number; error_message: string; input: object[]; object: 'agent_run'; output: object[]; started_at: string; status: string; steps: { id: string; actor: object; content: string; created_at: string; duration_ms: number; metadata: object[]; object: 'agent_run_step'; sequence: number; step_type: string; title: string; }[]; total_input_tokens: number; total_output_tokens: number; trigger_type: string; triggered_by: { id: string; name: string; object: 'user|api_key|agent'; }; updated_at: string; }`\n  AgentRun represents an execution instance of an agent.\n\n  - `id: string`\n  - `actions: { id: string; created_at: string; description: string; entity: { id: string; object: string; }; error_message: string; executed_at: string; input: object[]; label: string; object: 'agent_action'; output: object[]; requires_review: boolean; reviewed_at: string; reviewed_by: { id: string; name: string; object: 'user|api_key|agent'; }; run: { id: string; object: 'agent_run'; }; status: 'pending_review' | 'auto_approved' | 'approved' | 'rejected' | 'executed' | 'failed'; tool_slug: string; updated_at: string; }[]`\n  - `completed_at: string`\n  - `created_at: string`\n  - `definition: { id: string; category_code: string; config: { model: string; provider: string; system_prompt: string; temperature: number; trigger_config: object; }; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; slug: string; status: 'active' | 'inactive'; tools: { id: string; config: object[]; object: 'agent_definition_tool'; require_review: boolean; sort_order: number; tool: object; }[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }`\n  - `duration_ms: number`\n  - `error_message: string`\n  - `input: object[]`\n  - `object: 'agent_run'`\n  - `output: object[]`\n  - `started_at: string`\n  - `status: string`\n  - `steps: { id: string; actor: { id: string; name: string; object: 'user|api_key|agent'; }; content: string; created_at: string; duration_ms: number; metadata: object[]; object: 'agent_run_step'; sequence: number; step_type: string; title: string; }[]`\n  - `total_input_tokens: number`\n  - `total_output_tokens: number`\n  - `trigger_type: string`\n  - `triggered_by: { id: string; name: string; object: 'user|api_key|agent'; }`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst agentRun = await client.ai.runs.trigger({ agent_definition_id: 'agdf_01jm4r6700f8nwq3v5hx2d9ktp', input: 'Process the latest incoming orders.' });\n\nconsole.log(agentRun);\n```",
    perLanguage: {
      typescript: {
        method: 'client.ai.runs.trigger',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst agentRun = await client.ai.runs.trigger({\n  agent_definition_id: 'agdf_01jm4r6700f8nwq3v5hx2d9ktp',\n  input: 'Process the latest incoming orders.',\n});\n\nconsole.log(agentRun.id);",
      },
      python: {
        method: 'ai.runs.trigger',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nagent_run = client.ai.runs.trigger(\n    agent_definition_id="agdf_01jm4r6700f8nwq3v5hx2d9ktp",\n    input="Process the latest incoming orders.",\n)\nprint(agent_run.id)',
      },
      kotlin: {
        method: 'ai().runs().trigger',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.ai.runs.AgentRun\nimport com.augno.api.models.ai.runs.RunTriggerParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: RunTriggerParams = RunTriggerParams.builder()\n        .agentDefinitionId("agdf_01jm4r6700f8nwq3v5hx2d9ktp")\n        .input("Process the latest incoming orders.")\n        .build()\n    val agentRun: AgentRun = client.ai().runs().trigger(params)\n}',
      },
      go: {
        method: 'client.AI.Runs.Trigger',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tagentRun, err := client.AI.Runs.Trigger(context.TODO(), augno.AIRunTriggerParams{\n\t\tAgentDefinitionID: "agdf_01jm4r6700f8nwq3v5hx2d9ktp",\n\t\tInput:             "Process the latest incoming orders.",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", agentRun.ID)\n}\n',
      },
      ruby: {
        method: 'ai.runs.trigger',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nagent_run = augno_client.ai.runs.trigger(\n  agent_definition_id: "agdf_01jm4r6700f8nwq3v5hx2d9ktp",\n  input: "Process the latest incoming orders."\n)\n\nputs(agent_run)',
      },
      csharp: {
        method: 'AI.Runs.Trigger',
        example:
          'RunTriggerParams parameters = new()\n{\n    AgentDefinitionID = "agdf_01jm4r6700f8nwq3v5hx2d9ktp",\n    Input = "Process the latest incoming orders.",\n};\n\nvar agentRun = await client.AI.Runs.Trigger(parameters);\n\nConsole.WriteLine(agentRun);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/ai/runs \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "agent_definition_id": "agdf_01jm4r6700f8nwq3v5hx2d9ktp",\n          "input": "Process the latest incoming orders."\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/ai/runs/{id}',
    httpMethod: 'get',
    summary: 'Get Run',
    description: 'Returns a single agent run with optional actions and definition.',
    stainlessPath: '(resource) ai.runs > (method) retrieve',
    qualified: 'client.ai.runs.retrieve',
    params: [
      'id: string;',
      "include?: 'actions' | 'definition' | 'steps' | 'definition.config' | 'definition.tools' | 'definition.role'[];",
    ],
    response:
      "{ id: string; actions: object[]; completed_at: string; created_at: string; definition: object; duration_ms: number; error_message: string; input: object[]; object: 'agent_run'; output: object[]; started_at: string; status: string; steps: { id: string; actor: light_actor; content: string; created_at: string; duration_ms: number; metadata: object[]; object: 'agent_run_step'; sequence: number; step_type: string; title: string; }[]; total_input_tokens: number; total_output_tokens: number; trigger_type: string; triggered_by: object; updated_at: string; }",
    markdown:
      "## retrieve\n\n`client.ai.runs.retrieve(id: string, include?: 'actions' | 'definition' | 'steps' | 'definition.config' | 'definition.tools' | 'definition.role'[]): { id: string; actions: agent_action[]; completed_at: string; created_at: string; definition: agent_definition; duration_ms: number; error_message: string; input: object[]; object: 'agent_run'; output: object[]; started_at: string; status: string; steps: object[]; total_input_tokens: number; total_output_tokens: number; trigger_type: string; triggered_by: light_actor; updated_at: string; }`\n\n**get** `/v1/ai/runs/{id}`\n\nReturns a single agent run with optional actions and definition.\n\n### Parameters\n\n- `id: string`\n\n- `include?: 'actions' | 'definition' | 'steps' | 'definition.config' | 'definition.tools' | 'definition.role'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ id: string; actions: { id: string; created_at: string; description: string; entity: entity; error_message: string; executed_at: string; input: object[]; label: string; object: 'agent_action'; output: object[]; requires_review: boolean; reviewed_at: string; reviewed_by: light_actor; run: object; status: 'pending_review' | 'auto_approved' | 'approved' | 'rejected' | 'executed' | 'failed'; tool_slug: string; updated_at: string; }[]; completed_at: string; created_at: string; definition: { id: string; category_code: string; config: agent_definition_config; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: light_role; slug: string; status: 'active' | 'inactive'; tools: object[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }; duration_ms: number; error_message: string; input: object[]; object: 'agent_run'; output: object[]; started_at: string; status: string; steps: { id: string; actor: object; content: string; created_at: string; duration_ms: number; metadata: object[]; object: 'agent_run_step'; sequence: number; step_type: string; title: string; }[]; total_input_tokens: number; total_output_tokens: number; trigger_type: string; triggered_by: { id: string; name: string; object: 'user|api_key|agent'; }; updated_at: string; }`\n  AgentRun represents an execution instance of an agent.\n\n  - `id: string`\n  - `actions: { id: string; created_at: string; description: string; entity: { id: string; object: string; }; error_message: string; executed_at: string; input: object[]; label: string; object: 'agent_action'; output: object[]; requires_review: boolean; reviewed_at: string; reviewed_by: { id: string; name: string; object: 'user|api_key|agent'; }; run: { id: string; object: 'agent_run'; }; status: 'pending_review' | 'auto_approved' | 'approved' | 'rejected' | 'executed' | 'failed'; tool_slug: string; updated_at: string; }[]`\n  - `completed_at: string`\n  - `created_at: string`\n  - `definition: { id: string; category_code: string; config: { model: string; provider: string; system_prompt: string; temperature: number; trigger_config: object; }; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; slug: string; status: 'active' | 'inactive'; tools: { id: string; config: object[]; object: 'agent_definition_tool'; require_review: boolean; sort_order: number; tool: object; }[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }`\n  - `duration_ms: number`\n  - `error_message: string`\n  - `input: object[]`\n  - `object: 'agent_run'`\n  - `output: object[]`\n  - `started_at: string`\n  - `status: string`\n  - `steps: { id: string; actor: { id: string; name: string; object: 'user|api_key|agent'; }; content: string; created_at: string; duration_ms: number; metadata: object[]; object: 'agent_run_step'; sequence: number; step_type: string; title: string; }[]`\n  - `total_input_tokens: number`\n  - `total_output_tokens: number`\n  - `trigger_type: string`\n  - `triggered_by: { id: string; name: string; object: 'user|api_key|agent'; }`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst agentRun = await client.ai.runs.retrieve('id');\n\nconsole.log(agentRun);\n```",
    perLanguage: {
      typescript: {
        method: 'client.ai.runs.retrieve',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst agentRun = await client.ai.runs.retrieve('id');\n\nconsole.log(agentRun.id);",
      },
      python: {
        method: 'ai.runs.retrieve',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nagent_run = client.ai.runs.retrieve(\n    id="id",\n)\nprint(agent_run.id)',
      },
      kotlin: {
        method: 'ai().runs().retrieve',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.ai.runs.AgentRun\nimport com.augno.api.models.ai.runs.RunRetrieveParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val agentRun: AgentRun = client.ai().runs().retrieve("id")\n}',
      },
      go: {
        method: 'client.AI.Runs.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tagentRun, err := client.AI.Runs.Get(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.AIRunGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", agentRun.ID)\n}\n',
      },
      ruby: {
        method: 'ai.runs.retrieve',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nagent_run = augno_client.ai.runs.retrieve("id")\n\nputs(agent_run)',
      },
      csharp: {
        method: 'AI.Runs.Retrieve',
        example:
          'RunRetrieveParams parameters = new() { ID = "id" };\n\nvar agentRun = await client.AI.Runs.Retrieve(parameters);\n\nConsole.WriteLine(agentRun);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/ai/runs/$ID \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'cancel',
    endpoint: '/v1/ai/runs/{id}/actions/cancel',
    httpMethod: 'post',
    summary: 'Cancel Run',
    description: 'Cancels a running or pending agent run.',
    stainlessPath: '(resource) ai.runs.actions > (method) cancel',
    qualified: 'client.ai.runs.actions.cancel',
    params: [
      'id: string;',
      "include?: 'actions' | 'definition' | 'definition.config' | 'definition.tools' | 'definition.role'[];",
    ],
    response:
      "{ id: string; actions: object[]; completed_at: string; created_at: string; definition: object; duration_ms: number; error_message: string; input: object[]; object: 'agent_run'; output: object[]; started_at: string; status: string; steps: { id: string; actor: light_actor; content: string; created_at: string; duration_ms: number; metadata: object[]; object: 'agent_run_step'; sequence: number; step_type: string; title: string; }[]; total_input_tokens: number; total_output_tokens: number; trigger_type: string; triggered_by: object; updated_at: string; }",
    markdown:
      "## cancel\n\n`client.ai.runs.actions.cancel(id: string, include?: 'actions' | 'definition' | 'definition.config' | 'definition.tools' | 'definition.role'[]): { id: string; actions: agent_action[]; completed_at: string; created_at: string; definition: agent_definition; duration_ms: number; error_message: string; input: object[]; object: 'agent_run'; output: object[]; started_at: string; status: string; steps: object[]; total_input_tokens: number; total_output_tokens: number; trigger_type: string; triggered_by: light_actor; updated_at: string; }`\n\n**post** `/v1/ai/runs/{id}/actions/cancel`\n\nCancels a running or pending agent run.\n\n### Parameters\n\n- `id: string`\n\n- `include?: 'actions' | 'definition' | 'definition.config' | 'definition.tools' | 'definition.role'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ id: string; actions: { id: string; created_at: string; description: string; entity: entity; error_message: string; executed_at: string; input: object[]; label: string; object: 'agent_action'; output: object[]; requires_review: boolean; reviewed_at: string; reviewed_by: light_actor; run: object; status: 'pending_review' | 'auto_approved' | 'approved' | 'rejected' | 'executed' | 'failed'; tool_slug: string; updated_at: string; }[]; completed_at: string; created_at: string; definition: { id: string; category_code: string; config: agent_definition_config; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: light_role; slug: string; status: 'active' | 'inactive'; tools: object[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }; duration_ms: number; error_message: string; input: object[]; object: 'agent_run'; output: object[]; started_at: string; status: string; steps: { id: string; actor: object; content: string; created_at: string; duration_ms: number; metadata: object[]; object: 'agent_run_step'; sequence: number; step_type: string; title: string; }[]; total_input_tokens: number; total_output_tokens: number; trigger_type: string; triggered_by: { id: string; name: string; object: 'user|api_key|agent'; }; updated_at: string; }`\n  AgentRun represents an execution instance of an agent.\n\n  - `id: string`\n  - `actions: { id: string; created_at: string; description: string; entity: { id: string; object: string; }; error_message: string; executed_at: string; input: object[]; label: string; object: 'agent_action'; output: object[]; requires_review: boolean; reviewed_at: string; reviewed_by: { id: string; name: string; object: 'user|api_key|agent'; }; run: { id: string; object: 'agent_run'; }; status: 'pending_review' | 'auto_approved' | 'approved' | 'rejected' | 'executed' | 'failed'; tool_slug: string; updated_at: string; }[]`\n  - `completed_at: string`\n  - `created_at: string`\n  - `definition: { id: string; category_code: string; config: { model: string; provider: string; system_prompt: string; temperature: number; trigger_config: object; }; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; slug: string; status: 'active' | 'inactive'; tools: { id: string; config: object[]; object: 'agent_definition_tool'; require_review: boolean; sort_order: number; tool: object; }[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }`\n  - `duration_ms: number`\n  - `error_message: string`\n  - `input: object[]`\n  - `object: 'agent_run'`\n  - `output: object[]`\n  - `started_at: string`\n  - `status: string`\n  - `steps: { id: string; actor: { id: string; name: string; object: 'user|api_key|agent'; }; content: string; created_at: string; duration_ms: number; metadata: object[]; object: 'agent_run_step'; sequence: number; step_type: string; title: string; }[]`\n  - `total_input_tokens: number`\n  - `total_output_tokens: number`\n  - `trigger_type: string`\n  - `triggered_by: { id: string; name: string; object: 'user|api_key|agent'; }`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst agentRun = await client.ai.runs.actions.cancel('id');\n\nconsole.log(agentRun);\n```",
    perLanguage: {
      typescript: {
        method: 'client.ai.runs.actions.cancel',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst agentRun = await client.ai.runs.actions.cancel('id');\n\nconsole.log(agentRun.id);",
      },
      python: {
        method: 'ai.runs.actions.cancel',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nagent_run = client.ai.runs.actions.cancel(\n    id="id",\n)\nprint(agent_run.id)',
      },
      kotlin: {
        method: 'ai().runs().actions().cancel',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.ai.runs.AgentRun\nimport com.augno.api.models.ai.runs.actions.ActionCancelParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val agentRun: AgentRun = client.ai().runs().actions().cancel("id")\n}',
      },
      go: {
        method: 'client.AI.Runs.Actions.Cancel',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tagentRun, err := client.AI.Runs.Actions.Cancel(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.AIRunActionCancelParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", agentRun.ID)\n}\n',
      },
      ruby: {
        method: 'ai.runs.actions.cancel',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nagent_run = augno_client.ai.runs.actions.cancel("id")\n\nputs(agent_run)',
      },
      csharp: {
        method: 'AI.Runs.Actions.Cancel',
        example:
          'ActionCancelParams parameters = new() { ID = "id" };\n\nvar agentRun = await client.AI.Runs.Actions.Cancel(parameters);\n\nConsole.WriteLine(agentRun);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/ai/runs/$ID/actions/cancel \\\n    -X POST \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'continue',
    endpoint: '/v1/ai/runs/{id}/actions/continue',
    httpMethod: 'post',
    summary: 'Continue Run',
    description: 'Continues an agent run that is awaiting input with a new user message.',
    stainlessPath: '(resource) ai.runs.actions > (method) continue',
    qualified: 'client.ai.runs.actions.continue',
    params: [
      'id: string;',
      'allowed_tool_slugs: string[];',
      'approved_tool_slugs: string[];',
      'message: string;',
      "include?: 'actions' | 'definition' | 'definition.config' | 'definition.tools' | 'definition.role'[];",
    ],
    response:
      "{ id: string; actions: object[]; completed_at: string; created_at: string; definition: object; duration_ms: number; error_message: string; input: object[]; object: 'agent_run'; output: object[]; started_at: string; status: string; steps: { id: string; actor: light_actor; content: string; created_at: string; duration_ms: number; metadata: object[]; object: 'agent_run_step'; sequence: number; step_type: string; title: string; }[]; total_input_tokens: number; total_output_tokens: number; trigger_type: string; triggered_by: object; updated_at: string; }",
    markdown:
      "## continue\n\n`client.ai.runs.actions.continue(id: string, allowed_tool_slugs: string[], approved_tool_slugs: string[], message: string, include?: 'actions' | 'definition' | 'definition.config' | 'definition.tools' | 'definition.role'[]): { id: string; actions: agent_action[]; completed_at: string; created_at: string; definition: agent_definition; duration_ms: number; error_message: string; input: object[]; object: 'agent_run'; output: object[]; started_at: string; status: string; steps: object[]; total_input_tokens: number; total_output_tokens: number; trigger_type: string; triggered_by: light_actor; updated_at: string; }`\n\n**post** `/v1/ai/runs/{id}/actions/continue`\n\nContinues an agent run that is awaiting input with a new user message.\n\n### Parameters\n\n- `id: string`\n\n- `allowed_tool_slugs: string[]`\n  Optional list of tool slugs to allow for the rest of the run without further approval.\n\n- `approved_tool_slugs: string[]`\n  Optional list of tool slugs to approve individually. If empty, all pending tools are approved.\n\n- `message: string`\n  The user message to send to the agent.\n\n- `include?: 'actions' | 'definition' | 'definition.config' | 'definition.tools' | 'definition.role'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ id: string; actions: { id: string; created_at: string; description: string; entity: entity; error_message: string; executed_at: string; input: object[]; label: string; object: 'agent_action'; output: object[]; requires_review: boolean; reviewed_at: string; reviewed_by: light_actor; run: object; status: 'pending_review' | 'auto_approved' | 'approved' | 'rejected' | 'executed' | 'failed'; tool_slug: string; updated_at: string; }[]; completed_at: string; created_at: string; definition: { id: string; category_code: string; config: agent_definition_config; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: light_role; slug: string; status: 'active' | 'inactive'; tools: object[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }; duration_ms: number; error_message: string; input: object[]; object: 'agent_run'; output: object[]; started_at: string; status: string; steps: { id: string; actor: object; content: string; created_at: string; duration_ms: number; metadata: object[]; object: 'agent_run_step'; sequence: number; step_type: string; title: string; }[]; total_input_tokens: number; total_output_tokens: number; trigger_type: string; triggered_by: { id: string; name: string; object: 'user|api_key|agent'; }; updated_at: string; }`\n  AgentRun represents an execution instance of an agent.\n\n  - `id: string`\n  - `actions: { id: string; created_at: string; description: string; entity: { id: string; object: string; }; error_message: string; executed_at: string; input: object[]; label: string; object: 'agent_action'; output: object[]; requires_review: boolean; reviewed_at: string; reviewed_by: { id: string; name: string; object: 'user|api_key|agent'; }; run: { id: string; object: 'agent_run'; }; status: 'pending_review' | 'auto_approved' | 'approved' | 'rejected' | 'executed' | 'failed'; tool_slug: string; updated_at: string; }[]`\n  - `completed_at: string`\n  - `created_at: string`\n  - `definition: { id: string; category_code: string; config: { model: string; provider: string; system_prompt: string; temperature: number; trigger_config: object; }; created_at: string; definition_type: 'system' | 'custom'; description: string; is_editable: boolean; name: string; object: 'agent_definition'; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; slug: string; status: 'active' | 'inactive'; tools: { id: string; config: object[]; object: 'agent_definition_tool'; require_review: boolean; sort_order: number; tool: object; }[]; trigger_type: 'scheduled' | 'manual' | 'event'; updated_at: string; }`\n  - `duration_ms: number`\n  - `error_message: string`\n  - `input: object[]`\n  - `object: 'agent_run'`\n  - `output: object[]`\n  - `started_at: string`\n  - `status: string`\n  - `steps: { id: string; actor: { id: string; name: string; object: 'user|api_key|agent'; }; content: string; created_at: string; duration_ms: number; metadata: object[]; object: 'agent_run_step'; sequence: number; step_type: string; title: string; }[]`\n  - `total_input_tokens: number`\n  - `total_output_tokens: number`\n  - `trigger_type: string`\n  - `triggered_by: { id: string; name: string; object: 'user|api_key|agent'; }`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst agentRun = await client.ai.runs.actions.continue('id', {\n  allowed_tool_slugs: ['string'],\n  approved_tool_slugs: ['string'],\n  message: 'Yes, proceed with creating the order.',\n});\n\nconsole.log(agentRun);\n```",
    perLanguage: {
      typescript: {
        method: 'client.ai.runs.actions.continue',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst agentRun = await client.ai.runs.actions.continue('id', {\n  allowed_tool_slugs: ['string'],\n  approved_tool_slugs: ['string'],\n  message: 'Yes, proceed with creating the order.',\n});\n\nconsole.log(agentRun.id);",
      },
      python: {
        method: 'ai.runs.actions.continue_',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nagent_run = client.ai.runs.actions.continue_(\n    id="id",\n    allowed_tool_slugs=["string"],\n    approved_tool_slugs=["string"],\n    message="Yes, proceed with creating the order.",\n)\nprint(agent_run.id)',
      },
      kotlin: {
        method: 'ai().runs().actions().continue_',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.ai.runs.AgentRun\nimport com.augno.api.models.ai.runs.actions.ActionContinueParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: ActionContinueParams = ActionContinueParams.builder()\n        .id("id")\n        .addAllowedToolSlug("string")\n        .addApprovedToolSlug("string")\n        .message("Yes, proceed with creating the order.")\n        .build()\n    val agentRun: AgentRun = client.ai().runs().actions().continue_(params)\n}',
      },
      go: {
        method: 'client.AI.Runs.Actions.Continue',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tagentRun, err := client.AI.Runs.Actions.Continue(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.AIRunActionContinueParams{\n\t\t\tAllowedToolSlugs:  []string{"string"},\n\t\t\tApprovedToolSlugs: []string{"string"},\n\t\t\tMessage:           "Yes, proceed with creating the order.",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", agentRun.ID)\n}\n',
      },
      ruby: {
        method: 'ai.runs.actions.continue',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nagent_run = augno_client.ai.runs.actions.continue(\n  "id",\n  allowed_tool_slugs: ["string"],\n  approved_tool_slugs: ["string"],\n  message: "Yes, proceed with creating the order."\n)\n\nputs(agent_run)',
      },
      csharp: {
        method: 'AI.Runs.Actions.Continue',
        example:
          'ActionContinueParams parameters = new()\n{\n    ID = "id",\n    AllowedToolSlugs =\n    [\n        "string"\n    ],\n    ApprovedToolSlugs =\n    [\n        "string"\n    ],\n    Message = "Yes, proceed with creating the order.",\n};\n\nvar agentRun = await client.AI.Runs.Actions.Continue(parameters);\n\nConsole.WriteLine(agentRun);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/ai/runs/$ID/actions/continue \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "allowed_tool_slugs": [\n            "string"\n          ],\n          "approved_tool_slugs": [\n            "string"\n          ],\n          "message": "Yes, proceed with creating the order."\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/auth/api-keys',
    httpMethod: 'get',
    summary: 'List API Keys',
    description:
      'This endpoint returns a paginated list of API keys for the target account.\nSupports cursor-based pagination and optional search filtering by name.',
    stainlessPath: '(resource) auth.api_keys > (method) list',
    qualified: 'client.auth.apiKeys.list',
    params: ["include?: 'role' | 'role.permissions'[];", "status?: 'active' | 'expired' | 'revoked'[];"],
    response:
      "{ data: { id: string; created_at: string; expires_at: string; last_used_at: string; name: string; object: 'api_key'; redacted_value: string; revoked_at: string; role: light_role; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }",
    markdown:
      "## list\n\n`client.auth.apiKeys.list(include?: 'role' | 'role.permissions'[], status?: 'active' | 'expired' | 'revoked'[]): { data: api_key[]; object: 'list'; page_info: page_info; }`\n\n**get** `/v1/auth/api-keys`\n\nThis endpoint returns a paginated list of API keys for the target account.\nSupports cursor-based pagination and optional search filtering by name.\n\n### Parameters\n\n- `include?: 'role' | 'role.permissions'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n- `status?: 'active' | 'expired' | 'revoked'[]`\n  Filter API keys by status.\n\n### Returns\n\n- `{ data: { id: string; created_at: string; expires_at: string; last_used_at: string; name: string; object: 'api_key'; redacted_value: string; revoked_at: string; role: light_role; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }`\n  A paginated list of APIKey resources\n\n  - `data: { id: string; created_at: string; expires_at: string; last_used_at: string; name: string; object: 'api_key'; redacted_value: string; revoked_at: string; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; updated_at: string; }[]`\n  - `object: 'list'`\n  - `page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst apiKeys = await client.auth.apiKeys.list();\n\nconsole.log(apiKeys);\n```",
    perLanguage: {
      typescript: {
        method: 'client.auth.apiKeys.list',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst apiKeys = await client.auth.apiKeys.list();\n\nconsole.log(apiKeys.data);",
      },
      python: {
        method: 'auth.api_keys.list',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\napi_keys = client.auth.api_keys.list()\nprint(api_keys.data)',
      },
      kotlin: {
        method: 'auth().apiKeys().list',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.auth.apikeys.ApiKeyListParams\nimport com.augno.api.models.auth.apikeys.ApiKeyListResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val apiKeys: ApiKeyListResponse = client.auth().apiKeys().list()\n}',
      },
      go: {
        method: 'client.Auth.APIKeys.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tapiKeys, err := client.Auth.APIKeys.List(context.TODO(), augno.AuthAPIKeyListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", apiKeys.Data)\n}\n',
      },
      ruby: {
        method: 'auth.api_keys.list',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\napi_keys = augno_client.auth.api_keys.list\n\nputs(api_keys)',
      },
      csharp: {
        method: 'Auth.ApiKeys.List',
        example:
          'ApiKeyListParams parameters = new();\n\nvar apiKeys = await client.Auth.ApiKeys.List(parameters);\n\nConsole.WriteLine(apiKeys);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/auth/api-keys \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/auth/api-keys',
    httpMethod: 'post',
    summary: 'Create API Key',
    description:
      'This endpoint is used to create an API key. Once completed, the API key object is\nreturned, and the API key secret is returned. The secret is only returned once at creation, and is not retrievable after creation.',
    stainlessPath: '(resource) auth.api_keys > (method) create',
    qualified: 'client.auth.apiKeys.create',
    params: [
      'name: string;',
      'role_id: string;',
      "include?: 'role' | 'role.permissions'[];",
      'expires_at?: string;',
    ],
    response:
      "{ api_key_info: { id: string; created_at: string; expires_at: string; last_used_at: string; name: string; object: 'api_key'; redacted_value: string; revoked_at: string; role: light_role; updated_at: string; }; api_key_secret: string; }",
    markdown:
      "## create\n\n`client.auth.apiKeys.create(name: string, role_id: string, include?: 'role' | 'role.permissions'[], expires_at?: string): { api_key_info: api_key; api_key_secret: string; }`\n\n**post** `/v1/auth/api-keys`\n\nThis endpoint is used to create an API key. Once completed, the API key object is\nreturned, and the API key secret is returned. The secret is only returned once at creation, and is not retrievable after creation.\n\n### Parameters\n\n- `name: string`\n  The name for the API key.\n\n- `role_id: string`\n  The role ID for the API key.\n\n- `include?: 'role' | 'role.permissions'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n- `expires_at?: string`\n  Optional expiration time for the API key.\n\n### Returns\n\n- `{ api_key_info: { id: string; created_at: string; expires_at: string; last_used_at: string; name: string; object: 'api_key'; redacted_value: string; revoked_at: string; role: light_role; updated_at: string; }; api_key_secret: string; }`\n  CreatedAPIKey represents a newly created API key with the full secret value.\n\n  - `api_key_info: { id: string; created_at: string; expires_at: string; last_used_at: string; name: string; object: 'api_key'; redacted_value: string; revoked_at: string; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; updated_at: string; }`\n  - `api_key_secret: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst createdAPIKey = await client.auth.apiKeys.create({ name: 'Production API Key', role_id: 'rl_01gf7a8200er3ar3pkfrb6kk29' });\n\nconsole.log(createdAPIKey);\n```",
    perLanguage: {
      typescript: {
        method: 'client.auth.apiKeys.create',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst createdAPIKey = await client.auth.apiKeys.create({\n  name: 'Production API Key',\n  role_id: 'rl_01gf7a8200er3ar3pkfrb6kk29',\n});\n\nconsole.log(createdAPIKey.api_key_info);",
      },
      python: {
        method: 'auth.api_keys.create',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\ncreated_api_key = client.auth.api_keys.create(\n    name="Production API Key",\n    role_id="rl_01gf7a8200er3ar3pkfrb6kk29",\n)\nprint(created_api_key.api_key_info)',
      },
      kotlin: {
        method: 'auth().apiKeys().create',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.auth.apikeys.ApiKeyCreateParams\nimport com.augno.api.models.auth.apikeys.CreatedApiKey\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: ApiKeyCreateParams = ApiKeyCreateParams.builder()\n        .name("Production API Key")\n        .roleId("rl_01gf7a8200er3ar3pkfrb6kk29")\n        .build()\n    val createdApiKey: CreatedApiKey = client.auth().apiKeys().create(params)\n}',
      },
      go: {
        method: 'client.Auth.APIKeys.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcreatedAPIKey, err := client.Auth.APIKeys.New(context.TODO(), augno.AuthAPIKeyNewParams{\n\t\tName:   "Production API Key",\n\t\tRoleID: "rl_01gf7a8200er3ar3pkfrb6kk29",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", createdAPIKey.APIKeyInfo)\n}\n',
      },
      ruby: {
        method: 'auth.api_keys.create',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\ncreated_api_key = augno_client.auth.api_keys.create(name: "Production API Key", role_id: "rl_01gf7a8200er3ar3pkfrb6kk29")\n\nputs(created_api_key)',
      },
      csharp: {
        method: 'Auth.ApiKeys.Create',
        example:
          'ApiKeyCreateParams parameters = new()\n{\n    Name = "Production API Key",\n    RoleID = "rl_01gf7a8200er3ar3pkfrb6kk29",\n};\n\nvar createdApiKey = await client.Auth.ApiKeys.Create(parameters);\n\nConsole.WriteLine(createdApiKey);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/auth/api-keys \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "name": "Production API Key",\n          "role_id": "rl_01gf7a8200er3ar3pkfrb6kk29"\n        }\'',
      },
    },
  },
  {
    name: 'revoke',
    endpoint: '/v1/auth/api-keys/{id}',
    httpMethod: 'delete',
    summary: 'Revoke API Key',
    description:
      'This endpoint revokes an API key so it can no longer be used to \nauthenticate requests. The API key will be marked as revoked and will no longer be usable.',
    stainlessPath: '(resource) auth.api_keys > (method) revoke',
    qualified: 'client.auth.apiKeys.revoke',
    params: ['id: string;'],
    response: '{  }',
    markdown:
      "## revoke\n\n`client.auth.apiKeys.revoke(id: string): {  }`\n\n**delete** `/v1/auth/api-keys/{id}`\n\nThis endpoint revokes an API key so it can no longer be used to \nauthenticate requests. The API key will be marked as revoked and will no longer be usable.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{  }`\n\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst response = await client.auth.apiKeys.revoke('id');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.auth.apiKeys.revoke',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.auth.apiKeys.revoke('id');\n\nconsole.log(response);",
      },
      python: {
        method: 'auth.api_keys.revoke',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.auth.api_keys.revoke(\n    "id",\n)\nprint(response)',
      },
      kotlin: {
        method: 'auth().apiKeys().revoke',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.auth.apikeys.ApiKeyRevokeParams\nimport com.augno.api.models.auth.apikeys.ApiKeyRevokeResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val response: ApiKeyRevokeResponse = client.auth().apiKeys().revoke("id")\n}',
      },
      go: {
        method: 'client.Auth.APIKeys.Revoke',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Auth.APIKeys.Revoke(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      ruby: {
        method: 'auth.api_keys.revoke',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nresponse = augno_client.auth.api_keys.revoke("id")\n\nputs(response)',
      },
      csharp: {
        method: 'Auth.ApiKeys.Revoke',
        example:
          'ApiKeyRevokeParams parameters = new() { ID = "id" };\n\nvar response = await client.Auth.ApiKeys.Revoke(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/auth/api-keys/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/auth/api-keys/{id}',
    httpMethod: 'get',
    summary: 'Get API Key',
    description: "This endpoint returns a single API key's metadata by its ID.",
    stainlessPath: '(resource) auth.api_keys > (method) retrieve',
    qualified: 'client.auth.apiKeys.retrieve',
    params: ['id: string;', "include?: 'role' | 'role.permissions'[];"],
    response:
      "{ id: string; created_at: string; expires_at: string; last_used_at: string; name: string; object: 'api_key'; redacted_value: string; revoked_at: string; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; updated_at: string; }",
    markdown:
      "## retrieve\n\n`client.auth.apiKeys.retrieve(id: string, include?: 'role' | 'role.permissions'[]): { id: string; created_at: string; expires_at: string; last_used_at: string; name: string; object: 'api_key'; redacted_value: string; revoked_at: string; role: light_role; updated_at: string; }`\n\n**get** `/v1/auth/api-keys/{id}`\n\nThis endpoint returns a single API key's metadata by its ID.\n\n### Parameters\n\n- `id: string`\n\n- `include?: 'role' | 'role.permissions'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ id: string; created_at: string; expires_at: string; last_used_at: string; name: string; object: 'api_key'; redacted_value: string; revoked_at: string; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; updated_at: string; }`\n  APIKey represents an API key for authenticating API requests.\n\n  - `id: string`\n  - `created_at: string`\n  - `expires_at: string`\n  - `last_used_at: string`\n  - `name: string`\n  - `object: 'api_key'`\n  - `redacted_value: string`\n  - `revoked_at: string`\n  - `role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst apiKey = await client.auth.apiKeys.retrieve('id');\n\nconsole.log(apiKey);\n```",
    perLanguage: {
      typescript: {
        method: 'client.auth.apiKeys.retrieve',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst apiKey = await client.auth.apiKeys.retrieve('id');\n\nconsole.log(apiKey.id);",
      },
      python: {
        method: 'auth.api_keys.retrieve',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\napi_key = client.auth.api_keys.retrieve(\n    id="id",\n)\nprint(api_key.id)',
      },
      kotlin: {
        method: 'auth().apiKeys().retrieve',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.auth.apikeys.ApiKey\nimport com.augno.api.models.auth.apikeys.ApiKeyRetrieveParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val apiKey: ApiKey = client.auth().apiKeys().retrieve("id")\n}',
      },
      go: {
        method: 'client.Auth.APIKeys.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tapiKey, err := client.Auth.APIKeys.Get(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.AuthAPIKeyGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", apiKey.ID)\n}\n',
      },
      ruby: {
        method: 'auth.api_keys.retrieve',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\napi_key = augno_client.auth.api_keys.retrieve("id")\n\nputs(api_key)',
      },
      csharp: {
        method: 'Auth.ApiKeys.Retrieve',
        example:
          'ApiKeyRetrieveParams parameters = new() { ID = "id" };\n\nvar apiKey = await client.Auth.ApiKeys.Retrieve(parameters);\n\nConsole.WriteLine(apiKey);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/auth/api-keys/$ID \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'rotate',
    endpoint: '/v1/auth/api-keys/{id}/actions/rotate',
    httpMethod: 'post',
    summary: 'Rotate API Key',
    description:
      "This endpoint rotates an API key by revoking the existing key and creating a new\nreplacement with the same name, role, and owner. The new key inherits the old key's expiration unless an explicit expires_at override is provided.\nThe new API key secret is returned once and is not retrievable after creation.",
    stainlessPath: '(resource) auth.api_keys.actions > (method) rotate',
    qualified: 'client.auth.apiKeys.actions.rotate',
    params: ['id: string;', "include?: 'role' | 'role.permissions'[];", 'expires_at?: string;'],
    response:
      "{ api_key_info: { id: string; created_at: string; expires_at: string; last_used_at: string; name: string; object: 'api_key'; redacted_value: string; revoked_at: string; role: light_role; updated_at: string; }; api_key_secret: string; }",
    markdown:
      "## rotate\n\n`client.auth.apiKeys.actions.rotate(id: string, include?: 'role' | 'role.permissions'[], expires_at?: string): { api_key_info: api_key; api_key_secret: string; }`\n\n**post** `/v1/auth/api-keys/{id}/actions/rotate`\n\nThis endpoint rotates an API key by revoking the existing key and creating a new\nreplacement with the same name, role, and owner. The new key inherits the old key's expiration unless an explicit expires_at override is provided.\nThe new API key secret is returned once and is not retrievable after creation.\n\n### Parameters\n\n- `id: string`\n\n- `include?: 'role' | 'role.permissions'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n- `expires_at?: string`\n  Optional expiration time override for the new API key.\n\n### Returns\n\n- `{ api_key_info: { id: string; created_at: string; expires_at: string; last_used_at: string; name: string; object: 'api_key'; redacted_value: string; revoked_at: string; role: light_role; updated_at: string; }; api_key_secret: string; }`\n  CreatedAPIKey represents a newly created API key with the full secret value.\n\n  - `api_key_info: { id: string; created_at: string; expires_at: string; last_used_at: string; name: string; object: 'api_key'; redacted_value: string; revoked_at: string; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; updated_at: string; }`\n  - `api_key_secret: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst createdAPIKey = await client.auth.apiKeys.actions.rotate('id');\n\nconsole.log(createdAPIKey);\n```",
    perLanguage: {
      typescript: {
        method: 'client.auth.apiKeys.actions.rotate',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst createdAPIKey = await client.auth.apiKeys.actions.rotate('id', {\n  expires_at: '2026-12-31T23:59:59Z',\n});\n\nconsole.log(createdAPIKey.api_key_info);",
      },
      python: {
        method: 'auth.api_keys.actions.rotate',
        example:
          'import os\nfrom datetime import datetime\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\ncreated_api_key = client.auth.api_keys.actions.rotate(\n    id="id",\n    expires_at=datetime.fromisoformat("2026-12-31T23:59:59"),\n)\nprint(created_api_key.api_key_info)',
      },
      kotlin: {
        method: 'auth().apiKeys().actions().rotate',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.auth.apikeys.CreatedApiKey\nimport com.augno.api.models.auth.apikeys.actions.ActionRotateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val createdApiKey: CreatedApiKey = client.auth().apiKeys().actions().rotate("id")\n}',
      },
      go: {
        method: 'client.Auth.APIKeys.Actions.Rotate',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcreatedAPIKey, err := client.Auth.APIKeys.Actions.Rotate(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.AuthAPIKeyActionRotateParams{\n\t\t\tExpiresAt: augno.Time(time.Now()),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", createdAPIKey.APIKeyInfo)\n}\n',
      },
      ruby: {
        method: 'auth.api_keys.actions.rotate',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\ncreated_api_key = augno_client.auth.api_keys.actions.rotate("id")\n\nputs(created_api_key)',
      },
      csharp: {
        method: 'Auth.ApiKeys.Actions.Rotate',
        example:
          'ActionRotateParams parameters = new() { ID = "id" };\n\nvar createdApiKey = await client.Auth.ApiKeys.Actions.Rotate(parameters);\n\nConsole.WriteLine(createdApiKey);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/auth/api-keys/$ID/actions/rotate \\\n    -X POST \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'list_adjustment_types',
    endpoint: '/v1/core/adjustment-types',
    httpMethod: 'get',
    summary: 'List Adjustment Types',
    description:
      'This endpoint returns a paginated list of adjustment types.\nSupports cursor-based pagination and search by name.',
    stainlessPath: '(resource) core > (method) list_adjustment_types',
    qualified: 'client.core.listAdjustmentTypes',
    response:
      "{ data: { id: string; code: string; created_at: string; name: string; object: 'adjustment_type'; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }",
    markdown:
      "## list_adjustment_types\n\n`client.core.listAdjustmentTypes(): { data: object[]; object: 'list'; page_info: page_info; }`\n\n**get** `/v1/core/adjustment-types`\n\nThis endpoint returns a paginated list of adjustment types.\nSupports cursor-based pagination and search by name.\n\n### Returns\n\n- `{ data: { id: string; code: string; created_at: string; name: string; object: 'adjustment_type'; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }`\n  A paginated list of AdjustmentType resources\n\n  - `data: { id: string; code: string; created_at: string; name: string; object: 'adjustment_type'; updated_at: string; }[]`\n  - `object: 'list'`\n  - `page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst response = await client.core.listAdjustmentTypes();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.listAdjustmentTypes',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.core.listAdjustmentTypes();\n\nconsole.log(response.data);",
      },
      python: {
        method: 'core.list_adjustment_types',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.core.list_adjustment_types()\nprint(response.data)',
      },
      kotlin: {
        method: 'core().listAdjustmentTypes',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.CoreListAdjustmentTypesParams\nimport com.augno.api.models.core.CoreListAdjustmentTypesResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val response: CoreListAdjustmentTypesResponse = client.core().listAdjustmentTypes()\n}',
      },
      go: {
        method: 'client.Core.ListAdjustmentTypes',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Core.ListAdjustmentTypes(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      ruby: {
        method: 'core.list_adjustment_types',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nresponse = augno_client.core.list_adjustment_types\n\nputs(response)',
      },
      csharp: {
        method: 'Core.ListAdjustmentTypes',
        example:
          'CoreListAdjustmentTypesParams parameters = new();\n\nvar response = await client.Core.ListAdjustmentTypes(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/adjustment-types \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/core/account-groups',
    httpMethod: 'get',
    summary: 'List Account Groups',
    description:
      'This endpoint returns a paginated list of account groups for the target account.\nSupports cursor-based pagination, filtering by type, and search by name or description.',
    stainlessPath: '(resource) core.account_groups > (method) list',
    qualified: 'client.core.accountGroups.list',
    params: ["type?: 'pricing_group' | 'type_group';"],
    response:
      "{ data: { id: string; commission_status: 'commission_applied' | 'commission_exempt'; created_at: string; description: string; freight_status: 'free_freight' | 'billed_freight'; name: string; object: 'account_group'; type: 'pricing_group' | 'type_group'; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }",
    markdown:
      "## list\n\n`client.core.accountGroups.list(type?: 'pricing_group' | 'type_group'): { data: account_group[]; object: 'list'; page_info: page_info; }`\n\n**get** `/v1/core/account-groups`\n\nThis endpoint returns a paginated list of account groups for the target account.\nSupports cursor-based pagination, filtering by type, and search by name or description.\n\n### Parameters\n\n- `type?: 'pricing_group' | 'type_group'`\n  Filter by account group type code.\n\n### Returns\n\n- `{ data: { id: string; commission_status: 'commission_applied' | 'commission_exempt'; created_at: string; description: string; freight_status: 'free_freight' | 'billed_freight'; name: string; object: 'account_group'; type: 'pricing_group' | 'type_group'; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }`\n  A paginated list of AccountGroup resources\n\n  - `data: { id: string; commission_status: 'commission_applied' | 'commission_exempt'; created_at: string; description: string; freight_status: 'free_freight' | 'billed_freight'; name: string; object: 'account_group'; type: 'pricing_group' | 'type_group'; updated_at: string; }[]`\n  - `object: 'list'`\n  - `page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst accountGroups = await client.core.accountGroups.list();\n\nconsole.log(accountGroups);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accountGroups.list',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountGroups = await client.core.accountGroups.list();\n\nconsole.log(accountGroups.data);",
      },
      python: {
        method: 'core.account_groups.list',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naccount_groups = client.core.account_groups.list()\nprint(account_groups.data)',
      },
      kotlin: {
        method: 'core().accountGroups().list',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accountgroups.AccountGroupListParams\nimport com.augno.api.models.core.accountgroups.AccountGroupListResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val accountGroups: AccountGroupListResponse = client.core().accountGroups().list()\n}',
      },
      go: {
        method: 'client.Core.AccountGroups.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountGroups, err := client.Core.AccountGroups.List(context.TODO(), augno.CoreAccountGroupListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountGroups.Data)\n}\n',
      },
      ruby: {
        method: 'core.account_groups.list',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naccount_groups = augno_client.core.account_groups.list\n\nputs(account_groups)',
      },
      csharp: {
        method: 'Core.AccountGroups.List',
        example:
          'AccountGroupListParams parameters = new();\n\nvar accountGroups = await client.Core.AccountGroups.List(parameters);\n\nConsole.WriteLine(accountGroups);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/account-groups \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/core/account-groups',
    httpMethod: 'post',
    summary: 'Create Account Group',
    description: 'This endpoint creates a new account group.',
    stainlessPath: '(resource) core.account_groups > (method) create',
    qualified: 'client.core.accountGroups.create',
    params: [
      "commission_status: 'commission_applied' | 'commission_exempt';",
      "freight_status: 'free_freight' | 'billed_freight';",
      'name: string;',
      "type: 'pricing_group' | 'type_group';",
      'description?: string;',
    ],
    response:
      "{ id: string; commission_status: 'commission_applied' | 'commission_exempt'; created_at: string; description: string; freight_status: 'free_freight' | 'billed_freight'; name: string; object: 'account_group'; type: 'pricing_group' | 'type_group'; updated_at: string; }",
    markdown:
      "## create\n\n`client.core.accountGroups.create(commission_status: 'commission_applied' | 'commission_exempt', freight_status: 'free_freight' | 'billed_freight', name: string, type: 'pricing_group' | 'type_group', description?: string): { id: string; commission_status: 'commission_applied' | 'commission_exempt'; created_at: string; description: string; freight_status: 'free_freight' | 'billed_freight'; name: string; object: 'account_group'; type: 'pricing_group' | 'type_group'; updated_at: string; }`\n\n**post** `/v1/core/account-groups`\n\nThis endpoint creates a new account group.\n\n### Parameters\n\n- `commission_status: 'commission_applied' | 'commission_exempt'`\n  The commission status code.\n\n- `freight_status: 'free_freight' | 'billed_freight'`\n  The freight status code.\n\n- `name: string`\n  The display name of the account group.\n\n- `type: 'pricing_group' | 'type_group'`\n  The account group type code.\n\n- `description?: string`\n  An optional description of the account group.\n\n### Returns\n\n- `{ id: string; commission_status: 'commission_applied' | 'commission_exempt'; created_at: string; description: string; freight_status: 'free_freight' | 'billed_freight'; name: string; object: 'account_group'; type: 'pricing_group' | 'type_group'; updated_at: string; }`\n  AccountGroup represents an account group used for organizing customer accounts.\n\n  - `id: string`\n  - `commission_status: 'commission_applied' | 'commission_exempt'`\n  - `created_at: string`\n  - `description: string`\n  - `freight_status: 'free_freight' | 'billed_freight'`\n  - `name: string`\n  - `object: 'account_group'`\n  - `type: 'pricing_group' | 'type_group'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst accountGroup = await client.core.accountGroups.create({\n  commission_status: 'commission_applied',\n  freight_status: 'billed_freight',\n  name: 'Wholesale Customers',\n  type: 'pricing_group',\n});\n\nconsole.log(accountGroup);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accountGroups.create',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountGroup = await client.core.accountGroups.create({\n  commission_status: 'commission_applied',\n  freight_status: 'billed_freight',\n  name: 'Wholesale Customers',\n  type: 'pricing_group',\n});\n\nconsole.log(accountGroup.id);",
      },
      python: {
        method: 'core.account_groups.create',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naccount_group = client.core.account_groups.create(\n    commission_status="commission_applied",\n    freight_status="billed_freight",\n    name="Wholesale Customers",\n    type="pricing_group",\n)\nprint(account_group.id)',
      },
      kotlin: {
        method: 'core().accountGroups().create',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accountgroups.AccountGroup\nimport com.augno.api.models.core.accountgroups.AccountGroupCreateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: AccountGroupCreateParams = AccountGroupCreateParams.builder()\n        .commissionStatus(AccountGroupCreateParams.CommissionStatus.COMMISSION_APPLIED)\n        .freightStatus(AccountGroupCreateParams.FreightStatus.BILLED_FREIGHT)\n        .name("Wholesale Customers")\n        .type(AccountGroupCreateParams.Type.PRICING_GROUP)\n        .build()\n    val accountGroup: AccountGroup = client.core().accountGroups().create(params)\n}',
      },
      go: {
        method: 'client.Core.AccountGroups.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountGroup, err := client.Core.AccountGroups.New(context.TODO(), augno.CoreAccountGroupNewParams{\n\t\tCommissionStatus: augno.CoreAccountGroupNewParamsCommissionStatusCommissionApplied,\n\t\tFreightStatus:    augno.CoreAccountGroupNewParamsFreightStatusBilledFreight,\n\t\tName:             "Wholesale Customers",\n\t\tType:             augno.CoreAccountGroupNewParamsTypePricingGroup,\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountGroup.ID)\n}\n',
      },
      ruby: {
        method: 'core.account_groups.create',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naccount_group = augno_client.core.account_groups.create(\n  commission_status: :commission_applied,\n  freight_status: :billed_freight,\n  name: "Wholesale Customers",\n  type: :pricing_group\n)\n\nputs(account_group)',
      },
      csharp: {
        method: 'Core.AccountGroups.Create',
        example:
          'AccountGroupCreateParams parameters = new()\n{\n    CommissionStatus = CommissionStatus.CommissionApplied,\n    FreightStatus = FreightStatus.BilledFreight,\n    Name = "Wholesale Customers",\n    Type = Type.PricingGroup,\n};\n\nvar accountGroup = await client.Core.AccountGroups.Create(parameters);\n\nConsole.WriteLine(accountGroup);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/account-groups \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "commission_status": "commission_applied",\n          "freight_status": "billed_freight",\n          "name": "Wholesale Customers",\n          "type": "pricing_group"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/core/account-groups/{id}',
    httpMethod: 'delete',
    summary: 'Delete Account Group',
    description: 'This endpoint deletes an account group.',
    stainlessPath: '(resource) core.account_groups > (method) delete',
    qualified: 'client.core.accountGroups.delete',
    params: ['id: string;'],
    response: '{  }',
    markdown:
      "## delete\n\n`client.core.accountGroups.delete(id: string): {  }`\n\n**delete** `/v1/core/account-groups/{id}`\n\nThis endpoint deletes an account group.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{  }`\n\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst accountGroup = await client.core.accountGroups.delete('id');\n\nconsole.log(accountGroup);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accountGroups.delete',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountGroup = await client.core.accountGroups.delete('id');\n\nconsole.log(accountGroup);",
      },
      python: {
        method: 'core.account_groups.delete',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naccount_group = client.core.account_groups.delete(\n    "id",\n)\nprint(account_group)',
      },
      kotlin: {
        method: 'core().accountGroups().delete',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accountgroups.AccountGroupDeleteParams\nimport com.augno.api.models.core.accountgroups.AccountGroupDeleteResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val accountGroup: AccountGroupDeleteResponse = client.core().accountGroups().delete("id")\n}',
      },
      go: {
        method: 'client.Core.AccountGroups.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountGroup, err := client.Core.AccountGroups.Delete(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountGroup)\n}\n',
      },
      ruby: {
        method: 'core.account_groups.delete',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naccount_group = augno_client.core.account_groups.delete("id")\n\nputs(account_group)',
      },
      csharp: {
        method: 'Core.AccountGroups.Delete',
        example:
          'AccountGroupDeleteParams parameters = new() { ID = "id" };\n\nvar accountGroup = await client.Core.AccountGroups.Delete(parameters);\n\nConsole.WriteLine(accountGroup);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/account-groups/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/core/account-groups/{id}',
    httpMethod: 'get',
    summary: 'Get Account Group',
    description: 'This endpoint returns a single account group by its ID.',
    stainlessPath: '(resource) core.account_groups > (method) retrieve',
    qualified: 'client.core.accountGroups.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; commission_status: 'commission_applied' | 'commission_exempt'; created_at: string; description: string; freight_status: 'free_freight' | 'billed_freight'; name: string; object: 'account_group'; type: 'pricing_group' | 'type_group'; updated_at: string; }",
    markdown:
      "## retrieve\n\n`client.core.accountGroups.retrieve(id: string): { id: string; commission_status: 'commission_applied' | 'commission_exempt'; created_at: string; description: string; freight_status: 'free_freight' | 'billed_freight'; name: string; object: 'account_group'; type: 'pricing_group' | 'type_group'; updated_at: string; }`\n\n**get** `/v1/core/account-groups/{id}`\n\nThis endpoint returns a single account group by its ID.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; commission_status: 'commission_applied' | 'commission_exempt'; created_at: string; description: string; freight_status: 'free_freight' | 'billed_freight'; name: string; object: 'account_group'; type: 'pricing_group' | 'type_group'; updated_at: string; }`\n  AccountGroup represents an account group used for organizing customer accounts.\n\n  - `id: string`\n  - `commission_status: 'commission_applied' | 'commission_exempt'`\n  - `created_at: string`\n  - `description: string`\n  - `freight_status: 'free_freight' | 'billed_freight'`\n  - `name: string`\n  - `object: 'account_group'`\n  - `type: 'pricing_group' | 'type_group'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst accountGroup = await client.core.accountGroups.retrieve('id');\n\nconsole.log(accountGroup);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accountGroups.retrieve',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountGroup = await client.core.accountGroups.retrieve('id');\n\nconsole.log(accountGroup.id);",
      },
      python: {
        method: 'core.account_groups.retrieve',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naccount_group = client.core.account_groups.retrieve(\n    "id",\n)\nprint(account_group.id)',
      },
      kotlin: {
        method: 'core().accountGroups().retrieve',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accountgroups.AccountGroup\nimport com.augno.api.models.core.accountgroups.AccountGroupRetrieveParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val accountGroup: AccountGroup = client.core().accountGroups().retrieve("id")\n}',
      },
      go: {
        method: 'client.Core.AccountGroups.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountGroup, err := client.Core.AccountGroups.Get(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountGroup.ID)\n}\n',
      },
      ruby: {
        method: 'core.account_groups.retrieve',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naccount_group = augno_client.core.account_groups.retrieve("id")\n\nputs(account_group)',
      },
      csharp: {
        method: 'Core.AccountGroups.Retrieve',
        example:
          'AccountGroupRetrieveParams parameters = new() { ID = "id" };\n\nvar accountGroup = await client.Core.AccountGroups.Retrieve(parameters);\n\nConsole.WriteLine(accountGroup);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/account-groups/$ID \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/core/account-groups/{id}',
    httpMethod: 'patch',
    summary: 'Update Account Group',
    description:
      'This endpoint partially updates an account group.\nOnly provided fields are updated; absent fields retain their current values.',
    stainlessPath: '(resource) core.account_groups > (method) update',
    qualified: 'client.core.accountGroups.update',
    params: [
      'id: string;',
      "commission_status?: 'commission_applied' | 'commission_exempt';",
      'description?: string;',
      "freight_status?: 'free_freight' | 'billed_freight';",
      'name?: string;',
    ],
    response:
      "{ id: string; commission_status: 'commission_applied' | 'commission_exempt'; created_at: string; description: string; freight_status: 'free_freight' | 'billed_freight'; name: string; object: 'account_group'; type: 'pricing_group' | 'type_group'; updated_at: string; }",
    markdown:
      "## update\n\n`client.core.accountGroups.update(id: string, commission_status?: 'commission_applied' | 'commission_exempt', description?: string, freight_status?: 'free_freight' | 'billed_freight', name?: string): { id: string; commission_status: 'commission_applied' | 'commission_exempt'; created_at: string; description: string; freight_status: 'free_freight' | 'billed_freight'; name: string; object: 'account_group'; type: 'pricing_group' | 'type_group'; updated_at: string; }`\n\n**patch** `/v1/core/account-groups/{id}`\n\nThis endpoint partially updates an account group.\nOnly provided fields are updated; absent fields retain their current values.\n\n### Parameters\n\n- `id: string`\n\n- `commission_status?: 'commission_applied' | 'commission_exempt'`\n  The commission status code.\n\n- `description?: string`\n  An optional description of the account group.\n\n- `freight_status?: 'free_freight' | 'billed_freight'`\n  The freight status code.\n\n- `name?: string`\n  The display name of the account group.\n\n### Returns\n\n- `{ id: string; commission_status: 'commission_applied' | 'commission_exempt'; created_at: string; description: string; freight_status: 'free_freight' | 'billed_freight'; name: string; object: 'account_group'; type: 'pricing_group' | 'type_group'; updated_at: string; }`\n  AccountGroup represents an account group used for organizing customer accounts.\n\n  - `id: string`\n  - `commission_status: 'commission_applied' | 'commission_exempt'`\n  - `created_at: string`\n  - `description: string`\n  - `freight_status: 'free_freight' | 'billed_freight'`\n  - `name: string`\n  - `object: 'account_group'`\n  - `type: 'pricing_group' | 'type_group'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst accountGroup = await client.core.accountGroups.update('id');\n\nconsole.log(accountGroup);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accountGroups.update',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountGroup = await client.core.accountGroups.update('id', {\n  name: 'Updated Wholesale Customers',\n});\n\nconsole.log(accountGroup.id);",
      },
      python: {
        method: 'core.account_groups.update',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naccount_group = client.core.account_groups.update(\n    id="id",\n    name="Updated Wholesale Customers",\n)\nprint(account_group.id)',
      },
      kotlin: {
        method: 'core().accountGroups().update',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accountgroups.AccountGroup\nimport com.augno.api.models.core.accountgroups.AccountGroupUpdateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val accountGroup: AccountGroup = client.core().accountGroups().update("id")\n}',
      },
      go: {
        method: 'client.Core.AccountGroups.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountGroup, err := client.Core.AccountGroups.Update(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreAccountGroupUpdateParams{\n\t\t\tName: augno.String("Updated Wholesale Customers"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountGroup.ID)\n}\n',
      },
      ruby: {
        method: 'core.account_groups.update',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naccount_group = augno_client.core.account_groups.update("id")\n\nputs(account_group)',
      },
      csharp: {
        method: 'Core.AccountGroups.Update',
        example:
          'AccountGroupUpdateParams parameters = new() { ID = "id" };\n\nvar accountGroup = await client.Core.AccountGroups.Update(parameters);\n\nConsole.WriteLine(accountGroup);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/account-groups/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/core/account-prices',
    httpMethod: 'get',
    summary: 'List Account Prices',
    description:
      'This endpoint returns a paginated list of account prices for the target account.\nSupports cursor-based pagination, search by recipient account name or external number, and filtering by recipient account ID.',
    stainlessPath: '(resource) core.account_prices > (method) list',
    qualified: 'client.core.accountPrices.list',
    params: ['recipient_account_id?: string;'],
    response:
      "{ data: { id: string; attributes: light_attribute[]; categories: light_item_category[]; created_at: string; object: 'account_price'; product_line: light_product_line; rate: object; recipient_account: light_account; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }",
    markdown:
      "## list\n\n`client.core.accountPrices.list(recipient_account_id?: string): { data: account_price[]; object: 'list'; page_info: page_info; }`\n\n**get** `/v1/core/account-prices`\n\nThis endpoint returns a paginated list of account prices for the target account.\nSupports cursor-based pagination, search by recipient account name or external number, and filtering by recipient account ID.\n\n### Parameters\n\n- `recipient_account_id?: string`\n  Filter by recipient account ID.\n\n### Returns\n\n- `{ data: { id: string; attributes: light_attribute[]; categories: light_item_category[]; created_at: string; object: 'account_price'; product_line: light_product_line; rate: object; recipient_account: light_account; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }`\n  A paginated list of AccountPrice resources\n\n  - `data: { id: string; attributes: { id: string; object: 'attribute'; text: string; }[]; categories: { id: string; name: string; object: 'item_category'; }[]; created_at: string; object: 'account_price'; product_line: { id: string; name: string; object: 'product_line'; }; rate: { id: string; denominator_unit: object; numerator_unit: object; object: 'rate'; value: string; }; recipient_account: { id: string; name: string; object: 'account'; }; updated_at: string; }[]`\n  - `object: 'list'`\n  - `page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst accountPrices = await client.core.accountPrices.list();\n\nconsole.log(accountPrices);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accountPrices.list',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountPrices = await client.core.accountPrices.list();\n\nconsole.log(accountPrices.data);",
      },
      python: {
        method: 'core.account_prices.list',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naccount_prices = client.core.account_prices.list()\nprint(account_prices.data)',
      },
      kotlin: {
        method: 'core().accountPrices().list',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accountprices.AccountPriceListParams\nimport com.augno.api.models.core.accountprices.AccountPriceListResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val accountPrices: AccountPriceListResponse = client.core().accountPrices().list()\n}',
      },
      go: {
        method: 'client.Core.AccountPrices.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountPrices, err := client.Core.AccountPrices.List(context.TODO(), augno.CoreAccountPriceListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountPrices.Data)\n}\n',
      },
      ruby: {
        method: 'core.account_prices.list',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naccount_prices = augno_client.core.account_prices.list\n\nputs(account_prices)',
      },
      csharp: {
        method: 'Core.AccountPrices.List',
        example:
          'AccountPriceListParams parameters = new();\n\nvar accountPrices = await client.Core.AccountPrices.List(parameters);\n\nConsole.WriteLine(accountPrices);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/account-prices \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/core/account-prices',
    httpMethod: 'post',
    summary: 'Create Account Price',
    description:
      'This endpoint creates a new account price for a recipient (customer) account.\nThe price includes a rate value with numerator and denominator units, and can optionally be constrained to specific item categories and attributes.',
    stainlessPath: '(resource) core.account_prices > (method) create',
    qualified: 'client.core.accountPrices.create',
    params: [
      'attribute_ids: string[];',
      'category_ids: string[];',
      'product_line_id: string;',
      'rate_denominator_unit_id: string;',
      'rate_numerator_unit_id: string;',
      'rate_value: string;',
      'recipient_account_id: string;',
      "include?: 'recipient_account' | 'product_line'[];",
    ],
    response:
      "{ id: string; attributes: { id: string; object: 'attribute'; text: string; }[]; categories: { id: string; name: string; object: 'item_category'; }[]; created_at: string; object: 'account_price'; product_line: { id: string; name: string; object: 'product_line'; }; rate: { id: string; denominator_unit: object; numerator_unit: object; object: 'rate'; value: string; }; recipient_account: { id: string; name: string; object: 'account'; }; updated_at: string; }",
    markdown:
      "## create\n\n`client.core.accountPrices.create(attribute_ids: string[], category_ids: string[], product_line_id: string, rate_denominator_unit_id: string, rate_numerator_unit_id: string, rate_value: string, recipient_account_id: string, include?: 'recipient_account' | 'product_line'[]): { id: string; attributes: light_attribute[]; categories: light_item_category[]; created_at: string; object: 'account_price'; product_line: light_product_line; rate: object; recipient_account: light_account; updated_at: string; }`\n\n**post** `/v1/core/account-prices`\n\nThis endpoint creates a new account price for a recipient (customer) account.\nThe price includes a rate value with numerator and denominator units, and can optionally be constrained to specific item categories and attributes.\n\n### Parameters\n\n- `attribute_ids: string[]`\n  The IDs of attributes to constrain this price to.\n\n- `category_ids: string[]`\n  The IDs of item categories to constrain this price to.\n\n- `product_line_id: string`\n  The ID of the product line this price applies to.\n\n- `rate_denominator_unit_id: string`\n  The ID of the denominator unit for the rate.\n\n- `rate_numerator_unit_id: string`\n  The ID of the numerator unit for the rate.\n\n- `rate_value: string`\n  The rate value as a decimal string.\n\n- `recipient_account_id: string`\n  The ID of the recipient (customer) account.\n\n- `include?: 'recipient_account' | 'product_line'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ id: string; attributes: { id: string; object: 'attribute'; text: string; }[]; categories: { id: string; name: string; object: 'item_category'; }[]; created_at: string; object: 'account_price'; product_line: { id: string; name: string; object: 'product_line'; }; rate: { id: string; denominator_unit: object; numerator_unit: object; object: 'rate'; value: string; }; recipient_account: { id: string; name: string; object: 'account'; }; updated_at: string; }`\n  AccountPrice represents a customer-specific price for a product line.\n\n  - `id: string`\n  - `attributes: { id: string; object: 'attribute'; text: string; }[]`\n  - `categories: { id: string; name: string; object: 'item_category'; }[]`\n  - `created_at: string`\n  - `object: 'account_price'`\n  - `product_line: { id: string; name: string; object: 'product_line'; }`\n  - `rate: { id: string; denominator_unit: { id: string; abbreviation: string; created_at: string; is_base_unit: boolean; is_internal: boolean; name: string; object: 'unit'; offset_denominator: string; offset_numerator: string; ratio_denominator: string; ratio_numerator: string; type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'; updated_at: string; }; numerator_unit: { id: string; abbreviation: string; created_at: string; is_base_unit: boolean; is_internal: boolean; name: string; object: 'unit'; offset_denominator: string; offset_numerator: string; ratio_denominator: string; ratio_numerator: string; type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'; updated_at: string; }; object: 'rate'; value: string; }`\n  - `recipient_account: { id: string; name: string; object: 'account'; }`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst accountPrice = await client.core.accountPrices.create({\n  attribute_ids: ['at_01jm4r6700f8nwq3v5hx2d9ktp'],\n  category_ids: ['ic_01jm4r6700f8nwq3v5hx2d9ktp'],\n  product_line_id: 'pl_01jm4r6700f8nwq3v5hx2d9ktp',\n  rate_denominator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',\n  rate_numerator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',\n  rate_value: '25.500000000000000000000000000000',\n  recipient_account_id: 'ac_01gf7a8200eaj8fke1xvw4h50x',\n});\n\nconsole.log(accountPrice);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accountPrices.create',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountPrice = await client.core.accountPrices.create({\n  attribute_ids: ['at_01jm4r6700f8nwq3v5hx2d9ktp'],\n  category_ids: ['ic_01jm4r6700f8nwq3v5hx2d9ktp'],\n  product_line_id: 'pl_01jm4r6700f8nwq3v5hx2d9ktp',\n  rate_denominator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',\n  rate_numerator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',\n  rate_value: '25.500000000000000000000000000000',\n  recipient_account_id: 'ac_01gf7a8200eaj8fke1xvw4h50x',\n});\n\nconsole.log(accountPrice.id);",
      },
      python: {
        method: 'core.account_prices.create',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naccount_price = client.core.account_prices.create(\n    attribute_ids=["at_01jm4r6700f8nwq3v5hx2d9ktp"],\n    category_ids=["ic_01jm4r6700f8nwq3v5hx2d9ktp"],\n    product_line_id="pl_01jm4r6700f8nwq3v5hx2d9ktp",\n    rate_denominator_unit_id="un_01jm4r6700f8nwq3v5hx2d9ktp",\n    rate_numerator_unit_id="un_01jm4r6700f8nwq3v5hx2d9ktp",\n    rate_value="25.500000000000000000000000000000",\n    recipient_account_id="ac_01gf7a8200eaj8fke1xvw4h50x",\n)\nprint(account_price.id)',
      },
      kotlin: {
        method: 'core().accountPrices().create',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accountprices.AccountPrice\nimport com.augno.api.models.core.accountprices.AccountPriceCreateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: AccountPriceCreateParams = AccountPriceCreateParams.builder()\n        .addAttributeId("at_01jm4r6700f8nwq3v5hx2d9ktp")\n        .addCategoryId("ic_01jm4r6700f8nwq3v5hx2d9ktp")\n        .productLineId("pl_01jm4r6700f8nwq3v5hx2d9ktp")\n        .rateDenominatorUnitId("un_01jm4r6700f8nwq3v5hx2d9ktp")\n        .rateNumeratorUnitId("un_01jm4r6700f8nwq3v5hx2d9ktp")\n        .rateValue("25.500000000000000000000000000000")\n        .recipientAccountId("ac_01gf7a8200eaj8fke1xvw4h50x")\n        .build()\n    val accountPrice: AccountPrice = client.core().accountPrices().create(params)\n}',
      },
      go: {
        method: 'client.Core.AccountPrices.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountPrice, err := client.Core.AccountPrices.New(context.TODO(), augno.CoreAccountPriceNewParams{\n\t\tAttributeIDs:          []string{"at_01jm4r6700f8nwq3v5hx2d9ktp"},\n\t\tCategoryIDs:           []string{"ic_01jm4r6700f8nwq3v5hx2d9ktp"},\n\t\tProductLineID:         "pl_01jm4r6700f8nwq3v5hx2d9ktp",\n\t\tRateDenominatorUnitID: "un_01jm4r6700f8nwq3v5hx2d9ktp",\n\t\tRateNumeratorUnitID:   "un_01jm4r6700f8nwq3v5hx2d9ktp",\n\t\tRateValue:             "25.500000000000000000000000000000",\n\t\tRecipientAccountID:    "ac_01gf7a8200eaj8fke1xvw4h50x",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountPrice.ID)\n}\n',
      },
      ruby: {
        method: 'core.account_prices.create',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naccount_price = augno_client.core.account_prices.create(\n  attribute_ids: ["at_01jm4r6700f8nwq3v5hx2d9ktp"],\n  category_ids: ["ic_01jm4r6700f8nwq3v5hx2d9ktp"],\n  product_line_id: "pl_01jm4r6700f8nwq3v5hx2d9ktp",\n  rate_denominator_unit_id: "un_01jm4r6700f8nwq3v5hx2d9ktp",\n  rate_numerator_unit_id: "un_01jm4r6700f8nwq3v5hx2d9ktp",\n  rate_value: "25.500000000000000000000000000000",\n  recipient_account_id: "ac_01gf7a8200eaj8fke1xvw4h50x"\n)\n\nputs(account_price)',
      },
      csharp: {
        method: 'Core.AccountPrices.Create',
        example:
          'AccountPriceCreateParams parameters = new()\n{\n    AttributeIds =\n    [\n        "at_01jm4r6700f8nwq3v5hx2d9ktp"\n    ],\n    CategoryIds =\n    [\n        "ic_01jm4r6700f8nwq3v5hx2d9ktp"\n    ],\n    ProductLineID = "pl_01jm4r6700f8nwq3v5hx2d9ktp",\n    RateDenominatorUnitID = "un_01jm4r6700f8nwq3v5hx2d9ktp",\n    RateNumeratorUnitID = "un_01jm4r6700f8nwq3v5hx2d9ktp",\n    RateValue = "25.500000000000000000000000000000",\n    RecipientAccountID = "ac_01gf7a8200eaj8fke1xvw4h50x",\n};\n\nvar accountPrice = await client.Core.AccountPrices.Create(parameters);\n\nConsole.WriteLine(accountPrice);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/account-prices \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "attribute_ids": [\n            "at_01jm4r6700f8nwq3v5hx2d9ktp"\n          ],\n          "category_ids": [\n            "ic_01jm4r6700f8nwq3v5hx2d9ktp"\n          ],\n          "product_line_id": "pl_01jm4r6700f8nwq3v5hx2d9ktp",\n          "rate_denominator_unit_id": "un_01jm4r6700f8nwq3v5hx2d9ktp",\n          "rate_numerator_unit_id": "un_01jm4r6700f8nwq3v5hx2d9ktp",\n          "rate_value": "25.500000000000000000000000000000",\n          "recipient_account_id": "ac_01gf7a8200eaj8fke1xvw4h50x"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/core/account-prices/{id}',
    httpMethod: 'delete',
    summary: 'Delete Account Price',
    description:
      'This endpoint deletes an account price.\nAssociated category constraints, attribute constraints, and the rate record are also removed.',
    stainlessPath: '(resource) core.account_prices > (method) delete',
    qualified: 'client.core.accountPrices.delete',
    params: ['id: string;'],
    response: '{  }',
    markdown:
      "## delete\n\n`client.core.accountPrices.delete(id: string): {  }`\n\n**delete** `/v1/core/account-prices/{id}`\n\nThis endpoint deletes an account price.\nAssociated category constraints, attribute constraints, and the rate record are also removed.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{  }`\n\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst accountPrice = await client.core.accountPrices.delete('id');\n\nconsole.log(accountPrice);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accountPrices.delete',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountPrice = await client.core.accountPrices.delete('id');\n\nconsole.log(accountPrice);",
      },
      python: {
        method: 'core.account_prices.delete',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naccount_price = client.core.account_prices.delete(\n    "id",\n)\nprint(account_price)',
      },
      kotlin: {
        method: 'core().accountPrices().delete',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accountprices.AccountPriceDeleteParams\nimport com.augno.api.models.core.accountprices.AccountPriceDeleteResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val accountPrice: AccountPriceDeleteResponse = client.core().accountPrices().delete("id")\n}',
      },
      go: {
        method: 'client.Core.AccountPrices.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountPrice, err := client.Core.AccountPrices.Delete(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountPrice)\n}\n',
      },
      ruby: {
        method: 'core.account_prices.delete',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naccount_price = augno_client.core.account_prices.delete("id")\n\nputs(account_price)',
      },
      csharp: {
        method: 'Core.AccountPrices.Delete',
        example:
          'AccountPriceDeleteParams parameters = new() { ID = "id" };\n\nvar accountPrice = await client.Core.AccountPrices.Delete(parameters);\n\nConsole.WriteLine(accountPrice);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/account-prices/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/core/account-prices/{id}',
    httpMethod: 'get',
    summary: 'Get Account Price',
    description:
      'This endpoint returns a single account price by its ID.\nThe account price must belong to the requesting account.',
    stainlessPath: '(resource) core.account_prices > (method) retrieve',
    qualified: 'client.core.accountPrices.retrieve',
    params: ['id: string;', "include?: 'recipient_account' | 'product_line'[];"],
    response:
      "{ id: string; attributes: { id: string; object: 'attribute'; text: string; }[]; categories: { id: string; name: string; object: 'item_category'; }[]; created_at: string; object: 'account_price'; product_line: { id: string; name: string; object: 'product_line'; }; rate: { id: string; denominator_unit: object; numerator_unit: object; object: 'rate'; value: string; }; recipient_account: { id: string; name: string; object: 'account'; }; updated_at: string; }",
    markdown:
      "## retrieve\n\n`client.core.accountPrices.retrieve(id: string, include?: 'recipient_account' | 'product_line'[]): { id: string; attributes: light_attribute[]; categories: light_item_category[]; created_at: string; object: 'account_price'; product_line: light_product_line; rate: object; recipient_account: light_account; updated_at: string; }`\n\n**get** `/v1/core/account-prices/{id}`\n\nThis endpoint returns a single account price by its ID.\nThe account price must belong to the requesting account.\n\n### Parameters\n\n- `id: string`\n\n- `include?: 'recipient_account' | 'product_line'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ id: string; attributes: { id: string; object: 'attribute'; text: string; }[]; categories: { id: string; name: string; object: 'item_category'; }[]; created_at: string; object: 'account_price'; product_line: { id: string; name: string; object: 'product_line'; }; rate: { id: string; denominator_unit: object; numerator_unit: object; object: 'rate'; value: string; }; recipient_account: { id: string; name: string; object: 'account'; }; updated_at: string; }`\n  AccountPrice represents a customer-specific price for a product line.\n\n  - `id: string`\n  - `attributes: { id: string; object: 'attribute'; text: string; }[]`\n  - `categories: { id: string; name: string; object: 'item_category'; }[]`\n  - `created_at: string`\n  - `object: 'account_price'`\n  - `product_line: { id: string; name: string; object: 'product_line'; }`\n  - `rate: { id: string; denominator_unit: { id: string; abbreviation: string; created_at: string; is_base_unit: boolean; is_internal: boolean; name: string; object: 'unit'; offset_denominator: string; offset_numerator: string; ratio_denominator: string; ratio_numerator: string; type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'; updated_at: string; }; numerator_unit: { id: string; abbreviation: string; created_at: string; is_base_unit: boolean; is_internal: boolean; name: string; object: 'unit'; offset_denominator: string; offset_numerator: string; ratio_denominator: string; ratio_numerator: string; type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'; updated_at: string; }; object: 'rate'; value: string; }`\n  - `recipient_account: { id: string; name: string; object: 'account'; }`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst accountPrice = await client.core.accountPrices.retrieve('id');\n\nconsole.log(accountPrice);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accountPrices.retrieve',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountPrice = await client.core.accountPrices.retrieve('id');\n\nconsole.log(accountPrice.id);",
      },
      python: {
        method: 'core.account_prices.retrieve',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naccount_price = client.core.account_prices.retrieve(\n    id="id",\n)\nprint(account_price.id)',
      },
      kotlin: {
        method: 'core().accountPrices().retrieve',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accountprices.AccountPrice\nimport com.augno.api.models.core.accountprices.AccountPriceRetrieveParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val accountPrice: AccountPrice = client.core().accountPrices().retrieve("id")\n}',
      },
      go: {
        method: 'client.Core.AccountPrices.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountPrice, err := client.Core.AccountPrices.Get(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreAccountPriceGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountPrice.ID)\n}\n',
      },
      ruby: {
        method: 'core.account_prices.retrieve',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naccount_price = augno_client.core.account_prices.retrieve("id")\n\nputs(account_price)',
      },
      csharp: {
        method: 'Core.AccountPrices.Retrieve',
        example:
          'AccountPriceRetrieveParams parameters = new() { ID = "id" };\n\nvar accountPrice = await client.Core.AccountPrices.Retrieve(parameters);\n\nConsole.WriteLine(accountPrice);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/account-prices/$ID \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/core/account-prices/{id}',
    httpMethod: 'patch',
    summary: 'Update Account Price',
    description:
      'This endpoint partially updates an account price.\nOnly provided fields are updated; absent fields retain their current values.\nIf category_ids or attribute_ids are provided, they replace the existing set entirely.',
    stainlessPath: '(resource) core.account_prices > (method) update',
    qualified: 'client.core.accountPrices.update',
    params: [
      'id: string;',
      "include?: 'recipient_account' | 'product_line'[];",
      'attribute_ids?: string[];',
      'category_ids?: string[];',
      'product_line_id?: string;',
      'rate_denominator_unit_id?: string;',
      'rate_numerator_unit_id?: string;',
      'rate_value?: string;',
      'recipient_account_id?: string;',
    ],
    response:
      "{ id: string; attributes: { id: string; object: 'attribute'; text: string; }[]; categories: { id: string; name: string; object: 'item_category'; }[]; created_at: string; object: 'account_price'; product_line: { id: string; name: string; object: 'product_line'; }; rate: { id: string; denominator_unit: object; numerator_unit: object; object: 'rate'; value: string; }; recipient_account: { id: string; name: string; object: 'account'; }; updated_at: string; }",
    markdown:
      "## update\n\n`client.core.accountPrices.update(id: string, include?: 'recipient_account' | 'product_line'[], attribute_ids?: string[], category_ids?: string[], product_line_id?: string, rate_denominator_unit_id?: string, rate_numerator_unit_id?: string, rate_value?: string, recipient_account_id?: string): { id: string; attributes: light_attribute[]; categories: light_item_category[]; created_at: string; object: 'account_price'; product_line: light_product_line; rate: object; recipient_account: light_account; updated_at: string; }`\n\n**patch** `/v1/core/account-prices/{id}`\n\nThis endpoint partially updates an account price.\nOnly provided fields are updated; absent fields retain their current values.\nIf category_ids or attribute_ids are provided, they replace the existing set entirely.\n\n### Parameters\n\n- `id: string`\n\n- `include?: 'recipient_account' | 'product_line'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n- `attribute_ids?: string[]`\n  The IDs of attributes to constrain this price to. Replaces existing attributes.\n\n- `category_ids?: string[]`\n  The IDs of item categories to constrain this price to. Replaces existing categories.\n\n- `product_line_id?: string`\n  The ID of the product line this price applies to.\n\n- `rate_denominator_unit_id?: string`\n  The ID of the denominator unit for the rate.\n\n- `rate_numerator_unit_id?: string`\n  The ID of the numerator unit for the rate.\n\n- `rate_value?: string`\n  The rate value as a decimal string.\n\n- `recipient_account_id?: string`\n  The ID of the recipient (customer) account.\n\n### Returns\n\n- `{ id: string; attributes: { id: string; object: 'attribute'; text: string; }[]; categories: { id: string; name: string; object: 'item_category'; }[]; created_at: string; object: 'account_price'; product_line: { id: string; name: string; object: 'product_line'; }; rate: { id: string; denominator_unit: object; numerator_unit: object; object: 'rate'; value: string; }; recipient_account: { id: string; name: string; object: 'account'; }; updated_at: string; }`\n  AccountPrice represents a customer-specific price for a product line.\n\n  - `id: string`\n  - `attributes: { id: string; object: 'attribute'; text: string; }[]`\n  - `categories: { id: string; name: string; object: 'item_category'; }[]`\n  - `created_at: string`\n  - `object: 'account_price'`\n  - `product_line: { id: string; name: string; object: 'product_line'; }`\n  - `rate: { id: string; denominator_unit: { id: string; abbreviation: string; created_at: string; is_base_unit: boolean; is_internal: boolean; name: string; object: 'unit'; offset_denominator: string; offset_numerator: string; ratio_denominator: string; ratio_numerator: string; type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'; updated_at: string; }; numerator_unit: { id: string; abbreviation: string; created_at: string; is_base_unit: boolean; is_internal: boolean; name: string; object: 'unit'; offset_denominator: string; offset_numerator: string; ratio_denominator: string; ratio_numerator: string; type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'; updated_at: string; }; object: 'rate'; value: string; }`\n  - `recipient_account: { id: string; name: string; object: 'account'; }`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst accountPrice = await client.core.accountPrices.update('id');\n\nconsole.log(accountPrice);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accountPrices.update',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountPrice = await client.core.accountPrices.update('id', {\n  rate_value: '30.000000000000000000000000000000',\n});\n\nconsole.log(accountPrice.id);",
      },
      python: {
        method: 'core.account_prices.update',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naccount_price = client.core.account_prices.update(\n    id="id",\n    rate_value="30.000000000000000000000000000000",\n)\nprint(account_price.id)',
      },
      kotlin: {
        method: 'core().accountPrices().update',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accountprices.AccountPrice\nimport com.augno.api.models.core.accountprices.AccountPriceUpdateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val accountPrice: AccountPrice = client.core().accountPrices().update("id")\n}',
      },
      go: {
        method: 'client.Core.AccountPrices.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountPrice, err := client.Core.AccountPrices.Update(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreAccountPriceUpdateParams{\n\t\t\tRateValue: augno.String("30.000000000000000000000000000000"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountPrice.ID)\n}\n',
      },
      ruby: {
        method: 'core.account_prices.update',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naccount_price = augno_client.core.account_prices.update("id")\n\nputs(account_price)',
      },
      csharp: {
        method: 'Core.AccountPrices.Update',
        example:
          'AccountPriceUpdateParams parameters = new() { ID = "id" };\n\nvar accountPrice = await client.Core.AccountPrices.Update(parameters);\n\nConsole.WriteLine(accountPrice);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/account-prices/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/core/account-statuses',
    httpMethod: 'get',
    summary: 'List Account Statuses',
    description:
      'This endpoint returns a paginated list of account statuses.\nAccount statuses are global lookup values used when setting account relationship statuses.',
    stainlessPath: '(resource) core.account_statuses > (method) list',
    qualified: 'client.core.accountStatuses.list',
    response:
      "{ data: { id: string; code: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all'; created_at: string; name: string; object: 'account_status'; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }",
    markdown:
      "## list\n\n`client.core.accountStatuses.list(): { data: account_status[]; object: 'list'; page_info: page_info; }`\n\n**get** `/v1/core/account-statuses`\n\nThis endpoint returns a paginated list of account statuses.\nAccount statuses are global lookup values used when setting account relationship statuses.\n\n### Returns\n\n- `{ data: { id: string; code: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all'; created_at: string; name: string; object: 'account_status'; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }`\n  A paginated list of AccountStatus resources\n\n  - `data: { id: string; code: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all'; created_at: string; name: string; object: 'account_status'; updated_at: string; }[]`\n  - `object: 'list'`\n  - `page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst accountStatuses = await client.core.accountStatuses.list();\n\nconsole.log(accountStatuses);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accountStatuses.list',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountStatuses = await client.core.accountStatuses.list();\n\nconsole.log(accountStatuses.data);",
      },
      python: {
        method: 'core.account_statuses.list',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naccount_statuses = client.core.account_statuses.list()\nprint(account_statuses.data)',
      },
      kotlin: {
        method: 'core().accountStatuses().list',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accountstatuses.AccountStatusListParams\nimport com.augno.api.models.core.accountstatuses.AccountStatusListResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val accountStatuses: AccountStatusListResponse = client.core().accountStatuses().list()\n}',
      },
      go: {
        method: 'client.Core.AccountStatuses.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountStatuses, err := client.Core.AccountStatuses.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountStatuses.Data)\n}\n',
      },
      ruby: {
        method: 'core.account_statuses.list',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naccount_statuses = augno_client.core.account_statuses.list\n\nputs(account_statuses)',
      },
      csharp: {
        method: 'Core.AccountStatuses.List',
        example:
          'AccountStatusListParams parameters = new();\n\nvar accountStatuses = await client.Core.AccountStatuses.List(parameters);\n\nConsole.WriteLine(accountStatuses);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/account-statuses \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/core/account-statuses/{id}',
    httpMethod: 'get',
    summary: 'Get Account Status',
    description: 'This endpoint returns a single account status by its ID.',
    stainlessPath: '(resource) core.account_statuses > (method) retrieve',
    qualified: 'client.core.accountStatuses.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; code: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all'; created_at: string; name: string; object: 'account_status'; updated_at: string; }",
    markdown:
      "## retrieve\n\n`client.core.accountStatuses.retrieve(id: string): { id: string; code: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all'; created_at: string; name: string; object: 'account_status'; updated_at: string; }`\n\n**get** `/v1/core/account-statuses/{id}`\n\nThis endpoint returns a single account status by its ID.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; code: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all'; created_at: string; name: string; object: 'account_status'; updated_at: string; }`\n  AccountStatus represents an account status lookup value.\n\n  - `id: string`\n  - `code: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all'`\n  - `created_at: string`\n  - `name: string`\n  - `object: 'account_status'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst accountStatus = await client.core.accountStatuses.retrieve('id');\n\nconsole.log(accountStatus);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accountStatuses.retrieve',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountStatus = await client.core.accountStatuses.retrieve('id');\n\nconsole.log(accountStatus.id);",
      },
      python: {
        method: 'core.account_statuses.retrieve',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naccount_status = client.core.account_statuses.retrieve(\n    "id",\n)\nprint(account_status.id)',
      },
      kotlin: {
        method: 'core().accountStatuses().retrieve',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accountstatuses.AccountStatus\nimport com.augno.api.models.core.accountstatuses.AccountStatusRetrieveParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val accountStatus: AccountStatus = client.core().accountStatuses().retrieve("id")\n}',
      },
      go: {
        method: 'client.Core.AccountStatuses.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountStatus, err := client.Core.AccountStatuses.Get(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountStatus.ID)\n}\n',
      },
      ruby: {
        method: 'core.account_statuses.retrieve',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naccount_status = augno_client.core.account_statuses.retrieve("id")\n\nputs(account_status)',
      },
      csharp: {
        method: 'Core.AccountStatuses.Retrieve',
        example:
          'AccountStatusRetrieveParams parameters = new() { ID = "id" };\n\nvar accountStatus = await client.Core.AccountStatuses.Retrieve(parameters);\n\nConsole.WriteLine(accountStatus);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/account-statuses/$ID \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/core/account-users',
    httpMethod: 'get',
    summary: 'List Account Users',
    description:
      'This endpoint returns a paginated list of account users for the target account.\nSupports cursor-based pagination, filtering by role type, and search by name, email, or username.',
    stainlessPath: '(resource) core.account_users > (method) list',
    qualified: 'client.core.accountUsers.list',
    params: [
      'include_removed?: boolean;',
      "role_type?: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent';",
    ],
    response:
      "{ data: { id: string; created_at: string; department: object; email: string; image_url: string; is_verified: boolean; last_used_at: string; name: string; object: 'account_user'; role: light_role; status: 'active' | 'disabled' | 'removed'; updated_at: string; username: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }",
    markdown:
      "## list\n\n`client.core.accountUsers.list(include_removed?: boolean, role_type?: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'): { data: account_user[]; object: 'list'; page_info: page_info; }`\n\n**get** `/v1/core/account-users`\n\nThis endpoint returns a paginated list of account users for the target account.\nSupports cursor-based pagination, filtering by role type, and search by name, email, or username.\n\n### Parameters\n\n- `include_removed?: boolean`\n  Whether to include removed account users in the results.\n\n- `role_type?: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'`\n  Filter by role type code.\n\n### Returns\n\n- `{ data: { id: string; created_at: string; department: object; email: string; image_url: string; is_verified: boolean; last_used_at: string; name: string; object: 'account_user'; role: light_role; status: 'active' | 'disabled' | 'removed'; updated_at: string; username: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }`\n  A paginated list of AccountUser resources\n\n  - `data: { id: string; created_at: string; department: { id: string; name: string; object: 'department'; }; email: string; image_url: string; is_verified: boolean; last_used_at: string; name: string; object: 'account_user'; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; status: 'active' | 'disabled' | 'removed'; updated_at: string; username: string; }[]`\n  - `object: 'list'`\n  - `page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst accountUsers = await client.core.accountUsers.list();\n\nconsole.log(accountUsers);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accountUsers.list',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountUsers = await client.core.accountUsers.list();\n\nconsole.log(accountUsers.data);",
      },
      python: {
        method: 'core.account_users.list',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naccount_users = client.core.account_users.list()\nprint(account_users.data)',
      },
      kotlin: {
        method: 'core().accountUsers().list',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accountusers.AccountUserListParams\nimport com.augno.api.models.core.accountusers.AccountUserListResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val accountUsers: AccountUserListResponse = client.core().accountUsers().list()\n}',
      },
      go: {
        method: 'client.Core.AccountUsers.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountUsers, err := client.Core.AccountUsers.List(context.TODO(), augno.CoreAccountUserListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountUsers.Data)\n}\n',
      },
      ruby: {
        method: 'core.account_users.list',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naccount_users = augno_client.core.account_users.list\n\nputs(account_users)',
      },
      csharp: {
        method: 'Core.AccountUsers.List',
        example:
          'AccountUserListParams parameters = new();\n\nvar accountUsers = await client.Core.AccountUsers.List(parameters);\n\nConsole.WriteLine(accountUsers);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/account-users \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/core/account-users',
    httpMethod: 'post',
    summary: 'Create Account User',
    description: 'This endpoint creates a new account user and invites them to the account.',
    stainlessPath: '(resource) core.account_users > (method) create',
    qualified: 'client.core.accountUsers.create',
    params: [
      'custom_email: string;',
      'name: string;',
      'password: string;',
      'receives_invoice_notifications: boolean;',
      'receives_order_acknowledgements: boolean;',
      'receives_purchase_order_submission_notifications: boolean;',
      'username: string;',
      'department_id?: string;',
      'is_sales_rep?: boolean;',
      'role_id?: string;',
    ],
    response:
      "{ id: string; created_at: string; department: { id: string; name: string; object: 'department'; }; email: string; image_url: string; is_verified: boolean; last_used_at: string; name: string; object: 'account_user'; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; status: 'active' | 'disabled' | 'removed'; updated_at: string; username: string; }",
    markdown:
      "## create\n\n`client.core.accountUsers.create(custom_email: string, name: string, password: string, receives_invoice_notifications: boolean, receives_order_acknowledgements: boolean, receives_purchase_order_submission_notifications: boolean, username: string, department_id?: string, is_sales_rep?: boolean, role_id?: string): { id: string; created_at: string; department: object; email: string; image_url: string; is_verified: boolean; last_used_at: string; name: string; object: 'account_user'; role: light_role; status: 'active' | 'disabled' | 'removed'; updated_at: string; username: string; }`\n\n**post** `/v1/core/account-users`\n\nThis endpoint creates a new account user and invites them to the account.\n\n### Parameters\n\n- `custom_email: string`\n  The user's email address.\n\n- `name: string`\n  The user's display name.\n\n- `password: string`\n  The user's password.\n\n- `receives_invoice_notifications: boolean`\n  Whether the user receives invoice notifications.\n\n- `receives_order_acknowledgements: boolean`\n  Whether the user receives order acknowledgement notifications.\n\n- `receives_purchase_order_submission_notifications: boolean`\n  Whether the user receives purchase order submission notifications.\n\n- `username: string`\n  The user's username.\n\n- `department_id?: string`\n  The ID of the department to assign. Expandable.\n\n- `is_sales_rep?: boolean`\n  Whether the user is a sales representative.\n\n- `role_id?: string`\n  The ID of the role to assign. Expandable.\n\n### Returns\n\n- `{ id: string; created_at: string; department: { id: string; name: string; object: 'department'; }; email: string; image_url: string; is_verified: boolean; last_used_at: string; name: string; object: 'account_user'; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; status: 'active' | 'disabled' | 'removed'; updated_at: string; username: string; }`\n  AccountUser represents an account user with their profile, role, and department.\n\n  - `id: string`\n  - `created_at: string`\n  - `department: { id: string; name: string; object: 'department'; }`\n  - `email: string`\n  - `image_url: string`\n  - `is_verified: boolean`\n  - `last_used_at: string`\n  - `name: string`\n  - `object: 'account_user'`\n  - `role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }`\n  - `status: 'active' | 'disabled' | 'removed'`\n  - `updated_at: string`\n  - `username: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst accountUser = await client.core.accountUsers.create({\n  custom_email: 'custom_email',\n  name: 'name',\n  password: 'password',\n  receives_invoice_notifications: true,\n  receives_order_acknowledgements: true,\n  receives_purchase_order_submission_notifications: true,\n  username: 'username',\n});\n\nconsole.log(accountUser);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accountUsers.create',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountUser = await client.core.accountUsers.create({\n  custom_email: 'custom_email',\n  name: 'name',\n  password: 'password',\n  receives_invoice_notifications: true,\n  receives_order_acknowledgements: true,\n  receives_purchase_order_submission_notifications: true,\n  username: 'username',\n});\n\nconsole.log(accountUser.id);",
      },
      python: {
        method: 'core.account_users.create',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naccount_user = client.core.account_users.create(\n    custom_email="custom_email",\n    name="name",\n    password="password",\n    receives_invoice_notifications=True,\n    receives_order_acknowledgements=True,\n    receives_purchase_order_submission_notifications=True,\n    username="username",\n)\nprint(account_user.id)',
      },
      kotlin: {
        method: 'core().accountUsers().create',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accountusers.AccountUser\nimport com.augno.api.models.core.accountusers.AccountUserCreateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: AccountUserCreateParams = AccountUserCreateParams.builder()\n        .customEmail("custom_email")\n        .name("name")\n        .password("password")\n        .receivesInvoiceNotifications(true)\n        .receivesOrderAcknowledgements(true)\n        .receivesPurchaseOrderSubmissionNotifications(true)\n        .username("username")\n        .build()\n    val accountUser: AccountUser = client.core().accountUsers().create(params)\n}',
      },
      go: {
        method: 'client.Core.AccountUsers.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountUser, err := client.Core.AccountUsers.New(context.TODO(), augno.CoreAccountUserNewParams{\n\t\tCustomEmail:                   augno.String("custom_email"),\n\t\tName:                          augno.String("name"),\n\t\tPassword:                      augno.String("password"),\n\t\tReceivesInvoiceNotifications:  true,\n\t\tReceivesOrderAcknowledgements: true,\n\t\tReceivesPurchaseOrderSubmissionNotifications: true,\n\t\tUsername: augno.String("username"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountUser.ID)\n}\n',
      },
      ruby: {
        method: 'core.account_users.create',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naccount_user = augno_client.core.account_users.create(\n  custom_email: "custom_email",\n  name: "name",\n  password: "password",\n  receives_invoice_notifications: true,\n  receives_order_acknowledgements: true,\n  receives_purchase_order_submission_notifications: true,\n  username: "username"\n)\n\nputs(account_user)',
      },
      csharp: {
        method: 'Core.AccountUsers.Create',
        example:
          'AccountUserCreateParams parameters = new()\n{\n    CustomEmail = "custom_email",\n    Name = "name",\n    Password = "password",\n    ReceivesInvoiceNotifications = true,\n    ReceivesOrderAcknowledgements = true,\n    ReceivesPurchaseOrderSubmissionNotifications = true,\n    Username = "username",\n};\n\nvar accountUser = await client.Core.AccountUsers.Create(parameters);\n\nConsole.WriteLine(accountUser);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/account-users \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "custom_email": "custom_email",\n          "name": "name",\n          "password": "password",\n          "receives_invoice_notifications": true,\n          "receives_order_acknowledgements": true,\n          "receives_purchase_order_submission_notifications": true,\n          "username": "username"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/core/account-users/{id}',
    httpMethod: 'delete',
    summary: 'Delete Account User',
    description: 'This endpoint soft-deletes an account user, setting their status to removed.',
    stainlessPath: '(resource) core.account_users > (method) delete',
    qualified: 'client.core.accountUsers.delete',
    params: ['id: string;'],
    response: '{  }',
    markdown:
      "## delete\n\n`client.core.accountUsers.delete(id: string): {  }`\n\n**delete** `/v1/core/account-users/{id}`\n\nThis endpoint soft-deletes an account user, setting their status to removed.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{  }`\n\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst accountUser = await client.core.accountUsers.delete('id');\n\nconsole.log(accountUser);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accountUsers.delete',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountUser = await client.core.accountUsers.delete('id');\n\nconsole.log(accountUser);",
      },
      python: {
        method: 'core.account_users.delete',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naccount_user = client.core.account_users.delete(\n    "id",\n)\nprint(account_user)',
      },
      kotlin: {
        method: 'core().accountUsers().delete',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accountusers.AccountUserDeleteParams\nimport com.augno.api.models.core.accountusers.AccountUserDeleteResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val accountUser: AccountUserDeleteResponse = client.core().accountUsers().delete("id")\n}',
      },
      go: {
        method: 'client.Core.AccountUsers.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountUser, err := client.Core.AccountUsers.Delete(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountUser)\n}\n',
      },
      ruby: {
        method: 'core.account_users.delete',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naccount_user = augno_client.core.account_users.delete("id")\n\nputs(account_user)',
      },
      csharp: {
        method: 'Core.AccountUsers.Delete',
        example:
          'AccountUserDeleteParams parameters = new() { ID = "id" };\n\nvar accountUser = await client.Core.AccountUsers.Delete(parameters);\n\nConsole.WriteLine(accountUser);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/account-users/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/core/account-users/{id}',
    httpMethod: 'get',
    summary: 'Get Account User',
    description: 'This endpoint returns a single account user by their ID.',
    stainlessPath: '(resource) core.account_users > (method) retrieve',
    qualified: 'client.core.accountUsers.retrieve',
    params: ['id: string;', "include?: 'role' | 'department'[];"],
    response:
      "{ id: string; created_at: string; department: { id: string; name: string; object: 'department'; }; email: string; image_url: string; is_verified: boolean; last_used_at: string; name: string; object: 'account_user'; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; status: 'active' | 'disabled' | 'removed'; updated_at: string; username: string; }",
    markdown:
      "## retrieve\n\n`client.core.accountUsers.retrieve(id: string, include?: 'role' | 'department'[]): { id: string; created_at: string; department: object; email: string; image_url: string; is_verified: boolean; last_used_at: string; name: string; object: 'account_user'; role: light_role; status: 'active' | 'disabled' | 'removed'; updated_at: string; username: string; }`\n\n**get** `/v1/core/account-users/{id}`\n\nThis endpoint returns a single account user by their ID.\n\n### Parameters\n\n- `id: string`\n\n- `include?: 'role' | 'department'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ id: string; created_at: string; department: { id: string; name: string; object: 'department'; }; email: string; image_url: string; is_verified: boolean; last_used_at: string; name: string; object: 'account_user'; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; status: 'active' | 'disabled' | 'removed'; updated_at: string; username: string; }`\n  AccountUser represents an account user with their profile, role, and department.\n\n  - `id: string`\n  - `created_at: string`\n  - `department: { id: string; name: string; object: 'department'; }`\n  - `email: string`\n  - `image_url: string`\n  - `is_verified: boolean`\n  - `last_used_at: string`\n  - `name: string`\n  - `object: 'account_user'`\n  - `role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }`\n  - `status: 'active' | 'disabled' | 'removed'`\n  - `updated_at: string`\n  - `username: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst accountUser = await client.core.accountUsers.retrieve('id');\n\nconsole.log(accountUser);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accountUsers.retrieve',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountUser = await client.core.accountUsers.retrieve('id');\n\nconsole.log(accountUser.id);",
      },
      python: {
        method: 'core.account_users.retrieve',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naccount_user = client.core.account_users.retrieve(\n    id="id",\n)\nprint(account_user.id)',
      },
      kotlin: {
        method: 'core().accountUsers().retrieve',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accountusers.AccountUser\nimport com.augno.api.models.core.accountusers.AccountUserRetrieveParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val accountUser: AccountUser = client.core().accountUsers().retrieve("id")\n}',
      },
      go: {
        method: 'client.Core.AccountUsers.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountUser, err := client.Core.AccountUsers.Get(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreAccountUserGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountUser.ID)\n}\n',
      },
      ruby: {
        method: 'core.account_users.retrieve',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naccount_user = augno_client.core.account_users.retrieve("id")\n\nputs(account_user)',
      },
      csharp: {
        method: 'Core.AccountUsers.Retrieve',
        example:
          'AccountUserRetrieveParams parameters = new() { ID = "id" };\n\nvar accountUser = await client.Core.AccountUsers.Retrieve(parameters);\n\nConsole.WriteLine(accountUser);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/account-users/$ID \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/core/account-users/{id}',
    httpMethod: 'patch',
    summary: 'Update Account User',
    description:
      'This endpoint partially updates an account user.\nOnly provided fields are updated; absent fields retain their current values.',
    stainlessPath: '(resource) core.account_users > (method) update',
    qualified: 'client.core.accountUsers.update',
    params: [
      'id: string;',
      'custom_email?: string;',
      'department_id?: string;',
      'name?: string;',
      'role_id?: string;',
      'username?: string;',
    ],
    response:
      "{ id: string; created_at: string; department: { id: string; name: string; object: 'department'; }; email: string; image_url: string; is_verified: boolean; last_used_at: string; name: string; object: 'account_user'; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; status: 'active' | 'disabled' | 'removed'; updated_at: string; username: string; }",
    markdown:
      "## update\n\n`client.core.accountUsers.update(id: string, custom_email?: string, department_id?: string, name?: string, role_id?: string, username?: string): { id: string; created_at: string; department: object; email: string; image_url: string; is_verified: boolean; last_used_at: string; name: string; object: 'account_user'; role: light_role; status: 'active' | 'disabled' | 'removed'; updated_at: string; username: string; }`\n\n**patch** `/v1/core/account-users/{id}`\n\nThis endpoint partially updates an account user.\nOnly provided fields are updated; absent fields retain their current values.\n\n### Parameters\n\n- `id: string`\n\n- `custom_email?: string`\n  The user's email address.\n\n- `department_id?: string`\n  The ID of the department to assign.\n\n- `name?: string`\n  The user's display name.\n\n- `role_id?: string`\n  The ID of the role to assign.\n\n- `username?: string`\n  The user's username.\n\n### Returns\n\n- `{ id: string; created_at: string; department: { id: string; name: string; object: 'department'; }; email: string; image_url: string; is_verified: boolean; last_used_at: string; name: string; object: 'account_user'; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; status: 'active' | 'disabled' | 'removed'; updated_at: string; username: string; }`\n  AccountUser represents an account user with their profile, role, and department.\n\n  - `id: string`\n  - `created_at: string`\n  - `department: { id: string; name: string; object: 'department'; }`\n  - `email: string`\n  - `image_url: string`\n  - `is_verified: boolean`\n  - `last_used_at: string`\n  - `name: string`\n  - `object: 'account_user'`\n  - `role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }`\n  - `status: 'active' | 'disabled' | 'removed'`\n  - `updated_at: string`\n  - `username: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst accountUser = await client.core.accountUsers.update('id');\n\nconsole.log(accountUser);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accountUsers.update',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountUser = await client.core.accountUsers.update('id');\n\nconsole.log(accountUser.id);",
      },
      python: {
        method: 'core.account_users.update',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naccount_user = client.core.account_users.update(\n    id="id",\n)\nprint(account_user.id)',
      },
      kotlin: {
        method: 'core().accountUsers().update',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accountusers.AccountUser\nimport com.augno.api.models.core.accountusers.AccountUserUpdateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val accountUser: AccountUser = client.core().accountUsers().update("id")\n}',
      },
      go: {
        method: 'client.Core.AccountUsers.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountUser, err := client.Core.AccountUsers.Update(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreAccountUserUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountUser.ID)\n}\n',
      },
      ruby: {
        method: 'core.account_users.update',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naccount_user = augno_client.core.account_users.update("id")\n\nputs(account_user)',
      },
      csharp: {
        method: 'Core.AccountUsers.Update',
        example:
          'AccountUserUpdateParams parameters = new() { ID = "id" };\n\nvar accountUser = await client.Core.AccountUsers.Update(parameters);\n\nConsole.WriteLine(accountUser);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/account-users/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'lock',
    endpoint: '/v1/core/account-users/{id}/lock',
    httpMethod: 'post',
    summary: 'Lock Account User',
    description: 'This endpoint locks an account user, preventing them from accessing the account.',
    stainlessPath: '(resource) core.account_users > (method) lock',
    qualified: 'client.core.accountUsers.lock',
    params: ['id: string;'],
    response: '{  }',
    markdown:
      "## lock\n\n`client.core.accountUsers.lock(id: string): {  }`\n\n**post** `/v1/core/account-users/{id}/lock`\n\nThis endpoint locks an account user, preventing them from accessing the account.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{  }`\n\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst response = await client.core.accountUsers.lock('id');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accountUsers.lock',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.core.accountUsers.lock('id');\n\nconsole.log(response);",
      },
      python: {
        method: 'core.account_users.lock',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.core.account_users.lock(\n    "id",\n)\nprint(response)',
      },
      kotlin: {
        method: 'core().accountUsers().lock',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accountusers.AccountUserLockParams\nimport com.augno.api.models.core.accountusers.AccountUserLockResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val response: AccountUserLockResponse = client.core().accountUsers().lock("id")\n}',
      },
      go: {
        method: 'client.Core.AccountUsers.Lock',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Core.AccountUsers.Lock(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      ruby: {
        method: 'core.account_users.lock',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nresponse = augno_client.core.account_users.lock("id")\n\nputs(response)',
      },
      csharp: {
        method: 'Core.AccountUsers.Lock',
        example:
          'AccountUserLockParams parameters = new() { ID = "id" };\n\nvar response = await client.Core.AccountUsers.Lock(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/account-users/$ID/lock \\\n    -X POST \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'update_notification_preferences',
    endpoint: '/v1/core/account-users/{id}/notification-preferences',
    httpMethod: 'put',
    summary: 'Update Notification Preferences',
    description:
      'This endpoint updates notification preferences for an account user. Only valid for external (cross-account) targets.',
    stainlessPath: '(resource) core.account_users > (method) update_notification_preferences',
    qualified: 'client.core.accountUsers.updateNotificationPreferences',
    params: ['id: string;', 'preferences: { enabled: boolean; notification_type_code: string; }[];'],
    response:
      "{ id: string; created_at: string; department: { id: string; name: string; object: 'department'; }; email: string; image_url: string; is_verified: boolean; last_used_at: string; name: string; object: 'account_user'; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; status: 'active' | 'disabled' | 'removed'; updated_at: string; username: string; }",
    markdown:
      "## update_notification_preferences\n\n`client.core.accountUsers.updateNotificationPreferences(id: string, preferences: { enabled: boolean; notification_type_code: string; }[]): { id: string; created_at: string; department: object; email: string; image_url: string; is_verified: boolean; last_used_at: string; name: string; object: 'account_user'; role: light_role; status: 'active' | 'disabled' | 'removed'; updated_at: string; username: string; }`\n\n**put** `/v1/core/account-users/{id}/notification-preferences`\n\nThis endpoint updates notification preferences for an account user. Only valid for external (cross-account) targets.\n\n### Parameters\n\n- `id: string`\n\n- `preferences: { enabled: boolean; notification_type_code: string; }[]`\n  The notification preferences to update.\n\n### Returns\n\n- `{ id: string; created_at: string; department: { id: string; name: string; object: 'department'; }; email: string; image_url: string; is_verified: boolean; last_used_at: string; name: string; object: 'account_user'; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; status: 'active' | 'disabled' | 'removed'; updated_at: string; username: string; }`\n  AccountUser represents an account user with their profile, role, and department.\n\n  - `id: string`\n  - `created_at: string`\n  - `department: { id: string; name: string; object: 'department'; }`\n  - `email: string`\n  - `image_url: string`\n  - `is_verified: boolean`\n  - `last_used_at: string`\n  - `name: string`\n  - `object: 'account_user'`\n  - `role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }`\n  - `status: 'active' | 'disabled' | 'removed'`\n  - `updated_at: string`\n  - `username: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst accountUser = await client.core.accountUsers.updateNotificationPreferences('id', { preferences: [{ enabled: true, notification_type_code: 'notification_type_code' }] });\n\nconsole.log(accountUser);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accountUsers.updateNotificationPreferences',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountUser = await client.core.accountUsers.updateNotificationPreferences('id', {\n  preferences: [{ enabled: true, notification_type_code: 'notification_type_code' }],\n});\n\nconsole.log(accountUser.id);",
      },
      python: {
        method: 'core.account_users.update_notification_preferences',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naccount_user = client.core.account_users.update_notification_preferences(\n    id="id",\n    preferences=[{\n        "enabled": True,\n        "notification_type_code": "notification_type_code",\n    }],\n)\nprint(account_user.id)',
      },
      kotlin: {
        method: 'core().accountUsers().updateNotificationPreferences',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accountusers.AccountUser\nimport com.augno.api.models.core.accountusers.AccountUserUpdateNotificationPreferencesParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: AccountUserUpdateNotificationPreferencesParams = AccountUserUpdateNotificationPreferencesParams.builder()\n        .id("id")\n        .addPreference(AccountUserUpdateNotificationPreferencesParams.Preference.builder()\n            .enabled(true)\n            .notificationTypeCode("notification_type_code")\n            .build())\n        .build()\n    val accountUser: AccountUser = client.core().accountUsers().updateNotificationPreferences(params)\n}',
      },
      go: {
        method: 'client.Core.AccountUsers.UpdateNotificationPreferences',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountUser, err := client.Core.AccountUsers.UpdateNotificationPreferences(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreAccountUserUpdateNotificationPreferencesParams{\n\t\t\tPreferences: []augno.CoreAccountUserUpdateNotificationPreferencesParamsPreference{{\n\t\t\t\tEnabled:              true,\n\t\t\t\tNotificationTypeCode: "notification_type_code",\n\t\t\t}},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountUser.ID)\n}\n',
      },
      ruby: {
        method: 'core.account_users.update_notification_preferences',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naccount_user = augno_client.core.account_users.update_notification_preferences(\n  "id",\n  preferences: [{enabled: true, notification_type_code: "notification_type_code"}]\n)\n\nputs(account_user)',
      },
      csharp: {
        method: 'Core.AccountUsers.UpdateNotificationPreferences',
        example:
          'AccountUserUpdateNotificationPreferencesParams parameters = new()\n{\n    ID = "id",\n    Preferences =\n    [\n        new()\n        {\n            Enabled = true,\n            NotificationTypeCode = "notification_type_code",\n        },\n    ],\n};\n\nvar accountUser = await client.Core.AccountUsers.UpdateNotificationPreferences(parameters);\n\nConsole.WriteLine(accountUser);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/account-users/$ID/notification-preferences \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "preferences": [\n            {\n              "enabled": true,\n              "notification_type_code": "notification_type_code"\n            }\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'update_password',
    endpoint: '/v1/core/account-users/{id}/password',
    httpMethod: 'put',
    summary: 'Update Account User Password',
    description:
      "This endpoint updates an account user's password. The requester must provide their own password for verification.",
    stainlessPath: '(resource) core.account_users > (method) update_password',
    qualified: 'client.core.accountUsers.updatePassword',
    params: ['id: string;', 'new_password: string;', 'requester_password: string;'],
    response: '{  }',
    markdown:
      "## update_password\n\n`client.core.accountUsers.updatePassword(id: string, new_password: string, requester_password: string): {  }`\n\n**put** `/v1/core/account-users/{id}/password`\n\nThis endpoint updates an account user's password. The requester must provide their own password for verification.\n\n### Parameters\n\n- `id: string`\n\n- `new_password: string`\n  The new password to set for the account user.\n\n- `requester_password: string`\n  The requester's current password for verification.\n\n### Returns\n\n- `{  }`\n\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst response = await client.core.accountUsers.updatePassword('id', { new_password: 'new_password', requester_password: 'requester_password' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accountUsers.updatePassword',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.core.accountUsers.updatePassword('id', {\n  new_password: 'new_password',\n  requester_password: 'requester_password',\n});\n\nconsole.log(response);",
      },
      python: {
        method: 'core.account_users.update_password',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.core.account_users.update_password(\n    id="id",\n    new_password="new_password",\n    requester_password="requester_password",\n)\nprint(response)',
      },
      kotlin: {
        method: 'core().accountUsers().updatePassword',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accountusers.AccountUserUpdatePasswordParams\nimport com.augno.api.models.core.accountusers.AccountUserUpdatePasswordResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: AccountUserUpdatePasswordParams = AccountUserUpdatePasswordParams.builder()\n        .id("id")\n        .newPassword("new_password")\n        .requesterPassword("requester_password")\n        .build()\n    val response: AccountUserUpdatePasswordResponse = client.core().accountUsers().updatePassword(params)\n}',
      },
      go: {
        method: 'client.Core.AccountUsers.UpdatePassword',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Core.AccountUsers.UpdatePassword(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreAccountUserUpdatePasswordParams{\n\t\t\tNewPassword:       "new_password",\n\t\t\tRequesterPassword: "requester_password",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      ruby: {
        method: 'core.account_users.update_password',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nresponse = augno_client.core.account_users.update_password(\n  "id",\n  new_password: "new_password",\n  requester_password: "requester_password"\n)\n\nputs(response)',
      },
      csharp: {
        method: 'Core.AccountUsers.UpdatePassword',
        example:
          'AccountUserUpdatePasswordParams parameters = new()\n{\n    ID = "id",\n    NewPassword = "new_password",\n    RequesterPassword = "requester_password",\n};\n\nvar response = await client.Core.AccountUsers.UpdatePassword(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/account-users/$ID/password \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "new_password": "new_password",\n          "requester_password": "requester_password"\n        }\'',
      },
    },
  },
  {
    name: 'restore',
    endpoint: '/v1/core/account-users/{id}/restore',
    httpMethod: 'post',
    summary: 'Restore Account User',
    description:
      'This endpoint restores a previously removed account user, setting their status back to active.',
    stainlessPath: '(resource) core.account_users > (method) restore',
    qualified: 'client.core.accountUsers.restore',
    params: ['id: string;'],
    response: '{  }',
    markdown:
      "## restore\n\n`client.core.accountUsers.restore(id: string): {  }`\n\n**post** `/v1/core/account-users/{id}/restore`\n\nThis endpoint restores a previously removed account user, setting their status back to active.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{  }`\n\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst response = await client.core.accountUsers.restore('id');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accountUsers.restore',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.core.accountUsers.restore('id');\n\nconsole.log(response);",
      },
      python: {
        method: 'core.account_users.restore',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.core.account_users.restore(\n    "id",\n)\nprint(response)',
      },
      kotlin: {
        method: 'core().accountUsers().restore',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accountusers.AccountUserRestoreParams\nimport com.augno.api.models.core.accountusers.AccountUserRestoreResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val response: AccountUserRestoreResponse = client.core().accountUsers().restore("id")\n}',
      },
      go: {
        method: 'client.Core.AccountUsers.Restore',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Core.AccountUsers.Restore(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      ruby: {
        method: 'core.account_users.restore',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nresponse = augno_client.core.account_users.restore("id")\n\nputs(response)',
      },
      csharp: {
        method: 'Core.AccountUsers.Restore',
        example:
          'AccountUserRestoreParams parameters = new() { ID = "id" };\n\nvar response = await client.Core.AccountUsers.Restore(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/account-users/$ID/restore \\\n    -X POST \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'unlock',
    endpoint: '/v1/core/account-users/{id}/unlock',
    httpMethod: 'post',
    summary: 'Unlock Account User',
    description:
      'This endpoint unlocks a previously locked account user, restoring their access to the account.',
    stainlessPath: '(resource) core.account_users > (method) unlock',
    qualified: 'client.core.accountUsers.unlock',
    params: ['id: string;'],
    response: '{  }',
    markdown:
      "## unlock\n\n`client.core.accountUsers.unlock(id: string): {  }`\n\n**post** `/v1/core/account-users/{id}/unlock`\n\nThis endpoint unlocks a previously locked account user, restoring their access to the account.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{  }`\n\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst response = await client.core.accountUsers.unlock('id');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accountUsers.unlock',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.core.accountUsers.unlock('id');\n\nconsole.log(response);",
      },
      python: {
        method: 'core.account_users.unlock',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.core.account_users.unlock(\n    "id",\n)\nprint(response)',
      },
      kotlin: {
        method: 'core().accountUsers().unlock',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accountusers.AccountUserUnlockParams\nimport com.augno.api.models.core.accountusers.AccountUserUnlockResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val response: AccountUserUnlockResponse = client.core().accountUsers().unlock("id")\n}',
      },
      go: {
        method: 'client.Core.AccountUsers.Unlock',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Core.AccountUsers.Unlock(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      ruby: {
        method: 'core.account_users.unlock',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nresponse = augno_client.core.account_users.unlock("id")\n\nputs(response)',
      },
      csharp: {
        method: 'Core.AccountUsers.Unlock',
        example:
          'AccountUserUnlockParams parameters = new() { ID = "id" };\n\nvar response = await client.Core.AccountUsers.Unlock(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/account-users/$ID/unlock \\\n    -X POST \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/core/account-users/{id}/sales-targets',
    httpMethod: 'get',
    summary: 'List Sales Targets',
    description:
      'This endpoint returns a paginated list of sales targets for a specific account user (sales rep).',
    stainlessPath: '(resource) core.account_users.sales_targets > (method) list',
    qualified: 'client.core.accountUsers.salesTargets.list',
    params: ['id: string;', 'limit?: number;', 'offset?: number;'],
    response:
      "{ data: { id: string; amount: quantity; created_at: string; end_date: string; object: 'sales_target'; sales_rep: object; start_date: string; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }",
    markdown:
      "## list\n\n`client.core.accountUsers.salesTargets.list(id: string, limit?: number, offset?: number): { data: sales_target[]; object: 'list'; page_info: page_info; }`\n\n**get** `/v1/core/account-users/{id}/sales-targets`\n\nThis endpoint returns a paginated list of sales targets for a specific account user (sales rep).\n\n### Parameters\n\n- `id: string`\n\n- `limit?: number`\n  Maximum number of results to return.\n\n- `offset?: number`\n  Number of results to skip.\n\n### Returns\n\n- `{ data: { id: string; amount: quantity; created_at: string; end_date: string; object: 'sales_target'; sales_rep: object; start_date: string; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }`\n  A paginated list of SalesTarget resources\n\n  - `data: { id: string; amount: { id: string; display_value: string; object: 'quantity'; unit: unit; value: string; }; created_at: string; end_date: string; object: 'sales_target'; sales_rep: { id: string; name: string; object: 'user'; }; start_date: string; updated_at: string; }[]`\n  - `object: 'list'`\n  - `page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst salesTargets = await client.core.accountUsers.salesTargets.list('id');\n\nconsole.log(salesTargets);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accountUsers.salesTargets.list',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst salesTargets = await client.core.accountUsers.salesTargets.list('id');\n\nconsole.log(salesTargets.data);",
      },
      python: {
        method: 'core.account_users.sales_targets.list',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nsales_targets = client.core.account_users.sales_targets.list(\n    id="id",\n)\nprint(sales_targets.data)',
      },
      kotlin: {
        method: 'core().accountUsers().salesTargets().list',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accountusers.salestargets.SalesTargetListParams\nimport com.augno.api.models.core.accountusers.salestargets.SalesTargetListResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val salesTargets: SalesTargetListResponse = client.core().accountUsers().salesTargets().list("id")\n}',
      },
      go: {
        method: 'client.Core.AccountUsers.SalesTargets.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tsalesTargets, err := client.Core.AccountUsers.SalesTargets.List(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreAccountUserSalesTargetListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", salesTargets.Data)\n}\n',
      },
      ruby: {
        method: 'core.account_users.sales_targets.list',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nsales_targets = augno_client.core.account_users.sales_targets.list("id")\n\nputs(sales_targets)',
      },
      csharp: {
        method: 'Core.AccountUsers.SalesTargets.List',
        example:
          'SalesTargetListParams parameters = new() { ID = "id" };\n\nvar salesTargets = await client.Core.AccountUsers.SalesTargets.List(parameters);\n\nConsole.WriteLine(salesTargets);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/account-users/$ID/sales-targets \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/core/account-users/{id}/sales-targets',
    httpMethod: 'post',
    summary: 'Create Sales Target',
    description: 'This endpoint creates a new sales target for an account user (sales rep).',
    stainlessPath: '(resource) core.account_users.sales_targets > (method) create',
    qualified: 'client.core.accountUsers.salesTargets.create',
    params: [
      'id: string;',
      'amount_unit_id: string;',
      'amount_value: string;',
      'end_date: string;',
      'start_date: string;',
    ],
    response:
      "{ id: string; amount: { id: string; display_value: string; object: 'quantity'; unit: unit; value: string; }; created_at: string; end_date: string; object: 'sales_target'; sales_rep: { id: string; name: string; object: 'user'; }; start_date: string; updated_at: string; }",
    markdown:
      "## create\n\n`client.core.accountUsers.salesTargets.create(id: string, amount_unit_id: string, amount_value: string, end_date: string, start_date: string): { id: string; amount: quantity; created_at: string; end_date: string; object: 'sales_target'; sales_rep: object; start_date: string; updated_at: string; }`\n\n**post** `/v1/core/account-users/{id}/sales-targets`\n\nThis endpoint creates a new sales target for an account user (sales rep).\n\n### Parameters\n\n- `id: string`\n\n- `amount_unit_id: string`\n  The unit ID for the target amount.\n\n- `amount_value: string`\n  The target amount value (decimal string).\n\n- `end_date: string`\n  The end date for the sales target.\n\n- `start_date: string`\n  The start date for the sales target.\n\n### Returns\n\n- `{ id: string; amount: { id: string; display_value: string; object: 'quantity'; unit: unit; value: string; }; created_at: string; end_date: string; object: 'sales_target'; sales_rep: { id: string; name: string; object: 'user'; }; start_date: string; updated_at: string; }`\n  SalesTarget represents a sales target for an account user.\n\n  - `id: string`\n  - `amount: { id: string; display_value: string; object: 'quantity'; unit: { id: string; abbreviation: string; created_at: string; is_base_unit: boolean; is_internal: boolean; name: string; object: 'unit'; offset_denominator: string; offset_numerator: string; ratio_denominator: string; ratio_numerator: string; type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'; updated_at: string; }; value: string; }`\n  - `created_at: string`\n  - `end_date: string`\n  - `object: 'sales_target'`\n  - `sales_rep: { id: string; name: string; object: 'user'; }`\n  - `start_date: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst salesTarget = await client.core.accountUsers.salesTargets.create('id', {\n  amount_unit_id: 'amount_unit_id',\n  amount_value: 'amount_value',\n  end_date: '2019-12-27T18:11:19.117Z',\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(salesTarget);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accountUsers.salesTargets.create',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst salesTarget = await client.core.accountUsers.salesTargets.create('id', {\n  amount_unit_id: 'amount_unit_id',\n  amount_value: 'amount_value',\n  end_date: '2019-12-27T18:11:19.117Z',\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(salesTarget.id);",
      },
      python: {
        method: 'core.account_users.sales_targets.create',
        example:
          'import os\nfrom datetime import datetime\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nsales_target = client.core.account_users.sales_targets.create(\n    id="id",\n    amount_unit_id="amount_unit_id",\n    amount_value="amount_value",\n    end_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n)\nprint(sales_target.id)',
      },
      kotlin: {
        method: 'core().accountUsers().salesTargets().create',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accountusers.salestargets.SalesTarget\nimport com.augno.api.models.core.accountusers.salestargets.SalesTargetCreateParams\nimport java.time.OffsetDateTime\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: SalesTargetCreateParams = SalesTargetCreateParams.builder()\n        .id("id")\n        .amountUnitId("amount_unit_id")\n        .amountValue("amount_value")\n        .endDate(OffsetDateTime.parse("2019-12-27T18:11:19.117Z"))\n        .startDate(OffsetDateTime.parse("2019-12-27T18:11:19.117Z"))\n        .build()\n    val salesTarget: SalesTarget = client.core().accountUsers().salesTargets().create(params)\n}',
      },
      go: {
        method: 'client.Core.AccountUsers.SalesTargets.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tsalesTarget, err := client.Core.AccountUsers.SalesTargets.New(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreAccountUserSalesTargetNewParams{\n\t\t\tAmountUnitID: "amount_unit_id",\n\t\t\tAmountValue:  "amount_value",\n\t\t\tEndDate:      time.Now(),\n\t\t\tStartDate:    time.Now(),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", salesTarget.ID)\n}\n',
      },
      ruby: {
        method: 'core.account_users.sales_targets.create',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nsales_target = augno_client.core.account_users.sales_targets.create(\n  "id",\n  amount_unit_id: "amount_unit_id",\n  amount_value: "amount_value",\n  end_date: "2019-12-27T18:11:19.117Z",\n  start_date: "2019-12-27T18:11:19.117Z"\n)\n\nputs(sales_target)',
      },
      csharp: {
        method: 'Core.AccountUsers.SalesTargets.Create',
        example:
          'SalesTargetCreateParams parameters = new()\n{\n    ID = "id",\n    AmountUnitID = "amount_unit_id",\n    AmountValue = "amount_value",\n    EndDate = DateTimeOffset.Parse("2019-12-27T18:11:19.117Z"),\n    StartDate = DateTimeOffset.Parse("2019-12-27T18:11:19.117Z"),\n};\n\nvar salesTarget = await client.Core.AccountUsers.SalesTargets.Create(parameters);\n\nConsole.WriteLine(salesTarget);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/account-users/$ID/sales-targets \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "amount_unit_id": "amount_unit_id",\n          "amount_value": "amount_value",\n          "end_date": "2019-12-27T18:11:19.117Z",\n          "start_date": "2019-12-27T18:11:19.117Z"\n        }\'',
      },
    },
  },
  {
    name: 'upsert',
    endpoint: '/v1/core/account-users/{id}/sales-targets/{target_id}',
    httpMethod: 'put',
    summary: 'Upsert Sales Target',
    description:
      'This endpoint creates or updates a sales target by ID. If the target ID exists, it updates it; otherwise, it creates a new target with that ID.',
    stainlessPath: '(resource) core.account_users.sales_targets > (method) upsert',
    qualified: 'client.core.accountUsers.salesTargets.upsert',
    params: [
      'id: string;',
      'target_id: string;',
      'amount_unit_id: string;',
      'amount_value: string;',
      'end_date: string;',
      'start_date: string;',
    ],
    response:
      "{ id: string; amount: { id: string; display_value: string; object: 'quantity'; unit: unit; value: string; }; created_at: string; end_date: string; object: 'sales_target'; sales_rep: { id: string; name: string; object: 'user'; }; start_date: string; updated_at: string; }",
    markdown:
      "## upsert\n\n`client.core.accountUsers.salesTargets.upsert(id: string, target_id: string, amount_unit_id: string, amount_value: string, end_date: string, start_date: string): { id: string; amount: quantity; created_at: string; end_date: string; object: 'sales_target'; sales_rep: object; start_date: string; updated_at: string; }`\n\n**put** `/v1/core/account-users/{id}/sales-targets/{target_id}`\n\nThis endpoint creates or updates a sales target by ID. If the target ID exists, it updates it; otherwise, it creates a new target with that ID.\n\n### Parameters\n\n- `id: string`\n\n- `target_id: string`\n\n- `amount_unit_id: string`\n  The unit ID for the target amount.\n\n- `amount_value: string`\n  The target amount value (decimal string).\n\n- `end_date: string`\n  The end date for the sales target.\n\n- `start_date: string`\n  The start date for the sales target.\n\n### Returns\n\n- `{ id: string; amount: { id: string; display_value: string; object: 'quantity'; unit: unit; value: string; }; created_at: string; end_date: string; object: 'sales_target'; sales_rep: { id: string; name: string; object: 'user'; }; start_date: string; updated_at: string; }`\n  SalesTarget represents a sales target for an account user.\n\n  - `id: string`\n  - `amount: { id: string; display_value: string; object: 'quantity'; unit: { id: string; abbreviation: string; created_at: string; is_base_unit: boolean; is_internal: boolean; name: string; object: 'unit'; offset_denominator: string; offset_numerator: string; ratio_denominator: string; ratio_numerator: string; type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'; updated_at: string; }; value: string; }`\n  - `created_at: string`\n  - `end_date: string`\n  - `object: 'sales_target'`\n  - `sales_rep: { id: string; name: string; object: 'user'; }`\n  - `start_date: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst salesTarget = await client.core.accountUsers.salesTargets.upsert('target_id', {\n  id: 'id',\n  amount_unit_id: 'amount_unit_id',\n  amount_value: 'amount_value',\n  end_date: '2019-12-27T18:11:19.117Z',\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(salesTarget);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accountUsers.salesTargets.upsert',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst salesTarget = await client.core.accountUsers.salesTargets.upsert('target_id', {\n  id: 'id',\n  amount_unit_id: 'amount_unit_id',\n  amount_value: 'amount_value',\n  end_date: '2019-12-27T18:11:19.117Z',\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(salesTarget.id);",
      },
      python: {
        method: 'core.account_users.sales_targets.upsert',
        example:
          'import os\nfrom datetime import datetime\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nsales_target = client.core.account_users.sales_targets.upsert(\n    target_id="target_id",\n    id="id",\n    amount_unit_id="amount_unit_id",\n    amount_value="amount_value",\n    end_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n)\nprint(sales_target.id)',
      },
      kotlin: {
        method: 'core().accountUsers().salesTargets().upsert',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accountusers.salestargets.SalesTarget\nimport com.augno.api.models.core.accountusers.salestargets.SalesTargetUpsertParams\nimport java.time.OffsetDateTime\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: SalesTargetUpsertParams = SalesTargetUpsertParams.builder()\n        .id("id")\n        .targetId("target_id")\n        .amountUnitId("amount_unit_id")\n        .amountValue("amount_value")\n        .endDate(OffsetDateTime.parse("2019-12-27T18:11:19.117Z"))\n        .startDate(OffsetDateTime.parse("2019-12-27T18:11:19.117Z"))\n        .build()\n    val salesTarget: SalesTarget = client.core().accountUsers().salesTargets().upsert(params)\n}',
      },
      go: {
        method: 'client.Core.AccountUsers.SalesTargets.Upsert',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tsalesTarget, err := client.Core.AccountUsers.SalesTargets.Upsert(\n\t\tcontext.TODO(),\n\t\t"target_id",\n\t\taugno.CoreAccountUserSalesTargetUpsertParams{\n\t\t\tID:           "id",\n\t\t\tAmountUnitID: "amount_unit_id",\n\t\t\tAmountValue:  "amount_value",\n\t\t\tEndDate:      time.Now(),\n\t\t\tStartDate:    time.Now(),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", salesTarget.ID)\n}\n',
      },
      ruby: {
        method: 'core.account_users.sales_targets.upsert',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nsales_target = augno_client.core.account_users.sales_targets.upsert(\n  "target_id",\n  id: "id",\n  amount_unit_id: "amount_unit_id",\n  amount_value: "amount_value",\n  end_date: "2019-12-27T18:11:19.117Z",\n  start_date: "2019-12-27T18:11:19.117Z"\n)\n\nputs(sales_target)',
      },
      csharp: {
        method: 'Core.AccountUsers.SalesTargets.Upsert',
        example:
          'SalesTargetUpsertParams parameters = new()\n{\n    ID = "id",\n    TargetID = "target_id",\n    AmountUnitID = "amount_unit_id",\n    AmountValue = "amount_value",\n    EndDate = DateTimeOffset.Parse("2019-12-27T18:11:19.117Z"),\n    StartDate = DateTimeOffset.Parse("2019-12-27T18:11:19.117Z"),\n};\n\nvar salesTarget = await client.Core.AccountUsers.SalesTargets.Upsert(parameters);\n\nConsole.WriteLine(salesTarget);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/account-users/$ID/sales-targets/$TARGET_ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "amount_unit_id": "amount_unit_id",\n          "amount_value": "amount_value",\n          "end_date": "2019-12-27T18:11:19.117Z",\n          "start_date": "2019-12-27T18:11:19.117Z"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve_by_slug',
    endpoint: '/v1/core/accounts/slug/{slug}',
    httpMethod: 'get',
    summary: 'Get Account by Slug',
    description:
      'This endpoint returns a minimal public account by its portal slug. This endpoint is unauthenticated.',
    stainlessPath: '(resource) core.accounts > (method) retrieve_by_slug',
    qualified: 'client.core.accounts.retrieveBySlug',
    params: ['slug: string;'],
    response:
      "{ id: string; default_billing_address_id: string; logo_url: string; name: string; object: 'public_account'; slug: string; support_email: string; }",
    markdown:
      "## retrieve_by_slug\n\n`client.core.accounts.retrieveBySlug(slug: string): { id: string; default_billing_address_id: string; logo_url: string; name: string; object: 'public_account'; slug: string; support_email: string; }`\n\n**get** `/v1/core/accounts/slug/{slug}`\n\nThis endpoint returns a minimal public account by its portal slug. This endpoint is unauthenticated.\n\n### Parameters\n\n- `slug: string`\n\n### Returns\n\n- `{ id: string; default_billing_address_id: string; logo_url: string; name: string; object: 'public_account'; slug: string; support_email: string; }`\n  PublicAccount is a minimal account representation for unauthenticated slug lookups.\n\n  - `id: string`\n  - `default_billing_address_id: string`\n  - `logo_url: string`\n  - `name: string`\n  - `object: 'public_account'`\n  - `slug: string`\n  - `support_email: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst response = await client.core.accounts.retrieveBySlug('slug');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accounts.retrieveBySlug',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.core.accounts.retrieveBySlug('slug');\n\nconsole.log(response.id);",
      },
      python: {
        method: 'core.accounts.retrieve_by_slug',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.core.accounts.retrieve_by_slug(\n    "slug",\n)\nprint(response.id)',
      },
      kotlin: {
        method: 'core().accounts().retrieveBySlug',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accounts.AccountRetrieveBySlugParams\nimport com.augno.api.models.core.accounts.AccountRetrieveBySlugResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val response: AccountRetrieveBySlugResponse = client.core().accounts().retrieveBySlug("slug")\n}',
      },
      go: {
        method: 'client.Core.Accounts.GetBySlug',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Core.Accounts.GetBySlug(context.TODO(), "slug")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      ruby: {
        method: 'core.accounts.retrieve_by_slug',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nresponse = augno_client.core.accounts.retrieve_by_slug("slug")\n\nputs(response)',
      },
      csharp: {
        method: 'Core.Accounts.RetrieveBySlug',
        example:
          'AccountRetrieveBySlugParams parameters = new() { Slug = "slug" };\n\nvar response = await client.Core.Accounts.RetrieveBySlug(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/accounts/slug/$SLUG \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/core/accounts/{id}',
    httpMethod: 'get',
    summary: 'Get Account',
    description:
      'This endpoint returns a full account by its ID, including optional branding and portal sub-resources.',
    stainlessPath: '(resource) core.accounts > (method) retrieve',
    qualified: 'client.core.accounts.retrieve',
    params: ['id: string;', "include?: 'branding' | 'portal'[];"],
    response:
      "{ id: string; branding: { id: string; created_at: string; facebook_handle: string; instagram_handle: string; linkedin_handle: string; logo_url: string; object: 'account_branding'; phone_number: string; support_email: string; twitter_handle: string; updated_at: string; website_url: string; }; created_at: string; default_billing_address_id: string; default_shipping_address_id: string; name: string; object: 'account'; portal: { id: string; created_at: string; object: 'account_portal'; slug: string; updated_at: string; }; updated_at: string; }",
    markdown:
      "## retrieve\n\n`client.core.accounts.retrieve(id: string, include?: 'branding' | 'portal'[]): { id: string; branding: object; created_at: string; default_billing_address_id: string; default_shipping_address_id: string; name: string; object: 'account'; portal: object; updated_at: string; }`\n\n**get** `/v1/core/accounts/{id}`\n\nThis endpoint returns a full account by its ID, including optional branding and portal sub-resources.\n\n### Parameters\n\n- `id: string`\n\n- `include?: 'branding' | 'portal'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ id: string; branding: { id: string; created_at: string; facebook_handle: string; instagram_handle: string; linkedin_handle: string; logo_url: string; object: 'account_branding'; phone_number: string; support_email: string; twitter_handle: string; updated_at: string; website_url: string; }; created_at: string; default_billing_address_id: string; default_shipping_address_id: string; name: string; object: 'account'; portal: { id: string; created_at: string; object: 'account_portal'; slug: string; updated_at: string; }; updated_at: string; }`\n  Account represents a full account with optional branding and portal sub-resources.\n\n  - `id: string`\n  - `branding: { id: string; created_at: string; facebook_handle: string; instagram_handle: string; linkedin_handle: string; logo_url: string; object: 'account_branding'; phone_number: string; support_email: string; twitter_handle: string; updated_at: string; website_url: string; }`\n  - `created_at: string`\n  - `default_billing_address_id: string`\n  - `default_shipping_address_id: string`\n  - `name: string`\n  - `object: 'account'`\n  - `portal: { id: string; created_at: string; object: 'account_portal'; slug: string; updated_at: string; }`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst account = await client.core.accounts.retrieve('id');\n\nconsole.log(account);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accounts.retrieve',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst account = await client.core.accounts.retrieve('id');\n\nconsole.log(account.id);",
      },
      python: {
        method: 'core.accounts.retrieve',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naccount = client.core.accounts.retrieve(\n    id="id",\n)\nprint(account.id)',
      },
      kotlin: {
        method: 'core().accounts().retrieve',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accounts.Account\nimport com.augno.api.models.core.accounts.AccountRetrieveParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val account: Account = client.core().accounts().retrieve("id")\n}',
      },
      go: {
        method: 'client.Core.Accounts.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccount, err := client.Core.Accounts.Get(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreAccountGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", account.ID)\n}\n',
      },
      ruby: {
        method: 'core.accounts.retrieve',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naccount = augno_client.core.accounts.retrieve("id")\n\nputs(account)',
      },
      csharp: {
        method: 'Core.Accounts.Retrieve',
        example:
          'AccountRetrieveParams parameters = new() { ID = "id" };\n\nvar account = await client.Core.Accounts.Retrieve(parameters);\n\nConsole.WriteLine(account);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/accounts/$ID \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/core/accounts/{id}',
    httpMethod: 'patch',
    summary: 'Update Account',
    description:
      "This endpoint partially updates an account's name, branding fields, and/or portal slug.\nOnly provided fields are updated; absent fields retain their current values.",
    stainlessPath: '(resource) core.accounts > (method) update',
    qualified: 'client.core.accounts.update',
    params: [
      'id: string;',
      "include?: 'branding' | 'portal'[];",
      'facebook_handle?: string;',
      'instagram_handle?: string;',
      'linkedin_handle?: string;',
      'name?: string;',
      'phone_number?: string;',
      'slug?: string;',
      'support_email?: string;',
      'twitter_handle?: string;',
      'website_url?: string;',
    ],
    response:
      "{ id: string; branding: { id: string; created_at: string; facebook_handle: string; instagram_handle: string; linkedin_handle: string; logo_url: string; object: 'account_branding'; phone_number: string; support_email: string; twitter_handle: string; updated_at: string; website_url: string; }; created_at: string; default_billing_address_id: string; default_shipping_address_id: string; name: string; object: 'account'; portal: { id: string; created_at: string; object: 'account_portal'; slug: string; updated_at: string; }; updated_at: string; }",
    markdown:
      "## update\n\n`client.core.accounts.update(id: string, include?: 'branding' | 'portal'[], facebook_handle?: string, instagram_handle?: string, linkedin_handle?: string, name?: string, phone_number?: string, slug?: string, support_email?: string, twitter_handle?: string, website_url?: string): { id: string; branding: object; created_at: string; default_billing_address_id: string; default_shipping_address_id: string; name: string; object: 'account'; portal: object; updated_at: string; }`\n\n**patch** `/v1/core/accounts/{id}`\n\nThis endpoint partially updates an account's name, branding fields, and/or portal slug.\nOnly provided fields are updated; absent fields retain their current values.\n\n### Parameters\n\n- `id: string`\n\n- `include?: 'branding' | 'portal'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n- `facebook_handle?: string`\n  The Facebook handle.\n\n- `instagram_handle?: string`\n  The Instagram handle.\n\n- `linkedin_handle?: string`\n  The LinkedIn handle.\n\n- `name?: string`\n  The display name of the account.\n\n- `phone_number?: string`\n  The support phone number.\n\n- `slug?: string`\n  The portal slug.\n\n- `support_email?: string`\n  The support email address.\n\n- `twitter_handle?: string`\n  The Twitter handle.\n\n- `website_url?: string`\n  The website URL.\n\n### Returns\n\n- `{ id: string; branding: { id: string; created_at: string; facebook_handle: string; instagram_handle: string; linkedin_handle: string; logo_url: string; object: 'account_branding'; phone_number: string; support_email: string; twitter_handle: string; updated_at: string; website_url: string; }; created_at: string; default_billing_address_id: string; default_shipping_address_id: string; name: string; object: 'account'; portal: { id: string; created_at: string; object: 'account_portal'; slug: string; updated_at: string; }; updated_at: string; }`\n  Account represents a full account with optional branding and portal sub-resources.\n\n  - `id: string`\n  - `branding: { id: string; created_at: string; facebook_handle: string; instagram_handle: string; linkedin_handle: string; logo_url: string; object: 'account_branding'; phone_number: string; support_email: string; twitter_handle: string; updated_at: string; website_url: string; }`\n  - `created_at: string`\n  - `default_billing_address_id: string`\n  - `default_shipping_address_id: string`\n  - `name: string`\n  - `object: 'account'`\n  - `portal: { id: string; created_at: string; object: 'account_portal'; slug: string; updated_at: string; }`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst account = await client.core.accounts.update('id');\n\nconsole.log(account);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accounts.update',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst account = await client.core.accounts.update('id', { name: 'Acme Inc.' });\n\nconsole.log(account.id);",
      },
      python: {
        method: 'core.accounts.update',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naccount = client.core.accounts.update(\n    id="id",\n    name="Acme Inc.",\n)\nprint(account.id)',
      },
      kotlin: {
        method: 'core().accounts().update',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accounts.Account\nimport com.augno.api.models.core.accounts.AccountUpdateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val account: Account = client.core().accounts().update("id")\n}',
      },
      go: {
        method: 'client.Core.Accounts.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccount, err := client.Core.Accounts.Update(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreAccountUpdateParams{\n\t\t\tName: augno.String("Acme Inc."),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", account.ID)\n}\n',
      },
      ruby: {
        method: 'core.accounts.update',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naccount = augno_client.core.accounts.update("id")\n\nputs(account)',
      },
      csharp: {
        method: 'Core.Accounts.Update',
        example:
          'AccountUpdateParams parameters = new() { ID = "id" };\n\nvar account = await client.Core.Accounts.Update(parameters);\n\nConsole.WriteLine(account);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/accounts/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'get_logo_url',
    endpoint: '/v1/core/accounts/{id}/logo',
    httpMethod: 'get',
    summary: 'Get Account Logo URL',
    description:
      "This endpoint returns a presigned URL for the account's logo image. The URL expires after one hour.",
    stainlessPath: '(resource) core.accounts > (method) get_logo_url',
    qualified: 'client.core.accounts.getLogoURL',
    params: ['id: string;'],
    response: '{ url: string; }',
    markdown:
      "## get_logo_url\n\n`client.core.accounts.getLogoURL(id: string): { url: string; }`\n\n**get** `/v1/core/accounts/{id}/logo`\n\nThis endpoint returns a presigned URL for the account's logo image. The URL expires after one hour.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ url: string; }`\n  AccountLogoURL holds a presigned URL for an account's logo.\n\n  - `url: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst response = await client.core.accounts.getLogoURL('id');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accounts.getLogoURL',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.core.accounts.getLogoURL('id');\n\nconsole.log(response.url);",
      },
      python: {
        method: 'core.accounts.get_logo_url',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.core.accounts.get_logo_url(\n    "id",\n)\nprint(response.url)',
      },
      kotlin: {
        method: 'core().accounts().getLogoUrl',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accounts.AccountGetLogoUrlParams\nimport com.augno.api.models.core.accounts.AccountGetLogoUrlResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val response: AccountGetLogoUrlResponse = client.core().accounts().getLogoUrl("id")\n}',
      },
      go: {
        method: 'client.Core.Accounts.GetLogoURL',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Core.Accounts.GetLogoURL(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.URL)\n}\n',
      },
      ruby: {
        method: 'core.accounts.get_logo_url',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nresponse = augno_client.core.accounts.get_logo_url("id")\n\nputs(response)',
      },
      csharp: {
        method: 'Core.Accounts.GetLogoUrl',
        example:
          'AccountGetLogoUrlParams parameters = new() { ID = "id" };\n\nvar response = await client.Core.Accounts.GetLogoUrl(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/accounts/$ID/logo \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'upload_photo',
    endpoint: '/v1/core/accounts/{id}/photo',
    httpMethod: 'put',
    summary: 'Upload Account Photo',
    description:
      'This endpoint uploads a logo image for an account. The image is sent as a raw binary body with the appropriate Content-Type header.',
    stainlessPath: '(resource) core.accounts > (method) upload_photo',
    qualified: 'client.core.accounts.uploadPhoto',
    params: ['id: string;'],
    response: '{ success: boolean; }',
    markdown:
      "## upload_photo\n\n`client.core.accounts.uploadPhoto(id: string): { success: boolean; }`\n\n**put** `/v1/core/accounts/{id}/photo`\n\nThis endpoint uploads a logo image for an account. The image is sent as a raw binary body with the appropriate Content-Type header.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ success: boolean; }`\n  AccountPhotoUploadResult is the response for a photo upload.\n\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst response = await client.core.accounts.uploadPhoto('id');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accounts.uploadPhoto',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.core.accounts.uploadPhoto('id');\n\nconsole.log(response.success);",
      },
      python: {
        method: 'core.accounts.upload_photo',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.core.accounts.upload_photo(\n    "id",\n)\nprint(response.success)',
      },
      kotlin: {
        method: 'core().accounts().uploadPhoto',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accounts.AccountUploadPhotoParams\nimport com.augno.api.models.core.accounts.AccountUploadPhotoResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val response: AccountUploadPhotoResponse = client.core().accounts().uploadPhoto("id")\n}',
      },
      go: {
        method: 'client.Core.Accounts.UploadPhoto',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Core.Accounts.UploadPhoto(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Success)\n}\n',
      },
      ruby: {
        method: 'core.accounts.upload_photo',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nresponse = augno_client.core.accounts.upload_photo("id")\n\nputs(response)',
      },
      csharp: {
        method: 'Core.Accounts.UploadPhoto',
        example:
          'AccountUploadPhotoParams parameters = new() { ID = "id" };\n\nvar response = await client.Core.Accounts.UploadPhoto(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/accounts/$ID/photo \\\n    -X PUT \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/core/accounts/{account_id}/addresses',
    httpMethod: 'get',
    summary: 'List Addresses',
    description:
      'This endpoint returns a paginated list of addresses for the specified account.\nSupports cursor-based pagination and search by name, street, city, state, postal code, or country.',
    stainlessPath: '(resource) core.accounts.addresses > (method) list',
    qualified: 'client.core.accounts.addresses.list',
    params: ['account_id: string;'],
    response:
      "{ data: { id: string; created_at: string; email: string; geolocation: object; is_drop_ship: boolean; name: string; object: 'address'; phone: string; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }",
    markdown:
      "## list\n\n`client.core.accounts.addresses.list(account_id: string): { data: address[]; object: 'list'; page_info: page_info; }`\n\n**get** `/v1/core/accounts/{account_id}/addresses`\n\nThis endpoint returns a paginated list of addresses for the specified account.\nSupports cursor-based pagination and search by name, street, city, state, postal code, or country.\n\n### Parameters\n\n- `account_id: string`\n\n### Returns\n\n- `{ data: { id: string; created_at: string; email: string; geolocation: object; is_drop_ship: boolean; name: string; object: 'address'; phone: string; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }`\n  A paginated list of Address resources\n\n  - `data: { id: string; created_at: string; email: string; geolocation: { id: string; country: string; locality: string; object: 'geolocation'; postal_code: string; state: string; street_line_1: string; street_line_2: string; }; is_drop_ship: boolean; name: string; object: 'address'; phone: string; updated_at: string; }[]`\n  - `object: 'list'`\n  - `page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst addresses = await client.core.accounts.addresses.list('account_id');\n\nconsole.log(addresses);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accounts.addresses.list',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst addresses = await client.core.accounts.addresses.list('account_id');\n\nconsole.log(addresses.data);",
      },
      python: {
        method: 'core.accounts.addresses.list',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naddresses = client.core.accounts.addresses.list(\n    "account_id",\n)\nprint(addresses.data)',
      },
      kotlin: {
        method: 'core().accounts().addresses().list',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accounts.addresses.AddressListParams\nimport com.augno.api.models.core.accounts.addresses.AddressListResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val addresses: AddressListResponse = client.core().accounts().addresses().list("account_id")\n}',
      },
      go: {
        method: 'client.Core.Accounts.Addresses.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taddresses, err := client.Core.Accounts.Addresses.List(context.TODO(), "account_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", addresses.Data)\n}\n',
      },
      ruby: {
        method: 'core.accounts.addresses.list',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naddresses = augno_client.core.accounts.addresses.list("account_id")\n\nputs(addresses)',
      },
      csharp: {
        method: 'Core.Accounts.Addresses.List',
        example:
          'AddressListParams parameters = new() { AccountID = "account_id" };\n\nvar addresses = await client.Core.Accounts.Addresses.List(parameters);\n\nConsole.WriteLine(addresses);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/accounts/$ACCOUNT_ID/addresses \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/core/accounts/{account_id}/addresses',
    httpMethod: 'post',
    summary: 'Create Address',
    description: 'This endpoint creates a new address for the specified account.',
    stainlessPath: '(resource) core.accounts.addresses > (method) create',
    qualified: 'client.core.accounts.addresses.create',
    params: [
      'account_id: string;',
      'country: string;',
      'is_drop_ship: boolean;',
      'name: string;',
      'email?: string;',
      'locality?: string;',
      'phone?: string;',
      'postal_code?: string;',
      'state?: string;',
      'street_line_1?: string;',
      'street_line_2?: string;',
    ],
    response:
      "{ id: string; created_at: string; email: string; geolocation: { id: string; country: string; locality: string; object: 'geolocation'; postal_code: string; state: string; street_line_1: string; street_line_2: string; }; is_drop_ship: boolean; name: string; object: 'address'; phone: string; updated_at: string; }",
    markdown:
      "## create\n\n`client.core.accounts.addresses.create(account_id: string, country: string, is_drop_ship: boolean, name: string, email?: string, locality?: string, phone?: string, postal_code?: string, state?: string, street_line_1?: string, street_line_2?: string): { id: string; created_at: string; email: string; geolocation: object; is_drop_ship: boolean; name: string; object: 'address'; phone: string; updated_at: string; }`\n\n**post** `/v1/core/accounts/{account_id}/addresses`\n\nThis endpoint creates a new address for the specified account.\n\n### Parameters\n\n- `account_id: string`\n\n- `country: string`\n  The two-letter country code.\n\n- `is_drop_ship: boolean`\n  Whether this is a drop ship address.\n\n- `name: string`\n  The display name of the address.\n\n- `email?: string`\n  The email address associated with this address.\n\n- `locality?: string`\n  The city or locality.\n\n- `phone?: string`\n  The phone number associated with this address.\n\n- `postal_code?: string`\n  The postal or zip code.\n\n- `state?: string`\n  The state or administrative area.\n\n- `street_line_1?: string`\n  The first line of the street address.\n\n- `street_line_2?: string`\n  The second line of the street address.\n\n### Returns\n\n- `{ id: string; created_at: string; email: string; geolocation: { id: string; country: string; locality: string; object: 'geolocation'; postal_code: string; state: string; street_line_1: string; street_line_2: string; }; is_drop_ship: boolean; name: string; object: 'address'; phone: string; updated_at: string; }`\n  Address represents an address with its associated geolocation.\n\n  - `id: string`\n  - `created_at: string`\n  - `email: string`\n  - `geolocation: { id: string; country: string; locality: string; object: 'geolocation'; postal_code: string; state: string; street_line_1: string; street_line_2: string; }`\n  - `is_drop_ship: boolean`\n  - `name: string`\n  - `object: 'address'`\n  - `phone: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst address = await client.core.accounts.addresses.create('account_id', {\n  country: 'US',\n  is_drop_ship: false,\n  name: 'Headquarters',\n});\n\nconsole.log(address);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accounts.addresses.create',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst address = await client.core.accounts.addresses.create('account_id', {\n  country: 'US',\n  is_drop_ship: false,\n  name: 'Headquarters',\n  locality: 'Springfield',\n  postal_code: '62701',\n  state: 'IL',\n  street_line_1: '123 Main St',\n});\n\nconsole.log(address.id);",
      },
      python: {
        method: 'core.accounts.addresses.create',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naddress = client.core.accounts.addresses.create(\n    account_id="account_id",\n    country="US",\n    is_drop_ship=False,\n    name="Headquarters",\n    locality="Springfield",\n    postal_code="62701",\n    state="IL",\n    street_line_1="123 Main St",\n)\nprint(address.id)',
      },
      kotlin: {
        method: 'core().accounts().addresses().create',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accounts.addresses.Address\nimport com.augno.api.models.core.accounts.addresses.AddressCreateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: AddressCreateParams = AddressCreateParams.builder()\n        .accountId("account_id")\n        .country("US")\n        .isDropShip(false)\n        .name("Headquarters")\n        .build()\n    val address: Address = client.core().accounts().addresses().create(params)\n}',
      },
      go: {
        method: 'client.Core.Accounts.Addresses.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taddress, err := client.Core.Accounts.Addresses.New(\n\t\tcontext.TODO(),\n\t\t"account_id",\n\t\taugno.CoreAccountAddressNewParams{\n\t\t\tCountry:     "US",\n\t\t\tIsDropShip:  false,\n\t\t\tName:        "Headquarters",\n\t\t\tLocality:    augno.String("Springfield"),\n\t\t\tPostalCode:  augno.String("62701"),\n\t\t\tState:       augno.String("IL"),\n\t\t\tStreetLine1: augno.String("123 Main St"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", address.ID)\n}\n',
      },
      ruby: {
        method: 'core.accounts.addresses.create',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naddress = augno_client.core.accounts.addresses.create(\n  "account_id",\n  country: "US",\n  is_drop_ship: false,\n  name: "Headquarters"\n)\n\nputs(address)',
      },
      csharp: {
        method: 'Core.Accounts.Addresses.Create',
        example:
          'AddressCreateParams parameters = new()\n{\n    AccountID = "account_id",\n    Country = "US",\n    IsDropShip = false,\n    Name = "Headquarters",\n};\n\nvar address = await client.Core.Accounts.Addresses.Create(parameters);\n\nConsole.WriteLine(address);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/accounts/$ACCOUNT_ID/addresses \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "country": "US",\n          "is_drop_ship": false,\n          "name": "Headquarters",\n          "locality": "Springfield",\n          "postal_code": "62701",\n          "state": "IL",\n          "street_line_1": "123 Main St"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/core/accounts/{account_id}/addresses/{id}',
    httpMethod: 'delete',
    summary: 'Delete Address',
    description:
      'This endpoint deletes an address from the specified account.\nAn address cannot be deleted if it is in use as a billing or shipping address on a sales order, invoice, shipment, or as a default address on an account.',
    stainlessPath: '(resource) core.accounts.addresses > (method) delete',
    qualified: 'client.core.accounts.addresses.delete',
    params: ['account_id: string;', 'id: string;'],
    response: '{  }',
    markdown:
      "## delete\n\n`client.core.accounts.addresses.delete(account_id: string, id: string): {  }`\n\n**delete** `/v1/core/accounts/{account_id}/addresses/{id}`\n\nThis endpoint deletes an address from the specified account.\nAn address cannot be deleted if it is in use as a billing or shipping address on a sales order, invoice, shipment, or as a default address on an account.\n\n### Parameters\n\n- `account_id: string`\n\n- `id: string`\n\n### Returns\n\n- `{  }`\n\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst address = await client.core.accounts.addresses.delete('id', { account_id: 'account_id' });\n\nconsole.log(address);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accounts.addresses.delete',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst address = await client.core.accounts.addresses.delete('id', { account_id: 'account_id' });\n\nconsole.log(address);",
      },
      python: {
        method: 'core.accounts.addresses.delete',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naddress = client.core.accounts.addresses.delete(\n    id="id",\n    account_id="account_id",\n)\nprint(address)',
      },
      kotlin: {
        method: 'core().accounts().addresses().delete',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accounts.addresses.AddressDeleteParams\nimport com.augno.api.models.core.accounts.addresses.AddressDeleteResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: AddressDeleteParams = AddressDeleteParams.builder()\n        .accountId("account_id")\n        .id("id")\n        .build()\n    val address: AddressDeleteResponse = client.core().accounts().addresses().delete(params)\n}',
      },
      go: {
        method: 'client.Core.Accounts.Addresses.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taddress, err := client.Core.Accounts.Addresses.Delete(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreAccountAddressDeleteParams{\n\t\t\tAccountID: "account_id",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", address)\n}\n',
      },
      ruby: {
        method: 'core.accounts.addresses.delete',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naddress = augno_client.core.accounts.addresses.delete("id", account_id: "account_id")\n\nputs(address)',
      },
      csharp: {
        method: 'Core.Accounts.Addresses.Delete',
        example:
          'AddressDeleteParams parameters = new()\n{\n    AccountID = "account_id",\n    ID = "id",\n};\n\nvar address = await client.Core.Accounts.Addresses.Delete(parameters);\n\nConsole.WriteLine(address);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/accounts/$ACCOUNT_ID/addresses/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/core/accounts/{account_id}/addresses/{id}',
    httpMethod: 'get',
    summary: 'Get Address',
    description:
      'This endpoint returns a single address by its ID.\nThe address must belong to the specified account.',
    stainlessPath: '(resource) core.accounts.addresses > (method) retrieve',
    qualified: 'client.core.accounts.addresses.retrieve',
    params: ['account_id: string;', 'id: string;'],
    response:
      "{ id: string; created_at: string; email: string; geolocation: { id: string; country: string; locality: string; object: 'geolocation'; postal_code: string; state: string; street_line_1: string; street_line_2: string; }; is_drop_ship: boolean; name: string; object: 'address'; phone: string; updated_at: string; }",
    markdown:
      "## retrieve\n\n`client.core.accounts.addresses.retrieve(account_id: string, id: string): { id: string; created_at: string; email: string; geolocation: object; is_drop_ship: boolean; name: string; object: 'address'; phone: string; updated_at: string; }`\n\n**get** `/v1/core/accounts/{account_id}/addresses/{id}`\n\nThis endpoint returns a single address by its ID.\nThe address must belong to the specified account.\n\n### Parameters\n\n- `account_id: string`\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; email: string; geolocation: { id: string; country: string; locality: string; object: 'geolocation'; postal_code: string; state: string; street_line_1: string; street_line_2: string; }; is_drop_ship: boolean; name: string; object: 'address'; phone: string; updated_at: string; }`\n  Address represents an address with its associated geolocation.\n\n  - `id: string`\n  - `created_at: string`\n  - `email: string`\n  - `geolocation: { id: string; country: string; locality: string; object: 'geolocation'; postal_code: string; state: string; street_line_1: string; street_line_2: string; }`\n  - `is_drop_ship: boolean`\n  - `name: string`\n  - `object: 'address'`\n  - `phone: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst address = await client.core.accounts.addresses.retrieve('id', { account_id: 'account_id' });\n\nconsole.log(address);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accounts.addresses.retrieve',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst address = await client.core.accounts.addresses.retrieve('id', { account_id: 'account_id' });\n\nconsole.log(address.id);",
      },
      python: {
        method: 'core.accounts.addresses.retrieve',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naddress = client.core.accounts.addresses.retrieve(\n    id="id",\n    account_id="account_id",\n)\nprint(address.id)',
      },
      kotlin: {
        method: 'core().accounts().addresses().retrieve',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accounts.addresses.Address\nimport com.augno.api.models.core.accounts.addresses.AddressRetrieveParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: AddressRetrieveParams = AddressRetrieveParams.builder()\n        .accountId("account_id")\n        .id("id")\n        .build()\n    val address: Address = client.core().accounts().addresses().retrieve(params)\n}',
      },
      go: {
        method: 'client.Core.Accounts.Addresses.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taddress, err := client.Core.Accounts.Addresses.Get(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreAccountAddressGetParams{\n\t\t\tAccountID: "account_id",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", address.ID)\n}\n',
      },
      ruby: {
        method: 'core.accounts.addresses.retrieve',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naddress = augno_client.core.accounts.addresses.retrieve("id", account_id: "account_id")\n\nputs(address)',
      },
      csharp: {
        method: 'Core.Accounts.Addresses.Retrieve',
        example:
          'AddressRetrieveParams parameters = new()\n{\n    AccountID = "account_id",\n    ID = "id",\n};\n\nvar address = await client.Core.Accounts.Addresses.Retrieve(parameters);\n\nConsole.WriteLine(address);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/accounts/$ACCOUNT_ID/addresses/$ID \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/core/accounts/{account_id}/addresses/{id}',
    httpMethod: 'patch',
    summary: 'Update Address',
    description:
      'This endpoint partially updates an address.\nOnly provided fields are updated; absent fields retain their current values.',
    stainlessPath: '(resource) core.accounts.addresses > (method) update',
    qualified: 'client.core.accounts.addresses.update',
    params: [
      'account_id: string;',
      'id: string;',
      'country?: string;',
      'email?: string;',
      'is_drop_ship?: boolean;',
      'locality?: string;',
      'name?: string;',
      'phone?: string;',
      'postal_code?: string;',
      'state?: string;',
      'street_line_1?: string;',
      'street_line_2?: string;',
    ],
    response:
      "{ id: string; created_at: string; email: string; geolocation: { id: string; country: string; locality: string; object: 'geolocation'; postal_code: string; state: string; street_line_1: string; street_line_2: string; }; is_drop_ship: boolean; name: string; object: 'address'; phone: string; updated_at: string; }",
    markdown:
      "## update\n\n`client.core.accounts.addresses.update(account_id: string, id: string, country?: string, email?: string, is_drop_ship?: boolean, locality?: string, name?: string, phone?: string, postal_code?: string, state?: string, street_line_1?: string, street_line_2?: string): { id: string; created_at: string; email: string; geolocation: object; is_drop_ship: boolean; name: string; object: 'address'; phone: string; updated_at: string; }`\n\n**patch** `/v1/core/accounts/{account_id}/addresses/{id}`\n\nThis endpoint partially updates an address.\nOnly provided fields are updated; absent fields retain their current values.\n\n### Parameters\n\n- `account_id: string`\n\n- `id: string`\n\n- `country?: string`\n  The two-letter country code.\n\n- `email?: string`\n  The email address associated with this address.\n\n- `is_drop_ship?: boolean`\n  Whether this is a drop ship address.\n\n- `locality?: string`\n  The city or locality.\n\n- `name?: string`\n  The display name of the address.\n\n- `phone?: string`\n  The phone number associated with this address.\n\n- `postal_code?: string`\n  The postal or zip code.\n\n- `state?: string`\n  The state or administrative area.\n\n- `street_line_1?: string`\n  The first line of the street address.\n\n- `street_line_2?: string`\n  The second line of the street address.\n\n### Returns\n\n- `{ id: string; created_at: string; email: string; geolocation: { id: string; country: string; locality: string; object: 'geolocation'; postal_code: string; state: string; street_line_1: string; street_line_2: string; }; is_drop_ship: boolean; name: string; object: 'address'; phone: string; updated_at: string; }`\n  Address represents an address with its associated geolocation.\n\n  - `id: string`\n  - `created_at: string`\n  - `email: string`\n  - `geolocation: { id: string; country: string; locality: string; object: 'geolocation'; postal_code: string; state: string; street_line_1: string; street_line_2: string; }`\n  - `is_drop_ship: boolean`\n  - `name: string`\n  - `object: 'address'`\n  - `phone: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst address = await client.core.accounts.addresses.update('id', { account_id: 'account_id' });\n\nconsole.log(address);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.accounts.addresses.update',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst address = await client.core.accounts.addresses.update('id', {\n  account_id: 'account_id',\n  name: 'Warehouse',\n});\n\nconsole.log(address.id);",
      },
      python: {
        method: 'core.accounts.addresses.update',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naddress = client.core.accounts.addresses.update(\n    id="id",\n    account_id="account_id",\n    name="Warehouse",\n)\nprint(address.id)',
      },
      kotlin: {
        method: 'core().accounts().addresses().update',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.accounts.addresses.Address\nimport com.augno.api.models.core.accounts.addresses.AddressUpdateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: AddressUpdateParams = AddressUpdateParams.builder()\n        .accountId("account_id")\n        .id("id")\n        .build()\n    val address: Address = client.core().accounts().addresses().update(params)\n}',
      },
      go: {
        method: 'client.Core.Accounts.Addresses.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taddress, err := client.Core.Accounts.Addresses.Update(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreAccountAddressUpdateParams{\n\t\t\tAccountID: "account_id",\n\t\t\tName:      augno.String("Warehouse"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", address.ID)\n}\n',
      },
      ruby: {
        method: 'core.accounts.addresses.update',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naddress = augno_client.core.accounts.addresses.update("id", account_id: "account_id")\n\nputs(address)',
      },
      csharp: {
        method: 'Core.Accounts.Addresses.Update',
        example:
          'AddressUpdateParams parameters = new()\n{\n    AccountID = "account_id",\n    ID = "id",\n};\n\nvar address = await client.Core.Accounts.Addresses.Update(parameters);\n\nConsole.WriteLine(address);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/accounts/$ACCOUNT_ID/addresses/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'autocomplete',
    endpoint: '/v1/core/addresses/autocomplete',
    httpMethod: 'get',
    summary: 'Autocomplete Address',
    description:
      'This endpoint returns address autocomplete suggestions based on the input text.\nUses the Google Places API for address lookups.',
    stainlessPath: '(resource) core.addresses > (method) autocomplete',
    qualified: 'client.core.addresses.autocomplete',
    params: ['input: string;', 'session_token,omitempty?: string;'],
    response:
      "{ data: { id: string; description: string; main_text: string; secondary_text: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }",
    markdown:
      "## autocomplete\n\n`client.core.addresses.autocomplete(input: string, session_token,omitempty?: string): { data: object[]; object: 'list'; page_info: page_info; }`\n\n**get** `/v1/core/addresses/autocomplete`\n\nThis endpoint returns address autocomplete suggestions based on the input text.\nUses the Google Places API for address lookups.\n\n### Parameters\n\n- `input: string`\n  The text input for autocomplete.\n\n- `session_token,omitempty?: string`\n  An optional session token for grouping autocomplete requests.\n\n### Returns\n\n- `{ data: { id: string; description: string; main_text: string; secondary_text: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }`\n  A paginated list of AddressSuggestion resources\n\n  - `data: { id: string; description: string; main_text: string; secondary_text: string; }[]`\n  - `object: 'list'`\n  - `page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst response = await client.core.addresses.autocomplete({ input: 'input' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.addresses.autocomplete',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.core.addresses.autocomplete({ input: 'input' });\n\nconsole.log(response.data);",
      },
      python: {
        method: 'core.addresses.autocomplete',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.core.addresses.autocomplete(\n    input="input",\n)\nprint(response.data)',
      },
      kotlin: {
        method: 'core().addresses().autocomplete',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.addresses.AddressAutocompleteParams\nimport com.augno.api.models.core.addresses.AddressAutocompleteResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: AddressAutocompleteParams = AddressAutocompleteParams.builder()\n        .input("input")\n        .build()\n    val response: AddressAutocompleteResponse = client.core().addresses().autocomplete(params)\n}',
      },
      go: {
        method: 'client.Core.Addresses.Autocomplete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Core.Addresses.Autocomplete(context.TODO(), augno.CoreAddressAutocompleteParams{\n\t\tInput: "input",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      ruby: {
        method: 'core.addresses.autocomplete',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nresponse = augno_client.core.addresses.autocomplete(input: "input")\n\nputs(response)',
      },
      csharp: {
        method: 'Core.Addresses.Autocomplete',
        example:
          'AddressAutocompleteParams parameters = new() { Input = "input" };\n\nvar response = await client.Core.Addresses.Autocomplete(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/addresses/autocomplete \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'get_details',
    endpoint: '/v1/core/addresses/details/{id}',
    httpMethod: 'get',
    summary: 'Get Address Details',
    description:
      'This endpoint returns parsed address components for a Google Places ID.\nTypically used after an autocomplete selection to get full address details.',
    stainlessPath: '(resource) core.addresses > (method) get_details',
    qualified: 'client.core.addresses.getDetails',
    params: ['id: string;', 'session_token,omitempty?: string;'],
    response:
      '{ address: { address_line_1: string; address_line_2: string; city: string; country: string; country_code: string; postal_code: string; state: string; }; formatted_address: string; }',
    markdown:
      "## get_details\n\n`client.core.addresses.getDetails(id: string, session_token,omitempty?: string): { address: address_components; formatted_address: string; }`\n\n**get** `/v1/core/addresses/details/{id}`\n\nThis endpoint returns parsed address components for a Google Places ID.\nTypically used after an autocomplete selection to get full address details.\n\n### Parameters\n\n- `id: string`\n\n- `session_token,omitempty?: string`\n  An optional session token for grouping with a previous autocomplete request.\n\n### Returns\n\n- `{ address: { address_line_1: string; address_line_2: string; city: string; country: string; country_code: string; postal_code: string; state: string; }; formatted_address: string; }`\n  AddressDetailsResult represents the result of a place details lookup.\n\n  - `address: { address_line_1: string; address_line_2: string; city: string; country: string; country_code: string; postal_code: string; state: string; }`\n  - `formatted_address: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst response = await client.core.addresses.getDetails('id');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.addresses.getDetails',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.core.addresses.getDetails('id');\n\nconsole.log(response.address);",
      },
      python: {
        method: 'core.addresses.get_details',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.core.addresses.get_details(\n    id="id",\n)\nprint(response.address)',
      },
      kotlin: {
        method: 'core().addresses().getDetails',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.addresses.AddressGetDetailsParams\nimport com.augno.api.models.core.addresses.AddressGetDetailsResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val response: AddressGetDetailsResponse = client.core().addresses().getDetails("id")\n}',
      },
      go: {
        method: 'client.Core.Addresses.GetDetails',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Core.Addresses.GetDetails(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreAddressGetDetailsParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Address)\n}\n',
      },
      ruby: {
        method: 'core.addresses.get_details',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nresponse = augno_client.core.addresses.get_details("id")\n\nputs(response)',
      },
      csharp: {
        method: 'Core.Addresses.GetDetails',
        example:
          'AddressGetDetailsParams parameters = new() { ID = "id" };\n\nvar response = await client.Core.Addresses.GetDetails(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/addresses/details/$ID \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'validate',
    endpoint: '/v1/core/addresses/validate',
    httpMethod: 'post',
    summary: 'Validate Address',
    description:
      'This endpoint validates an address using the Google Address Validation API.\nReturns whether the address is valid, a formatted version, and any validation messages.',
    stainlessPath: '(resource) core.addresses > (method) validate',
    qualified: 'client.core.addresses.validate',
    params: [
      'address_line_1: string;',
      'city: string;',
      'country: string;',
      'postal_code: string;',
      'state: string;',
      'address_line_2?: string;',
    ],
    response:
      '{ components: { address_line_1: string; address_line_2: string; city: string; country: string; country_code: string; postal_code: string; state: string; }; formatted_address: string; is_valid: boolean; validation_messages: string[]; }',
    markdown:
      "## validate\n\n`client.core.addresses.validate(address_line_1: string, city: string, country: string, postal_code: string, state: string, address_line_2?: string): { components: address_components; formatted_address: string; is_valid: boolean; validation_messages: string[]; }`\n\n**post** `/v1/core/addresses/validate`\n\nThis endpoint validates an address using the Google Address Validation API.\nReturns whether the address is valid, a formatted version, and any validation messages.\n\n### Parameters\n\n- `address_line_1: string`\n  The first line of the street address.\n\n- `city: string`\n  The city.\n\n- `country: string`\n  The country name or code.\n\n- `postal_code: string`\n  The postal or zip code.\n\n- `state: string`\n  The state or administrative area.\n\n- `address_line_2?: string`\n  The second line of the street address.\n\n### Returns\n\n- `{ components: { address_line_1: string; address_line_2: string; city: string; country: string; country_code: string; postal_code: string; state: string; }; formatted_address: string; is_valid: boolean; validation_messages: string[]; }`\n  ValidatedAddress represents the result of address validation.\n\n  - `components: { address_line_1: string; address_line_2: string; city: string; country: string; country_code: string; postal_code: string; state: string; }`\n  - `formatted_address: string`\n  - `is_valid: boolean`\n  - `validation_messages: string[]`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst response = await client.core.addresses.validate({\n  address_line_1: '123 Main St',\n  city: 'Springfield',\n  country: 'US',\n  postal_code: '62701',\n  state: 'IL',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.addresses.validate',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.core.addresses.validate({\n  address_line_1: '123 Main St',\n  city: 'Springfield',\n  country: 'US',\n  postal_code: '62701',\n  state: 'IL',\n});\n\nconsole.log(response.is_valid);",
      },
      python: {
        method: 'core.addresses.validate',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.core.addresses.validate(\n    address_line_1="123 Main St",\n    city="Springfield",\n    country="US",\n    postal_code="62701",\n    state="IL",\n)\nprint(response.is_valid)',
      },
      kotlin: {
        method: 'core().addresses().validate',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.addresses.AddressValidateParams\nimport com.augno.api.models.core.addresses.AddressValidateResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: AddressValidateParams = AddressValidateParams.builder()\n        .addressLine1("123 Main St")\n        .city("Springfield")\n        .country("US")\n        .postalCode("62701")\n        .state("IL")\n        .build()\n    val response: AddressValidateResponse = client.core().addresses().validate(params)\n}',
      },
      go: {
        method: 'client.Core.Addresses.Validate',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Core.Addresses.Validate(context.TODO(), augno.CoreAddressValidateParams{\n\t\tAddressLine1: "123 Main St",\n\t\tCity:         "Springfield",\n\t\tCountry:      "US",\n\t\tPostalCode:   "62701",\n\t\tState:        "IL",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.IsValid)\n}\n',
      },
      ruby: {
        method: 'core.addresses.validate',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nresponse = augno_client.core.addresses.validate(\n  address_line_1: "123 Main St",\n  city: "Springfield",\n  country: "US",\n  postal_code: "62701",\n  state: "IL"\n)\n\nputs(response)',
      },
      csharp: {
        method: 'Core.Addresses.Validate',
        example:
          'AddressValidateParams parameters = new()\n{\n    AddressLine1 = "123 Main St",\n    City = "Springfield",\n    Country = "US",\n    PostalCode = "62701",\n    State = "IL",\n};\n\nvar response = await client.Core.Addresses.Validate(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/addresses/validate \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "address_line_1": "123 Main St",\n          "city": "Springfield",\n          "country": "US",\n          "postal_code": "62701",\n          "state": "IL"\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/core/carriers',
    httpMethod: 'get',
    summary: 'List Carriers',
    description:
      'This endpoint returns a paginated list of carriers for the target account.\nSupports cursor-based pagination and search by name.',
    stainlessPath: '(resource) core.carriers > (method) list',
    qualified: 'client.core.carriers.list',
    params: ["include?: 'options'[];"],
    response:
      "{ data: { id: string; account_number: string; code: string; created_at: string; deleted_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier'; options: carrier_option[]; shippo_carrier_account_id: string; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }",
    markdown:
      "## list\n\n`client.core.carriers.list(include?: 'options'[]): { data: carrier[]; object: 'list'; page_info: page_info; }`\n\n**get** `/v1/core/carriers`\n\nThis endpoint returns a paginated list of carriers for the target account.\nSupports cursor-based pagination and search by name.\n\n### Parameters\n\n- `include?: 'options'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ data: { id: string; account_number: string; code: string; created_at: string; deleted_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier'; options: carrier_option[]; shippo_carrier_account_id: string; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }`\n  A paginated list of Carrier resources\n\n  - `data: { id: string; account_number: string; code: string; created_at: string; deleted_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier'; options: { id: string; code: string; created_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier_option'; service_level_token: string; updated_at: string; }[]; shippo_carrier_account_id: string; updated_at: string; }[]`\n  - `object: 'list'`\n  - `page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst carriers = await client.core.carriers.list();\n\nconsole.log(carriers);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.carriers.list',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst carriers = await client.core.carriers.list();\n\nconsole.log(carriers.data);",
      },
      python: {
        method: 'core.carriers.list',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\ncarriers = client.core.carriers.list()\nprint(carriers.data)',
      },
      kotlin: {
        method: 'core().carriers().list',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.carriers.CarrierListParams\nimport com.augno.api.models.core.carriers.CarrierListResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val carriers: CarrierListResponse = client.core().carriers().list()\n}',
      },
      go: {
        method: 'client.Core.Carriers.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcarriers, err := client.Core.Carriers.List(context.TODO(), augno.CoreCarrierListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", carriers.Data)\n}\n',
      },
      ruby: {
        method: 'core.carriers.list',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\ncarriers = augno_client.core.carriers.list\n\nputs(carriers)',
      },
      csharp: {
        method: 'Core.Carriers.List',
        example:
          'CarrierListParams parameters = new();\n\nvar carriers = await client.Core.Carriers.List(parameters);\n\nConsole.WriteLine(carriers);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/carriers \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/core/carriers',
    httpMethod: 'post',
    summary: 'Create Carrier',
    description:
      'This endpoint creates a new carrier. If a Shippo-supported carrier code is provided, the carrier will be registered with Shippo and service levels will be auto-synced as options.',
    stainlessPath: '(resource) core.carriers > (method) create',
    qualified: 'client.core.carriers.create',
    params: ['account_number: string;', 'code: string;', 'is_portal_enabled: boolean;', 'name: string;'],
    response:
      "{ id: string; account_number: string; code: string; created_at: string; deleted_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier'; options: { id: string; code: string; created_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier_option'; service_level_token: string; updated_at: string; }[]; shippo_carrier_account_id: string; updated_at: string; }",
    markdown:
      "## create\n\n`client.core.carriers.create(account_number: string, code: string, is_portal_enabled: boolean, name: string): { id: string; account_number: string; code: string; created_at: string; deleted_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier'; options: carrier_option[]; shippo_carrier_account_id: string; updated_at: string; }`\n\n**post** `/v1/core/carriers`\n\nThis endpoint creates a new carrier. If a Shippo-supported carrier code is provided, the carrier will be registered with Shippo and service levels will be auto-synced as options.\n\n### Parameters\n\n- `account_number: string`\n  The carrier account number, required for UPS and USPS carriers.\n\n- `code: string`\n  The carrier code (e.g. \"fedex\", \"ups\", \"usps\"). If a Shippo-supported code is provided, the carrier will be integrated with Shippo.\n\n- `is_portal_enabled: boolean`\n  Whether this carrier is enabled for the customer portal.\n\n- `name: string`\n  The display name of the carrier.\n\n### Returns\n\n- `{ id: string; account_number: string; code: string; created_at: string; deleted_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier'; options: { id: string; code: string; created_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier_option'; service_level_token: string; updated_at: string; }[]; shippo_carrier_account_id: string; updated_at: string; }`\n  Carrier represents a shipping carrier configured for the account.\n\n  - `id: string`\n  - `account_number: string`\n  - `code: string`\n  - `created_at: string`\n  - `deleted_at: string`\n  - `is_default: boolean`\n  - `is_portal_enabled: boolean`\n  - `name: string`\n  - `object: 'carrier'`\n  - `options: { id: string; code: string; created_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier_option'; service_level_token: string; updated_at: string; }[]`\n  - `shippo_carrier_account_id: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst carrier = await client.core.carriers.create({\n  account_number: null,\n  code: 'fedex',\n  is_portal_enabled: true,\n  name: 'FedEx',\n});\n\nconsole.log(carrier);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.carriers.create',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst carrier = await client.core.carriers.create({\n  account_number: null,\n  code: 'fedex',\n  is_portal_enabled: true,\n  name: 'FedEx',\n});\n\nconsole.log(carrier.id);",
      },
      python: {
        method: 'core.carriers.create',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\ncarrier = client.core.carriers.create(\n    account_number=None,\n    code="fedex",\n    is_portal_enabled=True,\n    name="FedEx",\n)\nprint(carrier.id)',
      },
      kotlin: {
        method: 'core().carriers().create',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.carriers.Carrier\nimport com.augno.api.models.core.carriers.CarrierCreateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: CarrierCreateParams = CarrierCreateParams.builder()\n        .accountNumber(null)\n        .code("fedex")\n        .isPortalEnabled(true)\n        .name("FedEx")\n        .build()\n    val carrier: Carrier = client.core().carriers().create(params)\n}',
      },
      go: {
        method: 'client.Core.Carriers.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n\t"github.com/stainless-sdks/augno-go/packages/param"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcarrier, err := client.Core.Carriers.New(context.TODO(), augno.CoreCarrierNewParams{\n\t\tAccountNumber:   param.Null[string](),\n\t\tCode:            augno.String("fedex"),\n\t\tIsPortalEnabled: true,\n\t\tName:            "FedEx",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", carrier.ID)\n}\n',
      },
      ruby: {
        method: 'core.carriers.create',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\ncarrier = augno_client.core.carriers.create(\n  account_number: nil,\n  code: "fedex",\n  is_portal_enabled: true,\n  name: "FedEx"\n)\n\nputs(carrier)',
      },
      csharp: {
        method: 'Core.Carriers.Create',
        example:
          'CarrierCreateParams parameters = new()\n{\n    AccountNumber = null,\n    Code = "fedex",\n    IsPortalEnabled = true,\n    Name = "FedEx",\n};\n\nvar carrier = await client.Core.Carriers.Create(parameters);\n\nConsole.WriteLine(carrier);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/carriers \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "account_number": null,\n          "code": "fedex",\n          "is_portal_enabled": true,\n          "name": "FedEx"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/core/carriers/{id}',
    httpMethod: 'delete',
    summary: 'Delete Carrier',
    description:
      'This endpoint soft-deletes a carrier and cascades to remove all its options. If the carrier is managed by Shippo, the Shippo account is deactivated.',
    stainlessPath: '(resource) core.carriers > (method) delete',
    qualified: 'client.core.carriers.delete',
    params: ['id: string;'],
    response: '{  }',
    markdown:
      "## delete\n\n`client.core.carriers.delete(id: string): {  }`\n\n**delete** `/v1/core/carriers/{id}`\n\nThis endpoint soft-deletes a carrier and cascades to remove all its options. If the carrier is managed by Shippo, the Shippo account is deactivated.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{  }`\n\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst carrier = await client.core.carriers.delete('id');\n\nconsole.log(carrier);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.carriers.delete',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst carrier = await client.core.carriers.delete('id');\n\nconsole.log(carrier);",
      },
      python: {
        method: 'core.carriers.delete',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\ncarrier = client.core.carriers.delete(\n    "id",\n)\nprint(carrier)',
      },
      kotlin: {
        method: 'core().carriers().delete',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.carriers.CarrierDeleteParams\nimport com.augno.api.models.core.carriers.CarrierDeleteResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val carrier: CarrierDeleteResponse = client.core().carriers().delete("id")\n}',
      },
      go: {
        method: 'client.Core.Carriers.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcarrier, err := client.Core.Carriers.Delete(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", carrier)\n}\n',
      },
      ruby: {
        method: 'core.carriers.delete',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\ncarrier = augno_client.core.carriers.delete("id")\n\nputs(carrier)',
      },
      csharp: {
        method: 'Core.Carriers.Delete',
        example:
          'CarrierDeleteParams parameters = new() { ID = "id" };\n\nvar carrier = await client.Core.Carriers.Delete(parameters);\n\nConsole.WriteLine(carrier);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/carriers/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/core/carriers/{id}',
    httpMethod: 'get',
    summary: 'Get Carrier',
    description: 'This endpoint returns a single carrier by its ID.',
    stainlessPath: '(resource) core.carriers > (method) retrieve',
    qualified: 'client.core.carriers.retrieve',
    params: ['id: string;', "include?: 'options'[];"],
    response:
      "{ id: string; account_number: string; code: string; created_at: string; deleted_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier'; options: { id: string; code: string; created_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier_option'; service_level_token: string; updated_at: string; }[]; shippo_carrier_account_id: string; updated_at: string; }",
    markdown:
      "## retrieve\n\n`client.core.carriers.retrieve(id: string, include?: 'options'[]): { id: string; account_number: string; code: string; created_at: string; deleted_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier'; options: carrier_option[]; shippo_carrier_account_id: string; updated_at: string; }`\n\n**get** `/v1/core/carriers/{id}`\n\nThis endpoint returns a single carrier by its ID.\n\n### Parameters\n\n- `id: string`\n\n- `include?: 'options'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ id: string; account_number: string; code: string; created_at: string; deleted_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier'; options: { id: string; code: string; created_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier_option'; service_level_token: string; updated_at: string; }[]; shippo_carrier_account_id: string; updated_at: string; }`\n  Carrier represents a shipping carrier configured for the account.\n\n  - `id: string`\n  - `account_number: string`\n  - `code: string`\n  - `created_at: string`\n  - `deleted_at: string`\n  - `is_default: boolean`\n  - `is_portal_enabled: boolean`\n  - `name: string`\n  - `object: 'carrier'`\n  - `options: { id: string; code: string; created_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier_option'; service_level_token: string; updated_at: string; }[]`\n  - `shippo_carrier_account_id: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst carrier = await client.core.carriers.retrieve('id');\n\nconsole.log(carrier);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.carriers.retrieve',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst carrier = await client.core.carriers.retrieve('id');\n\nconsole.log(carrier.id);",
      },
      python: {
        method: 'core.carriers.retrieve',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\ncarrier = client.core.carriers.retrieve(\n    id="id",\n)\nprint(carrier.id)',
      },
      kotlin: {
        method: 'core().carriers().retrieve',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.carriers.Carrier\nimport com.augno.api.models.core.carriers.CarrierRetrieveParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val carrier: Carrier = client.core().carriers().retrieve("id")\n}',
      },
      go: {
        method: 'client.Core.Carriers.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcarrier, err := client.Core.Carriers.Get(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreCarrierGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", carrier.ID)\n}\n',
      },
      ruby: {
        method: 'core.carriers.retrieve',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\ncarrier = augno_client.core.carriers.retrieve("id")\n\nputs(carrier)',
      },
      csharp: {
        method: 'Core.Carriers.Retrieve',
        example:
          'CarrierRetrieveParams parameters = new() { ID = "id" };\n\nvar carrier = await client.Core.Carriers.Retrieve(parameters);\n\nConsole.WriteLine(carrier);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/carriers/$ID \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/core/carriers/{id}',
    httpMethod: 'patch',
    summary: 'Update Carrier',
    description: "This endpoint partially updates a carrier's name and portal visibility.",
    stainlessPath: '(resource) core.carriers > (method) update',
    qualified: 'client.core.carriers.update',
    params: ['id: string;', 'is_portal_enabled: boolean;', 'name: string;'],
    response:
      "{ id: string; account_number: string; code: string; created_at: string; deleted_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier'; options: { id: string; code: string; created_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier_option'; service_level_token: string; updated_at: string; }[]; shippo_carrier_account_id: string; updated_at: string; }",
    markdown:
      "## update\n\n`client.core.carriers.update(id: string, is_portal_enabled: boolean, name: string): { id: string; account_number: string; code: string; created_at: string; deleted_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier'; options: carrier_option[]; shippo_carrier_account_id: string; updated_at: string; }`\n\n**patch** `/v1/core/carriers/{id}`\n\nThis endpoint partially updates a carrier's name and portal visibility.\n\n### Parameters\n\n- `id: string`\n\n- `is_portal_enabled: boolean`\n  Whether this carrier is enabled for the customer portal.\n\n- `name: string`\n  The new display name for the carrier.\n\n### Returns\n\n- `{ id: string; account_number: string; code: string; created_at: string; deleted_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier'; options: { id: string; code: string; created_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier_option'; service_level_token: string; updated_at: string; }[]; shippo_carrier_account_id: string; updated_at: string; }`\n  Carrier represents a shipping carrier configured for the account.\n\n  - `id: string`\n  - `account_number: string`\n  - `code: string`\n  - `created_at: string`\n  - `deleted_at: string`\n  - `is_default: boolean`\n  - `is_portal_enabled: boolean`\n  - `name: string`\n  - `object: 'carrier'`\n  - `options: { id: string; code: string; created_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier_option'; service_level_token: string; updated_at: string; }[]`\n  - `shippo_carrier_account_id: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst carrier = await client.core.carriers.update('id', { is_portal_enabled: null, name: 'FedEx Express' });\n\nconsole.log(carrier);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.carriers.update',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst carrier = await client.core.carriers.update('id', {\n  is_portal_enabled: null,\n  name: 'FedEx Express',\n});\n\nconsole.log(carrier.id);",
      },
      python: {
        method: 'core.carriers.update',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\ncarrier = client.core.carriers.update(\n    id="id",\n    is_portal_enabled=None,\n    name="FedEx Express",\n)\nprint(carrier.id)',
      },
      kotlin: {
        method: 'core().carriers().update',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.carriers.Carrier\nimport com.augno.api.models.core.carriers.CarrierUpdateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: CarrierUpdateParams = CarrierUpdateParams.builder()\n        .id("id")\n        .isPortalEnabled(null)\n        .name("FedEx Express")\n        .build()\n    val carrier: Carrier = client.core().carriers().update(params)\n}',
      },
      go: {
        method: 'client.Core.Carriers.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n\t"github.com/stainless-sdks/augno-go/packages/param"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcarrier, err := client.Core.Carriers.Update(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreCarrierUpdateParams{\n\t\t\tIsPortalEnabled: param.Null[bool](),\n\t\t\tName:            augno.String("FedEx Express"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", carrier.ID)\n}\n',
      },
      ruby: {
        method: 'core.carriers.update',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\ncarrier = augno_client.core.carriers.update("id", is_portal_enabled: nil, name: "FedEx Express")\n\nputs(carrier)',
      },
      csharp: {
        method: 'Core.Carriers.Update',
        example:
          'CarrierUpdateParams parameters = new()\n{\n    ID = "id",\n    IsPortalEnabled = null,\n    Name = "FedEx Express",\n};\n\nvar carrier = await client.Core.Carriers.Update(parameters);\n\nConsole.WriteLine(carrier);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/carriers/$ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "is_portal_enabled": null,\n          "name": "FedEx Express"\n        }\'',
      },
    },
  },
  {
    name: 'get_oauth_status',
    endpoint: '/v1/core/carriers/{id}/oauth-status',
    httpMethod: 'get',
    summary: 'Get Carrier OAuth Status',
    description:
      'This endpoint returns the OAuth connection status for a carrier. Returns "connected" or "disconnected". Sandbox accounts always return "disconnected".',
    stainlessPath: '(resource) core.carriers > (method) get_oauth_status',
    qualified: 'client.core.carriers.getOAuthStatus',
    params: ['id: string;'],
    response: '{ status: string; }',
    markdown:
      '## get_oauth_status\n\n`client.core.carriers.getOAuthStatus(id: string): { status: string; }`\n\n**get** `/v1/core/carriers/{id}/oauth-status`\n\nThis endpoint returns the OAuth connection status for a carrier. Returns "connected" or "disconnected". Sandbox accounts always return "disconnected".\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ status: string; }`\n  OAuthStatusResponse represents the OAuth connection status for a carrier.\n\n  - `status: string`\n\n### Example\n\n```typescript\nimport AugnoClient from \'augno\';\n\nconst client = new AugnoClient();\n\nconst response = await client.core.carriers.getOAuthStatus(\'id\');\n\nconsole.log(response);\n```',
    perLanguage: {
      typescript: {
        method: 'client.core.carriers.getOAuthStatus',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.core.carriers.getOAuthStatus('id');\n\nconsole.log(response.status);",
      },
      python: {
        method: 'core.carriers.get_oauth_status',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.core.carriers.get_oauth_status(\n    "id",\n)\nprint(response.status)',
      },
      kotlin: {
        method: 'core().carriers().getOAuthStatus',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.carriers.CarrierGetOAuthStatusParams\nimport com.augno.api.models.core.carriers.CarrierGetOAuthStatusResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val response: CarrierGetOAuthStatusResponse = client.core().carriers().getOAuthStatus("id")\n}',
      },
      go: {
        method: 'client.Core.Carriers.GetOAuthStatus',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Core.Carriers.GetOAuthStatus(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Status)\n}\n',
      },
      ruby: {
        method: 'core.carriers.get_oauth_status',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nresponse = augno_client.core.carriers.get_oauth_status("id")\n\nputs(response)',
      },
      csharp: {
        method: 'Core.Carriers.GetOAuthStatus',
        example:
          'CarrierGetOAuthStatusParams parameters = new() { ID = "id" };\n\nvar response = await client.Core.Carriers.GetOAuthStatus(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/carriers/$ID/oauth-status \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/core/carriers/{carrier_id}/options',
    httpMethod: 'get',
    summary: 'List Carrier Options',
    description:
      'This endpoint returns a paginated list of carrier options (shipping service levels) for a carrier.',
    stainlessPath: '(resource) core.carriers.options > (method) list',
    qualified: 'client.core.carriers.options.list',
    params: ['carrier_id: string;'],
    response:
      "{ data: { id: string; code: string; created_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier_option'; service_level_token: string; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }",
    markdown:
      "## list\n\n`client.core.carriers.options.list(carrier_id: string): { data: carrier_option[]; object: 'list'; page_info: page_info; }`\n\n**get** `/v1/core/carriers/{carrier_id}/options`\n\nThis endpoint returns a paginated list of carrier options (shipping service levels) for a carrier.\n\n### Parameters\n\n- `carrier_id: string`\n\n### Returns\n\n- `{ data: { id: string; code: string; created_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier_option'; service_level_token: string; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }`\n  A paginated list of CarrierOption resources\n\n  - `data: { id: string; code: string; created_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier_option'; service_level_token: string; updated_at: string; }[]`\n  - `object: 'list'`\n  - `page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst options = await client.core.carriers.options.list('carrier_id');\n\nconsole.log(options);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.carriers.options.list',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst options = await client.core.carriers.options.list('carrier_id');\n\nconsole.log(options.data);",
      },
      python: {
        method: 'core.carriers.options.list',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\noptions = client.core.carriers.options.list(\n    "carrier_id",\n)\nprint(options.data)',
      },
      kotlin: {
        method: 'core().carriers().options().list',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.carriers.options.OptionListParams\nimport com.augno.api.models.core.carriers.options.OptionListResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val options: OptionListResponse = client.core().carriers().options().list("carrier_id")\n}',
      },
      go: {
        method: 'client.Core.Carriers.Options.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\toptions, err := client.Core.Carriers.Options.List(context.TODO(), "carrier_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", options.Data)\n}\n',
      },
      ruby: {
        method: 'core.carriers.options.list',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\noptions = augno_client.core.carriers.options.list("carrier_id")\n\nputs(options)',
      },
      csharp: {
        method: 'Core.Carriers.Options.List',
        example:
          'OptionListParams parameters = new() { CarrierID = "carrier_id" };\n\nvar options = await client.Core.Carriers.Options.List(parameters);\n\nConsole.WriteLine(options);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/carriers/$CARRIER_ID/options \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/core/carriers/{carrier_id}/options',
    httpMethod: 'post',
    summary: 'Create Carrier Option',
    description: 'This endpoint creates a new carrier option (shipping service level) for a carrier.',
    stainlessPath: '(resource) core.carriers.options > (method) create',
    qualified: 'client.core.carriers.options.create',
    params: [
      'carrier_id: string;',
      'code: string;',
      'is_default: boolean;',
      'is_portal_enabled: boolean;',
      'name: string;',
      'service_level_token: string;',
    ],
    response:
      "{ id: string; code: string; created_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier_option'; service_level_token: string; updated_at: string; }",
    markdown:
      "## create\n\n`client.core.carriers.options.create(carrier_id: string, code: string, is_default: boolean, is_portal_enabled: boolean, name: string, service_level_token: string): { id: string; code: string; created_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier_option'; service_level_token: string; updated_at: string; }`\n\n**post** `/v1/core/carriers/{carrier_id}/options`\n\nThis endpoint creates a new carrier option (shipping service level) for a carrier.\n\n### Parameters\n\n- `carrier_id: string`\n\n- `code: string`\n  The carrier option code.\n\n- `is_default: boolean`\n  Whether this is a default (system-synced) option.\n\n- `is_portal_enabled: boolean`\n  Whether this option is enabled for the customer portal.\n\n- `name: string`\n  The display name of the carrier option.\n\n- `service_level_token: string`\n  The Shippo service level token, if this option maps to a Shippo service level.\n\n### Returns\n\n- `{ id: string; code: string; created_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier_option'; service_level_token: string; updated_at: string; }`\n  CarrierOption represents a shipping service level for a carrier.\n\n  - `id: string`\n  - `code: string`\n  - `created_at: string`\n  - `is_default: boolean`\n  - `is_portal_enabled: boolean`\n  - `name: string`\n  - `object: 'carrier_option'`\n  - `service_level_token: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst carrierOption = await client.core.carriers.options.create('carrier_id', {\n  code: 'ground',\n  is_default: false,\n  is_portal_enabled: true,\n  name: 'Ground Shipping',\n  service_level_token: null,\n});\n\nconsole.log(carrierOption);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.carriers.options.create',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst carrierOption = await client.core.carriers.options.create('carrier_id', {\n  code: 'ground',\n  is_default: false,\n  is_portal_enabled: true,\n  name: 'Ground Shipping',\n  service_level_token: null,\n});\n\nconsole.log(carrierOption.id);",
      },
      python: {
        method: 'core.carriers.options.create',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\ncarrier_option = client.core.carriers.options.create(\n    carrier_id="carrier_id",\n    code="ground",\n    is_default=False,\n    is_portal_enabled=True,\n    name="Ground Shipping",\n    service_level_token=None,\n)\nprint(carrier_option.id)',
      },
      kotlin: {
        method: 'core().carriers().options().create',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.carriers.options.CarrierOption\nimport com.augno.api.models.core.carriers.options.OptionCreateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: OptionCreateParams = OptionCreateParams.builder()\n        .carrierId("carrier_id")\n        .code("ground")\n        .isDefault(false)\n        .isPortalEnabled(true)\n        .name("Ground Shipping")\n        .serviceLevelToken(null)\n        .build()\n    val carrierOption: CarrierOption = client.core().carriers().options().create(params)\n}',
      },
      go: {
        method: 'client.Core.Carriers.Options.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n\t"github.com/stainless-sdks/augno-go/packages/param"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcarrierOption, err := client.Core.Carriers.Options.New(\n\t\tcontext.TODO(),\n\t\t"carrier_id",\n\t\taugno.CoreCarrierOptionNewParams{\n\t\t\tCode:              "ground",\n\t\t\tIsDefault:         false,\n\t\t\tIsPortalEnabled:   true,\n\t\t\tName:              "Ground Shipping",\n\t\t\tServiceLevelToken: param.Null[string](),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", carrierOption.ID)\n}\n',
      },
      ruby: {
        method: 'core.carriers.options.create',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\ncarrier_option = augno_client.core.carriers.options.create(\n  "carrier_id",\n  code: "ground",\n  is_default: false,\n  is_portal_enabled: true,\n  name: "Ground Shipping",\n  service_level_token: nil\n)\n\nputs(carrier_option)',
      },
      csharp: {
        method: 'Core.Carriers.Options.Create',
        example:
          'OptionCreateParams parameters = new()\n{\n    CarrierID = "carrier_id",\n    Code = "ground",\n    IsDefault = false,\n    IsPortalEnabled = true,\n    Name = "Ground Shipping",\n    ServiceLevelToken = null,\n};\n\nvar carrierOption = await client.Core.Carriers.Options.Create(parameters);\n\nConsole.WriteLine(carrierOption);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/carriers/$CARRIER_ID/options \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "code": "ground",\n          "is_default": false,\n          "is_portal_enabled": true,\n          "name": "Ground Shipping",\n          "service_level_token": null\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/core/carriers/{carrier_id}/options/{id}',
    httpMethod: 'delete',
    summary: 'Delete Carrier Option',
    description:
      'This endpoint permanently deletes a carrier option. Default (system-synced) options cannot be deleted.',
    stainlessPath: '(resource) core.carriers.options > (method) delete',
    qualified: 'client.core.carriers.options.delete',
    params: ['carrier_id: string;', 'id: string;'],
    response: '{  }',
    markdown:
      "## delete\n\n`client.core.carriers.options.delete(carrier_id: string, id: string): {  }`\n\n**delete** `/v1/core/carriers/{carrier_id}/options/{id}`\n\nThis endpoint permanently deletes a carrier option. Default (system-synced) options cannot be deleted.\n\n### Parameters\n\n- `carrier_id: string`\n\n- `id: string`\n\n### Returns\n\n- `{  }`\n\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst option = await client.core.carriers.options.delete('id', { carrier_id: 'carrier_id' });\n\nconsole.log(option);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.carriers.options.delete',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst option = await client.core.carriers.options.delete('id', { carrier_id: 'carrier_id' });\n\nconsole.log(option);",
      },
      python: {
        method: 'core.carriers.options.delete',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\noption = client.core.carriers.options.delete(\n    id="id",\n    carrier_id="carrier_id",\n)\nprint(option)',
      },
      kotlin: {
        method: 'core().carriers().options().delete',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.carriers.options.OptionDeleteParams\nimport com.augno.api.models.core.carriers.options.OptionDeleteResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: OptionDeleteParams = OptionDeleteParams.builder()\n        .carrierId("carrier_id")\n        .id("id")\n        .build()\n    val option: OptionDeleteResponse = client.core().carriers().options().delete(params)\n}',
      },
      go: {
        method: 'client.Core.Carriers.Options.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\toption, err := client.Core.Carriers.Options.Delete(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreCarrierOptionDeleteParams{\n\t\t\tCarrierID: "carrier_id",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", option)\n}\n',
      },
      ruby: {
        method: 'core.carriers.options.delete',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\noption = augno_client.core.carriers.options.delete("id", carrier_id: "carrier_id")\n\nputs(option)',
      },
      csharp: {
        method: 'Core.Carriers.Options.Delete',
        example:
          'OptionDeleteParams parameters = new()\n{\n    CarrierID = "carrier_id",\n    ID = "id",\n};\n\nvar option = await client.Core.Carriers.Options.Delete(parameters);\n\nConsole.WriteLine(option);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/carriers/$CARRIER_ID/options/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/core/carriers/{carrier_id}/options/{id}',
    httpMethod: 'get',
    summary: 'Get Carrier Option',
    description: 'This endpoint returns a single carrier option by its ID.',
    stainlessPath: '(resource) core.carriers.options > (method) retrieve',
    qualified: 'client.core.carriers.options.retrieve',
    params: ['carrier_id: string;', 'id: string;'],
    response:
      "{ id: string; code: string; created_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier_option'; service_level_token: string; updated_at: string; }",
    markdown:
      "## retrieve\n\n`client.core.carriers.options.retrieve(carrier_id: string, id: string): { id: string; code: string; created_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier_option'; service_level_token: string; updated_at: string; }`\n\n**get** `/v1/core/carriers/{carrier_id}/options/{id}`\n\nThis endpoint returns a single carrier option by its ID.\n\n### Parameters\n\n- `carrier_id: string`\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; code: string; created_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier_option'; service_level_token: string; updated_at: string; }`\n  CarrierOption represents a shipping service level for a carrier.\n\n  - `id: string`\n  - `code: string`\n  - `created_at: string`\n  - `is_default: boolean`\n  - `is_portal_enabled: boolean`\n  - `name: string`\n  - `object: 'carrier_option'`\n  - `service_level_token: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst carrierOption = await client.core.carriers.options.retrieve('id', { carrier_id: 'carrier_id' });\n\nconsole.log(carrierOption);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.carriers.options.retrieve',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst carrierOption = await client.core.carriers.options.retrieve('id', {\n  carrier_id: 'carrier_id',\n});\n\nconsole.log(carrierOption.id);",
      },
      python: {
        method: 'core.carriers.options.retrieve',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\ncarrier_option = client.core.carriers.options.retrieve(\n    id="id",\n    carrier_id="carrier_id",\n)\nprint(carrier_option.id)',
      },
      kotlin: {
        method: 'core().carriers().options().retrieve',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.carriers.options.CarrierOption\nimport com.augno.api.models.core.carriers.options.OptionRetrieveParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: OptionRetrieveParams = OptionRetrieveParams.builder()\n        .carrierId("carrier_id")\n        .id("id")\n        .build()\n    val carrierOption: CarrierOption = client.core().carriers().options().retrieve(params)\n}',
      },
      go: {
        method: 'client.Core.Carriers.Options.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcarrierOption, err := client.Core.Carriers.Options.Get(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreCarrierOptionGetParams{\n\t\t\tCarrierID: "carrier_id",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", carrierOption.ID)\n}\n',
      },
      ruby: {
        method: 'core.carriers.options.retrieve',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\ncarrier_option = augno_client.core.carriers.options.retrieve("id", carrier_id: "carrier_id")\n\nputs(carrier_option)',
      },
      csharp: {
        method: 'Core.Carriers.Options.Retrieve',
        example:
          'OptionRetrieveParams parameters = new()\n{\n    CarrierID = "carrier_id",\n    ID = "id",\n};\n\nvar carrierOption = await client.Core.Carriers.Options.Retrieve(parameters);\n\nConsole.WriteLine(carrierOption);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/carriers/$CARRIER_ID/options/$ID \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/core/carriers/{carrier_id}/options/{id}',
    httpMethod: 'patch',
    summary: 'Update Carrier Option',
    description: "This endpoint partially updates a carrier option's name, code, and portal visibility.",
    stainlessPath: '(resource) core.carriers.options > (method) update',
    qualified: 'client.core.carriers.options.update',
    params: [
      'carrier_id: string;',
      'id: string;',
      'code: string;',
      'is_default: boolean;',
      'is_portal_enabled: boolean;',
      'name: string;',
    ],
    response:
      "{ id: string; code: string; created_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier_option'; service_level_token: string; updated_at: string; }",
    markdown:
      "## update\n\n`client.core.carriers.options.update(carrier_id: string, id: string, code: string, is_default: boolean, is_portal_enabled: boolean, name: string): { id: string; code: string; created_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier_option'; service_level_token: string; updated_at: string; }`\n\n**patch** `/v1/core/carriers/{carrier_id}/options/{id}`\n\nThis endpoint partially updates a carrier option's name, code, and portal visibility.\n\n### Parameters\n\n- `carrier_id: string`\n\n- `id: string`\n\n- `code: string`\n  The new carrier option code.\n\n- `is_default: boolean`\n  Whether this is a default (system-synced) option.\n\n- `is_portal_enabled: boolean`\n  Whether this option is enabled for the customer portal.\n\n- `name: string`\n  The new display name for the carrier option.\n\n### Returns\n\n- `{ id: string; code: string; created_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier_option'; service_level_token: string; updated_at: string; }`\n  CarrierOption represents a shipping service level for a carrier.\n\n  - `id: string`\n  - `code: string`\n  - `created_at: string`\n  - `is_default: boolean`\n  - `is_portal_enabled: boolean`\n  - `name: string`\n  - `object: 'carrier_option'`\n  - `service_level_token: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst carrierOption = await client.core.carriers.options.update('id', {\n  carrier_id: 'carrier_id',\n  code: null,\n  is_default: null,\n  is_portal_enabled: null,\n  name: 'Express Shipping',\n});\n\nconsole.log(carrierOption);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.carriers.options.update',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst carrierOption = await client.core.carriers.options.update('id', {\n  carrier_id: 'carrier_id',\n  code: null,\n  is_default: null,\n  is_portal_enabled: null,\n  name: 'Express Shipping',\n});\n\nconsole.log(carrierOption.id);",
      },
      python: {
        method: 'core.carriers.options.update',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\ncarrier_option = client.core.carriers.options.update(\n    id="id",\n    carrier_id="carrier_id",\n    code=None,\n    is_default=None,\n    is_portal_enabled=None,\n    name="Express Shipping",\n)\nprint(carrier_option.id)',
      },
      kotlin: {
        method: 'core().carriers().options().update',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.carriers.options.CarrierOption\nimport com.augno.api.models.core.carriers.options.OptionUpdateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: OptionUpdateParams = OptionUpdateParams.builder()\n        .carrierId("carrier_id")\n        .id("id")\n        .code(null)\n        .isDefault(null)\n        .isPortalEnabled(null)\n        .name("Express Shipping")\n        .build()\n    val carrierOption: CarrierOption = client.core().carriers().options().update(params)\n}',
      },
      go: {
        method: 'client.Core.Carriers.Options.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n\t"github.com/stainless-sdks/augno-go/packages/param"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcarrierOption, err := client.Core.Carriers.Options.Update(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreCarrierOptionUpdateParams{\n\t\t\tCarrierID:       "carrier_id",\n\t\t\tCode:            param.Null[string](),\n\t\t\tIsDefault:       param.Null[bool](),\n\t\t\tIsPortalEnabled: param.Null[bool](),\n\t\t\tName:            augno.String("Express Shipping"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", carrierOption.ID)\n}\n',
      },
      ruby: {
        method: 'core.carriers.options.update',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\ncarrier_option = augno_client.core.carriers.options.update(\n  "id",\n  carrier_id: "carrier_id",\n  code: nil,\n  is_default: nil,\n  is_portal_enabled: nil,\n  name: "Express Shipping"\n)\n\nputs(carrier_option)',
      },
      csharp: {
        method: 'Core.Carriers.Options.Update',
        example:
          'OptionUpdateParams parameters = new()\n{\n    CarrierID = "carrier_id",\n    ID = "id",\n    Code = null,\n    IsDefault = null,\n    IsPortalEnabled = null,\n    Name = "Express Shipping",\n};\n\nvar carrierOption = await client.Core.Carriers.Options.Update(parameters);\n\nConsole.WriteLine(carrierOption);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/carriers/$CARRIER_ID/options/$ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "code": null,\n          "is_default": null,\n          "is_portal_enabled": null,\n          "name": "Express Shipping"\n        }\'',
      },
    },
  },
  {
    name: 'initiate_oauth',
    endpoint: '/v1/core/carriers/{id}/actions/initiate-oauth',
    httpMethod: 'post',
    summary: 'Initiate Carrier OAuth',
    description:
      'This endpoint initiates the OAuth flow for a Shippo-managed carrier (e.g. FedEx). Returns an OAuth URL to redirect the user to. Not available in sandbox mode.',
    stainlessPath: '(resource) core.carriers.actions > (method) initiate_oauth',
    qualified: 'client.core.carriers.actions.initiateOAuth',
    params: ['id: string;', 'redirect_uri: string;', 'state: string;'],
    response: '{ oauth_url: string; }',
    markdown:
      "## initiate_oauth\n\n`client.core.carriers.actions.initiateOAuth(id: string, redirect_uri: string, state: string): { oauth_url: string; }`\n\n**post** `/v1/core/carriers/{id}/actions/initiate-oauth`\n\nThis endpoint initiates the OAuth flow for a Shippo-managed carrier (e.g. FedEx). Returns an OAuth URL to redirect the user to. Not available in sandbox mode.\n\n### Parameters\n\n- `id: string`\n\n- `redirect_uri: string`\n  The URI to redirect to after OAuth completes.\n\n- `state: string`\n  An optional opaque state value passed through the OAuth flow.\n\n### Returns\n\n- `{ oauth_url: string; }`\n  OAuthResponse represents the response from initiating carrier OAuth.\n\n  - `oauth_url: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst response = await client.core.carriers.actions.initiateOAuth('id', { redirect_uri: 'https://app.example.com/carriers/oauth/callback', state: null });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.carriers.actions.initiateOAuth',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.core.carriers.actions.initiateOAuth('id', {\n  redirect_uri: 'https://app.example.com/carriers/oauth/callback',\n  state: null,\n});\n\nconsole.log(response.oauth_url);",
      },
      python: {
        method: 'core.carriers.actions.initiate_oauth',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.core.carriers.actions.initiate_oauth(\n    id="id",\n    redirect_uri="https://app.example.com/carriers/oauth/callback",\n    state=None,\n)\nprint(response.oauth_url)',
      },
      kotlin: {
        method: 'core().carriers().actions().initiateOAuth',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.carriers.actions.ActionInitiateOAuthParams\nimport com.augno.api.models.core.carriers.actions.ActionInitiateOAuthResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: ActionInitiateOAuthParams = ActionInitiateOAuthParams.builder()\n        .id("id")\n        .redirectUri("https://app.example.com/carriers/oauth/callback")\n        .state(null)\n        .build()\n    val response: ActionInitiateOAuthResponse = client.core().carriers().actions().initiateOAuth(params)\n}',
      },
      go: {
        method: 'client.Core.Carriers.Actions.InitiateOAuth',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n\t"github.com/stainless-sdks/augno-go/packages/param"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Core.Carriers.Actions.InitiateOAuth(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreCarrierActionInitiateOAuthParams{\n\t\t\tRedirectUri: "https://app.example.com/carriers/oauth/callback",\n\t\t\tState:       param.Null[string](),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.OAuthURL)\n}\n',
      },
      ruby: {
        method: 'core.carriers.actions.initiate_oauth',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nresponse = augno_client.core.carriers.actions.initiate_oauth(\n  "id",\n  redirect_uri: "https://app.example.com/carriers/oauth/callback",\n  state: nil\n)\n\nputs(response)',
      },
      csharp: {
        method: 'Core.Carriers.Actions.InitiateOAuth',
        example:
          'ActionInitiateOAuthParams parameters = new()\n{\n    ID = "id",\n    RedirectUri = "https://app.example.com/carriers/oauth/callback",\n    State = null,\n};\n\nvar response = await client.Core.Carriers.Actions.InitiateOAuth(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/carriers/$ID/actions/initiate-oauth \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "redirect_uri": "https://app.example.com/carriers/oauth/callback",\n          "state": null\n        }\'',
      },
    },
  },
  {
    name: 'sync_options',
    endpoint: '/v1/core/carriers/{id}/actions/sync-options',
    httpMethod: 'post',
    summary: 'Sync Carrier Options',
    description:
      'This endpoint syncs carrier options from Shippo service levels. Adds new service levels and removes stale ones. Not available in sandbox mode.',
    stainlessPath: '(resource) core.carriers.actions > (method) sync_options',
    qualified: 'client.core.carriers.actions.syncOptions',
    params: ['id: string;'],
    response:
      "{ id: string; account_number: string; code: string; created_at: string; deleted_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier'; options: { id: string; code: string; created_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier_option'; service_level_token: string; updated_at: string; }[]; shippo_carrier_account_id: string; updated_at: string; }",
    markdown:
      "## sync_options\n\n`client.core.carriers.actions.syncOptions(id: string): { id: string; account_number: string; code: string; created_at: string; deleted_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier'; options: carrier_option[]; shippo_carrier_account_id: string; updated_at: string; }`\n\n**post** `/v1/core/carriers/{id}/actions/sync-options`\n\nThis endpoint syncs carrier options from Shippo service levels. Adds new service levels and removes stale ones. Not available in sandbox mode.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; account_number: string; code: string; created_at: string; deleted_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier'; options: { id: string; code: string; created_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier_option'; service_level_token: string; updated_at: string; }[]; shippo_carrier_account_id: string; updated_at: string; }`\n  Carrier represents a shipping carrier configured for the account.\n\n  - `id: string`\n  - `account_number: string`\n  - `code: string`\n  - `created_at: string`\n  - `deleted_at: string`\n  - `is_default: boolean`\n  - `is_portal_enabled: boolean`\n  - `name: string`\n  - `object: 'carrier'`\n  - `options: { id: string; code: string; created_at: string; is_default: boolean; is_portal_enabled: boolean; name: string; object: 'carrier_option'; service_level_token: string; updated_at: string; }[]`\n  - `shippo_carrier_account_id: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst carrier = await client.core.carriers.actions.syncOptions('id');\n\nconsole.log(carrier);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.carriers.actions.syncOptions',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst carrier = await client.core.carriers.actions.syncOptions('id');\n\nconsole.log(carrier.id);",
      },
      python: {
        method: 'core.carriers.actions.sync_options',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\ncarrier = client.core.carriers.actions.sync_options(\n    "id",\n)\nprint(carrier.id)',
      },
      kotlin: {
        method: 'core().carriers().actions().syncOptions',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.carriers.Carrier\nimport com.augno.api.models.core.carriers.actions.ActionSyncOptionsParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val carrier: Carrier = client.core().carriers().actions().syncOptions("id")\n}',
      },
      go: {
        method: 'client.Core.Carriers.Actions.SyncOptions',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcarrier, err := client.Core.Carriers.Actions.SyncOptions(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", carrier.ID)\n}\n',
      },
      ruby: {
        method: 'core.carriers.actions.sync_options',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\ncarrier = augno_client.core.carriers.actions.sync_options("id")\n\nputs(carrier)',
      },
      csharp: {
        method: 'Core.Carriers.Actions.SyncOptions',
        example:
          'ActionSyncOptionsParams parameters = new() { ID = "id" };\n\nvar carrier = await client.Core.Carriers.Actions.SyncOptions(parameters);\n\nConsole.WriteLine(carrier);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/carriers/$ID/actions/sync-options \\\n    -X POST \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/core/child-accounts',
    httpMethod: 'get',
    summary: 'List Child Accounts',
    description:
      'This endpoint returns a paginated list of child accounts for the target account (parent).\nSupports cursor-based pagination and search by account name.',
    stainlessPath: '(resource) core.child_accounts > (method) list',
    qualified: 'client.core.childAccounts.list',
    response:
      "{ data: { id: string; account: light_account; created_at: string; email: string; external_number: string; object: 'child_account'; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }",
    markdown:
      "## list\n\n`client.core.childAccounts.list(): { data: child_account[]; object: 'list'; page_info: page_info; }`\n\n**get** `/v1/core/child-accounts`\n\nThis endpoint returns a paginated list of child accounts for the target account (parent).\nSupports cursor-based pagination and search by account name.\n\n### Returns\n\n- `{ data: { id: string; account: light_account; created_at: string; email: string; external_number: string; object: 'child_account'; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }`\n  A paginated list of ChildAccount resources\n\n  - `data: { id: string; account: { id: string; name: string; object: 'account'; }; created_at: string; email: string; external_number: string; object: 'child_account'; updated_at: string; }[]`\n  - `object: 'list'`\n  - `page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst childAccounts = await client.core.childAccounts.list();\n\nconsole.log(childAccounts);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.childAccounts.list',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst childAccounts = await client.core.childAccounts.list();\n\nconsole.log(childAccounts.data);",
      },
      python: {
        method: 'core.child_accounts.list',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nchild_accounts = client.core.child_accounts.list()\nprint(child_accounts.data)',
      },
      kotlin: {
        method: 'core().childAccounts().list',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.childaccounts.ChildAccountListParams\nimport com.augno.api.models.core.childaccounts.ChildAccountListResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val childAccounts: ChildAccountListResponse = client.core().childAccounts().list()\n}',
      },
      go: {
        method: 'client.Core.ChildAccounts.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tchildAccounts, err := client.Core.ChildAccounts.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", childAccounts.Data)\n}\n',
      },
      ruby: {
        method: 'core.child_accounts.list',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nchild_accounts = augno_client.core.child_accounts.list\n\nputs(child_accounts)',
      },
      csharp: {
        method: 'Core.ChildAccounts.List',
        example:
          'ChildAccountListParams parameters = new();\n\nvar childAccounts = await client.Core.ChildAccounts.List(parameters);\n\nConsole.WriteLine(childAccounts);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/child-accounts \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'remove',
    endpoint: '/v1/core/child-accounts/{child_account_id}',
    httpMethod: 'delete',
    summary: 'Remove Child Account',
    description:
      'This endpoint removes a child account from the target account (parent).\nThe operation is idempotent — removing an already-removed child returns success.',
    stainlessPath: '(resource) core.child_accounts > (method) remove',
    qualified: 'client.core.childAccounts.remove',
    params: ['child_account_id: string;'],
    response: '{  }',
    markdown:
      "## remove\n\n`client.core.childAccounts.remove(child_account_id: string): {  }`\n\n**delete** `/v1/core/child-accounts/{child_account_id}`\n\nThis endpoint removes a child account from the target account (parent).\nThe operation is idempotent — removing an already-removed child returns success.\n\n### Parameters\n\n- `child_account_id: string`\n\n### Returns\n\n- `{  }`\n\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst childAccount = await client.core.childAccounts.remove('child_account_id');\n\nconsole.log(childAccount);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.childAccounts.remove',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst childAccount = await client.core.childAccounts.remove('child_account_id');\n\nconsole.log(childAccount);",
      },
      python: {
        method: 'core.child_accounts.remove',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nchild_account = client.core.child_accounts.remove(\n    "child_account_id",\n)\nprint(child_account)',
      },
      kotlin: {
        method: 'core().childAccounts().remove',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.childaccounts.ChildAccountRemoveParams\nimport com.augno.api.models.core.childaccounts.ChildAccountRemoveResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val childAccount: ChildAccountRemoveResponse = client.core().childAccounts().remove("child_account_id")\n}',
      },
      go: {
        method: 'client.Core.ChildAccounts.Remove',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tchildAccount, err := client.Core.ChildAccounts.Remove(context.TODO(), "child_account_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", childAccount)\n}\n',
      },
      ruby: {
        method: 'core.child_accounts.remove',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nchild_account = augno_client.core.child_accounts.remove("child_account_id")\n\nputs(child_account)',
      },
      csharp: {
        method: 'Core.ChildAccounts.Remove',
        example:
          'ChildAccountRemoveParams parameters = new()\n{\n    ChildAccountID = "child_account_id"\n};\n\nvar childAccount = await client.Core.ChildAccounts.Remove(parameters);\n\nConsole.WriteLine(childAccount);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/child-accounts/$CHILD_ACCOUNT_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'add',
    endpoint: '/v1/core/child-accounts/{child_account_id}',
    httpMethod: 'put',
    summary: 'Add Child Account',
    description:
      'This endpoint adds a child account to the target account (parent).\nThe child must be an existing account relation. The operation is idempotent.',
    stainlessPath: '(resource) core.child_accounts > (method) add',
    qualified: 'client.core.childAccounts.add',
    params: ['child_account_id: string;'],
    response:
      "{ id: string; account: { id: string; name: string; object: 'account'; }; created_at: string; email: string; external_number: string; object: 'child_account'; updated_at: string; }",
    markdown:
      "## add\n\n`client.core.childAccounts.add(child_account_id: string): { id: string; account: light_account; created_at: string; email: string; external_number: string; object: 'child_account'; updated_at: string; }`\n\n**put** `/v1/core/child-accounts/{child_account_id}`\n\nThis endpoint adds a child account to the target account (parent).\nThe child must be an existing account relation. The operation is idempotent.\n\n### Parameters\n\n- `child_account_id: string`\n\n### Returns\n\n- `{ id: string; account: { id: string; name: string; object: 'account'; }; created_at: string; email: string; external_number: string; object: 'child_account'; updated_at: string; }`\n  ChildAccount represents a child customer account in a parent-child relationship.\n\n  - `id: string`\n  - `account: { id: string; name: string; object: 'account'; }`\n  - `created_at: string`\n  - `email: string`\n  - `external_number: string`\n  - `object: 'child_account'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst childAccount = await client.core.childAccounts.add('child_account_id');\n\nconsole.log(childAccount);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.childAccounts.add',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst childAccount = await client.core.childAccounts.add('child_account_id');\n\nconsole.log(childAccount.id);",
      },
      python: {
        method: 'core.child_accounts.add',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nchild_account = client.core.child_accounts.add(\n    "child_account_id",\n)\nprint(child_account.id)',
      },
      kotlin: {
        method: 'core().childAccounts().add',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.childaccounts.ChildAccount\nimport com.augno.api.models.core.childaccounts.ChildAccountAddParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val childAccount: ChildAccount = client.core().childAccounts().add("child_account_id")\n}',
      },
      go: {
        method: 'client.Core.ChildAccounts.Add',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tchildAccount, err := client.Core.ChildAccounts.Add(context.TODO(), "child_account_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", childAccount.ID)\n}\n',
      },
      ruby: {
        method: 'core.child_accounts.add',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nchild_account = augno_client.core.child_accounts.add("child_account_id")\n\nputs(child_account)',
      },
      csharp: {
        method: 'Core.ChildAccounts.Add',
        example:
          'ChildAccountAddParams parameters = new()\n{\n    ChildAccountID = "child_account_id"\n};\n\nvar childAccount = await client.Core.ChildAccounts.Add(parameters);\n\nConsole.WriteLine(childAccount);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/child-accounts/$CHILD_ACCOUNT_ID \\\n    -X PUT \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/core/integrations',
    httpMethod: 'get',
    summary: 'List Account Integrations',
    description:
      'This endpoint returns a paginated list of integrations for the target account.\nSupports cursor-based pagination and search by name.',
    stainlessPath: '(resource) core.integrations > (method) list',
    qualified: 'client.core.integrations.list',
    response:
      "{ data: { id: string; created_at: string; integration_code: 'stripe' | 'shippo'; is_active: boolean; name: string; object: 'account_integration'; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }",
    markdown:
      "## list\n\n`client.core.integrations.list(): { data: account_integration[]; object: 'list'; page_info: page_info; }`\n\n**get** `/v1/core/integrations`\n\nThis endpoint returns a paginated list of integrations for the target account.\nSupports cursor-based pagination and search by name.\n\n### Returns\n\n- `{ data: { id: string; created_at: string; integration_code: 'stripe' | 'shippo'; is_active: boolean; name: string; object: 'account_integration'; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }`\n  A paginated list of AccountIntegration resources\n\n  - `data: { id: string; created_at: string; integration_code: 'stripe' | 'shippo'; is_active: boolean; name: string; object: 'account_integration'; updated_at: string; }[]`\n  - `object: 'list'`\n  - `page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst integrations = await client.core.integrations.list();\n\nconsole.log(integrations);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.integrations.list',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst integrations = await client.core.integrations.list();\n\nconsole.log(integrations.data);",
      },
      python: {
        method: 'core.integrations.list',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nintegrations = client.core.integrations.list()\nprint(integrations.data)',
      },
      kotlin: {
        method: 'core().integrations().list',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.integrations.IntegrationListParams\nimport com.augno.api.models.core.integrations.IntegrationListResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val integrations: IntegrationListResponse = client.core().integrations().list()\n}',
      },
      go: {
        method: 'client.Core.Integrations.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tintegrations, err := client.Core.Integrations.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", integrations.Data)\n}\n',
      },
      ruby: {
        method: 'core.integrations.list',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nintegrations = augno_client.core.integrations.list\n\nputs(integrations)',
      },
      csharp: {
        method: 'Core.Integrations.List',
        example:
          'IntegrationListParams parameters = new();\n\nvar integrations = await client.Core.Integrations.List(parameters);\n\nConsole.WriteLine(integrations);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/integrations \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/core/integrations',
    httpMethod: 'post',
    summary: 'Create Account Integration',
    description:
      'This endpoint creates a new account integration or updates an existing one with the same integration code.\nCredentials are encrypted at rest and never returned in API responses.',
    stainlessPath: '(resource) core.integrations > (method) create',
    qualified: 'client.core.integrations.create',
    params: ['credentials: string;', "integration_code: 'stripe' | 'shippo';", 'name: string;'],
    response:
      "{ id: string; created_at: string; integration_code: 'stripe' | 'shippo'; is_active: boolean; name: string; object: 'account_integration'; updated_at: string; }",
    markdown:
      "## create\n\n`client.core.integrations.create(credentials: string, integration_code: 'stripe' | 'shippo', name: string): { id: string; created_at: string; integration_code: 'stripe' | 'shippo'; is_active: boolean; name: string; object: 'account_integration'; updated_at: string; }`\n\n**post** `/v1/core/integrations`\n\nThis endpoint creates a new account integration or updates an existing one with the same integration code.\nCredentials are encrypted at rest and never returned in API responses.\n\n### Parameters\n\n- `credentials: string`\n  The credentials JSON string containing provider-specific keys.\n\n- `integration_code: 'stripe' | 'shippo'`\n  The integration provider code (e.g. \"stripe\", \"shippo\").\n\n- `name: string`\n  The human-readable name for the integration.\n\n### Returns\n\n- `{ id: string; created_at: string; integration_code: 'stripe' | 'shippo'; is_active: boolean; name: string; object: 'account_integration'; updated_at: string; }`\n  AccountIntegration represents a third-party integration connected to an account.\n\n  - `id: string`\n  - `created_at: string`\n  - `integration_code: 'stripe' | 'shippo'`\n  - `is_active: boolean`\n  - `name: string`\n  - `object: 'account_integration'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst accountIntegration = await client.core.integrations.create({\n  credentials: '{\"privateKey\":\"sk_test_...\",\"publishableKey\":\"pk_test_...\",\"webhookSecret\":\"whsec_...\"}',\n  integration_code: 'stripe',\n  name: 'My Stripe Integration',\n});\n\nconsole.log(accountIntegration);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.integrations.create',
        example:
          'import AugnoClient from \'augno\';\n\nconst client = new AugnoClient({\n  apiKey: process.env[\'AUGNO_API_KEY\'], // This is the default and can be omitted\n});\n\nconst accountIntegration = await client.core.integrations.create({\n  credentials:\n    \'{"privateKey":"sk_test_...","publishableKey":"pk_test_...","webhookSecret":"whsec_..."}\',\n  integration_code: \'stripe\',\n  name: \'My Stripe Integration\',\n});\n\nconsole.log(accountIntegration.id);',
      },
      python: {
        method: 'core.integrations.create',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naccount_integration = client.core.integrations.create(\n    credentials="{\\"privateKey\\":\\"sk_test_...\\",\\"publishableKey\\":\\"pk_test_...\\",\\"webhookSecret\\":\\"whsec_...\\"}",\n    integration_code="stripe",\n    name="My Stripe Integration",\n)\nprint(account_integration.id)',
      },
      kotlin: {
        method: 'core().integrations().create',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.integrations.AccountIntegration\nimport com.augno.api.models.core.integrations.IntegrationCreateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: IntegrationCreateParams = IntegrationCreateParams.builder()\n        .credentials("{\\"privateKey\\":\\"sk_test_...\\",\\"publishableKey\\":\\"pk_test_...\\",\\"webhookSecret\\":\\"whsec_...\\"}")\n        .integrationCode(IntegrationCreateParams.IntegrationCode.STRIPE)\n        .name("My Stripe Integration")\n        .build()\n    val accountIntegration: AccountIntegration = client.core().integrations().create(params)\n}',
      },
      go: {
        method: 'client.Core.Integrations.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountIntegration, err := client.Core.Integrations.New(context.TODO(), augno.CoreIntegrationNewParams{\n\t\tCredentials:     `{"privateKey":"sk_test_...","publishableKey":"pk_test_...","webhookSecret":"whsec_..."}`,\n\t\tIntegrationCode: augno.CoreIntegrationNewParamsIntegrationCodeStripe,\n\t\tName:            "My Stripe Integration",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountIntegration.ID)\n}\n',
      },
      ruby: {
        method: 'core.integrations.create',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naccount_integration = augno_client.core.integrations.create(\n  credentials: "{\\"privateKey\\":\\"sk_test_...\\",\\"publishableKey\\":\\"pk_test_...\\",\\"webhookSecret\\":\\"whsec_...\\"}",\n  integration_code: :stripe,\n  name: "My Stripe Integration"\n)\n\nputs(account_integration)',
      },
      csharp: {
        method: 'Core.Integrations.Create',
        example:
          'IntegrationCreateParams parameters = new()\n{\n    Credentials = "{\\"privateKey\\":\\"sk_test_...\\",\\"publishableKey\\":\\"pk_test_...\\",\\"webhookSecret\\":\\"whsec_...\\"}",\n    IntegrationCode = IntegrationCode.Stripe,\n    Name = "My Stripe Integration",\n};\n\nvar accountIntegration = await client.Core.Integrations.Create(parameters);\n\nConsole.WriteLine(accountIntegration);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/integrations \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "credentials": "{\\\\"privateKey\\\\":\\\\"sk_test_...\\\\",\\\\"publishableKey\\\\":\\\\"pk_test_...\\\\",\\\\"webhookSecret\\\\":\\\\"whsec_...\\\\"}",\n          "integration_code": "stripe",\n          "name": "My Stripe Integration"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/core/integrations/{id}',
    httpMethod: 'delete',
    summary: 'Delete Account Integration',
    description: 'This endpoint deletes an account integration and returns the deleted resource.',
    stainlessPath: '(resource) core.integrations > (method) delete',
    qualified: 'client.core.integrations.delete',
    params: ['id: string;'],
    response:
      "{ id: string; created_at: string; integration_code: 'stripe' | 'shippo'; is_active: boolean; name: string; object: 'account_integration'; updated_at: string; }",
    markdown:
      "## delete\n\n`client.core.integrations.delete(id: string): { id: string; created_at: string; integration_code: 'stripe' | 'shippo'; is_active: boolean; name: string; object: 'account_integration'; updated_at: string; }`\n\n**delete** `/v1/core/integrations/{id}`\n\nThis endpoint deletes an account integration and returns the deleted resource.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; integration_code: 'stripe' | 'shippo'; is_active: boolean; name: string; object: 'account_integration'; updated_at: string; }`\n  AccountIntegration represents a third-party integration connected to an account.\n\n  - `id: string`\n  - `created_at: string`\n  - `integration_code: 'stripe' | 'shippo'`\n  - `is_active: boolean`\n  - `name: string`\n  - `object: 'account_integration'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst accountIntegration = await client.core.integrations.delete('id');\n\nconsole.log(accountIntegration);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.integrations.delete',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountIntegration = await client.core.integrations.delete('id');\n\nconsole.log(accountIntegration.id);",
      },
      python: {
        method: 'core.integrations.delete',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naccount_integration = client.core.integrations.delete(\n    "id",\n)\nprint(account_integration.id)',
      },
      kotlin: {
        method: 'core().integrations().delete',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.integrations.AccountIntegration\nimport com.augno.api.models.core.integrations.IntegrationDeleteParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val accountIntegration: AccountIntegration = client.core().integrations().delete("id")\n}',
      },
      go: {
        method: 'client.Core.Integrations.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountIntegration, err := client.Core.Integrations.Delete(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountIntegration.ID)\n}\n',
      },
      ruby: {
        method: 'core.integrations.delete',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naccount_integration = augno_client.core.integrations.delete("id")\n\nputs(account_integration)',
      },
      csharp: {
        method: 'Core.Integrations.Delete',
        example:
          'IntegrationDeleteParams parameters = new() { ID = "id" };\n\nvar accountIntegration = await client.Core.Integrations.Delete(parameters);\n\nConsole.WriteLine(accountIntegration);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/integrations/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/core/integrations/{id}',
    httpMethod: 'put',
    summary: 'Update Account Integration',
    description:
      "This endpoint updates an account integration's name and/or active status.\nOnly provided fields are updated; absent fields retain their current values.",
    stainlessPath: '(resource) core.integrations > (method) update',
    qualified: 'client.core.integrations.update',
    params: ['id: string;', 'is_active?: boolean;', 'name?: string;'],
    response:
      "{ id: string; created_at: string; integration_code: 'stripe' | 'shippo'; is_active: boolean; name: string; object: 'account_integration'; updated_at: string; }",
    markdown:
      "## update\n\n`client.core.integrations.update(id: string, is_active?: boolean, name?: string): { id: string; created_at: string; integration_code: 'stripe' | 'shippo'; is_active: boolean; name: string; object: 'account_integration'; updated_at: string; }`\n\n**put** `/v1/core/integrations/{id}`\n\nThis endpoint updates an account integration's name and/or active status.\nOnly provided fields are updated; absent fields retain their current values.\n\n### Parameters\n\n- `id: string`\n\n- `is_active?: boolean`\n  Whether this integration is currently active.\n\n- `name?: string`\n  The human-readable name for the integration.\n\n### Returns\n\n- `{ id: string; created_at: string; integration_code: 'stripe' | 'shippo'; is_active: boolean; name: string; object: 'account_integration'; updated_at: string; }`\n  AccountIntegration represents a third-party integration connected to an account.\n\n  - `id: string`\n  - `created_at: string`\n  - `integration_code: 'stripe' | 'shippo'`\n  - `is_active: boolean`\n  - `name: string`\n  - `object: 'account_integration'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst accountIntegration = await client.core.integrations.update('id');\n\nconsole.log(accountIntegration);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.integrations.update',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountIntegration = await client.core.integrations.update('id', {\n  name: 'Updated Stripe Integration',\n});\n\nconsole.log(accountIntegration.id);",
      },
      python: {
        method: 'core.integrations.update',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naccount_integration = client.core.integrations.update(\n    id="id",\n    name="Updated Stripe Integration",\n)\nprint(account_integration.id)',
      },
      kotlin: {
        method: 'core().integrations().update',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.integrations.AccountIntegration\nimport com.augno.api.models.core.integrations.IntegrationUpdateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val accountIntegration: AccountIntegration = client.core().integrations().update("id")\n}',
      },
      go: {
        method: 'client.Core.Integrations.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountIntegration, err := client.Core.Integrations.Update(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreIntegrationUpdateParams{\n\t\t\tName: augno.String("Updated Stripe Integration"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountIntegration.ID)\n}\n',
      },
      ruby: {
        method: 'core.integrations.update',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naccount_integration = augno_client.core.integrations.update("id")\n\nputs(account_integration)',
      },
      csharp: {
        method: 'Core.Integrations.Update',
        example:
          'IntegrationUpdateParams parameters = new() { ID = "id" };\n\nvar accountIntegration = await client.Core.Integrations.Update(parameters);\n\nConsole.WriteLine(accountIntegration);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/integrations/$ID \\\n    -X PUT \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'get_publishable_key',
    endpoint: '/v1/core/integrations/stripe/publishable-key',
    httpMethod: 'get',
    summary: 'Get Stripe Publishable Key',
    description:
      'This endpoint returns the Stripe publishable key for the target account.\nAvailable to both internal and customer actors with read access.',
    stainlessPath: '(resource) core.integrations.stripe > (method) get_publishable_key',
    qualified: 'client.core.integrations.stripe.getPublishableKey',
    response: '{ publishable_key: string; }',
    markdown:
      "## get_publishable_key\n\n`client.core.integrations.stripe.getPublishableKey(): { publishable_key: string; }`\n\n**get** `/v1/core/integrations/stripe/publishable-key`\n\nThis endpoint returns the Stripe publishable key for the target account.\nAvailable to both internal and customer actors with read access.\n\n### Returns\n\n- `{ publishable_key: string; }`\n  StripePublishableKey represents the Stripe publishable key for an account.\n\n  - `publishable_key: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst response = await client.core.integrations.stripe.getPublishableKey();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.integrations.stripe.getPublishableKey',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.core.integrations.stripe.getPublishableKey();\n\nconsole.log(response.publishable_key);",
      },
      python: {
        method: 'core.integrations.stripe.get_publishable_key',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.core.integrations.stripe.get_publishable_key()\nprint(response.publishable_key)',
      },
      kotlin: {
        method: 'core().integrations().stripe().getPublishableKey',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.integrations.stripe.StripeGetPublishableKeyParams\nimport com.augno.api.models.core.integrations.stripe.StripeGetPublishableKeyResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val response: StripeGetPublishableKeyResponse = client.core().integrations().stripe().getPublishableKey()\n}',
      },
      go: {
        method: 'client.Core.Integrations.Stripe.GetPublishableKey',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Core.Integrations.Stripe.GetPublishableKey(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.PublishableKey)\n}\n',
      },
      ruby: {
        method: 'core.integrations.stripe.get_publishable_key',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nresponse = augno_client.core.integrations.stripe.get_publishable_key\n\nputs(response)',
      },
      csharp: {
        method: 'Core.Integrations.Stripe.GetPublishableKey',
        example:
          'StripeGetPublishableKeyParams parameters = new();\n\nvar response = await client.Core.Integrations.Stripe.GetPublishableKey(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/integrations/stripe/publishable-key \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'get_status',
    endpoint: '/v1/core/integrations/stripe/status',
    httpMethod: 'get',
    summary: 'Get Stripe Status',
    description:
      'This endpoint returns whether the target account has a Stripe integration configured.\nAvailable to both internal and customer actors with read access.',
    stainlessPath: '(resource) core.integrations.stripe > (method) get_status',
    qualified: 'client.core.integrations.stripe.getStatus',
    response: '{ has_stripe_integration: boolean; }',
    markdown:
      "## get_status\n\n`client.core.integrations.stripe.getStatus(): { has_stripe_integration: boolean; }`\n\n**get** `/v1/core/integrations/stripe/status`\n\nThis endpoint returns whether the target account has a Stripe integration configured.\nAvailable to both internal and customer actors with read access.\n\n### Returns\n\n- `{ has_stripe_integration: boolean; }`\n  StripeStatus represents whether an account has a Stripe integration.\n\n  - `has_stripe_integration: boolean`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst response = await client.core.integrations.stripe.getStatus();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.integrations.stripe.getStatus',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.core.integrations.stripe.getStatus();\n\nconsole.log(response.has_stripe_integration);",
      },
      python: {
        method: 'core.integrations.stripe.get_status',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.core.integrations.stripe.get_status()\nprint(response.has_stripe_integration)',
      },
      kotlin: {
        method: 'core().integrations().stripe().getStatus',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.integrations.stripe.StripeGetStatusParams\nimport com.augno.api.models.core.integrations.stripe.StripeGetStatusResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val response: StripeGetStatusResponse = client.core().integrations().stripe().getStatus()\n}',
      },
      go: {
        method: 'client.Core.Integrations.Stripe.GetStatus',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Core.Integrations.Stripe.GetStatus(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.HasStripeIntegration)\n}\n',
      },
      ruby: {
        method: 'core.integrations.stripe.get_status',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nresponse = augno_client.core.integrations.stripe.get_status\n\nputs(response)',
      },
      csharp: {
        method: 'Core.Integrations.Stripe.GetStatus',
        example:
          'StripeGetStatusParams parameters = new();\n\nvar response = await client.Core.Integrations.Stripe.GetStatus(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/integrations/stripe/status \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/core/items',
    httpMethod: 'get',
    summary: 'List Items',
    description:
      'This endpoint returns a paginated list of items for the target account.\nSupports cursor-based pagination, filtering by type, category, attributes, supplier, date range, and search by SKU or description.',
    stainlessPath: '(resource) core.items > (method) list',
    qualified: 'client.core.items.list',
    params: [
      'attribute_ids?: string[];',
      'category_ids?: string[];',
      'end_date?: string;',
      "include?: 'category' | 'unit_value' | 'unit_cost' | 'burn_rate'[];",
      'is_exact_match?: boolean;',
      'only_initial_subassemblies?: boolean;',
      'start_date?: string;',
      'supplier_id?: string;',
      'types?: string[];',
    ],
    response:
      "{ data: { id: string; attributes: light_attribute[]; burn_rate: light_rate; category: light_item_category; created_at: string; description: string; is_dirty: boolean; item_type_code: string; notes: string; object: 'item'; sku: string; unit_cost: light_rate; unit_value: light_rate; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }",
    markdown:
      "## list\n\n`client.core.items.list(attribute_ids?: string[], category_ids?: string[], end_date?: string, include?: 'category' | 'unit_value' | 'unit_cost' | 'burn_rate'[], is_exact_match?: boolean, only_initial_subassemblies?: boolean, start_date?: string, supplier_id?: string, types?: string[]): { data: item[]; object: 'list'; page_info: page_info; }`\n\n**get** `/v1/core/items`\n\nThis endpoint returns a paginated list of items for the target account.\nSupports cursor-based pagination, filtering by type, category, attributes, supplier, date range, and search by SKU or description.\n\n### Parameters\n\n- `attribute_ids?: string[]`\n  Filter by attribute IDs.\n\n- `category_ids?: string[]`\n  Filter by category IDs.\n\n- `end_date?: string`\n  Filter items created on or before this date.\n\n- `include?: 'category' | 'unit_value' | 'unit_cost' | 'burn_rate'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n- `is_exact_match?: boolean`\n  When true, search query must match exactly rather than partial match.\n\n- `only_initial_subassemblies?: boolean`\n  When true, only return items that are initial subassemblies.\n\n- `start_date?: string`\n  Filter items created on or after this date.\n\n- `supplier_id?: string`\n  Filter by supplier ID.\n\n- `types?: string[]`\n  Filter by item type codes.\n\n### Returns\n\n- `{ data: { id: string; attributes: light_attribute[]; burn_rate: light_rate; category: light_item_category; created_at: string; description: string; is_dirty: boolean; item_type_code: string; notes: string; object: 'item'; sku: string; unit_cost: light_rate; unit_value: light_rate; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }`\n  A paginated list of Item resources\n\n  - `data: { id: string; attributes: { id: string; object: 'attribute'; text: string; }[]; burn_rate: { id: string; denominator_unit: light_unit; numerator_unit: light_unit; object: 'rate'; value: string; }; category: { id: string; name: string; object: 'item_category'; }; created_at: string; description: string; is_dirty: boolean; item_type_code: string; notes: string; object: 'item'; sku: string; unit_cost: { id: string; denominator_unit: light_unit; numerator_unit: light_unit; object: 'rate'; value: string; }; unit_value: { id: string; denominator_unit: light_unit; numerator_unit: light_unit; object: 'rate'; value: string; }; updated_at: string; }[]`\n  - `object: 'list'`\n  - `page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst items = await client.core.items.list();\n\nconsole.log(items);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.items.list',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst items = await client.core.items.list();\n\nconsole.log(items.data);",
      },
      python: {
        method: 'core.items.list',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nitems = client.core.items.list()\nprint(items.data)',
      },
      kotlin: {
        method: 'core().items().list',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.items.ItemListParams\nimport com.augno.api.models.core.items.ItemListResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val items: ItemListResponse = client.core().items().list()\n}',
      },
      go: {
        method: 'client.Core.Items.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\titems, err := client.Core.Items.List(context.TODO(), augno.CoreItemListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", items.Data)\n}\n',
      },
      ruby: {
        method: 'core.items.list',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nitems = augno_client.core.items.list\n\nputs(items)',
      },
      csharp: {
        method: 'Core.Items.List',
        example:
          'ItemListParams parameters = new();\n\nvar items = await client.Core.Items.List(parameters);\n\nConsole.WriteLine(items);',
      },
      http: {
        example: 'curl https://api.augno.com/v1/core/items \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/core/items/{id}',
    httpMethod: 'get',
    summary: 'Get Item',
    description: 'This endpoint returns a single item by its ID.',
    stainlessPath: '(resource) core.items > (method) retrieve',
    qualified: 'client.core.items.retrieve',
    params: ['id: string;', "include?: 'category' | 'unit_value' | 'unit_cost' | 'burn_rate'[];"],
    response:
      "{ id: string; attributes: { id: string; object: 'attribute'; text: string; }[]; burn_rate: { id: string; denominator_unit: light_unit; numerator_unit: light_unit; object: 'rate'; value: string; }; category: { id: string; name: string; object: 'item_category'; }; created_at: string; description: string; is_dirty: boolean; item_type_code: string; notes: string; object: 'item'; sku: string; unit_cost: { id: string; denominator_unit: light_unit; numerator_unit: light_unit; object: 'rate'; value: string; }; unit_value: { id: string; denominator_unit: light_unit; numerator_unit: light_unit; object: 'rate'; value: string; }; updated_at: string; }",
    markdown:
      "## retrieve\n\n`client.core.items.retrieve(id: string, include?: 'category' | 'unit_value' | 'unit_cost' | 'burn_rate'[]): { id: string; attributes: light_attribute[]; burn_rate: light_rate; category: light_item_category; created_at: string; description: string; is_dirty: boolean; item_type_code: string; notes: string; object: 'item'; sku: string; unit_cost: light_rate; unit_value: light_rate; updated_at: string; }`\n\n**get** `/v1/core/items/{id}`\n\nThis endpoint returns a single item by its ID.\n\n### Parameters\n\n- `id: string`\n\n- `include?: 'category' | 'unit_value' | 'unit_cost' | 'burn_rate'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ id: string; attributes: { id: string; object: 'attribute'; text: string; }[]; burn_rate: { id: string; denominator_unit: light_unit; numerator_unit: light_unit; object: 'rate'; value: string; }; category: { id: string; name: string; object: 'item_category'; }; created_at: string; description: string; is_dirty: boolean; item_type_code: string; notes: string; object: 'item'; sku: string; unit_cost: { id: string; denominator_unit: light_unit; numerator_unit: light_unit; object: 'rate'; value: string; }; unit_value: { id: string; denominator_unit: light_unit; numerator_unit: light_unit; object: 'rate'; value: string; }; updated_at: string; }`\n  Item represents an inventory item (product, material, or part).\n\n  - `id: string`\n  - `attributes: { id: string; object: 'attribute'; text: string; }[]`\n  - `burn_rate: { id: string; denominator_unit: { id: string; object: 'unit'; }; numerator_unit: { id: string; object: 'unit'; }; object: 'rate'; value: string; }`\n  - `category: { id: string; name: string; object: 'item_category'; }`\n  - `created_at: string`\n  - `description: string`\n  - `is_dirty: boolean`\n  - `item_type_code: string`\n  - `notes: string`\n  - `object: 'item'`\n  - `sku: string`\n  - `unit_cost: { id: string; denominator_unit: { id: string; object: 'unit'; }; numerator_unit: { id: string; object: 'unit'; }; object: 'rate'; value: string; }`\n  - `unit_value: { id: string; denominator_unit: { id: string; object: 'unit'; }; numerator_unit: { id: string; object: 'unit'; }; object: 'rate'; value: string; }`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst item = await client.core.items.retrieve('id');\n\nconsole.log(item);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.items.retrieve',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst item = await client.core.items.retrieve('id');\n\nconsole.log(item.id);",
      },
      python: {
        method: 'core.items.retrieve',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nitem = client.core.items.retrieve(\n    id="id",\n)\nprint(item.id)',
      },
      kotlin: {
        method: 'core().items().retrieve',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.items.Item\nimport com.augno.api.models.core.items.ItemRetrieveParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val item: Item = client.core().items().retrieve("id")\n}',
      },
      go: {
        method: 'client.Core.Items.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\titem, err := client.Core.Items.Get(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreItemGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", item.ID)\n}\n',
      },
      ruby: {
        method: 'core.items.retrieve',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nitem = augno_client.core.items.retrieve("id")\n\nputs(item)',
      },
      csharp: {
        method: 'Core.Items.Retrieve',
        example:
          'ItemRetrieveParams parameters = new() { ID = "id" };\n\nvar item = await client.Core.Items.Retrieve(parameters);\n\nConsole.WriteLine(item);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/items/$ID \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'get_costs',
    endpoint: '/v1/core/items/{id}/costs',
    httpMethod: 'get',
    summary: 'Get Item Costs',
    description:
      'This endpoint returns the production cost breakdown for an item, including direct material, direct labor, overhead, and total costs.',
    stainlessPath: '(resource) core.items > (method) get_costs',
    qualified: 'client.core.items.getCosts',
    params: ['id: string;'],
    response:
      "{ direct_labor_cost: string; direct_material_cost: string; object: 'item'; overhead_cost: string; total_cost: string; unit: { id: string; object: 'unit'; }; }",
    markdown:
      "## get_costs\n\n`client.core.items.getCosts(id: string): { direct_labor_cost: string; direct_material_cost: string; object: 'item'; overhead_cost: string; total_cost: string; unit: light_unit; }`\n\n**get** `/v1/core/items/{id}/costs`\n\nThis endpoint returns the production cost breakdown for an item, including direct material, direct labor, overhead, and total costs.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ direct_labor_cost: string; direct_material_cost: string; object: 'item'; overhead_cost: string; total_cost: string; unit: { id: string; object: 'unit'; }; }`\n  ItemCosts represents cost breakdown for an item.\n\n  - `direct_labor_cost: string`\n  - `direct_material_cost: string`\n  - `object: 'item'`\n  - `overhead_cost: string`\n  - `total_cost: string`\n  - `unit: { id: string; object: 'unit'; }`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst response = await client.core.items.getCosts('id');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.items.getCosts',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.core.items.getCosts('id');\n\nconsole.log(response.direct_labor_cost);",
      },
      python: {
        method: 'core.items.get_costs',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.core.items.get_costs(\n    "id",\n)\nprint(response.direct_labor_cost)',
      },
      kotlin: {
        method: 'core().items().getCosts',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.items.ItemGetCostsParams\nimport com.augno.api.models.core.items.ItemGetCostsResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val response: ItemGetCostsResponse = client.core().items().getCosts("id")\n}',
      },
      go: {
        method: 'client.Core.Items.GetCosts',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Core.Items.GetCosts(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.DirectLaborCost)\n}\n',
      },
      ruby: {
        method: 'core.items.get_costs',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nresponse = augno_client.core.items.get_costs("id")\n\nputs(response)',
      },
      csharp: {
        method: 'Core.Items.GetCosts',
        example:
          'ItemGetCostsParams parameters = new() { ID = "id" };\n\nvar response = await client.Core.Items.GetCosts(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/items/$ID/costs \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'get_inventory',
    endpoint: '/v1/core/items/{id}/inventory',
    httpMethod: 'get',
    summary: 'Get Item Inventory',
    description:
      'This endpoint returns inventory quantities for an item, including on-hand, reserved, available-to-promise, and short quantities.',
    stainlessPath: '(resource) core.items > (method) get_inventory',
    qualified: 'client.core.items.getInventory',
    params: ['id: string;'],
    response:
      "{ available_to_promise: { unit: light_unit; value: string; }; object: 'item'; on_hand: { unit: light_unit; value: string; }; reserved: { unit: light_unit; value: string; }; short: { unit: light_unit; value: string; }; }",
    markdown:
      "## get_inventory\n\n`client.core.items.getInventory(id: string): { available_to_promise: quantity_info; object: 'item'; on_hand: quantity_info; reserved: quantity_info; short: quantity_info; }`\n\n**get** `/v1/core/items/{id}/inventory`\n\nThis endpoint returns inventory quantities for an item, including on-hand, reserved, available-to-promise, and short quantities.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ available_to_promise: { unit: light_unit; value: string; }; object: 'item'; on_hand: { unit: light_unit; value: string; }; reserved: { unit: light_unit; value: string; }; short: { unit: light_unit; value: string; }; }`\n  ItemInventory represents inventory quantities for an item.\n\n  - `available_to_promise: { unit: { id: string; object: 'unit'; }; value: string; }`\n  - `object: 'item'`\n  - `on_hand: { unit: { id: string; object: 'unit'; }; value: string; }`\n  - `reserved: { unit: { id: string; object: 'unit'; }; value: string; }`\n  - `short: { unit: { id: string; object: 'unit'; }; value: string; }`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst response = await client.core.items.getInventory('id');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.items.getInventory',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.core.items.getInventory('id');\n\nconsole.log(response.available_to_promise);",
      },
      python: {
        method: 'core.items.get_inventory',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.core.items.get_inventory(\n    "id",\n)\nprint(response.available_to_promise)',
      },
      kotlin: {
        method: 'core().items().getInventory',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.items.ItemGetInventoryParams\nimport com.augno.api.models.core.items.ItemGetInventoryResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val response: ItemGetInventoryResponse = client.core().items().getInventory("id")\n}',
      },
      go: {
        method: 'client.Core.Items.GetInventory',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Core.Items.GetInventory(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.AvailableToPromise)\n}\n',
      },
      ruby: {
        method: 'core.items.get_inventory',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nresponse = augno_client.core.items.get_inventory("id")\n\nputs(response)',
      },
      csharp: {
        method: 'Core.Items.GetInventory',
        example:
          'ItemGetInventoryParams parameters = new() { ID = "id" };\n\nvar response = await client.Core.Items.GetInventory(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/items/$ID/inventory \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'get_trends',
    endpoint: '/v1/core/items/{id}/trends',
    httpMethod: 'get',
    summary: 'Get Item Trends',
    description:
      'This endpoint returns historical trend data for an item. The trend_type query parameter specifies which metric to retrieve trends for.',
    stainlessPath: '(resource) core.items > (method) get_trends',
    qualified: 'client.core.items.getTrends',
    params: ['id: string;', 'trend_type: string;'],
    response: "{ object: 'item'; points: { date: string; value: string; }[]; trend_type: string; }",
    markdown:
      "## get_trends\n\n`client.core.items.getTrends(id: string, trend_type: string): { object: 'item'; points: object[]; trend_type: string; }`\n\n**get** `/v1/core/items/{id}/trends`\n\nThis endpoint returns historical trend data for an item. The trend_type query parameter specifies which metric to retrieve trends for.\n\n### Parameters\n\n- `id: string`\n\n- `trend_type: string`\n  The type of trend to retrieve (e.g. \"on_hand\", \"cost\").\n\n### Returns\n\n- `{ object: 'item'; points: { date: string; value: string; }[]; trend_type: string; }`\n  ItemTrends represents historical trend data for an item.\n\n  - `object: 'item'`\n  - `points: { date: string; value: string; }[]`\n  - `trend_type: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst response = await client.core.items.getTrends('id', { trend_type: 'trend_type' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.items.getTrends',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.core.items.getTrends('id', { trend_type: 'trend_type' });\n\nconsole.log(response.object);",
      },
      python: {
        method: 'core.items.get_trends',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.core.items.get_trends(\n    id="id",\n    trend_type="trend_type",\n)\nprint(response.object)',
      },
      kotlin: {
        method: 'core().items().getTrends',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.items.ItemGetTrendsParams\nimport com.augno.api.models.core.items.ItemGetTrendsResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: ItemGetTrendsParams = ItemGetTrendsParams.builder()\n        .id("id")\n        .trendType("trend_type")\n        .build()\n    val response: ItemGetTrendsResponse = client.core().items().getTrends(params)\n}',
      },
      go: {
        method: 'client.Core.Items.GetTrends',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Core.Items.GetTrends(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreItemGetTrendsParams{\n\t\t\tTrendType: "trend_type",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Object)\n}\n',
      },
      ruby: {
        method: 'core.items.get_trends',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nresponse = augno_client.core.items.get_trends("id", trend_type: "trend_type")\n\nputs(response)',
      },
      csharp: {
        method: 'Core.Items.GetTrends',
        example:
          'ItemGetTrendsParams parameters = new()\n{\n    ID = "id",\n    TrendType = "trend_type",\n};\n\nvar response = await client.Core.Items.GetTrends(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/items/$ID/trends \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'export',
    endpoint: '/v1/core/items/actions/export',
    httpMethod: 'get',
    summary: 'Export Items',
    description: 'This endpoint exports all items with their on-hand inventory for the target account.',
    stainlessPath: '(resource) core.items.actions > (method) export',
    qualified: 'client.core.items.actions.export',
    response:
      "{ count: number; items: { id: string; category_name: string; created_at: string; description: string; item_type_code: string; notes: string; object: 'item'; on_hand_quantity: string; on_hand_unit: object; sku: string; updated_at: string; }[]; object: 'list'; }",
    markdown:
      "## export\n\n`client.core.items.actions.export(): { count: number; items: object[]; object: 'list'; }`\n\n**get** `/v1/core/items/actions/export`\n\nThis endpoint exports all items with their on-hand inventory for the target account.\n\n### Returns\n\n- `{ count: number; items: { id: string; category_name: string; created_at: string; description: string; item_type_code: string; notes: string; object: 'item'; on_hand_quantity: string; on_hand_unit: object; sku: string; updated_at: string; }[]; object: 'list'; }`\n  ExportItemsResponse represents the export items response.\n\n  - `count: number`\n  - `items: { id: string; category_name: string; created_at: string; description: string; item_type_code: string; notes: string; object: 'item'; on_hand_quantity: string; on_hand_unit: { id: string; object: 'unit'; }; sku: string; updated_at: string; }[]`\n  - `object: 'list'`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst response = await client.core.items.actions.export();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.items.actions.export',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.core.items.actions.export();\n\nconsole.log(response.count);",
      },
      python: {
        method: 'core.items.actions.export',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.core.items.actions.export()\nprint(response.count)',
      },
      kotlin: {
        method: 'core().items().actions().export',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.items.actions.ActionExportParams\nimport com.augno.api.models.core.items.actions.ActionExportResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val response: ActionExportResponse = client.core().items().actions().export()\n}',
      },
      go: {
        method: 'client.Core.Items.Actions.Export',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Core.Items.Actions.Export(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Count)\n}\n',
      },
      ruby: {
        method: 'core.items.actions.export',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nresponse = augno_client.core.items.actions.export\n\nputs(response)',
      },
      csharp: {
        method: 'Core.Items.Actions.Export',
        example:
          'ActionExportParams parameters = new();\n\nvar response = await client.Core.Items.Actions.Export(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/items/actions/export \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/core/payment-terms',
    httpMethod: 'get',
    summary: 'List Payment Terms',
    description:
      'This endpoint returns a paginated list of payment terms for the target account, including both account-specific and default system payment terms.\nSupports cursor-based pagination and search by name.',
    stainlessPath: '(resource) core.payment_terms > (method) list',
    qualified: 'client.core.paymentTerms.list',
    response:
      "{ data: { id: string; created_at: string; is_active: boolean; name: string; object: 'payment_term'; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }",
    markdown:
      "## list\n\n`client.core.paymentTerms.list(): { data: payment_term[]; object: 'list'; page_info: page_info; }`\n\n**get** `/v1/core/payment-terms`\n\nThis endpoint returns a paginated list of payment terms for the target account, including both account-specific and default system payment terms.\nSupports cursor-based pagination and search by name.\n\n### Returns\n\n- `{ data: { id: string; created_at: string; is_active: boolean; name: string; object: 'payment_term'; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }`\n  A paginated list of PaymentTerm resources\n\n  - `data: { id: string; created_at: string; is_active: boolean; name: string; object: 'payment_term'; updated_at: string; }[]`\n  - `object: 'list'`\n  - `page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst paymentTerms = await client.core.paymentTerms.list();\n\nconsole.log(paymentTerms);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.paymentTerms.list',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst paymentTerms = await client.core.paymentTerms.list();\n\nconsole.log(paymentTerms.data);",
      },
      python: {
        method: 'core.payment_terms.list',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\npayment_terms = client.core.payment_terms.list()\nprint(payment_terms.data)',
      },
      kotlin: {
        method: 'core().paymentTerms().list',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.paymentterms.PaymentTermListParams\nimport com.augno.api.models.core.paymentterms.PaymentTermListResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val paymentTerms: PaymentTermListResponse = client.core().paymentTerms().list()\n}',
      },
      go: {
        method: 'client.Core.PaymentTerms.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpaymentTerms, err := client.Core.PaymentTerms.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", paymentTerms.Data)\n}\n',
      },
      ruby: {
        method: 'core.payment_terms.list',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\npayment_terms = augno_client.core.payment_terms.list\n\nputs(payment_terms)',
      },
      csharp: {
        method: 'Core.PaymentTerms.List',
        example:
          'PaymentTermListParams parameters = new();\n\nvar paymentTerms = await client.Core.PaymentTerms.List(parameters);\n\nConsole.WriteLine(paymentTerms);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/payment-terms \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/core/payment-terms',
    httpMethod: 'post',
    summary: 'Create Payment Term',
    description: 'This endpoint creates a new account-owned payment term.',
    stainlessPath: '(resource) core.payment_terms > (method) create',
    qualified: 'client.core.paymentTerms.create',
    params: ['name: string;'],
    response:
      "{ id: string; created_at: string; is_active: boolean; name: string; object: 'payment_term'; updated_at: string; }",
    markdown:
      "## create\n\n`client.core.paymentTerms.create(name: string): { id: string; created_at: string; is_active: boolean; name: string; object: 'payment_term'; updated_at: string; }`\n\n**post** `/v1/core/payment-terms`\n\nThis endpoint creates a new account-owned payment term.\n\n### Parameters\n\n- `name: string`\n  The display name of the payment term (e.g. \"Net 30\").\n\n### Returns\n\n- `{ id: string; created_at: string; is_active: boolean; name: string; object: 'payment_term'; updated_at: string; }`\n  PaymentTerm represents an account-owned or default payment term.\n\n  - `id: string`\n  - `created_at: string`\n  - `is_active: boolean`\n  - `name: string`\n  - `object: 'payment_term'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst paymentTerm = await client.core.paymentTerms.create({ name: 'Net 30' });\n\nconsole.log(paymentTerm);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.paymentTerms.create',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst paymentTerm = await client.core.paymentTerms.create({ name: 'Net 30' });\n\nconsole.log(paymentTerm.id);",
      },
      python: {
        method: 'core.payment_terms.create',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\npayment_term = client.core.payment_terms.create(\n    name="Net 30",\n)\nprint(payment_term.id)',
      },
      kotlin: {
        method: 'core().paymentTerms().create',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.paymentterms.PaymentTerm\nimport com.augno.api.models.core.paymentterms.PaymentTermCreateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: PaymentTermCreateParams = PaymentTermCreateParams.builder()\n        .name("Net 30")\n        .build()\n    val paymentTerm: PaymentTerm = client.core().paymentTerms().create(params)\n}',
      },
      go: {
        method: 'client.Core.PaymentTerms.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpaymentTerm, err := client.Core.PaymentTerms.New(context.TODO(), augno.CorePaymentTermNewParams{\n\t\tName: "Net 30",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", paymentTerm.ID)\n}\n',
      },
      ruby: {
        method: 'core.payment_terms.create',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\npayment_term = augno_client.core.payment_terms.create(name: "Net 30")\n\nputs(payment_term)',
      },
      csharp: {
        method: 'Core.PaymentTerms.Create',
        example:
          'PaymentTermCreateParams parameters = new() { Name = "Net 30" };\n\nvar paymentTerm = await client.Core.PaymentTerms.Create(parameters);\n\nConsole.WriteLine(paymentTerm);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/payment-terms \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "name": "Net 30"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/core/payment-terms/{id}',
    httpMethod: 'delete',
    summary: 'Delete Payment Term',
    description:
      'This endpoint deletes an account-owned payment term.\nDefault payment terms cannot be deleted.',
    stainlessPath: '(resource) core.payment_terms > (method) delete',
    qualified: 'client.core.paymentTerms.delete',
    params: ['id: string;'],
    response: '{  }',
    markdown:
      "## delete\n\n`client.core.paymentTerms.delete(id: string): {  }`\n\n**delete** `/v1/core/payment-terms/{id}`\n\nThis endpoint deletes an account-owned payment term.\nDefault payment terms cannot be deleted.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{  }`\n\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst paymentTerm = await client.core.paymentTerms.delete('id');\n\nconsole.log(paymentTerm);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.paymentTerms.delete',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst paymentTerm = await client.core.paymentTerms.delete('id');\n\nconsole.log(paymentTerm);",
      },
      python: {
        method: 'core.payment_terms.delete',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\npayment_term = client.core.payment_terms.delete(\n    "id",\n)\nprint(payment_term)',
      },
      kotlin: {
        method: 'core().paymentTerms().delete',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.paymentterms.PaymentTermDeleteParams\nimport com.augno.api.models.core.paymentterms.PaymentTermDeleteResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val paymentTerm: PaymentTermDeleteResponse = client.core().paymentTerms().delete("id")\n}',
      },
      go: {
        method: 'client.Core.PaymentTerms.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpaymentTerm, err := client.Core.PaymentTerms.Delete(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", paymentTerm)\n}\n',
      },
      ruby: {
        method: 'core.payment_terms.delete',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\npayment_term = augno_client.core.payment_terms.delete("id")\n\nputs(payment_term)',
      },
      csharp: {
        method: 'Core.PaymentTerms.Delete',
        example:
          'PaymentTermDeleteParams parameters = new() { ID = "id" };\n\nvar paymentTerm = await client.Core.PaymentTerms.Delete(parameters);\n\nConsole.WriteLine(paymentTerm);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/payment-terms/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/core/payment-terms/{id}',
    httpMethod: 'get',
    summary: 'Get Payment Term',
    description:
      'This endpoint returns a single payment term by its ID.\nThe payment term must belong to the requesting account or be a default (global) payment term.',
    stainlessPath: '(resource) core.payment_terms > (method) retrieve',
    qualified: 'client.core.paymentTerms.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; created_at: string; is_active: boolean; name: string; object: 'payment_term'; updated_at: string; }",
    markdown:
      "## retrieve\n\n`client.core.paymentTerms.retrieve(id: string): { id: string; created_at: string; is_active: boolean; name: string; object: 'payment_term'; updated_at: string; }`\n\n**get** `/v1/core/payment-terms/{id}`\n\nThis endpoint returns a single payment term by its ID.\nThe payment term must belong to the requesting account or be a default (global) payment term.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; is_active: boolean; name: string; object: 'payment_term'; updated_at: string; }`\n  PaymentTerm represents an account-owned or default payment term.\n\n  - `id: string`\n  - `created_at: string`\n  - `is_active: boolean`\n  - `name: string`\n  - `object: 'payment_term'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst paymentTerm = await client.core.paymentTerms.retrieve('id');\n\nconsole.log(paymentTerm);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.paymentTerms.retrieve',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst paymentTerm = await client.core.paymentTerms.retrieve('id');\n\nconsole.log(paymentTerm.id);",
      },
      python: {
        method: 'core.payment_terms.retrieve',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\npayment_term = client.core.payment_terms.retrieve(\n    "id",\n)\nprint(payment_term.id)',
      },
      kotlin: {
        method: 'core().paymentTerms().retrieve',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.paymentterms.PaymentTerm\nimport com.augno.api.models.core.paymentterms.PaymentTermRetrieveParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val paymentTerm: PaymentTerm = client.core().paymentTerms().retrieve("id")\n}',
      },
      go: {
        method: 'client.Core.PaymentTerms.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpaymentTerm, err := client.Core.PaymentTerms.Get(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", paymentTerm.ID)\n}\n',
      },
      ruby: {
        method: 'core.payment_terms.retrieve',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\npayment_term = augno_client.core.payment_terms.retrieve("id")\n\nputs(payment_term)',
      },
      csharp: {
        method: 'Core.PaymentTerms.Retrieve',
        example:
          'PaymentTermRetrieveParams parameters = new() { ID = "id" };\n\nvar paymentTerm = await client.Core.PaymentTerms.Retrieve(parameters);\n\nConsole.WriteLine(paymentTerm);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/payment-terms/$ID \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/core/payment-terms/{id}',
    httpMethod: 'patch',
    summary: 'Update Payment Term',
    description:
      'This endpoint partially updates an account-owned payment term.\nOnly provided fields are updated; absent fields retain their current values.\nDefault payment terms cannot be updated.',
    stainlessPath: '(resource) core.payment_terms > (method) update',
    qualified: 'client.core.paymentTerms.update',
    params: ['id: string;', 'name?: string;'],
    response:
      "{ id: string; created_at: string; is_active: boolean; name: string; object: 'payment_term'; updated_at: string; }",
    markdown:
      "## update\n\n`client.core.paymentTerms.update(id: string, name?: string): { id: string; created_at: string; is_active: boolean; name: string; object: 'payment_term'; updated_at: string; }`\n\n**patch** `/v1/core/payment-terms/{id}`\n\nThis endpoint partially updates an account-owned payment term.\nOnly provided fields are updated; absent fields retain their current values.\nDefault payment terms cannot be updated.\n\n### Parameters\n\n- `id: string`\n\n- `name?: string`\n  The display name of the payment term.\n\n### Returns\n\n- `{ id: string; created_at: string; is_active: boolean; name: string; object: 'payment_term'; updated_at: string; }`\n  PaymentTerm represents an account-owned or default payment term.\n\n  - `id: string`\n  - `created_at: string`\n  - `is_active: boolean`\n  - `name: string`\n  - `object: 'payment_term'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst paymentTerm = await client.core.paymentTerms.update('id');\n\nconsole.log(paymentTerm);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.paymentTerms.update',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst paymentTerm = await client.core.paymentTerms.update('id', { name: 'Net 60' });\n\nconsole.log(paymentTerm.id);",
      },
      python: {
        method: 'core.payment_terms.update',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\npayment_term = client.core.payment_terms.update(\n    id="id",\n    name="Net 60",\n)\nprint(payment_term.id)',
      },
      kotlin: {
        method: 'core().paymentTerms().update',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.paymentterms.PaymentTerm\nimport com.augno.api.models.core.paymentterms.PaymentTermUpdateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val paymentTerm: PaymentTerm = client.core().paymentTerms().update("id")\n}',
      },
      go: {
        method: 'client.Core.PaymentTerms.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpaymentTerm, err := client.Core.PaymentTerms.Update(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CorePaymentTermUpdateParams{\n\t\t\tName: augno.String("Net 60"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", paymentTerm.ID)\n}\n',
      },
      ruby: {
        method: 'core.payment_terms.update',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\npayment_term = augno_client.core.payment_terms.update("id")\n\nputs(payment_term)',
      },
      csharp: {
        method: 'Core.PaymentTerms.Update',
        example:
          'PaymentTermUpdateParams parameters = new() { ID = "id" };\n\nvar paymentTerm = await client.Core.PaymentTerms.Update(parameters);\n\nConsole.WriteLine(paymentTerm);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/payment-terms/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/core/product-line-access/account-groups',
    httpMethod: 'get',
    summary: 'List Account Group Product Line Access',
    description:
      'This endpoint returns a paginated list of product line access records grouped by account group.\nSupports cursor-based pagination and search.',
    stainlessPath: '(resource) core.product_line_access.account_groups > (method) list',
    qualified: 'client.core.productLineAccess.accountGroups.list',
    response:
      "{ data: { account_group: object; created_at: string; object: 'account_group_product_line_access'; product_lines: light_product_line[]; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }",
    markdown:
      "## list\n\n`client.core.productLineAccess.accountGroups.list(): { data: product_line_access[]; object: 'list'; page_info: page_info; }`\n\n**get** `/v1/core/product-line-access/account-groups`\n\nThis endpoint returns a paginated list of product line access records grouped by account group.\nSupports cursor-based pagination and search.\n\n### Returns\n\n- `{ data: { account_group: object; created_at: string; object: 'account_group_product_line_access'; product_lines: light_product_line[]; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }`\n  A paginated list of AccountGroupProductLineAccess resources\n\n  - `data: { account_group: { id: string; name: string; object: 'account_group'; }; created_at: string; object: 'account_group_product_line_access'; product_lines: { id: string; name: string; object: 'product_line'; }[]; updated_at: string; }[]`\n  - `object: 'list'`\n  - `page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst accountGroups = await client.core.productLineAccess.accountGroups.list();\n\nconsole.log(accountGroups);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.productLineAccess.accountGroups.list',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountGroups = await client.core.productLineAccess.accountGroups.list();\n\nconsole.log(accountGroups.data);",
      },
      python: {
        method: 'core.product_line_access.account_groups.list',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naccount_groups = client.core.product_line_access.account_groups.list()\nprint(account_groups.data)',
      },
      kotlin: {
        method: 'core().productLineAccess().accountGroups().list',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.productlineaccess.accountgroups.AccountGroupListParams\nimport com.augno.api.models.core.productlineaccess.accountgroups.AccountGroupListResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val accountGroups: AccountGroupListResponse = client.core().productLineAccess().accountGroups().list()\n}',
      },
      go: {
        method: 'client.Core.ProductLineAccess.AccountGroups.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountGroups, err := client.Core.ProductLineAccess.AccountGroups.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountGroups.Data)\n}\n',
      },
      ruby: {
        method: 'core.product_line_access.account_groups.list',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naccount_groups = augno_client.core.product_line_access.account_groups.list\n\nputs(account_groups)',
      },
      csharp: {
        method: 'Core.ProductLineAccess.AccountGroups.List',
        example:
          'AccountGroupListParams parameters = new();\n\nvar accountGroups = await client.Core.ProductLineAccess.AccountGroups.List(parameters);\n\nConsole.WriteLine(accountGroups);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/product-line-access/account-groups \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/core/product-line-access/account-groups',
    httpMethod: 'post',
    summary: 'Create Account Group Product Line Access',
    description: 'This endpoint creates product line access for an account group.',
    stainlessPath: '(resource) core.product_line_access.account_groups > (method) create',
    qualified: 'client.core.productLineAccess.accountGroups.create',
    params: ['account_group_id: string;', 'product_line_ids: string[];'],
    response:
      "{ account_group: { id: string; name: string; object: 'account_group'; }; created_at: string; object: 'account_group_product_line_access'; product_lines: { id: string; name: string; object: 'product_line'; }[]; updated_at: string; }",
    markdown:
      "## create\n\n`client.core.productLineAccess.accountGroups.create(account_group_id: string, product_line_ids: string[]): { account_group: object; created_at: string; object: 'account_group_product_line_access'; product_lines: light_product_line[]; updated_at: string; }`\n\n**post** `/v1/core/product-line-access/account-groups`\n\nThis endpoint creates product line access for an account group.\n\n### Parameters\n\n- `account_group_id: string`\n  The ID of the account group.\n\n- `product_line_ids: string[]`\n  The IDs of the product lines to grant access to.\n\n### Returns\n\n- `{ account_group: { id: string; name: string; object: 'account_group'; }; created_at: string; object: 'account_group_product_line_access'; product_lines: { id: string; name: string; object: 'product_line'; }[]; updated_at: string; }`\n  AccountGroupProductLineAccess represents the product lines accessible to an account group.\n\n  - `account_group: { id: string; name: string; object: 'account_group'; }`\n  - `created_at: string`\n  - `object: 'account_group_product_line_access'`\n  - `product_lines: { id: string; name: string; object: 'product_line'; }[]`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst productLineAccess = await client.core.productLineAccess.accountGroups.create({ account_group_id: 'acgp_01jm4r6700f8nwq3v5hx2d9ktp', product_line_ids: ['pl_01jm4r6700f8nwq3v5hx2d9ktp'] });\n\nconsole.log(productLineAccess);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.productLineAccess.accountGroups.create',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst productLineAccess = await client.core.productLineAccess.accountGroups.create({\n  account_group_id: 'acgp_01jm4r6700f8nwq3v5hx2d9ktp',\n  product_line_ids: ['pl_01jm4r6700f8nwq3v5hx2d9ktp'],\n});\n\nconsole.log(productLineAccess.account_group);",
      },
      python: {
        method: 'core.product_line_access.account_groups.create',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nproduct_line_access = client.core.product_line_access.account_groups.create(\n    account_group_id="acgp_01jm4r6700f8nwq3v5hx2d9ktp",\n    product_line_ids=["pl_01jm4r6700f8nwq3v5hx2d9ktp"],\n)\nprint(product_line_access.account_group)',
      },
      kotlin: {
        method: 'core().productLineAccess().accountGroups().create',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.productlineaccess.accountgroups.AccountGroupCreateParams\nimport com.augno.api.models.core.productlineaccess.accountgroups.ProductLineAccess\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: AccountGroupCreateParams = AccountGroupCreateParams.builder()\n        .accountGroupId("acgp_01jm4r6700f8nwq3v5hx2d9ktp")\n        .addProductLineId("pl_01jm4r6700f8nwq3v5hx2d9ktp")\n        .build()\n    val productLineAccess: ProductLineAccess = client.core().productLineAccess().accountGroups().create(params)\n}',
      },
      go: {
        method: 'client.Core.ProductLineAccess.AccountGroups.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tproductLineAccess, err := client.Core.ProductLineAccess.AccountGroups.New(context.TODO(), augno.CoreProductLineAccessAccountGroupNewParams{\n\t\tAccountGroupID: "acgp_01jm4r6700f8nwq3v5hx2d9ktp",\n\t\tProductLineIDs: []string{"pl_01jm4r6700f8nwq3v5hx2d9ktp"},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", productLineAccess.AccountGroup)\n}\n',
      },
      ruby: {
        method: 'core.product_line_access.account_groups.create',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nproduct_line_access = augno_client.core.product_line_access.account_groups.create(\n  account_group_id: "acgp_01jm4r6700f8nwq3v5hx2d9ktp",\n  product_line_ids: ["pl_01jm4r6700f8nwq3v5hx2d9ktp"]\n)\n\nputs(product_line_access)',
      },
      csharp: {
        method: 'Core.ProductLineAccess.AccountGroups.Create',
        example:
          'AccountGroupCreateParams parameters = new()\n{\n    AccountGroupID = "acgp_01jm4r6700f8nwq3v5hx2d9ktp",\n    ProductLineIds =\n    [\n        "pl_01jm4r6700f8nwq3v5hx2d9ktp"\n    ],\n};\n\nvar productLineAccess = await client.Core.ProductLineAccess.AccountGroups.Create(parameters);\n\nConsole.WriteLine(productLineAccess);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/product-line-access/account-groups \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "account_group_id": "acgp_01jm4r6700f8nwq3v5hx2d9ktp",\n          "product_line_ids": [\n            "pl_01jm4r6700f8nwq3v5hx2d9ktp"\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/core/product-line-access/account-groups/{account_group_id}',
    httpMethod: 'delete',
    summary: 'Delete Account Group Product Line Access',
    description: 'This endpoint removes all product line access for an account group.',
    stainlessPath: '(resource) core.product_line_access.account_groups > (method) delete',
    qualified: 'client.core.productLineAccess.accountGroups.delete',
    params: ['account_group_id: string;'],
    response: '{  }',
    markdown:
      "## delete\n\n`client.core.productLineAccess.accountGroups.delete(account_group_id: string): {  }`\n\n**delete** `/v1/core/product-line-access/account-groups/{account_group_id}`\n\nThis endpoint removes all product line access for an account group.\n\n### Parameters\n\n- `account_group_id: string`\n\n### Returns\n\n- `{  }`\n\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst accountGroup = await client.core.productLineAccess.accountGroups.delete('account_group_id');\n\nconsole.log(accountGroup);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.productLineAccess.accountGroups.delete',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountGroup = await client.core.productLineAccess.accountGroups.delete('account_group_id');\n\nconsole.log(accountGroup);",
      },
      python: {
        method: 'core.product_line_access.account_groups.delete',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\naccount_group = client.core.product_line_access.account_groups.delete(\n    "account_group_id",\n)\nprint(account_group)',
      },
      kotlin: {
        method: 'core().productLineAccess().accountGroups().delete',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.productlineaccess.accountgroups.AccountGroupDeleteParams\nimport com.augno.api.models.core.productlineaccess.accountgroups.AccountGroupDeleteResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val accountGroup: AccountGroupDeleteResponse = client.core().productLineAccess().accountGroups().delete("account_group_id")\n}',
      },
      go: {
        method: 'client.Core.ProductLineAccess.AccountGroups.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountGroup, err := client.Core.ProductLineAccess.AccountGroups.Delete(context.TODO(), "account_group_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountGroup)\n}\n',
      },
      ruby: {
        method: 'core.product_line_access.account_groups.delete',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\naccount_group = augno_client.core.product_line_access.account_groups.delete("account_group_id")\n\nputs(account_group)',
      },
      csharp: {
        method: 'Core.ProductLineAccess.AccountGroups.Delete',
        example:
          'AccountGroupDeleteParams parameters = new()\n{\n    AccountGroupID = "account_group_id"\n};\n\nvar accountGroup = await client.Core.ProductLineAccess.AccountGroups.Delete(parameters);\n\nConsole.WriteLine(accountGroup);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/product-line-access/account-groups/$ACCOUNT_GROUP_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/core/product-line-access/account-groups/{account_group_id}',
    httpMethod: 'get',
    summary: 'Get Account Group Product Line Access',
    description: 'This endpoint returns the product line access for a single account group by its ID.',
    stainlessPath: '(resource) core.product_line_access.account_groups > (method) retrieve',
    qualified: 'client.core.productLineAccess.accountGroups.retrieve',
    params: ['account_group_id: string;'],
    response:
      "{ account_group: { id: string; name: string; object: 'account_group'; }; created_at: string; object: 'account_group_product_line_access'; product_lines: { id: string; name: string; object: 'product_line'; }[]; updated_at: string; }",
    markdown:
      "## retrieve\n\n`client.core.productLineAccess.accountGroups.retrieve(account_group_id: string): { account_group: object; created_at: string; object: 'account_group_product_line_access'; product_lines: light_product_line[]; updated_at: string; }`\n\n**get** `/v1/core/product-line-access/account-groups/{account_group_id}`\n\nThis endpoint returns the product line access for a single account group by its ID.\n\n### Parameters\n\n- `account_group_id: string`\n\n### Returns\n\n- `{ account_group: { id: string; name: string; object: 'account_group'; }; created_at: string; object: 'account_group_product_line_access'; product_lines: { id: string; name: string; object: 'product_line'; }[]; updated_at: string; }`\n  AccountGroupProductLineAccess represents the product lines accessible to an account group.\n\n  - `account_group: { id: string; name: string; object: 'account_group'; }`\n  - `created_at: string`\n  - `object: 'account_group_product_line_access'`\n  - `product_lines: { id: string; name: string; object: 'product_line'; }[]`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst productLineAccess = await client.core.productLineAccess.accountGroups.retrieve('account_group_id');\n\nconsole.log(productLineAccess);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.productLineAccess.accountGroups.retrieve',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst productLineAccess = await client.core.productLineAccess.accountGroups.retrieve(\n  'account_group_id',\n);\n\nconsole.log(productLineAccess.account_group);",
      },
      python: {
        method: 'core.product_line_access.account_groups.retrieve',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nproduct_line_access = client.core.product_line_access.account_groups.retrieve(\n    "account_group_id",\n)\nprint(product_line_access.account_group)',
      },
      kotlin: {
        method: 'core().productLineAccess().accountGroups().retrieve',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.productlineaccess.accountgroups.AccountGroupRetrieveParams\nimport com.augno.api.models.core.productlineaccess.accountgroups.ProductLineAccess\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val productLineAccess: ProductLineAccess = client.core().productLineAccess().accountGroups().retrieve("account_group_id")\n}',
      },
      go: {
        method: 'client.Core.ProductLineAccess.AccountGroups.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tproductLineAccess, err := client.Core.ProductLineAccess.AccountGroups.Get(context.TODO(), "account_group_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", productLineAccess.AccountGroup)\n}\n',
      },
      ruby: {
        method: 'core.product_line_access.account_groups.retrieve',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nproduct_line_access = augno_client.core.product_line_access.account_groups.retrieve("account_group_id")\n\nputs(product_line_access)',
      },
      csharp: {
        method: 'Core.ProductLineAccess.AccountGroups.Retrieve',
        example:
          'AccountGroupRetrieveParams parameters = new()\n{\n    AccountGroupID = "account_group_id"\n};\n\nvar productLineAccess = await client.Core.ProductLineAccess.AccountGroups.Retrieve(parameters);\n\nConsole.WriteLine(productLineAccess);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/product-line-access/account-groups/$ACCOUNT_GROUP_ID \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/core/product-line-access/account-groups/{account_group_id}',
    httpMethod: 'patch',
    summary: 'Update Account Group Product Line Access',
    description: 'This endpoint replaces all product line access for an account group.',
    stainlessPath: '(resource) core.product_line_access.account_groups > (method) update',
    qualified: 'client.core.productLineAccess.accountGroups.update',
    params: ['account_group_id: string;', 'product_line_ids: string[];'],
    response:
      "{ account_group: { id: string; name: string; object: 'account_group'; }; created_at: string; object: 'account_group_product_line_access'; product_lines: { id: string; name: string; object: 'product_line'; }[]; updated_at: string; }",
    markdown:
      "## update\n\n`client.core.productLineAccess.accountGroups.update(account_group_id: string, product_line_ids: string[]): { account_group: object; created_at: string; object: 'account_group_product_line_access'; product_lines: light_product_line[]; updated_at: string; }`\n\n**patch** `/v1/core/product-line-access/account-groups/{account_group_id}`\n\nThis endpoint replaces all product line access for an account group.\n\n### Parameters\n\n- `account_group_id: string`\n\n- `product_line_ids: string[]`\n  The IDs of the product lines to grant access to.\n\n### Returns\n\n- `{ account_group: { id: string; name: string; object: 'account_group'; }; created_at: string; object: 'account_group_product_line_access'; product_lines: { id: string; name: string; object: 'product_line'; }[]; updated_at: string; }`\n  AccountGroupProductLineAccess represents the product lines accessible to an account group.\n\n  - `account_group: { id: string; name: string; object: 'account_group'; }`\n  - `created_at: string`\n  - `object: 'account_group_product_line_access'`\n  - `product_lines: { id: string; name: string; object: 'product_line'; }[]`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst productLineAccess = await client.core.productLineAccess.accountGroups.update('account_group_id', { product_line_ids: ['pl_01jm4r6700f8nwq3v5hx2d9ktp'] });\n\nconsole.log(productLineAccess);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.productLineAccess.accountGroups.update',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst productLineAccess = await client.core.productLineAccess.accountGroups.update(\n  'account_group_id',\n  { product_line_ids: ['pl_01jm4r6700f8nwq3v5hx2d9ktp'] },\n);\n\nconsole.log(productLineAccess.account_group);",
      },
      python: {
        method: 'core.product_line_access.account_groups.update',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nproduct_line_access = client.core.product_line_access.account_groups.update(\n    account_group_id="account_group_id",\n    product_line_ids=["pl_01jm4r6700f8nwq3v5hx2d9ktp"],\n)\nprint(product_line_access.account_group)',
      },
      kotlin: {
        method: 'core().productLineAccess().accountGroups().update',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.productlineaccess.accountgroups.AccountGroupUpdateParams\nimport com.augno.api.models.core.productlineaccess.accountgroups.ProductLineAccess\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: AccountGroupUpdateParams = AccountGroupUpdateParams.builder()\n        .accountGroupId("account_group_id")\n        .addProductLineId("pl_01jm4r6700f8nwq3v5hx2d9ktp")\n        .build()\n    val productLineAccess: ProductLineAccess = client.core().productLineAccess().accountGroups().update(params)\n}',
      },
      go: {
        method: 'client.Core.ProductLineAccess.AccountGroups.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tproductLineAccess, err := client.Core.ProductLineAccess.AccountGroups.Update(\n\t\tcontext.TODO(),\n\t\t"account_group_id",\n\t\taugno.CoreProductLineAccessAccountGroupUpdateParams{\n\t\t\tProductLineIDs: []string{"pl_01jm4r6700f8nwq3v5hx2d9ktp"},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", productLineAccess.AccountGroup)\n}\n',
      },
      ruby: {
        method: 'core.product_line_access.account_groups.update',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nproduct_line_access = augno_client.core.product_line_access.account_groups.update(\n  "account_group_id",\n  product_line_ids: ["pl_01jm4r6700f8nwq3v5hx2d9ktp"]\n)\n\nputs(product_line_access)',
      },
      csharp: {
        method: 'Core.ProductLineAccess.AccountGroups.Update',
        example:
          'AccountGroupUpdateParams parameters = new()\n{\n    AccountGroupID = "account_group_id",\n    ProductLineIds =\n    [\n        "pl_01jm4r6700f8nwq3v5hx2d9ktp"\n    ],\n};\n\nvar productLineAccess = await client.Core.ProductLineAccess.AccountGroups.Update(parameters);\n\nConsole.WriteLine(productLineAccess);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/product-line-access/account-groups/$ACCOUNT_GROUP_ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "product_line_ids": [\n            "pl_01jm4r6700f8nwq3v5hx2d9ktp"\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/core/properties',
    httpMethod: 'get',
    summary: 'List Properties',
    description:
      'This endpoint returns a paginated list of properties for the target account.\nSupports cursor-based pagination and search by name.',
    stainlessPath: '(resource) core.properties > (method) list',
    qualified: 'client.core.properties.list',
    response:
      "{ data: { id: string; created_at: string; name: string; object: 'property'; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }",
    markdown:
      "## list\n\n`client.core.properties.list(): { data: property[]; object: 'list'; page_info: page_info; }`\n\n**get** `/v1/core/properties`\n\nThis endpoint returns a paginated list of properties for the target account.\nSupports cursor-based pagination and search by name.\n\n### Returns\n\n- `{ data: { id: string; created_at: string; name: string; object: 'property'; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }`\n  A paginated list of Property resources\n\n  - `data: { id: string; created_at: string; name: string; object: 'property'; updated_at: string; }[]`\n  - `object: 'list'`\n  - `page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst properties = await client.core.properties.list();\n\nconsole.log(properties);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.properties.list',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst properties = await client.core.properties.list();\n\nconsole.log(properties.data);",
      },
      python: {
        method: 'core.properties.list',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nproperties = client.core.properties.list()\nprint(properties.data)',
      },
      kotlin: {
        method: 'core().properties().list',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.properties.PropertyListParams\nimport com.augno.api.models.core.properties.PropertyListResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val properties: PropertyListResponse = client.core().properties().list()\n}',
      },
      go: {
        method: 'client.Core.Properties.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tproperties, err := client.Core.Properties.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", properties.Data)\n}\n',
      },
      ruby: {
        method: 'core.properties.list',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nproperties = augno_client.core.properties.list\n\nputs(properties)',
      },
      csharp: {
        method: 'Core.Properties.List',
        example:
          'PropertyListParams parameters = new();\n\nvar properties = await client.Core.Properties.List(parameters);\n\nConsole.WriteLine(properties);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/properties \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/core/properties',
    httpMethod: 'post',
    summary: 'Create Property',
    description: 'This endpoint creates a new property.',
    stainlessPath: '(resource) core.properties > (method) create',
    qualified: 'client.core.properties.create',
    params: ['name: string;'],
    response: "{ id: string; created_at: string; name: string; object: 'property'; updated_at: string; }",
    markdown:
      "## create\n\n`client.core.properties.create(name: string): { id: string; created_at: string; name: string; object: 'property'; updated_at: string; }`\n\n**post** `/v1/core/properties`\n\nThis endpoint creates a new property.\n\n### Parameters\n\n- `name: string`\n  The name of the property.\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; object: 'property'; updated_at: string; }`\n  Property represents a property that groups attributes.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `object: 'property'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst property = await client.core.properties.create({ name: 'Color' });\n\nconsole.log(property);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.properties.create',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst property = await client.core.properties.create({ name: 'Color' });\n\nconsole.log(property.id);",
      },
      python: {
        method: 'core.properties.create',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nproperty = client.core.properties.create(\n    name="Color",\n)\nprint(property.id)',
      },
      kotlin: {
        method: 'core().properties().create',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.properties.Property\nimport com.augno.api.models.core.properties.PropertyCreateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: PropertyCreateParams = PropertyCreateParams.builder()\n        .name("Color")\n        .build()\n    val property: Property = client.core().properties().create(params)\n}',
      },
      go: {
        method: 'client.Core.Properties.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tproperty, err := client.Core.Properties.New(context.TODO(), augno.CorePropertyNewParams{\n\t\tName: "Color",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", property.ID)\n}\n',
      },
      ruby: {
        method: 'core.properties.create',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nproperty = augno_client.core.properties.create(name: "Color")\n\nputs(property)',
      },
      csharp: {
        method: 'Core.Properties.Create',
        example:
          'PropertyCreateParams parameters = new() { Name = "Color" };\n\nvar property = await client.Core.Properties.Create(parameters);\n\nConsole.WriteLine(property);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/properties \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "name": "Color"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/core/properties/{id}',
    httpMethod: 'delete',
    summary: 'Delete Property',
    description: 'This endpoint deletes a property and all its associated attributes.',
    stainlessPath: '(resource) core.properties > (method) delete',
    qualified: 'client.core.properties.delete',
    params: ['id: string;'],
    response: '{  }',
    markdown:
      "## delete\n\n`client.core.properties.delete(id: string): {  }`\n\n**delete** `/v1/core/properties/{id}`\n\nThis endpoint deletes a property and all its associated attributes.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{  }`\n\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst property = await client.core.properties.delete('id');\n\nconsole.log(property);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.properties.delete',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst property = await client.core.properties.delete('id');\n\nconsole.log(property);",
      },
      python: {
        method: 'core.properties.delete',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nproperty = client.core.properties.delete(\n    "id",\n)\nprint(property)',
      },
      kotlin: {
        method: 'core().properties().delete',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.properties.PropertyDeleteParams\nimport com.augno.api.models.core.properties.PropertyDeleteResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val property: PropertyDeleteResponse = client.core().properties().delete("id")\n}',
      },
      go: {
        method: 'client.Core.Properties.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tproperty, err := client.Core.Properties.Delete(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", property)\n}\n',
      },
      ruby: {
        method: 'core.properties.delete',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nproperty = augno_client.core.properties.delete("id")\n\nputs(property)',
      },
      csharp: {
        method: 'Core.Properties.Delete',
        example:
          'PropertyDeleteParams parameters = new() { ID = "id" };\n\nvar property = await client.Core.Properties.Delete(parameters);\n\nConsole.WriteLine(property);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/properties/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/core/properties/{id}',
    httpMethod: 'get',
    summary: 'Get Property',
    description: 'This endpoint returns a single property by its ID.',
    stainlessPath: '(resource) core.properties > (method) retrieve',
    qualified: 'client.core.properties.retrieve',
    params: ['id: string;'],
    response: "{ id: string; created_at: string; name: string; object: 'property'; updated_at: string; }",
    markdown:
      "## retrieve\n\n`client.core.properties.retrieve(id: string): { id: string; created_at: string; name: string; object: 'property'; updated_at: string; }`\n\n**get** `/v1/core/properties/{id}`\n\nThis endpoint returns a single property by its ID.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; object: 'property'; updated_at: string; }`\n  Property represents a property that groups attributes.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `object: 'property'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst property = await client.core.properties.retrieve('id');\n\nconsole.log(property);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.properties.retrieve',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst property = await client.core.properties.retrieve('id');\n\nconsole.log(property.id);",
      },
      python: {
        method: 'core.properties.retrieve',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nproperty = client.core.properties.retrieve(\n    "id",\n)\nprint(property.id)',
      },
      kotlin: {
        method: 'core().properties().retrieve',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.properties.Property\nimport com.augno.api.models.core.properties.PropertyRetrieveParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val property: Property = client.core().properties().retrieve("id")\n}',
      },
      go: {
        method: 'client.Core.Properties.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tproperty, err := client.Core.Properties.Get(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", property.ID)\n}\n',
      },
      ruby: {
        method: 'core.properties.retrieve',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nproperty = augno_client.core.properties.retrieve("id")\n\nputs(property)',
      },
      csharp: {
        method: 'Core.Properties.Retrieve',
        example:
          'PropertyRetrieveParams parameters = new() { ID = "id" };\n\nvar property = await client.Core.Properties.Retrieve(parameters);\n\nConsole.WriteLine(property);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/properties/$ID \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/core/properties/{id}',
    httpMethod: 'patch',
    summary: 'Update Property',
    description: 'This endpoint partially updates a property.',
    stainlessPath: '(resource) core.properties > (method) update',
    qualified: 'client.core.properties.update',
    params: ['id: string;', 'name?: string;'],
    response: "{ id: string; created_at: string; name: string; object: 'property'; updated_at: string; }",
    markdown:
      "## update\n\n`client.core.properties.update(id: string, name?: string): { id: string; created_at: string; name: string; object: 'property'; updated_at: string; }`\n\n**patch** `/v1/core/properties/{id}`\n\nThis endpoint partially updates a property.\n\n### Parameters\n\n- `id: string`\n\n- `name?: string`\n  The new name of the property.\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; object: 'property'; updated_at: string; }`\n  Property represents a property that groups attributes.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `object: 'property'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst property = await client.core.properties.update('id');\n\nconsole.log(property);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.properties.update',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst property = await client.core.properties.update('id', { name: 'Size' });\n\nconsole.log(property.id);",
      },
      python: {
        method: 'core.properties.update',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nproperty = client.core.properties.update(\n    id="id",\n    name="Size",\n)\nprint(property.id)',
      },
      kotlin: {
        method: 'core().properties().update',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.properties.Property\nimport com.augno.api.models.core.properties.PropertyUpdateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val property: Property = client.core().properties().update("id")\n}',
      },
      go: {
        method: 'client.Core.Properties.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tproperty, err := client.Core.Properties.Update(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CorePropertyUpdateParams{\n\t\t\tName: augno.String("Size"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", property.ID)\n}\n',
      },
      ruby: {
        method: 'core.properties.update',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nproperty = augno_client.core.properties.update("id")\n\nputs(property)',
      },
      csharp: {
        method: 'Core.Properties.Update',
        example:
          'PropertyUpdateParams parameters = new() { ID = "id" };\n\nvar property = await client.Core.Properties.Update(parameters);\n\nConsole.WriteLine(property);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/properties/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/core/properties/{property_id}/attributes',
    httpMethod: 'get',
    summary: 'List Attributes',
    description:
      'This endpoint returns a paginated list of attributes for a property.\nSupports cursor-based pagination and search by text.',
    stainlessPath: '(resource) core.properties.attributes > (method) list',
    qualified: 'client.core.properties.attributes.list',
    params: ['property_id: string;', "include?: 'property'[];"],
    response:
      "{ data: { id: string; color_code: string; created_at: string; object: 'attribute'; order: number; property: object; text: string; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }",
    markdown:
      "## list\n\n`client.core.properties.attributes.list(property_id: string, include?: 'property'[]): { data: attribute[]; object: 'list'; page_info: page_info; }`\n\n**get** `/v1/core/properties/{property_id}/attributes`\n\nThis endpoint returns a paginated list of attributes for a property.\nSupports cursor-based pagination and search by text.\n\n### Parameters\n\n- `property_id: string`\n\n- `include?: 'property'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ data: { id: string; color_code: string; created_at: string; object: 'attribute'; order: number; property: object; text: string; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }`\n  A paginated list of Attribute resources\n\n  - `data: { id: string; color_code: string; created_at: string; object: 'attribute'; order: number; property: { id: string; name: string; object: 'property'; }; text: string; updated_at: string; }[]`\n  - `object: 'list'`\n  - `page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst attributes = await client.core.properties.attributes.list('property_id');\n\nconsole.log(attributes);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.properties.attributes.list',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst attributes = await client.core.properties.attributes.list('property_id');\n\nconsole.log(attributes.data);",
      },
      python: {
        method: 'core.properties.attributes.list',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nattributes = client.core.properties.attributes.list(\n    property_id="property_id",\n)\nprint(attributes.data)',
      },
      kotlin: {
        method: 'core().properties().attributes().list',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.properties.attributes.AttributeListParams\nimport com.augno.api.models.core.properties.attributes.AttributeListResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val attributes: AttributeListResponse = client.core().properties().attributes().list("property_id")\n}',
      },
      go: {
        method: 'client.Core.Properties.Attributes.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tattributes, err := client.Core.Properties.Attributes.List(\n\t\tcontext.TODO(),\n\t\t"property_id",\n\t\taugno.CorePropertyAttributeListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", attributes.Data)\n}\n',
      },
      ruby: {
        method: 'core.properties.attributes.list',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nattributes = augno_client.core.properties.attributes.list("property_id")\n\nputs(attributes)',
      },
      csharp: {
        method: 'Core.Properties.Attributes.List',
        example:
          'AttributeListParams parameters = new() { PropertyID = "property_id" };\n\nvar attributes = await client.Core.Properties.Attributes.List(parameters);\n\nConsole.WriteLine(attributes);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/properties/$PROPERTY_ID/attributes \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/core/properties/{property_id}/attributes',
    httpMethod: 'post',
    summary: 'Create Attribute',
    description: 'This endpoint creates a new attribute under a property.',
    stainlessPath: '(resource) core.properties.attributes > (method) create',
    qualified: 'client.core.properties.attributes.create',
    params: [
      'property_id: string;',
      'color_code: string;',
      'order: number;',
      'text: string;',
      "include?: 'property'[];",
    ],
    response:
      "{ id: string; color_code: string; created_at: string; object: 'attribute'; order: number; property: { id: string; name: string; object: 'property'; }; text: string; updated_at: string; }",
    markdown:
      "## create\n\n`client.core.properties.attributes.create(property_id: string, color_code: string, order: number, text: string, include?: 'property'[]): { id: string; color_code: string; created_at: string; object: 'attribute'; order: number; property: object; text: string; updated_at: string; }`\n\n**post** `/v1/core/properties/{property_id}/attributes`\n\nThis endpoint creates a new attribute under a property.\n\n### Parameters\n\n- `property_id: string`\n\n- `color_code: string`\n  The color code of the attribute.\n\n- `order: number`\n  The display order of the attribute.\n\n- `text: string`\n  The text value of the attribute.\n\n- `include?: 'property'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ id: string; color_code: string; created_at: string; object: 'attribute'; order: number; property: { id: string; name: string; object: 'property'; }; text: string; updated_at: string; }`\n  Attribute represents a value option within a property.\n\n  - `id: string`\n  - `color_code: string`\n  - `created_at: string`\n  - `object: 'attribute'`\n  - `order: number`\n  - `property: { id: string; name: string; object: 'property'; }`\n  - `text: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst attribute = await client.core.properties.attributes.create('property_id', {\n  color_code: 'red',\n  order: 1,\n  text: 'Red',\n});\n\nconsole.log(attribute);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.properties.attributes.create',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst attribute = await client.core.properties.attributes.create('property_id', {\n  color_code: 'red',\n  order: 1,\n  text: 'Red',\n});\n\nconsole.log(attribute.id);",
      },
      python: {
        method: 'core.properties.attributes.create',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nattribute = client.core.properties.attributes.create(\n    property_id="property_id",\n    color_code="red",\n    order=1,\n    text="Red",\n)\nprint(attribute.id)',
      },
      kotlin: {
        method: 'core().properties().attributes().create',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.properties.attributes.Attribute\nimport com.augno.api.models.core.properties.attributes.AttributeCreateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: AttributeCreateParams = AttributeCreateParams.builder()\n        .propertyId("property_id")\n        .colorCode("red")\n        .order(1L)\n        .text("Red")\n        .build()\n    val attribute: Attribute = client.core().properties().attributes().create(params)\n}',
      },
      go: {
        method: 'client.Core.Properties.Attributes.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tattribute, err := client.Core.Properties.Attributes.New(\n\t\tcontext.TODO(),\n\t\t"property_id",\n\t\taugno.CorePropertyAttributeNewParams{\n\t\t\tColorCode: "red",\n\t\t\tOrder:     1,\n\t\t\tText:      "Red",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", attribute.ID)\n}\n',
      },
      ruby: {
        method: 'core.properties.attributes.create',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nattribute = augno_client.core.properties.attributes.create("property_id", color_code: "red", order: 1, text: "Red")\n\nputs(attribute)',
      },
      csharp: {
        method: 'Core.Properties.Attributes.Create',
        example:
          'AttributeCreateParams parameters = new()\n{\n    PropertyID = "property_id",\n    ColorCode = "red",\n    Order = 1,\n    Text = "Red",\n};\n\nvar attribute = await client.Core.Properties.Attributes.Create(parameters);\n\nConsole.WriteLine(attribute);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/properties/$PROPERTY_ID/attributes \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "color_code": "red",\n          "order": 1,\n          "text": "Red"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/core/properties/{property_id}/attributes/{id}',
    httpMethod: 'delete',
    summary: 'Delete Attribute',
    description: 'This endpoint deletes an attribute from a property.',
    stainlessPath: '(resource) core.properties.attributes > (method) delete',
    qualified: 'client.core.properties.attributes.delete',
    params: ['property_id: string;', 'id: string;'],
    response: '{  }',
    markdown:
      "## delete\n\n`client.core.properties.attributes.delete(property_id: string, id: string): {  }`\n\n**delete** `/v1/core/properties/{property_id}/attributes/{id}`\n\nThis endpoint deletes an attribute from a property.\n\n### Parameters\n\n- `property_id: string`\n\n- `id: string`\n\n### Returns\n\n- `{  }`\n\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst attribute = await client.core.properties.attributes.delete('id', { property_id: 'property_id' });\n\nconsole.log(attribute);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.properties.attributes.delete',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst attribute = await client.core.properties.attributes.delete('id', {\n  property_id: 'property_id',\n});\n\nconsole.log(attribute);",
      },
      python: {
        method: 'core.properties.attributes.delete',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nattribute = client.core.properties.attributes.delete(\n    id="id",\n    property_id="property_id",\n)\nprint(attribute)',
      },
      kotlin: {
        method: 'core().properties().attributes().delete',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.properties.attributes.AttributeDeleteParams\nimport com.augno.api.models.core.properties.attributes.AttributeDeleteResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: AttributeDeleteParams = AttributeDeleteParams.builder()\n        .propertyId("property_id")\n        .id("id")\n        .build()\n    val attribute: AttributeDeleteResponse = client.core().properties().attributes().delete(params)\n}',
      },
      go: {
        method: 'client.Core.Properties.Attributes.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tattribute, err := client.Core.Properties.Attributes.Delete(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CorePropertyAttributeDeleteParams{\n\t\t\tPropertyID: "property_id",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", attribute)\n}\n',
      },
      ruby: {
        method: 'core.properties.attributes.delete',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nattribute = augno_client.core.properties.attributes.delete("id", property_id: "property_id")\n\nputs(attribute)',
      },
      csharp: {
        method: 'Core.Properties.Attributes.Delete',
        example:
          'AttributeDeleteParams parameters = new()\n{\n    PropertyID = "property_id",\n    ID = "id",\n};\n\nvar attribute = await client.Core.Properties.Attributes.Delete(parameters);\n\nConsole.WriteLine(attribute);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/properties/$PROPERTY_ID/attributes/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/core/properties/{property_id}/attributes/{id}',
    httpMethod: 'get',
    summary: 'Get Attribute',
    description: 'This endpoint returns a single attribute by its ID within a property.',
    stainlessPath: '(resource) core.properties.attributes > (method) retrieve',
    qualified: 'client.core.properties.attributes.retrieve',
    params: ['property_id: string;', 'id: string;', "include?: 'property'[];"],
    response:
      "{ id: string; color_code: string; created_at: string; object: 'attribute'; order: number; property: { id: string; name: string; object: 'property'; }; text: string; updated_at: string; }",
    markdown:
      "## retrieve\n\n`client.core.properties.attributes.retrieve(property_id: string, id: string, include?: 'property'[]): { id: string; color_code: string; created_at: string; object: 'attribute'; order: number; property: object; text: string; updated_at: string; }`\n\n**get** `/v1/core/properties/{property_id}/attributes/{id}`\n\nThis endpoint returns a single attribute by its ID within a property.\n\n### Parameters\n\n- `property_id: string`\n\n- `id: string`\n\n- `include?: 'property'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ id: string; color_code: string; created_at: string; object: 'attribute'; order: number; property: { id: string; name: string; object: 'property'; }; text: string; updated_at: string; }`\n  Attribute represents a value option within a property.\n\n  - `id: string`\n  - `color_code: string`\n  - `created_at: string`\n  - `object: 'attribute'`\n  - `order: number`\n  - `property: { id: string; name: string; object: 'property'; }`\n  - `text: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst attribute = await client.core.properties.attributes.retrieve('id', { property_id: 'property_id' });\n\nconsole.log(attribute);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.properties.attributes.retrieve',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst attribute = await client.core.properties.attributes.retrieve('id', {\n  property_id: 'property_id',\n});\n\nconsole.log(attribute.id);",
      },
      python: {
        method: 'core.properties.attributes.retrieve',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nattribute = client.core.properties.attributes.retrieve(\n    id="id",\n    property_id="property_id",\n)\nprint(attribute.id)',
      },
      kotlin: {
        method: 'core().properties().attributes().retrieve',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.properties.attributes.Attribute\nimport com.augno.api.models.core.properties.attributes.AttributeRetrieveParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: AttributeRetrieveParams = AttributeRetrieveParams.builder()\n        .propertyId("property_id")\n        .id("id")\n        .build()\n    val attribute: Attribute = client.core().properties().attributes().retrieve(params)\n}',
      },
      go: {
        method: 'client.Core.Properties.Attributes.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tattribute, err := client.Core.Properties.Attributes.Get(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CorePropertyAttributeGetParams{\n\t\t\tPropertyID: "property_id",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", attribute.ID)\n}\n',
      },
      ruby: {
        method: 'core.properties.attributes.retrieve',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nattribute = augno_client.core.properties.attributes.retrieve("id", property_id: "property_id")\n\nputs(attribute)',
      },
      csharp: {
        method: 'Core.Properties.Attributes.Retrieve',
        example:
          'AttributeRetrieveParams parameters = new()\n{\n    PropertyID = "property_id",\n    ID = "id",\n};\n\nvar attribute = await client.Core.Properties.Attributes.Retrieve(parameters);\n\nConsole.WriteLine(attribute);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/properties/$PROPERTY_ID/attributes/$ID \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/core/properties/{property_id}/attributes/{id}',
    httpMethod: 'patch',
    summary: 'Update Attribute',
    description: 'This endpoint partially updates an attribute.',
    stainlessPath: '(resource) core.properties.attributes > (method) update',
    qualified: 'client.core.properties.attributes.update',
    params: [
      'property_id: string;',
      'id: string;',
      "include?: 'property'[];",
      'color_code?: string;',
      'order?: number;',
      'text?: string;',
    ],
    response:
      "{ id: string; color_code: string; created_at: string; object: 'attribute'; order: number; property: { id: string; name: string; object: 'property'; }; text: string; updated_at: string; }",
    markdown:
      "## update\n\n`client.core.properties.attributes.update(property_id: string, id: string, include?: 'property'[], color_code?: string, order?: number, text?: string): { id: string; color_code: string; created_at: string; object: 'attribute'; order: number; property: object; text: string; updated_at: string; }`\n\n**patch** `/v1/core/properties/{property_id}/attributes/{id}`\n\nThis endpoint partially updates an attribute.\n\n### Parameters\n\n- `property_id: string`\n\n- `id: string`\n\n- `include?: 'property'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n- `color_code?: string`\n  The new color code of the attribute.\n\n- `order?: number`\n  The new display order of the attribute.\n\n- `text?: string`\n  The new text value of the attribute.\n\n### Returns\n\n- `{ id: string; color_code: string; created_at: string; object: 'attribute'; order: number; property: { id: string; name: string; object: 'property'; }; text: string; updated_at: string; }`\n  Attribute represents a value option within a property.\n\n  - `id: string`\n  - `color_code: string`\n  - `created_at: string`\n  - `object: 'attribute'`\n  - `order: number`\n  - `property: { id: string; name: string; object: 'property'; }`\n  - `text: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst attribute = await client.core.properties.attributes.update('id', { property_id: 'property_id' });\n\nconsole.log(attribute);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.properties.attributes.update',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst attribute = await client.core.properties.attributes.update('id', {\n  property_id: 'property_id',\n  text: 'Blue',\n});\n\nconsole.log(attribute.id);",
      },
      python: {
        method: 'core.properties.attributes.update',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nattribute = client.core.properties.attributes.update(\n    id="id",\n    property_id="property_id",\n    text="Blue",\n)\nprint(attribute.id)',
      },
      kotlin: {
        method: 'core().properties().attributes().update',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.properties.attributes.Attribute\nimport com.augno.api.models.core.properties.attributes.AttributeUpdateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: AttributeUpdateParams = AttributeUpdateParams.builder()\n        .propertyId("property_id")\n        .id("id")\n        .build()\n    val attribute: Attribute = client.core().properties().attributes().update(params)\n}',
      },
      go: {
        method: 'client.Core.Properties.Attributes.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tattribute, err := client.Core.Properties.Attributes.Update(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CorePropertyAttributeUpdateParams{\n\t\t\tPropertyID: "property_id",\n\t\t\tText:       augno.String("Blue"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", attribute.ID)\n}\n',
      },
      ruby: {
        method: 'core.properties.attributes.update',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nattribute = augno_client.core.properties.attributes.update("id", property_id: "property_id")\n\nputs(attribute)',
      },
      csharp: {
        method: 'Core.Properties.Attributes.Update',
        example:
          'AttributeUpdateParams parameters = new()\n{\n    PropertyID = "property_id",\n    ID = "id",\n};\n\nvar attribute = await client.Core.Properties.Attributes.Update(parameters);\n\nConsole.WriteLine(attribute);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/properties/$PROPERTY_ID/attributes/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/core/request-logs',
    httpMethod: 'get',
    summary: 'List Request Logs',
    description:
      'This endpoint returns a paginated, filterable list of request logs for the target account.\nSupports cursor-based pagination and various filters.',
    stainlessPath: '(resource) core.request_logs > (method) list',
    qualified: 'client.core.requestLogs.list',
    params: [
      'account_id?: string;',
      'actor_id?: string;',
      'actor_name?: string;',
      'actor_type?: string;',
      'cursor?: string;',
      'end_date?: string;',
      'error_code?: string;',
      'exact_match?: boolean;',
      "include?: 'account' | 'actor' | 'actor.role' | 'actor.role.permissions'[];",
      'limit?: number;',
      'method?: string;',
      'q?: string;',
      'start_date?: string;',
      'status_code?: number;',
    ],
    response:
      "{ id: string; account: { id: string; name: string; object: 'account'; }; actor: { id: string; email: string; name: string; object: 'user'; redacted_value: string; role: light_role; }; api_version: string; client_ip: string; created_at: string; error_code: string; error_message: string; host: string; idempotency_key: string; identity_type: string; latency_us: number; method: string; normalized_route: string; object: 'request_log'; occurred_at: string; path: string; query_json: string; referrer: string; status_code: number; user_agent: string; }",
    markdown:
      "## list\n\n`client.core.requestLogs.list(account_id?: string, actor_id?: string, actor_name?: string, actor_type?: string, cursor?: string, end_date?: string, error_code?: string, exact_match?: boolean, include?: 'account' | 'actor' | 'actor.role' | 'actor.role.permissions'[], limit?: number, method?: string, q?: string, start_date?: string, status_code?: number): { id: string; account: light_account; actor: request_log_actor; api_version: string; client_ip: string; created_at: string; error_code: string; error_message: string; host: string; idempotency_key: string; identity_type: string; latency_us: number; method: string; normalized_route: string; object: 'request_log'; occurred_at: string; path: string; query_json: string; referrer: string; status_code: number; user_agent: string; }`\n\n**get** `/v1/core/request-logs`\n\nThis endpoint returns a paginated, filterable list of request logs for the target account.\nSupports cursor-based pagination and various filters.\n\n### Parameters\n\n- `account_id?: string`\n  Filter: actor's home account ID.\n\n- `actor_id?: string`\n  Filter: actor ID.\n\n- `actor_name?: string`\n  Filter: actor name (partial or exact match).\n\n- `actor_type?: string`\n  Filter: actor type (\"user\" or \"api_key\").\n\n- `cursor?: string`\n  Cursor for fetching the next page, from a previous response's next_cursor field.\n\n- `end_date?: string`\n  Filter: end of date range for occurred_at.\n\n- `error_code?: string`\n  Filter: API error code.\n\n- `exact_match?: boolean`\n  When true, string filters use exact match instead of partial (LIKE).\n\n- `include?: 'account' | 'actor' | 'actor.role' | 'actor.role.permissions'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n- `limit?: number`\n  Maximum number of results to return per page (default: 100, max: 1000).\n\n- `method?: string`\n  Filter: HTTP method.\n\n- `q?: string`\n  Search query: matches against ID (exact), path (partial), or error message (partial).\n\n- `start_date?: string`\n  Filter: start of date range for occurred_at.\n\n- `status_code?: number`\n  Filter: HTTP status code.\n\n### Returns\n\n- `{ id: string; account: { id: string; name: string; object: 'account'; }; actor: { id: string; email: string; name: string; object: 'user'; redacted_value: string; role: light_role; }; api_version: string; client_ip: string; created_at: string; error_code: string; error_message: string; host: string; idempotency_key: string; identity_type: string; latency_us: number; method: string; normalized_route: string; object: 'request_log'; occurred_at: string; path: string; query_json: string; referrer: string; status_code: number; user_agent: string; }`\n  RequestLogListItem is the list representation of a request log entry.\nIt omits the request and response body JSON fields which are only\navailable when retrieving a single request log by ID.\n\n  - `id: string`\n  - `account: { id: string; name: string; object: 'account'; }`\n  - `actor: { id: string; email: string; name: string; object: 'user'; redacted_value: string; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; }`\n  - `api_version: string`\n  - `client_ip: string`\n  - `created_at: string`\n  - `error_code: string`\n  - `error_message: string`\n  - `host: string`\n  - `idempotency_key: string`\n  - `identity_type: string`\n  - `latency_us: number`\n  - `method: string`\n  - `normalized_route: string`\n  - `object: 'request_log'`\n  - `occurred_at: string`\n  - `path: string`\n  - `query_json: string`\n  - `referrer: string`\n  - `status_code: number`\n  - `user_agent: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\n// Automatically fetches more pages as needed.\nfor await (const requestLogListResponse of client.core.requestLogs.list()) {\n  console.log(requestLogListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.requestLogs.list',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const requestLogListResponse of client.core.requestLogs.list()) {\n  console.log(requestLogListResponse.id);\n}",
      },
      python: {
        method: 'core.request_logs.list',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\npage = client.core.request_logs.list()\npage = page.data[0]\nprint(page.id)',
      },
      kotlin: {
        method: 'core().requestLogs().list',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.requestlogs.RequestLogListPage\nimport com.augno.api.models.core.requestlogs.RequestLogListParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val page: RequestLogListPage = client.core().requestLogs().list()\n}',
      },
      go: {
        method: 'client.Core.RequestLogs.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Core.RequestLogs.List(context.TODO(), augno.CoreRequestLogListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      ruby: {
        method: 'core.request_logs.list',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\npage = augno_client.core.request_logs.list\n\nputs(page)',
      },
      csharp: {
        method: 'Core.RequestLogs.List',
        example:
          'RequestLogListParams parameters = new();\n\nvar page = await client.Core.RequestLogs.List(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/request-logs \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/core/request-logs/{id}',
    httpMethod: 'get',
    summary: 'Get Request Log',
    description: 'This endpoint returns a single request log by its ID.',
    stainlessPath: '(resource) core.request_logs > (method) retrieve',
    qualified: 'client.core.requestLogs.retrieve',
    params: ['id: string;', "include?: 'account' | 'actor' | 'actor.role' | 'actor.role.permissions'[];"],
    response:
      "{ id: string; account: { id: string; name: string; object: 'account'; }; actor: { id: string; email: string; name: string; object: 'user'; redacted_value: string; role: light_role; }; api_version: string; client_ip: string; created_at: string; error_code: string; error_message: string; host: string; idempotency_key: string; identity_type: string; latency_us: number; method: string; normalized_route: string; object: 'request_log'; occurred_at: string; path: string; query_json: string; referrer: string; request_body_json: string; response_body_json: string; status_code: number; user_agent: string; }",
    markdown:
      "## retrieve\n\n`client.core.requestLogs.retrieve(id: string, include?: 'account' | 'actor' | 'actor.role' | 'actor.role.permissions'[]): { id: string; account: light_account; actor: request_log_actor; api_version: string; client_ip: string; created_at: string; error_code: string; error_message: string; host: string; idempotency_key: string; identity_type: string; latency_us: number; method: string; normalized_route: string; object: 'request_log'; occurred_at: string; path: string; query_json: string; referrer: string; request_body_json: string; response_body_json: string; status_code: number; user_agent: string; }`\n\n**get** `/v1/core/request-logs/{id}`\n\nThis endpoint returns a single request log by its ID.\n\n### Parameters\n\n- `id: string`\n\n- `include?: 'account' | 'actor' | 'actor.role' | 'actor.role.permissions'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ id: string; account: { id: string; name: string; object: 'account'; }; actor: { id: string; email: string; name: string; object: 'user'; redacted_value: string; role: light_role; }; api_version: string; client_ip: string; created_at: string; error_code: string; error_message: string; host: string; idempotency_key: string; identity_type: string; latency_us: number; method: string; normalized_route: string; object: 'request_log'; occurred_at: string; path: string; query_json: string; referrer: string; request_body_json: string; response_body_json: string; status_code: number; user_agent: string; }`\n  RequestLog represents a single API request log entry.\n\n  - `id: string`\n  - `account: { id: string; name: string; object: 'account'; }`\n  - `actor: { id: string; email: string; name: string; object: 'user'; redacted_value: string; role: { id: string; name: string; object: 'role'; permissions: object; role_type_code: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'; }; }`\n  - `api_version: string`\n  - `client_ip: string`\n  - `created_at: string`\n  - `error_code: string`\n  - `error_message: string`\n  - `host: string`\n  - `idempotency_key: string`\n  - `identity_type: string`\n  - `latency_us: number`\n  - `method: string`\n  - `normalized_route: string`\n  - `object: 'request_log'`\n  - `occurred_at: string`\n  - `path: string`\n  - `query_json: string`\n  - `referrer: string`\n  - `request_body_json: string`\n  - `response_body_json: string`\n  - `status_code: number`\n  - `user_agent: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst requestLog = await client.core.requestLogs.retrieve('id');\n\nconsole.log(requestLog);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.requestLogs.retrieve',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst requestLog = await client.core.requestLogs.retrieve('id');\n\nconsole.log(requestLog.id);",
      },
      python: {
        method: 'core.request_logs.retrieve',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nrequest_log = client.core.request_logs.retrieve(\n    id="id",\n)\nprint(request_log.id)',
      },
      kotlin: {
        method: 'core().requestLogs().retrieve',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.requestlogs.RequestLogRetrieveParams\nimport com.augno.api.models.core.requestlogs.RequestLogRetrieveResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val requestLog: RequestLogRetrieveResponse = client.core().requestLogs().retrieve("id")\n}',
      },
      go: {
        method: 'client.Core.RequestLogs.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\trequestLog, err := client.Core.RequestLogs.Get(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreRequestLogGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", requestLog.ID)\n}\n',
      },
      ruby: {
        method: 'core.request_logs.retrieve',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nrequest_log = augno_client.core.request_logs.retrieve("id")\n\nputs(request_log)',
      },
      csharp: {
        method: 'Core.RequestLogs.Retrieve',
        example:
          'RequestLogRetrieveParams parameters = new() { ID = "id" };\n\nvar requestLog = await client.Core.RequestLogs.Retrieve(parameters);\n\nConsole.WriteLine(requestLog);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/request-logs/$ID \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/core/sandboxes',
    httpMethod: 'get',
    summary: 'List Sandboxes',
    description:
      'This endpoint returns a paginated list of sandbox accounts for the target account.\nSupports cursor-based pagination.',
    stainlessPath: '(resource) core.sandboxes > (method) list',
    qualified: 'client.core.sandboxes.list',
    params: ['cursor?: string;', "include?: 'owner_account'[];", 'limit?: number;', 'q?: string;'],
    response:
      "{ id: string; created_at: string; name: string; object: 'sandbox'; owner_account: { id: string; name: string; object: 'account'; }; updated_at: string; }",
    markdown:
      "## list\n\n`client.core.sandboxes.list(cursor?: string, include?: 'owner_account'[], limit?: number, q?: string): { id: string; created_at: string; name: string; object: 'sandbox'; owner_account: light_account; updated_at: string; }`\n\n**get** `/v1/core/sandboxes`\n\nThis endpoint returns a paginated list of sandbox accounts for the target account.\nSupports cursor-based pagination.\n\n### Parameters\n\n- `cursor?: string`\n  Cursor for fetching the next page, from a previous response's next_cursor field.\n\n- `include?: 'owner_account'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n- `limit?: number`\n  Maximum number of results to return per page (default: 100, max: 1000).\n\n- `q?: string`\n  Optional search query to filter results.\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; object: 'sandbox'; owner_account: { id: string; name: string; object: 'account'; }; updated_at: string; }`\n  Sandbox represents an isolated testing environment for an account.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `object: 'sandbox'`\n  - `owner_account: { id: string; name: string; object: 'account'; }`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\n// Automatically fetches more pages as needed.\nfor await (const sandbox of client.core.sandboxes.list()) {\n  console.log(sandbox);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.sandboxes.list',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const sandbox of client.core.sandboxes.list()) {\n  console.log(sandbox.id);\n}",
      },
      python: {
        method: 'core.sandboxes.list',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\npage = client.core.sandboxes.list()\npage = page.data[0]\nprint(page.id)',
      },
      kotlin: {
        method: 'core().sandboxes().list',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.sandboxes.SandboxListPage\nimport com.augno.api.models.core.sandboxes.SandboxListParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val page: SandboxListPage = client.core().sandboxes().list()\n}',
      },
      go: {
        method: 'client.Core.Sandboxes.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Core.Sandboxes.List(context.TODO(), augno.CoreSandboxListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      ruby: {
        method: 'core.sandboxes.list',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\npage = augno_client.core.sandboxes.list\n\nputs(page)',
      },
      csharp: {
        method: 'Core.Sandboxes.List',
        example:
          'SandboxListParams parameters = new();\n\nvar page = await client.Core.Sandboxes.List(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/sandboxes \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/core/sandboxes',
    httpMethod: 'post',
    summary: 'Create Sandbox',
    description:
      'This endpoint creates a new sandbox account for the target account.\nEnforces a per-account sandbox limit. Requires admin permissions.',
    stainlessPath: '(resource) core.sandboxes > (method) create',
    qualified: 'client.core.sandboxes.create',
    params: ["mode: 'blank' | 'seeded';", 'name: string;', "include?: 'owner_account'[];"],
    response:
      "{ id: string; created_at: string; name: string; object: 'sandbox'; owner_account: { id: string; name: string; object: 'account'; }; updated_at: string; }",
    markdown:
      "## create\n\n`client.core.sandboxes.create(mode: 'blank' | 'seeded', name: string, include?: 'owner_account'[]): { id: string; created_at: string; name: string; object: 'sandbox'; owner_account: light_account; updated_at: string; }`\n\n**post** `/v1/core/sandboxes`\n\nThis endpoint creates a new sandbox account for the target account.\nEnforces a per-account sandbox limit. Requires admin permissions.\n\n### Parameters\n\n- `mode: 'blank' | 'seeded'`\n  Controls whether the sandbox is blank or seeded with tutorial data.\n\n- `name: string`\n  The display name for the sandbox.\n\n- `include?: 'owner_account'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; object: 'sandbox'; owner_account: { id: string; name: string; object: 'account'; }; updated_at: string; }`\n  Sandbox represents an isolated testing environment for an account.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `object: 'sandbox'`\n  - `owner_account: { id: string; name: string; object: 'account'; }`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst sandbox = await client.core.sandboxes.create({ mode: 'blank', name: 'Integration Testing' });\n\nconsole.log(sandbox);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.sandboxes.create',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst sandbox = await client.core.sandboxes.create({ mode: 'blank', name: 'Integration Testing' });\n\nconsole.log(sandbox.id);",
      },
      python: {
        method: 'core.sandboxes.create',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nsandbox = client.core.sandboxes.create(\n    mode="blank",\n    name="Integration Testing",\n)\nprint(sandbox.id)',
      },
      kotlin: {
        method: 'core().sandboxes().create',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.sandboxes.Sandbox\nimport com.augno.api.models.core.sandboxes.SandboxCreateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: SandboxCreateParams = SandboxCreateParams.builder()\n        .mode(SandboxCreateParams.Mode.BLANK)\n        .name("Integration Testing")\n        .build()\n    val sandbox: Sandbox = client.core().sandboxes().create(params)\n}',
      },
      go: {
        method: 'client.Core.Sandboxes.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tsandbox, err := client.Core.Sandboxes.New(context.TODO(), augno.CoreSandboxNewParams{\n\t\tMode: augno.CoreSandboxNewParamsModeBlank,\n\t\tName: "Integration Testing",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", sandbox.ID)\n}\n',
      },
      ruby: {
        method: 'core.sandboxes.create',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nsandbox = augno_client.core.sandboxes.create(mode: :blank, name: "Integration Testing")\n\nputs(sandbox)',
      },
      csharp: {
        method: 'Core.Sandboxes.Create',
        example:
          'SandboxCreateParams parameters = new()\n{\n    Mode = Mode.Blank,\n    Name = "Integration Testing",\n};\n\nvar sandbox = await client.Core.Sandboxes.Create(parameters);\n\nConsole.WriteLine(sandbox);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/sandboxes \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "mode": "blank",\n          "name": "Integration Testing"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/core/sandboxes/{id}',
    httpMethod: 'delete',
    summary: 'Delete Sandbox',
    description:
      'This endpoint deletes a sandbox account. At least one sandbox must remain\nper production account. The sandbox and its account record are removed synchronously, and all\naccount-scoped data is purged asynchronously.',
    stainlessPath: '(resource) core.sandboxes > (method) delete',
    qualified: 'client.core.sandboxes.delete',
    params: ['id: string;'],
    response: '{  }',
    markdown:
      "## delete\n\n`client.core.sandboxes.delete(id: string): {  }`\n\n**delete** `/v1/core/sandboxes/{id}`\n\nThis endpoint deletes a sandbox account. At least one sandbox must remain\nper production account. The sandbox and its account record are removed synchronously, and all\naccount-scoped data is purged asynchronously.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{  }`\n\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst sandbox = await client.core.sandboxes.delete('id');\n\nconsole.log(sandbox);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.sandboxes.delete',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst sandbox = await client.core.sandboxes.delete('id');\n\nconsole.log(sandbox);",
      },
      python: {
        method: 'core.sandboxes.delete',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nsandbox = client.core.sandboxes.delete(\n    "id",\n)\nprint(sandbox)',
      },
      kotlin: {
        method: 'core().sandboxes().delete',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.sandboxes.SandboxDeleteParams\nimport com.augno.api.models.core.sandboxes.SandboxDeleteResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val sandbox: SandboxDeleteResponse = client.core().sandboxes().delete("id")\n}',
      },
      go: {
        method: 'client.Core.Sandboxes.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tsandbox, err := client.Core.Sandboxes.Delete(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", sandbox)\n}\n',
      },
      ruby: {
        method: 'core.sandboxes.delete',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nsandbox = augno_client.core.sandboxes.delete("id")\n\nputs(sandbox)',
      },
      csharp: {
        method: 'Core.Sandboxes.Delete',
        example:
          'SandboxDeleteParams parameters = new() { ID = "id" };\n\nvar sandbox = await client.Core.Sandboxes.Delete(parameters);\n\nConsole.WriteLine(sandbox);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/sandboxes/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/core/sandboxes/{id}',
    httpMethod: 'get',
    summary: 'Get Sandbox',
    description: 'This endpoint returns a single sandbox account by its ID.',
    stainlessPath: '(resource) core.sandboxes > (method) retrieve',
    qualified: 'client.core.sandboxes.retrieve',
    params: ['id: string;', "include?: 'owner_account'[];"],
    response:
      "{ id: string; created_at: string; name: string; object: 'sandbox'; owner_account: { id: string; name: string; object: 'account'; }; updated_at: string; }",
    markdown:
      "## retrieve\n\n`client.core.sandboxes.retrieve(id: string, include?: 'owner_account'[]): { id: string; created_at: string; name: string; object: 'sandbox'; owner_account: light_account; updated_at: string; }`\n\n**get** `/v1/core/sandboxes/{id}`\n\nThis endpoint returns a single sandbox account by its ID.\n\n### Parameters\n\n- `id: string`\n\n- `include?: 'owner_account'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; object: 'sandbox'; owner_account: { id: string; name: string; object: 'account'; }; updated_at: string; }`\n  Sandbox represents an isolated testing environment for an account.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `object: 'sandbox'`\n  - `owner_account: { id: string; name: string; object: 'account'; }`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst sandbox = await client.core.sandboxes.retrieve('id');\n\nconsole.log(sandbox);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.sandboxes.retrieve',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst sandbox = await client.core.sandboxes.retrieve('id');\n\nconsole.log(sandbox.id);",
      },
      python: {
        method: 'core.sandboxes.retrieve',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nsandbox = client.core.sandboxes.retrieve(\n    id="id",\n)\nprint(sandbox.id)',
      },
      kotlin: {
        method: 'core().sandboxes().retrieve',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.sandboxes.Sandbox\nimport com.augno.api.models.core.sandboxes.SandboxRetrieveParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val sandbox: Sandbox = client.core().sandboxes().retrieve("id")\n}',
      },
      go: {
        method: 'client.Core.Sandboxes.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tsandbox, err := client.Core.Sandboxes.Get(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreSandboxGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", sandbox.ID)\n}\n',
      },
      ruby: {
        method: 'core.sandboxes.retrieve',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nsandbox = augno_client.core.sandboxes.retrieve("id")\n\nputs(sandbox)',
      },
      csharp: {
        method: 'Core.Sandboxes.Retrieve',
        example:
          'SandboxRetrieveParams parameters = new() { ID = "id" };\n\nvar sandbox = await client.Core.Sandboxes.Retrieve(parameters);\n\nConsole.WriteLine(sandbox);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/sandboxes/$ID \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/core/shipping-terms',
    httpMethod: 'get',
    summary: 'List Shipping Terms',
    description:
      'This endpoint returns a paginated list of shipping terms for the target account, including both account-specific and default system shipping terms.\nSupports cursor-based pagination and search by name.',
    stainlessPath: '(resource) core.shipping_terms > (method) list',
    qualified: 'client.core.shippingTerms.list',
    params: ["include?: 'flat_rate.unit' | 'minimum_order_value.unit'[];"],
    response:
      "{ data: { id: string; created_at: string; flat_rate: quantity; free_shipping_carrier_option_ids: string[]; minimum_order_value: quantity; name: string; object: 'shipping_term'; type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight'; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }",
    markdown:
      "## list\n\n`client.core.shippingTerms.list(include?: 'flat_rate.unit' | 'minimum_order_value.unit'[]): { data: shipping_term[]; object: 'list'; page_info: page_info; }`\n\n**get** `/v1/core/shipping-terms`\n\nThis endpoint returns a paginated list of shipping terms for the target account, including both account-specific and default system shipping terms.\nSupports cursor-based pagination and search by name.\n\n### Parameters\n\n- `include?: 'flat_rate.unit' | 'minimum_order_value.unit'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ data: { id: string; created_at: string; flat_rate: quantity; free_shipping_carrier_option_ids: string[]; minimum_order_value: quantity; name: string; object: 'shipping_term'; type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight'; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }`\n  A paginated list of ShippingTerm resources\n\n  - `data: { id: string; created_at: string; flat_rate: { id: string; display_value: string; object: 'quantity'; unit: unit; value: string; }; free_shipping_carrier_option_ids: string[]; minimum_order_value: { id: string; display_value: string; object: 'quantity'; unit: unit; value: string; }; name: string; object: 'shipping_term'; type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight'; updated_at: string; }[]`\n  - `object: 'list'`\n  - `page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst shippingTerms = await client.core.shippingTerms.list();\n\nconsole.log(shippingTerms);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.shippingTerms.list',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst shippingTerms = await client.core.shippingTerms.list();\n\nconsole.log(shippingTerms.data);",
      },
      python: {
        method: 'core.shipping_terms.list',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nshipping_terms = client.core.shipping_terms.list()\nprint(shipping_terms.data)',
      },
      kotlin: {
        method: 'core().shippingTerms().list',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.shippingterms.ShippingTermListParams\nimport com.augno.api.models.core.shippingterms.ShippingTermListResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val shippingTerms: ShippingTermListResponse = client.core().shippingTerms().list()\n}',
      },
      go: {
        method: 'client.Core.ShippingTerms.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tshippingTerms, err := client.Core.ShippingTerms.List(context.TODO(), augno.CoreShippingTermListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", shippingTerms.Data)\n}\n',
      },
      ruby: {
        method: 'core.shipping_terms.list',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nshipping_terms = augno_client.core.shipping_terms.list\n\nputs(shipping_terms)',
      },
      csharp: {
        method: 'Core.ShippingTerms.List',
        example:
          'ShippingTermListParams parameters = new();\n\nvar shippingTerms = await client.Core.ShippingTerms.List(parameters);\n\nConsole.WriteLine(shippingTerms);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/shipping-terms \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/core/shipping-terms',
    httpMethod: 'post',
    summary: 'Create Shipping Term',
    description: 'This endpoint creates a new account-owned shipping term.',
    stainlessPath: '(resource) core.shipping_terms > (method) create',
    qualified: 'client.core.shippingTerms.create',
    params: [
      'free_shipping_carrier_option_ids: string[];',
      'name: string;',
      "type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight';",
      "include?: 'flat_rate.unit' | 'minimum_order_value.unit'[];",
      'flat_rate?: { unit_id: string; value: string; };',
      'minimum_order_value?: { unit_id: string; value: string; };',
    ],
    response:
      "{ id: string; created_at: string; flat_rate: { id: string; display_value: string; object: 'quantity'; unit: unit; value: string; }; free_shipping_carrier_option_ids: string[]; minimum_order_value: { id: string; display_value: string; object: 'quantity'; unit: unit; value: string; }; name: string; object: 'shipping_term'; type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight'; updated_at: string; }",
    markdown:
      "## create\n\n`client.core.shippingTerms.create(free_shipping_carrier_option_ids: string[], name: string, type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight', include?: 'flat_rate.unit' | 'minimum_order_value.unit'[], flat_rate?: { unit_id: string; value: string; }, minimum_order_value?: { unit_id: string; value: string; }): { id: string; created_at: string; flat_rate: quantity; free_shipping_carrier_option_ids: string[]; minimum_order_value: quantity; name: string; object: 'shipping_term'; type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight'; updated_at: string; }`\n\n**post** `/v1/core/shipping-terms`\n\nThis endpoint creates a new account-owned shipping term.\n\n### Parameters\n\n- `free_shipping_carrier_option_ids: string[]`\n  The carrier option IDs that qualify for free shipping.\n\n- `name: string`\n  The display name of the shipping term.\n\n- `type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight'`\n  The shipping term type.\n\n- `include?: 'flat_rate.unit' | 'minimum_order_value.unit'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n- `flat_rate?: { unit_id: string; value: string; }`\n  QuantityInputRequest represents a quantity value and unit pair.\n  - `unit_id: string`\n    The unit ID for the value.\n  - `value: string`\n    The decimal value.\n\n- `minimum_order_value?: { unit_id: string; value: string; }`\n  QuantityInputRequest represents a quantity value and unit pair.\n  - `unit_id: string`\n    The unit ID for the value.\n  - `value: string`\n    The decimal value.\n\n### Returns\n\n- `{ id: string; created_at: string; flat_rate: { id: string; display_value: string; object: 'quantity'; unit: unit; value: string; }; free_shipping_carrier_option_ids: string[]; minimum_order_value: { id: string; display_value: string; object: 'quantity'; unit: unit; value: string; }; name: string; object: 'shipping_term'; type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight'; updated_at: string; }`\n  ShippingTerm represents a shipping term configuration.\n\n  - `id: string`\n  - `created_at: string`\n  - `flat_rate: { id: string; display_value: string; object: 'quantity'; unit: { id: string; abbreviation: string; created_at: string; is_base_unit: boolean; is_internal: boolean; name: string; object: 'unit'; offset_denominator: string; offset_numerator: string; ratio_denominator: string; ratio_numerator: string; type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'; updated_at: string; }; value: string; }`\n  - `free_shipping_carrier_option_ids: string[]`\n  - `minimum_order_value: { id: string; display_value: string; object: 'quantity'; unit: { id: string; abbreviation: string; created_at: string; is_base_unit: boolean; is_internal: boolean; name: string; object: 'unit'; offset_denominator: string; offset_numerator: string; ratio_denominator: string; ratio_numerator: string; type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'; updated_at: string; }; value: string; }`\n  - `name: string`\n  - `object: 'shipping_term'`\n  - `type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst shippingTerm = await client.core.shippingTerms.create({\n  free_shipping_carrier_option_ids: ['string'],\n  name: 'Prepaid',\n  type: 'carrier_rate_freight',\n});\n\nconsole.log(shippingTerm);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.shippingTerms.create',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst shippingTerm = await client.core.shippingTerms.create({\n  free_shipping_carrier_option_ids: ['string'],\n  name: 'Prepaid',\n  type: 'carrier_rate_freight',\n});\n\nconsole.log(shippingTerm.id);",
      },
      python: {
        method: 'core.shipping_terms.create',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nshipping_term = client.core.shipping_terms.create(\n    free_shipping_carrier_option_ids=["string"],\n    name="Prepaid",\n    type="carrier_rate_freight",\n)\nprint(shipping_term.id)',
      },
      kotlin: {
        method: 'core().shippingTerms().create',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.shippingterms.ShippingTerm\nimport com.augno.api.models.core.shippingterms.ShippingTermCreateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: ShippingTermCreateParams = ShippingTermCreateParams.builder()\n        .addFreeShippingCarrierOptionId("string")\n        .name("Prepaid")\n        .type(ShippingTermCreateParams.Type.CARRIER_RATE_FREIGHT)\n        .build()\n    val shippingTerm: ShippingTerm = client.core().shippingTerms().create(params)\n}',
      },
      go: {
        method: 'client.Core.ShippingTerms.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tshippingTerm, err := client.Core.ShippingTerms.New(context.TODO(), augno.CoreShippingTermNewParams{\n\t\tFreeShippingCarrierOptionIDs: []string{"string"},\n\t\tName:                         "Prepaid",\n\t\tType:                         augno.CoreShippingTermNewParamsTypeCarrierRateFreight,\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", shippingTerm.ID)\n}\n',
      },
      ruby: {
        method: 'core.shipping_terms.create',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nshipping_term = augno_client.core.shipping_terms.create(\n  free_shipping_carrier_option_ids: ["string"],\n  name: "Prepaid",\n  type: :carrier_rate_freight\n)\n\nputs(shipping_term)',
      },
      csharp: {
        method: 'Core.ShippingTerms.Create',
        example:
          'ShippingTermCreateParams parameters = new()\n{\n    FreeShippingCarrierOptionIds =\n    [\n        "string"\n    ],\n    Name = "Prepaid",\n    Type = Type.CarrierRateFreight,\n};\n\nvar shippingTerm = await client.Core.ShippingTerms.Create(parameters);\n\nConsole.WriteLine(shippingTerm);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/shipping-terms \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "free_shipping_carrier_option_ids": [\n            "string"\n          ],\n          "name": "Prepaid",\n          "type": "carrier_rate_freight"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/core/shipping-terms/{id}',
    httpMethod: 'delete',
    summary: 'Delete Shipping Term',
    description:
      'This endpoint deletes an account-owned shipping term.\nAssociated free shipping rules and quantity records are also removed. Default shipping terms cannot be deleted.',
    stainlessPath: '(resource) core.shipping_terms > (method) delete',
    qualified: 'client.core.shippingTerms.delete',
    params: ['id: string;'],
    response: '{  }',
    markdown:
      "## delete\n\n`client.core.shippingTerms.delete(id: string): {  }`\n\n**delete** `/v1/core/shipping-terms/{id}`\n\nThis endpoint deletes an account-owned shipping term.\nAssociated free shipping rules and quantity records are also removed. Default shipping terms cannot be deleted.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{  }`\n\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst shippingTerm = await client.core.shippingTerms.delete('id');\n\nconsole.log(shippingTerm);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.shippingTerms.delete',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst shippingTerm = await client.core.shippingTerms.delete('id');\n\nconsole.log(shippingTerm);",
      },
      python: {
        method: 'core.shipping_terms.delete',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nshipping_term = client.core.shipping_terms.delete(\n    "id",\n)\nprint(shipping_term)',
      },
      kotlin: {
        method: 'core().shippingTerms().delete',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.shippingterms.ShippingTermDeleteParams\nimport com.augno.api.models.core.shippingterms.ShippingTermDeleteResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val shippingTerm: ShippingTermDeleteResponse = client.core().shippingTerms().delete("id")\n}',
      },
      go: {
        method: 'client.Core.ShippingTerms.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tshippingTerm, err := client.Core.ShippingTerms.Delete(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", shippingTerm)\n}\n',
      },
      ruby: {
        method: 'core.shipping_terms.delete',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nshipping_term = augno_client.core.shipping_terms.delete("id")\n\nputs(shipping_term)',
      },
      csharp: {
        method: 'Core.ShippingTerms.Delete',
        example:
          'ShippingTermDeleteParams parameters = new() { ID = "id" };\n\nvar shippingTerm = await client.Core.ShippingTerms.Delete(parameters);\n\nConsole.WriteLine(shippingTerm);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/shipping-terms/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/core/shipping-terms/{id}',
    httpMethod: 'get',
    summary: 'Get Shipping Term',
    description:
      'This endpoint returns a single shipping term by its ID.\nThe shipping term must belong to the requesting account or be a default (global) shipping term.',
    stainlessPath: '(resource) core.shipping_terms > (method) retrieve',
    qualified: 'client.core.shippingTerms.retrieve',
    params: ['id: string;', "include?: 'flat_rate.unit' | 'minimum_order_value.unit'[];"],
    response:
      "{ id: string; created_at: string; flat_rate: { id: string; display_value: string; object: 'quantity'; unit: unit; value: string; }; free_shipping_carrier_option_ids: string[]; minimum_order_value: { id: string; display_value: string; object: 'quantity'; unit: unit; value: string; }; name: string; object: 'shipping_term'; type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight'; updated_at: string; }",
    markdown:
      "## retrieve\n\n`client.core.shippingTerms.retrieve(id: string, include?: 'flat_rate.unit' | 'minimum_order_value.unit'[]): { id: string; created_at: string; flat_rate: quantity; free_shipping_carrier_option_ids: string[]; minimum_order_value: quantity; name: string; object: 'shipping_term'; type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight'; updated_at: string; }`\n\n**get** `/v1/core/shipping-terms/{id}`\n\nThis endpoint returns a single shipping term by its ID.\nThe shipping term must belong to the requesting account or be a default (global) shipping term.\n\n### Parameters\n\n- `id: string`\n\n- `include?: 'flat_rate.unit' | 'minimum_order_value.unit'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ id: string; created_at: string; flat_rate: { id: string; display_value: string; object: 'quantity'; unit: unit; value: string; }; free_shipping_carrier_option_ids: string[]; minimum_order_value: { id: string; display_value: string; object: 'quantity'; unit: unit; value: string; }; name: string; object: 'shipping_term'; type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight'; updated_at: string; }`\n  ShippingTerm represents a shipping term configuration.\n\n  - `id: string`\n  - `created_at: string`\n  - `flat_rate: { id: string; display_value: string; object: 'quantity'; unit: { id: string; abbreviation: string; created_at: string; is_base_unit: boolean; is_internal: boolean; name: string; object: 'unit'; offset_denominator: string; offset_numerator: string; ratio_denominator: string; ratio_numerator: string; type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'; updated_at: string; }; value: string; }`\n  - `free_shipping_carrier_option_ids: string[]`\n  - `minimum_order_value: { id: string; display_value: string; object: 'quantity'; unit: { id: string; abbreviation: string; created_at: string; is_base_unit: boolean; is_internal: boolean; name: string; object: 'unit'; offset_denominator: string; offset_numerator: string; ratio_denominator: string; ratio_numerator: string; type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'; updated_at: string; }; value: string; }`\n  - `name: string`\n  - `object: 'shipping_term'`\n  - `type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst shippingTerm = await client.core.shippingTerms.retrieve('id');\n\nconsole.log(shippingTerm);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.shippingTerms.retrieve',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst shippingTerm = await client.core.shippingTerms.retrieve('id');\n\nconsole.log(shippingTerm.id);",
      },
      python: {
        method: 'core.shipping_terms.retrieve',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nshipping_term = client.core.shipping_terms.retrieve(\n    id="id",\n)\nprint(shipping_term.id)',
      },
      kotlin: {
        method: 'core().shippingTerms().retrieve',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.shippingterms.ShippingTerm\nimport com.augno.api.models.core.shippingterms.ShippingTermRetrieveParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val shippingTerm: ShippingTerm = client.core().shippingTerms().retrieve("id")\n}',
      },
      go: {
        method: 'client.Core.ShippingTerms.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tshippingTerm, err := client.Core.ShippingTerms.Get(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreShippingTermGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", shippingTerm.ID)\n}\n',
      },
      ruby: {
        method: 'core.shipping_terms.retrieve',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nshipping_term = augno_client.core.shipping_terms.retrieve("id")\n\nputs(shipping_term)',
      },
      csharp: {
        method: 'Core.ShippingTerms.Retrieve',
        example:
          'ShippingTermRetrieveParams parameters = new() { ID = "id" };\n\nvar shippingTerm = await client.Core.ShippingTerms.Retrieve(parameters);\n\nConsole.WriteLine(shippingTerm);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/shipping-terms/$ID \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/core/shipping-terms/{id}',
    httpMethod: 'patch',
    summary: 'Update Shipping Term',
    description:
      'This endpoint partially updates an account-owned shipping term.\nOnly provided fields are updated; absent fields retain their current values.\nDefault shipping terms cannot be updated.',
    stainlessPath: '(resource) core.shipping_terms > (method) update',
    qualified: 'client.core.shippingTerms.update',
    params: [
      'id: string;',
      'free_shipping_carrier_option_ids: string[];',
      "include?: 'flat_rate.unit' | 'minimum_order_value.unit'[];",
      'flat_rate?: { unit_id: string; value: string; };',
      'minimum_order_value?: { unit_id: string; value: string; };',
      'name?: string;',
      "type?: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight';",
    ],
    response:
      "{ id: string; created_at: string; flat_rate: { id: string; display_value: string; object: 'quantity'; unit: unit; value: string; }; free_shipping_carrier_option_ids: string[]; minimum_order_value: { id: string; display_value: string; object: 'quantity'; unit: unit; value: string; }; name: string; object: 'shipping_term'; type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight'; updated_at: string; }",
    markdown:
      "## update\n\n`client.core.shippingTerms.update(id: string, free_shipping_carrier_option_ids: string[], include?: 'flat_rate.unit' | 'minimum_order_value.unit'[], flat_rate?: { unit_id: string; value: string; }, minimum_order_value?: { unit_id: string; value: string; }, name?: string, type?: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight'): { id: string; created_at: string; flat_rate: quantity; free_shipping_carrier_option_ids: string[]; minimum_order_value: quantity; name: string; object: 'shipping_term'; type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight'; updated_at: string; }`\n\n**patch** `/v1/core/shipping-terms/{id}`\n\nThis endpoint partially updates an account-owned shipping term.\nOnly provided fields are updated; absent fields retain their current values.\nDefault shipping terms cannot be updated.\n\n### Parameters\n\n- `id: string`\n\n- `free_shipping_carrier_option_ids: string[]`\n  The carrier option IDs that qualify for free shipping.\n\n- `include?: 'flat_rate.unit' | 'minimum_order_value.unit'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n- `flat_rate?: { unit_id: string; value: string; }`\n  QuantityInputRequest represents a quantity value and unit pair.\n  - `unit_id: string`\n    The unit ID for the value.\n  - `value: string`\n    The decimal value.\n\n- `minimum_order_value?: { unit_id: string; value: string; }`\n  QuantityInputRequest represents a quantity value and unit pair.\n  - `unit_id: string`\n    The unit ID for the value.\n  - `value: string`\n    The decimal value.\n\n- `name?: string`\n  The display name of the shipping term.\n\n- `type?: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight'`\n  The shipping term type.\n\n### Returns\n\n- `{ id: string; created_at: string; flat_rate: { id: string; display_value: string; object: 'quantity'; unit: unit; value: string; }; free_shipping_carrier_option_ids: string[]; minimum_order_value: { id: string; display_value: string; object: 'quantity'; unit: unit; value: string; }; name: string; object: 'shipping_term'; type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight'; updated_at: string; }`\n  ShippingTerm represents a shipping term configuration.\n\n  - `id: string`\n  - `created_at: string`\n  - `flat_rate: { id: string; display_value: string; object: 'quantity'; unit: { id: string; abbreviation: string; created_at: string; is_base_unit: boolean; is_internal: boolean; name: string; object: 'unit'; offset_denominator: string; offset_numerator: string; ratio_denominator: string; ratio_numerator: string; type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'; updated_at: string; }; value: string; }`\n  - `free_shipping_carrier_option_ids: string[]`\n  - `minimum_order_value: { id: string; display_value: string; object: 'quantity'; unit: { id: string; abbreviation: string; created_at: string; is_base_unit: boolean; is_internal: boolean; name: string; object: 'unit'; offset_denominator: string; offset_numerator: string; ratio_denominator: string; ratio_numerator: string; type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'; updated_at: string; }; value: string; }`\n  - `name: string`\n  - `object: 'shipping_term'`\n  - `type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst shippingTerm = await client.core.shippingTerms.update('id', { free_shipping_carrier_option_ids: ['string'] });\n\nconsole.log(shippingTerm);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.shippingTerms.update',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst shippingTerm = await client.core.shippingTerms.update('id', {\n  free_shipping_carrier_option_ids: ['string'],\n  name: 'Collect',\n});\n\nconsole.log(shippingTerm.id);",
      },
      python: {
        method: 'core.shipping_terms.update',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nshipping_term = client.core.shipping_terms.update(\n    id="id",\n    free_shipping_carrier_option_ids=["string"],\n    name="Collect",\n)\nprint(shipping_term.id)',
      },
      kotlin: {
        method: 'core().shippingTerms().update',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.shippingterms.ShippingTerm\nimport com.augno.api.models.core.shippingterms.ShippingTermUpdateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: ShippingTermUpdateParams = ShippingTermUpdateParams.builder()\n        .id("id")\n        .addFreeShippingCarrierOptionId("string")\n        .build()\n    val shippingTerm: ShippingTerm = client.core().shippingTerms().update(params)\n}',
      },
      go: {
        method: 'client.Core.ShippingTerms.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tshippingTerm, err := client.Core.ShippingTerms.Update(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreShippingTermUpdateParams{\n\t\t\tFreeShippingCarrierOptionIDs: []string{"string"},\n\t\t\tName:                         augno.String("Collect"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", shippingTerm.ID)\n}\n',
      },
      ruby: {
        method: 'core.shipping_terms.update',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nshipping_term = augno_client.core.shipping_terms.update("id", free_shipping_carrier_option_ids: ["string"])\n\nputs(shipping_term)',
      },
      csharp: {
        method: 'Core.ShippingTerms.Update',
        example:
          'ShippingTermUpdateParams parameters = new()\n{\n    ID = "id",\n    FreeShippingCarrierOptionIds =\n    [\n        "string"\n    ],\n};\n\nvar shippingTerm = await client.Core.ShippingTerms.Update(parameters);\n\nConsole.WriteLine(shippingTerm);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/shipping-terms/$ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "free_shipping_carrier_option_ids": [\n            "string"\n          ],\n          "name": "Collect"\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/core/units',
    httpMethod: 'get',
    summary: 'List Units',
    description:
      'This endpoint returns a paginated list of units for the target account, including both account-specific and global system units.\nSupports cursor-based pagination, filtering by dimension type and unit group membership, and search by name or abbreviation.',
    stainlessPath: '(resource) core.units > (method) list',
    qualified: 'client.core.units.list',
    params: ['type?: string;', 'unit_group_ids?: string[];'],
    response:
      "{ data: { id: string; abbreviation: string; created_at: string; is_base_unit: boolean; is_internal: boolean; name: string; object: 'unit'; offset_denominator: string; offset_numerator: string; ratio_denominator: string; ratio_numerator: string; type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }",
    markdown:
      "## list\n\n`client.core.units.list(type?: string, unit_group_ids?: string[]): { data: unit[]; object: 'list'; page_info: page_info; }`\n\n**get** `/v1/core/units`\n\nThis endpoint returns a paginated list of units for the target account, including both account-specific and global system units.\nSupports cursor-based pagination, filtering by dimension type and unit group membership, and search by name or abbreviation.\n\n### Parameters\n\n- `type?: string`\n  Filter by unit dimension code (e.g. \"mass\", \"quantity\").\n\n- `unit_group_ids?: string[]`\n  Filter by unit group membership.\n\n### Returns\n\n- `{ data: { id: string; abbreviation: string; created_at: string; is_base_unit: boolean; is_internal: boolean; name: string; object: 'unit'; offset_denominator: string; offset_numerator: string; ratio_denominator: string; ratio_numerator: string; type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }`\n  A paginated list of Unit resources\n\n  - `data: { id: string; abbreviation: string; created_at: string; is_base_unit: boolean; is_internal: boolean; name: string; object: 'unit'; offset_denominator: string; offset_numerator: string; ratio_denominator: string; ratio_numerator: string; type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'; updated_at: string; }[]`\n  - `object: 'list'`\n  - `page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst units = await client.core.units.list();\n\nconsole.log(units);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.units.list',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst units = await client.core.units.list();\n\nconsole.log(units.data);",
      },
      python: {
        method: 'core.units.list',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nunits = client.core.units.list()\nprint(units.data)',
      },
      kotlin: {
        method: 'core().units().list',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.units.UnitListParams\nimport com.augno.api.models.core.units.UnitListResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val units: UnitListResponse = client.core().units().list()\n}',
      },
      go: {
        method: 'client.Core.Units.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tunits, err := client.Core.Units.List(context.TODO(), augno.CoreUnitListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", units.Data)\n}\n',
      },
      ruby: {
        method: 'core.units.list',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nunits = augno_client.core.units.list\n\nputs(units)',
      },
      csharp: {
        method: 'Core.Units.List',
        example:
          'UnitListParams parameters = new();\n\nvar units = await client.Core.Units.List(parameters);\n\nConsole.WriteLine(units);',
      },
      http: {
        example: 'curl https://api.augno.com/v1/core/units \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/core/units',
    httpMethod: 'post',
    summary: 'Create Unit',
    description: 'This endpoint creates a new account-owned unit.',
    stainlessPath: '(resource) core.units > (method) create',
    qualified: 'client.core.units.create',
    params: [
      'abbreviation: string;',
      'is_base_unit: boolean;',
      'name: string;',
      'offset_denominator: string;',
      'offset_numerator: string;',
      'ratio_denominator: string;',
      'ratio_numerator: string;',
      "type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';",
    ],
    response:
      "{ id: string; abbreviation: string; created_at: string; is_base_unit: boolean; is_internal: boolean; name: string; object: 'unit'; offset_denominator: string; offset_numerator: string; ratio_denominator: string; ratio_numerator: string; type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'; updated_at: string; }",
    markdown:
      "## create\n\n`client.core.units.create(abbreviation: string, is_base_unit: boolean, name: string, offset_denominator: string, offset_numerator: string, ratio_denominator: string, ratio_numerator: string, type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'): { id: string; abbreviation: string; created_at: string; is_base_unit: boolean; is_internal: boolean; name: string; object: 'unit'; offset_denominator: string; offset_numerator: string; ratio_denominator: string; ratio_numerator: string; type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'; updated_at: string; }`\n\n**post** `/v1/core/units`\n\nThis endpoint creates a new account-owned unit.\n\n### Parameters\n\n- `abbreviation: string`\n  The short abbreviation for the unit (e.g. \"g\").\n\n- `is_base_unit: boolean`\n  Whether this unit is the base unit for its dimension.\n\n- `name: string`\n  The display name of the unit (e.g. \"Gram\").\n\n- `offset_denominator: string`\n  The conversion offset denominator, as a decimal string.\n\n- `offset_numerator: string`\n  The conversion offset numerator, as a decimal string.\n\n- `ratio_denominator: string`\n  The conversion ratio denominator relative to the base unit, as a decimal string.\n\n- `ratio_numerator: string`\n  The conversion ratio numerator relative to the base unit, as a decimal string.\n\n- `type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'`\n  The unit dimension code.\n\n### Returns\n\n- `{ id: string; abbreviation: string; created_at: string; is_base_unit: boolean; is_internal: boolean; name: string; object: 'unit'; offset_denominator: string; offset_numerator: string; ratio_denominator: string; ratio_numerator: string; type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'; updated_at: string; }`\n  Unit represents a unit of measurement used for conversions and product quantities.\n\n  - `id: string`\n  - `abbreviation: string`\n  - `created_at: string`\n  - `is_base_unit: boolean`\n  - `is_internal: boolean`\n  - `name: string`\n  - `object: 'unit'`\n  - `offset_denominator: string`\n  - `offset_numerator: string`\n  - `ratio_denominator: string`\n  - `ratio_numerator: string`\n  - `type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst unit = await client.core.units.create({\n  abbreviation: 'g',\n  is_base_unit: true,\n  name: 'Gram',\n  offset_denominator: '1.000000000000000000000000000000',\n  offset_numerator: '0.000000000000000000000000000000',\n  ratio_denominator: '1.000000000000000000000000000000',\n  ratio_numerator: '1.000000000000000000000000000000',\n  type: 'mass',\n});\n\nconsole.log(unit);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.units.create',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst unit = await client.core.units.create({\n  abbreviation: 'g',\n  is_base_unit: true,\n  name: 'Gram',\n  offset_denominator: '1.000000000000000000000000000000',\n  offset_numerator: '0.000000000000000000000000000000',\n  ratio_denominator: '1.000000000000000000000000000000',\n  ratio_numerator: '1.000000000000000000000000000000',\n  type: 'mass',\n});\n\nconsole.log(unit.id);",
      },
      python: {
        method: 'core.units.create',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nunit = client.core.units.create(\n    abbreviation="g",\n    is_base_unit=True,\n    name="Gram",\n    offset_denominator="1.000000000000000000000000000000",\n    offset_numerator="0.000000000000000000000000000000",\n    ratio_denominator="1.000000000000000000000000000000",\n    ratio_numerator="1.000000000000000000000000000000",\n    type="mass",\n)\nprint(unit.id)',
      },
      kotlin: {
        method: 'core().units().create',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.units.Unit\nimport com.augno.api.models.core.units.UnitCreateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: UnitCreateParams = UnitCreateParams.builder()\n        .abbreviation("g")\n        .isBaseUnit(true)\n        .name("Gram")\n        .offsetDenominator("1.000000000000000000000000000000")\n        .offsetNumerator("0.000000000000000000000000000000")\n        .ratioDenominator("1.000000000000000000000000000000")\n        .ratioNumerator("1.000000000000000000000000000000")\n        .type(UnitCreateParams.Type.MASS)\n        .build()\n    val unit: Unit = client.core().units().create(params)\n}',
      },
      go: {
        method: 'client.Core.Units.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tunit, err := client.Core.Units.New(context.TODO(), augno.CoreUnitNewParams{\n\t\tAbbreviation:      "g",\n\t\tIsBaseUnit:        true,\n\t\tName:              "Gram",\n\t\tOffsetDenominator: "1.000000000000000000000000000000",\n\t\tOffsetNumerator:   "0.000000000000000000000000000000",\n\t\tRatioDenominator:  "1.000000000000000000000000000000",\n\t\tRatioNumerator:    "1.000000000000000000000000000000",\n\t\tType:              augno.CoreUnitNewParamsTypeMass,\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", unit.ID)\n}\n',
      },
      ruby: {
        method: 'core.units.create',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nunit = augno_client.core.units.create(\n  abbreviation: "g",\n  is_base_unit: true,\n  name: "Gram",\n  offset_denominator: "1.000000000000000000000000000000",\n  offset_numerator: "0.000000000000000000000000000000",\n  ratio_denominator: "1.000000000000000000000000000000",\n  ratio_numerator: "1.000000000000000000000000000000",\n  type: :mass\n)\n\nputs(unit)',
      },
      csharp: {
        method: 'Core.Units.Create',
        example:
          'UnitCreateParams parameters = new()\n{\n    Abbreviation = "g",\n    IsBaseUnit = true,\n    Name = "Gram",\n    OffsetDenominator = "1.000000000000000000000000000000",\n    OffsetNumerator = "0.000000000000000000000000000000",\n    RatioDenominator = "1.000000000000000000000000000000",\n    RatioNumerator = "1.000000000000000000000000000000",\n    Type = Type.Mass,\n};\n\nvar unit = await client.Core.Units.Create(parameters);\n\nConsole.WriteLine(unit);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/units \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "abbreviation": "g",\n          "is_base_unit": true,\n          "name": "Gram",\n          "offset_denominator": "1.000000000000000000000000000000",\n          "offset_numerator": "0.000000000000000000000000000000",\n          "ratio_denominator": "1.000000000000000000000000000000",\n          "ratio_numerator": "1.000000000000000000000000000000",\n          "type": "mass"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/core/units/{id}',
    httpMethod: 'delete',
    summary: 'Delete Unit',
    description:
      'This endpoint deletes an account-owned unit.\nAssociated unit group memberships are also removed. System units cannot be deleted.',
    stainlessPath: '(resource) core.units > (method) delete',
    qualified: 'client.core.units.delete',
    params: ['id: string;'],
    response: '{  }',
    markdown:
      "## delete\n\n`client.core.units.delete(id: string): {  }`\n\n**delete** `/v1/core/units/{id}`\n\nThis endpoint deletes an account-owned unit.\nAssociated unit group memberships are also removed. System units cannot be deleted.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{  }`\n\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst unit = await client.core.units.delete('id');\n\nconsole.log(unit);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.units.delete',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst unit = await client.core.units.delete('id');\n\nconsole.log(unit);",
      },
      python: {
        method: 'core.units.delete',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nunit = client.core.units.delete(\n    "id",\n)\nprint(unit)',
      },
      kotlin: {
        method: 'core().units().delete',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.units.UnitDeleteParams\nimport com.augno.api.models.core.units.UnitDeleteResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val unit: UnitDeleteResponse = client.core().units().delete("id")\n}',
      },
      go: {
        method: 'client.Core.Units.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tunit, err := client.Core.Units.Delete(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", unit)\n}\n',
      },
      ruby: {
        method: 'core.units.delete',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nunit = augno_client.core.units.delete("id")\n\nputs(unit)',
      },
      csharp: {
        method: 'Core.Units.Delete',
        example:
          'UnitDeleteParams parameters = new() { ID = "id" };\n\nvar unit = await client.Core.Units.Delete(parameters);\n\nConsole.WriteLine(unit);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/units/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/core/units/{id}',
    httpMethod: 'get',
    summary: 'Get Unit',
    description:
      'This endpoint returns a single unit by its ID.\nThe unit must belong to the requesting account or be a system (global) unit.',
    stainlessPath: '(resource) core.units > (method) retrieve',
    qualified: 'client.core.units.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; abbreviation: string; created_at: string; is_base_unit: boolean; is_internal: boolean; name: string; object: 'unit'; offset_denominator: string; offset_numerator: string; ratio_denominator: string; ratio_numerator: string; type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'; updated_at: string; }",
    markdown:
      "## retrieve\n\n`client.core.units.retrieve(id: string): { id: string; abbreviation: string; created_at: string; is_base_unit: boolean; is_internal: boolean; name: string; object: 'unit'; offset_denominator: string; offset_numerator: string; ratio_denominator: string; ratio_numerator: string; type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'; updated_at: string; }`\n\n**get** `/v1/core/units/{id}`\n\nThis endpoint returns a single unit by its ID.\nThe unit must belong to the requesting account or be a system (global) unit.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; abbreviation: string; created_at: string; is_base_unit: boolean; is_internal: boolean; name: string; object: 'unit'; offset_denominator: string; offset_numerator: string; ratio_denominator: string; ratio_numerator: string; type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'; updated_at: string; }`\n  Unit represents a unit of measurement used for conversions and product quantities.\n\n  - `id: string`\n  - `abbreviation: string`\n  - `created_at: string`\n  - `is_base_unit: boolean`\n  - `is_internal: boolean`\n  - `name: string`\n  - `object: 'unit'`\n  - `offset_denominator: string`\n  - `offset_numerator: string`\n  - `ratio_denominator: string`\n  - `ratio_numerator: string`\n  - `type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst unit = await client.core.units.retrieve('id');\n\nconsole.log(unit);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.units.retrieve',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst unit = await client.core.units.retrieve('id');\n\nconsole.log(unit.id);",
      },
      python: {
        method: 'core.units.retrieve',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nunit = client.core.units.retrieve(\n    "id",\n)\nprint(unit.id)',
      },
      kotlin: {
        method: 'core().units().retrieve',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.units.Unit\nimport com.augno.api.models.core.units.UnitRetrieveParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val unit: Unit = client.core().units().retrieve("id")\n}',
      },
      go: {
        method: 'client.Core.Units.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tunit, err := client.Core.Units.Get(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", unit.ID)\n}\n',
      },
      ruby: {
        method: 'core.units.retrieve',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nunit = augno_client.core.units.retrieve("id")\n\nputs(unit)',
      },
      csharp: {
        method: 'Core.Units.Retrieve',
        example:
          'UnitRetrieveParams parameters = new() { ID = "id" };\n\nvar unit = await client.Core.Units.Retrieve(parameters);\n\nConsole.WriteLine(unit);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/units/$ID \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/core/units/{id}',
    httpMethod: 'patch',
    summary: 'Update Unit',
    description:
      'This endpoint partially updates an account-owned unit.\nOnly provided fields are updated; absent fields retain their current values.\nSystem units cannot be updated.',
    stainlessPath: '(resource) core.units > (method) update',
    qualified: 'client.core.units.update',
    params: [
      'id: string;',
      'abbreviation?: string;',
      'name?: string;',
      'offset_denominator?: string;',
      'offset_numerator?: string;',
      'ratio_denominator?: string;',
      'ratio_numerator?: string;',
    ],
    response:
      "{ id: string; abbreviation: string; created_at: string; is_base_unit: boolean; is_internal: boolean; name: string; object: 'unit'; offset_denominator: string; offset_numerator: string; ratio_denominator: string; ratio_numerator: string; type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'; updated_at: string; }",
    markdown:
      "## update\n\n`client.core.units.update(id: string, abbreviation?: string, name?: string, offset_denominator?: string, offset_numerator?: string, ratio_denominator?: string, ratio_numerator?: string): { id: string; abbreviation: string; created_at: string; is_base_unit: boolean; is_internal: boolean; name: string; object: 'unit'; offset_denominator: string; offset_numerator: string; ratio_denominator: string; ratio_numerator: string; type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'; updated_at: string; }`\n\n**patch** `/v1/core/units/{id}`\n\nThis endpoint partially updates an account-owned unit.\nOnly provided fields are updated; absent fields retain their current values.\nSystem units cannot be updated.\n\n### Parameters\n\n- `id: string`\n\n- `abbreviation?: string`\n  The short abbreviation for the unit.\n\n- `name?: string`\n  The display name of the unit.\n\n- `offset_denominator?: string`\n  The conversion offset denominator, as a decimal string.\n\n- `offset_numerator?: string`\n  The conversion offset numerator, as a decimal string.\n\n- `ratio_denominator?: string`\n  The conversion ratio denominator, as a decimal string.\n\n- `ratio_numerator?: string`\n  The conversion ratio numerator, as a decimal string.\n\n### Returns\n\n- `{ id: string; abbreviation: string; created_at: string; is_base_unit: boolean; is_internal: boolean; name: string; object: 'unit'; offset_denominator: string; offset_numerator: string; ratio_denominator: string; ratio_numerator: string; type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'; updated_at: string; }`\n  Unit represents a unit of measurement used for conversions and product quantities.\n\n  - `id: string`\n  - `abbreviation: string`\n  - `created_at: string`\n  - `is_base_unit: boolean`\n  - `is_internal: boolean`\n  - `name: string`\n  - `object: 'unit'`\n  - `offset_denominator: string`\n  - `offset_numerator: string`\n  - `ratio_denominator: string`\n  - `ratio_numerator: string`\n  - `type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst unit = await client.core.units.update('id');\n\nconsole.log(unit);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.units.update',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst unit = await client.core.units.update('id', { abbreviation: 'kg', name: 'Kilogram' });\n\nconsole.log(unit.id);",
      },
      python: {
        method: 'core.units.update',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nunit = client.core.units.update(\n    id="id",\n    abbreviation="kg",\n    name="Kilogram",\n)\nprint(unit.id)',
      },
      kotlin: {
        method: 'core().units().update',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.units.Unit\nimport com.augno.api.models.core.units.UnitUpdateParams\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val unit: Unit = client.core().units().update("id")\n}',
      },
      go: {
        method: 'client.Core.Units.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tunit, err := client.Core.Units.Update(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreUnitUpdateParams{\n\t\t\tAbbreviation: augno.String("kg"),\n\t\t\tName:         augno.String("Kilogram"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", unit.ID)\n}\n',
      },
      ruby: {
        method: 'core.units.update',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nunit = augno_client.core.units.update("id")\n\nputs(unit)',
      },
      csharp: {
        method: 'Core.Units.Update',
        example:
          'UnitUpdateParams parameters = new() { ID = "id" };\n\nvar unit = await client.Core.Units.Update(parameters);\n\nConsole.WriteLine(unit);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/units/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/core/item-categories',
    httpMethod: 'get',
    summary: 'List Item Categories',
    description:
      'This endpoint returns a paginated list of item categories for the target account, including both account-specific and global system categories.\nSupports cursor-based pagination, filtering by category type, and search by name.',
    stainlessPath: '(resource) core.item_categories > (method) list',
    qualified: 'client.core.itemCategories.list',
    params: ["include?: 'properties' | 'unit_group'[];", 'type?: string;'],
    response:
      "{ data: { id: string; created_at: string; name: string; notes: string; object: 'item_category'; properties: { id: string; name: string; object: 'property'; }[]; type: string; unit_group: { id: string; name: string; object: 'unit_group'; }; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }",
    markdown:
      "## list\n\n`client.core.itemCategories.list(include?: 'properties' | 'unit_group'[], type?: string): { data: object[]; object: 'list'; page_info: page_info; }`\n\n**get** `/v1/core/item-categories`\n\nThis endpoint returns a paginated list of item categories for the target account, including both account-specific and global system categories.\nSupports cursor-based pagination, filtering by category type, and search by name.\n\n### Parameters\n\n- `include?: 'properties' | 'unit_group'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n- `type?: string`\n  Filter by item category type code (material_category or product_category).\n\n### Returns\n\n- `{ data: { id: string; created_at: string; name: string; notes: string; object: 'item_category'; properties: { id: string; name: string; object: 'property'; }[]; type: string; unit_group: { id: string; name: string; object: 'unit_group'; }; updated_at: string; }[]; object: 'list'; page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }; }`\n  A paginated list of ItemCategory resources\n\n  - `data: { id: string; created_at: string; name: string; notes: string; object: 'item_category'; properties: { id: string; name: string; object: 'property'; }[]; type: string; unit_group: { id: string; name: string; object: 'unit_group'; }; updated_at: string; }[]`\n  - `object: 'list'`\n  - `page_info: { has_next_page: boolean; has_prev_page: boolean; next_cursor: string; prev_cursor: string; }`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst itemCategories = await client.core.itemCategories.list();\n\nconsole.log(itemCategories);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.itemCategories.list',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst itemCategories = await client.core.itemCategories.list();\n\nconsole.log(itemCategories.data);",
      },
      python: {
        method: 'core.item_categories.list',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nitem_categories = client.core.item_categories.list()\nprint(item_categories.data)',
      },
      kotlin: {
        method: 'core().itemCategories().list',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.itemcategories.ItemCategoryListParams\nimport com.augno.api.models.core.itemcategories.ItemCategoryListResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val itemCategories: ItemCategoryListResponse = client.core().itemCategories().list()\n}',
      },
      go: {
        method: 'client.Core.ItemCategories.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\titemCategories, err := client.Core.ItemCategories.List(context.TODO(), augno.CoreItemCategoryListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", itemCategories.Data)\n}\n',
      },
      ruby: {
        method: 'core.item_categories.list',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nitem_categories = augno_client.core.item_categories.list\n\nputs(item_categories)',
      },
      csharp: {
        method: 'Core.ItemCategories.List',
        example:
          'ItemCategoryListParams parameters = new();\n\nvar itemCategories = await client.Core.ItemCategories.List(parameters);\n\nConsole.WriteLine(itemCategories);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/item-categories \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/core/item-categories',
    httpMethod: 'post',
    summary: 'Create Item Category',
    description: 'This endpoint creates a new account-owned item category.',
    stainlessPath: '(resource) core.item_categories > (method) create',
    qualified: 'client.core.itemCategories.create',
    params: ['name: string;', 'type: string;', 'unit_group_id: string;'],
    response:
      "{ id: string; created_at: string; name: string; notes: string; object: 'item_category'; properties: { id: string; name: string; object: 'property'; }[]; type: string; unit_group: { id: string; name: string; object: 'unit_group'; }; updated_at: string; }",
    markdown:
      "## create\n\n`client.core.itemCategories.create(name: string, type: string, unit_group_id: string): { id: string; created_at: string; name: string; notes: string; object: 'item_category'; properties: object[]; type: string; unit_group: object; updated_at: string; }`\n\n**post** `/v1/core/item-categories`\n\nThis endpoint creates a new account-owned item category.\n\n### Parameters\n\n- `name: string`\n  The display name of the item category.\n\n- `type: string`\n  The type of item category (material_category or product_category).\n\n- `unit_group_id: string`\n  The ID of the unit group to associate with this item category.\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; notes: string; object: 'item_category'; properties: { id: string; name: string; object: 'property'; }[]; type: string; unit_group: { id: string; name: string; object: 'unit_group'; }; updated_at: string; }`\n  ItemCategory represents a full item category resource.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `notes: string`\n  - `object: 'item_category'`\n  - `properties: { id: string; name: string; object: 'property'; }[]`\n  - `type: string`\n  - `unit_group: { id: string; name: string; object: 'unit_group'; }`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst itemCategory = await client.core.itemCategories.create({\n  name: 'Electronics',\n  type: 'material_category',\n  unit_group_id: 'ug_01jm4r6700f8nwq3v5hx2d9ktp',\n});\n\nconsole.log(itemCategory);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.itemCategories.create',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst itemCategory = await client.core.itemCategories.create({\n  name: 'Electronics',\n  type: 'material_category',\n  unit_group_id: 'ug_01jm4r6700f8nwq3v5hx2d9ktp',\n});\n\nconsole.log(itemCategory.id);",
      },
      python: {
        method: 'core.item_categories.create',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nitem_category = client.core.item_categories.create(\n    name="Electronics",\n    type="material_category",\n    unit_group_id="ug_01jm4r6700f8nwq3v5hx2d9ktp",\n)\nprint(item_category.id)',
      },
      kotlin: {
        method: 'core().itemCategories().create',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.itemcategories.ItemCategoryCreateParams\nimport com.augno.api.models.core.itemcategories.ItemCategoryCreateResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: ItemCategoryCreateParams = ItemCategoryCreateParams.builder()\n        .name("Electronics")\n        .type("material_category")\n        .unitGroupId("ug_01jm4r6700f8nwq3v5hx2d9ktp")\n        .build()\n    val itemCategory: ItemCategoryCreateResponse = client.core().itemCategories().create(params)\n}',
      },
      go: {
        method: 'client.Core.ItemCategories.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\titemCategory, err := client.Core.ItemCategories.New(context.TODO(), augno.CoreItemCategoryNewParams{\n\t\tName:        "Electronics",\n\t\tType:        "material_category",\n\t\tUnitGroupID: "ug_01jm4r6700f8nwq3v5hx2d9ktp",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", itemCategory.ID)\n}\n',
      },
      ruby: {
        method: 'core.item_categories.create',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nitem_category = augno_client.core.item_categories.create(\n  name: "Electronics",\n  type: "material_category",\n  unit_group_id: "ug_01jm4r6700f8nwq3v5hx2d9ktp"\n)\n\nputs(item_category)',
      },
      csharp: {
        method: 'Core.ItemCategories.Create',
        example:
          'ItemCategoryCreateParams parameters = new()\n{\n    Name = "Electronics",\n    Type = "material_category",\n    UnitGroupID = "ug_01jm4r6700f8nwq3v5hx2d9ktp",\n};\n\nvar itemCategory = await client.Core.ItemCategories.Create(parameters);\n\nConsole.WriteLine(itemCategory);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/item-categories \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $AUGNO_API_KEY" \\\n    -d \'{\n          "name": "Electronics",\n          "type": "material_category",\n          "unit_group_id": "ug_01jm4r6700f8nwq3v5hx2d9ktp"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/core/item-categories/{id}',
    httpMethod: 'delete',
    summary: 'Delete Item Category',
    description:
      'This endpoint deletes an account-owned item category.\nDefault system categories cannot be deleted.',
    stainlessPath: '(resource) core.item_categories > (method) delete',
    qualified: 'client.core.itemCategories.delete',
    params: ['id: string;'],
    response: '{  }',
    markdown:
      "## delete\n\n`client.core.itemCategories.delete(id: string): {  }`\n\n**delete** `/v1/core/item-categories/{id}`\n\nThis endpoint deletes an account-owned item category.\nDefault system categories cannot be deleted.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{  }`\n\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst itemCategory = await client.core.itemCategories.delete('id');\n\nconsole.log(itemCategory);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.itemCategories.delete',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst itemCategory = await client.core.itemCategories.delete('id');\n\nconsole.log(itemCategory);",
      },
      python: {
        method: 'core.item_categories.delete',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nitem_category = client.core.item_categories.delete(\n    "id",\n)\nprint(item_category)',
      },
      kotlin: {
        method: 'core().itemCategories().delete',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.itemcategories.ItemCategoryDeleteParams\nimport com.augno.api.models.core.itemcategories.ItemCategoryDeleteResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val itemCategory: ItemCategoryDeleteResponse = client.core().itemCategories().delete("id")\n}',
      },
      go: {
        method: 'client.Core.ItemCategories.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\titemCategory, err := client.Core.ItemCategories.Delete(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", itemCategory)\n}\n',
      },
      ruby: {
        method: 'core.item_categories.delete',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nitem_category = augno_client.core.item_categories.delete("id")\n\nputs(item_category)',
      },
      csharp: {
        method: 'Core.ItemCategories.Delete',
        example:
          'ItemCategoryDeleteParams parameters = new() { ID = "id" };\n\nvar itemCategory = await client.Core.ItemCategories.Delete(parameters);\n\nConsole.WriteLine(itemCategory);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/item-categories/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/core/item-categories/{id}',
    httpMethod: 'get',
    summary: 'Get Item Category',
    description:
      'This endpoint returns a single item category by its ID.\nThe item category must belong to the requesting account or be a system (global) category.',
    stainlessPath: '(resource) core.item_categories > (method) retrieve',
    qualified: 'client.core.itemCategories.retrieve',
    params: ['id: string;', "include?: 'properties' | 'unit_group'[];"],
    response:
      "{ id: string; created_at: string; name: string; notes: string; object: 'item_category'; properties: { id: string; name: string; object: 'property'; }[]; type: string; unit_group: { id: string; name: string; object: 'unit_group'; }; updated_at: string; }",
    markdown:
      "## retrieve\n\n`client.core.itemCategories.retrieve(id: string, include?: 'properties' | 'unit_group'[]): { id: string; created_at: string; name: string; notes: string; object: 'item_category'; properties: object[]; type: string; unit_group: object; updated_at: string; }`\n\n**get** `/v1/core/item-categories/{id}`\n\nThis endpoint returns a single item category by its ID.\nThe item category must belong to the requesting account or be a system (global) category.\n\n### Parameters\n\n- `id: string`\n\n- `include?: 'properties' | 'unit_group'[]`\n  Sub-objects to expand in the response. When omitted, sub-objects are returned as `null`.\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; notes: string; object: 'item_category'; properties: { id: string; name: string; object: 'property'; }[]; type: string; unit_group: { id: string; name: string; object: 'unit_group'; }; updated_at: string; }`\n  ItemCategory represents a full item category resource.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `notes: string`\n  - `object: 'item_category'`\n  - `properties: { id: string; name: string; object: 'property'; }[]`\n  - `type: string`\n  - `unit_group: { id: string; name: string; object: 'unit_group'; }`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst itemCategory = await client.core.itemCategories.retrieve('id');\n\nconsole.log(itemCategory);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.itemCategories.retrieve',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst itemCategory = await client.core.itemCategories.retrieve('id');\n\nconsole.log(itemCategory.id);",
      },
      python: {
        method: 'core.item_categories.retrieve',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nitem_category = client.core.item_categories.retrieve(\n    id="id",\n)\nprint(item_category.id)',
      },
      kotlin: {
        method: 'core().itemCategories().retrieve',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.itemcategories.ItemCategoryRetrieveParams\nimport com.augno.api.models.core.itemcategories.ItemCategoryRetrieveResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val itemCategory: ItemCategoryRetrieveResponse = client.core().itemCategories().retrieve("id")\n}',
      },
      go: {
        method: 'client.Core.ItemCategories.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\titemCategory, err := client.Core.ItemCategories.Get(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreItemCategoryGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", itemCategory.ID)\n}\n',
      },
      ruby: {
        method: 'core.item_categories.retrieve',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nitem_category = augno_client.core.item_categories.retrieve("id")\n\nputs(item_category)',
      },
      csharp: {
        method: 'Core.ItemCategories.Retrieve',
        example:
          'ItemCategoryRetrieveParams parameters = new() { ID = "id" };\n\nvar itemCategory = await client.Core.ItemCategories.Retrieve(parameters);\n\nConsole.WriteLine(itemCategory);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/item-categories/$ID \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/core/item-categories/{id}',
    httpMethod: 'patch',
    summary: 'Update Item Category',
    description:
      'This endpoint partially updates an account-owned item category.\nOnly provided fields are updated; absent fields retain their current values.\nDefault system categories cannot be updated.',
    stainlessPath: '(resource) core.item_categories > (method) update',
    qualified: 'client.core.itemCategories.update',
    params: ['id: string;', 'name?: string;', 'notes?: string;'],
    response:
      "{ id: string; created_at: string; name: string; notes: string; object: 'item_category'; properties: { id: string; name: string; object: 'property'; }[]; type: string; unit_group: { id: string; name: string; object: 'unit_group'; }; updated_at: string; }",
    markdown:
      "## update\n\n`client.core.itemCategories.update(id: string, name?: string, notes?: string): { id: string; created_at: string; name: string; notes: string; object: 'item_category'; properties: object[]; type: string; unit_group: object; updated_at: string; }`\n\n**patch** `/v1/core/item-categories/{id}`\n\nThis endpoint partially updates an account-owned item category.\nOnly provided fields are updated; absent fields retain their current values.\nDefault system categories cannot be updated.\n\n### Parameters\n\n- `id: string`\n\n- `name?: string`\n  The display name of the item category.\n\n- `notes?: string`\n  Optional notes about the item category.\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; notes: string; object: 'item_category'; properties: { id: string; name: string; object: 'property'; }[]; type: string; unit_group: { id: string; name: string; object: 'unit_group'; }; updated_at: string; }`\n  ItemCategory represents a full item category resource.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `notes: string`\n  - `object: 'item_category'`\n  - `properties: { id: string; name: string; object: 'property'; }[]`\n  - `type: string`\n  - `unit_group: { id: string; name: string; object: 'unit_group'; }`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst itemCategory = await client.core.itemCategories.update('id');\n\nconsole.log(itemCategory);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.itemCategories.update',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst itemCategory = await client.core.itemCategories.update('id', { name: 'Updated Electronics' });\n\nconsole.log(itemCategory.id);",
      },
      python: {
        method: 'core.item_categories.update',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nitem_category = client.core.item_categories.update(\n    id="id",\n    name="Updated Electronics",\n)\nprint(item_category.id)',
      },
      kotlin: {
        method: 'core().itemCategories().update',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.itemcategories.ItemCategoryUpdateParams\nimport com.augno.api.models.core.itemcategories.ItemCategoryUpdateResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val itemCategory: ItemCategoryUpdateResponse = client.core().itemCategories().update("id")\n}',
      },
      go: {
        method: 'client.Core.ItemCategories.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\titemCategory, err := client.Core.ItemCategories.Update(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\taugno.CoreItemCategoryUpdateParams{\n\t\t\tName: augno.String("Updated Electronics"),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", itemCategory.ID)\n}\n',
      },
      ruby: {
        method: 'core.item_categories.update',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nitem_category = augno_client.core.item_categories.update("id")\n\nputs(item_category)',
      },
      csharp: {
        method: 'Core.ItemCategories.Update',
        example:
          'ItemCategoryUpdateParams parameters = new() { ID = "id" };\n\nvar itemCategory = await client.Core.ItemCategories.Update(parameters);\n\nConsole.WriteLine(itemCategory);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/item-categories/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'change_unit_group',
    endpoint: '/v1/core/item-categories/{id}/unit-groups/{unit_group_id}',
    httpMethod: 'put',
    summary: 'Change Item Category Unit Group',
    description:
      'This endpoint changes the unit group associated with an item category.\nThe unit group must be visible to the requesting account.\nDefault system categories cannot be modified.\nWhen the unit group is changed, all items in the category will be updated to use the new base unit asynchronously.',
    stainlessPath: '(resource) core.item_categories > (method) change_unit_group',
    qualified: 'client.core.itemCategories.changeUnitGroup',
    params: ['id: string;', 'unit_group_id: string;'],
    response:
      "{ id: string; created_at: string; name: string; notes: string; object: 'item_category'; properties: { id: string; name: string; object: 'property'; }[]; type: string; unit_group: { id: string; name: string; object: 'unit_group'; }; updated_at: string; }",
    markdown:
      "## change_unit_group\n\n`client.core.itemCategories.changeUnitGroup(id: string, unit_group_id: string): { id: string; created_at: string; name: string; notes: string; object: 'item_category'; properties: object[]; type: string; unit_group: object; updated_at: string; }`\n\n**put** `/v1/core/item-categories/{id}/unit-groups/{unit_group_id}`\n\nThis endpoint changes the unit group associated with an item category.\nThe unit group must be visible to the requesting account.\nDefault system categories cannot be modified.\nWhen the unit group is changed, all items in the category will be updated to use the new base unit asynchronously.\n\n### Parameters\n\n- `id: string`\n\n- `unit_group_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; notes: string; object: 'item_category'; properties: { id: string; name: string; object: 'property'; }[]; type: string; unit_group: { id: string; name: string; object: 'unit_group'; }; updated_at: string; }`\n  ItemCategory represents a full item category resource.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `notes: string`\n  - `object: 'item_category'`\n  - `properties: { id: string; name: string; object: 'property'; }[]`\n  - `type: string`\n  - `unit_group: { id: string; name: string; object: 'unit_group'; }`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst response = await client.core.itemCategories.changeUnitGroup('unit_group_id', { id: 'id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.itemCategories.changeUnitGroup',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.core.itemCategories.changeUnitGroup('unit_group_id', { id: 'id' });\n\nconsole.log(response.id);",
      },
      python: {
        method: 'core.item_categories.change_unit_group',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.core.item_categories.change_unit_group(\n    unit_group_id="unit_group_id",\n    id="id",\n)\nprint(response.id)',
      },
      kotlin: {
        method: 'core().itemCategories().changeUnitGroup',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.itemcategories.ItemCategoryChangeUnitGroupParams\nimport com.augno.api.models.core.itemcategories.ItemCategoryChangeUnitGroupResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: ItemCategoryChangeUnitGroupParams = ItemCategoryChangeUnitGroupParams.builder()\n        .id("id")\n        .unitGroupId("unit_group_id")\n        .build()\n    val response: ItemCategoryChangeUnitGroupResponse = client.core().itemCategories().changeUnitGroup(params)\n}',
      },
      go: {
        method: 'client.Core.ItemCategories.ChangeUnitGroup',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Core.ItemCategories.ChangeUnitGroup(\n\t\tcontext.TODO(),\n\t\t"unit_group_id",\n\t\taugno.CoreItemCategoryChangeUnitGroupParams{\n\t\t\tID: "id",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      ruby: {
        method: 'core.item_categories.change_unit_group',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nresponse = augno_client.core.item_categories.change_unit_group("unit_group_id", id: "id")\n\nputs(response)',
      },
      csharp: {
        method: 'Core.ItemCategories.ChangeUnitGroup',
        example:
          'ItemCategoryChangeUnitGroupParams parameters = new()\n{\n    ID = "id",\n    UnitGroupID = "unit_group_id",\n};\n\nvar response = await client.Core.ItemCategories.ChangeUnitGroup(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/item-categories/$ID/unit-groups/$UNIT_GROUP_ID \\\n    -X PUT \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'remove',
    endpoint: '/v1/core/item-categories/{id}/properties/{property_id}',
    httpMethod: 'delete',
    summary: 'Remove Item Category Property',
    description:
      'This endpoint removes a property from an item category.\nBoth the item category and the property must belong to the requesting account.\nDefault system categories cannot be modified.',
    stainlessPath: '(resource) core.item_categories.properties > (method) remove',
    qualified: 'client.core.itemCategories.properties.remove',
    params: ['id: string;', 'property_id: string;'],
    response:
      "{ id: string; created_at: string; name: string; notes: string; object: 'item_category'; properties: { id: string; name: string; object: 'property'; }[]; type: string; unit_group: { id: string; name: string; object: 'unit_group'; }; updated_at: string; }",
    markdown:
      "## remove\n\n`client.core.itemCategories.properties.remove(id: string, property_id: string): { id: string; created_at: string; name: string; notes: string; object: 'item_category'; properties: object[]; type: string; unit_group: object; updated_at: string; }`\n\n**delete** `/v1/core/item-categories/{id}/properties/{property_id}`\n\nThis endpoint removes a property from an item category.\nBoth the item category and the property must belong to the requesting account.\nDefault system categories cannot be modified.\n\n### Parameters\n\n- `id: string`\n\n- `property_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; notes: string; object: 'item_category'; properties: { id: string; name: string; object: 'property'; }[]; type: string; unit_group: { id: string; name: string; object: 'unit_group'; }; updated_at: string; }`\n  ItemCategory represents a full item category resource.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `notes: string`\n  - `object: 'item_category'`\n  - `properties: { id: string; name: string; object: 'property'; }[]`\n  - `type: string`\n  - `unit_group: { id: string; name: string; object: 'unit_group'; }`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst property = await client.core.itemCategories.properties.remove('property_id', { id: 'id' });\n\nconsole.log(property);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.itemCategories.properties.remove',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst property = await client.core.itemCategories.properties.remove('property_id', { id: 'id' });\n\nconsole.log(property.id);",
      },
      python: {
        method: 'core.item_categories.properties.remove',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nproperty = client.core.item_categories.properties.remove(\n    property_id="property_id",\n    id="id",\n)\nprint(property.id)',
      },
      kotlin: {
        method: 'core().itemCategories().properties().remove',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.itemcategories.properties.PropertyRemoveParams\nimport com.augno.api.models.core.itemcategories.properties.PropertyRemoveResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: PropertyRemoveParams = PropertyRemoveParams.builder()\n        .id("id")\n        .propertyId("property_id")\n        .build()\n    val property: PropertyRemoveResponse = client.core().itemCategories().properties().remove(params)\n}',
      },
      go: {
        method: 'client.Core.ItemCategories.Properties.Remove',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tproperty, err := client.Core.ItemCategories.Properties.Remove(\n\t\tcontext.TODO(),\n\t\t"property_id",\n\t\taugno.CoreItemCategoryPropertyRemoveParams{\n\t\t\tID: "id",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", property.ID)\n}\n',
      },
      ruby: {
        method: 'core.item_categories.properties.remove',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nproperty = augno_client.core.item_categories.properties.remove("property_id", id: "id")\n\nputs(property)',
      },
      csharp: {
        method: 'Core.ItemCategories.Properties.Remove',
        example:
          'PropertyRemoveParams parameters = new()\n{\n    ID = "id",\n    PropertyID = "property_id",\n};\n\nvar property = await client.Core.ItemCategories.Properties.Remove(parameters);\n\nConsole.WriteLine(property);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/item-categories/$ID/properties/$PROPERTY_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
  {
    name: 'add',
    endpoint: '/v1/core/item-categories/{id}/properties/{property_id}',
    httpMethod: 'put',
    summary: 'Add Item Category Property',
    description:
      'This endpoint adds a property to an item category.\nBoth the item category and the property must belong to the requesting account.\nDefault system categories cannot be modified.',
    stainlessPath: '(resource) core.item_categories.properties > (method) add',
    qualified: 'client.core.itemCategories.properties.add',
    params: ['id: string;', 'property_id: string;'],
    response:
      "{ id: string; created_at: string; name: string; notes: string; object: 'item_category'; properties: { id: string; name: string; object: 'property'; }[]; type: string; unit_group: { id: string; name: string; object: 'unit_group'; }; updated_at: string; }",
    markdown:
      "## add\n\n`client.core.itemCategories.properties.add(id: string, property_id: string): { id: string; created_at: string; name: string; notes: string; object: 'item_category'; properties: object[]; type: string; unit_group: object; updated_at: string; }`\n\n**put** `/v1/core/item-categories/{id}/properties/{property_id}`\n\nThis endpoint adds a property to an item category.\nBoth the item category and the property must belong to the requesting account.\nDefault system categories cannot be modified.\n\n### Parameters\n\n- `id: string`\n\n- `property_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; notes: string; object: 'item_category'; properties: { id: string; name: string; object: 'property'; }[]; type: string; unit_group: { id: string; name: string; object: 'unit_group'; }; updated_at: string; }`\n  ItemCategory represents a full item category resource.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `notes: string`\n  - `object: 'item_category'`\n  - `properties: { id: string; name: string; object: 'property'; }[]`\n  - `type: string`\n  - `unit_group: { id: string; name: string; object: 'unit_group'; }`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient();\n\nconst response = await client.core.itemCategories.properties.add('property_id', { id: 'id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.core.itemCategories.properties.add',
        example:
          "import AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.core.itemCategories.properties.add('property_id', { id: 'id' });\n\nconsole.log(response.id);",
      },
      python: {
        method: 'core.item_categories.properties.add',
        example:
          'import os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.core.item_categories.properties.add(\n    property_id="property_id",\n    id="id",\n)\nprint(response.id)',
      },
      kotlin: {
        method: 'core().itemCategories().properties().add',
        example:
          'package com.augno.api.example\n\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.core.itemcategories.properties.PropertyAddParams\nimport com.augno.api.models.core.itemcategories.properties.PropertyAddResponse\n\nfun main() {\n    val client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\n    val params: PropertyAddParams = PropertyAddParams.builder()\n        .id("id")\n        .propertyId("property_id")\n        .build()\n    val response: PropertyAddResponse = client.core().itemCategories().properties().add(params)\n}',
      },
      go: {
        method: 'client.Core.ItemCategories.Properties.Add',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Core.ItemCategories.Properties.Add(\n\t\tcontext.TODO(),\n\t\t"property_id",\n\t\taugno.CoreItemCategoryPropertyAddParams{\n\t\t\tID: "id",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      ruby: {
        method: 'core.item_categories.properties.add',
        example:
          'require "augno"\n\naugno_client = Augno::Client.new(\n  api_key: "My API Key",\n  environment: "environment_1" # defaults to "production"\n)\n\nresponse = augno_client.core.item_categories.properties.add("property_id", id: "id")\n\nputs(response)',
      },
      csharp: {
        method: 'Core.ItemCategories.Properties.Add',
        example:
          'PropertyAddParams parameters = new()\n{\n    ID = "id",\n    PropertyID = "property_id",\n};\n\nvar response = await client.Core.ItemCategories.Properties.Add(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://api.augno.com/v1/core/item-categories/$ID/properties/$PROPERTY_ID \\\n    -X PUT \\\n    -H "Authorization: Bearer $AUGNO_API_KEY"',
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'csharp',
    content:
      '# Augno Client C# API Library\n\nThe Augno Client C# SDK provides convenient access to the [Augno Client REST API](https://www.docs.augno.com) from applications written in   C#.\n\n## Installation\n\n```bash\ngit clone git@github.com:stainless-sdks/augno-csharp.git\ndotnet add reference augno-csharp/src/Augno\n```\n\n## Requirements\n\nThis library requires .NET Standard 2.0 or later.\n\n## Usage\n\nSee the [`examples`](examples) directory for complete and runnable examples.\n\n```csharp\nAugnoClientClient client = new();\n\nAIListToolGroupsParams parameters = new();\n\nvar response = await client.AI.ListToolGroups(parameters);\n\nConsole.WriteLine(response);\n```',
  },
  {
    language: 'go',
    content:
      '# Augno Client Go API Library\n\n<a href="https://pkg.go.dev/github.com/stainless-sdks/augno-go"><img src="https://pkg.go.dev/badge/github.com/stainless-sdks/augno-go.svg" alt="Go Reference"></a>\n\nThe Augno Client Go library provides convenient access to the [Augno Client REST API](https://www.docs.augno.com)\nfrom applications written in Go.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Augno Client MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=augno-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImF1Z25vLW1jcCJdLCJlbnYiOnsiQVVHTk9fQVBJX0tFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22augno-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22augno-mcp%22%5D%2C%22env%22%3A%7B%22AUGNO_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n\n\n```go\nimport (\n\t"github.com/stainless-sdks/augno-go" // imported as SDK_PackageName\n)\n```\n\n\n\nOr to pin the version:\n\n\n\n```sh\ngo get -u \'github.com/stainless-sdks/augno-go@v0.0.1\'\n```\n\n\n\n## Requirements\n\nThis library requires Go 1.22+.\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```go\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/augno-go"\n\t"github.com/stainless-sdks/augno-go/option"\n)\n\nfunc main() {\n\tclient := augno.NewClient(\n\t\toption.WithAPIKey("My API Key"),      // defaults to os.LookupEnv("AUGNO_API_KEY")\n\t\toption.WithEnvironmentEnvironment1(), // defaults to option.WithEnvironmentProduction()\n\t)\n\tresponse, err := client.AI.ListToolGroups(context.TODO(), augno.AIListToolGroupsParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n\n```\n\n### Request fields\n\nAll request parameters are wrapped in a generic `Field` type,\nwhich we use to distinguish zero values from null or omitted fields.\n\nThis prevents accidentally sending a zero value if you forget a required parameter,\nand enables explicitly sending `null`, `false`, `\'\'`, or `0` on optional parameters.\nAny field not specified is not sent.\n\nTo construct fields with values, use the helpers `String()`, `Int()`, `Float()`, or most commonly, the generic `F[T]()`.\nTo send a null, use `Null[T]()`, and to send a nonconforming value, use `Raw[T](any)`. For example:\n\n```go\nparams := FooParams{\n\tName: SDK_PackageName.F("hello"),\n\n\t// Explicitly send `"description": null`\n\tDescription: SDK_PackageName.Null[string](),\n\n\tPoint: SDK_PackageName.F(SDK_PackageName.Point{\n\t\tX: SDK_PackageName.Int(0),\n\t\tY: SDK_PackageName.Int(1),\n\n\t\t// In cases where the API specifies a given type,\n\t\t// but you want to send something else, use `Raw`:\n\t\tZ: SDK_PackageName.Raw[int64](0.01), // sends a float\n\t}),\n}\n```\n\n### Response objects\n\nAll fields in response structs are value types (not pointers or wrappers).\n\nIf a given field is `null`, not present, or invalid, the corresponding field\nwill simply be its zero value.\n\nAll response structs also include a special `JSON` field, containing more detailed\ninformation about each property, which you can use like so:\n\n```go\nif res.Name == "" {\n\t// true if `"name"` is either not present or explicitly null\n\tres.JSON.Name.IsNull()\n\n\t// true if the `"name"` key was not present in the response JSON at all\n\tres.JSON.Name.IsMissing()\n\n\t// When the API returns data that cannot be coerced to the expected type:\n\tif res.JSON.Name.IsInvalid() {\n\t\traw := res.JSON.Name.Raw()\n\n\t\tlegacyName := struct{\n\t\t\tFirst string `json:"first"`\n\t\t\tLast  string `json:"last"`\n\t\t}{}\n\t\tjson.Unmarshal([]byte(raw), &legacyName)\n\t\tname = legacyName.First + " " + legacyName.Last\n\t}\n}\n```\n\nThese `.JSON` structs also include an `Extras` map containing\nany properties in the json response that were not specified\nin the struct. This can be useful for API features not yet\npresent in the SDK.\n\n```go\nbody := res.JSON.ExtraFields["my_unexpected_field"].Raw()\n```\n\n### RequestOptions\n\nThis library uses the functional options pattern. Functions defined in the\n`SDK_PackageOptionName` package return a `RequestOption`, which is a closure that mutates a\n`RequestConfig`. These options can be supplied to the client or at individual\nrequests. For example:\n\n```go\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\t// Adds a header to every request made by the client\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "custom_header_info"),\n)\n\nclient.AI.ListToolGroups(context.TODO(), ...,\n\t// Override the header\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "some_other_custom_header_info"),\n\t// Add an undocumented field to the request body, using sjson syntax\n\tSDK_PackageOptionName.WithJSONSet("some.json.path", map[string]string{"my": "object"}),\n)\n```\n\nSee the [full list of request options](https://pkg.go.dev/github.com/stainless-sdks/augno-go/SDK_PackageOptionName).\n\n### Pagination\n\nThis library provides some conveniences for working with paginated list endpoints.\n\nYou can use `.ListAutoPaging()` methods to iterate through items across all pages:\n\n```go\niter := client.AI.ListUsageAutoPaging(context.TODO(), augno.AIListUsageParams{})\n// Automatically fetches more pages as needed.\nfor iter.Next() {\n\taiListUsageResponse := iter.Current()\n\tfmt.Printf("%+v\\n", aiListUsageResponse)\n}\nif err := iter.Err(); err != nil {\n\tpanic(err.Error())\n}\n```\n\nOr you can use simple `.List()` methods to fetch a single page and receive a standard response object\nwith additional helper methods like `.GetNextPage()`, e.g.:\n\n```go\npage, err := client.AI.ListUsage(context.TODO(), augno.AIListUsageParams{})\nfor page != nil {\n\tfor _, ai := range page.Data {\n\t\tfmt.Printf("%+v\\n", ai)\n\t}\n\tpage, err = page.GetNextPage()\n}\nif err != nil {\n\tpanic(err.Error())\n}\n```\n\n### Errors\n\nWhen the API returns a non-success status code, we return an error with type\n`*SDK_PackageName.Error`. This contains the `StatusCode`, `*http.Request`, and\n`*http.Response` values of the request, as well as the JSON of the error body\n(much like other response objects in the SDK).\n\nTo handle errors, we recommend that you use the `errors.As` pattern:\n\n```go\n_, err := client.AI.ListToolGroups(context.TODO(), augno.AIListToolGroupsParams{})\nif err != nil {\n\tvar apierr *augno.Error\n\tif errors.As(err, &apierr) {\n\t\tprintln(string(apierr.DumpRequest(true)))  // Prints the serialized HTTP request\n\t\tprintln(string(apierr.DumpResponse(true))) // Prints the serialized HTTP response\n\t}\n\tpanic(err.Error()) // GET "/v1/ai/tool-groups": 400 Bad Request { ... }\n}\n```\n\nWhen other errors occur, they are returned unwrapped; for example,\nif HTTP transport fails, you might receive `*url.Error` wrapping `*net.OpError`.\n\n### Timeouts\n\nRequests do not time out by default; use context to configure a timeout for a request lifecycle.\n\nNote that if a request is [retried](#retries), the context timeout does not start over.\nTo set a per-retry timeout, use `SDK_PackageOptionName.WithRequestTimeout()`.\n\n```go\n// This sets the timeout for the request, including all the retries.\nctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)\ndefer cancel()\nclient.AI.ListToolGroups(\n\tctx,\n\taugno.AIListToolGroupsParams{},\n\t// This sets the per-retry timeout\n\toption.WithRequestTimeout(20*time.Second),\n)\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads in multipart requests are typed as\n`param.Field[io.Reader]`. The contents of the `io.Reader` will by default be sent as a multipart form\npart with the file name of "anonymous_file" and content-type of "application/octet-stream".\n\nThe file name and content-type can be customized by implementing `Name() string` or `ContentType()\nstring` on the run-time type of `io.Reader`. Note that `os.File` implements `Name() string`, so a\nfile returned by `os.Open` will be sent with the file name on disk.\n\nWe also provide a helper `SDK_PackageName.FileParam(reader io.Reader, filename string, contentType string)`\nwhich can be used to wrap any `io.Reader` with the appropriate file name and content type.\n\n\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nWe retry by default all connection errors, 408 Request Timeout, 409 Conflict, 429 Rate Limit,\nand >=500 Internal errors.\n\nYou can use the `WithMaxRetries` option to configure or disable this:\n\n```go\n// Configure the default for all requests:\nclient := augno.NewClient(\n\toption.WithMaxRetries(0), // default is 2\n)\n\n// Override per-request:\nclient.AI.ListToolGroups(\n\tcontext.TODO(),\n\taugno.AIListToolGroupsParams{},\n\toption.WithMaxRetries(5),\n)\n```\n\n\n### Accessing raw response data (e.g. response headers)\n\nYou can access the raw HTTP response data by using the `option.WithResponseInto()` request option. This is useful when\nyou need to examine response headers, status codes, or other details.\n\n```go\n// Create a variable to store the HTTP response\nvar response *http.Response\nresponse, err := client.AI.ListToolGroups(\n\tcontext.TODO(),\n\taugno.AIListToolGroupsParams{},\n\toption.WithResponseInto(&response),\n)\nif err != nil {\n\t// handle error\n}\nfmt.Printf("%+v\\n", response)\n\nfmt.Printf("Status Code: %d\\n", response.StatusCode)\nfmt.Printf("Headers: %+#v\\n", response.Header)\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.Get`, `client.Post`, and other HTTP verbs.\n`RequestOptions` on the client, such as retries, will be respected when making these requests.\n\n```go\nvar (\n    // params can be an io.Reader, a []byte, an encoding/json serializable object,\n    // or a "…Params" struct defined in this library.\n    params map[string]interface{}\n\n    // result can be an []byte, *http.Response, a encoding/json deserializable object,\n    // or a model defined in this library.\n    result *http.Response\n)\nerr := client.Post(context.Background(), "/unspecified", params, &result)\nif err != nil {\n    …\n}\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use either the `SDK_PackageOptionName.WithQuerySet()`\nor the `SDK_PackageOptionName.WithJSONSet()` methods.\n\n```go\nparams := FooNewParams{\n    ID:   SDK_PackageName.F("id_xxxx"),\n    Data: SDK_PackageName.F(FooNewParamsData{\n        FirstName: SDK_PackageName.F("John"),\n    }),\n}\nclient.Foo.New(context.Background(), params, SDK_PackageOptionName.WithJSONSet("data.last_name", "Doe"))\n```\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may either access the raw JSON of the response as a string\nwith `result.JSON.RawJSON()`, or get the raw JSON of a particular field on the result with\n`result.JSON.Foo.Raw()`.\n\nAny fields that are not present on the response struct will be saved and can be accessed by `result.JSON.ExtraFields()` which returns the extra fields as a `map[string]Field`.\n\n### Middleware\n\nWe provide `SDK_PackageOptionName.WithMiddleware` which applies the given\nmiddleware to requests.\n\n```go\nfunc Logger(req *http.Request, next SDK_PackageOptionName.MiddlewareNext) (res *http.Response, err error) {\n\t// Before the request\n\tstart := time.Now()\n\tLogReq(req)\n\n\t// Forward the request to the next handler\n\tres, err = next(req)\n\n\t// Handle stuff after the request\n\tend := time.Now()\n\tLogRes(res, err, start - end)\n\n    return res, err\n}\n\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\tSDK_PackageOptionName.WithMiddleware(Logger),\n)\n```\n\nWhen multiple middlewares are provided as variadic arguments, the middlewares\nare applied left to right. If `SDK_PackageOptionName.WithMiddleware` is given\nmultiple times, for example first in the client then the method, the\nmiddleware in the client will run first and the middleware given in the method\nwill run next.\n\nYou may also replace the default `http.Client` with\n`SDK_PackageOptionName.WithHTTPClient(client)`. Only one http client is\naccepted (this overwrites any previous client) and receives requests after any\nmiddleware has been applied.\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stainless-sdks/augno-go/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'kotlin',
    content:
      '# Augno Client Kotlin API Library\n\n\n[![Maven Central](https://img.shields.io/maven-central/v/com.augno.api/augno-client-kotlin)](https://central.sonatype.com/artifact/com.augno.api/augno-client-kotlin/0.0.1)\n[![javadoc](https://javadoc.io/badge2/com.augno.api/augno-client-kotlin/0.0.1/javadoc.svg)](https://javadoc.io/doc/com.augno.api/augno-client-kotlin/0.0.1)\n\n\nThe Augno Client Kotlin SDK provides convenient access to the [Augno Client REST API](https://www.docs.augno.com)   from applications written in Kotlin.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Augno Client MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=augno-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImF1Z25vLW1jcCJdLCJlbnYiOnsiQVVHTk9fQVBJX0tFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22augno-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22augno-mcp%22%5D%2C%22env%22%3A%7B%22AUGNO_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\nThe REST API documentation can be found on [www.docs.augno.com](https://www.docs.augno.com). KDocs are available on [javadoc.io](https://javadoc.io/doc/com.augno.api/augno-client-kotlin/0.0.1).\n\n## Installation\n\n### Gradle\n\n~~~kotlin\nimplementation("com.augno.api:augno-client-kotlin:0.0.1")\n~~~\n\n### Maven\n\n~~~xml\n<dependency>\n  <groupId>com.augno.api</groupId>\n  <artifactId>augno-client-kotlin</artifactId>\n  <version>0.0.1</version>\n</dependency>\n~~~\n\n## Requirements\n\nThis library requires Java 8 or later.\n\n## Usage\n\n```kotlin\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.ai.AiListToolGroupsParams\nimport com.augno.api.models.ai.AiListToolGroupsResponse\n\n// Configures using the `augnoclient.augnoApiKey` and `augnoclient.baseUrl` system properties\n// Or configures using the `AUGNO_API_KEY` and `AUGNO_CLIENT_BASE_URL` environment variables\nval client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\nval response: AiListToolGroupsResponse = client.ai().listToolGroups()\n```\n\n## Client configuration\n\nConfigure the client using system properties or environment variables:\n\n```kotlin\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\n\n// Configures using the `augnoclient.augnoApiKey` and `augnoclient.baseUrl` system properties\n// Or configures using the `AUGNO_API_KEY` and `AUGNO_CLIENT_BASE_URL` environment variables\nval client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n```\n\nOr manually:\n\n```kotlin\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\n\nval client: AugnoClientClient = AugnoClientOkHttpClient.builder()\n    .apiKey("My API Key")\n    .build()\n```\n\nOr using a combination of the two approaches:\n\n```kotlin\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\n\nval client: AugnoClientClient = AugnoClientOkHttpClient.builder()\n    // Configures using the `augnoclient.augnoApiKey` and `augnoclient.baseUrl` system properties\n    // Or configures using the `AUGNO_API_KEY` and `AUGNO_CLIENT_BASE_URL` environment variables\n    .fromEnv()\n    .apiKey("My API Key")\n    .build()\n```\n\nSee this table for the available options:\n\n| Setter    | System property           | Environment variable    | Required | Default value             |\n| --------- | ------------------------- | ----------------------- | -------- | ------------------------- |\n| `apiKey`  | `augnoclient.augnoApiKey` | `AUGNO_API_KEY`         | false    | -                         |\n| `baseUrl` | `augnoclient.baseUrl`     | `AUGNO_CLIENT_BASE_URL` | true     | `"https://api.augno.com"` |\n\nSystem properties take precedence over environment variables.\n\n> [!TIP]\n> Don\'t create more than one client in the same application. Each client has a connection pool and\n> thread pools, which are more efficient to share between requests.\n\n### Modifying configuration\n\nTo temporarily use a modified client configuration, while reusing the same connection and thread       pools, call `withOptions()` on any client or service:\n\n```kotlin\nimport com.augno.api.client.AugnoClientClient\n\nval clientWithOptions: AugnoClientClient = client.withOptions {\n    it.baseUrl("https://example.com")\n    it.maxRetries(42)\n}\n```\n\nThe `withOptions()` method does not affect the original client or service.\n\n## Requests and responses\n\nTo send a request to the Augno Client API, build an instance of some `Params` class and pass it to the     corresponding client method. When the response is received, it will be deserialized into an instance of     a Kotlin class.\n\nFor example, `client.ai().listToolGroups(...)` should be called with an instance of `AiListToolGroupsParams`, and it     will return an instance of `AiListToolGroupsResponse`.\n\n## Immutability\n\nEach class in the SDK has an associated   [builder](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java)   or factory method for constructing it.\n\nEach class is [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)   once constructed. If the class has an associated builder, then it has a `toBuilder()` method, which can   be used to convert it back to a builder for making a modified copy.\n\nBecause each class is immutable, builder modification will _never_ affect already built class instances.\n\n## Asynchronous execution\n\nThe default client is synchronous. To switch to asynchronous execution, call the `async()` method:\n\n```kotlin\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.models.ai.AiListToolGroupsParams\nimport com.augno.api.models.ai.AiListToolGroupsResponse\n\n// Configures using the `augnoclient.augnoApiKey` and `augnoclient.baseUrl` system properties\n// Or configures using the `AUGNO_API_KEY` and `AUGNO_CLIENT_BASE_URL` environment variables\nval client: AugnoClientClient = AugnoClientOkHttpClient.fromEnv()\n\nval response: AiListToolGroupsResponse = client.async().ai().listToolGroups()\n```\n\nOr create an asynchronous client from the beginning:\n\n```kotlin\nimport com.augno.api.client.AugnoClientClientAsync\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClientAsync\nimport com.augno.api.models.ai.AiListToolGroupsParams\nimport com.augno.api.models.ai.AiListToolGroupsResponse\n\n// Configures using the `augnoclient.augnoApiKey` and `augnoclient.baseUrl` system properties\n// Or configures using the `AUGNO_API_KEY` and `AUGNO_CLIENT_BASE_URL` environment variables\nval client: AugnoClientClientAsync = AugnoClientOkHttpClientAsync.fromEnv()\n\nval response: AiListToolGroupsResponse = client.ai().listToolGroups()\n```\n\nThe asynchronous client supports the same options as the synchronous one, except most methods are [suspending](https://kotlinlang.org/docs/coroutines-guide.html).\n\n\n\n\n\n\n\n## Raw responses\n\nThe SDK defines methods that deserialize responses into instances of Kotlin classes.       However, these methods don\'t provide access to the response headers, status code, or the raw response       body.\n\nTo access this data, prefix any HTTP method call on a client or service with `withRawResponse()`:\n\n```kotlin\nimport com.augno.api.core.http.Headers\nimport com.augno.api.core.http.HttpResponseFor\nimport com.augno.api.models.ai.AiListToolGroupsParams\nimport com.augno.api.models.ai.AiListToolGroupsResponse\n\nval response: HttpResponseFor<AiListToolGroupsResponse> = client.ai().withRawResponse().listToolGroups()\n\nval statusCode: Int = response.statusCode()\nval headers: Headers = response.headers()\n```\n\nYou can still deserialize the response into an instance of a Kotlin class if needed:\n\n```kotlin\nimport com.augno.api.models.ai.AiListToolGroupsResponse\n\nval parsedResponse: AiListToolGroupsResponse = response.parse()\n```\n\n## Error handling\n\nThe SDK throws custom unchecked exception types:\n\n- [`AugnoClientServiceException`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/errors/AugnoClientServiceException.kt): Base class for HTTP errors. See this table for which exception       subclass is thrown for each HTTP status code:\n\n  | Status | Exception                                          |\n  | ------ | -------------------------------------------------- |\n  | 400    | [`BadRequestException`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/errors/BadRequestException.kt)           |\n  | 401    | [`UnauthorizedException`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/errors/UnauthorizedException.kt)         |\n  | 403    | [`PermissionDeniedException`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/errors/PermissionDeniedException.kt)     |\n  | 404    | [`NotFoundException`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/errors/NotFoundException.kt)             |\n  | 422    | [`UnprocessableEntityException`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/errors/UnprocessableEntityException.kt)  |\n  | 429    | [`RateLimitException`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/errors/RateLimitException.kt)            |\n  | 5xx    | [`InternalServerException`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/errors/InternalServerException.kt)       |\n  | others | [`UnexpectedStatusCodeException`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/errors/UnexpectedStatusCodeException.kt) |\n\n- [`AugnoClientIoException`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/errors/AugnoClientIoException.kt): I/O networking errors.\n\n- [`AugnoClientRetryableException`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/errors/AugnoClientRetryableException.kt): Generic error indicating a failure that could be retried by the client.\n\n- [`AugnoClientInvalidDataException`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/errors/AugnoClientInvalidDataException.kt): Failure to interpret successfully parsed data. For example,       when accessing a property that\'s supposed to be required, but the API unexpectedly omitted it from the       response.\n\n- [`AugnoClientException`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/errors/AugnoClientException.kt): Base class for all exceptions. Most errors will result in one of the       previously mentioned ones, but completely generic errors may be thrown using the base class.\n\n## Pagination\n\nThe SDK defines methods that return a paginated lists of results. It provides convenient ways to access     the results either one page at a time or item-by-item across all pages.\n\n### Auto-pagination\n\nTo iterate through all results across all pages, use the `autoPager()` method, which automatically     fetches more pages as needed.\n\nWhen using the synchronous client, the method returns a [`Sequence`](https://kotlinlang.org/docs/sequences.html)\n\n```kotlin\nimport com.augno.api.models.ai.AiListUsagePage\n\nval page: AiListUsagePage = client.ai().listUsage()\npage.autoPager()\n    .take(50)\n    .forEach { ai -> println(ai) }\n```\n\nWhen using the asynchronous client, the method returns a [`Flow`](https://kotlinlang.org/docs/flow.html):\n\n```kotlin\nimport com.augno.api.models.ai.AiListUsagePageAsync\n\nval page: AiListUsagePageAsync = client.async().ai().listUsage()\npage.autoPager()\n    .take(50)\n    .forEach { ai -> println(ai) }\n```\n\n### Manual pagination\n\nTo access individual page items and manually request the next page, use the `items()`,\n`hasNextPage()`, and `nextPage()` methods:\n\n```kotlin\nimport com.augno.api.models.ai.AiListUsagePage\nimport com.augno.api.models.ai.AiListUsageResponse\n\nval page: AiListUsagePage = client.ai().listUsage()\nwhile (true) {\n    for (ai in page.items()) {\n        println(ai)\n    }\n\n    if (!page.hasNextPage()) {\n        break\n    }\n\n    page = page.nextPage()\n}\n```\n\n## Logging\n\nEnable logging by setting the `AUGNO_CLIENT_LOG` environment variable to   `info`:\n\n```sh\nexport AUGNO_CLIENT_LOG=info\n```\n\nOr to `debug` for more verbose logging:\n\n```sh\nexport AUGNO_CLIENT_LOG=debug\n```\n\nOr configure the client manually using the `logLevel` method:\n\n```kotlin\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.core.LogLevel\n\nval client: AugnoClientClient = AugnoClientOkHttpClient.builder()\n    .fromEnv()\n    .logLevel(LogLevel.INFO)\n    .build()\n```\n\n## ProGuard and R8\n\nAlthough the SDK uses reflection, it is still usable with     [ProGuard](https://github.com/Guardsquare/proguard) and     [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) because     `augno-client-kotlin-core` is published with a     [configuration file](augno-client-kotlin-core/src/main/resources/META-INF/proguard/augno-client-kotlin-core.pro) containing     [keep rules](https://www.guardsquare.com/manual/configuration/usage).\n\nProGuard and R8 should automatically detect and use the published rules, but you can also manually copy     the keep rules if necessary.\n\n\n\n\n\n## Jackson\n\nThe SDK depends on [Jackson](https://github.com/FasterXML/jackson) for JSON     serialization/deserialization. It is compatible with version 2.13.4 or higher,     but depends on version 2.18.2 by default.\n\nThe SDK throws an exception if it detects an incompatible Jackson version at runtime (e.g. if the     default version was overridden in your Maven or Gradle config).\n\nIf the SDK threw an exception, but you\'re _certain_ the version is compatible, then disable the version     check using the `checkJacksonVersionCompatibility` on [`AugnoClientOkHttpClient`](augno-client-kotlin-client-okhttp/src/main/kotlin/com/augno/api/client/okhttp/AugnoClientOkHttpClient.kt) or     [`AugnoClientOkHttpClientAsync`](augno-client-kotlin-client-okhttp/src/main/kotlin/com/augno/api/client/okhttp/AugnoClientOkHttpClientAsync.kt).\n\n> [!CAUTION]\n> We make no guarantee that the SDK works correctly when the Jackson version check is disabled.\n\nAlso note that there are bugs in older Jackson versions that can affect the SDK. We don\'t work around all     Jackson bugs ([example](https://github.com/FasterXML/jackson-databind/issues/3240)) and expect users to     upgrade Jackson for those instead.\n\n## Network options\n\n### Retries\n\nThe SDK automatically retries 2 times by default, with a short exponential backoff between requests.\n\nOnly the following error types are retried:\n- Connection errors (for example, due to a network connectivity problem)\n- 408 Request Timeout\n- 409 Conflict\n- 429 Rate Limit\n- 5xx Internal\n\nThe API may also explicitly instruct the SDK to retry or not retry a request.\n\nTo set a custom number of retries, configure the client using the `maxRetries` method:\n\n```kotlin\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\n\nval client: AugnoClientClient = AugnoClientOkHttpClient.builder()\n    .fromEnv()\n    .maxRetries(4)\n    .build()\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default.\n\nTo set a custom timeout, configure the method call using the `timeout` method:\n\n```kotlin\nimport com.augno.api.models.ai.AiListToolGroupsResponse\n\nval response: AiListToolGroupsResponse = client.ai().listToolGroups(RequestOptions.builder().timeout(Duration.ofSeconds(30)).build())\n```\n\nOr configure the default for all method calls at the client level:\n\n```kotlin\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport java.time.Duration\n\nval client: AugnoClientClient = AugnoClientOkHttpClient.builder()\n    .fromEnv()\n    .timeout(Duration.ofSeconds(30))\n    .build()\n```\n\n### Proxies\n\nTo route requests through a proxy, configure the client using the `proxy` method:\n\n```kotlin\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport java.net.InetSocketAddress\nimport java.net.Proxy\n\nval client: AugnoClientClient = AugnoClientOkHttpClient.builder()\n    .fromEnv()\n    .proxy(Proxy(\n      Proxy.Type.HTTP, InetSocketAddress(\n        "https://example.com", 8080\n      )\n    ))\n    .build()\n```\n\nIf the proxy responds with `407 Proxy Authentication Required`, supply credentials by also   configuring `proxyAuthenticator`:\n\n```kotlin\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport com.augno.api.core.http.ProxyAuthenticator\n\nval client: AugnoClientClient = AugnoClientOkHttpClient.builder()\n    .fromEnv()\n    .proxy(...)\n    // Or a custom implementation of `ProxyAuthenticator`.\n    .proxyAuthenticator(ProxyAuthenticator.basic("username", "password"))\n    .build()\n```\n\n### Connection pooling\n\nTo customize the underlying OkHttp connection pool, configure the client using the   `maxIdleConnections` and `keepAliveDuration` methods:\n\n```kotlin\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\nimport java.time.Duration\n\nval client: AugnoClientClient = AugnoClientOkHttpClient.builder()\n    .fromEnv()\n    // If `maxIdleConnections` is set, then `keepAliveDuration` must be set, and vice versa.\n    .maxIdleConnections(10)\n    .keepAliveDuration(Duration.ofMinutes(2))\n    .build()\n```\n\nIf both options are unset, OkHttp\'s default connection pool settings are used.\n\n### HTTPS\n\n> [!NOTE]\n> Most applications should not call these methods, and instead use the system defaults. The defaults include\n> special optimizations that can be lost if the implementations are modified.\n\nTo configure how HTTPS connections are secured, configure the client using the `sslSocketFactory`,   `trustManager`, and `hostnameVerifier` methods:\n\n```kotlin\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\n\nval client: AugnoClientClient = AugnoClientOkHttpClient.builder()\n    .fromEnv()\n    // If `sslSocketFactory` is set, then `trustManager` must be set, and vice versa.\n    .sslSocketFactory(yourSSLSocketFactory)\n    .trustManager(yourTrustManager)\n    .hostnameVerifier(yourHostnameVerifier)\n    .build()\n```\n\n### Environments\n\nThe SDK sends requests to the production by default. To send requests to a different     environment, configure the client like so:\n\n```kotlin\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\n\nval client: AugnoClientClient = AugnoClientOkHttpClient.builder()\n    .fromEnv()\n    .environment1()\n    .build()\n```\n\n### Custom HTTP client\n\nThe SDK consists of three artifacts:\n- `augno-client-kotlin-core`\n  - Contains core SDK logic\n  - Does not depend on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`AugnoClientClient`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/client/AugnoClientClient.kt), [`AugnoClientClientAsync`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/client/AugnoClientClientAsync.kt),             [`AugnoClientClientImpl`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/client/AugnoClientClientImpl.kt), and [`AugnoClientClientAsyncImpl`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/client/AugnoClientClientAsyncImpl.kt), all of which can             work with any HTTP client\n- `augno-client-kotlin-client-okhttp`\n  - Depends on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`AugnoClientOkHttpClient`](augno-client-kotlin-client-okhttp/src/main/kotlin/com/augno/api/client/okhttp/AugnoClientOkHttpClient.kt) and [`AugnoClientOkHttpClientAsync`](augno-client-kotlin-client-okhttp/src/main/kotlin/com/augno/api/client/okhttp/AugnoClientOkHttpClientAsync.kt), which             provide a way to construct [`AugnoClientClientImpl`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/client/AugnoClientClientImpl.kt) and             [`AugnoClientClientAsyncImpl`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/client/AugnoClientClientAsyncImpl.kt), respectively, using OkHttp\n- `augno-client-kotlin`\n  - Depends on and exposes the APIs of both `augno-client-kotlin-core` and `augno-client-kotlin-client-okhttp`\n  - Does not have its own logic\n\nThis structure allows replacing the SDK\'s default HTTP client without pulling in unnecessary dependencies.\n\n#### Customized [`OkHttpClient`](https://square.github.io/okhttp/3.x/okhttp/okhttp3/OkHttpClient.html)\n\n> [!TIP]\n> Try the available [network options](#network-options) before replacing the default client.\n\nTo use a customized `OkHttpClient`:\n\n1. Replace your [`augno-client-kotlin` dependency](#installation) with `augno-client-kotlin-core`\n2. Copy `augno-client-kotlin-client-okhttp`\'s [`OkHttpClient`](augno-client-kotlin-client-okhttp/src/main/kotlin/com/augno/api/client/okhttp/OkHttpClient.kt) class into your code and        customize it\n3. Construct [`AugnoClientClientImpl`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/client/AugnoClientClientImpl.kt) or [`AugnoClientClientAsyncImpl`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/client/AugnoClientClientAsyncImpl.kt), similarly to        [`AugnoClientOkHttpClient`](augno-client-kotlin-client-okhttp/src/main/kotlin/com/augno/api/client/okhttp/AugnoClientOkHttpClient.kt) or [`AugnoClientOkHttpClientAsync`](augno-client-kotlin-client-okhttp/src/main/kotlin/com/augno/api/client/okhttp/AugnoClientOkHttpClientAsync.kt), using your        customized client\n\n### Completely custom HTTP client\n\nTo use a completely custom HTTP client:\n\n1. Replace your [`augno-client-kotlin` dependency](#installation) with `augno-client-kotlin-core`\n2. Write a class that implements the [`HttpClient`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/core/http/HttpClient.kt) interface\n3. Construct [`AugnoClientClientImpl`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/client/AugnoClientClientImpl.kt) or [`AugnoClientClientAsyncImpl`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/client/AugnoClientClientAsyncImpl.kt), similarly to        [`AugnoClientOkHttpClient`](augno-client-kotlin-client-okhttp/src/main/kotlin/com/augno/api/client/okhttp/AugnoClientOkHttpClient.kt) or [`AugnoClientOkHttpClientAsync`](augno-client-kotlin-client-okhttp/src/main/kotlin/com/augno/api/client/okhttp/AugnoClientOkHttpClientAsync.kt), using your new        client class\n\n## Undocumented API functionality\n\nThe SDK is typed for convenient usage of the documented API. However, it also supports working with undocumented or not yet supported parts of the API.\n\n### Parameters\n\nTo set undocumented parameters, call the `putAdditionalHeader`, `putAdditionalQueryParam`, or       `putAdditionalBodyProperty` methods on any `Params` class:\n\n```kotlin\nimport com.augno.api.core.JsonValue\nimport com.augno.api.models.ai.AiListToolGroupsParams\n\nval params: AiListToolGroupsParams = AiListToolGroupsParams.builder()\n    .putAdditionalHeader("Secret-Header", "42")\n    .putAdditionalQueryParam("secret_query_param", "42")\n    .putAdditionalBodyProperty("secretProperty", JsonValue.from("42"))\n    .build()\n```\n\nThese can be accessed on the built object later using the `_additionalHeaders()`,       `_additionalQueryParams()`, and `_additionalBodyProperties()` methods.\n\nTo set undocumented parameters on _nested_ headers, query params, or body classes, call the         `putAdditionalProperty` method on the nested class:\n\n```kotlin\nimport com.augno.api.core.JsonValue\nimport com.augno.api.models.ai.agents.AgentCreateParams\nimport com.augno.api.models.ai.agents.AgentDefinitionConfig\n\nval params: AgentCreateParams = AgentCreateParams.builder()\n    .config(AgentDefinitionConfig.builder()\n        .putAdditionalProperty("secretProperty", JsonValue.from("42"))\n        .build())\n    .build()\n```\n\nThese properties can be accessed on the nested built object later using the         `_additionalProperties()` method.\n\nTo set a documented parameter or property to an undocumented or not yet supported _value_, pass a       [`JsonValue`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/core/Values.kt) object to its setter:\n\n```kotlin\nimport com.augno.api.models.ai.AiListToolGroupsParams\n\nval params: AiListToolGroupsParams = AiListToolGroupsParams.builder().build()\n```\n\nThe most straightforward way to create a [`JsonValue`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/core/Values.kt) is using its       `from(...)` method:\n\n```kotlin\nimport com.augno.api.core.JsonValue\n\n// Create primitive JSON values\nval nullValue: JsonValue = JsonValue.from(null)\nval booleanValue: JsonValue = JsonValue.from(true)\nval numberValue: JsonValue = JsonValue.from(42)\nval stringValue: JsonValue = JsonValue.from("Hello World!")\n\n// Create a JSON array value equivalent to `["Hello", "World"]`\nval arrayValue: JsonValue = JsonValue.from(listOf(\n  "Hello", "World"\n))\n\n// Create a JSON object value equivalent to `{ "a": 1, "b": 2 }`\nval objectValue: JsonValue = JsonValue.from(mapOf(\n  "a" to 1, "b" to 2\n))\n\n// Create an arbitrarily nested JSON equivalent to:\n// {\n//   "a": [1, 2],\n//   "b": [3, 4]\n// }\nval complexValue: JsonValue = JsonValue.from(mapOf(\n  "a" to listOf(\n    1, 2\n  ), "b" to listOf(\n    3, 4\n  )\n))\n```\n\nNormally a `Builder` class\'s `build` method will throw         [`IllegalStateException`](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html)         if any required parameter or property is unset.\n\nTo forcibly omit a required parameter or property, pass [`JsonMissing`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/core/Values.kt):\n\n```kotlin\nimport com.augno.api.core.JsonMissing\nimport com.augno.api.models.ai.AiListToolGroupsParams\nimport com.augno.api.models.ai.agents.AgentCreateParams\nimport com.augno.api.models.ai.agents.AgentDefinitionConfig\nimport com.augno.api.models.ai.agents.ToolInput\n\nval params: AiListToolGroupsParams = AgentCreateParams.builder()\n    .config(AgentDefinitionConfig.builder()\n        .model("claude-sonnet-4")\n        .provider("anthropic")\n        .systemPrompt("You are an order processing agent. Parse incoming emails and create draft orders.")\n        .temperature(0.2)\n        .triggerConfig(AgentDefinitionConfig.TriggerConfig.builder()\n            .cronSchedule(null)\n            .addEventFilter("email.received")\n            .timezone(null)\n            .build())\n        .build())\n    .description("Monitors inventory levels and creates restock alerts.")\n    .name("Inventory Monitor")\n    .roleId("rl_01gf7a8200er3ar3pkfrb6kk29")\n    .slug("inventory_monitor")\n    .addTool(ToolInput.builder()\n        .configJson("config_json")\n        .requireReview(true)\n        .sortOrder(1L)\n        .toolId("tdef_01k0b1seed0searchproduct0")\n        .build())\n    .triggerType(AgentCreateParams.TriggerType.EVENT)\n    .categoryCode(JsonMissing.of())\n    .build()\n```\n\n### Response properties\n\nTo access undocumented response properties, call the `_additionalProperties()` method:\n\n```kotlin\nimport com.augno.api.core.JsonBoolean\nimport com.augno.api.core.JsonNull\nimport com.augno.api.core.JsonNumber\nimport com.augno.api.core.JsonValue\n\nval additionalProperties: Map<String, JsonValue> = client.ai().listToolGroups(params)._additionalProperties()\nval secretPropertyValue: JsonValue = additionalProperties.get("secretProperty")\n\nval result = when (secretPropertyValue) {\n    is JsonNull -> "It\'s null!"\n    is JsonBoolean -> "It\'s a boolean!"\n    is JsonNumber -> "It\'s a number!"\n    // Other types include `JsonMissing`, `JsonString`, `JsonArray`, and `JsonObject`\n    else -> "It\'s something else!"\n}\n```\n\nTo access a property\'s raw JSON value, which may be undocumented, call its `_` prefixed method:\n\n```kotlin\nimport com.augno.api.core.JsonField\n\nval field: JsonField<Any> = client.ai().listToolGroups(params)._field()\n\nif (field.isMissing()) {\n  // The property is absent from the JSON response\n} else if (field.isNull()) {\n  // The property was set to literal null\n} else {\n  // Check if value was provided as a string\n  // Other methods include `asNumber()`, `asBoolean()`, etc.\n  val jsonString: String? = field.asString();\n\n  // Try to deserialize into a custom type\n  val myObject: MyClass = field.asUnknown()!!.convert(MyClass::class.java)\n}\n```\n\n### Response validation\n\nIn rare cases, the API may return a response that doesn\'t match the expected type. For example, the SDK     may expect a property to contain a `String`, but the API could return something else.\n\nBy default, the SDK will not throw an exception in this case. It will throw     [`AugnoClientInvalidDataException`](augno-client-kotlin-core/src/main/kotlin/com/augno/api/errors/AugnoClientInvalidDataException.kt) only if you directly access the property.\n\nValidating the response is _not_ forwards compatible with new types from the API for existing fields.\n\nIf you would still prefer to check that the response is completely well-typed upfront, then either call     `validate()`:\n\n```kotlin\nimport com.augno.api.models.ai.AiListToolGroupsResponse\n\nval response: AiListToolGroupsResponse = client.ai().listToolGroups(params).validate()\n```\n\nOr configure the method call to validate the response using the `responseValidation` method:\n\n```kotlin\nimport com.augno.api.models.ai.AiListToolGroupsResponse\n\nval response: AiListToolGroupsResponse = client.ai().listToolGroups(RequestOptions.builder().responseValidation(true).build())\n```\n\nOr configure the default for all method calls at the client level:\n\n```kotlin\nimport com.augno.api.client.AugnoClientClient\nimport com.augno.api.client.okhttp.AugnoClientOkHttpClient\n\nval client: AugnoClientClient = AugnoClientOkHttpClient.builder()\n    .fromEnv()\n    .responseValidation(true)\n    .build()\n```\n\n## FAQ\n\n### Why don\'t you use plain `enum` classes?\n\nKotlin `enum` classes are not trivially   [forwards compatible](https://www.stainless.com/blog/making-java-enums-forwards-compatible). Using them in   the SDK could cause runtime exceptions if the API is updated to respond with a new enum value.\n\n### Why do you represent fields using `JsonField<T>` instead of just plain `T`?\n\nUsing `JsonField<T>` enables a few features:\n\n- Allowing usage of [undocumented API functionality](#undocumented-api-functionality)\n- Lazily [validating the API response against the expected shape](#response-validation)\n- Representing absent vs explicitly null values\n\n### Why don\'t you use [`data` classes](https://kotlinlang.org/docs/data-classes.html)?\n\nIt is not [backwards compatible to add new fields to a data class](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html#avoid-using-data-classes-in-your-api)   and we don\'t want to introduce a breaking change every time we add a field to a class.\n\n### Why don\'t you use checked exceptions?\n\nChecked exceptions are widely considered a mistake in the Java programming language. In fact, they were   omitted from Kotlin for this reason.\n\nChecked exceptions:\n\n- Are verbose to handle\n- Encourage error handling at the wrong level of abstraction, where nothing can be done about the error\n- Are tedious to propagate due to the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function)\n- Don\'t play well with lambdas (also due to the function coloring problem)\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stainless-sdks/augno-kotlin/issues) with questions, bugs, or suggestions.\n',
  },
  {
    language: 'python',
    content:
      '# Augno Client Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/augno.svg?label=pypi%20(stable))](https://pypi.org/project/augno/)\n\nThe Augno Client Python library provides convenient access to the Augno Client REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Augno Client MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=augno-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImF1Z25vLW1jcCJdLCJlbnYiOnsiQVVHTk9fQVBJX0tFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22augno-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22augno-mcp%22%5D%2C%22env%22%3A%7B%22AUGNO_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nThe REST API documentation can be found on [www.docs.augno.com](https://www.docs.augno.com). The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from this staging repo\npip install git+ssh://git@github.com/stainless-sdks/augno-python.git\n```\n> [!NOTE]\n> Once this package is [published to PyPI](https://www.stainless.com/docs/guides/publish), this will become: `pip install augno`\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom augno import AugnoClient\n\nclient = AugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n    # defaults to "production".\n    environment="environment_1",\n)\n\nresponse = client.ai.list_tool_groups()\nprint(response.data)\n```\n\nWhile you can provide an `api_key` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `AUGNO_API_KEY="My API Key"` to your `.env` file\nso that your API Key is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncAugnoClient` instead of `AugnoClient` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom augno import AsyncAugnoClient\n\nclient = AsyncAugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n    # defaults to "production".\n    environment="environment_1",\n)\n\nasync def main() -> None:\n  response = await client.ai.list_tool_groups()\n  print(response.data)\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from this staging repo\npip install \'augno[aiohttp] @ git+ssh://git@github.com/stainless-sdks/augno-python.git\'\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom augno import DefaultAioHttpClient\nfrom augno import AsyncAugnoClient\n\nasync def main() -> None:\n  async with AsyncAugnoClient(\n    api_key=os.environ.get("AUGNO_API_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    response = await client.ai.list_tool_groups()\n    print(response.data)\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n## Pagination\n\nList methods in the Augno Client API are paginated.\n\nThis library provides auto-paginating iterators with each list response, so you do not have to request successive pages manually:\n\n```python\nfrom augno import AugnoClient\n\nclient = AugnoClient()\n\nall_ais = []\n# Automatically fetches more pages as needed.\nfor ai in client.ai.list_usage():\n    # Do something with ai here\n    all_ais.append(ai)\nprint(all_ais)\n```\n\nOr, asynchronously:\n\n```python\nimport asyncio\nfrom augno import AsyncAugnoClient\n\nclient = AsyncAugnoClient()\n\nasync def main() -> None:\n    all_ais = []\n    # Iterate through items across all pages, issuing requests as needed.\n    async for ai in client.ai.list_usage():\n        all_ais.append(ai)\n    print(all_ais)\n\nasyncio.run(main())\n```\n\nAlternatively, you can use the `.has_next_page()`, `.next_page_info()`, or  `.get_next_page()` methods for more granular control working with pages:\n\n```python\nfirst_page = await client.ai.list_usage()\nif first_page.has_next_page():\n    print(f"will fetch next page using these details: {first_page.next_page_info()}")\n    next_page = await first_page.get_next_page()\n    print(f"number of items we just fetched: {len(next_page.data)}")\n\n# Remove `await` for non-async usage.\n```\n\nOr just work directly with the returned data:\n\n```python\nfirst_page = await client.ai.list_usage()\n\nprint(f"next page cursor: {first_page.page_info.next_cursor}") # => "next page cursor: ..."\nfor ai in first_page.data:\n    print(ai.id)\n\n# Remove `await` for non-async usage.\n```\n\n## Nested params\n\nNested parameters are dictionaries, typed using `TypedDict`, for example:\n\n```python\nfrom augno import AugnoClient\n\nclient = AugnoClient()\n\nagent_definition = client.ai.agents.create(\n    category_code="inventory",\n    config={\n        "model": "claude-sonnet-4",\n        "provider": "anthropic",\n        "system_prompt": "You are an order processing agent. Parse incoming emails and create draft orders.",\n        "temperature": 0.2,\n        "trigger_config": {\n            "cron_schedule": None,\n            "event_filters": ["email.received"],\n            "timezone": None,\n        },\n    },\n    description="Monitors inventory levels and creates restock alerts.",\n    name="Inventory Monitor",\n    role_id="rl_01gf7a8200er3ar3pkfrb6kk29",\n    slug="inventory_monitor",\n    tools=[{\n        "config_json": "config_json",\n        "require_review": True,\n        "sort_order": 1,\n        "tool_id": "tdef_01k0b1seed0searchproduct0",\n    }],\n    trigger_type="event",\n)\nprint(agent_definition.config)\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `augno.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `augno.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `augno.APIError`.\n\n```python\nimport augno\nfrom augno import AugnoClient\n\nclient = AugnoClient()\n\ntry:\n    client.ai.list_tool_groups()\nexcept augno.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept augno.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept augno.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom augno import AugnoClient\n\n# Configure the default for all requests:\nclient = AugnoClient(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).ai.list_tool_groups()\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom augno import AugnoClient\n\n# Configure the default for all requests:\nclient = AugnoClient(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = AugnoClient(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).ai.list_tool_groups()\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `AUGNO_CLIENT_LOG` to `info`.\n\n```shell\n$ export AUGNO_CLIENT_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom augno import AugnoClient\n\nclient = AugnoClient()\nresponse = client.ai.with_raw_response.list_tool_groups()\nprint(response.headers.get(\'X-My-Header\'))\n\nai = response.parse()  # get the object that `ai.list_tool_groups()` would have returned\nprint(ai.data)\n```\n\nThese methods return an [`APIResponse`](https://github.com/stainless-sdks/augno-python/tree/main/src/augno/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/stainless-sdks/augno-python/tree/main/src/augno/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.ai.with_streaming_response.list_tool_groups() as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom augno import AugnoClient, DefaultHttpxClient\n\nclient = AugnoClient(\n    # Or use the `AUGNO_CLIENT_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom augno import AugnoClient\n\nwith AugnoClient() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stainless-sdks/augno-python/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport augno\nprint(augno.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'ruby',
    content:
      '# Augno Client Ruby API library\n\nThe Augno Client Ruby library provides convenient access to the Augno Client REST API from any Ruby 3.2.0+ application. It ships with comprehensive types & docstrings in Yard, RBS, and RBI – [see below](https://github.com/stainless-sdks/augno-ruby#Sorbet) for usage with Sorbet. The standard library\'s `net/http` is used as the HTTP transport, with connection pooling via the `connection_pool` gem.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Augno Client MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=augno-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImF1Z25vLW1jcCJdLCJlbnYiOnsiQVVHTk9fQVBJX0tFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22augno-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22augno-mcp%22%5D%2C%22env%22%3A%7B%22AUGNO_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nDocumentation for releases of this gem can be found [on RubyDoc](https://gemdocs.org/gems/augno).\n\nThe REST API documentation can be found on [www.docs.augno.com](https://www.docs.augno.com).\n\n## Installation\n\nTo use this gem, install via Bundler by adding the following to your application\'s `Gemfile`:\n\n```ruby\ngem "augno", "~> 0.0.1"\n```\n\n## Usage\n\n```ruby\nrequire "bundler/setup"\nrequire "augno"\n\naugno_client = Augno::Client.new(\n  api_key: ENV["AUGNO_API_KEY"], # This is the default and can be omitted\n  environment: "environment_1" # defaults to "production"\n)\n\nresponse = augno_client.ai.list_tool_groups\n\nputs(response.data)\n```\n\n\n\n### Pagination\n\nList methods in the Augno Client API are paginated.\n\nThis library provides auto-paginating iterators with each list response, so you do not have to request successive pages manually:\n\n```ruby\npage = augno_client.ai.list_usage\n\n# Fetch single item from page.\nai = page.data[0]\nputs(ai.id)\n\n# Automatically fetches more pages as needed.\npage.auto_paging_each do |ai|\n  puts(ai.id)\nend\n```\n\nAlternatively, you can use the `#next_page?` and `#next_page` methods for more granular control working with pages.\n\n```ruby\nif page.next_page?\n  new_page = page.next_page\n  puts(new_page.data[0].id)\nend\n```\n\n\n\n### Handling errors\n\nWhen the library is unable to connect to the API, or if the API returns a non-success status code (i.e., 4xx or 5xx response), a subclass of `Augno::Errors::APIError` will be thrown:\n\n```ruby\nbegin\n  ai = augno_client.ai.list_tool_groups\nrescue Augno::Errors::APIConnectionError => e\n  puts("The server could not be reached")\n  puts(e.cause)  # an underlying Exception, likely raised within `net/http`\nrescue Augno::Errors::RateLimitError => e\n  puts("A 429 status code was received; we should back off a bit.")\nrescue Augno::Errors::APIStatusError => e\n  puts("Another non-200-range status code was received")\n  puts(e.status)\nend\n```\n\nError codes are as follows:\n\n| Cause            | Error Type                 |\n| ---------------- | -------------------------- |\n| HTTP 400         | `BadRequestError`          |\n| HTTP 401         | `AuthenticationError`      |\n| HTTP 403         | `PermissionDeniedError`    |\n| HTTP 404         | `NotFoundError`            |\n| HTTP 409         | `ConflictError`            |\n| HTTP 422         | `UnprocessableEntityError` |\n| HTTP 429         | `RateLimitError`           |\n| HTTP >= 500      | `InternalServerError`      |\n| Other HTTP error | `APIStatusError`           |\n| Timeout          | `APITimeoutError`          |\n| Network error    | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\n\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict, 429 Rate Limit, >=500 Internal errors, and timeouts will all be retried by default.\n\nYou can use the `max_retries` option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\naugno_client = Augno::Client.new(\n  max_retries: 0 # default is 2\n)\n\n# Or, configure per-request:\naugno_client.ai.list_tool_groups(request_options: {max_retries: 5})\n```\n\n### Timeouts\n\nBy default, requests will time out after 60 seconds. You can use the timeout option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\naugno_client = Augno::Client.new(\n  timeout: nil # default is 60\n)\n\n# Or, configure per-request:\naugno_client.ai.list_tool_groups(request_options: {timeout: 5})\n```\n\nOn timeout, `Augno::Errors::APITimeoutError` is raised.\n\nNote that requests that time out are retried by default.\n\n## Advanced concepts\n\n### BaseModel\n\nAll parameter and response objects inherit from `Augno::Internal::Type::BaseModel`, which provides several conveniences, including:\n\n1. All fields, including unknown ones, are accessible with `obj[:prop]` syntax, and can be destructured with `obj => {prop: prop}` or pattern-matching syntax.\n\n2. Structural equivalence for equality; if two API calls return the same values, comparing the responses with == will return true.\n\n3. Both instances and the classes themselves can be pretty-printed.\n\n4. Helpers such as `#to_h`, `#deep_to_h`, `#to_json`, and `#to_yaml`.\n\n### Making custom or undocumented requests\n\n#### Undocumented properties\n\nYou can send undocumented parameters to any endpoint, and read undocumented response properties, like so:\n\nNote: the `extra_` parameters of the same name overrides the documented parameters.\n\n```ruby\nresponse =\n  augno_client.ai.list_tool_groups(\n    request_options: {\n      extra_query: {my_query_parameter: value},\n      extra_body: {my_body_parameter: value},\n      extra_headers: {"my-header": value}\n    }\n  )\n\nputs(response[:my_undocumented_property])\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` under the `request_options:` parameter when making a request, as seen in the examples above.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints while retaining the benefit of auth, retries, and so on, you can make requests using `client.request`, like so:\n\n```ruby\nresponse = client.request(\n  method: :post,\n  path: \'/undocumented/endpoint\',\n  query: {"dog": "woof"},\n  headers: {"useful-header": "interesting-value"},\n  body: {"hello": "world"}\n)\n```\n\n### Concurrency & connection pooling\n\nThe `Augno::Client` instances are threadsafe, but are only are fork-safe when there are no in-flight HTTP requests.\n\nEach instance of `Augno::Client` has its own HTTP connection pool with a default size of 99. As such, we recommend instantiating the client once per application in most settings.\n\nWhen all available connections from the pool are checked out, requests wait for a new connection to become available, with queue time counting towards the request timeout.\n\nUnless otherwise specified, other classes in the SDK do not have locks protecting their underlying data structure.\n\n## Sorbet\n\nThis library provides comprehensive [RBI](https://sorbet.org/docs/rbi) definitions, and has no dependency on sorbet-runtime.\n\nYou can provide typesafe request parameters like so:\n\n```ruby\naugno_client.ai.list_tool_groups \n```\n\nOr, equivalently:\n\n```ruby\n# Hashes work, but are not typesafe:\naugno_client.ai.list_tool_groups\n\n# You can also splat a full Params class:\nparams = Augno::AIListToolGroupsParams.new\naugno_client.ai.list_tool_groups(**params)\n```\n\n### Enums\n\nSince this library does not depend on `sorbet-runtime`, it cannot provide [`T::Enum`](https://sorbet.org/docs/tenum) instances. Instead, we provide "tagged symbols" instead, which is always a primitive at runtime:\n\n```ruby\n# :scheduled\nputs(Augno::AI::AgentCreateParams::TriggerType::SCHEDULED)\n\n# Revealed type: `T.all(Augno::AI::AgentCreateParams::TriggerType, Symbol)`\nT.reveal_type(Augno::AI::AgentCreateParams::TriggerType::SCHEDULED)\n```\n\nEnum parameters have a "relaxed" type, so you can either pass in enum constants or their literal value:\n\n```ruby\n# Using the enum constants preserves the tagged type information:\naugno_client.ai.agents.create(\n  trigger_type: Augno::AI::AgentCreateParams::TriggerType::SCHEDULED,\n  # …\n)\n\n# Literal values are also permissible:\naugno_client.ai.agents.create(\n  trigger_type: :scheduled,\n  # …\n)\n```\n\n## Versioning\n\nThis package follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions. As the library is in initial development and has a major version of `0`, APIs may change at any time.\n\nThis package considers improvements to the (non-runtime) `*.rbi` and `*.rbs` type definitions to be non-breaking changes.\n\n## Requirements\n\nRuby 3.2.0 or higher.\n\n## Contributing\n\nSee [the contributing documentation](https://github.com/stainless-sdks/augno-ruby/tree/main/CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Augno Client TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/augno.svg?label=npm%20(stable))](https://npmjs.org/package/augno) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/augno)\n\nThis library provides convenient access to the Augno Client REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [www.docs.augno.com](https://www.docs.augno.com). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Augno Client MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=augno-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImF1Z25vLW1jcCJdLCJlbnYiOnsiQVVHTk9fQVBJX0tFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22augno-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22augno-mcp%22%5D%2C%22env%22%3A%7B%22AUGNO_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install git+ssh://git@github.com:Augno/typescript-sdk.git\n```\n> [!NOTE]\n> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npm install augno`\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n  environment: 'environment_1', // defaults to 'production'\n});\n\nconst response = await client.ai.listToolGroups();\n\nconsole.log(response.data);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  apiKey: process.env['AUGNO_API_KEY'], // This is the default and can be omitted\n  environment: 'environment_1', // defaults to 'production'\n});\n\nconst response: AugnoClient.AIListToolGroupsResponse = await client.ai.listToolGroups();\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst response = await client.ai.listToolGroups().catch(async (err) => {\n  if (err instanceof AugnoClient.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new AugnoClient({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.ai.listToolGroups({\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new AugnoClient({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.ai.listToolGroups({\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n## Auto-pagination\n\nList methods in the AugnoClient API are paginated.\nYou can use the `for await … of` syntax to iterate through items across all pages:\n\n```ts\nasync function fetchAllAIListUsageResponses(params) {\n  const allAIListUsageResponses = [];\n  // Automatically fetches more pages as needed.\n  for await (const aiListUsageResponse of client.ai.listUsage()) {\n    allAIListUsageResponses.push(aiListUsageResponse);\n  }\n  return allAIListUsageResponses;\n}\n```\n\nAlternatively, you can request a single page at a time:\n\n```ts\nlet page = await client.ai.listUsage();\nfor (const aiListUsageResponse of page.data) {\n  console.log(aiListUsageResponse);\n}\n\n// Convenience methods are provided for manually paginating:\nwhile (page.hasNextPage()) {\n  page = await page.getNextPage();\n  // ...\n}\n```\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new AugnoClient();\n\nconst response = await client.ai.listToolGroups().asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: response, response: raw } = await client.ai.listToolGroups().withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(response.data);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `AUGNO_CLIENT_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport AugnoClient from 'augno';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new AugnoClient({\n  logger: logger.child({ name: 'AugnoClient' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.ai.listToolGroups({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport AugnoClient from 'augno';\nimport fetch from 'my-fetch';\n\nconst client = new AugnoClient({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport AugnoClient from 'augno';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new AugnoClient({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport AugnoClient from 'augno';\n\nconst client = new AugnoClient({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport AugnoClient from 'npm:augno';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new AugnoClient({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/Augno/typescript-sdk/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
