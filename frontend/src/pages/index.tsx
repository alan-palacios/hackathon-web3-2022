import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import HowTo from './HowTo';
import RegisterProgram from './RegisterProgram';

const routes = [
	{ path: '/', Page: Home },
	{ path: '/register', Page: RegisterProgram },
	{ path: '/howto', Page: HowTo }
];

function Routing() {
	const getRoutes = () => routes.map(({ path, Page }) => <Route key={path} path={path} element={<Page />} />);

	return <Routes>{getRoutes()}</Routes>;
}

export { Routing };
