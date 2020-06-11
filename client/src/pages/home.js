// Global
import React from "react";

// Local
import Results from "../components/Results";

// Page Content
function Home() {
	return (
		<>
			<h2>Books matching your search:</h2>
			<Results />
		</>
	);
}

export default Home;
