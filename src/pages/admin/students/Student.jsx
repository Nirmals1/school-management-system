import { CircularProgress } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useSWR from "swr";
import axiosInstance from "../../../apiConfigs/axiosInstance";
import AdminLayout from "../../../Layouts/AdminLayout";

export default function Student() {
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [students, setStudents] = useState([]);
	const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);
	const { data, mutate, error, isValidating } = useSWR(
		`/students/list?page=${page}`,
		fetcher,
		{
			onSuccess: (data) => {
				setTotalPages(data.data.last_page);
				setStudents(data.data.data);
			},
			revalidateOnFocus: false,
		}
	);
	let navigate = useNavigate();
	console.log(data);
	return (
		<div className="px-10 py-6 w-full">
			<div className="flex justify-between">
				<h1 className="text-4xl text-gray-700">Students</h1>
				<NavLink to="create">
					<button className="px-4 py-1 rounded-full bg-teal-500 hover:bg-teal-600 text-white">
						Add Student
					</button>
				</NavLink>
			</div>
			<hr className="my-2" />
			<div className="card-body">
				<table class="border-collapse border border-slate-400 w-full ">
					<thead>
						<tr>
							<th class="border border-slate-300 px-2 ">S.No.</th>
							<th class="border border-slate-300 px-2 ">Name</th>
							<th class="border border-slate-300 px-2 ...">
								Class
							</th>
							<th class="border border-slate-300 px-2 ...">
								Address
							</th>
							<th class="border border-slate-300 px-2 ...">
								Phone no.
							</th>
							<th class="border border-slate-300 px-2 ...">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{isValidating && (
							<tr>
								<td colSpan={6}>
									<div className="py-5 flex justify-center w-full">
										<CircularProgress />
									</div>
								</td>
							</tr>
						)}
						{!isValidating && students &&
							students.map((student, index) => {
								return (
									<tr>
										<td class="border border-slate-300 px-2 ...">
											{index + 1 + (page - 1) * 15}
										</td>
										<td class="border border-slate-300 px-2 ...">
											{student.first_name}{" "}
											{student.middle_name}{" "}
											{student.last_name}
										</td>
										<td class="border border-slate-300 px-2 ...">
											{student.grade.name}
										</td>
										<td class="border border-slate-300 px-2 ...">
											{student.address}
										</td>
										<td class="border border-slate-300 px-2 ...">
											{student.contact_no ?? "--"}
										</td>
										<td class="border border-slate-300 px-2 py-2 flex justify-end">
											<button
												onClick={() => navigate(`/students/${student.id}`)}
											 class="mx-2 bg-lime-500 hover:bg-lime-600 text-white py-1 px-4 rounded-full">
												<i class="ri-eye-line"></i>{" "}
												<span className="px-1">
													View
												</span>
											</button>
											<button class="mx-2 bg-indigo-500 hover:bg-indigo-600 text-white py-1 px-4 rounded-full">
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
	);
}
