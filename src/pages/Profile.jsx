import React from "react";

const Profile = () => {
	return (
		<div className="py-12">
			<div className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
				<div className="px-6">
					<div className="flex flex-wrap justify-center">
						<div className="w-full flex justify-center">
							<div className="relative">
								<img
									src="https://picsum.photos/200"
									className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
								/>
							</div>
						</div>
						<div className="w-full text-center mt-20">
							<div className="flex justify-center lg:pt-4 pt-8 pb-0">
								<div className="p-3 text-center">
									<span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
										12
									</span>
									<span className="text-sm text-slate-400">
										Grade
									</span>
								</div>
								<div className="p-3 text-center">
									<span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
										93%
									</span>
									<span className="text-sm text-slate-400">
										Attendance %
									</span>
								</div>
								<div className="p-3 text-center">
									<span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
										3.87
									</span>
									<span className="text-sm text-slate-400">
										Previous GPA
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="text-center mt-2">
						<h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
							Payal Subedi
						</h3>
						<div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
							<i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75" />
							Gaindakot, Nawalpur
						</div>
					</div>
					<div className="mt-6 py-6 border-t border-slate-200 text-center">
						<div className="flex flex-wrap justify-center">
							<div className="w-full px-4">
								<p className="font-light leading-relaxed text-slate-600 mb-4">
									<table className="table-auto w-full">
										<tbody class="bg-white ">
											<tr>
												<th class="border-b border-slate-100 p-4 pl-8 text-slate-500">
													Name
												</th>
												<td class="border-b border-slate-100">
													Nirmal Subedi
												</td>
											</tr>
											<tr>
												<th class="border-b border-slate-100 p-4 pl-8 text-slate-500">
													Age
												</th>
												<td class="border-b border-slate-100">
													22
												</td>
											</tr>
											<tr>
												<th class="border-b border-slate-100 p-4 pl-8 text-slate-500">
													Address
												</th>
												<td class="border-b border-slate-100">
													Gaindakot, Nawalpur
												</td>
											</tr>
											<tr>
												<th class="border-b border-slate-100 p-4 pl-8 text-slate-500">
													Date of Birth
												</th>
												<td class="border-b border-slate-100">
													2000/07/18
												</td>
											</tr>
											<tr>
												<th class="border-b border-slate-100 p-4 pl-8 text-slate-500">
													Father's Name
												</th>
												<td class="border-b border-slate-100">
													Tikaram Subedi
												</td>
											</tr>
											<tr>
												<th class="border-b border-slate-100 p-4 pl-8 text-slate-500">
													Contact Number
												</th>
												<td class="border-b border-slate-100">
													9846577366
												</td>
											</tr>
											<tr>
												<th class="border-b border-slate-100 p-4 pl-8 text-slate-500">
													Previous School
												</th>
												<td class="border-b border-slate-100">
													Vijay Samudayik
												</td>
											</tr>
										</tbody>
									</table>
								</p>
								<p
									className="font-normal text-slate-700 hover:text-slate-400 border-t-2 pt-4"
								>
									Joined Since: 2018/07/18
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
