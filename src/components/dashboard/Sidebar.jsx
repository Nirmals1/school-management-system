import { NavLink, useNavigate } from "react-router-dom";
import NavMenu from "../navlinks/NavMenu";

function Sidebar() {
  return (
		<>
			<div className="w-72 shadow-md min-h-screen max-h-fit bg-gray-50">
				<div className="my-5 flex items-center mx-5">
					<div className="w-36 rounded-full h-full">
						<img
							src="https://picsum.photos/200"
							alt="Logo"
							className="w-28 h-28 object-fill   rounded-full border border-gray-100 shadow-lg "
						/>
					</div>
					<div className="mx-4">
						<h1 className="text-lg font-bold text-gray-600">
							Nirmal Subedi
						</h1>
						<h1 className="text-xs font-semibold text-gray-400">
							Admin Panel
						</h1>
					</div>
				</div>
				<div className="mt-10">
					<NavLink
						className={({ isActive }) =>
							isActive
								? "border-l-4  border-l-red-500 px-3 my-5 text-red-500 flex items-center"
								: " flex px-3 my-5 items-center hover:text-red-500"
						}
						end
						end
						to="/"
					>
						<i className="ri-dashboard-3-line mr-2"></i> Dashboard
					</NavLink>

					<NavMenu
						icon="ri-user-2-line"
						name="student"
						link="/student"
					>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "pl-10 border-l-4  border-l-red-500 px-3 my-5 text-red-500 flex items-center"
									: " flex pl-10 px-3 my-5 items-center hover:text-red-500"
							}
							end
							end
							to="/student/create"
						>
							<i className="ri-user-2-line px-2"></i>Add Student
						</NavLink>

						<NavLink
							className={({ isActive }) =>
								isActive
									? "pl-10 border-l-4  border-l-red-500 px-3 my-5 text-red-500 flex items-center"
									: " pl-10 flex px-3 my-5 items-center hover:text-red-500"
							}
							end
							to="/student"
						>
							<i className="ri-user-2-line px-2"></i>View Student
						</NavLink>
					</NavMenu>

					<NavMenu
						icon="ri-user-3-line"
						name="Teacher"
						link="/teacher"
					>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "pl-10 border-l-4  border-l-red-500 px-3 my-5 text-red-500 flex items-center"
									: " flex pl-10 px-3 my-5 items-center hover:text-red-500"
							}
							end
							to="/teacher/create"
						>
							<i className="ri-user-2-line px-2"></i>Add Teacher
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "pl-10 border-l-4  border-l-red-500 px-3 my-5 text-red-500 flex items-center"
									: " flex pl-10 px-3 my-5 items-center hover:text-red-500"
							}
							end
							to="/teacher"
						>
							<i className="ri-user-2-line px-2"></i>View Teachers
						</NavLink>
					</NavMenu>
					<NavMenu icon="ri-user-3-line" name="Grade" link="/grade">
						<NavLink
							className={({ isActive }) =>
								isActive
									? "pl-10 border-l-4  border-l-red-500 px-3 my-5 text-red-500 flex items-center"
									: " flex pl-10 px-3 my-5 items-center hover:text-red-500"
							}
							end
							to="/grade/create"
						>
							<i className="ri-user-2-line px-2"></i>Add Grade
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "pl-10 border-l-4  border-l-red-500 px-3 my-5 text-red-500 flex items-center"
									: " flex pl-10 px-3 my-5 items-center hover:text-red-500"
							}
							end
							to="/grade"
						>
							<i className="ri-user-2-line px-2"></i>View Grades
						</NavLink>
					</NavMenu>
					<NavMenu
						icon="ri-user-3-line"
						name="Guardian"
						link="/guardian"
					>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "pl-10 border-l-4  border-l-red-500 px-3 my-5 text-red-500 flex items-center"
									: " flex pl-10 px-3 my-5 items-center hover:text-red-500"
							}
							end
							to="/guardian/create"
						>
							<i className="ri-user-2-line px-2"></i>Add Guardian
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "pl-10 border-l-4  border-l-red-500 px-3 my-5 text-red-500 flex items-center"
									: " flex pl-10 px-3 my-5 items-center hover:text-red-500"
							}
							end
							to="/guardian"
						>
							<i className="ri-user-2-line px-2"></i>View Guardian
						</NavLink>
					</NavMenu>
					<NavMenu
						icon="ri-user-2-line"
						name="Subject"
						link="/subject"
					>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "pl-10 border-l-4  border-l-red-500 px-3 my-5 text-red-500 flex items-center"
									: " flex pl-10 px-3 my-5 items-center hover:text-red-500"
							}
							end
							to="/subject/create"
						>
							<i className="ri-user-2-line px-2"></i>Add Subject
						</NavLink>

						<NavLink
							className={({ isActive }) =>
								isActive
									? "pl-10 border-l-4  border-l-red-500 px-3 my-5 text-red-500 flex items-center"
									: " pl-10 flex px-3 my-5 items-center hover:text-red-500"
							}
							end
							to="/subject"
						>
							<i className="ri-user-2-line px-2"></i>View Subject
						</NavLink>
					</NavMenu>
					<NavMenu icon="ri-user-2-line" name="staff" link="/staff">
						<NavLink
							className={({ isActive }) =>
								isActive
									? "pl-10 border-l-4  border-l-red-500 px-3 my-5 text-red-500 flex items-center"
									: " flex pl-10 px-3 my-5 items-center hover:text-red-500"
							}
							end
							to="/staff/create"
						>
							<i className="ri-user-2-line px-2"></i>Add Staff
						</NavLink>

						<NavLink
							className={({ isActive }) =>
								isActive
									? "pl-10 border-l-4  border-l-red-500 px-3 my-5 text-red-500 flex items-center"
									: " pl-10 flex px-3 my-5 items-center hover:text-red-500"
							}
							end
							to="/staff"
						>
							<i className="ri-user-2-line px-2"></i>View Staff
						</NavLink>
					</NavMenu>
				</div>

				<button className="flex px-3 my-5 items-center hover:text-red-500">
					<i className="ri-logout-line mr-2"></i>Logout
				</button>
			</div>
		</>
  );
}

export default Sidebar;
