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
	cartItems: [
		{
			id: 2,
			name: "boooooks",
			count: 4,
			total: 120,
		},
		{
			id: 6,
			name: "boooooks2222222222222222",
			count: 3,
			total: 120,
		},
	],
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

		default:
			return state;
	}
};

export default reducer;
