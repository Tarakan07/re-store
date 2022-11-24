const initialState = {
	books: [],
};
const reducer = (state, actions) => {
	switch (action.type) {
		case "BOOKS_LOADED":
			return actions.payload;
	}
};

export default reducer;
