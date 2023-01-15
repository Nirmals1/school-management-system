import React from "react";
import AdminLayout from "../../../Layouts/AdminLayout";

import { ErrorMessage, Formik } from "formik";
import { object, string, number, date, array } from "yup";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import axiosInstance from "../../../apiConfigs/axiosInstance";
import { toast } from "react-toastify";

const AddTeacher = () => {
	const navigate = useNavigate();
	const teacherschema = object({
		first_name: string().required(),
		last_name: string().nullable(),
		fullName_nepali: string().required(),
		age: number().required("Please Provide Your Age"),
		contact_no: number().required(),
		address: string().required(),
		email: string().required().email(),
		gender: string().required(),
		dob: date().required(),
		bank_acc: number().required(),
		qualification: string().required(),
		pan_number: number().required(),
		nationality: string().required(),
		religion: string().required(),
		ethnicity: string().required(),
		grades: array(),
	});

	const gradeFetcher = async (url) => await axiosInstance.get(url);

	const { data: allGrades, error } = useSWR("/grades/all", gradeFetcher);

	const grades = allGrades?.data.data.data;

	return (
		<>
			<h1 className="text-gray-800 text-2xl font-bold ">
				Teacher Details
			</h1>
			<hr className="my-2" />
			<Formik
				initialValues={{
					first_name: "",
					last_name: "",
					fullName_nepali: "",
					contact_no: "",
					address: "",
					email: "",
					gender: "",
					dob: "",
					bank_acc: "",
					qualification: "",
					pan_number: "",
					nationality: "",
					religion: "",
					ethnicity: "",
					grades: [],
				}}
				validationSchema={teacherschema}
				onSubmit={(values) => {
					axiosInstance
						.post("/teachers/store", values)
						.then((res) => {
							toast.success("Teacher Added Successfully");
							navigate("/teacher");
						})
						.catch((err) => {
							toast.error(err.response.data.message);
						});
				}}
			>
				{({
					values,
					errors,
					handleChange,
					touched,
					handleBlur,
					handleSubmit,
				}) => (
					<form onSubmit={handleSubmit}>
						{console.log(errors)}
						<div className="grid md:grid-cols-3">
							<div>
								<label
									htmlFor="first_name"
									className="block text-gray-900"
								>
									First Name
								</label>
								<input
									type="text"
									name="first_name"
									id="first_name"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.first_name}
									className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
								/>
								<ErrorMessage
									name="first_name"
									component="div"
									className="text-red-500 text-sm"
								/>
							</div>
							<div>
								<label
									htmlFor="last_name"
									className="block text-gray-900"
								>
									Last Name
								</label>
								<input
									type="text"
									name="last_name"
									id="last_name"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.last_name}
									className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
								/>
								<ErrorMessage
									name="last_name"
									component="div"
									className="text-red-500 text-sm"
								/>
							</div>
							<div>
								<label
									htmlFor="last_name"
									className="block text-gray-900"
								>
									Grades
								</label>
								{/* multi select */}
								<select
									name="grades"
									id="grades"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.grades}
									className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
									multiple
								>
									{grades &&
										grades.map((grade) => (
											<option
												key={grade.id}
												value={grade.id}
											>
												{grade.name}
											</option>
										))}
								</select>
								<ErrorMessage
									name="last_name"
									component="div"
									className="text-red-500 text-sm"
								/>
							</div>
						</div>
						<div className="grid grid-cols-3">
							<div>
								<label
									htmlFor="contact_no"
									className="block text-gray-900"
								>
									contact_no
								</label>
								<input
									type="number"
									name="contact_no"
									id="contact_no"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.contact_no}
									className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
								/>
								<ErrorMessage
									name="contact_no"
									component="div"
									className="text-red-500 text-sm"
								/>
							</div>
							<div>
								<label
									htmlFor="age"
									className="block text-gray-900"
								>
									age
								</label>
								<input
									type="number"
									name="age"
									id="age"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.age}
									className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
								/>
								<ErrorMessage
									name="age"
									component="div"
									className="text-red-500 text-sm"
								/>
							</div>

							<div>
								<label
									htmlFor="address"
									className="block text-gray-900"
								>
									Address
								</label>
								<input
									type="string"
									name="address"
									id="address"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.address}
									className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
								/>
								<ErrorMessage
									name="address"
									component="div"
									className="text-red-500 text-sm"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-gray-900"
								>
									Email
								</label>
								<input
									type="string"
									name="email"
									id="email"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
									className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
								/>
								<ErrorMessage
									name="email"
									component="div"
									className="text-red-500 text-sm"
								/>
							</div>
						</div>

						<div className="grid grid-cols-3">
							<div className="">
								<label
									htmlFor="gender"
									className="block text-gray-900 py-3"
								>
									Gender
								</label>
								<input
									type="radio"
									name="gender"
									checked={values.gender == "male"}
									onChange={handleChange}
									onBlur={handleBlur}
									value="male"
								/>
								<span className="px-2">Male</span>
								<input
									type="radio"
									name="gender"
									checked={values.gender == "female"}
									onChange={handleChange}
									onBlur={handleBlur}
									value="female"
								/>{" "}
								<span className="px-2">Female</span>
								<ErrorMessage
									name="gender"
									component="div"
									className="text-red-500 text-sm"
								/>{" "}
							</div>
							<div>
								<label
									htmlFor="dob"
									className="block text-gray-900"
								>
									Date of birth
								</label>
								<input
									type="date"
									name="dob"
									id="dob"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.dob}
									className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
								/>
								<ErrorMessage
									name="dob"
									component="div"
									className="text-red-500 text-sm"
								/>
							</div>
							<div>
								<label
									htmlFor="bank_acc"
									className="block text-gray-900"
								>
									Bank Account No.
								</label>
								<input
									type="number"
									name="bank_acc"
									id="bank_acc"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.bank_acc}
									className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
								/>
								<ErrorMessage
									name="bank_acc"
									component="div"
									className="text-red-500 text-sm"
								/>
							</div>
						</div>
						<div className="grid md:grid-cols-3">
							<div>
								<label
									htmlFor="qualification"
									className="block text-gray-900"
								>
									Qualification
								</label>
								<input
									type="text"
									name="qualification"
									id="qualification"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.qualification}
									className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
								/>
								<ErrorMessage
									name="qualification"
									component="div"
									className="text-red-500 text-sm"
								/>
							</div>
							<div>
								<label
									htmlFor="pan_number"
									className="block text-gray-900"
								>
									PAN_number NO.
								</label>
								<input
									type="number"
									name="pan_number"
									onChange={handleChange}
									onBlur={handleBlur}
									id="pan_number"
									className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
								/>
								<ErrorMessage
									name="pan_number "
									component="div"
									className="text-red-500 text-sm"
								/>
							</div>
							<div>
								<label
									htmlFor="pan_number"
									className="block text-gray-900"
								>
									FUll Nepali Name
								</label>
								<input
									type="text"
									name="fullName_nepali"
									id="fullName_nepali"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.fullName_nepali}
									className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
								/>
								<ErrorMessage
									name="fullName_nepali "
									component="div"
									className="text-red-500 text-sm"
								/>
							</div>
						</div>

						{/* </div> */}

						<div className="grid grid-cols-3">
							<div>
								<label htmlFor="nationality" className="block">
									Nationality
								</label>
								<select
									id="inputState"
									name="nationality"
									onChange={handleChange}
									onBlur={handleBlur}
									className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
								>
									<option value="">Choose...</option>
									<option value="nepali">Nepali</option>
									<option value="indian">Indian</option>
									<option value="others">Others</option>
								</select>
								<ErrorMessage
									name="nationality"
									component="div"
									className="text-red-500 text-sm"
								/>
							</div>
							<div>
								<div>
									<label htmlFor="religion" className="block">
										Religion
									</label>
									<select
										id="inputState"
										name="religion"
										onChange={handleChange}
										onBlur={handleBlur}
										className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
									>
										<option value="hindu">Hindu</option>
										<option value="muslim">Muslim</option>
										<option value="sikh">Sikh</option>
										<option value="buddhist">
											Buddhist
										</option>
										<option value="christian">
											Chirstian
										</option>
										<option value="others">Others</option>
									</select>
									<ErrorMessage
										name="religion"
										component="div"
										className="text-red-500 text-sm"
									/>
								</div>
							</div>
							<div>
								<div>
									<label
										htmlFor="ethnicity"
										className="block"
									>
										Ethnicity
									</label>
									<select
										id="inputState"
										name="ethnicity"
										onChange={handleChange}
										onBlur={handleBlur}
										className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
									>
										<option value="first">First</option>
										<option value="second">Second</option>
									</select>
									<ErrorMessage
										name="ethnicity"
										component="div"
										className="text-red-500 text-sm"
									/>
								</div>
								<div className="my-3 flex justify-end">
									<button
										type="submit"
										className="px-5 py-2 rounded-full bg-teal-500 text-white shadow-sm hover:bg-teal-600"
									>
										Submit
									</button>
								</div>
							</div>
						</div>
					</form>
				)}
			</Formik>
		</>
	);
};
export default AddTeacher;
