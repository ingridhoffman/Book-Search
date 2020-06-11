// Global
import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Media from "react-bootstrap/Media";

// Local
import "./results.css";

// Export function
function Results() {
	return (
		<CardDeck>
			<Card>
				<Navbar bg="light" variant="light" className="justify-content-between">
					<div>
						<Card.Title>Card title</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							Card Subtitle
						</Card.Subtitle>
					</div>
					{/* will need ternary to handle results type and customize buttons per page */}
					<Form inline>
						<Button variant="outline-dark" size="sm" className="mr-sm-2">
							View
						</Button>
						{/* will need ternary to handle results type and customize buttons per page */}
						<Button variant="outline-dark" size="sm">
							Save
						</Button>
						<Button variant="outline-dark" size="sm">
							Remove
						</Button>
					</Form>
				</Navbar>
				<Card.Body className="horizontal">
					<Media>
						<img
							width={120}
							height={120}
							className="mr-3"
							src="https://media.gettyimages.com/photos/single-red-book-on-a-white-surface-picture-id173015527?s=612x612"
							alt="Book Thumbnail"
						/>
						<Media.Body>
							<p>
								Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
								scelerisque ante sollicitudin commodo. Cras purus odio,
								vestibulum in vulputate at, tempus viverra turpis. Fusce
								condimentum nunc ac nisi vulputate fringilla. Donec lacinia
								congue felis in faucibus.
							</p>
						</Media.Body>
					</Media>
				</Card.Body>
			</Card>
		</CardDeck>
	);
}

export default Results;
