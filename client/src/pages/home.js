// Global
import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

// Local
import API from "../utils/API";
import Search from "../components/Search";
import { Results, ResultCard } from "../components/Results";
import Reading from "../assets/undraw_reading_book_4wjf.svg";
import Bookshelf from "../assets/undraw_bookshelves_xekd.svg";

// Page Content
function Home() {
	// Set states
	const [searchFor, setSearchFor] = useState();
	const [searchResults, setSearchResults] = useState([]);
	const [emptyResults, setEmptyResults] = useState(false);

	// Capture search input
	const handleInput = (event) => {
		setSearchFor(event.target.value);
	};

	// Perform google search
	const handleSearch = (event) => {
		event.preventDefault();
		API.search(searchFor)
			.then((results) => {
				results.data.items
					? handleResults(results.data.items)
					: setEmptyResults(true);
			})
			.catch((err) => console.log(err));
	};

	// Handle search results
	const handleResults = (items) => {
		const resultArray = items.map((item) => {
			const title = item.volumeInfo.title;
			const authors = item.volumeInfo.authors
				? item.volumeInfo.authors.join(", ")
				: "";
			const description = item.volumeInfo.description;
			const image = item.volumeInfo.imageLinks
				? item.volumeInfo.imageLinks.thumbnail
				: "https://lh3.googleusercontent.com/proxy/k498hMB_8oMI8KsnAgC24m5DvO7P30Nlal3XsdyOrpP0ChFuTlw1qPe6mLwNIWxjm68roSmE2wT38N_cZtZ_g56hC4dR_Ds0cpHagsxYw69tgRAOK0jkH4fZPOMR-sERSePstuW8rnX9gtqgJY39BQ";
			const link = item.volumeInfo.infoLink;
			return { title, authors, description, image, link };
		});
		setEmptyResults(false);
		setSearchResults(resultArray);
	};

	// Save google book to database
	const saveBook = (event) => {
		event.preventDefault();
		API.save(searchResults[event.target.id])
			.then((res) => console.log("res: ", res))
			.catch((err) => console.log(err));
	};

	return (
		<>
			{!searchResults.length ? (
				<div className="container">
					<div className="text-center my-3">
						<img src={Reading} alt="Reading a book" width="60%" />
					</div>
					<Search handleInput={handleInput} handleSearch={handleSearch} />
					{emptyResults ? (
						<Alert variant="primary">
							<p>No results found. Please try another search.</p>
						</Alert>
					) : (
						<></>
					)}
				</div>
			) : (
				<div className="container">
					<div className="text-center my-3">
						<img
							src={Bookshelf}
							alt="Looking for a book on the bookshelf"
							width="30%"
						/>
					</div>
					<Results>
						{searchResults.map((result, index) => {
							return (
								<ResultCard
									type="google"
									key={result.link}
									id={index}
									title={result.title}
									authors={result.authors}
									description={result.description}
									image={result.image}
									link={result.link}
									save={saveBook}
								/>
							);
						})}
					</Results>
				</div>
			)}
		</>
	);
}

export default Home;
