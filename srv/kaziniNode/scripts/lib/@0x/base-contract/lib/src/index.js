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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@0x/utils");
var web3_wrapper_1 = require("@0x/web3-wrapper");
var ethereum_types_1 = require("ethereum-types");
var ethers = require("ethers");
var _ = require("lodash");
var utils_2 = require("./utils");
var REVERT_ERROR_SELECTOR = '08c379a0';
var REVERT_ERROR_SELECTOR_OFFSET = 2;
var REVERT_ERROR_SELECTOR_BYTES_LENGTH = 4;
var REVERT_ERROR_SELECTOR_END = REVERT_ERROR_SELECTOR_OFFSET + REVERT_ERROR_SELECTOR_BYTES_LENGTH * 2;
var BaseContract = /** @class */ (function () {
    function BaseContract(contractName, abi, address, provider, txDefaults) {
        var _this = this;
        this.constructorArgs = [];
        this.contractName = contractName;
        this._web3Wrapper = new web3_wrapper_1.Web3Wrapper(provider, txDefaults);
        this.abi = abi;
        this.address = address;
        var methodAbis = this.abi.filter(function (abiDefinition) { return abiDefinition.type === ethereum_types_1.AbiType.Function; });
        this._ethersInterfacesByFunctionSignature = {};
        _.each(methodAbis, function (methodAbi) {
            var functionSignature = utils_1.abiUtils.getFunctionSignature(methodAbi);
            _this._ethersInterfacesByFunctionSignature[functionSignature] = new ethers.utils.Interface([methodAbi]);
        });
    }
    BaseContract._formatABIDataItemList = function (abis, values, formatter) {
        return _.map(values, function (value, i) { return utils_2.formatABIDataItem(abis[i], value, formatter); });
    };
    BaseContract._lowercaseAddress = function (type, value) {
        return type === 'address' ? value.toLowerCase() : value;
    };
    BaseContract._bigNumberToString = function (_type, value) {
        return _.isObject(value) && value.isBigNumber ? value.toString() : value;
    };
    BaseContract._lookupConstructorAbi = function (abi) {
        var constructorAbiIfExists = _.find(abi, function (abiDefinition) { return abiDefinition.type === ethereum_types_1.AbiType.Constructor; });
        if (!_.isUndefined(constructorAbiIfExists)) {
            return constructorAbiIfExists;
        }
        else {
            // If the constructor is not explicitly defined, it won't be included in the ABI. It is
            // still callable however, so we construct what the ABI would look like were it to exist.
            var defaultConstructorAbi = {
                type: ethereum_types_1.AbiType.Constructor,
                stateMutability: 'nonpayable',
                payable: false,
                inputs: [],
            };
            return defaultConstructorAbi;
        }
    };
    BaseContract._bnToBigNumber = function (_type, value) {
        return _.isObject(value) && value._hex ? new utils_1.BigNumber(value.toString()) : value;
    };
    BaseContract._applyDefaultsToTxDataAsync = function (txData, txDefaults, estimateGasAsync) {
        return __awaiter(this, void 0, void 0, function () {
            var removeUndefinedProperties, txDataWithDefaults, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        removeUndefinedProperties = _.pickBy.bind(_);
                        txDataWithDefaults = __assign({}, removeUndefinedProperties(txDefaults), removeUndefinedProperties(txData));
                        if (!(_.isUndefined(txDataWithDefaults.gas) && !_.isUndefined(estimateGasAsync))) return [3 /*break*/, 2];
                        _a = txDataWithDefaults;
                        return [4 /*yield*/, estimateGasAsync(txDataWithDefaults)];
                    case 1:
                        _a.gas = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/, txDataWithDefaults];
                }
            });
        });
    };
    BaseContract._throwIfRevertWithReasonCallResult = function (rawCallResult) {
        if (rawCallResult.slice(REVERT_ERROR_SELECTOR_OFFSET, REVERT_ERROR_SELECTOR_END) === REVERT_ERROR_SELECTOR) {
            var revertReason = ethers.utils.defaultAbiCoder.decode(['string'], ethers.utils.hexDataSlice(rawCallResult, REVERT_ERROR_SELECTOR_BYTES_LENGTH));
            throw new Error(revertReason);
        }
    };
    // Throws if the given arguments cannot be safely/correctly encoded based on
    // the given inputAbi. An argument may not be considered safely encodeable
    // if it overflows the corresponding Solidity type, there is a bug in the
    // encoder, or the encoder performs unsafe type coercion.
    BaseContract.strictArgumentEncodingCheck = function (inputAbi, args) {
        var coder = new ethers.utils.AbiCoder();
        var params = utils_1.abiUtils.parseEthersParams(inputAbi);
        var rawEncoded = coder.encode(inputAbi, args);
        var rawDecoded = coder.decode(inputAbi, rawEncoded);
        for (var i = 0; i < rawDecoded.length; i++) {
            var original = args[i];
            var decoded = rawDecoded[i];
            if (!utils_1.abiUtils.isAbiDataEqual(params.names[i], params.types[i], original, decoded)) {
                throw new Error("Cannot safely encode argument: " + params.names[i] + " (" + original + ") of type " + params.types[i] + ". (Possible type overflow or other encoding error)");
            }
        }
    };
    BaseContract.prototype._lookupEthersInterface = function (functionSignature) {
        var ethersInterface = this._ethersInterfacesByFunctionSignature[functionSignature];
        if (_.isUndefined(ethersInterface)) {
            throw new Error("Failed to lookup method with function signature '" + functionSignature + "'");
        }
        return ethersInterface;
    };
    BaseContract.prototype._lookupAbi = function (functionSignature) {
        var methodAbi = _.find(this.abi, function (abiDefinition) {
            if (abiDefinition.type !== ethereum_types_1.AbiType.Function) {
                return false;
            }
            // tslint:disable-next-line:no-unnecessary-type-assertion
            var abiFunctionSignature = utils_1.abiUtils.getFunctionSignature(abiDefinition);
            if (abiFunctionSignature === functionSignature) {
                return true;
            }
            return false;
        });
        return methodAbi;
    };
    return BaseContract;
}());
exports.BaseContract = BaseContract;
//# sourceMappingURL=index.js.map