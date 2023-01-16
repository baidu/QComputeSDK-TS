export declare enum BackendName {
    CloudBaiduSim2Water = "cloud_baidu_sim2_water",
    CloudBaiduSim2Earth = "cloud_baidu_sim2_earth",
    CloudBaiduSim2Thunder = "cloud_baidu_sim2_thunder",
    CloudBaiduSim2Heaven = "cloud_baidu_sim2_heaven",
    CloudBaiduSim2Wind = "cloud_baidu_sim2_wind",
    CloudBaiduSim2Lake = "cloud_baidu_sim2_lake",
    CloudAerAtBD = "cloud_aer_at_bd",
    CloudBaiduQPUQian = "cloud_baidu_qpu_qian",
    CloudIoPCAS = "cloud_iopcas",
    CloudIonAPM = "cloud_ionapm"
}
export declare enum Sim2Argument {
    Dense_Matmul_Probability = "-mt dense -a matmul -mm probability",
    Dense_Matmul_Accumulation = "-mt dense -a matmul -mm accumulation",
    Dense_Einsum_Probability = "-mt dense -a einsum -mm probability",
    Dense_Einsum_Accumulation = "-mt dense -a einsum -mm accumulation",
    Dense_Matmul_Output_Probability = "-mt dense -a matmul -mm output_probability",
    Dense_Matmul_Output_State = "-mt dense -a matmul -mm output_state",
    Sparse_Matmul_Probability = "-mt sparse -a matmul -mm probability",
    Sparse_Matmul_Output_Probability = "-mt sparse -a matmul -mm output_probability",
    Sparse_Matmul_Output_State = "-mt sparse -a matmul -mm output_state"
}
export declare enum ServerModule {
    CompositeGate = 0,
    CompressGate = 1,
    InverseCircuit = 2,
    ReverseCircuit = 3,
    UnrollCircuit = 4,
    UnrollProcedure = 5,
    MappingToBaiduQPUQian = 6,
    UnrollCircuitToBaiduQPUQian = 7,
    MappingToIoPCAS = 8,
    UnrollCircuitToIoPCAS = 9,
    UnrollCircuitToIonAPM = 10
}
