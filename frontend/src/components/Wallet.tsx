import { Account } from '@gear-js/react-hooks';
import AccountButton from './AccountButton';

type Props = {
  balance: Account['balance'];
  address: string;
  name: string | undefined;
  onClick: () => void;
};

export default function Wallet({ balance, address, name, onClick }: Props) {
  return (
    <div className=''>
      <p className=''>
        {balance.value} <span className=''>{balance.unit}</span>
      </p>
      <AccountButton address={address} name={name} onClick={onClick} />
    </div>
  );
}
