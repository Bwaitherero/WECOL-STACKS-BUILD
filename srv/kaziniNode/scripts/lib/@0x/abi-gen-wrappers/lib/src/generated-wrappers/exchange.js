"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma whitespace class-name
// tslint:disable:no-unused-variable
// tslint:disable:no-unbound-method
var base_contract_1 = require("@0x/base-contract");
var utils_1 = require("@0x/utils");
var web3_wrapper_1 = require("@0x/web3-wrapper");
var ethers = require("ethers");
var _ = require("lodash");
var ExchangeEvents;
(function (ExchangeEvents) {
    ExchangeEvents["SignatureValidatorApproval"] = "SignatureValidatorApproval";
    ExchangeEvents["Fill"] = "Fill";
    ExchangeEvents["Cancel"] = "Cancel";
    ExchangeEvents["CancelUpTo"] = "CancelUpTo";
    ExchangeEvents["AssetProxyRegistered"] = "AssetProxyRegistered";
})(ExchangeEvents = exports.ExchangeEvents || (exports.ExchangeEvents = {}));
/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
var ExchangeContract = /** @class */ (function (_super) {
    __extends(ExchangeContract, _super);
    function ExchangeContract(abi, address, provider, txDefaults) {
        var _this = _super.call(this, 'Exchange', abi, address, provider, txDefaults) || this;
        _this.filled = {
            callAsync: function (index_0, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'filled(bytes32)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), index_0 = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.filled;
                                encodedData = ethersFunction.encode([index_0
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'filled' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.batchFillOrders = {
            sendTransactionAsync: function (orders, takerAssetFillAmounts, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('batchFillOrders(tuple[],uint256[],bytes[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), orders = _a[0], takerAssetFillAmounts = _a[1], signatures = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ]);
                                encodedData = self._lookupEthersInterface('batchFillOrders(tuple[],uint256[],bytes[])').functions.batchFillOrders.encode([orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.batchFillOrders.estimateGasAsync.bind(self, orders, takerAssetFillAmounts, signatures))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (orders, takerAssetFillAmounts, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('batchFillOrders(tuple[],uint256[],bytes[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString), 3), orders = _a[0], takerAssetFillAmounts = _a[1], signatures = _a[2];
                                encodedData = self._lookupEthersInterface('batchFillOrders(tuple[],uint256[],bytes[])').functions.batchFillOrders.encode([orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (orders, takerAssetFillAmounts, signatures) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('batchFillOrders(tuple[],uint256[],bytes[])').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                    takerAssetFillAmounts,
                    signatures
                ], base_contract_1.BaseContract._bigNumberToString), 3), orders = _a[0], takerAssetFillAmounts = _a[1], signatures = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('batchFillOrders(tuple[],uint256[],bytes[])').functions.batchFillOrders.encode([orders,
                    takerAssetFillAmounts,
                    signatures
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (orders, takerAssetFillAmounts, signatures, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'batchFillOrders(tuple[],uint256[],bytes[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), orders = _a[0], takerAssetFillAmounts = _a[1], signatures = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.batchFillOrders;
                                encodedData = ethersFunction.encode([orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'batchFillOrders' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.cancelled = {
            callAsync: function (index_0, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'cancelled(bytes32)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), index_0 = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.cancelled;
                                encodedData = ethersFunction.encode([index_0
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'cancelled' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.preSign = {
            sendTransactionAsync: function (hash, signerAddress, signature, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('preSign(bytes32,address,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [hash,
                                    signerAddress,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), hash = _a[0], signerAddress = _a[1], signature = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [hash,
                                    signerAddress,
                                    signature
                                ]);
                                encodedData = self._lookupEthersInterface('preSign(bytes32,address,bytes)').functions.preSign.encode([hash,
                                    signerAddress,
                                    signature
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.preSign.estimateGasAsync.bind(self, hash, signerAddress, signature))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (hash, signerAddress, signature, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('preSign(bytes32,address,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [hash,
                                    signerAddress,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString), 3), hash = _a[0], signerAddress = _a[1], signature = _a[2];
                                encodedData = self._lookupEthersInterface('preSign(bytes32,address,bytes)').functions.preSign.encode([hash,
                                    signerAddress,
                                    signature
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (hash, signerAddress, signature) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('preSign(bytes32,address,bytes)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [hash,
                    signerAddress,
                    signature
                ], base_contract_1.BaseContract._bigNumberToString), 3), hash = _a[0], signerAddress = _a[1], signature = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('preSign(bytes32,address,bytes)').functions.preSign.encode([hash,
                    signerAddress,
                    signature
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (hash, signerAddress, signature, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'preSign(bytes32,address,bytes)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [hash,
                                    signerAddress,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), hash = _a[0], signerAddress = _a[1], signature = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [hash,
                                    signerAddress,
                                    signature
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.preSign;
                                encodedData = ethersFunction.encode([hash,
                                    signerAddress,
                                    signature
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'preSign' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.matchOrders = {
            sendTransactionAsync: function (leftOrder, rightOrder, leftSignature, rightSignature, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('matchOrders({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},{address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},bytes,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [leftOrder,
                                    rightOrder,
                                    leftSignature,
                                    rightSignature
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 4), leftOrder = _a[0], rightOrder = _a[1], leftSignature = _a[2], rightSignature = _a[3];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [leftOrder,
                                    rightOrder,
                                    leftSignature,
                                    rightSignature
                                ]);
                                encodedData = self._lookupEthersInterface('matchOrders({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},{address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},bytes,bytes)').functions.matchOrders.encode([leftOrder,
                                    rightOrder,
                                    leftSignature,
                                    rightSignature
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.matchOrders.estimateGasAsync.bind(self, leftOrder, rightOrder, leftSignature, rightSignature))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (leftOrder, rightOrder, leftSignature, rightSignature, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('matchOrders({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},{address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},bytes,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [leftOrder,
                                    rightOrder,
                                    leftSignature,
                                    rightSignature
                                ], base_contract_1.BaseContract._bigNumberToString), 4), leftOrder = _a[0], rightOrder = _a[1], leftSignature = _a[2], rightSignature = _a[3];
                                encodedData = self._lookupEthersInterface('matchOrders({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},{address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},bytes,bytes)').functions.matchOrders.encode([leftOrder,
                                    rightOrder,
                                    leftSignature,
                                    rightSignature
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (leftOrder, rightOrder, leftSignature, rightSignature) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('matchOrders({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},{address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},bytes,bytes)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [leftOrder,
                    rightOrder,
                    leftSignature,
                    rightSignature
                ], base_contract_1.BaseContract._bigNumberToString), 4), leftOrder = _a[0], rightOrder = _a[1], leftSignature = _a[2], rightSignature = _a[3];
                var abiEncodedTransactionData = self._lookupEthersInterface('matchOrders({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},{address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},bytes,bytes)').functions.matchOrders.encode([leftOrder,
                    rightOrder,
                    leftSignature,
                    rightSignature
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (leftOrder, rightOrder, leftSignature, rightSignature, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'matchOrders({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},{address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},bytes,bytes)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [leftOrder,
                                    rightOrder,
                                    leftSignature,
                                    rightSignature
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 4), leftOrder = _a[0], rightOrder = _a[1], leftSignature = _a[2], rightSignature = _a[3];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [leftOrder,
                                    rightOrder,
                                    leftSignature,
                                    rightSignature
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.matchOrders;
                                encodedData = ethersFunction.encode([leftOrder,
                                    rightOrder,
                                    leftSignature,
                                    rightSignature
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'matchOrders' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.fillOrderNoThrow = {
            sendTransactionAsync: function (order, takerAssetFillAmount, signature, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('fillOrderNoThrow({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order,
                                    takerAssetFillAmount,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), order = _a[0], takerAssetFillAmount = _a[1], signature = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [order,
                                    takerAssetFillAmount,
                                    signature
                                ]);
                                encodedData = self._lookupEthersInterface('fillOrderNoThrow({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').functions.fillOrderNoThrow.encode([order,
                                    takerAssetFillAmount,
                                    signature
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.fillOrderNoThrow.estimateGasAsync.bind(self, order, takerAssetFillAmount, signature))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (order, takerAssetFillAmount, signature, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('fillOrderNoThrow({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order,
                                    takerAssetFillAmount,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString), 3), order = _a[0], takerAssetFillAmount = _a[1], signature = _a[2];
                                encodedData = self._lookupEthersInterface('fillOrderNoThrow({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').functions.fillOrderNoThrow.encode([order,
                                    takerAssetFillAmount,
                                    signature
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (order, takerAssetFillAmount, signature) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('fillOrderNoThrow({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order,
                    takerAssetFillAmount,
                    signature
                ], base_contract_1.BaseContract._bigNumberToString), 3), order = _a[0], takerAssetFillAmount = _a[1], signature = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('fillOrderNoThrow({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').functions.fillOrderNoThrow.encode([order,
                    takerAssetFillAmount,
                    signature
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (order, takerAssetFillAmount, signature, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'fillOrderNoThrow({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order,
                                    takerAssetFillAmount,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), order = _a[0], takerAssetFillAmount = _a[1], signature = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [order,
                                    takerAssetFillAmount,
                                    signature
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.fillOrderNoThrow;
                                encodedData = ethersFunction.encode([order,
                                    takerAssetFillAmount,
                                    signature
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'fillOrderNoThrow' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.assetProxies = {
            callAsync: function (index_0, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'assetProxies(bytes4)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), index_0 = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.assetProxies;
                                encodedData = ethersFunction.encode([index_0
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'assetProxies' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.batchCancelOrders = {
            sendTransactionAsync: function (orders, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('batchCancelOrders(tuple[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), orders = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [orders
                                ]);
                                encodedData = self._lookupEthersInterface('batchCancelOrders(tuple[])').functions.batchCancelOrders.encode([orders
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.batchCancelOrders.estimateGasAsync.bind(self, orders))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (orders, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('batchCancelOrders(tuple[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders
                                ], base_contract_1.BaseContract._bigNumberToString), 1), orders = _a[0];
                                encodedData = self._lookupEthersInterface('batchCancelOrders(tuple[])').functions.batchCancelOrders.encode([orders
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (orders) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('batchCancelOrders(tuple[])').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders
                ], base_contract_1.BaseContract._bigNumberToString), 1), orders = _a[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('batchCancelOrders(tuple[])').functions.batchCancelOrders.encode([orders
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (orders, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'batchCancelOrders(tuple[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), orders = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [orders
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.batchCancelOrders;
                                encodedData = ethersFunction.encode([orders
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'batchCancelOrders' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.batchFillOrKillOrders = {
            sendTransactionAsync: function (orders, takerAssetFillAmounts, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('batchFillOrKillOrders(tuple[],uint256[],bytes[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), orders = _a[0], takerAssetFillAmounts = _a[1], signatures = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ]);
                                encodedData = self._lookupEthersInterface('batchFillOrKillOrders(tuple[],uint256[],bytes[])').functions.batchFillOrKillOrders.encode([orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.batchFillOrKillOrders.estimateGasAsync.bind(self, orders, takerAssetFillAmounts, signatures))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (orders, takerAssetFillAmounts, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('batchFillOrKillOrders(tuple[],uint256[],bytes[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString), 3), orders = _a[0], takerAssetFillAmounts = _a[1], signatures = _a[2];
                                encodedData = self._lookupEthersInterface('batchFillOrKillOrders(tuple[],uint256[],bytes[])').functions.batchFillOrKillOrders.encode([orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (orders, takerAssetFillAmounts, signatures) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('batchFillOrKillOrders(tuple[],uint256[],bytes[])').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                    takerAssetFillAmounts,
                    signatures
                ], base_contract_1.BaseContract._bigNumberToString), 3), orders = _a[0], takerAssetFillAmounts = _a[1], signatures = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('batchFillOrKillOrders(tuple[],uint256[],bytes[])').functions.batchFillOrKillOrders.encode([orders,
                    takerAssetFillAmounts,
                    signatures
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (orders, takerAssetFillAmounts, signatures, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'batchFillOrKillOrders(tuple[],uint256[],bytes[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), orders = _a[0], takerAssetFillAmounts = _a[1], signatures = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.batchFillOrKillOrders;
                                encodedData = ethersFunction.encode([orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'batchFillOrKillOrders' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.cancelOrdersUpTo = {
            sendTransactionAsync: function (targetOrderEpoch, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('cancelOrdersUpTo(uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [targetOrderEpoch
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), targetOrderEpoch = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [targetOrderEpoch
                                ]);
                                encodedData = self._lookupEthersInterface('cancelOrdersUpTo(uint256)').functions.cancelOrdersUpTo.encode([targetOrderEpoch
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.cancelOrdersUpTo.estimateGasAsync.bind(self, targetOrderEpoch))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (targetOrderEpoch, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('cancelOrdersUpTo(uint256)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [targetOrderEpoch
                                ], base_contract_1.BaseContract._bigNumberToString), 1), targetOrderEpoch = _a[0];
                                encodedData = self._lookupEthersInterface('cancelOrdersUpTo(uint256)').functions.cancelOrdersUpTo.encode([targetOrderEpoch
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (targetOrderEpoch) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('cancelOrdersUpTo(uint256)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [targetOrderEpoch
                ], base_contract_1.BaseContract._bigNumberToString), 1), targetOrderEpoch = _a[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('cancelOrdersUpTo(uint256)').functions.cancelOrdersUpTo.encode([targetOrderEpoch
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (targetOrderEpoch, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'cancelOrdersUpTo(uint256)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [targetOrderEpoch
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), targetOrderEpoch = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [targetOrderEpoch
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.cancelOrdersUpTo;
                                encodedData = ethersFunction.encode([targetOrderEpoch
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'cancelOrdersUpTo' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.batchFillOrdersNoThrow = {
            sendTransactionAsync: function (orders, takerAssetFillAmounts, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('batchFillOrdersNoThrow(tuple[],uint256[],bytes[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), orders = _a[0], takerAssetFillAmounts = _a[1], signatures = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ]);
                                encodedData = self._lookupEthersInterface('batchFillOrdersNoThrow(tuple[],uint256[],bytes[])').functions.batchFillOrdersNoThrow.encode([orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.batchFillOrdersNoThrow.estimateGasAsync.bind(self, orders, takerAssetFillAmounts, signatures))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (orders, takerAssetFillAmounts, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('batchFillOrdersNoThrow(tuple[],uint256[],bytes[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString), 3), orders = _a[0], takerAssetFillAmounts = _a[1], signatures = _a[2];
                                encodedData = self._lookupEthersInterface('batchFillOrdersNoThrow(tuple[],uint256[],bytes[])').functions.batchFillOrdersNoThrow.encode([orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (orders, takerAssetFillAmounts, signatures) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('batchFillOrdersNoThrow(tuple[],uint256[],bytes[])').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                    takerAssetFillAmounts,
                    signatures
                ], base_contract_1.BaseContract._bigNumberToString), 3), orders = _a[0], takerAssetFillAmounts = _a[1], signatures = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('batchFillOrdersNoThrow(tuple[],uint256[],bytes[])').functions.batchFillOrdersNoThrow.encode([orders,
                    takerAssetFillAmounts,
                    signatures
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (orders, takerAssetFillAmounts, signatures, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'batchFillOrdersNoThrow(tuple[],uint256[],bytes[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), orders = _a[0], takerAssetFillAmounts = _a[1], signatures = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.batchFillOrdersNoThrow;
                                encodedData = ethersFunction.encode([orders,
                                    takerAssetFillAmounts,
                                    signatures
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'batchFillOrdersNoThrow' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.getAssetProxy = {
            callAsync: function (assetProxyId, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getAssetProxy(bytes4)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [assetProxyId
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), assetProxyId = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [assetProxyId
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getAssetProxy;
                                encodedData = ethersFunction.encode([assetProxyId
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getAssetProxy' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.transactions = {
            callAsync: function (index_0, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'transactions(bytes32)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), index_0 = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.transactions;
                                encodedData = ethersFunction.encode([index_0
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'transactions' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.fillOrKillOrder = {
            sendTransactionAsync: function (order, takerAssetFillAmount, signature, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('fillOrKillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order,
                                    takerAssetFillAmount,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), order = _a[0], takerAssetFillAmount = _a[1], signature = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [order,
                                    takerAssetFillAmount,
                                    signature
                                ]);
                                encodedData = self._lookupEthersInterface('fillOrKillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').functions.fillOrKillOrder.encode([order,
                                    takerAssetFillAmount,
                                    signature
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.fillOrKillOrder.estimateGasAsync.bind(self, order, takerAssetFillAmount, signature))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (order, takerAssetFillAmount, signature, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('fillOrKillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order,
                                    takerAssetFillAmount,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString), 3), order = _a[0], takerAssetFillAmount = _a[1], signature = _a[2];
                                encodedData = self._lookupEthersInterface('fillOrKillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').functions.fillOrKillOrder.encode([order,
                                    takerAssetFillAmount,
                                    signature
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (order, takerAssetFillAmount, signature) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('fillOrKillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order,
                    takerAssetFillAmount,
                    signature
                ], base_contract_1.BaseContract._bigNumberToString), 3), order = _a[0], takerAssetFillAmount = _a[1], signature = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('fillOrKillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').functions.fillOrKillOrder.encode([order,
                    takerAssetFillAmount,
                    signature
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (order, takerAssetFillAmount, signature, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'fillOrKillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order,
                                    takerAssetFillAmount,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), order = _a[0], takerAssetFillAmount = _a[1], signature = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [order,
                                    takerAssetFillAmount,
                                    signature
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.fillOrKillOrder;
                                encodedData = ethersFunction.encode([order,
                                    takerAssetFillAmount,
                                    signature
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'fillOrKillOrder' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.setSignatureValidatorApproval = {
            sendTransactionAsync: function (validatorAddress, approval, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('setSignatureValidatorApproval(address,bool)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [validatorAddress,
                                    approval
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), validatorAddress = _a[0], approval = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [validatorAddress,
                                    approval
                                ]);
                                encodedData = self._lookupEthersInterface('setSignatureValidatorApproval(address,bool)').functions.setSignatureValidatorApproval.encode([validatorAddress,
                                    approval
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.setSignatureValidatorApproval.estimateGasAsync.bind(self, validatorAddress, approval))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (validatorAddress, approval, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('setSignatureValidatorApproval(address,bool)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [validatorAddress,
                                    approval
                                ], base_contract_1.BaseContract._bigNumberToString), 2), validatorAddress = _a[0], approval = _a[1];
                                encodedData = self._lookupEthersInterface('setSignatureValidatorApproval(address,bool)').functions.setSignatureValidatorApproval.encode([validatorAddress,
                                    approval
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (validatorAddress, approval) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('setSignatureValidatorApproval(address,bool)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [validatorAddress,
                    approval
                ], base_contract_1.BaseContract._bigNumberToString), 2), validatorAddress = _a[0], approval = _a[1];
                var abiEncodedTransactionData = self._lookupEthersInterface('setSignatureValidatorApproval(address,bool)').functions.setSignatureValidatorApproval.encode([validatorAddress,
                    approval
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (validatorAddress, approval, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'setSignatureValidatorApproval(address,bool)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [validatorAddress,
                                    approval
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), validatorAddress = _a[0], approval = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [validatorAddress,
                                    approval
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.setSignatureValidatorApproval;
                                encodedData = ethersFunction.encode([validatorAddress,
                                    approval
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'setSignatureValidatorApproval' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.allowedValidators = {
            callAsync: function (index_0, index_1, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'allowedValidators(address,address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0,
                                    index_1
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), index_0 = _a[0], index_1 = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0,
                                    index_1
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.allowedValidators;
                                encodedData = ethersFunction.encode([index_0,
                                    index_1
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'allowedValidators' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.marketSellOrders = {
            sendTransactionAsync: function (orders, takerAssetFillAmount, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('marketSellOrders(tuple[],uint256,bytes[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmount,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), orders = _a[0], takerAssetFillAmount = _a[1], signatures = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [orders,
                                    takerAssetFillAmount,
                                    signatures
                                ]);
                                encodedData = self._lookupEthersInterface('marketSellOrders(tuple[],uint256,bytes[])').functions.marketSellOrders.encode([orders,
                                    takerAssetFillAmount,
                                    signatures
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.marketSellOrders.estimateGasAsync.bind(self, orders, takerAssetFillAmount, signatures))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (orders, takerAssetFillAmount, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('marketSellOrders(tuple[],uint256,bytes[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmount,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString), 3), orders = _a[0], takerAssetFillAmount = _a[1], signatures = _a[2];
                                encodedData = self._lookupEthersInterface('marketSellOrders(tuple[],uint256,bytes[])').functions.marketSellOrders.encode([orders,
                                    takerAssetFillAmount,
                                    signatures
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (orders, takerAssetFillAmount, signatures) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('marketSellOrders(tuple[],uint256,bytes[])').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                    takerAssetFillAmount,
                    signatures
                ], base_contract_1.BaseContract._bigNumberToString), 3), orders = _a[0], takerAssetFillAmount = _a[1], signatures = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('marketSellOrders(tuple[],uint256,bytes[])').functions.marketSellOrders.encode([orders,
                    takerAssetFillAmount,
                    signatures
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (orders, takerAssetFillAmount, signatures, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'marketSellOrders(tuple[],uint256,bytes[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmount,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), orders = _a[0], takerAssetFillAmount = _a[1], signatures = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [orders,
                                    takerAssetFillAmount,
                                    signatures
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.marketSellOrders;
                                encodedData = ethersFunction.encode([orders,
                                    takerAssetFillAmount,
                                    signatures
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'marketSellOrders' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.getOrdersInfo = {
            callAsync: function (orders, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getOrdersInfo(tuple[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), orders = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [orders
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getOrdersInfo;
                                encodedData = ethersFunction.encode([orders
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getOrdersInfo' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.preSigned = {
            callAsync: function (index_0, index_1, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'preSigned(bytes32,address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0,
                                    index_1
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), index_0 = _a[0], index_1 = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0,
                                    index_1
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.preSigned;
                                encodedData = ethersFunction.encode([index_0,
                                    index_1
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'preSigned' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.owner = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'owner()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.owner;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'owner' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.isValidSignature = {
            callAsync: function (hash, signerAddress, signature, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'isValidSignature(bytes32,address,bytes)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [hash,
                                    signerAddress,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), hash = _a[0], signerAddress = _a[1], signature = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [hash,
                                    signerAddress,
                                    signature
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.isValidSignature;
                                encodedData = ethersFunction.encode([hash,
                                    signerAddress,
                                    signature
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'isValidSignature' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.marketBuyOrdersNoThrow = {
            sendTransactionAsync: function (orders, makerAssetFillAmount, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('marketBuyOrdersNoThrow(tuple[],uint256,bytes[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    makerAssetFillAmount,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), orders = _a[0], makerAssetFillAmount = _a[1], signatures = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [orders,
                                    makerAssetFillAmount,
                                    signatures
                                ]);
                                encodedData = self._lookupEthersInterface('marketBuyOrdersNoThrow(tuple[],uint256,bytes[])').functions.marketBuyOrdersNoThrow.encode([orders,
                                    makerAssetFillAmount,
                                    signatures
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.marketBuyOrdersNoThrow.estimateGasAsync.bind(self, orders, makerAssetFillAmount, signatures))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (orders, makerAssetFillAmount, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('marketBuyOrdersNoThrow(tuple[],uint256,bytes[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    makerAssetFillAmount,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString), 3), orders = _a[0], makerAssetFillAmount = _a[1], signatures = _a[2];
                                encodedData = self._lookupEthersInterface('marketBuyOrdersNoThrow(tuple[],uint256,bytes[])').functions.marketBuyOrdersNoThrow.encode([orders,
                                    makerAssetFillAmount,
                                    signatures
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (orders, makerAssetFillAmount, signatures) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('marketBuyOrdersNoThrow(tuple[],uint256,bytes[])').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                    makerAssetFillAmount,
                    signatures
                ], base_contract_1.BaseContract._bigNumberToString), 3), orders = _a[0], makerAssetFillAmount = _a[1], signatures = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('marketBuyOrdersNoThrow(tuple[],uint256,bytes[])').functions.marketBuyOrdersNoThrow.encode([orders,
                    makerAssetFillAmount,
                    signatures
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (orders, makerAssetFillAmount, signatures, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'marketBuyOrdersNoThrow(tuple[],uint256,bytes[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    makerAssetFillAmount,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), orders = _a[0], makerAssetFillAmount = _a[1], signatures = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [orders,
                                    makerAssetFillAmount,
                                    signatures
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.marketBuyOrdersNoThrow;
                                encodedData = ethersFunction.encode([orders,
                                    makerAssetFillAmount,
                                    signatures
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'marketBuyOrdersNoThrow' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.fillOrder = {
            sendTransactionAsync: function (order, takerAssetFillAmount, signature, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('fillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order,
                                    takerAssetFillAmount,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), order = _a[0], takerAssetFillAmount = _a[1], signature = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [order,
                                    takerAssetFillAmount,
                                    signature
                                ]);
                                encodedData = self._lookupEthersInterface('fillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').functions.fillOrder.encode([order,
                                    takerAssetFillAmount,
                                    signature
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.fillOrder.estimateGasAsync.bind(self, order, takerAssetFillAmount, signature))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (order, takerAssetFillAmount, signature, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('fillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order,
                                    takerAssetFillAmount,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString), 3), order = _a[0], takerAssetFillAmount = _a[1], signature = _a[2];
                                encodedData = self._lookupEthersInterface('fillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').functions.fillOrder.encode([order,
                                    takerAssetFillAmount,
                                    signature
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (order, takerAssetFillAmount, signature) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('fillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order,
                    takerAssetFillAmount,
                    signature
                ], base_contract_1.BaseContract._bigNumberToString), 3), order = _a[0], takerAssetFillAmount = _a[1], signature = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('fillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)').functions.fillOrder.encode([order,
                    takerAssetFillAmount,
                    signature
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (order, takerAssetFillAmount, signature, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'fillOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes},uint256,bytes)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order,
                                    takerAssetFillAmount,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), order = _a[0], takerAssetFillAmount = _a[1], signature = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [order,
                                    takerAssetFillAmount,
                                    signature
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.fillOrder;
                                encodedData = ethersFunction.encode([order,
                                    takerAssetFillAmount,
                                    signature
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'fillOrder' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.executeTransaction = {
            sendTransactionAsync: function (salt, signerAddress, data, signature, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('executeTransaction(uint256,address,bytes,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [salt,
                                    signerAddress,
                                    data,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 4), salt = _a[0], signerAddress = _a[1], data = _a[2], signature = _a[3];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [salt,
                                    signerAddress,
                                    data,
                                    signature
                                ]);
                                encodedData = self._lookupEthersInterface('executeTransaction(uint256,address,bytes,bytes)').functions.executeTransaction.encode([salt,
                                    signerAddress,
                                    data,
                                    signature
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.executeTransaction.estimateGasAsync.bind(self, salt, signerAddress, data, signature))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (salt, signerAddress, data, signature, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('executeTransaction(uint256,address,bytes,bytes)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [salt,
                                    signerAddress,
                                    data,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString), 4), salt = _a[0], signerAddress = _a[1], data = _a[2], signature = _a[3];
                                encodedData = self._lookupEthersInterface('executeTransaction(uint256,address,bytes,bytes)').functions.executeTransaction.encode([salt,
                                    signerAddress,
                                    data,
                                    signature
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (salt, signerAddress, data, signature) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('executeTransaction(uint256,address,bytes,bytes)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [salt,
                    signerAddress,
                    data,
                    signature
                ], base_contract_1.BaseContract._bigNumberToString), 4), salt = _a[0], signerAddress = _a[1], data = _a[2], signature = _a[3];
                var abiEncodedTransactionData = self._lookupEthersInterface('executeTransaction(uint256,address,bytes,bytes)').functions.executeTransaction.encode([salt,
                    signerAddress,
                    data,
                    signature
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (salt, signerAddress, data, signature, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'executeTransaction(uint256,address,bytes,bytes)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [salt,
                                    signerAddress,
                                    data,
                                    signature
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 4), salt = _a[0], signerAddress = _a[1], data = _a[2], signature = _a[3];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [salt,
                                    signerAddress,
                                    data,
                                    signature
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.executeTransaction;
                                encodedData = ethersFunction.encode([salt,
                                    signerAddress,
                                    data,
                                    signature
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'executeTransaction' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.registerAssetProxy = {
            sendTransactionAsync: function (assetProxy, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('registerAssetProxy(address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [assetProxy
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), assetProxy = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [assetProxy
                                ]);
                                encodedData = self._lookupEthersInterface('registerAssetProxy(address)').functions.registerAssetProxy.encode([assetProxy
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.registerAssetProxy.estimateGasAsync.bind(self, assetProxy))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (assetProxy, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('registerAssetProxy(address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [assetProxy
                                ], base_contract_1.BaseContract._bigNumberToString), 1), assetProxy = _a[0];
                                encodedData = self._lookupEthersInterface('registerAssetProxy(address)').functions.registerAssetProxy.encode([assetProxy
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (assetProxy) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('registerAssetProxy(address)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [assetProxy
                ], base_contract_1.BaseContract._bigNumberToString), 1), assetProxy = _a[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('registerAssetProxy(address)').functions.registerAssetProxy.encode([assetProxy
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (assetProxy, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'registerAssetProxy(address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [assetProxy
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), assetProxy = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [assetProxy
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.registerAssetProxy;
                                encodedData = ethersFunction.encode([assetProxy
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'registerAssetProxy' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.getOrderInfo = {
            callAsync: function (order, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'getOrderInfo({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes})';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), order = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [order
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.getOrderInfo;
                                encodedData = ethersFunction.encode([order
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'getOrderInfo' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.cancelOrder = {
            sendTransactionAsync: function (order, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('cancelOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes})').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), order = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [order
                                ]);
                                encodedData = self._lookupEthersInterface('cancelOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes})').functions.cancelOrder.encode([order
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.cancelOrder.estimateGasAsync.bind(self, order))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (order, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('cancelOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes})').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order
                                ], base_contract_1.BaseContract._bigNumberToString), 1), order = _a[0];
                                encodedData = self._lookupEthersInterface('cancelOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes})').functions.cancelOrder.encode([order
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (order) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('cancelOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes})').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order
                ], base_contract_1.BaseContract._bigNumberToString), 1), order = _a[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('cancelOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes})').functions.cancelOrder.encode([order
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (order, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'cancelOrder({address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes})';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [order
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), order = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [order
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.cancelOrder;
                                encodedData = ethersFunction.encode([order
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'cancelOrder' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.orderEpoch = {
            callAsync: function (index_0, index_1, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'orderEpoch(address,address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0,
                                    index_1
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 2), index_0 = _a[0], index_1 = _a[1];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0,
                                    index_1
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.orderEpoch;
                                encodedData = ethersFunction.encode([index_0,
                                    index_1
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'orderEpoch' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.ZRX_ASSET_DATA = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'ZRX_ASSET_DATA()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.ZRX_ASSET_DATA;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'ZRX_ASSET_DATA' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.marketSellOrdersNoThrow = {
            sendTransactionAsync: function (orders, takerAssetFillAmount, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('marketSellOrdersNoThrow(tuple[],uint256,bytes[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmount,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), orders = _a[0], takerAssetFillAmount = _a[1], signatures = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [orders,
                                    takerAssetFillAmount,
                                    signatures
                                ]);
                                encodedData = self._lookupEthersInterface('marketSellOrdersNoThrow(tuple[],uint256,bytes[])').functions.marketSellOrdersNoThrow.encode([orders,
                                    takerAssetFillAmount,
                                    signatures
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.marketSellOrdersNoThrow.estimateGasAsync.bind(self, orders, takerAssetFillAmount, signatures))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (orders, takerAssetFillAmount, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('marketSellOrdersNoThrow(tuple[],uint256,bytes[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmount,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString), 3), orders = _a[0], takerAssetFillAmount = _a[1], signatures = _a[2];
                                encodedData = self._lookupEthersInterface('marketSellOrdersNoThrow(tuple[],uint256,bytes[])').functions.marketSellOrdersNoThrow.encode([orders,
                                    takerAssetFillAmount,
                                    signatures
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (orders, takerAssetFillAmount, signatures) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('marketSellOrdersNoThrow(tuple[],uint256,bytes[])').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                    takerAssetFillAmount,
                    signatures
                ], base_contract_1.BaseContract._bigNumberToString), 3), orders = _a[0], takerAssetFillAmount = _a[1], signatures = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('marketSellOrdersNoThrow(tuple[],uint256,bytes[])').functions.marketSellOrdersNoThrow.encode([orders,
                    takerAssetFillAmount,
                    signatures
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (orders, takerAssetFillAmount, signatures, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'marketSellOrdersNoThrow(tuple[],uint256,bytes[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    takerAssetFillAmount,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), orders = _a[0], takerAssetFillAmount = _a[1], signatures = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [orders,
                                    takerAssetFillAmount,
                                    signatures
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.marketSellOrdersNoThrow;
                                encodedData = ethersFunction.encode([orders,
                                    takerAssetFillAmount,
                                    signatures
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'marketSellOrdersNoThrow' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.EIP712_DOMAIN_HASH = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'EIP712_DOMAIN_HASH()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.EIP712_DOMAIN_HASH;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'EIP712_DOMAIN_HASH' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.marketBuyOrders = {
            sendTransactionAsync: function (orders, makerAssetFillAmount, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('marketBuyOrders(tuple[],uint256,bytes[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    makerAssetFillAmount,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), orders = _a[0], makerAssetFillAmount = _a[1], signatures = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [orders,
                                    makerAssetFillAmount,
                                    signatures
                                ]);
                                encodedData = self._lookupEthersInterface('marketBuyOrders(tuple[],uint256,bytes[])').functions.marketBuyOrders.encode([orders,
                                    makerAssetFillAmount,
                                    signatures
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.marketBuyOrders.estimateGasAsync.bind(self, orders, makerAssetFillAmount, signatures))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (orders, makerAssetFillAmount, signatures, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('marketBuyOrders(tuple[],uint256,bytes[])').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    makerAssetFillAmount,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString), 3), orders = _a[0], makerAssetFillAmount = _a[1], signatures = _a[2];
                                encodedData = self._lookupEthersInterface('marketBuyOrders(tuple[],uint256,bytes[])').functions.marketBuyOrders.encode([orders,
                                    makerAssetFillAmount,
                                    signatures
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (orders, makerAssetFillAmount, signatures) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('marketBuyOrders(tuple[],uint256,bytes[])').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                    makerAssetFillAmount,
                    signatures
                ], base_contract_1.BaseContract._bigNumberToString), 3), orders = _a[0], makerAssetFillAmount = _a[1], signatures = _a[2];
                var abiEncodedTransactionData = self._lookupEthersInterface('marketBuyOrders(tuple[],uint256,bytes[])').functions.marketBuyOrders.encode([orders,
                    makerAssetFillAmount,
                    signatures
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (orders, makerAssetFillAmount, signatures, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'marketBuyOrders(tuple[],uint256,bytes[])';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [orders,
                                    makerAssetFillAmount,
                                    signatures
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 3), orders = _a[0], makerAssetFillAmount = _a[1], signatures = _a[2];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [orders,
                                    makerAssetFillAmount,
                                    signatures
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.marketBuyOrders;
                                encodedData = ethersFunction.encode([orders,
                                    makerAssetFillAmount,
                                    signatures
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'marketBuyOrders' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.currentContextAddress = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'currentContextAddress()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.currentContextAddress;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'currentContextAddress' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        _this.transferOwnership = {
            sendTransactionAsync: function (newOwner, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, txHash;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('transferOwnership(address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [newOwner
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), newOwner = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [newOwner
                                ]);
                                encodedData = self._lookupEthersInterface('transferOwnership(address)').functions.transferOwnership.encode([newOwner
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults(), self.transferOwnership.estimateGasAsync.bind(self, newOwner))];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                            case 2:
                                txHash = _b.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (newOwner, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, inputAbi, encodedData, txDataWithDefaults, gas;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                inputAbi = self._lookupAbi('transferOwnership(address)').inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [newOwner
                                ], base_contract_1.BaseContract._bigNumberToString), 1), newOwner = _a[0];
                                encodedData = self._lookupEthersInterface('transferOwnership(address)').functions.transferOwnership.encode([newOwner
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, txData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                txDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                            case 2:
                                gas = _b.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (newOwner) {
                var _a;
                var self = this;
                var inputAbi = self._lookupAbi('transferOwnership(address)').inputs;
                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [newOwner
                ], base_contract_1.BaseContract._bigNumberToString), 1), newOwner = _a[0];
                var abiEncodedTransactionData = self._lookupEthersInterface('transferOwnership(address)').functions.transferOwnership.encode([newOwner
                ]);
                return abiEncodedTransactionData;
            },
            callAsync: function (newOwner, callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var _a, self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                self = this;
                                functionSignature = 'transferOwnership(address)';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                _a = __read(base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [newOwner
                                ], base_contract_1.BaseContract._bigNumberToString.bind(self)), 1), newOwner = _a[0];
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [newOwner
                                ]);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.transferOwnership;
                                encodedData = ethersFunction.encode([newOwner
                                ]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _b.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _b.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'transferOwnership' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray];
                        }
                    });
                });
            },
        };
        _this.VERSION = {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, functionSignature, inputAbi, ethersFunction, encodedData, callDataWithDefaults, rawCallResult, resultArray, outputAbi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                functionSignature = 'VERSION()';
                                inputAbi = self._lookupAbi(functionSignature).inputs;
                                base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                                ethersFunction = self._lookupEthersInterface(functionSignature).functions.VERSION;
                                encodedData = ethersFunction.encode([]);
                                return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync(__assign({ to: self.address }, callData, { data: encodedData }), self._web3Wrapper.getContractDefaults())];
                            case 1:
                                callDataWithDefaults = _a.sent();
                                return [4 /*yield*/, self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock)];
                            case 2:
                                rawCallResult = _a.sent();
                                base_contract_1.BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
                                resultArray = ethersFunction.decode(rawCallResult);
                                outputAbi = _.find(self.abi, { name: 'VERSION' }).outputs;
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                                return [2 /*return*/, resultArray[0]];
                        }
                    });
                });
            },
        };
        utils_1.classUtils.bindAll(_this, ['_ethersInterfacesByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
        return _this;
    }
    ExchangeContract.deployFrom0xArtifactAsync = function (artifact, provider, txDefaults) {
        return __awaiter(this, void 0, void 0, function () {
            var bytecode, abi;
            return __generator(this, function (_a) {
                if (_.isUndefined(artifact.compilerOutput)) {
                    throw new Error('Compiler output not found in the artifact file');
                }
                bytecode = artifact.compilerOutput.evm.bytecode.object;
                abi = artifact.compilerOutput.abi;
                return [2 /*return*/, ExchangeContract.deployAsync(bytecode, abi, provider, txDefaults)];
            });
        });
    };
    ExchangeContract.deployAsync = function (bytecode, abi, provider, txDefaults) {
        return __awaiter(this, void 0, void 0, function () {
            var constructorAbi, iface, deployInfo, txData, web3Wrapper, txDataWithDefaults, txHash, txReceipt, contractInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        constructorAbi = base_contract_1.BaseContract._lookupConstructorAbi(abi);
                        base_contract_1.BaseContract._formatABIDataItemList(constructorAbi.inputs, [], base_contract_1.BaseContract._bigNumberToString);
                        iface = new ethers.utils.Interface(abi);
                        deployInfo = iface.deployFunction;
                        txData = deployInfo.encode(bytecode, []);
                        web3Wrapper = new web3_wrapper_1.Web3Wrapper(provider);
                        return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToTxDataAsync({ data: txData }, txDefaults, web3Wrapper.estimateGasAsync.bind(web3Wrapper))];
                    case 1:
                        txDataWithDefaults = _a.sent();
                        return [4 /*yield*/, web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                    case 2:
                        txHash = _a.sent();
                        utils_1.logUtils.log("transactionHash: " + txHash);
                        return [4 /*yield*/, web3Wrapper.awaitTransactionSuccessAsync(txHash)];
                    case 3:
                        txReceipt = _a.sent();
                        utils_1.logUtils.log("Exchange successfully deployed at " + txReceipt.contractAddress);
                        contractInstance = new ExchangeContract(abi, txReceipt.contractAddress, provider, txDefaults);
                        contractInstance.constructorArgs = [];
                        return [2 /*return*/, contractInstance];
                }
            });
        });
    };
    return ExchangeContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.ExchangeContract = ExchangeContract;
// tslint:enable:no-unbound-method
//# sourceMappingURL=exchange.js.map