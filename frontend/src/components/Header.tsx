import Account from "./Account";
import Button from "./Button";

type Props = {
	isAccountVisible: boolean;
};

export default function Header({ isAccountVisible }: Props) {
	return (
		<header className="flex justify-between pr-5 items-center">
			<div className="ml-5 mt-2">
				<a href="https://github.com/alan-palacios/hackathon-web3-2022/tree/main/domain-template"
					target="_blank" rel="noreferrer">
					<Button label="VIEW CONTRACT TEMPLATE" />
				</a>
			</div>
			{isAccountVisible && <Account />}
		</header>
	);
}
