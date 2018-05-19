import { Ethereum } from "../defined/eth";
import { RPCResponse } from "../defined/rpc";
import Client from "./client";
export default class EthereumClient extends Client {
    constructor(ip: string, port?: number, user?: string, pass?: string);
    getBlockCount(): Promise<RPCResponse<string>>;
    getBlockByHash(hash: string, getFullTx?: boolean): Promise<RPCResponse<Ethereum.IBlock>>;
    getBlockByNumber(symbol: string, getFullTx?: boolean): Promise<RPCResponse<Ethereum.IBlock>>;
    getUncleByBlockHashAndIndex(hash: string, index: string): Promise<RPCResponse<Ethereum.IBlock>>;
    getUncleByBlockNumberAndIndex(height: string, index: string): Promise<RPCResponse<Ethereum.IBlock>>;
    getTxByHash(hash: string): Promise<RPCResponse<Ethereum.ITransaction>>;
    sendRawTx(raw: string): Promise<RPCResponse<string>>;
    sendTx(tx: Ethereum.ISentTxStruct): Promise<RPCResponse<string>>;
    getTxCount(address: string, status?: Ethereum.Status): Promise<RPCResponse<string>>;
    getCurrentGasPrice(): Promise<RPCResponse<string>>;
    callFunc(param: Ethereum.ICallFuncParam, status?: Ethereum.Status): Promise<RPCResponse<string>>;
    getCode(address: string, status: string): Promise<RPCResponse<string>>;
    getEstimateGas(param: Ethereum.ICallFuncParam, status?: Ethereum.Status): Promise<RPCResponse<string>>;
}
