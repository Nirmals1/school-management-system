import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useSWR from "swr";
import axiosInstance from "../../../apiConfigs/axiosInstance";
import AdminLayout from "../../../Layouts/AdminLayout";
import AddGrade from "./AddGrade";
import { Pagination } from "@material-ui/lab";

const Grade = () => {
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [grades, setGrades] = useState([]);
	const [editGrade, setEditGrade] = useState({});
	const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);
	const { data, mutate, error } = useSWR(
		`/grades/all?page=${page}`,
		fetcher,
		{
			onSuccess: (data) => {
				setTotalPages(data.data.last_page);
				setGrades(data.data.data);
			},
		}
	);

	return (
		<div>
			<AddGrade mutate={mutate} editGrade={editGrade} />
			<div className="py-6 w-full">
				<div className="flex justify-between">
					{/* <h1 className="text-4xl text-gray-700">Grades</h1> */}
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
							{grades &&
								grades.map((grade, index) => {
									return (
										<tr key={index}>
											<td class="border border-slate-300 px-2 ...">
												{index + 1 + (page - 1) * 10}
											</td>
											<td class="border border-slate-300 px-2 ...">
												{grade.name}
											</td>
											<td class="border border-slate-300 px-2 py-2 flex justify-end">
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
							{!grades && <div>Loading...</div>}
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
