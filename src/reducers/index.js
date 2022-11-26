const initialState = {
	books: [
		{
			id: 1,
			title: "Book number 12",
			author: "Chel kakoi-to",
		},
		{
			id: 2,
			title: "Book kamasutra",
			author: "Chel kakoi-to izvrashenec",
		},
	],
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "BOOKS_LOADED":
			return {
				books: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
