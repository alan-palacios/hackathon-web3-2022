import { useApi, useAccount } from '@gear-js/react-hooks';
import { Routing } from 'pages';
import 'App.css';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { withProviders } from 'hooks/GearProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Component() {
	const { isApiReady } = useApi();
	const { isAccountReady, account } = useAccount();

	const isAppReady = isApiReady;

	return (
		<div className='bg-neutral-900 w-full min-w-full h-screen text-white'>
			<Header isAccountVisible={isAccountReady} />
			<main>
				{isAppReady ? <Routing /> : (<span>Looooading...</span>)}
			</main>
			<ToastContainer />
			<Footer />
		</div>
	);
}

export const App = withProviders(Component);