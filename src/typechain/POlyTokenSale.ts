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

export interface POlyTokenSaleInterface extends utils.Interface {
  functions: {
    "approveBuyer(address)": FunctionFragment;
    "approveBuyers(address[])": FunctionFragment;
    "approvedBuyers(address)": FunctionFragment;
    "buyPOly(uint256)": FunctionFragment;
    "dai()": FunctionFragment;
    "initialize(address,address,uint256,address)": FunctionFragment;
    "initialized()": FunctionFragment;
    "owner()": FunctionFragment;
    "pOly()": FunctionFragment;
    "pOlyPrice()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setPOlyPrice(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdrawTokens(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "approveBuyer", values: [string]): string;
  encodeFunctionData(functionFragment: "approveBuyers", values: [string[]]): string;
  encodeFunctionData(functionFragment: "approvedBuyers", values: [string]): string;
  encodeFunctionData(functionFragment: "buyPOly", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "dai", values?: undefined): string;
  encodeFunctionData(functionFragment: "initialize", values: [string, string, BigNumberish, string]): string;
  encodeFunctionData(functionFragment: "initialized", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pOly", values?: undefined): string;
  encodeFunctionData(functionFragment: "pOlyPrice", values?: undefined): string;
  encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
  encodeFunctionData(functionFragment: "setPOlyPrice", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
  encodeFunctionData(functionFragment: "withdrawTokens", values: [string]): string;

  decodeFunctionResult(functionFragment: "approveBuyer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approveBuyers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approvedBuyers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyPOly", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dai", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialized", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pOly", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pOlyPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPOlyPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdrawTokens", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "SaleEnded(address,uint256)": EventFragment;
    "SaleStarted(address,uint256)": EventFragment;
    "SellerApproval(address,address,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SaleEnded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SaleStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SellerApproval"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<[string, string], { previousOwner: string; newOwner: string }>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export type SaleEndedEvent = TypedEvent<[string, BigNumber], { activator: string; timestamp: BigNumber }>;

export type SaleEndedEventFilter = TypedEventFilter<SaleEndedEvent>;

export type SaleStartedEvent = TypedEvent<[string, BigNumber], { activator: string; timestamp: BigNumber }>;

export type SaleStartedEventFilter = TypedEventFilter<SaleStartedEvent>;

export type SellerApprovalEvent = TypedEvent<
  [string, string, string],
  { approver: string; seller: string; message: string }
>;

export type SellerApprovalEventFilter = TypedEventFilter<SellerApprovalEvent>;

export interface POlyTokenSale extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: POlyTokenSaleInterface;

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
    approveBuyer(
      newBuyer_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    approveBuyers(
      newBuyers_: string[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    approvedBuyers(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    buyPOly(
      amountPaid_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    dai(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      pOly_: string,
      dai_: string,
      pOlyPrice_: BigNumberish,
      saleProceedsAddress_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    initialized(overrides?: CallOverrides): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pOly(overrides?: CallOverrides): Promise<[string]>;

    pOlyPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    setPOlyPrice(
      newPOlyPrice_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    withdrawTokens(
      tokenToWithdraw_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  approveBuyer(
    newBuyer_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  approveBuyers(
    newBuyers_: string[],
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  approvedBuyers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  buyPOly(
    amountPaid_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  dai(overrides?: CallOverrides): Promise<string>;

  initialize(
    pOly_: string,
    dai_: string,
    pOlyPrice_: BigNumberish,
    saleProceedsAddress_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  initialized(overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  pOly(overrides?: CallOverrides): Promise<string>;

  pOlyPrice(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  setPOlyPrice(
    newPOlyPrice_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  withdrawTokens(
    tokenToWithdraw_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    approveBuyer(newBuyer_: string, overrides?: CallOverrides): Promise<boolean>;

    approveBuyers(newBuyers_: string[], overrides?: CallOverrides): Promise<BigNumber>;

    approvedBuyers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    buyPOly(amountPaid_: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    dai(overrides?: CallOverrides): Promise<string>;

    initialize(
      pOly_: string,
      dai_: string,
      pOlyPrice_: BigNumberish,
      saleProceedsAddress_: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    initialized(overrides?: CallOverrides): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    pOly(overrides?: CallOverrides): Promise<string>;

    pOlyPrice(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setPOlyPrice(newPOlyPrice_: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

    withdrawTokens(tokenToWithdraw_: string, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;

    "SaleEnded(address,uint256)"(activator?: string | null, timestamp?: null): SaleEndedEventFilter;
    SaleEnded(activator?: string | null, timestamp?: null): SaleEndedEventFilter;

    "SaleStarted(address,uint256)"(activator?: string | null, timestamp?: null): SaleStartedEventFilter;
    SaleStarted(activator?: string | null, timestamp?: null): SaleStartedEventFilter;

    "SellerApproval(address,address,string)"(
      approver?: string | null,
      seller?: string | null,
      message?: string | null,
    ): SellerApprovalEventFilter;
    SellerApproval(
      approver?: string | null,
      seller?: string | null,
      message?: string | null,
    ): SellerApprovalEventFilter;
  };

  estimateGas: {
    approveBuyer(newBuyer_: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    approveBuyers(
      newBuyers_: string[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    approvedBuyers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    buyPOly(amountPaid_: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    dai(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      pOly_: string,
      dai_: string,
      pOlyPrice_: BigNumberish,
      saleProceedsAddress_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    initialized(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pOly(overrides?: CallOverrides): Promise<BigNumber>;

    pOlyPrice(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    setPOlyPrice(
      newPOlyPrice_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    withdrawTokens(
      tokenToWithdraw_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approveBuyer(
      newBuyer_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    approveBuyers(
      newBuyers_: string[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    approvedBuyers(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buyPOly(
      amountPaid_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    dai(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      pOly_: string,
      dai_: string,
      pOlyPrice_: BigNumberish,
      saleProceedsAddress_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pOly(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pOlyPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    setPOlyPrice(
      newPOlyPrice_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    withdrawTokens(
      tokenToWithdraw_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
