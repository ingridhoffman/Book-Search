// Global
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Local
import "./app.css";
import Navbar from "../Navbar";
import Home from "../../pages/home";
import MyBooks from "../../pages/mybooks";
import Oops from "../../pages/oops";

// Export
function App() {
	return (
		<Router>
			<Navbar />
			<div className="container">
				<Switch>
					<Route exact path={["/", "/Book-Search"]}>
						<Home />
					</Route>
					<Route path="/mybooks">
						<MyBooks />
					</Route>
					<Route>
						<Oops />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
