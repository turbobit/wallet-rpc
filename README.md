# wallet-rpc [![Build Status](https://travis-ci.org/islishude/wallet-rpc.svg?branch=dev)](https://travis-ci.org/islishude/wallet-rpc)

Type-safe jsonrpc client for Bitcoin and Ethereum.

## Supports

### Blockchain clients

- Bitcoin(^BitcoinCore 0.16+)
- TetherUSDT(^OmniLayer0.3.0+)
- Geth(^1.8.0)
- Parity(^1.0.0)

eosrpc has been splited to [islishude/eosrpc](https://github.com/islishude/eosrpc)

### Enviorment

Node.js only, requie >=10.4.0 and v12 is recommend.

## Install

```shell
npm install wallet-rpc --save
```

## REPL

**NPX**

```sh
npx wallet-rpc
```

Run `npx -n --experimental-repl-await wallet-rpc` to enable top-level-await.

**Docker**

```sh
docker run -it --rm islishude/wallet-rpc
```

Supports top-level-await by default.

## Example

- [Bitcoin](./example/bitcoin.ts)
- [Ethereum](./example/ethereum.ts)
- [OmniLayer](./example/omni.ts)
