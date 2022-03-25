import React, { useEffect, useState } from "react";
import "../../App.scss";
function AudioSlider({ onChange, percentage }) {
	const [position, setPosition] = useState(0);
	useEffect(() => {
		setPosition(percentage);
	}, [percentage]);
	return (
		<div className="seek-container">
			<input
				type="range"
				step="0.01"
				value={position}
				className="player-seek-input"
				onChange={onChange}
			/>
			<div
				className="progress-bar-container"
				style={{
					width: `${position}%`,
				}}></div>
			<div
				className="thumb"
				style={{
					left: `${position}%`,
				}}></div>
		</div>
	);
}

export default AudioSlider;
