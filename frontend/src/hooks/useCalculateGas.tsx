import { GearKeyring } from '@gear-js/api';
import { useAccount, useApi } from '@gear-js/react-hooks';
import { dnsMeta } from 'out/metaTypes';

export default function useCalculateGas() {
	const { api } = useApi();
  const { account } = useAccount();

	const calculateGas = (message: any, address: any) => {
    if (account) {
      const { payload, value, destination } = message;

      return api.program.calculateGas.handle(
        address,
        destination,
        payload,
        value,
        false,
        dnsMeta,
      );
    }
  };
	return {
		calculateGas
	}
}
