import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

import WithBookstoreService from "../hoc";
import { HomePage, CartPage } from "../pages";
const App = () => {
	return (
		<Switch>
			<Route path="/" exact component={HomePage} />
		</Switch>
	);
};

export default WithBookstoreService()(App);
