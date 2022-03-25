import React from "react";
import { IoLanguageOutline } from "react-icons/io5";
import "../App.scss";
function Searchbar() {
	return (
		<div className="searchbar">
			<form className="search-from">
				<input
					type="text"
					className=" w-100 search-form-input border border-0 shadow-sm p-2"
					placeholder="Search trending songs..."
				/>
				<div className="input-btn">
					<button className="border border-0 px-2 py-1 lang-btn">
						Language <IoLanguageOutline />
					</button>
					<a href="#">
						<img
							src={require("../assets/dp.jpg")}
							alt="profile_pic"
							width="30px"
							height="30px"
							className="m-2 rounded-circle"
						/>
					</a>
				</div>
			</form>
		</div>
	);
}

export default Searchbar;
