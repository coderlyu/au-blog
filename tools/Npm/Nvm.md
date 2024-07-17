# Nvm

`nvm`（Node Version Manager）是一个用于管理 Node.js 版本的工具，它允许你在同一台机器上安装和切换不同版本的 Node.js。`nvm` 非常适合于需要在多个 Node.js 项目之间切换、测试不同版本的开发人员。

### 安装 nvm

#### macOS 和 Linux

你可以使用以下命令来安装 `nvm`：

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

或者使用 `wget`：

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

安装完成后，你需要重新启动终端或运行以下命令来加载 `nvm`：

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

#### Windows

对于 Windows，推荐使用 `nvm-windows`，你可以从 [nvm-windows 的 GitHub 页面](https://github.com/coreybutler/nvm-windows)下载安装程序。

### 使用 nvm

#### 安装 Node.js 版本

使用 `nvm install` 命令安装特定版本的 Node.js：

```bash
nvm install 14.17.0
nvm install 16.13.0
```

你也可以安装最新的 LTS 版本或最新的稳定版本：

```bash
nvm install --lts
nvm install node
```

#### 切换 Node.js 版本

使用 `nvm use` 命令切换到指定版本的 Node.js：

```bash
nvm use 14.17.0
nvm use 16.13.0
```

查看当前使用的 Node.js 版本：

```bash
nvm current
```

#### 查看已安装的 Node.js 版本

使用 `nvm ls` 命令查看本地安装的所有 Node.js 版本：

```bash
nvm ls
```

你还可以使用 `nvm ls-remote` 查看可以安装的所有远程版本：

```bash
nvm ls-remote
```

#### 设置默认版本

使用 `nvm alias` 命令设置默认的 Node.js 版本：

```bash
nvm alias default 14.17.0
```

以后打开终端时会自动使用这个默认版本。

#### 卸载 Node.js 版本

使用 `nvm uninstall` 命令卸载特定版本的 Node.js：

```bash
nvm uninstall 14.17.0
```

### 优势

1. **多版本管理**：允许在同一台机器上安装和切换多个 Node.js 版本，适用于需要维护多个项目的开发者。
2. **简便切换**：通过简单的命令切换 Node.js 版本，而不需要手动更改系统路径。
3. **版本隔离**：不同项目可以使用不同的 Node.js 版本，避免了全局版本冲突的问题。
4. **支持 LTS 版本**：可以轻松安装和切换到最新的 LTS（长期支持）版本，确保使用稳定的 Node.js 版本。

### 常见问题

1. **nvm 命令未找到**：确保你已经将 nvm 的加载脚本添加到你的 shell 配置文件中（例如 `.bashrc`、`.zshrc` 或 `.profile`）。
2. **权限问题**：在使用 `nvm` 安装 Node.js 版本时，不需要使用 `sudo`，因为它会将 Node.js 安装到用户的主目录中。

### 结论

`nvm` 是一个强大的工具，可以帮助你轻松管理和切换不同版本的 Node.js，特别是在开发多个项目或测试不同 Node.js 版本时非常有用。通过掌握 `nvm` 的基本用法，你可以更高效地管理你的 Node.js 开发环境。
