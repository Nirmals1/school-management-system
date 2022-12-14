import { Navigate, useNavigate } from "react-router-dom";
import AdminLayout from "../../../Layouts/AdminLayout";
import { ErrorMessage, Formik } from "formik";
import { string, object, number, date } from "yup";
import axios from "axios";
import axiosInstance from "../../../apiConfigs/axiosInstance";
import useSWR from "swr";
import { toast } from "react-toastify";

function AddStudent() {
	const navigate = useNavigate();
	const studentschema = object({
		first_name: string().required("Please Provide First Name"),
		middle_name: string().nullable(),
		last_name: string().required(),
		fullName_nepali: string().required(),
		// phone: string().required(),
		dob: date().required(),
		gender: string().required(),
		address: string().required(),
		age: number().required(),
		contact_no: string().required(),
		nationality: string().required(),
		religion: string().required(),
		ethnicity: string().required(),
		grade_id: number().required(),
		address_school: string().required(),
		// documents: string().required(),
		previous_school: string().required(),
		// guardian_id: number().required(),
		father_name: string().required(),
		mother_name: string().required(),
		contact_name: string().required(),
		parent_address: string().required(),
		telephone: string().required(),
		mobile: string().required(),
		email: string().required().email(),
	});

	const gradeFetcher = async (url) => await axiosInstance.get(url);

	const { data: allGrades, error } = useSWR("/grades/all", gradeFetcher);

	const grades = allGrades?.data.data.data;
	console.log(grades);

	return (
		<>
			<div className="my-5 w-full flex justify-between items-center">
				<h1 className="text-gray-800 text-4xl font-bold ">
					Add New Student
				</h1>

				<button
					onClick={() => navigate("/student")}
					className="text-white bg-gray-500 hover:bg-gray-600 px-4 py-1 rounded-full shadow-sm"
				>
					Go Back
				</button>
			</div>
			<hr className="my-3" />

			<div>
				<h1 className="text-gray-800 text-2xl font-bold ">
					Personal Details
				</h1>
				<hr className="my-2" />
				<Formik
					initialValues={{
						first_name: "",
						middle_name: "",
						last_name: "",
						contact_name: "",
						fullName_nepali: "",
						phone: "",
						dob: "",
						gender: "",
						address: "",
						age: "",
						contact_no: "",
						nationality: "",
						religion: "",
						ethnicity: "",
						grade_id: "",
						address_school: "",
						documents: "",
						previous_school: "",
						father_name: "",
						mother_name: "",
						parent_address: "",
						telephone: "",
						mobile: "",
						email: "",
					}}
					validationSchema={studentschema}
					onSubmit={(values) => {
						console.log(values);
						axiosInstance
							.post("/students/store", values)
							.then((res) => {
								toast.success("Student Added Successfully");
								navigate("/student");
							}).catch((err) => {
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
					}) => {
						console.log(errors)
						return (
							<form onSubmit={handleSubmit}>
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
											id="fist_name"
											onChange={handleChange}
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
											htmlFor="middle_name"
											className="block text-gray-900"
										>
											Middle Name
										</label>
										<input
											type="text"
											name="middle_name"
											id="middle_name"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.middle_name}
											className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
										/>
										<ErrorMessage
											name="middle_name"
											component="div"
											className="text-red-500 text-sm"
										/>
									</div>
									<div>
										<label
											htmlFor="last_name"
											className="block text-gray-900"
										>
											LastName
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
											htmlFor="fullname_nepali"
											className="block text-gray-900"
										>
											Fullname Nepali
										</label>
										<input
											type="text"
											name="fullName_nepali"
											id="fullname_nepali"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.fullName_nepali}
											className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
										/>
										<ErrorMessage
											name="fullName_nepali"
											component="div"
											className="text-red-500 text-sm"
										/>
									</div>

									<div>
										<label
											htmlFor="age"
											className="block text-gray-900"
										>
											Age
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
											htmlFor="contact_no"
											className="block text-gray-900"
										>
											contact_no
										</label>
										<input
											type="tel"
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
											htmlFor="address"
											className="block text-gray-900"
										>
											Address
										</label>
										<input
											type="text"
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
											type="email"
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
									<div>
										<label
											htmlFor="grade_id"
											className="block text-gray-900"
										>
											grade_id
										</label>
										<select
											id="grade_id"
											name="grade_id"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.grade_id}
											className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
										>
											<option value="">Choose grade</option>
											{grades &&
												grades.map((grade) => {
													return (
														<option
															key={grade.id}
															value={grade.id}
														>
															{grade.name}
														</option>
													);
												})}
										</select>
										<ErrorMessage
											name="grade_id"
											component="div"
											className="text-red-500 text-sm"
										/>
									</div>

									<div className="">
										<label
											htmlFor="gender"
											className="block text-gray-900 py-3"
										>
											Gender
										</label>
										<input
											type="radio"
											defaultValue="Male"
											name="gender"
											onChange={handleChange}
											onBlur={handleBlur}
										/>
										<span className="px-2">Male</span>
										<input
											type="radio"
											defaultValue="Female"
											name="gender"
											onChange={handleChange}
											onBlur={handleBlur}
										/>{" "}
										<span className="px-2">Female</span>
										<input
											type="radio"
											defaultValue="Other"
											name="gender"
											onChange={handleChange}
											onBlur={handleBlur}
										/>
										Other
										<ErrorMessage
											name="gender"
											component="div"
											className="text-red-500 text-sm"
										/>
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
											htmlFor="nationality"
											className="block"
										>
											Nationality
										</label>
										<select
											id="nationality"
											name="nationality"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.nationality}
											className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
										>
											<option selected>Choose...</option>
											<option value="nepali">
												Nepali
											</option>
											<option value="indian">
												Indian
											</option>
										</select>
										<ErrorMessage
											name="nationality"
											component="div"
											className="text-red-500 text-sm"
										/>
									</div>
									<div>
										<div>
											<label
												htmlFor="religion"
												className="block"
											>
												Religion
											</label>
											<select
												id="religion"
												name="religion"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.religion}
												className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
											>
												<option selected>
													Choose...
												</option>
												<option className="christian">
													Christian
												</option>
												<option className="buddhist">
													Buddhist
												</option>
												<option className="hindu">
													Hindu
												</option>
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
												id="ethnicity"
												name="ethnicity"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.ethnicity}
												className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
											>
												<option selected>
													Choose...
												</option>
												<option value="a">a</option>
												<option value="b">b</option>
												<option value="c">c</option>
											</select>
											<ErrorMessage
												name="ethnicity"
												component="div"
												className="text-red-500 text-sm"
											/>
										</div>
									</div>
								</div>
								{/* </div> */}

								<h1 className="text-gray-800 text-2xl font-bold mt-8 mb-3 ">
									Guardian Details
								</h1>
								<hr className="my-2" />

								<div className="grid grid-cols-3">
									<div>
										<label
											htmlFor="father's name"
											className="block text-gray-900"
										>
											Father's Name
										</label>
										<input
											type="text"
											name="father_name"
											id="father's name"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.father_name}
											className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
										/>
										<ErrorMessage
											name="father_name"
											component="div"
											className="text-red-500 text-sm"
										/>
									</div>
									<div>
										<label
											htmlFor="mother's name"
											className="block text-gray-900"
										>
											Mother's Name
										</label>
										<input
											type="text"
											name="mother_name"
											id="mother's name"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.mother_name}
											className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
										/>
										<ErrorMessage
											name="mother_name"
											component="div"
											className="text-red-500 text-sm"
										/>
									</div>
									<div>
										<label
											htmlFor="mother's name"
											className="block text-gray-900"
										>
											Contact Name
										</label>
										<input
											type="text"
											name="contact_name"
											id="mother's name"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.contact_name}
											className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
										/>
										<ErrorMessage
											name="contact_name"
											component="div"
											className="text-red-500 text-sm"
										/>
									</div>
									<div>
										<label
											htmlFor="telephone"
											className="block text-gray-900"
										>
											Phone
										</label>
										<input
											type="tel"
											name="telephone"
											id="telephone"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.telephone}
											className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
										/>
										<ErrorMessage
											name="telephone"
											component="div"
											className="text-red-500 text-sm"
										/>
									</div>
									<div>
										<label
											htmlFor="mobile"
											className="block text-gray-900"
										>
											Mobile
										</label>
										<input
											type="tel"
											name="mobile"
											id="mobile"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.mobile}
											className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
										/>
										<ErrorMessage
											name="mobile"
											component="div"
											className="text-red-500 text-sm"
										/>
									</div>
									<div>
										<label
											htmlFor="mname"
											className="block text-gray-900"
										>
											Address
										</label>
										<input
											type="text"
											name="address"
											id="name"
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
											htmlFor="parent_address"
											className="block text-gray-900"
										>
											Parent Address
										</label>
										<input
											type="text"
											name="parent_address"
											id="parent_address"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.parent_address}
											className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
										/>
										<ErrorMessage
											name="parent_address"
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
											type="text"
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

								<h1 className="text-gray-800 text-2xl font-bold mt-8 mb-3">
									School Details
								</h1>
								<hr className="my-2" />

								<div className="grid grid-cols-2">
									<div>
										<label
											htmlFor="previous_school"
											className="block text-gray-900"
										>
											Previous school
										</label>
										<input
											type="text"
											name="previous_school"
											id="previous_school"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.previous_school}
											className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
										/>
										<ErrorMessage
											name="previous_school"
											component="div"
											className="text-red-500 text-sm"
										/>
									</div>
									<div>
										<label
											htmlFor="address_school"
											className="block text-gray-900"
										>
											Address school
										</label>
										<input
											type="text"
											name="address_school"
											id="address_school"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.address_school}
											className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
										/>
										<ErrorMessage
											name="address_school"
											component="div"
											className="text-red-500 text-sm"
										/>
									</div>
								</div>

								<div className="my-3 flex justify-end">
									<button
										type="submit"
										className="px-5 py-2 rounded-full bg-teal-500 text-white shadow-sm hover:bg-teal-600"
									>
										Submit
									</button>
								</div>
							</form>
						);
					}}
				</Formik>
			</div>
		</>
	);
}

export default AddStudent;
