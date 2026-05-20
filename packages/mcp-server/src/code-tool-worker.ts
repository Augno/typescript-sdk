// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import path from 'node:path';
import util from 'node:util';
import Fuse from 'fuse.js';
import ts from 'typescript';
import { WorkerOutput } from './code-tool-types';
import { AugnoClient, ClientOptions } from 'augno';

async function tseval(code: string) {
  return import('data:application/typescript;charset=utf-8;base64,' + Buffer.from(code).toString('base64'));
}

function getRunFunctionSource(code: string): {
  type: 'declaration' | 'expression';
  client: string | undefined;
  code: string;
} | null {
  const sourceFile = ts.createSourceFile('code.ts', code, ts.ScriptTarget.Latest, true);
  const printer = ts.createPrinter();

  for (const statement of sourceFile.statements) {
    // Check for top-level function declarations
    if (ts.isFunctionDeclaration(statement)) {
      if (statement.name?.text === 'run') {
        return {
          type: 'declaration',
          client: statement.parameters[0]?.name.getText(),
          code: printer.printNode(ts.EmitHint.Unspecified, statement.body!, sourceFile),
        };
      }
    }

    // Check for variable declarations: const run = () => {} or const run = function() {}
    if (ts.isVariableStatement(statement)) {
      for (const declaration of statement.declarationList.declarations) {
        if (
          ts.isIdentifier(declaration.name) &&
          declaration.name.text === 'run' &&
          // Check if it's initialized with a function
          declaration.initializer &&
          (ts.isFunctionExpression(declaration.initializer) || ts.isArrowFunction(declaration.initializer))
        ) {
          return {
            type: 'expression',
            client: declaration.initializer.parameters[0]?.name.getText(),
            code: printer.printNode(ts.EmitHint.Unspecified, declaration.initializer, sourceFile),
          };
        }
      }
    }
  }

  return null;
}

function getTSDiagnostics(code: string): string[] {
  const functionSource = getRunFunctionSource(code)!;
  const codeWithImport = [
    'import { AugnoClient } from "augno";',
    functionSource.type === 'declaration' ?
      `async function run(${functionSource.client}: AugnoClient)`
    : `const run: (${functionSource.client}: AugnoClient) => Promise<unknown> =`,
    functionSource.code,
  ].join('\n');
  const sourcePath = path.resolve('code.ts');
  const ast = ts.createSourceFile(sourcePath, codeWithImport, ts.ScriptTarget.Latest, true);
  const options = ts.getDefaultCompilerOptions();
  options.target = ts.ScriptTarget.Latest;
  options.module = ts.ModuleKind.NodeNext;
  options.moduleResolution = ts.ModuleResolutionKind.NodeNext;
  const host = ts.createCompilerHost(options, true);
  const newHost: typeof host = {
    ...host,
    getSourceFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return ast;
      }
      return host.getSourceFile(...args);
    },
    readFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return codeWithImport;
      }
      return host.readFile(...args);
    },
    fileExists: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return true;
      }
      return host.fileExists(...args);
    },
  };
  const program = ts.createProgram({
    options,
    rootNames: [sourcePath],
    host: newHost,
  });
  const diagnostics = ts.getPreEmitDiagnostics(program, ast);
  return diagnostics.map((d) => {
    const message = ts.flattenDiagnosticMessageText(d.messageText, '\n');
    if (!d.file || !d.start) return `- ${message}`;
    const { line: lineNumber } = ts.getLineAndCharacterOfPosition(d.file, d.start);
    const line = codeWithImport.split('\n').at(lineNumber)?.trim();
    return line ? `- ${message}\n    ${line}` : `- ${message}`;
  });
}

