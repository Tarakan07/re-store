import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import store from "./store";
import ErrorBoundary from "./components/error-boundary";
import { BookstoreServiceProvider } from "./components/bookstore-service-context";
import BookstoreService from "./services/bookstore-service";
import CartPage from "./components/pages/";
const bookstoreService = new BookstoreService();
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
	<Provider store={store}>
		<ErrorBoundary>
			<BookstoreServiceProvider value={bookstoreService}>
				<Router>
					<App />
				</Router>
			</BookstoreServiceProvider>
		</ErrorBoundary>
	</Provider>
);
