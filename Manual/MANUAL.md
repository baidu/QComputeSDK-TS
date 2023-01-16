# QComputeSDK-TS Document

QComputeSDK-TypeScript is a functional subset of QComputeSDK-Python.

## Construction

The basic architectures of QComputeSDK are similar in each implementation of different language. For more information about the glossary and structure, please refer to [QCompute API Doc](https://quantum-hub.baidu.com/docs/qcompute/).
The functions provided by QComputeSDK-TypeScript are as follows:

- Operation
  - FixedGate
    - ID
    - X
    - Y
    - Z
    - H
    - S
    - SDG
    - T
    - TDG
    - CX
    - CY
    - CZ
    - CH
    - SWAP
    - CCX
    - CSWAP
  - RotationGate
    - RX
    - RY
    - RZ
    - U
    - CRX
    - CRY
    - CRZ
    - CU
  - Measure
    - MeasureZ
  - All circuit processing modules exposed by QComputeSDK (QComputeSDK-TypeScript doesn't support local simulators and only provides server modules)
    - ServerModule
      - CompositeGate
      - CompressGate
      - InverseCircuit
      - ReverseCircuit
      - UnrollCircuit
      - UnrollProcedure
      - MappingToBaiduQPUQian
      - UnrollCircuitToBaiduQPUQian
      - MappingToIoPCAS
      - UnrollCircuitToIoPCAS
      - UnrollCircuitToIonAPM
- Register
  - Quantum registers
  - Classical registers
- Submit to Baidu Cloud Native Quantum Computing Platform ([QuantumHub](https://quantum-hub.baidu.com/))
  - All quantum backends announced by Baidu QuantumHub can be selected
    - Quantum Simulator
      - CloudBaiduSim2Water
      - CloudBaiduSim2Earth
      - CloudBaiduSim2Thunder
      - CloudBaiduSim2Heaven
      - CloudBaiduSim2Wind
      - CloudBaiduSim2Lake
      - CloudAerAtBD
    - Quantum Processing Unit
      - CloudBaiduQPUQian
      - CloudIoPCAS
      - CloudIonAPM

## Example

### Specify hubToken

QComputeSDK-TypeScript does not provide any local simulators. Quantum computing tasks require the identity information of Quantum Leaf to execute in the cloud.

``` TypeScript
import Define from "../../QCompute/Define/Define";

Define.hubToken = '';
```

### Create a QEnv Instance and Specify the Backend

``` TypeScript
import {QEnv} from "../../QCompute/QPlatform/QEnv";
import {BackendName} from "../../QCompute/QPlatform/QPlatform";

const env = new QEnv();
env.backend(BackendName.CloudBaiduSim2Water);
```

### Declare Quantum Registers

The way to declare a quantum register is as follows. The declared quantum register will exist, as long as the index is the same, it is the same quantum register.
A quantum register can be declared in the following ways which can be mixed. A declared quantum register, as long as the index is the same, is the same quantum register.

- Advance declaration
  - Declaration
    - const q = env.Q.createList(3);
  - Access
    - q[0]
    - q[1]
    - q[2]
- Random access
  - If the index doesn't exist when accessed, create a register for that index
    - env.Q(0)
    - env.Q(1)
    - env.Q(2)
- The above access ways can be mixed arbitrarily in the code, and the same set of quantum registers is accessed.
The above access modes can be arbitrarily mixed in the code, it would be the same set of quantum registers.

``` TypeScript
const q = env.Q.createList(3);
ID(q[0]);
```

``` TypeScript
ID(env.Q(0));
```

### Circuit Operations

Circuit operations include quantum gate operations and measurement operations.

#### Fixed Gate Operations

``` TypeScript
ID(env.Q(0));
CX(env.Q(0), env.Q(1));
```

#### Rotation Gate Operations

``` TypeScript
U(1.2)(q[0]);
U(2.3, 3.4)(q[0]);
U(2.3, 3.4, 4.5)(q[0]);
RX(1.2)(q[0]);
CU(1.2, 3.4, 5.6)(q[0], q[1]);
CRX(1.2)(q[0], q[1]);
```

#### Measurement Operation

Support for automatic measurement of all registers. The output is in the sequence of quantum register numbers from high to low by default.

``` TypeScript
MeasureZ(...env.Q.toListPair());
```

In addition to automatic measurement, manual mapping between quantum registers and classical registers is also supported. The quantum registers and classical registers correspond one to one in the order they were filled in when the `MeasureZ` was called, and the classical register sorting is done automatically when output is made. Specify the meaning of the mapping manually using the following example.


``` TypeScript
MeasureZ([q[0], q[1], q[2]], [0, 1, 2]);
```

a. **Correspondence** : The calculation result of quantum register q[0] corresponds to the classical register creg[2]. The calculation result of quantum register q[1] is stored in classical register creg[1]. The calculation result of quantum register q[2] is stored in classical register creg[0].

b. **Output sequence** : Output from high to low in the order of creg, namely creg[2]-creg[1]-creg[0], and q[0]-q[1]-q[2] according to the **Correspondence**.


### Specify the Circuit Processing Module (Optional)

The module and the passed parameters should be carefully studied and used. The improper operation may transmit wrong instructions and fail the circuit experiment.

``` TypeScript
env.serverModule(ServerModule.CompressGate, {disable: true});
env.serverModule(ServerModule.CompositeGate, {disable: true});
env.serverModule(ServerModule.UnrollCircuit, {disable: true});
```

### Submit Task

Use the `commit` command to submit a quantum computing task to a cloud simulator or QPU and get the results.

``` TypeScript
const taskResult = await env.commit(shots, fetchMeasure, downloadResult, notes);
```

**shots**：The number of times a quantum circuit is executed and results obtained.
**fetchMeasure**：Default True and shows the results. When set to False, only the path of the results file is printed.
**downloadMeasure**：Default True and download the results file. When set to False, only the task status is returned and the result won't be downloaded from the server.
**notes**：Default None. Used to add notes for quantum computing tasks(160 Chinese characters or letters max) and show it on the View Task page of [Quantum-hub](https://quantum-hub.baidu.com/).

### Show/Hide Output Information

The output information is controlled by Settings.outputInfo which is true by default.

``` TypeScript
import Settings from "../../QCompute/Define/Settings";

Settings.outputInfo = false;
```
