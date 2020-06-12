// Global
import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

// Local
import "./search.css";

function Search({ handleInput, handleSearch }) {
	return (
		<Card>
			<Card.Body className="horizontal">
				<Form>
					<InputGroup className="mb-3">
						<Form.Control
							as="input"
							type="text"
							placeholder="Search for Books"
							onChange={handleInput}
						/>
						<InputGroup.Append>
							<Button variant="outline-dark" onClick={handleSearch}>
								Search
							</Button>
						</InputGroup.Append>
					</InputGroup>
				</Form>
			</Card.Body>
		</Card>
	);
}

export default Search;
