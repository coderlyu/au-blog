# Nrm

`nrm`（NPM Registry Manager）是一个用于快速切换和管理 npm 注册表的工具。它允许你在多个 npm 镜像源之间快速切换，方便你在不同网络环境或项目需求下选择合适的 npm 注册表。

### 安装 nrm

你可以通过以下命令全局安装 `nrm`：

```bash
npm install -g nrm
```

### 使用 nrm

#### 列出所有可用的注册表

使用 `nrm ls` 命令列出所有可用的 npm 注册表：

```bash
nrm ls
```

示例输出：

```plaintext
  npm ---- https://registry.npmjs.org/
  yarn --- https://registry.yarnpkg.com/
  tencent - https://mirrors.cloud.tencent.com/npm/
  cnpm --- https://r.cnpmjs.org/
  taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  npmMirror - https://skimdb.npmjs.com/registry/
* unpm ---- http://unpm.mydomain.com
```

星号 `*` 表示当前使用的注册表。

#### 切换注册表

使用 `nrm use` 命令切换到指定的注册表：

```bash
nrm use taobao
```

切换后你会看到类似以下的输出：

```plaintext
  Registry has been set to: https://registry.npm.taobao.org/
```

#### 添加自定义注册表

使用 `nrm add` 命令添加自定义的 npm 注册表：

```bash
nrm add <name> <url>
```

例如，添加一个名为 `myregistry` 的自定义注册表：

```bash
nrm add myregistry https://registry.myregistry.com/
```

#### 删除注册表

使用 `nrm del` 命令删除一个注册表：

```bash
nrm del <name>
```

例如，删除名为 `myregistry` 的注册表：

```bash
nrm del myregistry
```

#### 查看当前使用的注册表

使用 `nrm current` 命令查看当前使用的 npm 注册表：

```bash
nrm current
```

输出类似：

```plaintext
  https://registry.npm.taobao.org/
```

#### 测试注册表速度

使用 `nrm test` 命令测试所有注册表的响应速度：

```bash
nrm test
```

示例输出：

```plaintext
  npm ---- 1000ms
  yarn --- 500ms
  tencent - 300ms
  cnpm --- 700ms
  taobao - 200ms
  nj ----- 600ms
  npmMirror - 800ms
  unpm ---- 1100ms
```

#### 设置超时时间

使用 `nrm timeout` 命令设置请求超时时间（单位为毫秒）：

```bash
nrm timeout <milliseconds>
```

例如，设置超时时间为 5000 毫秒：

```bash
nrm timeout 5000
```

### 优势

1. **快速切换**：可以快速在多个 npm 注册表之间切换，适应不同的网络环境和项目需求。
2. **提高速度**：在网络较慢或受到限制时，可以切换到更快的镜像源，提高包的下载速度。
3. **简单易用**：通过简单的命令行操作即可管理和切换 npm 注册表。
4. **自定义**：可以添加、删除自定义注册表，灵活性高。

### 适用场景

- **国内开发者**：国内访问 `npm` 官方注册表较慢时，可以切换到国内的镜像源如淘宝源。
- **企业内部**：使用企业内部的私有 npm 注册表进行包管理时，可以通过 `nrm` 快速切换。
- **多项目开发**：在多个项目中使用不同的注册表时，使用 `nrm` 可以方便地在注册表之间切换。

### 常见问题

1. **无法安装**：确保你已全局安装 `npm` 和 `nrm`，并且具有足够的权限。
2. **网络问题**：如果某个注册表无法访问，可以使用 `nrm test` 命令检查响应速度，并切换到可用的注册表。

### 总结

`nrm` 是一个非常实用的 npm 工具，特别适合需要频繁在不同 npm 注册表之间切换的开发者。它可以显著提高包管理的效率，并提供灵活的自定义选项。通过掌握 `nrm` 的基本用法，你可以更高效地管理和使用 npm 注册表。
