const initialState = {
	books: [],
};
const reducer = (state, action) => {
	switch (action.type) {
		case "BOOKS_LOADED":
			return action.payload;
	}
};

export default reducer;
