import { render } from "@testing-library/react";
import React, { Component } from "react";
import { connect } from "react-redux";
import BookLisItem from "../book-list-item";
class BookList extends Component {
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

const mapStateToProps = (state) => {
	return {
		books: state.books,
	};
};

export default connect(mapStateToProps)(BookList);
