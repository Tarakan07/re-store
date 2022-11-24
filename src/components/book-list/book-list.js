import { render } from "@testing-library/react";
import React, { Component } from "react";

import BookLisItem from "../book-list-item";
export default class BookList extends Component {
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
