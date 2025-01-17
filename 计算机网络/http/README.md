# Http

### 常见状态码

HTTP 状态码是服务器返回给客户端的重要信息，用于表示请求的处理结果。常见的 HTTP 状态码分为五大类，每一类表示不同的类型响应。下面是最常见的状态码及其含义：

1. 1xx：信息响应

1xx 状态码表示请求已经被接受，服务器正在继续处理。

    •	100 Continue：客户端应继续发送请求的其余部分。通常用于大数据上传前的初步确认。
    •	101 Switching Protocols：服务器接受了客户端的请求，并将协议切换为客户端请求的协议（如从 HTTP 切换到 WebSocket）。

2. 2xx：成功响应

2xx 状态码表示请求已成功处理。

    •	200 OK：请求成功，服务器已返回所请求的资源。是最常见的成功响应状态码。
    •	201 Created：请求成功，且服务器已创建了新的资源（通常用于 POST 请求）。
    •	202 Accepted：服务器已接受请求，但尚未处理完成，常用于异步操作。
    •	204 No Content：请求成功，但服务器没有返回任何内容，通常用于不需要返回数据的请求。

3. 3xx：重定向

3xx 状态码表示客户端需要采取进一步的操作（通常是重定向）以完成请求。

    •	301 Moved Permanently：请求的资源已被永久移动到新的 URL，客户端应使用新的 URL 访问资源。
    •	302 Found：请求的资源临时被移动到另一个 URL，客户端应该继续使用原有的 URL 访问资源（但实际上经常被用于和 303 一样的场景）。
    •	303 See Other：请求资源可在另一个 URL 获取，客户端应使用 GET 方法获取该资源，通常用于 POST 操作后重定向。
    •	304 Not Modified：客户端的缓存资源未更改，服务器告知客户端使用本地缓存资源而不需要再次下载，常用于浏览器缓存机制。
    •	307 Temporary Redirect：请求的资源临时被移动到另一个 URL，但客户端应继续使用原来的 HTTP 方法进行请求（类似于 302，但更严格）。

4. 4xx：客户端错误

4xx 状态码表示客户端的请求有问题，服务器无法处理。

    •	400 Bad Request：请求无效，通常由于请求格式错误或缺少必要的参数。
    •	401 Unauthorized：请求未被授权，通常需要身份验证（如缺少或错误的身份认证令牌）。
    •	403 Forbidden：服务器拒绝执行请求，客户端虽然已认证，但无权访问所请求的资源。
    •	404 Not Found：请求的资源在服务器上不存在，常见的资源未找到错误。
    •	405 Method Not Allowed：请求使用了服务器不支持的 HTTP 方法（如在服务器上禁止使用 PUT 方法的请求）。
    •	408 Request Timeout：客户端请求超时，服务器等待客户端发送数据超出预设时间后关闭连接。
    •	409 Conflict：请求在当前服务器状态下无法处理，通常表示资源的状态与客户端的操作冲突（如多次修改同一个资源）。
    •	410 Gone：请求的资源已永久删除，且不再提供，区别于 404，表示资源曾经存在，但现在已移除。
    •	413 Payload Too Large：请求的数据体积太大，服务器无法处理。
    •	429 Too Many Requests：客户端发送了过多请求，常见于服务器的速率限制策略。

5. 5xx：服务器错误

5xx 状态码表示服务器在处理请求时发生了错误。

    •	500 Internal Server Error：服务器内部错误，未能完成请求，通常是服务器代码或配置错误。
    •	501 Not Implemented：服务器不支持请求的功能或方法，表示服务器没有能力处理请求。
    •	502 Bad Gateway：作为网关或代理的服务器，从上游服务器接收到无效响应。常见于代理或负载均衡的环境中。
    •	503 Service Unavailable：服务器暂时无法处理请求，可能是由于过载或维护。客户端可以稍后再试。
    •	504 Gateway Timeout：作为网关或代理的服务器未能及时从上游服务器获取响应，表示请求超时。
    •	505 HTTP Version Not Supported：服务器不支持客户端请求所使用的 HTTP 版本。

总结

    •	1xx：信息类状态码，表示请求正在处理中。
    •	2xx：成功类状态码，表示请求成功处理。
    •	3xx：重定向类状态码，表示客户端需要采取进一步行动。
    •	4xx：客户端错误类状态码，表示请求有问题。
    •	5xx：服务器错误类状态码，表示服务器无法处理请求。

### 介绍下如何实现 token 加密

实现 Token 加密 是保护应用程序中敏感数据（如用户身份验证信息）的一种重要安全手段。Token 加密通常用于确保 JWT (JSON Web Token) 或其他类型的令牌在传输和存储过程中的安全性，以防止它们被恶意篡改或窃取。下面介绍如何实现 Token 加密，尤其是在 JWT 的使用场景下。

