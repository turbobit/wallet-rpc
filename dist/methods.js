"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BtcMtd = {
    getBlock: "getblock",
    getBlockCount: "getblockcount",
    getBlockHash: "getblockhash",
    getDifficulty: "getdifficulty",
    getInfo: "getinfo",
    getTransaction: "getrawtransaction",
    sendRawTransaction: "sendrawtransaction"
};
exports.EthMtd = {
    call: "eth_call",
    getBalance: "eth_getBalance",
    getBlockByHash: "eth_getBlockByHash",
    getBlockNumber: "eth_blockNumber",
    getBlockTransactionCountByHash: "eth_getBlockTransactionCountByHash",
    getBlockTransactionCountByNumber: "eth_getBlockTransactionCountByNumber",
    getCurrentGasPrice: "eth_gasPrice",
    getTransactionByBlockHashAndIndex: "eth_getTransactionByBlockHashAndIndex",
    getTransactionCount: "eth_getTransactionCount",
    getTransactionReceipt: "eth_getTransactionReceipt",
    getUncleByBlockHashAndIndex: "eth_getUncleByBlockHashAndIndex",
    getUncleByBlockNumberAndIndex: "eth_getUncleByBlockHashAndIndex",
    sendRawTransaction: "eth_sendRawTransaction",
    sendTransaction: "eth_sendTransaction"
};
exports.BtcMtd16 = {
    getBlockInfo: "getblockinfo",
    getWalletInfo: "getwalletinfo"
};