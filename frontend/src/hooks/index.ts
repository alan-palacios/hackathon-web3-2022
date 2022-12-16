import { ApiContext } from 'context/ApiContext';
import { useContext } from 'react';
// import { AccountContext } from 'context/account';
// import { UserStatusContext } from 'context/status';

const useApi = () => useContext(ApiContext);
// const useAccount = () => useContext(AccountContext);
// const useStatus = () => useContext(UserStatusContext);

export { useApi};