1. 什么是 Token

Token 是一种用于标识用户身份和权限的字符串。它通常用于无状态身份验证机制，服务器无需在每次请求时保持用户会话信息，而是通过 Token 验证用户身份。

2. Token 的加密与签名

Token 加密通常包括两部分：签名（保证数据完整性和真实性）和加密（保护数据机密性）。

    •	签名：确保 Token 在传输中没有被篡改。通过 HMAC（哈希消息认证码）或 RSA、ECDSA 等算法对 Token 进行数字签名。
    •	加密：确保 Token 内的敏感数据（如用户信息）不会被暴露。可以使用对称或非对称加密算法对 Token 的内容加密。

3. JWT 的加密流程

JWT 是一种常用的 Token 格式，包含了三个部分：

    •	Header（头部）：包含类型和使用的加密算法（如 HMAC、RSA 等）。
    •	Payload（负载）：存储用户信息或声明。
    •	Signature（签名）：用于验证 Token 的真实性。

虽然 JWT 通常只使用签名来防止篡改，但在一些敏感应用中，还需要对 JWT 的内容进行加密。下面是实现 Token 加密的常见步骤：

4. Token 签名 (未加密的 JWT)

JWT 的签名使用指定的算法对 Token 的头部和负载进行签名，常用的签名算法包括 HMAC、RSA 和 ECDSA。这使得 Token 在传输过程中，即使内容可被解析，攻击者也无法篡改它。

签名 JWT 的过程：

    1.	创建头部：

{
"alg": "HS256",
"typ": "JWT"
}

    2.	创建负载（包含用户信息或声明）：

{
"sub": "1234567890",
"name": "Liu Yu",
"admin": true
}

    3.	生成签名：

使用 Base64 编码头部和负载，并使用 HMAC 或 RSA 算法生成签名。

HMACSHA256(
base64UrlEncode(header) + "." + base64UrlEncode(payload),
secret)

    4.	组合 JWT：

最终生成的 JWT 是由 header、payload 和 signature 组成的字符串，格式为：

header.payload.signature

这时生成的 JWT 是不可篡改的，但负载部分是可解码的。

5. 加密 JWT (JWE - JSON Web Encryption)

为了保护 JWT 中的敏感数据（例如用户的身份信息或权限），我们可以对 JWT 的负载部分进行加密。这时，JWT 的结构会变成 JWE（JSON Web Encryption），它提供了加密和解密的功能。

加密 JWT 的过程：

    1.	选择加密算法：

JWE 支持对称加密算法（如 AES）和非对称加密算法（如 RSA）。典型的选择是使用 RSA/OAEP 进行密钥加密，使用 AES/GCM 对负载进行加密。 2. 创建 JWE 头部：
指定使用的加密算法和加密方法。例如：

{
"alg": "RSA-OAEP",
"enc": "A256GCM",
"typ": "JWT"
}

    3.	生成对称密钥：
    •	如果使用对称加密，如 AES，则需要生成一个对称密钥，用于加密和解密数据。
    •	如果使用非对称加密（如 RSA），则使用公钥加密对称密钥，客户端用私钥解密。
    4.	加密负载：

使用生成的对称密钥对 JWT 的负载部分进行加密。

AES_Encrypt(payload, secret)

    5.	生成加密后的 JWT：

将加密后的内容、加密的对称密钥（如 RSA 加密后的密钥）以及签名部分组合成最终的加密 JWT。

6. 完整加密 JWT 示例

使用 JWE 实现加密 JWT 的完整流程如下：

    1.	生成头部：

{
"alg": "RSA-OAEP",
"enc": "A256GCM",
"typ": "JWT"
}

    2.	生成加密后的负载：

使用 AES-GCM 加密用户信息或声明：

{
"sub": "1234567890",
"name": "Liu Yu",
"admin": true
}

    3.	使用 RSA 加密对称密钥：

公钥加密对称密钥，私钥解密。 4. 组合 JWE：
将头部、加密的密钥、加密的负载、以及签名组合成最终的 JWE。

最终生成的 Token 是加密的，无法直接解码得到敏感信息，只有持有私钥的接收者能够解密并访问其中的内容。

7. 防御措施与安全考虑

   • 强密码算法：使用现代安全的加密算法（如 AES-256、RSA-OAEP），并定期更新密钥。
   • HTTPS 加密传输：确保所有 Token 的传输都使用 HTTPS，防止 Token 在网络中被窃取或篡改。
   • Token 过期时间：设置合理的 Token 过期时间，确保 Token 即使泄露，风险也在最小化时间内得到控制。
   • Token 刷新机制：引入 Token 刷新机制，以减少 Token 被长期使用带来的安全风险。
   • 防止重放攻击：可以使用时间戳和唯一标识符（如 jti 声明）防止 Token 重放攻击。

