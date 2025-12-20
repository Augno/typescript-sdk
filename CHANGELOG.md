# Changelog

## 0.1.0 (2025-12-20)

Full Changelog: [v0.0.1...v0.1.0](https://github.com/Augno/node-sdk/compare/v0.0.1...v0.1.0)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.

### Features

* **api:** manual updates ([7a8693a](https://github.com/Augno/node-sdk/commit/7a8693a76cb576949e5514e9321c3ee7769bfc05))
* **api:** manual updates ([18f147e](https://github.com/Augno/node-sdk/commit/18f147e0dfbbc38510acb216fd8414d751d312d2))
* **api:** manual updates ([439829c](https://github.com/Augno/node-sdk/commit/439829cfe2e27363c2eb3232a9a9506253c8f207))
* **api:** update via SDK Studio ([09e7e3b](https://github.com/Augno/node-sdk/commit/09e7e3bc2a4ef61568fc0fd7292842df9cd16ed7))
* **api:** update via SDK Studio ([5a2c8ff](https://github.com/Augno/node-sdk/commit/5a2c8ffeddabb7e8af03a142aa5dabbda80f49ef))
* **api:** update via SDK Studio ([7e71c01](https://github.com/Augno/node-sdk/commit/7e71c01a2e057548b13b808c737863296743d103))
* **api:** update via SDK Studio ([7898a48](https://github.com/Augno/node-sdk/commit/7898a487107e2c35e12b1081a0d5a13fa73a9d09))
* **api:** update via SDK Studio ([e9b8fe4](https://github.com/Augno/node-sdk/commit/e9b8fe498ef183526c405468a6d409efa93d2283))
* **api:** update via SDK Studio ([fc2be44](https://github.com/Augno/node-sdk/commit/fc2be445da696621286910312732a8d931488fd9))
* **api:** update via SDK Studio ([2332904](https://github.com/Augno/node-sdk/commit/233290485c16c99a382a8838131033f7d99bbd13))
* **api:** update via SDK Studio ([f418aeb](https://github.com/Augno/node-sdk/commit/f418aebc8a07e938e4f9a0d71d664d3c8e15304f))
* **api:** update via SDK Studio ([d73231d](https://github.com/Augno/node-sdk/commit/d73231d0d31d358e4939476736b2d350db77d811))
* **api:** update via SDK Studio ([534071b](https://github.com/Augno/node-sdk/commit/534071bf575fc7335240cc0f4d6c513d1889a05d))
* **api:** update via SDK Studio ([f0cc24e](https://github.com/Augno/node-sdk/commit/f0cc24e50b9b169d2276670614e3e569921b2c55))
* **api:** update via SDK Studio ([c37936a](https://github.com/Augno/node-sdk/commit/c37936ad84efa2e6d88101ab7d1bf669b8fd4351))
* **api:** update via SDK Studio ([ee889c0](https://github.com/Augno/node-sdk/commit/ee889c0950a7e675e3ec29f324df83f3fd6b7179))
* **api:** update via SDK Studio ([eb3cbe4](https://github.com/Augno/node-sdk/commit/eb3cbe46cc815aa04b160ef25820f6535f82be81))
* **api:** update via SDK Studio ([a830469](https://github.com/Augno/node-sdk/commit/a830469ac1734a05fb458439866868a105c95039))
* **mcp:** add code execution tool ([6a50f6a](https://github.com/Augno/node-sdk/commit/6a50f6ad60f622cc3d817dc26c04ad9ed049fb8f))
* **mcp:** add detail field to docs search tool ([9e0be11](https://github.com/Augno/node-sdk/commit/9e0be11314d8f0a284d579ba8ee11b87bc604335))
* **mcp:** add docs search tool ([53677f4](https://github.com/Augno/node-sdk/commit/53677f4ea089fbdefefbb578e717285121e45104))
* **mcp:** add option for including docs tools ([188f263](https://github.com/Augno/node-sdk/commit/188f2638b07d20b8bf39efe7580b4ecc749a92a6))
* **mcp:** add typescript check to code execution tool ([83d3395](https://github.com/Augno/node-sdk/commit/83d33950d80c5ac392f0d7257b00fb07d5432e5f))
* **mcp:** handle code mode calls in the Stainless API ([992f9fe](https://github.com/Augno/node-sdk/commit/992f9fe1ec99223a8e8315b8e3f1420f00eeb831))
* **mcp:** return logs on code tool errors ([9c98faf](https://github.com/Augno/node-sdk/commit/9c98fafb2b9fcc4a338e3c6063ac09a07d999ae7))


### Bug Fixes

* coerce nullable values to undefined ([1547be8](https://github.com/Augno/node-sdk/commit/1547be8f3cc1ee9bc8650acde1bf15c3a85542e8))
* **mcp:** add client instantiation options to code tool ([a1cd01d](https://github.com/Augno/node-sdk/commit/a1cd01d983d77635f4c86ba5ab729a7ec7272633))
* **mcp:** correct code tool API endpoint ([0bd30b1](https://github.com/Augno/node-sdk/commit/0bd30b17156e29c0ce977c8c9b1b16b417ce21f3))
* **mcp:** fix cli argument parsing logic ([a5cb00d](https://github.com/Augno/node-sdk/commit/a5cb00d2755ac20bcf7bce25ed9a48cb54bdb27f))
* **mcp:** fix query options parsing ([e9c8217](https://github.com/Augno/node-sdk/commit/e9c8217bb5e41aa297bef21672866376e4600634))
* **mcp:** pass base url to code tool ([749aaa4](https://github.com/Augno/node-sdk/commit/749aaa4761ea0951ebe9557eba14f21e713fbaca))
* **mcp:** resolve a linting issue in server code ([c6634e0](https://github.com/Augno/node-sdk/commit/c6634e0d288efb5be137b499503cea5ce2f64b88))
* **mcp:** return correct lines on typescript errors ([b2aa13b](https://github.com/Augno/node-sdk/commit/b2aa13bba31dd92c8498ecf3886e89fc196d7f4b))
* **mcp:** return tool execution error on api error ([4d3567a](https://github.com/Augno/node-sdk/commit/4d3567ad5f14e1e6d6ca260c5538e28544cbe2f2))
* **mcp:** return tool execution error on jq failure ([b65a46b](https://github.com/Augno/node-sdk/commit/b65a46b115abea528a8a6bf33f9cd5b93c626876))


### Performance Improvements

* faster formatting ([fc0a602](https://github.com/Augno/node-sdk/commit/fc0a602e4245169d92037e1ce855dd11112b5162))


### Chores

* add package to package.json ([d4526f6](https://github.com/Augno/node-sdk/commit/d4526f6855fd5a39f2dd44a1ff1c1e45c787d426))
* ci build action ([a0b1b1c](https://github.com/Augno/node-sdk/commit/a0b1b1c378b39b0b031a3ded62e119efd2736abc))
* **client:** fix logger property type ([26adf3a](https://github.com/Augno/node-sdk/commit/26adf3ac5e5f35efe7ca985aa6aafa7d99590c1c))
* **client:** qualify global Blob ([0edf5f1](https://github.com/Augno/node-sdk/commit/0edf5f1b80f4e908b0a8883479120339b8838ac9))
* **codegen:** internal codegen update ([74a4db0](https://github.com/Augno/node-sdk/commit/74a4db0513c1623a2b1d0b0436f74d9ffdd7717c))
* configure new SDK language ([0e8c34c](https://github.com/Augno/node-sdk/commit/0e8c34cf211caa7bfe0b56081cc72d16c761b59e))
* configure new SDK language ([d613f23](https://github.com/Augno/node-sdk/commit/d613f2380199ad232709b33cd6340e333cb66c8a))
* **deps:** update dependency @types/node to v20.17.58 ([4767a96](https://github.com/Augno/node-sdk/commit/4767a96b731e0b7e471e6a94b2aac4e5af7cd37f))
* do not install brew dependencies in ./scripts/bootstrap by default ([24f5b0f](https://github.com/Augno/node-sdk/commit/24f5b0fc13f10a9e3a854872ca82e564be8a1c91))
* extract some types in mcp docs ([b26c060](https://github.com/Augno/node-sdk/commit/b26c0603ff2658a709e9080d2760a2656183373f))
* **internal:** codegen related update ([a519158](https://github.com/Augno/node-sdk/commit/a519158da7f95eb3a2ef2b56affb0aea8da9f6d3))
* **internal:** codegen related update ([3ebd98a](https://github.com/Augno/node-sdk/commit/3ebd98a9d76be234a47899a68b187ad2f32cd966))
* **internal:** codegen related update ([ca0c15c](https://github.com/Augno/node-sdk/commit/ca0c15c2ba0074aa969f3a412e214d233248f1fb))
* **internal:** codegen related update ([faf4eb3](https://github.com/Augno/node-sdk/commit/faf4eb3efcef6dd9697ec4bdd99015df3c32a264))
* **internal:** codegen related update ([7ce734e](https://github.com/Augno/node-sdk/commit/7ce734ecaec4ae53257f9f3ec2d73e3977597b95))
* **internal:** codegen related update ([6d98aed](https://github.com/Augno/node-sdk/commit/6d98aed53c1137203735435ff5595fa2b8df051d))
* **internal:** codegen related update ([c840501](https://github.com/Augno/node-sdk/commit/c8405010af2df3260cee5aace480645fedf49003))
* **internal:** codegen related update ([f1dd0e1](https://github.com/Augno/node-sdk/commit/f1dd0e103599c7fa64ff2a54e5d87f2d5da795d8))
* **internal:** codegen related update ([2d7240c](https://github.com/Augno/node-sdk/commit/2d7240cfbe8233eee78aa493754ac0f25d10f0db))
* **internal:** codegen related update ([4be30ce](https://github.com/Augno/node-sdk/commit/4be30ce72d2fa31ceecbcf2c5e39706daef9505f))
* **internal:** codegen related update ([a917cde](https://github.com/Augno/node-sdk/commit/a917cde7016c8663d5611d3ea51b85520b70af81))
* **internal:** configure pnpm minimumReleaseAge to 1 day ([dc8b470](https://github.com/Augno/node-sdk/commit/dc8b47063dbadfcaec68eb50c5ab85fbb74a209b))
* **internal:** fix incremental formatting in some cases ([4c856aa](https://github.com/Augno/node-sdk/commit/4c856aa0b13f66d5537ba7d3784ee8e2f7c37e18))
* **internal:** formatting change ([b9c31ad](https://github.com/Augno/node-sdk/commit/b9c31ad9c518f09ba7c0de66ac6acbe1ecfb8ab1))
* **internal:** gitignore .mcpb files ([e56332b](https://github.com/Augno/node-sdk/commit/e56332b96c0d508e61b0e857d5b49ff7967c7687))
* **internal:** ignore .eslintcache ([d6fa6cf](https://github.com/Augno/node-sdk/commit/d6fa6cfc7fefe6127ac5f0785b127cf76142627e))
* **internal:** remove .eslintcache ([3d79959](https://github.com/Augno/node-sdk/commit/3d79959081e0b1353f76c1a0bbdd5ac03c9b0ee2))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([f04bc64](https://github.com/Augno/node-sdk/commit/f04bc642ff297681e1a507cd52840f9fc46795f4))
* **internal:** update comment in script ([9ebcd06](https://github.com/Augno/node-sdk/commit/9ebcd0677a267973d4d315d275c25cd47425d149))
* **internal:** update global Error reference ([15f595d](https://github.com/Augno/node-sdk/commit/15f595d7d4182b21d54eb9078f17d2ee531a2bbb))
* **internal:** upgrade eslint ([58b2f8a](https://github.com/Augno/node-sdk/commit/58b2f8a108039be4317f9399eb1d2f99b4f6db44))
* **internal:** use npm pack for build uploads ([6c6a373](https://github.com/Augno/node-sdk/commit/6c6a37393b6f8f4a00899e2f3c030b77bdf93fd0))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([176522c](https://github.com/Augno/node-sdk/commit/176522cb5157d7a32ea38b0b2edb38750f9e434c))
* **mcp:** clarify http auth error ([e0d9c6c](https://github.com/Augno/node-sdk/commit/e0d9c6c84b27c9632152d49178af4ee5cf23b66a))
* **mcp:** remove deprecated tool schemes ([762b470](https://github.com/Augno/node-sdk/commit/762b470e9288af46b5a234e050170b093b61a26b))
* **mcp:** rename dxt to mcpb ([c7c4879](https://github.com/Augno/node-sdk/commit/c7c4879b6972dd399def656836f92ae9fd3c1ecf))
* **mcp:** upgrade jq-web ([f88cc03](https://github.com/Augno/node-sdk/commit/f88cc03f792e95422681cac084b597ec2b45bdc0))
* update @stainless-api/prism-cli to v5.15.0 ([2686dcf](https://github.com/Augno/node-sdk/commit/2686dcf6f8c3ed3f9fc9d8389ea85fc8a75cfe13))
* update CI script ([378ec3d](https://github.com/Augno/node-sdk/commit/378ec3d6b96c9e50e32c086ec74c5b818362e17e))
* update lockfile ([b26254e](https://github.com/Augno/node-sdk/commit/b26254e4a7a4c522a1a5d8b68dd5d814f97da14c))
* update SDK settings ([16efad3](https://github.com/Augno/node-sdk/commit/16efad38797d28bd9af5b7ec10f378a50caafc2d))
* use latest @modelcontextprotocol/sdk ([c8917e4](https://github.com/Augno/node-sdk/commit/c8917e49c602b9a55b5eb6e9378321cf39290808))
