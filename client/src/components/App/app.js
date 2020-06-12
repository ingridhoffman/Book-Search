// Global
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Local
import "./app.css";
import API from "../../utils/API";

import Navbar from "../Navbar";
import Home from "../../pages/home";
import GoogleBooks from "../../pages/googlebooks";
import MyBooks from "../../pages/mybooks";
import Oops from "../../pages/oops";

// Export
function App() {
	// Search state
	const [searchFor, setSearchFor] = useState();
	const [searchResults, setSearchResults] = useState([]);

	// Capture search input
	function handleInput(event) {
		setSearchFor(event.target.value);
	}

	// Perform google search
	const handleSearch = (event) => {
		event.preventDefault();
		API.search(searchFor)
			.then((results) => {
				const resultArray = results.data.items.map((item) => {
					const title = item.volumeInfo.title;
					const authorArray = item.volumeInfo.authors;
					let authors = "";
					authorArray.forEach((name) => (authors += `${name} `));
					const description = item.volumeInfo.description;
					const image = item.volumeInfo.imageLinks.thumbnail;
					const link = item.volumeInfo.infoLink;
					return { title, authors, description, image, link };
				});
				setSearchResults(resultArray);
			})
			.catch((err) => console.log(err));
	};

	function saveBook(event) {
		event.preventDefault();
		API.save(searchResults[event.target.id])
			.then((res) => console.log("res: ", res))
			.catch((err) => console.log(err));
	}

	return (
		<Router>
			<Navbar />
			<div className="container">
				<Switch>
					<Route exact path={["/", "/Book-Search"]}>
						{!searchResults.length ? (
							<Home handleInput={handleInput} handleSearch={handleSearch} />
						) : (
							<GoogleBooks resultArray={searchResults} save={saveBook} />
						)}
					</Route>
					<Route path="/mybooks">
						<MyBooks />
					</Route>
					<Route>
						<Oops />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
