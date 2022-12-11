import { CircularProgress } from "@material-ui/core";
import { Formik } from "formik";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useSWR from "swr";
import { number, object, string } from "yup";
import axiosInstance from "../../../apiConfigs/axiosInstance";
import AdminLayout from "../../../Layouts/AdminLayout";

const AddGrade = ({ mutate, editGrade, setEditGrade }) => {
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
					name: editGrade.name ?? "",
				}}
				enableReinitialize
				validationSchema={gradeschema}
				onSubmit={(values, { setErrors }) => {
					if (editGrade.name) {
						axiosInstance
							.put(`/grades/update/${editGrade.id}`, values)
							.then((res) => {
								setEditGrade({});
								toast.success(res.data.message);
								mutate();
							})
							.catch((err) => {
								toast.error(err.response.data.message);
							});
					} else {
						axiosInstance
							.post("/grades/store", values)
							.then((res) => {
								toast.success(res.data.message);
								mutate();
							})
							.catch((err) => {
								toast.error(err.response.data.message);
							});
					}
				}}
			>
				{({
					values,
					errors,
					handleChange,
					handleSubmit,
					isSubmitting,
				}) => {
					return (
						<form onSubmit={handleSubmit}>
							<div>
								<div className="flex gap-2 w-1/2">
									<div>
										<div className="flex flex-col">
											<label
												htmlFor="mname"
												className="block text-gray-900"
											>
												Grade Name
											</label>
											<input
												type="text"
												name="name"
												autoComplete="off"
												onChange={handleChange}
												value={values.name}
												id="name"
												className="rounded-md w-full shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
											/>
										</div>
										{errors.name && (
											<p className="text-red-500">
												{errors.name}
											</p>
										)}
									</div>
									<div className="flex justify-end items-end mb-2 gap-2">
										<button
											type="submit"
											className="px-5 py-2 rounded-full bg-teal-500 text-white shadow-sm hover:bg-teal-600"
										>
											{editGrade.name ? "Update" : "Add"}
										</button>
										{/* switch for add button if editGrade.name is null */}
										{editGrade.name && (
											<div
												className="px-5 py-2 rounded-full bg-red-500 text-white shadow-sm hover:bg-red-600 cursor-pointer"
												onClick={() => {
													setEditGrade({});
												}}
											>
												Cancel
											</div>
										)}
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
