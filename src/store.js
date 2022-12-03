import { createStore, compose, applyMiddleware } from "redux";

import reducer from "./reducers";

const logMiddleware = (store) => (dispatch) => (action) => {
	console.log(action, store);
	return dispatch(action);
};
const stringMeddleware = () => (dispatch) => (action) => {
	if (typeof action === "string") {
		return dispatch({
			type: action,
		});
	}
	return dispatch(action);
};
// const stringEnhancer =
// 	(createStore) =>
// 	(...args) => {
// 		console.log(...args);
// 		const store = createStore(...args);
// 		const originalDispatch = store.dispatch;
// 		store.dispatch = (action) => {
// 			if (typeof action === "string") {
// 				return originalDispatch({
// 					type: action,
// 				});
// 			}
// 			return originalDispatch(action);
// 		};
// 		return store;
// 	};
// const logEnhancer =
// 	(createStore) =>
// 	(...args) => {
// 		console.log(...args);
// 		const store = createStore(...args);
// 		const originalDispatch = store.dispatch;
// 		store.dispatch = (action) => {
// 			console.log(action);
// 			return originalDispatch(action);
// 		};
// 		return store;
// 	};
const store = createStore(
	reducer,
	applyMiddleware(stringMeddleware, logMiddleware)
);

store.dispatch({ type: "hello world" });
export default store;
