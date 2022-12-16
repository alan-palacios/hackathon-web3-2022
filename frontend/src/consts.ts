const ADDRESS = {
	NODE: process.env.REACT_APP_NODE_ADDRESS as string,
	DAPPS_API: process.env.REACT_APP_DAPPS_API_ADDRESS as string,
};

const LOCAL_STORAGE = {
	ACCOUNT: 'account',
	WALLET: 'wallet',
};

const SUBHEADING = {
	LOGIN: 'In order to start, please login.',
};

const ID_CONTRACT_ADDRESS = "0xaeda9e4e9196231ef31a62779629f5c3d61824bb3ffb8b57489e9133ae47d7c8"

export { ADDRESS, LOCAL_STORAGE, SUBHEADING, ID_CONTRACT_ADDRESS };
