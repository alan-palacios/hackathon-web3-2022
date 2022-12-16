import { connect } from "hooks/useConnection"

export default function Home() {
	console.log(connect);

	return (
		<div className="flex justify-center bg-black">
			<p className="italic">Indicare</p>
		</div>
	)
}