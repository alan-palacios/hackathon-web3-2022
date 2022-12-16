import Account from "./Account";

type Props = {
	isAccountVisible: boolean;
};

export default function Header({ isAccountVisible }: Props) {
	return (
		<header className="flex justify-end pr-5">
			{isAccountVisible && <Account />}
		</header>
	);
}
