// Global
import React from "react";

// Local
import Search from "../components/Search";
import Reading from "../assets/undraw_reading_book_4wjf.svg";

// Page Content
function Home({ handleInput, handleSearch }) {
	return (
		<>
			<div className="text-center my-3">
				<img src={Reading} alt="Reading a book" width="60%" />
			</div>
			<Search handleInput={handleInput} handleSearch={handleSearch} />
		</>
	);
}

export default Home;