总结

    •	Token 签名可以确保 Token 在传输过程中未被篡改，常用的签名算法有 HMAC、RSA。
    •	Token 加密可以保护敏感数据免受窃取，常用的加密算法有 AES、RSA。
    •	JWE（加密的 JWT）是对 JWT 进行加密的标准，可以实现负载数据的加密传输和存储。
    •	使用加密和签名相结合的方式，可以在传输过程中有效保护 Token 的安全性和完整性。

### 说下单点登录

### 说说网络的五层模型

网络的五层模型（也叫 TCP/IP 模型的简化版本）是计算机网络中常用的协议分层结构。它将网络通信的复杂性拆分为五个层次，每一层专注于特定的功能，以实现模块化设计。五层模型帮助不同厂商实现兼容性，并确保通信系统可靠运作。

五层模型结构与各层功能

从上到下依次为：

    1.	应用层
    2.	传输层
    3.	网络层
    4.	数据链路层
    5.	物理层

1. 应用层（Application Layer）

   • 功能：为用户提供直接交互的接口，支持各种网络应用和服务（如浏览网页、电子邮件、文件传输等）。
   • 常见协议：
   • HTTP/HTTPS：超文本传输协议（用于网页浏览）
   • FTP：文件传输协议
   • SMTP/POP3/IMAP：电子邮件协议
   • DNS：域名系统，将域名解析为 IP 地址

   示例：用户在浏览器中输入 URL（如 www.example.com），浏览器通过 HTTP 请求访问对应的网页。

2. 传输层（Transport Layer）

   • 功能：负责在两台主机之间提供可靠的数据传输服务。
   • 通过分段、重传和流量控制等机制确保数据完整性。
   • 常见协议：
   • TCP（传输控制协议）：面向连接，提供可靠的数据传输（如网页和邮件传输）。
   • UDP（用户数据报协议）：面向无连接，速度快，但不保证可靠性（如视频流、在线游戏）。

   示例：在使用 TCP 协议时，传输层会将大文件拆分成多个段，并确保所有段都完整且有序地传输到目标主机。

3. 网络层（Network Layer）

   • 功能：负责选择路由，在不同的网络之间转发数据包，使数据能从源地址发送到目标地址。
   • 核心任务：寻找最优路径，实现网络间的互联。
   • 常见协议：
   • IP（互联网协议）：定义 IP 地址的结构，控制数据包的路由和传递。
   • ICMP（互联网控制报文协议）：用于网络错误检测（如 Ping 命令）。
   • ARP（地址解析协议）：将 IP 地址解析为 MAC 地址。

   示例：当一个数据包需要从北京发往纽约时，网络层会选择一条合适的路由路径。

4. 数据链路层（Data Link Layer）

   • 功能：负责在同一局域网内的数据传输，提供数据的帧封装和传输控制，并检测数据传输中的错误。
   • 核心任务：在同一网络节点之间可靠传递数据帧。
   • 常见协议：
   • Ethernet（以太网）：局域网中常用的链路层协议。
   • PPP（点对点协议）：用于点对点链路上的数据传输。
   • MAC（介质访问控制）：控制网络设备对物理介质的访问。

   示例：当电脑通过以太网连接到路由器时，数据链路层负责将数据从电脑传送到路由器。

5. 物理层（Physical Layer）

   • 功能：负责通过物理介质（如电缆、光纤、无线信号等）传输比特流，确保设备之间的电气信号或光信号能够正确传输。
   • 核心任务：定义硬件接口标准，如电压、电缆、传输速率等。
   • 常见标准：
   • RJ45：以太网接口的标准。
   • 光纤传输标准：如 GPON、EPON。
   • Wi-Fi、蓝牙等无线标准。

   示例：当用户通过 Wi-Fi 浏览网页时，物理层负责将信号以无线电波的形式传递给路由器。

各层之间的数据传输过程（封装与解封装）

    1.	发送端：应用层的数据会逐层向下传递，每一层都会封装一些头部信息（如 IP 地址、端口号等）。最后，物理层将数据作为比特流发送出去。
    2.	接收端：数据到达接收端后会逐层向上解析，每一层会解封装其对应的头部信息，直到应用层的数据被正确呈现给用户。

总结：五层模型的特点

    •	层次分明：每一层都有独立的职责，便于模块化开发和管理。
    •	可扩展性强：新协议可以在不影响其他层的情况下被添加或替换。
    •	数据封装与解封装：发送端对数据逐层封装，接收端逐层解封。

