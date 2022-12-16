import { useApi, useAccount } from '@gear-js/react-hooks';
import { Routing } from 'pages';
import 'App.css';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { withProviders } from 'hooks/GearProvider';

export default function Component() {
	const { isApiReady } = useApi();
	const { isAccountReady } = useAccount();

	const isAppReady = isApiReady && isAccountReady;

	return (
		<>
			<Header isAccountVisible={isAccountReady} />
			<main>{isAppReady ? <Routing /> : (<span>Loading...</span>) }</main>
			<Footer />
		</>
	);
}

export const App = withProviders(Component);