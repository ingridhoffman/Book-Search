// Global
import React from "react";

// Local
import { Results, ResultCard } from "../components/Results";

// Page Content
function GoogleBooks({ resultArray, save }) {
	console.log("array: ", resultArray);
	return (
		<>
			<h2>Books matching your search:</h2>
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
