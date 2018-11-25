import { BaseContract } from '@0x/base-contract';
import { BlockParamLiteral, CallData, ContractAbi, ContractArtifact, DecodedLogArgs, Provider, TxData } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
export declare type DummyERC20TokenEventArgs = DummyERC20TokenTransferEventArgs | DummyERC20TokenApprovalEventArgs;
export declare enum DummyERC20TokenEvents {
    Transfer = "Transfer",
    Approval = "Approval"
}
export interface DummyERC20TokenTransferEventArgs extends DecodedLogArgs {
    _from: string;
    _to: string;
    _value: BigNumber;
}
export interface DummyERC20TokenApprovalEventArgs extends DecodedLogArgs {
    _owner: string;
    _spender: string;
    _value: BigNumber;
}
export declare class DummyERC20TokenContract extends BaseContract {
    name: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    approve: {
        sendTransactionAsync(_spender: string, _value: BigNumber, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_spender: string, _value: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_spender: string, _value: BigNumber): string;
        callAsync(_spender: string, _value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    totalSupply: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    transferFrom: {
        sendTransactionAsync(_from: string, _to: string, _value: BigNumber, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_from: string, _to: string, _value: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, _value: BigNumber): string;
        callAsync(_from: string, _to: string, _value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    decimals: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    balanceOf: {
        callAsync(_owner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    owner: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    symbol: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<string>;
    };
    mint: {
        sendTransactionAsync(_value: BigNumber, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_value: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_value: BigNumber): string;
        callAsync(_value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    transfer: {
        sendTransactionAsync(_to: string, _value: BigNumber, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_to: string, _value: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_to: string, _value: BigNumber): string;
        callAsync(_to: string, _value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<boolean>;
    };
    allowance: {
        callAsync(_owner: string, _spender: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    setBalance: {
        sendTransactionAsync(_target: string, _value: BigNumber, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(_target: string, _value: BigNumber, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(_target: string, _value: BigNumber): string;
        callAsync(_target: string, _value: BigNumber, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    transferOwnership: {
        sendTransactionAsync(newOwner: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(newOwner: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(newOwner: string): string;
        callAsync(newOwner: string, callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<void>;
    };
    MAX_MINT_AMOUNT: {
        callAsync(callData?: Partial<CallData>, defaultBlock?: number | BlockParamLiteral | undefined): Promise<BigNumber>;
    };
    static deployFrom0xArtifactAsync(artifact: ContractArtifact, provider: Provider, txDefaults: Partial<TxData>, _name: string, _symbol: string, _decimals: BigNumber, _totalSupply: BigNumber): Promise<DummyERC20TokenContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, provider: Provider, txDefaults: Partial<TxData>, _name: string, _symbol: string, _decimals: BigNumber, _totalSupply: BigNumber): Promise<DummyERC20TokenContract>;
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>);
}
//# sourceMappingURL=dummy_erc20_token.d.ts.map