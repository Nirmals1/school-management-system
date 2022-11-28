import React from 'react'
import AdminLayout from '../../../Layouts/AdminLayout'
import { Formik } from 'formik'
import {object,string, number,date} from 'yup'


const AddTeacher = () => {
  const teacherschema=object({
    firstname: string().required(),
  middlename:string().nullable(),
  age: number().required('Please Provide Your Age'),
  phone:number().required(),
  address:string().required(),
  email: string().required().email(),
gender:string().required(),
dob: number().required(),
bankaccount: number().required(),
qualification:string().required(),
pan: number().required(),
nationality:string().required(),
religion:string().required(),
ethnicity:string().required(), 


});
  return (
    <div>
      <AdminLayout>
      <div>
          <h1 className="text-gray-800 text-2xl font-bold ">
            Teacher Details
          </h1>
          <hr className="my-2" />
          
          <form action="">
            <div className="grid md:grid-cols-3">
              <div>
                <label htmlFor="name" className="block text-gray-900">
                  First Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-gray-900">
                  Middle Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-gray-900">
                  LastName
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
                />
              </div>
            </div>
          </form>
        </div>
        <div>
          <div>
            <div className="grid grid-cols-3">
              <div>
                <label htmlFor="name" className="block text-gray-900">
                  Age
                </label>
                <input
                  type="number"
                  name="name"
                  id="name"
                  className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-gray-900">
                  Phone
                </label>
                <input
                  type="phone"
                  name="name"
                  id="name"
                  className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-gray-900">
                  Address
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div>
              <label htmlFor="name" className="block text-gray-900">
                Email
              </label>
              <input
                type="number"
                name="name"
                id="name"
                className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
              />
            </div>
            <div className="">
              <label htmlFor="name" className="block text-gray-900 py-3">
                Gender
              </label>
              <input type="radio" defaultValue="Male" name="gender" />{" "}
              <span className="px-2">Male</span>
              <input type="radio" defaultValue="Female" name="gender" />{" "}
              <span className="px-2">Female</span>
              <input type="radio" defaultValue="Other" name="gender" /> Other
            </div>
            <div>
              <label htmlFor="name" className="block text-gray-900">
                Date of birth
              </label>
              <input
                type="date"
                name="name"
                id="name"
                className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3">
            <div>
              <label htmlFor="name" className="block text-gray-900">
                Bank Account No.
              </label>
              <input
                type="number"
                name="name"
                id="name"
                className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-gray-900">
                Qualification
              </label>
              <input
                type="number"
                name="name"
                id="name"
                className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
              />
            </div><div>
              <label htmlFor="name" className="block text-gray-900">
                PAN NO.
              </label>
              <input
                type="number"
                name="name"
                id="name"
                className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
              />
            </div>
            </div>

          <div className="grid grid-cols-3">
            <div>
              <label htmlFor="name" className="block">
                Nationality
              </label>
              <select
                id="inputState"
                className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
              >
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div>
            <div>
              <label htmlFor="name" className="block">
                Religion
              </label>
              <select
                id="inputState"
                className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
              >
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            </div>
            <div>
            <div>
              <label htmlFor="name" className="block">
                Ethnicity
              </label>
              <select
                id="inputState"
                className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
              >
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="my-3 flex justify-end">
            <button className="px-5 py-2 rounded-full bg-teal-500 text-white shadow-sm hover:bg-teal-600">
              Submit
            </button>
          </div>
            
            </div>
          </div>
        </div>
      </AdminLayout>
    </div>
  )
}

export default AddTeacher