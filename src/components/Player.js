import React, { useState } from "react";
import "../css/player.css";
import { FiRepeat, FiMoreVertical } from "react-icons/fi";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import {
	BsPlayCircleFill,
	BsShuffle,
	BsFillVolumeMuteFill,
} from "react-icons/bs";
import { RiMenuAddLine } from "react-icons/ri";
function Player() {
	const [play, setPlay] = useState(false);
	function setPlayingState() {
		console.log(play);
		setPlay(() => !play);
		console.log(play);
	}
	return (
		<div className="player d-flex align-items-center justify-content-between shadow">
			<section className="music-info d-flex align-items-center">
				<img
					src="https://i.pinimg.com/originals/04/ce/b4/04ceb49f18d559107d625d823b26d683.jpg"
					alt="song_img"
					height="80px"
					width="80px"
					className="m-2"
				/>
				<article className="d-inline-flex flex-column px-3">
					<span className="title mx-2">I Love You Mummy</span>
					<span className="artist mx-2">Arebica Luna</span>
				</article>
			</section>
			<section className="player-controls  d-flex align-items-center gap-3">
				<button className="repeat border border-0 fs-4 px-3 pb-2 pt-1 rounded-3">
					<FiRepeat />
				</button>
				<button className="prev border border-0 fs-4 px-3 pb-2 pt-1 rounded-3">
					<BiSkipPrevious />
				</button>
				<button
					className="play-pause border border-0 fs-4 px-3 pb-2 pt-1 rounded-3"
					onClick={() => setPlayingState()}>
					<BsPlayCircleFill />
				</button>
				<button className="next border border-0 fs-4 px-3 pb-2 pt-1 rounded-3">
					<BiSkipNext />
				</button>
				<button className="shuffle border border-0 fs-4 px-3 pb-2 pt-1 rounded-3">
					<BsShuffle />
				</button>
			</section>
			<section className="player-info d-flex align-items-center gap-3">
				<span className="timer">00:00 / 00:28</span>
				<button className="volume border border-0 fs-4 px-3 pb-2 pt-1 rounded-3">
					<BsFillVolumeMuteFill />
				</button>
				<button className="options border border-0 fs-4 px-3 pb-2 pt-1 rounded-3">
					<FiMoreVertical />
				</button>
				<button className="playlist border border-0 fs-4 px-3 pb-2 pt-1 rounded-3">
					<RiMenuAddLine />
				</button>
			</section>
		</div>
	);
}

export default Player;
