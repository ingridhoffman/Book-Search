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
export function Results({ children }) {
	return <CardDeck className="flex-column">{children}</CardDeck>;
}

export function ResultCard({ title, authors, description, image, link }) {
	return (
		<Card>
			<Navbar bg="light" variant="light" className="justify-content-between">
				<div>
					<Card.Title>{title}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{authors}</Card.Subtitle>
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
						src={image}
						alt="Book Thumbnail"
					/>
					<Media.Body>
						<p>{description}</p>
					</Media.Body>
				</Media>
			</Card.Body>
		</Card>
	);
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
//   export function RecipeListItem({
// 	thumbnail,
// 	title,
// 	ingredients,
// 	href
//   }) {
// 	return (
// 	  <li className="list-group-item">
// 		<Container>
// 		  <Row>
// 			<Col size="xs-4 sm-2">
// 			  <Thumbnail src={thumbnail || "https://placehold.it/300x300"} />
// 			</Col>
// 			<Col size="xs-8 sm-9">
// 			  <h3>{title}</h3>
// 			  <p>Ingredients: {ingredients}</p>
// 			  <a rel="noreferrer noopener" target="_blank" href={href}>
// 				Go to recipe!
// 			  </a>
// 			</Col>
// 		  </Row>
// 		</Container>
// 	  </li>
// 	);
//   }
