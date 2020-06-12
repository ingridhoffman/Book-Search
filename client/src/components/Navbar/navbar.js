// Global
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Local
import "./navbar.css";
import Logo from "../../assets/Books-icon.png";

// Export function
function NavMenu() {
	return (
		<Navbar bg="dark" variant="dark" className="mt-1 mb-5 pt-4">
			<div className="container">
				<Navbar.Brand>
					<img
						alt=""
						src={Logo}
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>
					Google Books Search
				</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="/">Search</Nav.Link>
					<Nav.Link href="/mybooks">My Books</Nav.Link>
				</Nav>
			</div>
		</Navbar>
	);
}

export default NavMenu;
