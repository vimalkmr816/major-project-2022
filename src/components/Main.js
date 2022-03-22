import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Searchbar from "./Searchbar";
import "../App.css";
import Sidebar from "./Sidebar";
import Player from "./Player";
function Main({ children }) {
	return (
		<div className="main-component">
			<Sidebar></Sidebar>
			<Searchbar></Searchbar>
			<main className="main">{children}</main>
			<Player></Player>
		</div>
	);
}

export default Main;
