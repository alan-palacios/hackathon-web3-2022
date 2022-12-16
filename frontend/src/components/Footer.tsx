import Copyright from './Copyright';
import Socials from './Socials';

export default function Footer() {
	return (
		<footer className='flex flex-row justify-between mx-5 my-3'>
			<Socials />
			<Copyright />
		</footer>
	);
}
