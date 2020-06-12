// Global
import React from "react";

// Local
import { Results, ResultCard } from "../components/Results";

// Page Content
function GoogleBooks({ resultArray }) {
	console.log("array: ", resultArray);
	return (
		<>
			<h2>Books matching your search:</h2>
			<Results>
				{resultArray.map((result) => {
					const authorArray = result.volumeInfo.authors;
					let authors = "";
					authorArray.forEach((name) => (authors += `${name} `));
					console.log("result:", result.volumeInfo.title);
					return (
						<ResultCard
							title={result.volumeInfo.title}
							authors={authors}
							description={result.volumeInfo.description}
							image={result.volumeInfo.imageLinks.thumbnail}
							link={result.volumeInfo.infoLink}
						/>
					);
				})}
			</Results>
		</>
	);
}

export default GoogleBooks;
