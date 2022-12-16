import { useAccount, useApi } from '@gear-js/react-hooks';
import { EventRecord } from '@polkadot/types/interfaces';
import { ISubmittableResult } from '@polkadot/types/types';
import Input from 'components/Input'
import { CONTRACT_ID } from 'consts';
import useCalculateGas from 'hooks/useCalculateGas';
import { useState } from 'react'
import { dnsMeta } from 'out/metaTypes';
import { toast } from 'react-toastify';
import { GearKeyring } from '@gear-js/api';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import { useDNSAction } from 'hooks/useDNSAction';

export default function RegisterProgram() {
	const { api } = useApi();
  const { account } = useAccount();
	const {calculateGas} = useCalculateGas();
	const {updateProgram, registerProgram, removeProgram} = useDNSAction();
	const [registerProgramId, setRegisterProgramId] = useState('');
	const [updateProgramId, setUpdateProgramId] = useState('0x8ea3458380cb5f703e51b446254a940b1326886f769ca3714027adb820e91743');
	const [removeProgramId, setRemoveProgramId] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const updateHandler = async ()=>{
		if (updateProgramId==='') {
			alert('programID is empty');
			return;
		}
		try {
			const event = await updateProgram(updateProgramId);
			console.log(event);
		} catch (error: any) {
			console.error(`${error.name}: ${error.message}`);
		}
	}

	const registerHandler = async ()=>{
		if (registerProgramId==='') {
			alert('programID is empty');
			return;
		}
		try {
			const event = await registerProgram(registerProgramId);
			console.log(event);
		} catch (error: any) {
			toast.error('An Error occured during transaction');
			// console.error(`${error.name}: ${error.message}`);
		}
	}

	const removeHandler = async ()=>{
		if (removeProgramId==='') {
			alert('programID is empty');
			return;
		}
		try {
			const event = await removeProgram(removeProgramId);
			console.log(event);
		} catch (error: any) {
			console.error(`${error.name}: ${error.message}`);
		}
	}

	return (
		<div className='w-full flex justify-center'>
			<div className="bg-dark3 flex flex-col justify-center w-1/2 items-center rounded-lg
			py-10">
				<Link to='/'>
					<Button label="REGRESAR" />
				</Link>
				<div className='w-full max-w-lg flex flex-col justify-center items-center space-y-10 mt-10 '>
					<div className='w-full flex flex-col justify-center items-start'>
						<span>Agregar Programa</span>
						<Input value={registerProgramId} onChange={setRegisterProgramId} />
						<Button onClick={registerHandler} label='Agregar' />
					</div>

					<div className='w-full flex flex-col justify-center items-start'>
						<span>Actualizar Metadata</span>
						<Input value={updateProgramId} onChange={setUpdateProgramId} />
						<Button onClick={updateHandler} label='Update' />
					</div>

					<div className='w-full flex flex-col justify-center items-start'>
						<span>Remove Program</span>
						<Input value={removeProgramId} onChange={setRemoveProgramId} />
						<Button onClick={removeHandler} label='Eliminar' />
					</div>
				</div>
			</div>
		</div>
		
	)
}
