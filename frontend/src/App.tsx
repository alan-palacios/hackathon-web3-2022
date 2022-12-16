import { useApi, useAccount } from '@gear-js/react-hooks';
import { Routing } from 'pages';
import { withProviders } from 'hocs';
import 'App.css';
import { Header } from 'components/layout/header/Header';
import Footer from 'components/layout/footer/Footer';
export default function Component() {
	const { isApiReady } = useApi();
	const { isAccountReady } = useAccount();

	const isAppReady = isApiReady && isAccountReady;

	return (
		<>
			<Header isAccountVisible={isAccountReady} />
			<main>{isAppReady ? <Routing /> : <span>Loading...</span>
			}</main>
			<Footer />
		</>
	);
}

export const App = withProviders(Component);