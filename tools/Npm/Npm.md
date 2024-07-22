# Npm

## 内容导航

1. [Nrm](./Nrm.md)
2. [Nvm](./Nvm.md)

## Commands

> [Document](https://docs.npmjs.com/cli/v10/commands/npm)

`npm（Node Package Manager）`是 `Node.js` 的包管理工具，用于安装、管理和发布 `Node.js` 包。以下是常用 `npm` 命令及其详细解释，并重点关注一些开发中常用的命令。

### 基本命令

1. **`npm init`**

   - 初始化一个新的 `package.json` 文件。
   - 使用 `npm init` 创建一个交互式的 `package.json` 文件。
   - 使用 `npm init -y` 创建一个默认配置的 `package.json` 文件。
   - 示例：
     ```bash
     npm init
     npm init -y
     ```

2. **`npm install` (alias: `npm i`)**

   - 安装项目所需的依赖。
   - `npm install` 读取 `package.json` 和 `package-lock.json` 文件并安装所有依赖。
   - `npm install <package-name>` 安装指定的包并将其添加到 `dependencies`。
   - `npm install <package-name> --save-dev` 安装指定的包并将其添加到 `devDependencies`。
   - 示例：
     ```bash
     npm install
     npm install lodash
     npm install mocha --save-dev
     ```

**安装目录：**

1. 本地安装（默认）：将内容放入./node_modules 当前包根目录中。
2. 全局安装（使用-g）：将内容放在 /usr/local 或者安装节点的任何位置。
3. 如果要使用它，请在本地安装它 require()。
4. 如果您要在命令行上运行它，请全局安装它。
5. 如果两者都需要，则在两个地方安装，或者使用 npm link。

6. **`npm update`**

   - 更新项目的所有依赖到最新版本，符合 `package.json` 中指定的版本范围。
   - 示例：
     ```bash
     npm update
     ```

7. **`npm uninstall` (alias: `npm remove`, `npm rm`)**

   - 移除项目中的某个依赖。
   - 示例：
     ```bash
     npm uninstall lodash
     ```

8. **`npm list` (alias: `npm ls`)**
   - 列出当前项目安装的所有依赖包及其版本。
   - `npm list --depth=0` 只列出第一层依赖。
   - 示例：
     ```bash
     npm list
     npm list --depth=0
     ```

### 发布与管理

6. **`npm publish`**

   - 将包发布到 npm 注册表。
   - 需要在 `package.json` 中设置 `name` 和 `version` 字段。
   - 示例：
     ```bash
     npm publish
     ```

7. **`npm unpublish`**

   - 从 npm 注册表中移除已发布的包。
   - 只能移除 24 小时内发布的包版本。
   - 示例：
     ```bash
     npm unpublish <package-name>@<version>
     ```

8. **`npm version`**
   - 更新 `package.json` 中的版本号，并创建一个新的 Git 标签。
   - `npm version <new-version>` 设置新版本号。
   - `npm version patch` 自动更新补丁版本号。
   - 示例：
     ```bash
     npm version 1.1.0
     npm version patch
     ```

### 运行脚本

9. **`npm run`**

   - 运行在 `package.json` 的 `scripts` 字段中定义的脚本。
   - `npm run <script-name>` 运行指定的脚本。
   - `npm run` 显示所有可用的脚本。
   - 示例：
     ```bash
     npm run start
     npm run build
     ```

10. **`npm test`**
    - 运行在 `package.json` 中定义的 `test` 脚本。
    - 等价于 `npm run test`。
    - 示例：
      ```bash
      npm test
      ```

### 安装选项

11. **`npm install --global` (alias: `-g`)**

    - 全局安装包，通常用于命令行工具。
    - 示例：
      ```bash
      npm install -g npm
      npm install -g typescript
      ```

12. **`npm install --save` (alias: `-S`)**

    - 安装包并将其添加到 `dependencies`。
    - 默认行为，省略 `--save` 也会添加到 `dependencies`。
    - 示例：
      ```bash
      npm install lodash --save
      ```

13. **`npm install --save-dev` (alias: `-D`)**

    - 安装包并将其添加到 `devDependencies`。
    - 示例：
      ```bash
      npm install mocha --save-dev
      ```

14. **`npm install --save-optional` (alias: `-O`)**
    - 安装包并将其添加到 `optionalDependencies`。
    - 示例：
      ```bash
      npm install fsevents --save-optional
      ```

### 其他有用命令

15. **`npm cache clean`**

    - 清理 npm 的缓存。
    - 示例：
      ```bash
      npm cache clean --force
      ```

16. **`npm audit`**

    - 检查项目中的安全漏洞。
    - `npm audit fix` 尝试自动修复发现的漏洞。
    - 示例：
      ```bash
      npm audit
      npm audit fix
      ```

17. **`npm outdated`**

    - 列出项目中过时的依赖包。
    - 示例：
      ```bash
      npm outdated
      ```

18. **`npm info`**
    - 查看包的信息。
    - 示例：
      ```bash
      npm info lodash
      ```

### 重点关注的命令

1. **`npm install`**

   - 最常用的命令，用于安装和管理项目依赖。
   - 开发过程中需要频繁使用，确保所有依赖包正确安装。

2. **`npm run` 和 `npm test`**

   - 用于运行自定义脚本和测试脚本，提升开发和测试效率。

3. **`npm audit` 和 `npm outdated`**

   - 定期检查项目中的安全漏洞和过时依赖，保持项目安全和最新。

4. **`npm publish`**

   - 对于发布 npm 包的开发者，这是发布和更新包的关键命令。

5. **`npm version`**
   - 用于版本管理，确保每次发布的新版本都有唯一的版本号。

通过掌握这些常用 `npm` 命令，可以高效地管理项目的依赖和脚本，确保项目的开发、测试和发布流程顺畅。

`npm ci` 和 `npm install` (`npm i`) 是用于安装项目依赖的两个命令，但它们有一些重要的区别。以下是详细的比较和每个命令的用途：

### `npm install` 和 `npm ci` 的区别

> [npm ci document](https://docs.npmjs.com/cli/v10/commands/npm-ci)

> [npm install document](https://docs.npmjs.com/cli/v10/commands/npm-install)

#### `npm install` (`npm i`)

`npm install` 是用于安装项目依赖的常用命令。其主要特点和行为如下：

1. **安装依赖**：

   - 读取 `package.json` 和 `package-lock.json` 文件中的依赖，并安装这些依赖。
   - 如果 `node_modules` 目录已经存在，`npm install` 会尝试重用已有的模块，以减少安装时间。

2. **更新 `package-lock.json`**：

   - 如果 `package.json` 中的依赖版本发生变化，`npm install` 会更新 `package-lock.json` 文件。

3. **添加新依赖**：

   - 当你运行 `npm install <package-name>` 时，它会将该包安装到项目中，并根据需要将其添加到 `dependencies` 或 `devDependencies` 中。

4. **混合依赖版本**：
   - 如果 `package-lock.json` 文件不存在或不完整，`npm install` 会重新解析依赖树，可能导致安装的依赖版本与之前的不完全一致。

#### `npm ci`

`npm ci` 是在持续集成（`CI`）和自动化环境中使用的命令。其主要特点和行为如下：

1. **严格依赖安装**：

   - `npm ci` 只会根据 `package-lock.json` 文件中的精确版本安装依赖。这确保了每次安装的依赖版本完全一致。

2. **更快的安装**：

   - `npm ci` 是为 `CI` 环境优化的，因此它删除现有的 `node_modules` 目录并重新安装依赖，而不是尝试重用已有的模块。这通常会加快安装速度。

3. **不更新 `package-lock.json`**：

   - 与 `npm install` 不同，`npm ci` 不会修改 `package-lock.json` 文件。如果 `package-lock.json` 与 `package.json` 不匹配，`npm ci` 会失败。

4. **更严格的依赖管理**：
   - `npm ci` 适用于需要严格依赖版本管理的场景，确保开发和生产环境中的依赖一致性。

#### 适用场景

- **`npm install`** 适用于本地开发过程中安装和更新依赖。它灵活且易于使用，可以处理新的依赖添加和现有依赖的版本升级。
- **`npm ci`** 适用于持续集成和部署环境中，确保依赖安装的一致性和可靠性。它适合那些需要确保每次构建都能生成相同环境的场景。

#### 示例

##### `npm install` 示例：

```bash
npm install
npm install lodash
npm install mocha --save-dev
```

##### `npm ci` 示例：

```bash
npm ci
```

在使用 `npm ci` 之前，请确保 `package-lock.json` 文件已经存在且与 `package.json` 文件匹配。否则，`npm ci` 会失败。

#### 总结

- **`npm install`**：用于日常开发中安装和更新依赖，支持灵活的依赖管理和版本解析。
- **`npm ci`**：用于 CI/CD 环境中安装依赖，确保依赖的一致性和版本锁定，提供更快的安装速度。

选择合适的命令可以帮助你在不同的开发和部署阶段高效管理项目依赖。

## .npmrc

> [Document](https://docs.npmjs.com/cli/v10/configuring-npm/npmrc)

`.npmrc` 文件是 npm 的配置文件，它允许用户自定义 npm 的行为。这个文件可以存在于多个位置，每个位置都有不同的作用范围：

1. **全局配置**：`$HOME/.npmrc`（适用于所有项目和用户）
2. **项目配置**：项目根目录下的 `.npmrc`（仅适用于该项目）
3. **用户配置**：`$HOME/.npmrc` 或 Windows 的 `%USERPROFILE%\.npmrc`（适用于当前用户）
4. **npm 的内置配置**：`$PREFIX/etc/npmrc`（全局配置的基础）

### .npmrc 文件的结构

`.npmrc` 文件由键值对组成，每一行一个配置项。键和值之间用等号 `=` 分隔。下面是 `.npmrc` 文件中的一些常见配置项及其含义：

### 常见配置项

1. **`registry`**

   - 设置 npm 包的注册表 URL。
   - 默认值为 `https://registry.npmjs.org/`。
   - 示例：
     ```ini
     registry=https://registry.npmjs.org/
     ```

2. **`proxy` 和 `https-proxy`**

   - 设置 HTTP 和 HTTPS 代理。
   - 示例：
     ```ini
     proxy=http://proxy.company.com:8080
     https-proxy=https://proxy.company.com:8080
     ```

3. **`cache`**

   - 设置 npm 缓存目录。
   - 示例：
     ```ini
     cache=/path/to/cache
     ```

4. **`prefix`**

   - 设置全局安装包的路径前缀。
   - 示例：
     ```ini
     prefix=/usr/local
     ```

5. **`strict-ssl`**

   - 启用或禁用严格的 SSL 校验。
   - 示例：
     ```ini
     strict-ssl=true
     ```

6. **`auth`**

   - 设置注册表认证的 base64 编码。
   - 示例：
     ```ini
     _auth=dXNlcm5hbWU6cGFzc3dvcmQ=
     ```

7. **`always-auth`**

   - 强制所有请求都进行认证。
   - 示例：
     ```ini
     always-auth=true
     ```

8. **`email`**

   - 设置用户的电子邮件地址，用于 npm 用户认证。
   - 示例：
     ```ini
     email=example@example.com
     ```

9. **`save-exact`**

   - 安装包时保存确切版本，而不是版本范围。
   - 示例：
     ```ini
     save-exact=true
     ```

10. **`engine-strict`**

    - 启用后，如果 `package.json` 中的 `engines` 字段不满足当前环境，npm 将拒绝安装。
    - 示例：
      ```ini
      engine-strict=true
      ```

11. **`loglevel`**

    - 设置日志级别。可选值包括 `silent`, `error`, `warn`, `notice`, `http`, `timing`, `info`, `verbose`, `silly`。
    - 示例：
      ```ini
      loglevel=warn
      ```

12. **`package-lock`**
    - 启用或禁用 `package-lock.json` 文件的生成。
    - 示例：
      ```ini
      package-lock=true
      ```

### 示例 .npmrc 文件

以下是一个示例 `.npmrc` 文件，包含一些常见配置：

```ini
registry=https://registry.npmjs.org/
proxy=http://proxy.company.com:8080
https-proxy=https://proxy.company.com:8080
cache=/path/to/cache
prefix=/usr/local
strict-ssl=true
_auth=dXNlcm5hbWU6cGFzc3dvcmQ=
always-auth=true
email=example@example.com
save-exact=true
engine-strict=true
loglevel=warn
package-lock=true
```

### 配置范围

- **全局配置**：全局配置文件位于 `$HOME/.npmrc`，它会影响到该用户的所有项目。
- **项目配置**：项目配置文件位于项目的根目录下，这个文件只会影响当前项目。项目配置会覆盖用户配置和全局配置。
- **用户配置**：用户配置文件通常位于 `$HOME/.npmrc` 或 Windows 的 `%USERPROFILE%\.npmrc`，它会覆盖全局配置，但被项目配置覆盖。
- **内置配置**：npm 自身的默认配置文件位于 `$PREFIX/etc/npmrc`，所有其他配置文件都会覆盖这个配置。

### 管理 .npmrc 文件

1. **查看当前配置**：

   ```bash
   npm config list
   ```

2. **设置配置项**：

   ```bash
   npm config set <key> <value>
   ```

3. **删除配置项**：

   ```bash
   npm config delete <key>
   ```

4. **获取配置项**：

   ```bash
   npm config get <key>
   ```

5. **编辑 .npmrc 文件**：
   ```bash
   npm config edit
   ```

通过正确配置 `.npmrc` 文件，可以更好地管理 `npm` 的行为，提高开发效率，并确保项目的依赖管理更加可靠和安全。

## package.json

> [Document](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)

`package.json` 是一个包含项目元数据的重要文件，尤其在 `Node.js` 项目和前端项目中。它定义了项目的名称、版本、依赖、脚本等内容。以下是常见字段及其含义的详细解释：

### 基本字段

1. **`name`**

   - 项目名称，必须是小写字母，可以包含连字符。
   - 示例：
     ```json
     {
       "name": "my-project"
     }
     ```

2. **`version`**

   - 项目的版本号，通常遵循语义化版本（semver）格式，如 `1.0.0`。
   - 示例：
     ```json
     {
       "version": "1.0.0"
     }
     ```

3. **`description`**

   - 项目的简短描述。
   - 示例：
     ```json
     {
       "description": "A brief description of my project"
     }
     ```

4. **`main`**

   - 指定项目的入口文件，默认值是 `index.js`。
   - 示例：
     ```json
     {
       "main": "index.js"
     }
     ```

5. **`scripts`**

   - 定义可以运行的脚本命令。
   - 示例：
     ```json
     {
       "scripts": {
         "start": "node index.js",
         "test": "mocha"
       }
     }
     ```

6. **`keywords`**

   - 一个关键词数组，用于描述项目，有助于在 npm 搜索中找到。
   - 示例：
     ```json
     {
       "keywords": ["node", "express", "api"]
     }
     ```

7. **`author`**

   - 项目的作者信息。
   - 示例：
     ```json
     {
       "author": "John Doe <john@example.com>"
     }
     ```

8. **`license`**
   - 项目的许可证类型。
   - 示例：
     ```json
     {
       "license": "MIT"
     }
     ```

### 依赖字段

9. **`dependencies`**

   - 项目的生产依赖。
   - 示例：
     ```json
     {
       "dependencies": {
         "express": "^4.17.1"
       }
     }
     ```

10. **`devDependencies`**

    - 项目的开发依赖，仅在开发过程中需要。
    - 示例：
      ```json
      {
        "devDependencies": {
          "mocha": "^8.2.1"
        }
      }
      ```

11. **`peerDependencies`**

    - 项目依赖但不直接安装的包，通常用于插件。
    - 示例：
      ```json
      {
        "peerDependencies": {
          "react": "^17.0.0"
        }
      }
      ```

12. **`optionalDependencies`**
    - 可选依赖，安装失败不会导致整体安装失败。
    - 示例：
      ```json
      {
        "optionalDependencies": {
          "fsevents": "^2.1.2"
        }
      }
      ```

### 模块字段

13. **`module`**

    - 指定 ECMAScript 模块的入口文件，支持现代打包工具和 ESM。
    - 示例：
      ```json
      {
        "module": "dist/module.js"
      }
      ```

14. **`browser`**

    - 指定浏览器环境的入口文件，或用于替换特定的文件。
    - 示例：
      ```json
      {
        "browser": "dist/browser.js"
      }
      ```

15. **`exports`**
    - 定义模块的导出，允许更细粒度的控制模块暴露的文件。
    - 示例：
      ```json
      {
        "exports": {
          ".": "./main.js",
          "./feature": "./feature.js"
        }
      }
      ```

### 配置字段

16. **`config`**

    - 定义项目特定的配置。
    - 示例：
      ```json
      {
        "config": {
          "port": "8080"
        }
      }
      ```

17. **`engines`**

    - 指定项目所需的 `Node.js` 和 `npm` 版本。
    - 示例：
      ```json
      {
        "engines": {
          "node": ">=12.0.0",
          "npm": ">=6.0.0"
        }
      }
      ```

18. **`browserslist`**
    - 指定项目支持的浏览器范围，常用于前端工具（如 `Babel、Autoprefixer`）。
    - 示例：
      ```json
      {
        "browserslist": [">1%", "last 2 versions", "not dead"]
      }
      ```

### 特别需要关注的字段

1. **`dependencies` 和 `devDependencies`**

   - 确保项目的依赖和开发依赖明确区分和正确管理。

2. **`scripts`**

   - 定义常用脚本命令（如启动、测试、构建等），提高开发效率。

3. **`engines`**

   - 指定 `Node.js` 和 `npm` 版本，确保团队开发环境一致。

4. **`browserslist`**

   - 对于前端项目，定义支持的浏览器范围，以确保兼容性。

5. **`module` 和 `main`**
   - 确保正确配置模块的入口，特别是在使用现代 `JavaScript` 和打包工具时。

通过正确配置 `package.json` 文件，可以确保项目的依赖管理、构建和运行环境的一致性，提升开发和维护效率。

### browser，module，main 优先级

#### 文件优先级

> 由于我们使用的模块规范有 `ESM` 和 `commonJS` 两种，为了能在 `node` 环境下原生执行 ESM 规范的脚本文件，`.mjs` 文件就应运而生。

当你引入一个模块且没有明确指定扩展名时，`Node.js` 会按照以下优先级来解析模块：

1. 先查找与引入路径完全匹配的文件
2. 如果路径匹配目录，查找该目录下的 `package.json`，根据 `"main"` 或`"exports"` 字段解析模块入口文件。
3. 查找目录下的 `index` 文件，依次尝试 `index.mjs`、`index.cjs` 和 `index.js`。
   - 当存在 `index.mjs` 和 `index.js` 这种同名不同后缀的文件时，`import './index'` 或者 `require('./index')` 是会优先加载 `index.mjs` 文件的。
   - 也就是说，优先级 `.mjs > .cjs > .js`

例子：

```js
// import from 'module-path' will resolve in the following order:
import module from "module-path";

// 1. module-path.mjs
// 2. module-path.cjs
// 3. module-path.js
// 4. module-path/package.json with "main" or "exports" field
// 5. module-path/index.mjs
// 6. module-path/index.cjs
// 7. module-path/index.js
```

#### browser，module，main

在 `package.json` 文件中，`browser`、`module` 和 `main` 字段用于指示不同的模块入口点，特别是在不同的环境下（如浏览器与 `Node.js`）使用时。它们的优先级和用途如下：

1. **`browser` 字段**

   - 用于指示浏览器环境下的入口文件。
   - 这个字段通常用于替换 `Node.js` 特定的代码，以确保模块在浏览器环境中能正确运行。
   - 许多打包工具（如 `Webpack`、`Rollup`）会优先检查并使用 `browser` 字段。
   - 示例：
     ```json
     {
       "browser": "dist/browser.js"
     }
     ```

2. **`module` 字段**

   - 指定 `ECMAScript` 模块（`ESM`）的入口文件。
   - 用于支持现代打包工具和模块系统，确保模块可以利用 `ESM` 的优势（如静态分析和 `tree-shaking`）。
   - 当使用 `import` 语法或者现代打包工具时，`module` 字段通常优先于 `main` 字段。
   - 示例：
     ```json
     {
       "module": "dist/module.js"
     }
     ```

3. **`main` 字段**
   - 是 `Node.js` 默认的入口文件字段，指向模块的 `CommonJS` 入口。
   - 当没有指定 `browser` 或 `module` 字段时，`Node.js` 会默认使用 `main` 字段。
   - 这个字段也被许多工具作为最后的回退选项。
   - 示例：
     ```json
     {
       "main": "dist/main.js"
     }
     ```

##### 优先级

在引入模块时，不同工具和环境会根据自己的规则来决定使用哪个字段。以下是一般的优先级规则：

1. **在浏览器环境中**（使用如 Webpack 等打包工具时）：

   - 如果存在 `browser` 字段，优先使用 `browser`。
   - 如果没有 `browser` 字段，查找并使用 `module` 字段。
   - 如果没有 `module` 字段，最终使用 `main` 字段。

2. **在 Node.js 环境中**：
   - 通常优先使用 `main` 字段。
   - 某些现代项目或工具链可能会查找 `module` 字段以支持 ESM。
   - `Node.js` 本身不会检查 `browser` 字段。

综合来看，具体的优先级顺序可能如下：

1. `browser`（如果在浏览器环境中）
2. `module`（如果存在，并且工具支持 ESM）
3. `main`（作为最后的回退）

##### 示例

假设你的 `package.json` 如下：

```json
{
  "browser": "dist/browser.js",
  "module": "dist/module.js",
  "main": "dist/main.js"
}
```

- **在浏览器环境中**，打包工具如 `Webpack` 会首先选择 `dist/browser.js`。
- **在支持 ESM 的环境中**，如现代的打包工具，可能会选择 `dist/module.js`。
- **在 Node.js 环境中**，会选择 `dist/main.js`（除非特定工具或配置指示使用 `module`）。

这种设置确保你的模块在不同环境中都能被正确引入和使用。

## package-lock.json 和 npm-shrinkwrap.json 区别

`package-lock.json` 和 `npm-shrinkwrap.json` 都用于锁定项目依赖的具体版本，确保在不同环境下安装时依赖的一致性。虽然它们有相似的功能，但用途和优先级有所不同。以下是详细的解释和比较：

### package-lock.json

#### 作用

1. **版本锁定**：`package-lock.json` 文件锁定项目中所有依赖的具体版本（包括直接依赖和间接依赖），确保在不同环境下安装时依赖的一致性。
2. **加速安装**：通过记录每个包的具体下载地址和版本，`package-lock.json` 文件可以加速后续安装过程，因为 npm 不再需要解析版本范围。
3. **安全性**：记录每个包的完整性哈希值，确保下载的包未被篡改。
4. **再现性**：确保项目在不同开发环境和 CI/CD 环境中生成相同的依赖树。

#### 生成方式

- 自动生成：每次运行 `npm install` 时，npm 会自动生成或更新 `package-lock.json` 文件。

#### 使用场景

- **开发环境**：主要用于开发过程中，确保团队成员之间的一致性。
- **版本控制**：通常会将 `package-lock.json` 文件提交到版本控制系统，以确保在不同环境中安装的依赖版本一致。

#### 示例

`package-lock.json` 文件的示例：

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "lockfileVersion": 2,
  "requires": true,
  "dependencies": {
    "lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-v2kDEslBZ+kgWhg8PrJ5eylK8+z5mO75Y9R4lSAC8MwHC8pvQCTk1H9WZXr6F0qMkszWkAlvXBr8ZkCn2VfHeA==",
      "requires": {}
    },
    "express": {
      "version": "4.17.1",
      "resolved": "https://registry.npmjs.org/express/-/express-4.17.1.tgz",
      "integrity": "sha512-foobar==",
      "requires": {
        "accepts": "^1.3.7",
        "array-flatten": "^1.1.1"
      }
    }
  }
}
```

### npm-shrinkwrap.json

#### 作用

1. **版本锁定**：与 `package-lock.json` 相同，`npm-shrinkwrap.json` 文件锁定项目中所有依赖的具体版本，确保在不同环境下安装时依赖的一致性。
2. **部署环境**：更常用于生产环境部署，确保生产环境安装的依赖版本固定。
3. **优先级**：如果项目中存在 `npm-shrinkwrap.json` 文件，npm 会优先使用该文件而不是 `package-lock.json`。

#### 生成方式

- 手动生成：通过运行 `npm shrinkwrap` 命令生成 `npm-shrinkwrap.json` 文件。

#### 使用场景

- **生产环境**：确保生产环境的依赖版本与开发环境一致，适用于需要严格控制依赖版本的项目。
- **共享代码库**：在团队开发和开源项目中使用，确保所有开发者安装相同版本的依赖。

#### 示例

`npm-shrinkwrap.json` 文件的示例：

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "lockfileVersion": 2,
  "requires": true,
  "dependencies": {
    "lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-v2kDEslBZ+kgWhg8PrJ5eylK8+z5mO75Y9R4lSAC8MwHC8pvQCTk1H9WZXr6F0qMkszWkAlvXBr8ZkCn2VfHeA==",
      "requires": {}
    },
    "express": {
      "version": "4.17.1",
      "resolved": "https://registry.npmjs.org/express/-/express-4.17.1.tgz",
      "integrity": "sha512-foobar==",
      "requires": {
        "accepts": "^1.3.7",
        "array-flatten": "^1.1.1"
      }
    }
  }
}
```

### 主要区别

1. **生成方式**：

   - `package-lock.json`：自动生成和更新。
   - `npm-shrinkwrap.json`：需要手动生成。

2. **优先级**：

   - 如果项目中同时存在 `package-lock.json` 和 `npm-shrinkwrap.json`，npm 会优先使用 `npm-shrinkwrap.json`。

3. **使用场景**：

   - `package-lock.json`：主要用于开发环境，确保团队开发一致性。
   - `npm-shrinkwrap.json`：主要用于生产环境部署，确保生产环境的依赖版本固定。

4. **文件目的**：
   - `package-lock.json`：锁定依赖版本，确保开发环境一致性。
   - `npm-shrinkwrap.json`：锁定依赖版本，确保生产环境一致性和可重复性。

### 总结

- **`package-lock.json`** 是在开发环境中自动生成的锁定文件，用于确保开发过程中依赖的一致性和稳定性。
- **`npm-shrinkwrap.json`** 是手动生成的文件，主要用于生产环境部署，确保在不同环境下安装依赖的一致性。

通过合理使用这两个文件，可以有效地管理项目依赖，确保项目在不同开发和生产环境中的稳定性和一致性。

## [Pnpm Npm 和 Yarn 区别](../Pnpm.md#pnpm-npm-和-yarn-区别)
