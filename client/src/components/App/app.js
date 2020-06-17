// Global
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Local
import Navbar from "../Navbar";
import Home from "../../pages/home";
import MyBooks from "../../pages/mybooks";
import Oops from "../../pages/oops";

// Export
function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path={["/", "/Book-Search"]}>
					<Home />
				</Route>
				<Route exact path="/mybooks">
					<MyBooks />
				</Route>
				<Route>
					<Oops />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
