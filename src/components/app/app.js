import React from "react";
import WithBookstoreService from "../hoc";
const App = ({ bookstoreService }) => {
	console.log(bookstoreService.getBooks());
	return <div>Hello,Borik</div>;
};

export default WithBookstoreService()(App);
