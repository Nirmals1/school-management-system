import React from 'react'
import AdminLayout from '../../Layouts/AdminLayout'
import { NavLink } from 'react-router-dom'

const Subject = () => {
  return (
		<div>
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
								<th class="border border-slate-300 px-2 ">
									S.No.
								</th>
								<th class="border border-slate-300 px-2 ">
									Name
								</th>
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
							<tr>
								<td class="border border-slate-300 px-2 ...">
									Indiana
								</td>
								<td class="border border-slate-300 px-2 ...">
									Indiana
								</td>
								<td class="border border-slate-300 px-2 ...">
									Indianapolis
								</td>
								<td class="border border-slate-300 px-2 ...">
									Indianapolis
								</td>
								<td class="border border-slate-300 px-2 ...">
									Indianapolis
								</td>
								<td class="border border-slate-300 px-2 py-2 flex justify-end">
									<button class="mx-2 bg-lime-500 hover:bg-lime-600 text-white py-1 px-4 rounded-full">
										<i class="ri-eye-line"></i>{" "}
										<span className="px-1">View</span>
									</button>
									<button class="mx-2 bg-indigo-500 hover:bg-indigo-600 text-white py-1 px-4 rounded-full">
										<i class="ri-edit-circle-line"></i>{" "}
										<span className="px-1">Edit</span>
									</button>
									<button class="mx-2 bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-full">
										<i class="ri-delete-bin-4-line"></i>{" "}
										<span className="px-1">Delete</span>
									</button>
								</td>
							</tr>
							<tr>
								<td class="border border-slate-300 px-2 ...">
									Indiana
								</td>
								<td class="border border-slate-300 ...">
									Ohio
								</td>
								<td class="border border-slate-300 ...">
									Columbus
								</td>
								<td class="border border-slate-300 ...">
									Indianapolis
								</td>
								<td class="border border-slate-300 ...">
									Indianapolis
								</td>
								<td class="border border-slate-300 px-2 py-2 flex justify-end">
									<button class="mx-2 bg-lime-500 hover:bg-lime-600 text-white py-1 px-4 rounded-full">
										<i class="ri-eye-line"></i>{" "}
										<span className="px-1">View</span>
									</button>
									<button class="mx-2 bg-indigo-500 hover:bg-indigo-600 text-white py-1 px-4 rounded-full">
										<i class="ri-edit-circle-line"></i>{" "}
										<span className="px-1">Edit</span>
									</button>
									<button class="mx-2 bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-full">
										<i class="ri-delete-bin-4-line"></i>{" "}
										<span className="px-1">Delete</span>
									</button>
								</td>
							</tr>
							<tr>
								<td class="border border-slate-300 px-2 ...">
									Indiana
								</td>
								<td class="border border-slate-300 ...">
									Detroit
								</td>
								<td class="border border-slate-300 ...">
									Indianapolis
								</td>
								<td class="border border-slate-300 ...">
									Indianapolis
								</td>
								<td class="border border-slate-300 ...">
									Indianapolis
								</td>
								<td class="border border-slate-300 px-2 py-2 flex justify-end">
									<button class="mx-2 bg-lime-500 hover:bg-lime-600 text-white py-1 px-4 rounded-full">
										<i class="ri-eye-line"></i>{" "}
										<span className="px-1">View</span>
									</button>
									<button class="mx-2 bg-indigo-500 hover:bg-indigo-600 text-white py-1 px-4 rounded-full">
										<i class="ri-edit-circle-line"></i>{" "}
										<span className="px-1">Edit</span>
									</button>
									<button class="mx-2 bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-full">
										<i class="ri-delete-bin-4-line"></i>{" "}
										<span className="px-1">Delete</span>
									</button>
								</td>
							</tr>
							<tr>
								<td class="border border-slate-300 px-2 ...">
									Indiana
								</td>
								<td class="border border-slate-300 ...">
									Detroit
								</td>
								<td class="border border-slate-300 ...">
									Indianapolis
								</td>
								<td class="border border-slate-300 ...">
									Indianapolis
								</td>
								<td class="border border-slate-300 ...">
									Indianapolis
								</td>
								<td class="border border-slate-300 px-2 py-2 flex justify-end">
									<button class="mx-2 bg-lime-500 hover:bg-lime-600 text-white py-1 px-4 rounded-full">
										<i class="ri-eye-line"></i>{" "}
										<span className="px-1">View</span>
									</button>
									<button class="mx-2 bg-indigo-500 hover:bg-indigo-600 text-white py-1 px-4 rounded-full">
										<i class="ri-edit-circle-line"></i>{" "}
										<span className="px-1">Edit</span>
									</button>
									<button class="mx-2 bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-full">
										<i class="ri-delete-bin-4-line"></i>{" "}
										<span className="px-1">Delete</span>
									</button>
								</td>
							</tr>
							<tr>
								<td class="border border-slate-300 px-2 ...">
									Indiana
								</td>
								<td class="border border-slate-300 ...">
									Detroit
								</td>
								<td class="border border-slate-300 ...">
									Indianapolis
								</td>
								<td class="border border-slate-300 ...">
									Indianapolis
								</td>
								<td class="border border-slate-300 ...">
									Indianapolis
								</td>
								<td class="border border-slate-300 px-2 py-2 flex justify-end">
									<button class="mx-2 bg-lime-500 hover:bg-lime-600 text-white py-1 px-4 rounded-full">
										<i class="ri-eye-line"></i>{" "}
										<span className="px-1">View</span>
									</button>
									<button class="mx-2 bg-indigo-500 hover:bg-indigo-600 text-white py-1 px-4 rounded-full">
										<i class="ri-edit-circle-line"></i>{" "}
										<span className="px-1">Edit</span>
									</button>
									<button class="mx-2 bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-full">
										<i class="ri-delete-bin-4-line"></i>{" "}
										<span className="px-1">Delete</span>
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
  );
}

export default Subject