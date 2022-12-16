import Account from "./Account";

type Props = {
	isAccountVisible: boolean;
};

export default function Header({ isAccountVisible }: Props) {
	return (
		<header className="text-right">
			{isAccountVisible && <Account />}
		</header>
	);
}
