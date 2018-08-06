import { RPCResponse } from "./rpc";

declare namespace Ethereum {
  export type Status = "earliest" | "latest" | "pending";

  export interface IBlock {
    number?: string;
    hash?: string;
    parentHash: string;
    nonce: string;
    sha3Uncles: string;
    logsBloom: string;
    transactionsRoot: string;
    stateRoot: string;
    miner: string;
    difficulty: string;
    totalDifficulty: string;
    extraData: string;
    size: string;
    gasLimit: string;
    gasUsed: string;
    timestamp: string;
    uncles: string[];
  }

  export interface IBlockSimple extends IBlock {
    transactions: string[];
  }

  export interface IBlockVerbose extends IBlock {
    transactions: ITransaction[];
  }

  export interface ITransaction {
    hash: string;
    nonce: string;
    // null when its pending
    blockHash?: string;
    blockNumber?: string;
    transactionIndex?: string;
    from: string;
    // null when its a contract creation transaction.
    to?: string;
    value: string;
    gas: string;
    gasPrice: string;
    input: string;
    v: string;
    r: string;
    s: string;
  }

  export interface ITxReceipt {
    transactionHash: string;
    transactionIndex: string;
    blockHash: string;
    blockNumber: string;
    cumulativeGasUsed: string;
    gasUsed: string;
    contractAddress?: string;
    logs: Array<IReceiptLogs>;
    logsBloom: string;
    status?: string;
    root?: string;
  }

  export interface IReceiptLogs {
    address: string;
    topics: string[];
    data: string;
    blockNumber?: string;
    transactionHash?: string;
    transactionIndex?: string;
    blockHash?: string;
    logIndex: string;
    removed: boolean;
  }

  export interface ISentTxStruct {
    from: string;
    to: string;
    gas?: string;
    gasPrice?: string;
    value?: string;
    data: string;
    nonce?: string;
  }

  // eth_call param
  export interface ICallFuncParam {
    from?: string;
    to?: string;
    gas?: string;
    gasPrice?: string;
    value?: string;
    data?: string;
  }

  export interface ITraceTxReturn {
    failed: boolean;
    gas: number;
    returnValue: string;
    structLogs: Array<{
      pc: number;
      op: Object;
      gas: number;
      gasPrice: number;
      memory: Object;
      stack: Array<Object>;
      account: string;
      err: string;
    }>;
  }

  export interface IParityTypeAction {
    from: string;
    value: string;
    gas: string;
    init: string;
  }

  export interface IParityCallAction {
    callType: "call" | "callcode" | "delegatecall" | "staticcall";
    from: string;
    to: string;
    value: string;
    gas: string;
    input: string;
  }

  export interface IParitySuicideAction {
    address: string;
    refundAddress: string;
    balance: string;
  }

  export interface IParityCreateResult {
    address: string;
    code: string;
    gasUsed: string;
  }

  export interface IParityCallResult {
    gasUsed: string;
    output: string;
  }

  export interface IParityTxTrace {
    action: IParityCallAction | IParityTypeAction | IParitySuicideAction;
    blockHash: string;
    blockNumber: number;
    // if `suicide` result will be null
    result: IParityCallResult | IParityCreateResult | null;
    subtraces: number;
    error?: string;
    traceAddress: string[];
    transactionHash: string;
    transactionPosition: number;
    // for block trace has `reward` type
    type: "create" | "call" | "suicide";
  }
}
