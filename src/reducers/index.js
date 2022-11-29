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
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "BOOKS_REQUESTED":
			return {
				books: [],
				loading: true,
			};
		case "BOOKS_LOADED":
			return {
				books: action.payload,
				loading: false,
			};

		default:
			return state;
	}
};

export default reducer;
