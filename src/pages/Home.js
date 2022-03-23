import React from "react";

function Home() {
	return (
		<div className="m-3">
			<div className="top-songs">
				<div className="top-songs-header">Header</div>
				<div className="top-songs-cards">Cards</div>
			</div>
			<div className="top-news">
				<div className="top-news-card"></div>
			</div>
			<div className="listening-stats">{/* include router here */}</div>
			<div className="new-releases"></div>
			<div className="featured-artists">
				<div className="featured-artists-header">
					<div className="featured-artists-cards"></div>
				</div>
			</div>
			<div className="your-playlist">
				<div className="your-playlist-header">
					<div className="your-playlist-cards"></div>
				</div>
			</div>
			<div className="retro-classic">
				<div className="retro-classic-header">
					<div className="retro-classic-cards"></div>
				</div>
			</div>
			<div className="radio">
				<div className="radio-header">
					<div className="radio-cards"></div>
				</div>
			</div>
			<div className="genres">
				<div className="genres-header">
					<div className="genres-cards"></div>
				</div>
			</div>
		</div>
	);
}

export default Home;
