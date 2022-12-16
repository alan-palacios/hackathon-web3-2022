import { GearKeyring } from "@gear-js/api";
import { useAccount, useApi } from "@gear-js/react-hooks";
import { CONTRACT_ID } from "consts";
import { dnsMeta } from "out/metaTypes";
import { toast } from "react-toastify";
import useCalculateGas from "./useCalculateGas";

export function useDNSAction() {
	const {calculateGas} = useCalculateGas();
	const { api } = useApi();
  const { account } = useAccount();
	console.log(account);
	const addressAux = '0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d';

	const sendMessage = async (message: any)=>{
		if (account) {
			console.log(account.decodedAddress);
			const gas = await calculateGas(message, account.decodedAddress);
			if (gas==null || gas.min_limit==null) {
				toast.error('Cannot calculate gas');
				return;
			}
			message.gasLimit = gas.min_limit.toString();

			const keyring = await GearKeyring.fromSuri('//Alice');
			// In that case payload will be encoded using meta.handle_input type
			const extrinsic = api.message.send(message, dnsMeta);
			// So if you want to use another type you can specify it
			// extrinsic = api.message.send(message, dnsMeta, dnsMeta.async_handle_input);

			const event = await extrinsic.signAndSend(keyring);
			return event.toHuman();
		}
	}

	const registerProgram = async (programId: string)=>{
		console.log(`register program ${programId}`);
		try {
			const message = {
				destination: CONTRACT_ID,
				payload: {
					register: programId,
				},
				gasLimit: '300000000',
				value: '0',
			};
			return await sendMessage(message);	
		} catch (error: any) {
			console.error(`${error.name}: ${error.message}`);
			throw new Error(error);
		}
	}

	const updateProgram = async (programId: string)=>{
		console.log(`update program ${programId}`);
		try {
			const message = {
				destination: CONTRACT_ID,
				payload: {
					update: programId,
				},
				gasLimit: '300000000',
				value: '0',
			};
			return await sendMessage(message);	
		} catch (error: any) {
			console.error(`${error.name}: ${error.message}`);
			throw new Error(error);
		}
	}


	const removeProgram = async (programId: string)=>{
		console.log(`remove program ${programId}`);
		try {
			const message = {
				destination: CONTRACT_ID,
				payload: {
					remove: programId,
				},
				gasLimit: '300000000',
				value: '0',
			};
			return await sendMessage(message);	
		} catch (error: any) {
			console.error(`${error.name}: ${error.message}`);
			throw new Error(error);
		}
	}

	return {updateProgram, registerProgram, removeProgram};
}
