import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import reducer from "./reducers";

const logMeddleware = (store) => (dispatch) => (action) => {
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

const store = createStore(
	reducer,
	applyMiddleware(thunkMiddleware, stringMeddleware, logMeddleware)
);
// const myAction = (dispatch) => {
// 	setTimeout(() => {
// 		return dispatch({
// 			type: "delay",
// 		});
// 	}, 3000);
// };

// store.dispatch(myAction);

export default store;
