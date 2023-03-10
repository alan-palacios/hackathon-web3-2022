import { Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import HowTo from './HowTo';
import ProgramPage from './ProgramPage';
import RegisterProgram from './RegisterProgram';

const routes = [
	{ path: '/', Page: Home },
	{ path: '/register', Page: RegisterProgram },
	{ path: '/howto', Page: HowTo },
	{ path: '/program/:id', Page: ProgramPage },
	{ path: '/about', Page: About }

];

function Routing() {
	const getRoutes = () => routes.map(({ path, Page }) => <Route key={path} path={path} element={<Page />} />);

	return <Routes>{getRoutes()}</Routes>;
}

export { Routing };
