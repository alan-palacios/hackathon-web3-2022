import { useApi, useAccount } from '@gear-js/react-hooks';
import { Routing } from 'pages';
import 'App.css';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { withProviders } from 'hooks/GearProvider';

function Component() {
	const { isApiReady } = useApi();
	const { isAccountReady, account } = useAccount();

	const isAppReady = isApiReady;

	return (
		<>
			<Header isAccountVisible={isAccountReady} />
				<main>
					{isAppReady ? <Routing /> : (<span>Loading...</span>) }
				</main>
			<Footer />
		</>
	);
}

export const App = withProviders(Component);