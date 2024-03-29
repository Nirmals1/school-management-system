import React from "react";
import { NavLink } from "react-router-dom";
import useSWR from "swr";
import axiosInstance from "../../../apiConfigs/axiosInstance";
import AdminLayout from "../../../Layouts/AdminLayout";
import AddCategory from "./AddCategory";

const Category = () => {
	const fetcher = (url) =>
		axiosInstance.get(url).then((res) => res.data.data.data);
	const { data, mutate, error } = useSWR("/categories/all", fetcher);
	console.log(error);
	return (
		<div>
			<AddCategory mutate={mutate} />
			<div className="px-10 py-6 w-full">
				<div className="flex justify-between">
					{/* <h1 className="text-4xl text-gray-700">Categorys</h1> */}
				</div>
				<hr className="my-2" />
				<div className="card-body">
					<table class="border-collapse border border-slate-400 w-full ">
						<thead>
							<tr>
								<th class="border border-slate-300 px-2 ">
									SNo.
								</th>
								<th class="border border-slate-300 px-2 ">
									Category Name
								</th>
								<th class="border border-slate-300 px-2 ">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{data &&
								data.map((Category, index) => {
									return (
										<tr>
											<td class="border border-slate-300 px-2 ...">
												{index + 1}
											</td>
											<td class="border border-slate-300 px-2 ...">
												{Category.name}
											</td>
											<td class="border border-slate-300 px-2 py-2 flex justify-end">
												<button class="mx-2 bg-lime-500 hover:bg-lime-600 text-white py-1 px-4 rounded-full">
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
							{!data && <div>Loading...</div>}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Category;
