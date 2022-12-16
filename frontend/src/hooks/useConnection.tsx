import { GearApi } from "@gear-js/api";
import { ID_CONTRACT_ADDRESS } from "consts";
const fs = require('fs');
async function connect() {
	const gearApi = await GearApi.create({
		providerAddress: 'wss://rpc-node.gear-tech.io:443',
	});

	const [chain, nodeName, nodeVersion] = await Promise.all([
		gearApi.chain(),
		gearApi.nodeName(),
		gearApi.nodeVersion(),
	]);

	console.log(
		`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`,
	);

	const unsub = await gearApi.gearEvents.subscribeToNewBlocks((header) => {
		console.log(
			`New block with number: ${header.number.toNumber()} and hash: ${header.hash.toHex()}`,
		);
	});
	// contract\target\wasm32-unknown-unknown\release\dns.meta.wasm
	const metaWasm = fs.readFileSync('./dns.meta.wasm');
	const state = await gearApi.programState.read(ID_CONTRACT_ADDRESS, metaWasm, "GetAll");
	// If program expects inputValue in meta_state function it's possible to specify it
	console.log(state);

}
connect().catch(console.error);
export { connect }