const fuse = new Fuse(
  [
    'client.ai.listToolGroups',
    'client.ai.listTools',
    'client.ai.listUsage',
    'client.ai.agents.create',
    'client.ai.agents.delete',
    'client.ai.agents.list',
    'client.ai.agents.retrieve',
    'client.ai.agents.update',
    'client.ai.agents.updateStatus',
    'client.ai.alerts.list',
    'client.ai.alerts.retrieve',
    'client.ai.alerts.actions.acknowledge',
    'client.ai.memories.create',
    'client.ai.memories.delete',
    'client.ai.memories.list',
    'client.ai.memories.retrieve',
    'client.ai.memories.update',
    'client.ai.runs.list',
    'client.ai.runs.retrieve',
    'client.ai.runs.trigger',
    'client.ai.runs.actions.cancel',
    'client.ai.runs.actions.continue',
    'client.auth.apiKeys.create',
    'client.auth.apiKeys.list',
    'client.auth.apiKeys.retrieve',
    'client.auth.apiKeys.revoke',
    'client.auth.apiKeys.actions.rotate',
    'client.core.listAdjustmentTypes',
    'client.core.accountGroups.create',
    'client.core.accountGroups.delete',
    'client.core.accountGroups.list',
    'client.core.accountGroups.retrieve',
    'client.core.accountGroups.update',
    'client.core.accountPrices.create',
    'client.core.accountPrices.delete',
    'client.core.accountPrices.list',
    'client.core.accountPrices.retrieve',
    'client.core.accountPrices.update',
    'client.core.accountStatuses.list',
    'client.core.accountStatuses.retrieve',
    'client.core.accountUsers.create',
    'client.core.accountUsers.delete',
    'client.core.accountUsers.list',
    'client.core.accountUsers.lock',
    'client.core.accountUsers.restore',
    'client.core.accountUsers.retrieve',
    'client.core.accountUsers.unlock',
    'client.core.accountUsers.update',
    'client.core.accountUsers.updateNotificationPreferences',
    'client.core.accountUsers.updatePassword',
    'client.core.accountUsers.salesTargets.create',
    'client.core.accountUsers.salesTargets.list',
    'client.core.accountUsers.salesTargets.upsert',
    'client.core.accounts.getLogoURL',
    'client.core.accounts.retrieve',
    'client.core.accounts.retrieveBySlug',
    'client.core.accounts.update',
    'client.core.accounts.uploadPhoto',
    'client.core.accounts.addresses.create',
    'client.core.accounts.addresses.delete',
    'client.core.accounts.addresses.list',
    'client.core.accounts.addresses.retrieve',
    'client.core.accounts.addresses.update',
    'client.core.addresses.autocomplete',
    'client.core.addresses.getDetails',
    'client.core.addresses.validate',
    'client.core.carriers.create',
    'client.core.carriers.delete',
    'client.core.carriers.getOAuthStatus',
    'client.core.carriers.list',
    'client.core.carriers.retrieve',
    'client.core.carriers.update',
    'client.core.carriers.options.create',
    'client.core.carriers.options.delete',
    'client.core.carriers.options.list',
    'client.core.carriers.options.retrieve',
    'client.core.carriers.options.update',
    'client.core.carriers.actions.initiateOAuth',
    'client.core.carriers.actions.syncOptions',
    'client.core.childAccounts.add',
    'client.core.childAccounts.list',
    'client.core.childAccounts.remove',
    'client.core.integrations.create',
    'client.core.integrations.delete',
    'client.core.integrations.list',
    'client.core.integrations.update',
    'client.core.integrations.stripe.getPublishableKey',
    'client.core.integrations.stripe.getStatus',
    'client.core.items.getCosts',
    'client.core.items.getInventory',
    'client.core.items.getTrends',
    'client.core.items.list',
    'client.core.items.retrieve',
    'client.core.items.actions.export',
    'client.core.paymentTerms.create',
    'client.core.paymentTerms.delete',
    'client.core.paymentTerms.list',
    'client.core.paymentTerms.retrieve',
    'client.core.paymentTerms.update',
    'client.core.productLineAccess.accountGroups.create',
    'client.core.productLineAccess.accountGroups.delete',
    'client.core.productLineAccess.accountGroups.list',
    'client.core.productLineAccess.accountGroups.retrieve',
    'client.core.productLineAccess.accountGroups.update',
    'client.core.properties.create',
    'client.core.properties.delete',
    'client.core.properties.list',
    'client.core.properties.retrieve',
    'client.core.properties.update',
    'client.core.properties.attributes.create',
    'client.core.properties.attributes.delete',
    'client.core.properties.attributes.list',
    'client.core.properties.attributes.retrieve',
    'client.core.properties.attributes.update',
    'client.core.requestLogs.list',
    'client.core.requestLogs.retrieve',
    'client.core.sandboxes.create',
    'client.core.sandboxes.delete',
    'client.core.sandboxes.list',
    'client.core.sandboxes.retrieve',
    'client.core.shippingTerms.create',
    'client.core.shippingTerms.delete',
    'client.core.shippingTerms.list',
    'client.core.shippingTerms.retrieve',
    'client.core.shippingTerms.update',
    'client.core.units.create',
    'client.core.units.delete',
    'client.core.units.list',
    'client.core.units.retrieve',
    'client.core.units.update',
    'client.core.itemCategories.changeUnitGroup',
    'client.core.itemCategories.create',
    'client.core.itemCategories.delete',
    'client.core.itemCategories.list',
    'client.core.itemCategories.retrieve',
    'client.core.itemCategories.update',
    'client.core.itemCategories.properties.add',
    'client.core.itemCategories.properties.remove',
  ],
  { threshold: 1, shouldSort: true },
);

