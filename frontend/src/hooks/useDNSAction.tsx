import { useAccount, useAlert, useApi } from "@gear-js/react-hooks";
import { u64 } from "@polkadot/types";

export function useDNSAction() {
	const { api } = useApi();
  const { account } = useAccount();
  const alert = useAlert();

	const updateProgram = (message: any)=>{
		/*
		if (account) {
			const { address } = account;
			const { source } = account.meta;

			calculateGas(message)!
				.then((limit: u64) => (message.gasLimit = limit.toString()))
				.then(() => api.message.submit(message, erc20Meta))
				.then(() => web3FromSource(source))
				.then(({ signer }) => ({ signer }))
				.then((options) =>
					api.message.signAndSend(address, options, handleStatus),
				)
				.catch(handleError);
		}
		*/
	}
	return {updateProgram};
}
