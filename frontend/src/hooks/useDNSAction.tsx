import { GearKeyring } from "@gear-js/api";
import { useAccount, useApi, useSendMessage } from "@gear-js/react-hooks";
import { CONTRACT_ID } from "consts";
import { dnsMeta } from "out/metaTypes";
import { toast } from "react-toastify";
import useCalculateGas from "./useCalculateGas";

export function useDNSAction() {
	const {calculateGas} = useCalculateGas();
	const { api } = useApi();
  const { account } = useAccount();
	const addressAux = '0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d';
	const sendMessage = useSendMessage(CONTRACT_ID, dnsMeta);
	// const seed = '0x496f9222372eca011351630ad276c7d44768a593cecea73685299e06acef8c0a';
	// const keyring = await GearKeyring.fromSeed(seed, 'name');

	const sendMessageHandler = async (payload: any, onSuccess: ()=>void | undefined)=>{
		if (account) {
			sendMessage(payload, {onSuccess})
		}
	}

	const registerProgram = async (programId: string)=>{
		console.log(`register program ${programId}`);
		try {
			const payload = {
				register: programId,
			}
			return await sendMessageHandler(
				payload,
				()=>{
					toast.success('Programa Registrado');
				}
			);	
		} catch (error: any) {
			console.error(`${error.name}: ${error.message}`);
			throw new Error(error);
		}
	}

	const updateProgram = async (programId: string)=>{
		console.log(`update program ${programId}`);
		try {
			const payload = {
				update: programId,
			}
			return await sendMessageHandler(
				payload,
				()=>{
					toast.success('Programa Actualizado');
				}
			);	
		} catch (error: any) {
			console.error(`${error.name}: ${error.message}`);
			throw new Error(error);
		}
	}


	const removeProgram = async (programId: string)=>{
		console.log(`remove program ${programId}`);
		try {
			const payload = {
				remove: programId,
			}
			return await sendMessageHandler(
				payload,
				()=>{
					toast.success('Programa eliminado');
				}
			);	
		} catch (error: any) {
			console.error(`${error.name}: ${error.message}`);
			throw new Error(error);
		}
	}

	return {updateProgram, registerProgram, removeProgram};
}
