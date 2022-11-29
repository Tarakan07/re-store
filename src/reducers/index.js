const initialState = {
	books: [
		{
			id: 0,
			title: "Инициализация",
			author: "Susan J. Fowler",
			price: 32,
			coverImage:
				"https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg",
		},
	],
	loading: true,
	error: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "BOOKS_REQUESTED":
			return {
				books: [],
				loading: true,
				error: null,
			};
		case "BOOKS_LOADED":
			return {
				books: action.payload,
				loading: false,
				error: null,
			};
		case "BOOKS_ERROR":
			return {
				books: [],
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
