import React from 'react'
import AdminLayout from '../../Layouts/AdminLayout'
import { NavLink } from 'react-router-dom'

const Subject = () => {
  return (
		<div>
			<div className="px-10 py-6 w-full">
				<div className="flex justify-between">
					<h1 className="text-4xl text-gray-700">Subjects</h1>

					<NavLink to="create">
						<button className="px-4 py-1 rounded-full bg-teal-500 hover:bg-teal-600 text-white">
							Add Subject
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
									S ID
								</th>
								<th class="border border-slate-300 px-2 ...">
									Subject Name
								</th>
								<th class="border border-slate-300 px-2 ...">
									FullMark(TH)
								</th>
								<th class="border border-slate-300 px-2 ...">
									PassMark(TH)
								</th>
								<th class="border border-slate-300 px-2 ...">
									FullMark(PR)
								</th>
								<th class="border border-slate-300 px-2 ...">
									PassMark(PR)
								</th>
								<th class="border border-slate-300 px-2 ...">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="border border-slate-300 px-2 ...">
									1
								</td>
								<td class="border border-slate-300 px-2 ...">
									CACS101
								</td>
								<td class="border border-slate-300 px-2 ...">
									Mathematics
								</td>
								<td class="border border-slate-300 px-2 ...">
									100
								</td>
								<td class="border border-slate-300 px-2 ...">
									32
								</td>
								<td class="border border-slate-300 px-2 ...">
									--
								</td>
								<td class="border border-slate-300 px-2 ...">
									--
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
									2
								</td>
								<td class="border border-slate-300 px-2 ...">
									CACS102
								</td>
								<td class="border border-slate-300 px-2 ...">
									Computer Science
								</td>
								<td class="border border-slate-300 px-2 ...">
									75
								</td>
								<td class="border border-slate-300 px-2 ...">
									24
								</td>
								<td class="border border-slate-300 px-2 ...">
									25
								</td>
								<td class="border border-slate-300 px-2 ...">
									8
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
									3
								</td>
								<td class="border border-slate-300 px-2 ...">
									CACS103
								</td>
								<td class="border border-slate-300 px-2 ...">
									Science
								</td>
								<td class="border border-slate-300 px-2 ...">
									75
								</td>
								<td class="border border-slate-300 px-2 ...">
									24
								</td>
								<td class="border border-slate-300 px-2 ...">
									25
								</td>
								<td class="border border-slate-300 px-2 ...">
									8
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
									4
								</td>
								<td class="border border-slate-300 px-2 ...">
									CACS104
								</td>
								<td class="border border-slate-300 px-2 ...">
									Social Studies
								</td>
								<td class="border border-slate-300 px-2 ...">
									100
								</td>
								<td class="border border-slate-300 px-2 ...">
									32
								</td>
								<td class="border border-slate-300 px-2 ...">
									--
								</td>
								<td class="border border-slate-300 px-2 ...">
									--
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