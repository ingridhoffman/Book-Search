// Global
import React from "react";

// Local
import { Results, ResultCard } from "../components/Results";
import Bookshelf from "../assets/undraw_bookshelves_xekd.svg";

// Page Content
function GoogleBooks({ resultArray, save }) {
	return (
		<>
			<div className="text-center my-3">
				<img
					src={Bookshelf}
					alt="Looking for a book on the bookshelf"
					width="30%"
				/>
			</div>
			<Results>
				{resultArray.map((result, index) => {
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
							save={save}
						/>
					);
				})}
			</Results>
		</>
	);
}

export default GoogleBooks;
