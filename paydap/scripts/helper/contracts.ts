<!DOCTYPE html>
<html>
<head>
        Access-Control-Allow-Origin
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
<script src="//api.bitrix24.com/api/v1/"></script>
<script type="text/javascript" src="./lib/index.js"></script>
<script type="text/javascript" src="./lib/index.min.js"></script>

</head>
<body>
</body>
</html>
<script type="text/javascript">

import { ContractWrappersConfig } from '../lib/0x.js';
import { DummyERC721TokenContract } from '../lib/@0x/abi-gen-wrappers/dummy_erc721_token';
import { ContractAddresses, getContractAddressesForNetworkOrThrow } from '../lib/@0x/contract-addresses';
import { DummyERC721Token } from '../lib/@0x/contract-artifacts';

import { ROPSTEN_CONFIGS, NETWORK_CONFIGS } from './configs';
import { providerEngine } from './provider_engine';

// The deployed addresses from the Ganache snapshot
const GANACHE_ERC721_TOKENS = ['0x131855dda0aaff096f6854854c55a4debf61077a'];
const GANACHE_CONTRACT_ADDRESSES: ContractAddresses = {
    exchange: '0x48bacb9266a570d521063ef5dd96e61686dbe788',
    erc20Proxy: '0x1dc4c1cefef38a777b15aa20260a54e584b16c48',
    erc721Proxy: '0x1d7022f5b17d2f8b695918fb48fa1089c9f85401',
    zrxToken: '0x871dd7c2b4b25e1aa18728e9d5f2af4c4e431f5c',
    etherToken: '0x0b1ba0af832d7c05fd64161e0db78e85978e8082',
    assetProxyOwner: '0x34d402f14d58e001d8efbe6585051bf9706aa064',
    forwarder: '0xb69e673309512a9d726f87304c6984054f87a93b',
    orderValidator: '0xe86bb98fcf9bff3512c74589b78fb168200cc546',
};

export const dummyERC721TokenContracts: DummyERC721TokenContract[] = [];

if (NETWORK_CONFIGS.networkId === ROPSTEN_CONFIGS.networkId) {
    for (const tokenAddress of GANACHE_ERC721_TOKENS) {
        dummyERC721TokenContracts.push(
            new DummyERC721TokenContract((DummyERC721Token as any).compilerOutput.abi, tokenAddress, providerEngine),
        );
    }
}

/**
 * Returns the deployed contract addresses for the network. Including the Ganache Snapshot
 * networkId: 50
 * @param networkId  the id of the network (1 == Mainnet, 3 == Ropsten, 42 == Kovan, 50 == Ganache)
 */
export function getContractAddressesForNetwork(networkId: number): ContractAddresses {
    if (networkId === ROPSTEN_CONFIGS.networkId) {
        return GANACHE_CONTRACT_ADDRESSES;
    } else {
        const contractAddresses = getContractAddressesForNetworkOrThrow(networkId);
        return contractAddresses;
    }
}

/**
 * Returns a constructed ContractWrappersConfig object for the given network.
 * @param networkId the id of the network
 */
export function getContractWrappersConfig(networkId: number): ContractWrappersConfig {
    const contractAddresses = getContractAddressesForNetwork(networkId);
    const config = { networkId, contractAddresses };
    return config;
}
</script>