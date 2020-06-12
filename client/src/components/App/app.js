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
	console.log("search: ", searchResults);

	// Show search results
	// useEffect(() => {
	//
	// }, []);

	// Capture search input
	function handleInput(event) {
		setSearchFor(event.target.value);
	}

	// Perform google search
	const handleSearch = (event) => {
		event.preventDefault();
		API.search(searchFor)
			.then((results) => setSearchResults(results.data.items))
			.catch((err) => console.log(err));
	};

	return (
		<Router>
			<Navbar />
			<div className="container">
				<Switch>
					<Route exact path={["/", "/Book-Search"]}>
						{!searchResults.length ? (
							<Home handleInput={handleInput} handleSearch={handleSearch} />
						) : (
							<GoogleBooks resultArray={searchResults} />
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
