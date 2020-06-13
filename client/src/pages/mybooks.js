// Global
import React from "react";

// Local
import { Results, ResultCard } from "../components/Results";
import Bookstack from "../assets/undraw_book_lover_mkck.svg";

// Page Content
function Books({ resultArray, remove }) {
	console.log("array: ", resultArray);
	return (
		<>
			<div className="text-center my-3">
				<img src={Bookstack} alt="Reading a book" width="30%" />
			</div>
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
