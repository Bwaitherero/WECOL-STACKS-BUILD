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
var ethereum_types_1 = require("ethereum-types");
var ethers = require("ethers");
var _ = require("lodash");
var address_utils_1 = require("./address_utils");
var configured_bignumber_1 = require("./configured_bignumber");
/**
 * AbiDecoder allows you to decode event logs given a set of supplied contract ABI's. It takes the contract's event
 * signature from the ABI and attempts to decode the logs using it.
 */
var AbiDecoder = /** @class */ (function () {
    /**
     * Instantiate an AbiDecoder
     * @param abiArrays An array of contract ABI's
     * @return AbiDecoder instance
     */
    function AbiDecoder(abiArrays) {
        this._methodIds = {};
        _.forEach(abiArrays, this.addABI.bind(this));
    }
    /**
     * Attempt to decode a log given the ABI's the AbiDecoder knows about.
     * @param log The log to attempt to decode
     * @return The decoded log if the requisite ABI was available. Otherwise the log unaltered.
     */
    AbiDecoder.prototype.tryToDecodeLogOrNoop = function (log) {
        var methodId = log.topics[0];
        var numIndexedArgs = log.topics.length - 1;
        if (_.isUndefined(this._methodIds[methodId]) || _.isUndefined(this._methodIds[methodId][numIndexedArgs])) {
            return log;
        }
        var event = this._methodIds[methodId][numIndexedArgs];
        var ethersInterface = new ethers.utils.Interface([event]);
        var decodedParams = {};
        var topicsIndex = 1;
        var decodedData;
        try {
            decodedData = ethersInterface.events[event.name].decode(log.data);
        }
        catch (error) {
            if (error.code === ethers.errors.INVALID_ARGUMENT) {
                // Because we index events by Method ID, and Method IDs are derived from the method
                // name and the input parameters, it's possible that the return value of the event
                // does not match our ABI. If that's the case, then ethers will throw an error
                // when we try to parse the event. We handle that case here by returning the log rather
                // than throwing an error.
                return log;
            }
            throw error;
        }
        var didFailToDecode = false;
        _.forEach(event.inputs, function (param, i) {
            // Indexed parameters are stored in topics. Non-indexed ones in decodedData
            var value = param.indexed ? log.topics[topicsIndex++] : decodedData[i];
            if (_.isUndefined(value)) {
                didFailToDecode = true;
                return;
            }
            if (param.type === ethereum_types_1.SolidityTypes.Address) {
                var baseHex = 16;
                value = address_utils_1.addressUtils.padZeros(new configured_bignumber_1.BigNumber(value).toString(baseHex));
            }
            else if (param.type === ethereum_types_1.SolidityTypes.Uint256 || param.type === ethereum_types_1.SolidityTypes.Uint) {
                value = new configured_bignumber_1.BigNumber(value);
            }
            else if (param.type === ethereum_types_1.SolidityTypes.Uint8) {
                value = new configured_bignumber_1.BigNumber(value).toNumber();
            }
            decodedParams[param.name] = value;
        });
        if (didFailToDecode) {
            return log;
        }
        else {
            return __assign({}, log, { event: event.name, args: decodedParams });
        }
    };
    /**
     * Add additional ABI definitions to the AbiDecoder
     * @param abiArray An array of ABI definitions to add to the AbiDecoder
     */
    AbiDecoder.prototype.addABI = function (abiArray) {
        var _this = this;
        if (_.isUndefined(abiArray)) {
            return;
        }
        var ethersInterface = new ethers.utils.Interface(abiArray);
        _.map(abiArray, function (abi) {
            var _a;
            if (abi.type === ethereum_types_1.AbiType.Event) {
                // tslint:disable-next-line:no-unnecessary-type-assertion
                var eventAbi = abi;
                var topic = ethersInterface.events[eventAbi.name].topic;
                var numIndexedArgs = _.reduce(eventAbi.inputs, function (sum, input) { return (input.indexed ? sum + 1 : sum); }, 0);
                _this._methodIds[topic] = __assign({}, _this._methodIds[topic], (_a = {}, _a[numIndexedArgs] = eventAbi, _a));
            }
        });
    };
    return AbiDecoder;
}());
exports.AbiDecoder = AbiDecoder;
//# sourceMappingURL=abi_decoder.js.map