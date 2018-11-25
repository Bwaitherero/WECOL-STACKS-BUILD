"use strict";
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
var types_1 = require("@0x/types");
var utils_1 = require("@0x/utils");
var ethAbi = require("ethereumjs-abi");
var ethUtil = require("ethereumjs-util");
var constants_1 = require("./constants");
exports.assetDataUtils = {
    /**
     * Encodes an ERC20 token address into a hex encoded assetData string, usable in the makerAssetData or
     * takerAssetData fields in a 0x order.
     * @param tokenAddress  The ERC20 token address to encode
     * @return The hex encoded assetData string
     */
    encodeERC20AssetData: function (tokenAddress) {
        return ethUtil.bufferToHex(ethAbi.simpleEncode('ERC20Token(address)', tokenAddress));
    },
    /**
     * Decodes an ERC20 assetData hex string into it's corresponding ERC20 tokenAddress & assetProxyId
     * @param assetData Hex encoded assetData string to decode
     * @return An object containing the decoded tokenAddress & assetProxyId
     */
    decodeERC20AssetData: function (assetData) {
        var data = ethUtil.toBuffer(assetData);
        if (data.byteLength < constants_1.constants.ERC20_ASSET_DATA_BYTE_LENGTH) {
            throw new Error("Could not decode ERC20 Proxy Data. Expected length of encoded data to be at least " + constants_1.constants.ERC20_ASSET_DATA_BYTE_LENGTH + ". Got " + data.byteLength);
        }
        var assetProxyId = ethUtil.bufferToHex(data.slice(0, constants_1.constants.SELECTOR_LENGTH));
        if (assetProxyId !== types_1.AssetProxyId.ERC20) {
            throw new Error("Could not decode ERC20 Proxy Data. Expected Asset Proxy Id to be ERC20 (" + types_1.AssetProxyId.ERC20 + "), but got " + assetProxyId);
        }
        var _a = __read(ethAbi.rawDecode(['address'], data.slice(constants_1.constants.SELECTOR_LENGTH)), 1), tokenAddress = _a[0];
        return {
            assetProxyId: assetProxyId,
            tokenAddress: ethUtil.addHexPrefix(tokenAddress),
        };
    },
    /**
     * Encodes an ERC721 token address into a hex encoded assetData string, usable in the makerAssetData or
     * takerAssetData fields in a 0x order.
     * @param tokenAddress  The ERC721 token address to encode
     * @param tokenId  The ERC721 tokenId to encode
     * @return The hex encoded assetData string
     */
    encodeERC721AssetData: function (tokenAddress, tokenId) {
        // TODO: Pass `tokendId` as a BigNumber.
        return ethUtil.bufferToHex(ethAbi.simpleEncode('ERC721Token(address,uint256)', tokenAddress, "0x" + tokenId.toString(constants_1.constants.BASE_16)));
    },
    /**
     * Decodes an ERC721 assetData hex string into it's corresponding ERC721 tokenAddress, tokenId & assetProxyId
     * @param assetData Hex encoded assetData string to decode
     * @return An object containing the decoded tokenAddress, tokenId & assetProxyId
     */
    decodeERC721AssetData: function (assetData) {
        var data = ethUtil.toBuffer(assetData);
        if (data.byteLength < constants_1.constants.ERC721_ASSET_DATA_MINIMUM_BYTE_LENGTH) {
            throw new Error("Could not decode ERC721 Asset Data. Expected length of encoded data to be at least " + constants_1.constants.ERC721_ASSET_DATA_MINIMUM_BYTE_LENGTH + ". Got " + data.byteLength);
        }
        var assetProxyId = ethUtil.bufferToHex(data.slice(0, constants_1.constants.SELECTOR_LENGTH));
        if (assetProxyId !== types_1.AssetProxyId.ERC721) {
            throw new Error("Could not decode ERC721 Asset Data. Expected Asset Proxy Id to be ERC721 (" + types_1.AssetProxyId.ERC721 + "), but got " + assetProxyId);
        }
        var _a = __read(ethAbi.rawDecode(['address', 'uint256'], data.slice(constants_1.constants.SELECTOR_LENGTH)), 2), tokenAddress = _a[0], tokenId = _a[1];
        return {
            assetProxyId: assetProxyId,
            tokenAddress: ethUtil.addHexPrefix(tokenAddress),
            tokenId: new utils_1.BigNumber(tokenId.toString()),
        };
    },
    /**
     * Decode and return the assetProxyId from the assetData
     * @param assetData Hex encoded assetData string to decode
     * @return The assetProxyId
     */
    decodeAssetProxyId: function (assetData) {
        var encodedAssetData = ethUtil.toBuffer(assetData);
        if (encodedAssetData.byteLength < constants_1.constants.SELECTOR_LENGTH) {
            throw new Error("Could not decode assetData. Expected length of encoded data to be at least 4. Got " + encodedAssetData.byteLength);
        }
        var encodedAssetProxyId = encodedAssetData.slice(0, constants_1.constants.SELECTOR_LENGTH);
        var assetProxyId = decodeAssetProxyId(encodedAssetProxyId);
        return assetProxyId;
    },
    /**
     * Decode any assetData into it's corresponding assetData object
     * @param assetData Hex encoded assetData string to decode
     * @return Either a ERC20 or ERC721 assetData object
     */
    decodeAssetDataOrThrow: function (assetData) {
        var assetProxyId = exports.assetDataUtils.decodeAssetProxyId(assetData);
        switch (assetProxyId) {
            case types_1.AssetProxyId.ERC20:
                var erc20AssetData = exports.assetDataUtils.decodeERC20AssetData(assetData);
                return erc20AssetData;
            case types_1.AssetProxyId.ERC721:
                var erc721AssetData = exports.assetDataUtils.decodeERC721AssetData(assetData);
                return erc721AssetData;
            default:
                throw new Error("Unrecognized asset proxy id: " + assetProxyId);
        }
    },
};
function decodeAssetProxyId(encodedAssetProxyId) {
    var hexString = ethUtil.bufferToHex(encodedAssetProxyId);
    if (hexString === types_1.AssetProxyId.ERC20) {
        return types_1.AssetProxyId.ERC20;
    }
    if (hexString === types_1.AssetProxyId.ERC721) {
        return types_1.AssetProxyId.ERC721;
    }
    throw new Error("Invalid ProxyId: " + hexString);
}
//# sourceMappingURL=asset_data_utils.js.map