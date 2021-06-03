import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Categories from "../utils/Categories";
import { toast } from "react-toastify";
export default function Home(props) {
	//Zastąpić przez pobranie z bazy
	const categoriesJSON = [
		{
			id: "1",
			name: "Category 1",
			link: "/category/1",
		},
		{
			id: "2",
			name: "Category 2",
			link: "/category/2",
		},
	];
	if (props.history.location.state?.msg)
		toast.info(props.history.location.state.msg);

	Categories.setCategories(categoriesJSON);
	const categoriesList = categoriesJSON.map((item) => {
		return (
			<Row key={item.id}>
				<Link to={item.link}>
					<Col>{item.id}</Col>
					<Col>{item.name}</Col>
				</Link>
			</Row>
		);
	});
	return (
		<Container>
			<Row>
				<Col>Home page</Col>
			</Row>
			{categoriesList}
		</Container>
	);
}
