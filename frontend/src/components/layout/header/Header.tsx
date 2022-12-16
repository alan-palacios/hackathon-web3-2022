import { Logo } from './logo';
import { Account } from './account';

type Props = {
	isAccountVisible: boolean;
};

function Header({ isAccountVisible }: Props) {
	return (
		<header className="">
			<Logo />
			{isAccountVisible && <Account />}
		</header>
	);
}

export { Header };
