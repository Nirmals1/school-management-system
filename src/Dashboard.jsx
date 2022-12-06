import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./Layouts/AdminLayout";
import Category from "./pages/admin/Category/Category";
import AddGrade from "./pages/admin/Grade/AddGrade";
import Grade from "./pages/admin/Grade/Grade";
import AddStaff from "./pages/admin/Staff/AddStaff";
import Staff from "./pages/admin/Staff/Staff";
import AddStudent from "./pages/admin/students/AddStudent";
import Student from "./pages/admin/students/Student";
import AddTeacher from "./pages/admin/Teacher/AddTeacher";
import Teacher from "./pages/admin/Teacher/Teacher";
import AddSubject from "./pages/Subject/AddSubject";
import Subject from "./pages/Subject/Subject";

function Dashboard() {
	return (
		<>
			<AdminLayout>
				<Routes>
					<Route path="/" element={<h1>Dashboard</h1>} />
					<Route path="/student">
						<Route index element={<Student />} />
						<Route path="create" element={<AddStudent />} />
					</Route>
					<Route path="/teacher">
						<Route index element={<Teacher />} />
						<Route path="create" element={<AddTeacher />} />
					</Route>
					<Route path="/grade">
						<Route index element={<Grade />} />
						<Route path="create" element={<AddGrade />} />
					</Route>
					<Route path="/staff">
						<Route index element={<Staff />} />
						<Route path="create" element={<AddStaff />} />
					</Route>
					<Route path="/subject">
						<Route index element={<Subject />} />
						<Route path="create" element={<AddSubject />} />
					</Route>
					<Route path="/category">
						<Route index element={<Category />} />
					</Route>
				</Routes>
			</AdminLayout>
		</>
	);
}

export default Dashboard;
