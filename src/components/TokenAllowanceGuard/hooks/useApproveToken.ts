import { MaxUint256 } from "@ethersproject/constants";
import { ContractReceipt } from "@ethersproject/contracts";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { AddressMap } from "src/constants/addresses";
import { useWeb3Context } from "src/hooks";
import { useDynamicTokenContract } from "src/hooks/useContract";
import { contractAllowanceQueryKey } from "src/hooks/useContractAllowance";
import { error as createErrorToast, info as createInfoToast } from "src/slices/MessagesSlice";
import { t } from "@lingui/macro";
export const useApproveToken = (tokenMap: AddressMap, contractMap: AddressMap) => {
  const dispatch = useDispatch();
  const client = useQueryClient();
  const { networkId, address } = useWeb3Context();
  const token = useDynamicTokenContract(tokenMap, true);

  return useMutation<ContractReceipt, Error>(
    async () => {
      const contractAddress = contractMap[networkId as keyof typeof contractMap];

      if (!token) throw new Error(t`Token doesn't exist on current network. Please switch networks.`);
      if (!contractAddress) throw new Error(t`Contract doesn't exist on current network. Please switch networks.`);

      const transaction = await token.approve(contractAddress, MaxUint256);

      return transaction.wait();
    },
    {
      onError: error => void dispatch(createErrorToast(error.message)),
      onSuccess: async () => {
        dispatch(createInfoToast(t`Successfully approved`));
        await client.refetchQueries(contractAllowanceQueryKey(address, networkId, tokenMap, contractMap));
      },
    },
  );
};
