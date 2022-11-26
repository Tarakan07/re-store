import { render } from "@testing-library/react";
import React, { Component } from "react";
import { connect } from "react-redux";
import BookLisItem from "../book-list-item";
import BookstoreService from "../../services";
import WithBookstoreService from "../hoc";
import { booksLoaded } from "../../actions";
import { bindActionCreators } from "redux";
class BookList extends Component {
	componentDidMount() {
		const { bookstoreService } = this.props;
		const data = bookstoreService.getBooks();
		this.props.booksLoaded(data);
	}
	render() {
		const { books } = this.props;
		return (
			<ul>
				{books.map((book, ind) => {
					return (
						<li key={ind}>
							<BookLisItem book={book} />
						</li>
					);
				})}
			</ul>
		);
	}
}

const mapStateToProps = ({ books }) => {
	return {
		books,
	};
};
// 4 cпособ
const mapDispatchToProps = { booksLoaded };
// 3 cпособ
const mapDispatchToProps_3 = (dispatch) => {
	return bindActionCreators(booksLoaded)(dispatch);
};
// 2 cпособ
const mapDispatchToProps_2 = (dispatch) => {
	return {
		booksLoaded: (newBooks) => {
			dispatch(booksLoaded(newBooks));
		},
	};
};

// 1 cпособ
const mapDispatchToProps_1 = (dispatch) => {
	return {
		booksLoaded: (newBooks) => {
			dispatch({
				type: "BOOKS_LOADED",
				payload: newBooks,
			});
		},
	};
};

export default WithBookstoreService()(
	connect(mapStateToProps, mapDispatchToProps)(BookList)
);
