# 计算机网络

## 目录

1. [http](./http/README.md)
2. [https](./https/READMD.md)
3. [Tcp/ip](./Tcp_Ip/READMD.md)
4. [网络安全](./网络安全/README.md)

## 请求方式

### GET 和 POST 的区别

#### **前端中 GET 和 POST 请求的区别**

在前端开发中，GET 和 POST 是最常用的 **HTTP 方法**，用于与服务器进行数据交互。虽然它们都是用于客户端与服务器之间的通信，但在使用场景、数据传输方式、性能和安全性等方面存在显著差异。

---

#### **1. 基本定义**

- **GET**：用于**请求数据**，不改变服务器的资源状态。
- **POST**：用于**发送数据**到服务器，通常会改变服务器的资源状态（如提交表单、上传文件）。

---

#### **2. GET 和 POST 的主要区别**

| **比较项**       | **GET**                                               | **POST**                                         |
| ---------------- | ----------------------------------------------------- | ------------------------------------------------ |
| **请求目的**     | 获取资源或数据。                                      | 向服务器发送数据，改变服务器状态。               |
| **数据传输方式** | **通过 URL 参数传递**（`?key=value`）。               | **通过请求体（Body）传递数据**。                 |
| **数据长度限制** | 受浏览器和服务器对 URL 长度的限制（通常 2048 字符）。 | 请求体理论上无长度限制（但服务器可能有设置）。   |
| **参数可见性**   | 数据显示在 URL 中，**易被查看和缓存**。               | 数据放在请求体中，**不会显示在 URL 中**。        |
| **幂等性**       | 幂等：多次请求结果相同。                              | 非幂等：多次请求可能导致不同结果（如多次提交）。 |
| **缓存支持**     | **可缓存**，适合请求静态资源。                        | 默认**不缓存**，适用于提交数据。                 |
| **安全性**       | 数据暴露在 URL 中，**不适合敏感数据**。               | 数据在请求体中，相对更安全。                     |
| **请求速度**     | 较快，因数据在 URL 中，适合小数据量请求。             | 较慢，数据在请求体中，适合大数据量传输。         |

---

#### **3. GET 和 POST 的使用场景**

##### **GET 的使用场景：**

- 获取静态资源（如 HTML 页面、CSS、JS 文件）。
- 查询数据（如搜索关键词、过滤条件）。
- 请求的数据**不敏感**且不会改变服务器状态（如查询天气）。

**示例：**

