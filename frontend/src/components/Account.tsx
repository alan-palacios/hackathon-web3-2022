import { useState } from 'react';
import { useAccount } from '@gear-js/react-hooks';
import { ReactComponent as userSVG } from 'assets/images/icons/login.svg';
import { Button } from '@gear-js/ui';
import Wallet from './Wallet';
import AccountsModal from './AccountsModal';

export default function Account() {
  const { account, accounts } = useAccount();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {account ? (
        <Wallet balance={account.balance} address={account.address} name={account.meta.name} onClick={openModal} />
      ) : (
        <Button icon={userSVG} text="Sign in" onClick={openModal} />
      )}
      {isModalOpen && <AccountsModal accounts={accounts} close={closeModal} />}
    </>
  );
}
