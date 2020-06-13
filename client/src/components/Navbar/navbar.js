// Global
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Local
import Logo from "../../assets/Books-icon.png";

// Export function
function NavMenu() {
	return (
		<Navbar bg="dark" variant="dark" className="mt-2 mb-5 pt-4">
			<div className="container">
				<Navbar.Brand href="/" className="mr-sm-4">
					<img
						alt="logo"
						src={Logo}
						width="30"
						className="d-inline-block mr-2"
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
