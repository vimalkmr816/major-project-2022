import React from "react";
import Main from "./components/Main";
import Searchbar from "./components/Searchbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Genres from "./pages/Genres";
import Artists from "./pages/Artists";
import Stations from "./pages/Stations";
import Analytics from "./pages/Analytics";
import History from "./pages/History";
import Favorites from "./pages/Favorites";
import Events from "./pages/Events";
import AddEvents from "./pages/AddEvents";
import Error from "./pages/Error";
function App() {
	return (
		<div className="App">
			<Router>
				<Main>
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/genres" element={<Genres />}></Route>
						<Route path="/artists" element={<Artists />}></Route>
						<Route path="/stations" element={<Stations />}></Route>
						<Route path="/analytics" element={<Analytics />}></Route>
						<Route path="/history" element={<History />}></Route>
						<Route path="/favorites" element={<Favorites />}></Route>
						<Route path="/events" element={<Events />}></Route>
						<Route path="/add-events" element={<AddEvents />}></Route>
						<Route path="*" element={<Error />}></Route>
					</Routes>
				</Main>
			</Router>
		</div>
	);
}

export default App;
