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
	cartItems: [],
	orderTotal: 220,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_BOOKS_REQUEST":
			return {
				...state,
				books: [],
				loading: true,
				error: null,
			};
		case "FETCH_BOOKS_SUCCESS":
			return {
				...state,
				books: action.payload,
				loading: false,
				error: null,
			};
		case "FETCH_BOOKS_FAILURE":
			return {
				...state,
				books: [],
				loading: false,
				error: action.payload,
			};
		case "BOOK_ADDED_TO_CART":
			const bookId = action.payload;
			const book = state.books.find((book) => bookId == book.id);
			const newItem = {
				id: bookId,
				name: book.title,
				count: 1,
				total: book.price,
			};
			return {
				...state,
				cartItems: [...state.cartItems, newItem],
			};

		default:
			return state;
	}
};

export default reducer;
