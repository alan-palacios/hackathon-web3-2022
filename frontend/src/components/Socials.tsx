import { ReactComponent as Github } from 'assets/images/socials/github.svg';
import { Icon } from '@iconify/react';

const socials = [
	{ href: '', icon: Github },
];

export default function Socials() {
	// const getItems = () =>
	// 	socials.map(({ href, icon: Icon }) => (
	// 		<li key={href}>
	// 			<a href={href} target="_blank" rel="noreferrer">
	// 				<Icon />
	// 			</a>
	// 		</li>
	// 	));

	return (
		<div className='pb-5'>
			<li>
				<a href="https://github.com/alan-palacios/hackathon-web3-2022">
					<Icon icon="mdi:github" width={40} />
				</a>
			</li>
		</div>
	)
}
