import { bufferString } from "assets/metaBuffer";
import Input from "components/Input";
import { Select } from "components/Select";
import { useReadConfig } from "hooks/useReadConfig";
import { useEffect, useMemo, useState } from "react";
import { Icon } from '@iconify/react';
import Button from "components/Button";

export default function Home() {
	const [selectValue, setSelectValue] = useState('GetAll');
	const [search, setSearch] = useState('');
	const [programId, setProgramId] = useState('');
	const metaBuffer = useMemo(() => Buffer.from(bufferString, 'base64'), []);
	const { stateAll } = useReadConfig(metaBuffer, selectValue, search);
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

	const getElementValue = useMemo(
		() =>
			stateAll.state?.Records.length ? (
				stateAll.state?.Records.map((element) => (
					<li key={element.id}
						className='w-full bg-neutral-800 rounded-lg flex flex-col justify-center'>
						<span>{element.meta.name}</span>
						<span>{element.id}</span>
						<span>{element.meta.description}</span>
						<span>{element.createdBy}</span>
						<span>{element.meta.link}</span>
						<Button label="Open" type="button" onClick={() => readDataFrom(element.meta.link)} />
					</li>
				))
			) : (
				<h4>Results wasnt found</h4>
			),
		[stateAll.state?.Records],
	);

	return (
		<div className="flex flex-col justify-center bg-gradient-to-b from-dark1 to-dark2 min-h-full h-full">
      <div className="flex flex-col items-center">
        <div className="mt-20 mb-5">
          <img src="static/logo.svg" alt="The Chain Hub" width={400}/>
        </div>
        <div className="text-xl">
          Where blocks connect
        </div>
        <Input value={search} onChange={setSearch} />
      </div>
      {stateAll.isStateRead ? (
        <div>
          {getElementValue}
        </div>
      ) : (
        <span>Loading ...</span>
      )}
			<div className="bg-neutral-700">
				<Select handleSelectedValue={setSelectValue} />
				<Input value={search} onChange={setSearch} />
			</div>
			<div className="bg-neutral-700 w-full flex flex-col justify-center items-center">
				<div className="flex">
					<Input value={search} onChange={setSearch} />
					<Icon icon="mdi-light:search" />
				</div>

				<Select handleSelectedValue={setSelectValue} />
			</div>
			{stateAll.isStateRead ? (
				<div>
					{getElementValue}
				</div>
			) : (
				<span>Loading ...</span>
			)}
		</div>
	)
}