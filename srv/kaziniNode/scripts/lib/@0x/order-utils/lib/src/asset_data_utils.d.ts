import { AssetData, AssetProxyId, ERC20AssetData, ERC721AssetData } from '@0x/types';
import { BigNumber } from '@0x/utils';
export declare const assetDataUtils: {
    /**
     * Encodes an ERC20 token address into a hex encoded assetData string, usable in the makerAssetData or
     * takerAssetData fields in a 0x order.
     * @param tokenAddress  The ERC20 token address to encode
     * @return The hex encoded assetData string
     */
    encodeERC20AssetData(tokenAddress: string): string;
    /**
     * Decodes an ERC20 assetData hex string into it's corresponding ERC20 tokenAddress & assetProxyId
     * @param assetData Hex encoded assetData string to decode
     * @return An object containing the decoded tokenAddress & assetProxyId
     */
    decodeERC20AssetData(assetData: string): ERC20AssetData;
    /**
     * Encodes an ERC721 token address into a hex encoded assetData string, usable in the makerAssetData or
     * takerAssetData fields in a 0x order.
     * @param tokenAddress  The ERC721 token address to encode
     * @param tokenId  The ERC721 tokenId to encode
     * @return The hex encoded assetData string
     */
    encodeERC721AssetData(tokenAddress: string, tokenId: BigNumber): string;
    /**
     * Decodes an ERC721 assetData hex string into it's corresponding ERC721 tokenAddress, tokenId & assetProxyId
     * @param assetData Hex encoded assetData string to decode
     * @return An object containing the decoded tokenAddress, tokenId & assetProxyId
     */
    decodeERC721AssetData(assetData: string): ERC721AssetData;
    /**
     * Decode and return the assetProxyId from the assetData
     * @param assetData Hex encoded assetData string to decode
     * @return The assetProxyId
     */
    decodeAssetProxyId(assetData: string): AssetProxyId;
    /**
     * Decode any assetData into it's corresponding assetData object
     * @param assetData Hex encoded assetData string to decode
     * @return Either a ERC20 or ERC721 assetData object
     */
    decodeAssetDataOrThrow(assetData: string): AssetData;
};
//# sourceMappingURL=asset_data_utils.d.ts.map