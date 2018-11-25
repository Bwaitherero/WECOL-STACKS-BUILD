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
var abi_gen_wrappers_1 = require("@0x/abi-gen-wrappers");
var contract_artifacts_1 = require("@0x/contract-artifacts");
var _ = require("lodash");
var assert_1 = require("../utils/assert");
var contract_addresses_1 = require("../utils/contract_addresses");
var contract_wrapper_1 = require("./contract_wrapper");
/**
 * This class includes the functionality related to interacting with the ERC20Proxy contract.
 */
var ERC20ProxyWrapper = /** @class */ (function (_super) {
    __extends(ERC20ProxyWrapper, _super);
    /**
     * Instantiate ERC20ProxyWrapper
     * @param web3Wrapper Web3Wrapper instance to use
     * @param networkId Desired networkId
     * @param address The address of the ERC20Proxy contract. If undefined, will
     * default to the known address corresponding to the networkId.
     */
    function ERC20ProxyWrapper(web3Wrapper, networkId, address) {
        var _this = _super.call(this, web3Wrapper, networkId) || this;
        _this.abi = contract_artifacts_1.ERC20Proxy.compilerOutput.abi;
        _this.address = _.isUndefined(address) ? contract_addresses_1._getDefaultContractAddresses(networkId).erc20Proxy : address;
        return _this;
    }
    /**
     * Get the 4 bytes ID of this asset proxy
     * @return  Proxy id
     */
    ERC20ProxyWrapper.prototype.getProxyIdAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ERC20ProxyContractInstance, proxyId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ERC20ProxyContractInstance = this._getERC20ProxyContract();
                        return [4 /*yield*/, ERC20ProxyContractInstance.getProxyId.callAsync()];
                    case 1:
                        proxyId = (_a.sent());
                        return [2 /*return*/, proxyId];
                }
            });
        });
    };
    /**
     * Check if the Exchange contract address is authorized by the ERC20Proxy contract.
     * @param   exchangeContractAddress     The hex encoded address of the Exchange contract to call.
     * @return  Whether the exchangeContractAddress is authorized.
     */
    ERC20ProxyWrapper.prototype.isAuthorizedAsync = function (exchangeContractAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var normalizedExchangeContractAddress, ERC20ProxyContractInstance, isAuthorized;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        assert_1.assert.isETHAddressHex('exchangeContractAddress', exchangeContractAddress);
                        normalizedExchangeContractAddress = exchangeContractAddress.toLowerCase();
                        ERC20ProxyContractInstance = this._getERC20ProxyContract();
                        return [4 /*yield*/, ERC20ProxyContractInstance.authorized.callAsync(normalizedExchangeContractAddress)];
                    case 1:
                        isAuthorized = _a.sent();
                        return [2 /*return*/, isAuthorized];
                }
            });
        });
    };
    /**
     * Get the list of all Exchange contract addresses authorized by the ERC20Proxy contract.
     * @return  The list of authorized addresses.
     */
    ERC20ProxyWrapper.prototype.getAuthorizedAddressesAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ERC20ProxyContractInstance, authorizedAddresses;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ERC20ProxyContractInstance = this._getERC20ProxyContract();
                        return [4 /*yield*/, ERC20ProxyContractInstance.getAuthorizedAddresses.callAsync()];
                    case 1:
                        authorizedAddresses = _a.sent();
                        return [2 /*return*/, authorizedAddresses];
                }
            });
        });
    };
    ERC20ProxyWrapper.prototype._getERC20ProxyContract = function () {
        if (!_.isUndefined(this._erc20ProxyContractIfExists)) {
            return this._erc20ProxyContractIfExists;
        }
        var contractInstance = new abi_gen_wrappers_1.ERC20ProxyContract(this.abi, this.address, this._web3Wrapper.getProvider(), this._web3Wrapper.getContractDefaults());
        this._erc20ProxyContractIfExists = contractInstance;
        return this._erc20ProxyContractIfExists;
    };
    return ERC20ProxyWrapper;
}(contract_wrapper_1.ContractWrapper));
exports.ERC20ProxyWrapper = ERC20ProxyWrapper;
//# sourceMappingURL=erc20_proxy_wrapper.js.map