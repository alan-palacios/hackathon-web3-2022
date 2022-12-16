import Copyright from './Copyright';
import Socials from './Socials';

export default function Footer() {
	return (
		<footer className='flex bg-dark2 justify-between items-center'>
			<Socials />
			<Copyright />
		</footer>
	);
}
