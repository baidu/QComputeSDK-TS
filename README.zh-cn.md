# QComputeSDK-TypeScript

![](https://release-data.cdn.bcebos.com/github-qleaf%2F%E9%87%8F%E6%98%93%E4%BC%8F%E5%9B%BE%E6%A0%87.png)

[![](https://img.shields.io/badge/license-Apache%202.0-green)](./LICENSE) ![](https://img.shields.io/badge/build-passing-green) ![](https://img.shields.io/badge/node-19.4.0-blue) ![](https://img.shields.io/badge/release-v1.0.0-blue)

QComputeSDK-TypeScript 是量易伏的量子开发套件 QCompute 的 TypeScript 语言版本，用于设计量子实验，包括编写量子电路、操控量子模块组件、提交计算任务到量易伏运行（<https://quantum-hub.baidu.com>），包括量子计算机和云端模拟器在内的量子端，都对 QComputeSDK-TypeScript 开放。

QComputeSDK-TypeScript 适用于以下情况：

- 目标平台不支持 Python。
- 目标平台依赖 TypeScript、JavaScript 包或其他语言。
- 用户有在 Web  或者 ReactNative 等前端使用 QComputeSDK 的需求。

除以上情况外，强烈建议开发者使用功能更为全面的 QComputeSDK-Python，参考[功能对比](https://quantum-hub.baidu.com/opensource)。
<https://github.com/baidu/QCompute>


## 平台依赖

代码跨平台，可在支持 Node.js 的任意环境下运行。

- Node.js `>=19.4.0`
- TypeScript `>=4.9.4`


## 安装和执行

### 配置环境

1. 安装 Node.js 执行环境：
<https://nodejs.org>

2. 安装 TypeScript 编译器：

``` bash
npm install -g typescript
npm install -g ts-node
```

### 安装 QComputeSDK-TypeScript

**方法一：NPM 安装**

``` bash
npm install -g qcompute-ts
```

**方法二：源代码安装**

1. 下载 QComputeSDK-TypeScript 源代码：

``` bash
git clone https://github.com/baidu/QComputeSDK-TS.git
```

2. 下载 NPM 依赖

``` bash
cd QComputeSDK-TS
npm i
```

### 运行示例代码

运行示例代码 ``QComputeSDK-TS\Example\GHZ_Cloud.ts``。

1. 在 `GHZ_Cloud.ts` 中填入 Token。Token 是用户使用云端量子计算资源的授权凭据。登录量易伏官网（<https://quantum-hub.baidu.com>）获取。

``` python
// Your token:
Define.hubToken = '';
```
2. 运行示例代码：

``` bash
ts-node Example/Level_1/GHZ_Cloud.ts
```

3. 结果如下显示：

``` shell
    Circuit upload successful, circuitId => 165538 taskId => 162654
    Task 162654 is running, please wait...
    status changed waiting => success
    Download origin success /home/user/QComputeSDK-TS/Output/remote.162654.origin.json size = 779
    Download measure success /home/user/QComputeSDK-TS/Output/remote.162654.measure.json size = 24
    {"counts":{"000":518,"111":506},"moduleList":[{"arguments":null,"module":"UnrollProcedureModule"},{"arguments":null,"module":"CompositeGateModule"},{"arguments":null,"module":"UnrollCircuitModule"},{"arguments":null,"module":"CompressGateModule"}],"origin":"/home/user/QComputeSDK-TS/Output/remote.162654.origin.json","status":"success","taskId":162654}
    done
```

## 开发者提示

- 开发者可将 ``GHZ_Cloud.ts`` 作为代码框架，修改和使用这个文件可以有效帮助开发者熟悉本量子开发套件的语法。
- API 说明请参考 ``使用说明.md``。

## 贡献

代码要求：

1. 熟悉量子电路模型。任何提交前都应经过测试后再提交。**注意量子位顺序**。

2. 请遵守相关编程语言的开发规范。

## 讨论

1. 如有任何问题及建议，请通过电子邮件联系我们：quantum@baidu.com；

2. 您也可以用 Quantum-hub（<https://quantum-hub.baidu.com>）中的意见反馈来联系我们；

3. 诚邀您加入 QQ 群参与讨论，QQ 扫码或搜索群号 1147781135。

![](https://release-data.cdn.bcebos.com/github-qleaf%2Fqrcode.png)

## 维护者 & 作者

百度量子计算研究所

## License

该项目在 Apache 2.0 下获得许可 - 有关详细信息，请参阅 [LICENSE](https://github.com/baidu/QCompute/blob/master/LICENSE) 文件。
