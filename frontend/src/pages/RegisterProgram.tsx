import Input from 'components/Input'
import { useState } from 'react'

export default function RegisterProgram() {
	const [programId, setProgramId] = useState('');
	return (
		<div className="bg-neutral-700">
			<span>Register Program</span>
			<Input value={programId} onChange={setProgramId} />
		</div>
	)
}
