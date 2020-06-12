// Global
import React from "react";

// Local
import Search from "../components/Search";
import Reading from "../assets/undraw_book_lover_mkck.svg";

// Page Content
function Home({ handleInput, handleSearch }) {
	return (
		<>
			<div className="text-center pt-5">
				<img src={Reading} alt="Reading a book" width="60%" />
			</div>
			<Search handleInput={handleInput} handleSearch={handleSearch} />
		</>
	);
}

export default Home;
