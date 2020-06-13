// Global
import React from "react";

// Local
import { Results, ResultCard } from "../components/Results";

// Page Content
function Books({ resultArray, remove }) {
	console.log("array: ", resultArray);
	return (
		<>
			<h2>Reading List:</h2>
			<Results>
				{resultArray.map((result) => {
					return (
						<ResultCard
							key={result._id}
							id={result._id}
							title={result.title}
							authors={result.authors}
							description={result.description}
							image={result.image}
							link={result.link}
							remove={remove}
						/>
					);
				})}
			</Results>
		</>
	);
}

export default Books;
