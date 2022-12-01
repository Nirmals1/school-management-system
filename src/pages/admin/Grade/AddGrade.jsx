import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { number, object, string } from "yup";
import axiosInstance from "../../../apiConfigs/axiosInstance";
import AdminLayout from "../../../Layouts/AdminLayout";

const AddGrade = () => {
	const gradeschema = object({
		name: string().required(),
	});
	const navigate = useNavigate();
	return (
		<div>
			<h1 className="text-gray-800 text-2xl font-bold mt-8 mb-3 ">
				Grade Details
			</h1>
			<hr className="my-2" />
			<Formik
				initialValues={{
					name: "",
				}}
				validationSchema={gradeschema}
				onSubmit={(values) => {
					console.log(values);
					axiosInstance.post("/grades/store", values).then((res) => {
						toast.success(res.data.message);
						navigate("/grade");
					});
				}}
			>
				{({ values, errors, handleChange, handleSubmit }) => {
					return (
						<form onSubmit={handleSubmit}>
							<div className="grid grid-cols-2">
								<div>
									<label
										htmlFor="mname"
										className="block text-gray-900"
									>
										Grade Name
									</label>
									<input
										type="text"
										name="name"
										onChange={handleChange}
										id="name"
										className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
									/>
									{errors.name && (
										<p className="text-red-500">
											{errors.name}
										</p>
									)}
									<div className="my-3 flex justify-end">
										<button className="px-5 py-2 rounded-full bg-teal-500 text-white shadow-sm hover:bg-teal-600">
											Submit
										</button>
									</div>
								</div>
							</div>
						</form>
					);
				}}
			</Formik>
		</div>
	);
};

export default AddGrade;
