import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const Index = () => {
	const labels = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "Student Attendance Chart",
			},
		},
	};

	ChartJS.register(
		CategoryScale,
		LinearScale,
		BarElement,
		Title,
		Tooltip,
		Legend
	);

	const data = {
		labels,
		datasets: [
			{
				label: "Attendence Percentage",
				data: labels.map(() => Math.round(Math.random() * 100)),
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
		],
	};
	return (
		<div>
			<div className="py-12">
				{/* greetings for dashboard welcom  */}
				<p>
					<h1 className="text-3xl text-center font-bold text-gray-700">
						Welcome to the Dashboard
					</h1>
				</p>
				{/*-===================== FIRST ROW CONTAINING THE  STATS CARD STARTS HERE =============================*/}
				<div className="flex justify-center  py-10 p-14">
					{/*-== First Stats Container ====-*/}
					<div className="container w-1/4 mx-auto pr-4">
						<div className="w-full bg-white  mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
							<div className="h-20 bg-red-400 flex items-center justify-between">
								<p className="mr-0 text-white text-lg pl-5">
									Students
								</p>
							</div>
							<div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
								<p>TOTAL</p>
							</div>
							<p className="py-4 text-3xl ml-5">1830</p>
							{/* <hr > */}
						</div>
					</div>
					{/*-== First Stats Container ====-*/}
					{/*-== Second Stats Container ====-*/}
					<div className="container w-1/4 mx-auto pr-4">
						<div className="w-full bg-white  mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
							<div className="h-20 bg-blue-500 flex items-center justify-between">
								<p className="mr-0 text-white text-lg pl-5">
									Teachers
								</p>
							</div>
							<div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
								<p>TOTAL</p>
							</div>
							<p className="py-4 text-3xl ml-5">46</p>
							{/* <hr > */}
						</div>
					</div>
					{/*-== Second Stats Container ====-*/}
					{/*-== Third Stats Container ====-*/}
					<div className="container w-1/4 mx-auto pr-4">
						<div className="w-full bg-white  mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
							<div className="h-20 bg-purple-400 flex items-center justify-between">
								<p className="mr-0 text-white text-lg pl-5">
									Grades
								</p>
							</div>
							<div className="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
								<p>TOTAL</p>
							</div>
							<p className="py-4 text-3xl ml-5">14</p>
							{/* <hr > */}
						</div>
					</div>
					{/*-== Third Stats Container ====-*/}
					{/*-== Fourth Stats Container ====-*/}
					<div className="container w-1/4 mx-auto">
						<div className="w-full bg-white  mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
							<div className="h-20 bg-purple-900 flex items-center justify-between">
								<p className="mr-0 text-white text-lg pl-5">
									Subjects
								</p>
							</div>
							<div className="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
								<p>TOTAL</p>
							</div>
							<p className="py-4 text-3xl ml-5">126</p>
							{/* <hr > */}
						</div>
					</div>
					{/*-== Fourth Stats Container ====-*/}
				</div>
				{/*-===================== FIRST ROW CONTAINING THE  STATS CARD ENDS HERE =============================*/}
				{/*----===================== SECOND ROW CONTAINING THE TABLE STATS STARTS HERE =============================*/}
				<div className="flex justify-center py-10 p-5">
					<Bar options={options} data={data} />
				</div>
				{/*-------===================== SECOND ROW CONTAINING THE TABLE STATS ENDS HERE =============================*/}
			</div>
		</div>
	);
};

export default Index;
