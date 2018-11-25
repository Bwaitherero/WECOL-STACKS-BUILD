"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@0x/utils");
var ethereum_types_1 = require("ethereum-types");
var ethUtil = require("ethereumjs-util");
var _ = require("lodash");
var utils_2 = require("./utils");
/**
 * Utils to convert ethereum structures from user-space format to RPC format. (marshall/unmarshall)
 */
exports.marshaller = {
    /**
     * Unmarshall block without transaction data
     * @param blockWithHexValues block to unmarshall
     * @return unmarshalled block without transaction data
     */
    unmarshalIntoBlockWithoutTransactionData: function (blockWithHexValues) {
        var block = __assign({}, blockWithHexValues, { gasLimit: utils_2.utils.convertHexToNumber(blockWithHexValues.gasLimit), gasUsed: utils_2.utils.convertHexToNumber(blockWithHexValues.gasUsed), size: utils_2.utils.convertHexToNumber(blockWithHexValues.size), timestamp: utils_2.utils.convertHexToNumber(blockWithHexValues.timestamp), number: _.isNull(blockWithHexValues.number) ? null : utils_2.utils.convertHexToNumber(blockWithHexValues.number), difficulty: utils_2.utils.convertAmountToBigNumber(blockWithHexValues.difficulty), totalDifficulty: utils_2.utils.convertAmountToBigNumber(blockWithHexValues.totalDifficulty) });
        return block;
    },
    /**
     * Unmarshall block with transaction data
     * @param blockWithHexValues block to unmarshall
     * @return unmarshalled block with transaction data
     */
    unmarshalIntoBlockWithTransactionData: function (blockWithHexValues) {
        var block = __assign({}, blockWithHexValues, { gasLimit: utils_2.utils.convertHexToNumber(blockWithHexValues.gasLimit), gasUsed: utils_2.utils.convertHexToNumber(blockWithHexValues.gasUsed), size: utils_2.utils.convertHexToNumber(blockWithHexValues.size), timestamp: utils_2.utils.convertHexToNumber(blockWithHexValues.timestamp), number: _.isNull(blockWithHexValues.number) ? null : utils_2.utils.convertHexToNumber(blockWithHexValues.number), difficulty: utils_2.utils.convertAmountToBigNumber(blockWithHexValues.difficulty), totalDifficulty: utils_2.utils.convertAmountToBigNumber(blockWithHexValues.totalDifficulty), transactions: [] });
        block.transactions = _.map(blockWithHexValues.transactions, function (tx) {
            var transaction = exports.marshaller.unmarshalTransaction(tx);
            return transaction;
        });
        return block;
    },
    /**
     * Unmarshall transaction
     * @param txRpc transaction to unmarshall
     * @return unmarshalled transaction
     */
    unmarshalTransaction: function (txRpc) {
        var tx = __assign({}, txRpc, { blockNumber: !_.isNull(txRpc.blockNumber) ? utils_2.utils.convertHexToNumber(txRpc.blockNumber) : null, transactionIndex: !_.isNull(txRpc.transactionIndex)
                ? utils_2.utils.convertHexToNumber(txRpc.transactionIndex)
                : null, nonce: utils_2.utils.convertHexToNumber(txRpc.nonce), gas: utils_2.utils.convertHexToNumber(txRpc.gas), gasPrice: utils_2.utils.convertAmountToBigNumber(txRpc.gasPrice), value: utils_2.utils.convertAmountToBigNumber(txRpc.value) });
        return tx;
    },
    /**
     * Unmarshall transaction data
     * @param txDataRpc transaction data to unmarshall
     * @return unmarshalled transaction data
     */
    unmarshalTxData: function (txDataRpc) {
        if (_.isUndefined(txDataRpc.from)) {
            throw new Error("txData must include valid 'from' value.");
        }
        var txData = __assign({}, txDataRpc, { value: !_.isUndefined(txDataRpc.value) ? utils_2.utils.convertHexToNumber(txDataRpc.value) : undefined, gas: !_.isUndefined(txDataRpc.gas) ? utils_2.utils.convertHexToNumber(txDataRpc.gas) : undefined, gasPrice: !_.isUndefined(txDataRpc.gasPrice) ? utils_2.utils.convertHexToNumber(txDataRpc.gasPrice) : undefined, nonce: !_.isUndefined(txDataRpc.nonce) ? utils_2.utils.convertHexToNumber(txDataRpc.nonce) : undefined });
        return txData;
    },
    /**
     * Marshall transaction data
     * @param txData transaction data to marshall
     * @return marshalled transaction data
     */
    marshalTxData: function (txData) {
        if (_.isUndefined(txData.from)) {
            throw new Error("txData must include valid 'from' value.");
        }
        var callTxDataBase = __assign({}, txData);
        delete callTxDataBase.from;
        var callTxDataBaseRPC = exports.marshaller._marshalCallTxDataBase(callTxDataBase);
        var txDataRPC = __assign({}, callTxDataBaseRPC, { from: exports.marshaller.marshalAddress(txData.from) });
        var prunableIfUndefined = ['gasPrice', 'gas', 'value', 'nonce'];
        _.each(txDataRPC, function (value, key) {
            if (_.isUndefined(value) && _.includes(prunableIfUndefined, key)) {
                delete txDataRPC[key];
            }
        });
        return txDataRPC;
    },
    /**
     * Marshall call data
     * @param callData call data to marshall
     * @return marshalled call data
     */
    marshalCallData: function (callData) {
        var callTxDataBase = __assign({}, callData);
        delete callTxDataBase.from;
        var callTxDataBaseRPC = exports.marshaller._marshalCallTxDataBase(callTxDataBase);
        var callDataRPC = __assign({}, callTxDataBaseRPC, { from: _.isUndefined(callData.from) ? undefined : exports.marshaller.marshalAddress(callData.from) });
        return callDataRPC;
    },
    /**
     * Marshall address
     * @param address address to marshall
     * @return marshalled address
     */
    marshalAddress: function (address) {
        if (utils_1.addressUtils.isAddress(address)) {
            return ethUtil.addHexPrefix(address);
        }
        throw new Error("Invalid address encountered: " + address);
    },
    /**
     * Marshall block param
     * @param blockParam block param to marshall
     * @return marshalled block param
     */
    marshalBlockParam: function (blockParam) {
        if (_.isUndefined(blockParam)) {
            return ethereum_types_1.BlockParamLiteral.Latest;
        }
        var encodedBlockParam = _.isNumber(blockParam) ? utils_2.utils.numberToHex(blockParam) : blockParam;
        return encodedBlockParam;
    },
    /**
     * Unmarshall log
     * @param rawLog log to unmarshall
     * @return unmarshalled log
     */
    unmarshalLog: function (rawLog) {
        var formattedLog = __assign({}, rawLog, { logIndex: utils_2.utils.convertHexToNumberOrNull(rawLog.logIndex), blockNumber: utils_2.utils.convertHexToNumberOrNull(rawLog.blockNumber), transactionIndex: utils_2.utils.convertHexToNumberOrNull(rawLog.transactionIndex) });
        return formattedLog;
    },
    _marshalCallTxDataBase: function (callTxDataBase) {
        var callTxDataBaseRPC = __assign({}, callTxDataBase, { to: _.isUndefined(callTxDataBase.to) ? undefined : exports.marshaller.marshalAddress(callTxDataBase.to), gasPrice: _.isUndefined(callTxDataBase.gasPrice)
                ? undefined
                : utils_2.utils.encodeAmountAsHexString(callTxDataBase.gasPrice), gas: _.isUndefined(callTxDataBase.gas) ? undefined : utils_2.utils.encodeAmountAsHexString(callTxDataBase.gas), value: _.isUndefined(callTxDataBase.value)
                ? undefined
                : utils_2.utils.encodeAmountAsHexString(callTxDataBase.value), nonce: _.isUndefined(callTxDataBase.nonce)
                ? undefined
                : utils_2.utils.encodeAmountAsHexString(callTxDataBase.nonce) });
        return callTxDataBaseRPC;
    },
};
//# sourceMappingURL=marshaller.js.map