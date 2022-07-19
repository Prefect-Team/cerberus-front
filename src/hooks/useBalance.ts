import { useQueries, useQuery, UseQueryResult } from "react-query";
import { NetworkId } from "src/constants";
import {
  AddressMap,
  FUSE_POOL_6_ADDRESSES,
  FUSE_POOL_18_ADDRESSES,
  FUSE_POOL_36_ADDRESSES,
  GOHM_TOKEMAK_ADDRESSES,
} from "src/constants/addresses";
import { DecimalBigNumber } from "src/helpers/DecimalBigNumber/DecimalBigNumber";
import { queryAssertion } from "src/helpers/react-query/queryAssertion";
import { nonNullable } from "src/helpers/types/nonNullable";

import { useWeb3Context } from ".";
import { useMultipleTokenContracts, useStaticFuseContract } from "./useContract";

export const balanceQueryKey = (address?: string, tokenAddressMap?: AddressMap, networkId?: NetworkId) =>
  ["useBalance", address, tokenAddressMap, networkId].filter(nonNullable);

/**
 * Returns a balance.
 * @param addressMap Address map of the token you want the balance of.
 */
export const useBalance = <TAddressMap extends AddressMap = AddressMap>(tokenAddressMap: TAddressMap) => {
  const { address } = useWeb3Context();
  const contracts = useMultipleTokenContracts(tokenAddressMap);

  const networkIds = Object.keys(tokenAddressMap).map(Number);

  const results = useQueries(
    networkIds.map(networkId => ({
      enabled: !!address,
      queryFn: async () => {
        const contract = contracts[networkId as NetworkId];

        const [balance, decimals] = await Promise.all([contract.balanceOf(address), contract.decimals()]);

        return new DecimalBigNumber(balance, decimals);
      },
      queryKey: balanceQueryKey(address, tokenAddressMap, networkId),
    })),
  );

  return networkIds.reduce(
    (prev, networkId, index) => Object.assign(prev, { [networkId]: results[index] }),
    {} as Record<keyof typeof tokenAddressMap, UseQueryResult<DecimalBigNumber, Error>>,
  );
};

/**
 * Returns gOHM balance in Fuse
 */
export const fuseBalanceQueryKey = (address: string) => ["useFuseBalance", address].filter(nonNullable);
export const useFuseBalance = () => {
  const { address } = useWeb3Context();
  const pool6Contract = useStaticFuseContract(FUSE_POOL_6_ADDRESSES[NetworkId.MAINNET], NetworkId.MAINNET);
  const pool18Contract = useStaticFuseContract(FUSE_POOL_18_ADDRESSES[NetworkId.MAINNET], NetworkId.MAINNET);
  const pool36Contract = useStaticFuseContract(FUSE_POOL_36_ADDRESSES[NetworkId.MAINNET], NetworkId.MAINNET);

  const query = useQuery<DecimalBigNumber, Error>(
    fuseBalanceQueryKey(address),
    async () => {
      queryAssertion(address, fuseBalanceQueryKey(address));

      const results = await Promise.all(
        [pool6Contract, pool18Contract, pool36Contract].map(async contract => {
          const balance = await contract.callStatic.balanceOfUnderlying(address);

          return new DecimalBigNumber(balance, 18);
        }),
      );

      return results.reduce((prev, bal) => prev.add(bal), new DecimalBigNumber("0", 9));
    },
    { enabled: !!address },
  );

  return { [NetworkId.MAINNET]: query } as Record<NetworkId.MAINNET, typeof query>;
};

export const useGohmTokemakBalance = () => useBalance(GOHM_TOKEMAK_ADDRESSES);
