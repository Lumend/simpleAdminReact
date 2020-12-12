
import Login from '../pages/account/Login';

import Building from '../pages/Building';
import Auth from '../pages/Auth';

import company from './company';

const routes = [
	{
		path: "/",
		exact: true,
		component: Login
	},
	{
		path: "/auth",
		component: Auth
	},
	{
		path: "/login",
		exact: true,
		component: Building
	},
	...company
];


export default routes;