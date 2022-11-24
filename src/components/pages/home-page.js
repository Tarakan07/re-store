import React from "react";
import BookList from "../book-list";
const HomePage = () => {
	const books = [
		{
			id: 1,
			title: "Book number 1",
			author: "Chel kakoi-to",
		},
		{
			id: 2,
			title: "Book kamasutra",
			author: "Chel kakoi-to izvrashenec",
		},
	];
	return <BookList books={books} />;
};
export default HomePage;
