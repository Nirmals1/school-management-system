import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from "./Dashboard";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Student from "./pages/admin/students/Student";
import AddStudent from "./pages/admin/students/AddStudent";
import Teacher from "./pages/admin/Teacher/Teacher";
import AddTeacher from "./pages/admin/Teacher/AddTeacher";
import Grade from "./pages/admin/Grade/Grade";
import AddGrade from "./pages/admin/Grade/AddGrade";
import Staff from "./pages/admin/Staff/Staff";
import AddStaff from "./pages/admin/Staff/AddStaff";
import Subject from "./pages/Subject/Subject";
import AddSubject from "./pages/Subject/AddSubject";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/*" element={<Dashboard />} />
			</Routes>
			<ToastContainer />
		</Router>
	</React.StrictMode>
);
