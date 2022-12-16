import { bufferString } from "assets/metaBuffer";
import { connect } from "hooks/useConnection"
import { useReadConfig } from "hooks/useReadConfig";
import { useMemo } from "react";

export default function Home() {
	console.log(connect);
  const metaBuffer = useMemo(() => Buffer.from(bufferString, 'base64'), []);
	const { stateAll } = useReadConfig(metaBuffer, 'GetAll', '');
	console.log(stateAll);

	return (
		<div className="flex justify-center bg-black min-h-full h-full">
			<p className="italic">Indicare</p>
		</div>
	)
}