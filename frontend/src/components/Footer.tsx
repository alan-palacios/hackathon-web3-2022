import Copyright from './Copyright';
import Socials from './Socials';

export default function Footer() {
	return (
		<footer className='flex bg-black justify-between'>
			<Socials />
			<Copyright />
		</footer>
	);
}
