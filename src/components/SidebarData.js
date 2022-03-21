import React from "react";
import { BiStation, BiHome, BiHistory, BiHeart } from "react-icons/bi";
import { BsCalendarEvent } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";
import { IoMdAnalytics } from "react-icons/io";
import { BsMic } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

export const routes = [
	{
		path: "/",
		name: "Home",
		icon: <BiHome />,
	},
	{
		path: "/genres",
		name: "Genres",
		icon: <IoDiamondOutline />,
	},
	{
		path: "/artists",
		name: "Artists",
		icon: <BsMic />,
	},
	{
		path: "/stations",
		name: "Stations",
		icon: <BiStation />,
	},
	{
		path: "/analytics",
		name: "Analytics",
		icon: <IoMdAnalytics />,
	},
	{
		path: "/history",
		name: "History",
		icon: <BiHistory />,
	},
	{
		path: "/favorites",
		name: "Favorites",
		icon: <BiHeart />,
	},
	{
		path: "/events",
		name: "Event",
		icon: <BsCalendarEvent />,
	},
	{
		path: "/add-events",
		name: "Add Event",
		icon: <FiEdit />,
	},
];
