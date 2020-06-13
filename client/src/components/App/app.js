// Global
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Local
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
	const [savedBooks, setSavedBooks] = useState([]);

	// Get books from database
	useEffect(() => {
		getBooks();
	}, []);

	// Capture search input
	function handleInput(event) {
		setSearchFor(event.target.value);
	}

	// Perform google search
	const handleSearch = (event) => {
		event.preventDefault();
		API.search(searchFor)
			.then((results) => {
				console.log("results: ", results.data.items);
				const resultArray = results.data.items.map((item) => {
					const title = item.volumeInfo.title;
					const authors = item.volumeInfo.authors
						? item.volumeInfo.authors.join(", ")
						: "";
					console.log("authors: ", item.volumeInfo.authors);
					const description = item.volumeInfo.description;
					const image = item.volumeInfo.imageLinks
						? item.volumeInfo.imageLinks.thumbnail
						: "https://lh3.googleusercontent.com/proxy/k498hMB_8oMI8KsnAgC24m5DvO7P30Nlal3XsdyOrpP0ChFuTlw1qPe6mLwNIWxjm68roSmE2wT38N_cZtZ_g56hC4dR_Ds0cpHagsxYw69tgRAOK0jkH4fZPOMR-sERSePstuW8rnX9gtqgJY39BQ";
					const link = item.volumeInfo.infoLink;
					return { title, authors, description, image, link };
				});
				setSearchResults(resultArray);
			})
			.catch((err) => console.log(err));
	};

	// Save google book to database
	function saveBook(event) {
		event.preventDefault();
		API.save(searchResults[event.target.id])
			.then((res) => console.log("res: ", res))
			.catch((err) => console.log(err));
	}

	// Get all books from database
	function getBooks() {
		API.get()
			.then((res) => setSavedBooks(res.data))
			.catch((err) => console.log(err));
	}

	// Remove book from database
	function removeBook(event) {
		event.preventDefault();
		API.remove(event.target.id)
			.then((res) => getBooks())
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
						<MyBooks resultArray={savedBooks} remove={removeBook} />
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
