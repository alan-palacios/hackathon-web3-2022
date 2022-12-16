import Account from "./Account";
import Logo from "./Logo";

type Props = {
	isAccountVisible: boolean;
};

export default function Header({ isAccountVisible }: Props) {
	return (
		<header className="">
			<Logo />
			{isAccountVisible && <Account />}
		</header>
	);
}