五层模型与 OSI 七层模型的关系

五层模型是 OSI 七层模型的简化版本，将部分层次进行了合并：

    •	应用层（五层模型）对应于 OSI 模型中的应用层、表示层和会话层。
    •	数据链路层和物理层（五层模型）对应于 OSI 模型中的数据链路层和物理层。

通过五层模型，网络通信变得有条理且可管理。各层之间相互协作，实现了复杂的网络通信流程，使得用户能够顺畅地浏览网页、观看视频、发送邮件等。

### http,https,ssl,tls

### **HTTP 与 HTTPS 及 SSL/TLS 介绍**

---

### **1. HTTP（HyperText Transfer Protocol）**

- **定义**：HTTP 是一种用于客户端（如浏览器）和服务器之间进行**超文本传输**的协议，基于请求-响应模型。
- **特点**：

  - **明文传输**：数据未加密，容易被窃听或篡改。
  - **无状态**：每次请求都是独立的，服务器不保存前后的请求信息（可以通过 Cookie 等机制实现状态管理）。
  - **端口**：使用 **80** 端口。

- **适用场景**：适用于数据不敏感的简单网页访问（如普通信息查询）。

---

### **2. HTTPS（HyperText Transfer Protocol Secure）**

- **定义**：HTTPS 是 HTTP 协议的**安全版本**，它通过 **SSL/TLS** 加密传输数据，确保通信的机密性和完整性。
- **特点**：

  - **加密传输**：数据在传输过程中通过 SSL/TLS 进行加密，防止窃听和篡改。
  - **身份认证**：使用数字证书验证服务器身份，确保客户端访问的是合法网站。
  - **端口**：使用 **443** 端口。

- **适用场景**：需要传输**敏感数据**的场景，如电子商务、在线支付、登录等。

---

### **3. SSL（Secure Sockets Layer）**

- **定义**：SSL 是一种用于建立加密连接的协议，用于确保数据在客户端和服务器之间传输时的安全性。
- **历史**：SSL 是 **Netscape** 公司开发的，经历了多个版本演进：

  - **SSL 2.0**（1995 年）：首次发布。
  - **SSL 3.0**（1996 年）：修复了 SSL 2.0 的漏洞。

- **现状**：由于存在多个安全漏洞，SSL 已经逐渐被淘汰，被 TLS 所取代。

---

### **4. TLS（Transport Layer Security）**

- **定义**：TLS 是 SSL 的升级版本，被广泛使用于 HTTPS。TLS 提供了**更高的安全性**，并解决了 SSL 中的已知漏洞。
- **版本演进**：
  - **TLS 1.0**：作为 SSL 3.0 的继任者。
  - **TLS 1.2**：目前常用的安全协议版本。
  - **TLS 1.3**：最新版本，提升了连接速度和安全性。

---

### **5. HTTPS 工作流程（TLS 握手过程）**

1. **客户端发起连接**：用户的浏览器向服务器发起 HTTPS 请求。
2. **服务器发送证书**：服务器将其数字证书发送给客户端。
3. **验证证书**：客户端检查证书是否合法（是否被信任的 CA 签发、是否过期等）。
4. **密钥交换**：客户端和服务器通过**非对称加密**（如 RSA 或 ECDSA）协商一个对称加密密钥。
5. **加密通信**：握手完成后，客户端和服务器使用协商好的对称密钥进行加密数据传输。

---

### **6. HTTP vs HTTPS 区别**

| **特性**     | **HTTP**                 | **HTTPS**                |
| ------------ | ------------------------ | ------------------------ |
| **安全性**   | 明文传输，易被窃听篡改。 | 数据加密，防止窃听篡改。 |
| **身份验证** | 无法验证服务器身份。     | 使用证书验证服务器身份。 |
| **端口**     | 80                       | 443                      |
| **加密**     | 不支持加密。             | 通过 SSL/TLS 加密传输。  |
| **性能**     | 无加密，速度较快。       | 有加密，握手稍有延迟。   |

---

### **7. 总结**

- **HTTP**：基础协议，用于传输网页内容，但不具备加密功能。
- **HTTPS**：增强版 HTTP，通过 SSL/TLS 实现加密，适用于需要安全通信的场景。
- **SSL**：早期的加密协议，现在已被 TLS 取代。
- **TLS**：更安全的加密协议，是 HTTPS 中实际使用的技术。

通过 HTTPS，你可以确保数据在传输过程中**保密**且**完整**，并验证服务器的**合法性**，为用户提供更加安全的网络访问体验。
