## Setting up the environment

This repository uses [`pnpm`](https://pnpm.io/).
Other package managers may work but are not officially supported for development.

To set up the repository, run:

```sh
$ pnpm install
$ pnpm build
```

This will install all the required dependencies and build output files to `dist/`.

## Modifying/Adding code

Most of the SDK is generated code. Modifications to code will be persisted between generations, but may
result in merge conflicts between manual patches and changes from the generator. The generator will never
modify the contents of the `src/lib/` and `examples/` directories.

## Adding and running examples

All files in the `examples/` directory are not modified by the generator and can be freely edited or added to.

```ts
// add an example to examples/<your-example>.ts

#!/usr/bin/env -S npm run tsn -T
…
```

```sh
$ chmod +x examples/<your-example>.ts
# run the example against your api
$ pnpm tsn -T examples/<your-example>.ts
```

## Using the repository from source

If you’d like to use the repository from source, you can either install from git or link to a cloned repository:

To install via git:

```sh
$ npm install git+ssh://git@github.com:augno/typescript-sdk.git
```

Alternatively, to link a local copy of the repo:

```sh
# Clone
$ git clone https://www.github.com/augno/typescript-sdk
$ cd typescript-sdk

# With yarn
$ yarn link
$ cd ../my-package
$ yarn link @augno/sdk

# With pnpm
$ pnpm link --global
$ cd ../my-package
$ pnpm link --global @augno/sdk
```

## Running tests

Most tests require you to [set up a mock server](https://github.com/dgellow/steady) against the OpenAPI spec to run the tests.

```sh
$ ./scripts/mock
```

```sh
$ pnpm run test
```

## Linting and formatting

This repository uses [prettier](https://www.npmjs.com/package/prettier) and
[eslint](https://www.npmjs.com/package/eslint) to format the code in the repository.

To lint:

```sh
$ pnpm lint
```

To format and fix all lint issues automatically:

```sh
$ pnpm fix
```

## Publishing and releases

This repo uses [changesets](https://github.com/changesets/changesets). A release only ships when a `.changeset/*.md` file lands on `main`. **Stainless sync PRs do not generate changesets**, so a maintainer must add one before merging any `fix(sdk): sync ...` / `feat(sdk): ...` PR.

### Releasing a Stainless sync PR

1. Check out the Stainless PR branch locally (`gh pr checkout <number>`).
2. Run `pnpm exec changeset` and pick a bump matching the conventional-commit prefix:
   - `fix(...)` → `patch`
   - `feat(...)` → `minor`
   - `feat!(...)` / breaking → `major` (until 1.0, prefer `minor` for breaking; see https://github.com/changesets/changesets/blob/main/docs/prereleases.md)
3. Commit the generated `.changeset/<name>.md`, push, merge the PR.
4. `release.yml` opens a `chore: version packages` PR. Review the bumped `package.json`, `CHANGELOG.md`, and auto-synced `src/version.ts`, then merge it. That publish run pushes `@augno/sdk` to GitHub Packages.
