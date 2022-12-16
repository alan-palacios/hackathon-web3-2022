import { useAccount, useApi } from '@gear-js/react-hooks';
import { web3FromSource } from '@polkadot/extension-dapp';
import { u64 } from '@polkadot/types';
import { EventRecord } from '@polkadot/types/interfaces';
import { ISubmittableResult } from '@polkadot/types/types';
import Input from 'components/Input'
import { CONTRACT_ID } from 'consts';
import useCalculateGas from 'hooks/useCalculateGas';
import { useState } from 'react'
import { dnsMeta } from 'out/metaTypes';
import { toast } from 'react-toastify';
import { GearKeyring } from '@gear-js/api';

export default function RegisterProgram() {
	const { api } = useApi();
  const { account } = useAccount();
	const {calculateGas} = useCalculateGas();
	const [registerProgramId, setRegisterProgramId] = useState('');
	const [updateProgramId, setUpdateProgramId] = useState('0x8ea3458380cb5f703e51b446254a940b1326886f769ca3714027adb820e91743');
	const [removeProgramId, setRemoveProgramId] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleError = (error: Error) => {
    console.log(error);
    setIsLoading(false);
  };
	
	const handleEventsStatus = (events: EventRecord[]) => {
    events.forEach(({ event: { method } }) => {
      if (method === 'DispatchMessageEnqueued') {
        toast.success('Send message: Finalized');
      } else if (method === 'ExtrinsicFailed') {
        toast.error('Extrinsic failed');
      }
    });
  };
	
	const handleStatus = (result: ISubmittableResult) => {
    const { status, events } = result;
    const { isInBlock, isInvalid, isFinalized } = status;

    if (isInvalid) {
      setIsLoading(false);
      toast.error('Invalid Transaction');
    } else if (isInBlock) {
      toast.success('Send message: In block');
    } else if (isFinalized) {
      setIsLoading(false);
      handleEventsStatus(events);
    }
  };

	
	const registerHandler = ()=>{
		if (registerProgramId==='') {
			alert('programID is empty');
			return;
		}
		console.log(`adding program ${registerProgramId}`);
		
		
	}

	const updateHandler = async ()=>{
		if (updateProgramId==='') {
			alert('programID is empty');
			return;
		}
		console.log(`update program ${updateProgramId}`);
		try {
			const message = {
				destination: CONTRACT_ID,
				payload: {
					update: updateProgramId,
				},
				gasLimit: '300000000',
				value: '0',
			};
			
			if (account) {
				setIsLoading(true);

				const gas = await calculateGas(message, '0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d');
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

				await extrinsic.signAndSend(keyring, (event) => {
					console.log(event.toHuman());
					console.log('message sent!');
				}).then(()=>{
					console.log('message received');
					
				});
			}
		} catch (error: any) {
			console.error(`${error.name}: ${error.message}`);
		}
	}

	return (
		<div className="bg-neutral-700 flex flex-col justify-center w-full items-center">
			<span>Register Program</span>
			<Input value={registerProgramId} onChange={setRegisterProgramId} />
			<button onClick={registerHandler} type='button'
			className='bg-neutral-800 px-5 py-1'>
				Ok
			</button>

			<span>Update Program</span>
			<Input value={updateProgramId} onChange={setUpdateProgramId} />
			<button onClick={updateHandler} type='button'
				className='bg-neutral-800 px-5 py-1'>
				Ok
			</button>

			<span>Remove Program</span>
			<Input value={removeProgramId} onChange={setRemoveProgramId} />
		</div>
	)
}
