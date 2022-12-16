import { Button } from "@gear-js/ui";
import { bufferString } from "assets/metaBuffer";
import Input from "components/Input";
import { Select } from "components/Select";
import { connect } from "hooks/useConnection"
import { useReadConfig } from "hooks/useReadConfig";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
	const [selectValue, setSelectValue] = useState('GetAll');
	const [search, setSearch] = useState('');
	// console.log(connect);
  const metaBuffer = useMemo(() => Buffer.from(bufferString, 'base64'), []);
	const { stateAll } = useReadConfig(metaBuffer, selectValue, search);
	console.log(stateAll);
	
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
						className='w-80 h-80 bg-neutral-700 flex flex-col justify-center'>
            <span>{element.id}</span>
            <span>{element.meta.name}</span>
            <span>{element.meta.link}</span>
            <span>{element.meta.description}</span>
            <span>{element.createdBy}</span>
            <Button type="button" text="open" size="small" onClick={() => readDataFrom(element.meta.link)} />
          </li>
        ))
      ) : (
        <h4>Results wasnt found</h4>
      ),
    [stateAll.state?.Records],
  );

	return (
		<div className="flex flex-col justify-center bg-black min-h-full h-full">
			<p className="italic">Indicare</p>
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
		</div>
	)
}