// Copyright (c) 2020 Baidu, Inc. All Rights Reserved.
//
//     Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//     You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//     Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//     See the License for the specific language governing permissions and
// limitations under the License.

export enum BackendName {
    CloudBaiduSim2Water = 'cloud_baidu_sim2_water',
    CloudBaiduSim2Earth = 'cloud_baidu_sim2_earth',
    CloudBaiduSim2Thunder = 'cloud_baidu_sim2_thunder',
    CloudBaiduSim2Heaven = 'cloud_baidu_sim2_heaven',
    CloudBaiduSim2Wind = 'cloud_baidu_sim2_wind',
    CloudBaiduSim2Lake = 'cloud_baidu_sim2_lake',
    CloudAerAtBD = 'cloud_aer_at_bd',
    CloudBaiduQPUQian = 'cloud_baidu_qpu_qian',
    CloudIoPCAS = 'cloud_iopcas',
    CloudIonAPM = 'cloud_ionapm',
}

export enum Sim2Argument {
    Dense_Matmul_Probability = '-mt dense -a matmul -mm probability',
    Dense_Matmul_Accumulation = '-mt dense -a matmul -mm accumulation',
    Dense_Einsum_Probability = '-mt dense -a einsum -mm probability',
    Dense_Einsum_Accumulation = '-mt dense -a einsum -mm accumulation',
    // Trim start
    Dense_Matmul_Output_Probability = '-mt dense -a matmul -mm output_probability',
    Dense_Matmul_Output_State = '-mt dense -a matmul -mm output_state',
    Sparse_Matmul_Probability = '-mt sparse -a matmul -mm probability',
    Sparse_Matmul_Output_Probability = '-mt sparse -a matmul -mm output_probability',
    Sparse_Matmul_Output_State = '-mt sparse -a matmul -mm output_state',
    // Trim end
}

export enum ServerModule {
    CompositeGate,
    CompressGate,
    InverseCircuit,
    ReverseCircuit,
    UnrollCircuit,
    UnrollProcedure,
    MappingToBaiduQPUQian,
    UnrollCircuitToBaiduQPUQian,
    MappingToIoPCAS,
    UnrollCircuitToIoPCAS,
    UnrollCircuitToIonAPM,
}
