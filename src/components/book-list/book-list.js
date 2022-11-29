import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";

import { withBookstoreService } from "../hoc";
import { booksLoaded, booksRequested } from "../../actions";
import { compose } from "../../utils";
import Spinner from "../spinner";
import "./book-list.css";

class BookList extends Component {
	componentDidMount() {
		// 1. receive data

		const { bookstoreService, booksRequested } = this.props;
		booksRequested();
		bookstoreService.getBooks().then((data) => {
			console.log("22");
			this.props.booksLoaded(data);
		});

		// 2. dispacth action to store
	}

	render() {
		const { books, loading } = this.props;
		console.log(books);
		if (loading) {
			return <Spinner />;
		}

		return (
			<ul className="book-list">
				{books.map((book) => {
					return (
						<li key={book.id}>
							<BookListItem book={book} />
						</li>
					);
				})}
			</ul>
		);
	}
}

const mapStateToProps = ({ books, loading }) => {
	return { books, loading };
};

const mapDispatchToProps = {
	booksLoaded,
	booksRequested,
};

export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookList);
