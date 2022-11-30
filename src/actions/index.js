const booksRequested = () => {
	return {
		type: "FETCH_BOOKS_REQUEST",
	};
};
const booksLoaded = (newBooks) => {
	return {
		type: "FETCH_BOOKS_SUCCESS",
		payload: newBooks,
	};
};

const booksError = (error) => {
	return {
		type: "FETCH_BOOKS_FAILURE",
		payload: error,
	};
};

const bookAddedToCart = (id) => {
	return {
		type: "BOOK_ADDED_TO_CART",
		payload: id,
	};
};
//создаем двойную функцию тк компонент вызывает вторую функция, и чтобы компонент не зависел от передаваемых параметров.
//А так, можно было бы в компноненте написать fetchBooks:()=>fetchBooks()
const fetchBooks = (dispatch, bookstoreService) => () => {
	dispatch(booksRequested());
	bookstoreService
		.getBooks()
		.then((data) => dispatch(booksLoaded(data)))
		.catch((error) => dispatch(booksError(error)));
};
export { fetchBooks, bookAddedToCart };
