import React from "react";
import "../css/searchbar.css";
function Searchbar() {
	return (
		<div className="searchbar">
			<form className="search-from">
				<input
					type="text"
					className="search-form-input border border-2 shadow-sm m-2 p-2 rounded-3"
					placeholder="Search trending songs..."
				/>
			</form>
		</div>
	);
}

export default Searchbar;
