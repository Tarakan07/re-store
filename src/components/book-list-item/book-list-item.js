import React, { Fragment } from "react";
const BookLisItem = ({ book }) => {
	console.log(book);
	const { title, author } = book;
	return (
		<Fragment>
			<span>{title}</span>
			<span>{author}</span>
		</Fragment>
	);
};

export default BookLisItem;
