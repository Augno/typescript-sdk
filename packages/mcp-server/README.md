# Augno TypeScript MCP Server

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export AUGNO_API_KEY="My Bearer Token"
export AUGNO_AUGNO_ACCOUNT_ID="My Augno Account ID"
export AUGNO_ENVIRONMENT="production"
npx -y @augno/sdk-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "augno_sdk_api": {
      "command": "npx",
      "args": ["-y", "@augno/sdk-mcp"],
      "env": {
        "AUGNO_API_KEY": "My Bearer Token",
        "AUGNO_AUGNO_ACCOUNT_ID": "My Augno Account ID",
        "AUGNO_ENVIRONMENT": "production"
      }
    }
  }
}
```

### Cursor

If you use Cursor, you can install the MCP server by using the button below. You will need to set your environment variables
in Cursor's `mcp.json`, which can be found in Cursor Settings > Tools & MCP > New MCP Server.

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40augno%2Fsdk-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBhdWduby9zZGstbWNwIl0sImVudiI6eyJBVUdOT19BUElfS0VZIjoiTXkgQmVhcmVyIFRva2VuIiwiQVVHTk9fQVVHTk9fQUNDT1VOVF9JRCI6Ik15IEF1Z25vIEFjY291bnQgSUQifX0)

### VS Code

If you use MCP, you can install the MCP server by clicking the link below. You will need to set your environment variables
in VS Code's `mcp.json`, which can be found via Command Palette > MCP: Open User Configuration.

[Open VS Code](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40augno%2Fsdk-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40augno%2Fsdk-mcp%22%5D%2C%22env%22%3A%7B%22AUGNO_API_KEY%22%3A%22My%20Bearer%20Token%22%2C%22AUGNO_AUGNO_ACCOUNT_ID%22%3A%22My%20Augno%20Account%20ID%22%7D%7D)

### Claude Code

If you use Claude Code, you can install the MCP server by running the command below in your terminal. You will need to set your
environment variables in Claude Code's `.claude.json`, which can be found in your home directory.

```
claude mcp add augno_sdk_mcp_api --env AUGNO_API_KEY="My Bearer Token" AUGNO_AUGNO_ACCOUNT_ID="My Augno Account ID" -- npx -y @augno/sdk-mcp
```

## Code Mode

This MCP server is built on the "Code Mode" tool scheme. In this MCP Server,
your agent will write code against the TypeScript SDK, which will then be executed in an
isolated sandbox. To accomplish this, the server will expose two tools to your agent:

- The first tool is a docs search tool, which can be used to generically query for
  documentation about your API/SDK.

- The second tool is a code tool, where the agent can write code against the TypeScript SDK.
  The code will be executed in a sandbox environment without web or filesystem access. Then,
  anything the code returns or prints will be returned to the agent as the result of the
  tool call.

Using this scheme, agents are capable of performing very complex tasks deterministically
and repeatably.

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Bearer scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ----------------- | ------------------------ | --------------- |
| `x-augno-api-key` | `bearerToken` | BearerAuth |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "augno_sdk_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Bearer <auth value>"
      }
    }
  }
}
```