```javascript
fetch("https://example.com/api/data?userId=123")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

##### **POST 的使用场景：**

- **提交表单**数据（如注册、登录）。
- **上传文件**（如图片、视频）。
- 发送大数据或结构复杂的数据（如 JSON）。
- 需要**修改服务器状态**（如添加或删除数据库中的记录）。

**示例：**

```javascript
fetch("https://example.com/api/upload", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username: "LiuYu", password: "123456" }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
```

---

#### **4. 安全性考量**

- **GET 请求不应传输敏感数据**：因为数据会暴露在 URL 中，容易被浏览器缓存或出现在日志中。
- **POST 请求更适合敏感数据**：虽然数据在请求体中不直接暴露，但为了更安全，建议结合 **HTTPS** 进行加密传输。

---

#### **5. GET 和 POST 在浏览器的区别**

- **重载页面时的行为**：

  - **GET**：刷新页面时，浏览器会重新发起请求。
  - **POST**：刷新时会提示用户确认是否要重新提交数据，避免重复提交（如订单支付）。

- **浏览器缓存**：
  - **GET**请求结果更容易被缓存，用于加快页面加载。
  - **POST**请求默认不缓存。

---

#### **6. 小结**

| **特性**       | **GET**            | **POST**           |
| -------------- | ------------------ | ------------------ |
| **适用场景**   | 获取资源、查询数据 | 提交数据、上传文件 |
| **数据量大小** | 小数据             | 大数据             |
| **数据位置**   | URL 参数           | 请求体             |
| **缓存支持**   | 支持               | 不支持             |
| **敏感数据**   | 不适合             | 适合               |

GET 和 POST 各有优劣，在实际开发中应根据需求选择合适的方法。如果是简单的查询数据，选择 **GET**；如果需要提交表单、上传文件或改变服务器状态，使用 **POST**。结合 **HTTPS**，可以提升通信的安全性。

### 简单请求和预检请求

#### **预检请求（Preflight Request）简介**

**预检请求**是**CORS（跨域资源共享，Cross-Origin Resource Sharing）**的一部分，用于处理 **跨域请求**。当客户端（如浏览器）发起某些敏感的 **非简单请求**（non-simple request）时，浏览器会在正式请求之前，先发送一个 **OPTIONS 请求**到服务器，以确认服务器是否允许该跨域请求。这一过程称为**预检请求**。

---

#### **1. 为什么需要预检请求？**

跨域请求会带来潜在的安全风险（如 CSRF 攻击）。为了确保跨域访问是安全且受控的，浏览器需要通过预检请求与服务器确认：

- 服务器是否允许来自指定**来源（origin）**的跨域请求。
- 服务器是否允许使用**特定的 HTTP 方法**和**自定义请求头**。
- 如果预检请求被允许，浏览器才会继续发送正式的跨域请求。

---

#### **2. 什么是简单请求和非简单请求？**

##### **简单请求**（不会触发预检请求）

如果跨域请求满足以下条件，则认为是**简单请求**：

- **HTTP 方法**：`GET`、`POST`、`HEAD`。
- **请求头**：只能包含以下几个：
  - `Accept`
  - `Accept-Language`
  - `Content-Language`
  - `Content-Type`（且只能是 `application/x-www-form-urlencoded`、`multipart/form-data` 或 `text/plain`）。
- **不使用** `Authorization` 头或其他自定义头。

##### **非简单请求**（会触发预检请求）

如果跨域请求不满足上述条件（例如使用了 `PUT`、`DELETE`、自定义请求头等），浏览器会在正式请求之前**发送预检请求**。

---

#### **3. 预检请求的工作流程**

1. **浏览器发送 OPTIONS 请求**：

   - 浏览器向服务器发送一个 **OPTIONS** 请求，询问服务器是否允许该跨域请求。
   - 请求中包含：
     - `Origin`：发起请求的来源。
     - `Access-Control-Request-Method`：即将发送的实际请求的方法。
     - `Access-Control-Request-Headers`：即将发送的实际请求中的自定义头信息（如 `Authorization`、`X-Custom-Header` 等）。

   **预检请求示例**：

   ```http
   OPTIONS /api/data HTTP/1.1
   Host: example.com
   Origin: http://localhost:3000
   Access-Control-Request-Method: POST
   Access-Control-Request-Headers: Content-Type, Authorization
   ```

2. **服务器响应 OPTIONS 请求**：

   - 如果服务器允许该跨域请求，会返回类似如下的响应：

     ```http
     HTTP/1.1 204 No Content
     Access-Control-Allow-Origin: http://localhost:3000
     Access-Control-Allow-Methods: GET, POST, OPTIONS
     Access-Control-Allow-Headers: Content-Type, Authorization
     Access-Control-Max-Age: 86400
     ```

   - 关键响应头：
     - **Access-Control-Allow-Origin**：指定允许的来源。
     - **Access-Control-Allow-Methods**：允许的 HTTP 方法。
     - **Access-Control-Allow-Headers**：允许的请求头。
     - **Access-Control-Max-Age**：预检结果的缓存时间（以秒为单位）。

3. **浏览器发送实际请求**：
   - 如果服务器允许预检请求，浏览器会发送**实际请求**。
   - 如果不允许，浏览器会阻止请求，且不会将请求发送给服务器。

---

#### **4. 示例：跨域请求的完整过程**

##### **前端请求代码**：

```javascript
fetch("https://example.com/api/data", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer abc123",
  },
  body: JSON.stringify({ name: "Liu Yu", age: 29 }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

##### **预检请求**（由浏览器自动发送）：

```http
OPTIONS /api/data HTTP/1.1
Host: example.com
Origin: http://localhost:3000
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Content-Type, Authorization
```

##### **预检响应**：

```http
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Max-Age: 86400
```

##### **实际请求**：

```http
POST /api/data HTTP/1.1
Host: example.com
Origin: http://localhost:3000
Content-Type: application/json
Authorization: Bearer abc123

{ "name": "Liu Yu", "age": 29 }
```

---

#### **5. 如何优化预检请求？**

预检请求会增加**额外的网络开销**，尤其是在频繁跨域请求时。因此，可以采用以下策略进行优化：

1. **使用简单请求**：

   - 尽量避免使用复杂的 HTTP 方法和自定义头，以避免触发预检请求。

2. **缓存预检请求结果**：

   - 通过设置 **`Access-Control-Max-Age`** 响应头，让浏览器缓存预检请求的结果：
     ```http
     Access-Control-Max-Age: 86400  // 一天
     ```
   - 这样可以避免每次请求都触发预检。

3. **合并请求**：
   - 将多个请求合并为一个，减少预检请求的数量。

---

#### **6. 总结**

预检请求是浏览器为确保跨域请求安全而执行的验证步骤，用于与服务器确认是否允许跨域访问。

- **GET、POST** 等简单请求不会触发预检请求，但使用自定义头或复杂方法的请求会触发预检。
- 通过设置 **`Access-Control-Allow-*`** 相关响应头，服务器可以控制哪些请求可以通过。

尽量减少复杂请求，或者合理使用 **`Access-Control-Max-Age`** 缓存预检结果，可以提高性能，减少请求延迟。

### 预检请求在 HTTP 和 HTTPS 中的区别

预检请求（Preflight Request） 是 CORS（跨域资源共享） 的一部分，用于确保浏览器发起的跨域请求是安全且符合服务器策略的。这种机制与传输协议无关，即：

    •	预检请求同样适用于 HTTP 和 HTTPS。
    •	无论使用 HTTP 还是 HTTPS，如果跨域请求满足触发预检请求的条件，浏览器都会先发送 OPTIONS 预检请求。

1. HTTP 与 HTTPS 对预检请求的影响

   • HTTP 和 HTTPS 只是数据传输层的协议。
   • HTTP：数据以明文形式传输，容易被窃听和篡改。
   • HTTPS：使用 TLS/SSL 加密保护数据传输的安全性。
   • CORS 和预检请求是应用层的一种机制，目的是保护客户端与服务器之间的跨域访问。因此，无论 HTTP 还是 HTTPS，都必须遵守 CORS 规范。
   • 唯一区别在于：
   • HTTPS 保障了预检请求和正式请求的数据都被加密传输。
   • 在 HTTP 下，虽然预检请求同样有效，但数据传输不安全（未加密）。

2. HTTPS 中的预检请求示例

前端跨域请求（HTTPS 环境）：

```js
fetch("https://example.com/api/data", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer abc123",
  },
  body: JSON.stringify({ name: "Liu Yu", age: 29 }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

预检请求（OPTIONS 请求）：

```
OPTIONS /api/data HTTP/1.1
Host: example.com
Origin: https://frontend.com
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Content-Type, Authorization
```

服务器响应：

```
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: https://frontend.com
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Max-Age: 86400
```

3. 为什么 HTTPS 中仍然需要预检请求？

   1. CORS 是应用层的机制：
      • 主要目的是防止恶意跨域请求，而与传输层的加密无关。
      • 即使 HTTPS 已经保障了数据传输的安全性，CORS 仍然需要确保跨域访问是受控的。
   2. 避免未经授权的数据访问：
      • 预检请求用于确认客户端是否有权限向服务器发送特定的跨域请求。
   3. 保障服务器资源的安全：
      • 即使在 HTTPS 下，未经授权的跨域请求也可能导致数据泄露或资源滥用。因此预检请求是必要的。

4. 小结

   • 预检请求在 HTTP 和 HTTPS 中都存在，两者在 CORS 行为上没有区别。
   • HTTPS 提供了更安全的数据传输，但不会影响预检请求的工作原理。
   • 无论使用 HTTP 还是 HTTPS，只要请求符合 非简单请求的条件，浏览器都会自动发起 OPTIONS 预检请求。

## 常见端口号

计算机网络中，端口号用于标识主机中的特定服务或应用程序。以下是常见的端口号及其对应的协议和服务：

---

### **常见端口号及协议分类**

| 端口号范围  | 描述                                                        |
| ----------- | ----------------------------------------------------------- |
| 0-1023      | **知名端口号 (Well-known Ports)**，常用于标准服务           |
| 1024-49151  | **注册端口号 (Registered Ports)**，用于特定应用             |
| 49152-65535 | **动态/私有端口号 (Dynamic/Private Ports)**，为临时连接分配 |

---

### **常见服务及其端口号**

| 端口号     | 协议    | 描述                                                                               |
| ---------- | ------- | ---------------------------------------------------------------------------------- |
| **20, 21** | TCP     | **FTP** (文件传输协议)，用于文件上传和下载，21 端口负责控制连接，20 端口传输数据。 |
| **22**     | TCP     | **SSH** (安全外壳协议)，用于远程登录和安全数据传输。                               |
| **23**     | TCP     | **Telnet**，用于远程登录（不安全，明文传输）。                                     |
| **25**     | TCP     | **SMTP** (简单邮件传输协议)，用于发送电子邮件。                                    |
| **53**     | UDP/TCP | **DNS** (域名系统)，将域名解析为 IP 地址。                                         |
| **80**     | TCP     | **HTTP** (超文本传输协议)，用于 Web 服务的无加密通信。                             |
| **110**    | TCP     | **POP3** (邮局协议 v3)，用于接收电子邮件。                                         |
| **143**    | TCP     | **IMAP** (互联网邮件访问协议)，用于在线访问电子邮件。                              |
| **443**    | TCP     | **HTTPS** (安全超文本传输协议)，HTTP 的加密版本，使用 TLS/SSL 保护通信。           |
| **3389**   | TCP     | **RDP** (远程桌面协议)，用于远程访问 Windows 系统。                                |
| **3306**   | TCP     | **MySQL** 数据库默认端口。                                                         |
| **1433**   | TCP     | **SQL Server** 数据库默认端口。                                                    |
| **6379**   | TCP     | **Redis** 内存数据库默认端口。                                                     |
| **27017**  | TCP     | **MongoDB** 数据库默认端口。                                                       |
| **8080**   | TCP     | 常用于测试和开发环境的 HTTP 服务。                                                 |

---

### **UDP 专用端口**

| 端口号       | 协议 | 描述                                                            |
| ------------ | ---- | --------------------------------------------------------------- |
| **67, 68**   | UDP  | **DHCP** (动态主机配置协议)，67 端口为服务器，68 端口为客户端。 |
| **69**       | UDP  | **TFTP** (简单文件传输协议)，用于无状态文件传输。               |
| **161, 162** | UDP  | **SNMP** (简单网络管理协议)，用于网络设备监控。                 |
| **123**      | UDP  | **NTP** (网络时间协议)，用于时间同步。                          |

---

### **WebSocket 和 HTTP/2 端口**

| 端口号     | 协议 | 描述                                                                |
| ---------- | ---- | ------------------------------------------------------------------- |
| **80/443** | TCP  | **WebSocket** 使用 HTTP 和 HTTPS 协议进行握手，分别对应 ws 和 wss。 |
| **8080**   | TCP  | WebSocket 开发环境中常用端口。                                      |
| **8443**   | TCP  | HTTP/2 和 WebSocket 的安全端口。                                    |

---

### **Ephemeral Ports（临时端口）**

- 范围：**49152-65535**
- 用于客户端建立 TCP 或 UDP 连接时的临时端口，例如访问 Web 服务器时客户端会随机分配一个临时端口。

---

### **总结**

理解常见端口号及其用途有助于网络开发和排查故障。例如，在服务器配置防火墙时，合理开放端口能有效防止不必要的安全风险。在日常开发中，80 和 443 端口广泛用于 Web 服务，而 3306、6379 等数据库端口则常用于应用与数据库的通信。

需要更详细了解某个端口或协议吗？
