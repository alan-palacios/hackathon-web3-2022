import { Link } from "react-router-dom";
import Account from "./Account";
import Button from "./Button";

type Props = {
	isAccountVisible: boolean;
};

export default function Header({ isAccountVisible }: Props) {
	return (
		<header className="flex justify-between pr-5 items-center">
			<div className="flex pl-2">
				<div className="">
					<Link to="/">
						<img src="static/logo.svg" alt="The Chain Hub" width={100} />
					</Link>
				</div>
				<div className="ml-5 mt-2">
					<a href="https://github.com/alan-palacios/hackathon-web3-2022/tree/main/domain-template"
						target="_blank" rel="noreferrer">
						<Button label="VIEW CONTRACT TEMPLATE" />
					</a>
				</div>
			</div>
			<div className="flex space-x-5 items-center">
				<Link to='/howto' className="mt-2">
					<Button label="HOW TO" color="purple" />
				</Link>
				<Link to='/' className="mt-2">
					<Button label="ABOUT" color="purple" />
				</Link>
				{isAccountVisible && <Account />}
			</div>
		</header>
	);
}
