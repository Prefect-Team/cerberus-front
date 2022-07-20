/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MockSohmInterface extends utils.Interface {
  functions: {
    "DECIMALS()": FunctionFragment;
    "_agnosticAmount(address)": FunctionFragment;
    "_allowedValue(address,address)": FunctionFragment;
    "_index()": FunctionFragment;
    "_rebasePct()": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "drip()": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "index()": FunctionFragment;
    "mint(address,uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "nextBlockCanClaim(address)": FunctionFragment;
    "rebase()": FunctionFragment;
    "setIndex(uint256)": FunctionFragment;
    "setRebasePct(uint256)": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "DECIMALS", values?: undefined): string;
  encodeFunctionData(functionFragment: "_agnosticAmount", values: [string]): string;
  encodeFunctionData(functionFragment: "_allowedValue", values: [string, string]): string;
  encodeFunctionData(functionFragment: "_index", values?: undefined): string;
  encodeFunctionData(functionFragment: "_rebasePct", values?: undefined): string;
  encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
  encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(functionFragment: "decreaseAllowance", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "drip", values?: undefined): string;
  encodeFunctionData(functionFragment: "increaseAllowance", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "index", values?: undefined): string;
  encodeFunctionData(functionFragment: "mint", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "nextBlockCanClaim", values: [string]): string;
  encodeFunctionData(functionFragment: "rebase", values?: undefined): string;
  encodeFunctionData(functionFragment: "setIndex", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "setRebasePct", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
  encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;

  decodeFunctionResult(functionFragment: "DECIMALS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_agnosticAmount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_allowedValue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_index", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_rebasePct", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "drip", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "index", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nextBlockCanClaim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rebase", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setIndex", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setRebasePct", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  { owner: string; spender: string; value: BigNumber }
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export type TransferEvent = TypedEvent<[string, string, BigNumber], { from: string; to: string; value: BigNumber }>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface MockSohm extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockSohmInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DECIMALS(overrides?: CallOverrides): Promise<[BigNumber]>;

    _agnosticAmount(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    _allowedValue(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    _index(overrides?: CallOverrides): Promise<[BigNumber]>;

    _rebasePct(overrides?: CallOverrides): Promise<[BigNumber]>;

    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    approve(
      spender_: string,
      value_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    balanceOf(owner_: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    drip(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    index(overrides?: CallOverrides): Promise<[BigNumber]>;

    mint(
      to_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    nextBlockCanClaim(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    rebase(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    setIndex(
      newIndex_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setRebasePct(
      newRebasePct_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      to_: string,
      value_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    transferFrom(
      from_: string,
      to_: string,
      value_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;

  _agnosticAmount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  _allowedValue(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

  _index(overrides?: CallOverrides): Promise<BigNumber>;

  _rebasePct(overrides?: CallOverrides): Promise<BigNumber>;

  allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;

  approve(
    spender_: string,
    value_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  balanceOf(owner_: string, overrides?: CallOverrides): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  drip(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  index(overrides?: CallOverrides): Promise<BigNumber>;

  mint(
    to_: string,
    amount_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  nextBlockCanClaim(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  rebase(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  setIndex(
    newIndex_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setRebasePct(
    newRebasePct_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    to_: string,
    value_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  transferFrom(
    from_: string,
    to_: string,
    value_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;

    _agnosticAmount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    _allowedValue(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

    _index(overrides?: CallOverrides): Promise<BigNumber>;

    _rebasePct(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;

    approve(spender_: string, value_: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    balanceOf(owner_: string, overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    drip(overrides?: CallOverrides): Promise<void>;

    increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    index(overrides?: CallOverrides): Promise<BigNumber>;

    mint(to_: string, amount_: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    nextBlockCanClaim(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    rebase(overrides?: CallOverrides): Promise<void>;

    setIndex(newIndex_: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setRebasePct(newRebasePct_: BigNumberish, overrides?: CallOverrides): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(to_: string, value_: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    transferFrom(from_: string, to_: string, value_: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      spender?: string | null,
      value?: null,
    ): ApprovalEventFilter;
    Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;

    "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
    Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
  };

  estimateGas: {
    DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;

    _agnosticAmount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    _allowedValue(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

    _index(overrides?: CallOverrides): Promise<BigNumber>;

    _rebasePct(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      spender_: string,
      value_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    balanceOf(owner_: string, overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    drip(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    index(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      to_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    nextBlockCanClaim(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    rebase(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    setIndex(newIndex_: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    setRebasePct(
      newRebasePct_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to_: string,
      value_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    transferFrom(
      from_: string,
      to_: string,
      value_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DECIMALS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _agnosticAmount(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _allowedValue(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _index(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _rebasePct(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    approve(
      spender_: string,
      value_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    balanceOf(owner_: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    drip(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    index(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      to_: string,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextBlockCanClaim(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rebase(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    setIndex(
      newIndex_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setRebasePct(
      newRebasePct_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to_: string,
      value_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from_: string,
      to_: string,
      value_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}