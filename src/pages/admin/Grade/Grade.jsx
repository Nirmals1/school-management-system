import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useSWR from "swr";
import axiosInstance from "../../../apiConfigs/axiosInstance";
import AdminLayout from "../../../Layouts/AdminLayout";
import AddGrade from "./AddGrade";
import { Pagination } from "@material-ui/lab";
import { CircularProgress } from "@material-ui/core";

const Grade = () => {
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [grades, setGrades] = useState([]);
	const [editGrade, setEditGrade] = useState({});
	// const [tableLoading, setTableLoading] = useState(false);
	const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);
	const { data, mutate, error, isValidating } = useSWR(
		`/grades/all?page=${page}`,
		fetcher,
		{
			onSuccess: (data) => {
				setTotalPages(data.data.last_page);
				setGrades(data.data.data);
			},
			revalidateOnFocus: false,
		}
	);
	console.log(isValidating);

	return (
		<div>
			<AddGrade
				mutate={mutate}
				editGrade={editGrade}
				setEditGrade={setEditGrade}
			/>
			<hr className="my-3" />
			<div className="w-full space-y-6">
				<div className="flex justify-between">
					<h1 className="text-4xl text-gray-700">Grades</h1>
				</div>
				<div className="card-body">
					<table class="border-collapse border border-slate-400 w-full mb-3">
						<thead>
							<tr>
								<th class="border border-slate-300 px-2 ">
									SNo.
								</th>
								<th class="border border-slate-300 px-2 ">
									Grade Name
								</th>
								<th class="border border-slate-300 px-2 ">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{isValidating && (
								<tr>
									<td colSpan={3}>
										<div className="py-5 flex justify-center w-full">
											<CircularProgress />
										</div>
									</td>
								</tr>
							)}
							{!isValidating &&
								grades &&
								grades.map((grade, index) => {
									return (
										<tr key={index}>
											<td class="border border-slate-300 px-2">
												{index + 1 + (page - 1) * 10}
											</td>
											<td class="border border-slate-300 px-2">
												{grade.name}
											</td>
											<td class="border-b border-slate-300 px-2 py-2 flex justify-center">
												<button
													onClick={() => {
														setEditGrade(grade);
													}}
													class="mx-2 bg-indigo-500 hover:bg-indigo-600 text-white py-1 px-4 rounded-full"
												>
													<i class="ri-edit-circle-line"></i>{" "}
													<span className="px-1">
														Edit
													</span>
												</button>
												<button class="mx-2 bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-full">
													<i class="ri-delete-bin-4-line"></i>{" "}
													<span className="px-1">
														Delete
													</span>
												</button>
											</td>
										</tr>
									);
								})}
						</tbody>
					</table>
					<Pagination
						page={page}
						count={totalPages}
						onChange={(event, value) => setPage(value)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Grade;
