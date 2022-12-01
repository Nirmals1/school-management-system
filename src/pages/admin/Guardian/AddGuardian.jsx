import React from 'react'
import AdminLayout from '../../../Layouts/AdminLayout'
import { Formik } from 'formik'
import{string, object,} from 'yup'



const AddGuardian = () => {
const addguardianschema=object({
  fathername: string().required(),
  mothername: string().required(),
  phone:string().required(),




})




  return (
		<div>
			<h1 className="text-gray-800 text-2xl font-bold mt-8 mb-3 ">
				Guardian Details
			</h1>
			<hr className="my-2" />
			<form>
				<div className="grid grid-cols-2">
					<div>
						<label htmlFor="name" className="block text-gray-900">
							Father's Name
						</label>
						<input
							type="text"
							name="name"
							id="name"
							className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
						/>
						<label htmlFor="mname" className="block text-gray-900">
							Mother's Name
						</label>
						<input
							type="text"
							name="name"
							id="name"
							className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
						/>
						<label htmlFor="mname" className="block text-gray-900">
							Phone Number
						</label>
						<input
							type="text"
							name="name"
							id="name"
							className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
						/>
						<div className="my-3 flex justify-end">
							<button className="px-5 py-2 rounded-full bg-teal-500 text-white shadow-sm hover:bg-teal-600">
								Submit
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
  );
}

export default AddGuardian