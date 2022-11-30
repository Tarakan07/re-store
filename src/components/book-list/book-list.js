import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";

import { withBookstoreService } from "../hoc";
import { compose } from "../../utils";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { fetchBooks, bookAddedToCart } from "../../actions";
import "./book-list.css";

class BookListContainer extends Component {
	componentDidMount() {
		this.props.fetchBooks();
	}

	render() {
		const { books, loading, error, onAddedToCart } = this.props;

		if (loading) {
			return <Spinner />;
		}
		if (error) {
			return <ErrorIndicator />;
		}
		return <BookList books={books} onAddedToCart={onAddedToCart} />;
	}
}
const BookList = ({ books, onAddedToCart }) => {
	return (
		<ul className="book-list">
			{books.map((book) => {
				return (
					<li key={book.id}>
						<BookListItem
							book={book}
							onAddedToCart={() => onAddedToCart(book.id)}
						/>
					</li>
				);
			})}
		</ul>
	);
};
const mapStateToProps = ({ books, loading, error }) => {
	return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
	return {
		fetchBooks: fetchBooks(dispatch, bookstoreService),
		onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
	};
};

export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