function getMethodSuggestions(fullyQualifiedMethodName: string): string[] {
  return fuse
    .search(fullyQualifiedMethodName)
    .map(({ item }) => item)
    .slice(0, 5);
}

const proxyToObj = new WeakMap<any, any>();
const objToProxy = new WeakMap<any, any>();

type ClientProxyConfig = {
  path: string[];
  isBelievedBad?: boolean;
};

function makeSdkProxy<T extends object>(obj: T, { path, isBelievedBad = false }: ClientProxyConfig): T {
  let proxy: T = objToProxy.get(obj);

  if (!proxy) {
    proxy = new Proxy(obj, {
      get(target, prop, receiver) {
        const propPath = [...path, String(prop)];
        const value = Reflect.get(target, prop, receiver);

        if (isBelievedBad || (!(prop in target) && value === undefined)) {
          // If we're accessing a path that doesn't exist, it will probably eventually error.
          // Let's proxy it and mark it bad so that we can control the error message.
          // We proxy an empty class so that an invocation or construction attempt is possible.
          return makeSdkProxy(class {}, { path: propPath, isBelievedBad: true });
        }

        if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
          return makeSdkProxy(value, { path: propPath, isBelievedBad });
        }

        return value;
      },

      apply(target, thisArg, args) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a function. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.apply(target, proxyToObj.get(thisArg) ?? thisArg, args);
      },

      construct(target, args, newTarget) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a constructor. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.construct(target, args, newTarget);
      },
    });

    objToProxy.set(obj, proxy);
    proxyToObj.set(proxy, obj);
  }

  return proxy;
}

function parseError(code: string, error: unknown): string | undefined {
  if (!(error instanceof Error)) return;
  const cause = error.cause instanceof Error ? `: ${error.cause.message}` : '';
  const message = error.name ? `${error.name}: ${error.message}${cause}` : `${error.message}${cause}`;
  try {
    // Deno uses V8; the first "<anonymous>:LINE:COLUMN" is the top of stack.
    const lineNumber = error.stack?.match(/<anonymous>:([0-9]+):[0-9]+/)?.[1];
    // -1 for the zero-based indexing
    const line =
      lineNumber &&
      code
        .split('\n')
        .at(parseInt(lineNumber, 10) - 1)
        ?.trim();
    return line ? `${message}\n  at line ${lineNumber}\n    ${line}` : message;
  } catch {
    return message;
  }
}

const fetch = async (req: Request): Promise<Response> => {
  const { opts, code } = (await req.json()) as { opts: ClientOptions; code: string };

  const runFunctionSource = code ? getRunFunctionSource(code) : null;
  if (!runFunctionSource) {
    const message =
      code ?
        'The code is missing a top-level `run` function.'
      : 'The code argument is missing. Provide one containing a top-level `run` function.';
    return Response.json(
      {
        is_error: true,
        result: `${message} Write code within this template:\n\n\`\`\`\nasync function run(client) {\n  // Fill this out\n}\n\`\`\``,
        log_lines: [],
        err_lines: [],
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const diagnostics = getTSDiagnostics(code);
  if (diagnostics.length > 0) {
    return Response.json(
      {
        is_error: true,
        result: `The code contains TypeScript diagnostics:\n${diagnostics.join('\n')}`,
        log_lines: [],
        err_lines: [],
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const client = new AugnoClient({
    ...opts,
  });

  const log_lines: string[] = [];
  const err_lines: string[] = [];
  const originalConsole = globalThis.console;
  globalThis.console = {
    ...originalConsole,
    log: (...args: unknown[]) => {
      log_lines.push(util.format(...args));
    },
    error: (...args: unknown[]) => {
      err_lines.push(util.format(...args));
    },
  };
  try {
    let run_ = async (client: any) => {};
    run_ = (await tseval(`${code}\nexport default run;`)).default;
    const result = await run_(makeSdkProxy(client, { path: ['client'] }));
    return Response.json({
      is_error: false,
      result,
      log_lines,
      err_lines,
    } satisfies WorkerOutput);
  } catch (e) {
    return Response.json(
      {
        is_error: true,
        result: parseError(code, e),
        log_lines,
        err_lines,
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  } finally {
    globalThis.console = originalConsole;
  }
};

export default { fetch };
