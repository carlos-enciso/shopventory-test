import { useEffect, useState } from "react";
import "./App.css";
import apiCall from "./utils/axios";

function App() {
	const [dogList, setDogList] = useState([]);

	useEffect(() => {
		apiCall().then((response) => {
			const responseList = [];
			for (const dog in response) {
				if (response[dog].length > 0) {
					response[dog].forEach((element) => {
						responseList.push(`${dog} ${element}`);
					});
				} else {
					responseList.push(`${dog}`);
				}
			}
			setDogList(responseList);
		});
	}, []);

	return (
		<div className="app">
			<header className="appHeader">
				<div className="headerWrapper">
					<div className="titleNavigation">
						<div className="title">Dog's R Us</div>
						<div className="navigationButton">
							<div className="navigation">Home</div>
							<div className="navigation">About</div>
							<div className="navigation">Contact Us</div>
						</div>
					</div>
					<div className="headerContent">
						<div className="textWrapper">
							<div className="contentTitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
							<div className="contentText">
								Donec mauris nisl, consectetur viverra leo vitae, gravida iaculis ipsum. Aenean sodales volutpat congue. In eget feugiat dolor. Quisque gravida odio
								tortor, a sollicitudin quam dignissim ac. Nulla quis purus dictum, imperdiet est eu, pulvinar leo.
							</div>
						</div>
						<div className="videoWrapper">
							<iframe
								width="100%"
								height="100%"
								src="https://www.youtube.com/embed/s_uiya1WsQ0"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							></iframe>
						</div>
					</div>
				</div>
			</header>
			<div className="contentWrapper">
				<div className="listTitle">Dog Breeds</div>
				{dogList.map((dog) => (
					<div className="listItem">{dog}</div>
				))}
			</div>
		</div>
	);
}

export default App;
