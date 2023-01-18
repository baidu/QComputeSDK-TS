# QComputeSDK-TypeScript

![](https://release-data.cdn.bcebos.com/github-qleaf%2F%E9%87%8F%E6%98%93%E4%BC%8F%E5%9B%BE%E6%A0%87.png)

[![](https://img.shields.io/badge/license-Apache%202.0-green)](LICENSE) ![](https://img.shields.io/badge/build-passing-green) ![](https://img.shields.io/badge/node-19.4.0-blue) ![](https://img.shields.io/badge/release-v1.0.2-blue)

QComputeSDK-TypeScript is the TypeScript version of QCompute, the quantum development kit of Quantum Leaf. QComputeSDK-TypeScript can be used to design quantum experiments: build quantum circuits, manipulate quantum modules, and run quantum computing tasks on Quantum Leaf (<https://quantum-hub.baidu.com>). The user, via QComputeSDK-TypeScript, can use all quantum-ends on the cloud, including QPUs and cloud simulators.

QComputeSDK-TypeScript is suitable for the circumstances when:

- The targeted platform does not support Python;
- The targeted platform depends on TypeScript, JavaScript packages, or other languages.
- The user needs to use QComputeSDK on front-ends such as Web or ReactNative.

Otherwise, we highly suggest the developer use QComputeSDK-Python, which is more fully featured, reference [functional comparison](https://quantum-hub.baidu.com/opensource).
 (<https://github.com/baidu/QCompute>).

## Platform Requirements

The source code can run on any platform that supports Node.js.

- Node.js `>=19.4.0`
- TypeScript `>=4.9.4`

## Install and Execute

### Enviroment Configuration

1. Install Node.js environment.
<https://nodejs.org>

2. Install TypeScript compiler.

``` bash
npm install -g typescript
npm install -g ts-node
```

### Install QComputeSDK-TypeScript

**Method 1 - Install via NPM**

``` bash
npm install -g QComputeSDK-TypeScript
```

**Method 2 - Install via source code**

1. Download QComputeSDK-TypeScript source code.

``` bash
git clone https://github.com/baidu/QComputeSDK-TS.git
```

2. Install NPM requirements.

``` bash
cd QComputeSDK-TS
npm i
```

### Run Example

Running the example code `QComputeSDK-TS\Example\GHZ_Cloud.ts`.

1. Input your Token into `GHZ_Cloud.ts`.  Token is an authorization credential for using cloud quantum computing resources, which can be obtained from [the Quantum-hub website](https://quantum-hub.baidu.com).


``` python
// Your token:
Define.hubToken = '';
```

2. Run the example code.

``` bash
ts-node Example/Level_1/GHZ_Cloud.ts
```

3. The results would be displayed as follows.

``` shell
    Circuit upload successful, circuitId => 165538 taskId => 162654
    Task 162654 is running, please wait...
    status changed waiting => success
    Download origin success /home/user/QComputeSDK-TS/Output/remote.162654.origin.json size = 779
    Download measure success /home/user/QComputeSDK-TS/Output/remote.162654.measure.json size = 24
    {"counts":{"000":518,"111":506},"moduleList":[{"arguments":null,"module":"UnrollProcedureModule"},{"arguments":null,"module":"CompositeGateModule"},{"arguments":null,"module":"UnrollCircuitModule"},{"arguments":null,"module":"CompressGateModule"}],"origin":"/home/user/QComputeSDK-TS/Output/remote.162654.origin.json","status":"success","taskId":162654}
    done
```

## Developer hints

- Developer can use ``GHZ_Cloud.ts`` as source code framework. Modify and apply this file can significantly mitigate the learning task.
- API usage can reference “Manual/MANUAL.md”.

## Contributing

Coding requirements:

1. Be familiar with quantum circuit model. Any pull should be tested first and then submitted. **Be careful about the order of qubits**.

2. Please comply with development specifications of relevant programming languages.

## Discussion

1. If any questions/advices/suggestions, please contact us via Email: quantum@baidu.com ;

2. Or, you can use feedback table in Quantum-hub to provide any feedbacks;

3. Or, you are also welcomed to join our discussion QQ group. Scan the QR code below or search by QQ group number 1147781135.

![](https://release-data.cdn.bcebos.com/github-qleaf%2Fqrcode.png)

## Maintainers & Authors

Institute for Quantum Computing, Baidu.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](https://github.com/baidu/QCompute/blob/master/LICENSE) file for details.
