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

export interface OlympusProMarketCreatorInterface extends utils.Interface {
  functions: {
    "authority()": FunctionFragment;
    "burn()": FunctionFragment;
    "close(uint256)": FunctionFragment;
    "create(address,uint256[4],uint32[2],uint256)": FunctionFragment;
    "depository()": FunctionFragment;
    "getMarkets()": FunctionFragment;
    "halt(uint256)": FunctionFragment;
    "ohm()": FunctionFragment;
    "returnReserve(address,uint256)": FunctionFragment;
    "setAuthority(address)": FunctionFragment;
    "setTreasury(address)": FunctionFragment;
    "treasury()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(functionFragment: "burn", values?: undefined): string;
  encodeFunctionData(functionFragment: "close", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "create",
    values: [
      string,
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish],
      BigNumberish,
    ],
  ): string;
  encodeFunctionData(functionFragment: "depository", values?: undefined): string;
  encodeFunctionData(functionFragment: "getMarkets", values?: undefined): string;
  encodeFunctionData(functionFragment: "halt", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "ohm", values?: undefined): string;
  encodeFunctionData(functionFragment: "returnReserve", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "setAuthority", values: [string]): string;
  encodeFunctionData(functionFragment: "setTreasury", values: [string]): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;

  decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "close", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depository", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getMarkets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "halt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ohm", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "returnReserve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setAuthority", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setTreasury", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;

  events: {
    "AuthorityUpdated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuthorityUpdated"): EventFragment;
}

export type AuthorityUpdatedEvent = TypedEvent<[string], { authority: string }>;

export type AuthorityUpdatedEventFilter = TypedEventFilter<AuthorityUpdatedEvent>;

export interface OlympusProMarketCreator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OlympusProMarketCreatorInterface;

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
    authority(overrides?: CallOverrides): Promise<[string]>;

    burn(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    close(_id: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    create(
      _token: string,
      _market: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      _intervals: [BigNumberish, BigNumberish],
      _conclusion: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    depository(overrides?: CallOverrides): Promise<[string]>;

    getMarkets(overrides?: CallOverrides): Promise<[BigNumber[], string[]]>;

    halt(_id: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    ohm(overrides?: CallOverrides): Promise<[string]>;

    returnReserve(
      _token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setAuthority(
      _newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setTreasury(
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    treasury(overrides?: CallOverrides): Promise<[string]>;
  };

  authority(overrides?: CallOverrides): Promise<string>;

  burn(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  close(_id: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  create(
    _token: string,
    _market: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    _intervals: [BigNumberish, BigNumberish],
    _conclusion: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  depository(overrides?: CallOverrides): Promise<string>;

  getMarkets(overrides?: CallOverrides): Promise<[BigNumber[], string[]]>;

  halt(_id: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  ohm(overrides?: CallOverrides): Promise<string>;

  returnReserve(
    _token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setAuthority(
    _newAuthority: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setTreasury(
    _treasury: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  treasury(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    authority(overrides?: CallOverrides): Promise<string>;

    burn(overrides?: CallOverrides): Promise<void>;

    close(_id: BigNumberish, overrides?: CallOverrides): Promise<void>;

    create(
      _token: string,
      _market: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      _intervals: [BigNumberish, BigNumberish],
      _conclusion: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    depository(overrides?: CallOverrides): Promise<string>;

    getMarkets(overrides?: CallOverrides): Promise<[BigNumber[], string[]]>;

    halt(_id: BigNumberish, overrides?: CallOverrides): Promise<void>;

    ohm(overrides?: CallOverrides): Promise<string>;

    returnReserve(_token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setAuthority(_newAuthority: string, overrides?: CallOverrides): Promise<void>;

    setTreasury(_treasury: string, overrides?: CallOverrides): Promise<void>;

    treasury(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AuthorityUpdated(address)"(authority?: string | null): AuthorityUpdatedEventFilter;
    AuthorityUpdated(authority?: string | null): AuthorityUpdatedEventFilter;
  };

  estimateGas: {
    authority(overrides?: CallOverrides): Promise<BigNumber>;

    burn(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    close(_id: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    create(
      _token: string,
      _market: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      _intervals: [BigNumberish, BigNumberish],
      _conclusion: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    depository(overrides?: CallOverrides): Promise<BigNumber>;

    getMarkets(overrides?: CallOverrides): Promise<BigNumber>;

    halt(_id: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    ohm(overrides?: CallOverrides): Promise<BigNumber>;

    returnReserve(
      _token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setAuthority(
      _newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setTreasury(_treasury: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burn(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    close(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    create(
      _token: string,
      _market: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      _intervals: [BigNumberish, BigNumberish],
      _conclusion: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    depository(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMarkets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    halt(_id: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    ohm(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    returnReserve(
      _token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setAuthority(
      _newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setTreasury(
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
