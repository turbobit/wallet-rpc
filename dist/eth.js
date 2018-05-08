"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
const methods_1 = require("./methods");
class EthereumClient extends client_1.default {
    constructor(user, pass, ip, port = 30303) {
        super(user, pass, ip, port);
    }
    getBlockCount() {
        return this.RpcCall(methods_1.EthMtd.getBlockNumber);
    }
    getBlockByHash(hash, isFullTransaction = true) {
        const param = [hash, isFullTransaction];
        const method = methods_1.EthMtd.getBlockByHash;
        return this.RpcCall(method, param);
    }
    getUncleByBlockHashAndIndex(hash, index) {
        const param = [hash, index];
        const method = methods_1.EthMtd.getUncleByBlockHashAndIndex;
        return this.RpcCall(method, param);
    }
    getUncleByBlockNumberAndIndex(height, index) {
        const param = [height, index];
        const method = methods_1.EthMtd.getUncleByBlockNumberAndIndex;
        return this.RpcCall(method, param);
    }
    sendRawTx(raw) {
        const method = methods_1.EthMtd.sendRawTransaction;
        return this.RpcCall(method, [raw]);
    }
    sendTransaction(tx) {
        return this.RpcCall(methods_1.EthMtd.sendTransaction, [tx]);
    }
    getTransactionCount(address, status = "latest") {
        const param = [address, status];
        const method = methods_1.EthMtd.getTransactionCount;
        return this.RpcCall(method, param);
    }
    getCurrentGasPrice() {
        const method = methods_1.EthMtd.getCurrentGasPrice;
        return this.RpcCall(method, []);
    }
    callFunc(param, status = "latest") {
        return this.RpcCall(methods_1.EthMtd.call, [param]);
    }
}
exports.default = EthereumClient;