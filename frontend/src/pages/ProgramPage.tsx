import { bufferString } from "assets/metaBuffer";
import { useReadConfig } from "hooks/useReadConfig";
import { useEffect, useMemo, useState } from "react";
import Button from "components/Button";
import { useParams } from "react-router-dom";

export default function ProgramPage() {
	const { id } = useParams();
	const [selectValue, setSelectValue] = useState('GetById');
	const [search, setSearch] = useState('');
	const metaBuffer = useMemo(() => Buffer.from(bufferString, 'base64'), []);
	const { stateAll } = useReadConfig(metaBuffer, selectValue, id);
	// console.log(stateAll);

	useEffect(() => {
		if (stateAll.error) {
			setSelectValue('GetAll');
			setSearch('');
		}
	}, [stateAll.error]);

	const readDataFrom = (urlLink: string | undefined) => {
		if (!urlLink) return;
		window.open(urlLink);
	};

	const getElementValue = () => {
		if (stateAll.state?.Record == null) {
			return <span>Empty</span>
		}
		const contract = stateAll.state.Record;
		return (
			<div className="w-full h-full flex flex-col justify-center items-center space-y-5">
				<div>
					<span>Name:</span>
					<span>{contract.id}</span>
				</div>
				<div>
					<span>Description:</span>
					<span>{contract.meta.description}</span>
				</div>
				<div>
					<span>Id:</span>
					<span>{contract.id}</span>
				</div>
				<div>
					<span>Creator:</span>
					<span>{contract.createdBy}</span>
				</div>
				<div>
					<span>Category</span>
					<span>{contract.id}</span>
				</div>
				<div>
					<span>Tags:</span>
					<span>{contract.id}</span>
				</div>
				<div className="flex justify-center">
					<Button label="Open" width="40" color="purple" onClick={() => readDataFrom(contract.meta.link)} />
				</div>
			</div>
		)
	}

	return (
		<div className="flex flex-col justify-center bg-gradient-to-b from-dark1 to-dark2 min-h-full h-full">
			<div className="w-full flex flex-col justify-center items-center mt-10">
				<span>Program {id}</span>
			</div>
			{stateAll.isStateRead ? (
				<div className="w-full flex overflow-auto">
					{getElementValue()}
				</div>
			) : (
				<span>Loading ...</span>
			)}
		</div>
	)
}