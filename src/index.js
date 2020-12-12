import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import './index.less';
import AuthRoute from "./routes/AuthRoute";

import allPagesRoute from './routes/index';
import P404 from './pages/404'

ReactDOM.render(
	<Router>
		<Switch>
			{
				allPagesRoute.map(
					(route) => {
						return <AuthRoute key={route.path} {...route}/>
					}
				)
			}
			<Route component={P404} />
		</Switch>
	</Router>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


if(module.hot){
	module.hot.accept()
  }