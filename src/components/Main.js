import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Searchbar from "./Searchbar";
import "scrollable-component";
import "../css/main.css";
import Sidebar from "./Sidebar";
import Player from "./Player";
function Main({ children }) {
	return (
		<div className="main-component">
			<Sidebar></Sidebar>
			<Searchbar></Searchbar>
			<scrollable-component
				className="main"
				style={{ backgroundImage: `url("../assets/1.jpg")` }}>
				{children}
			</scrollable-component>
			<Player></Player>
		</div>
	);
}

export default Main;
