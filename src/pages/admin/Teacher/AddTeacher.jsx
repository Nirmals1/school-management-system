import React from "react";
import AdminLayout from "../../../Layouts/AdminLayout";

import {ErrorMessage, Formik } from "formik";
import { object, string, number, date } from "yup";
import { useNavigate } from "react-router-dom";



const AddTeacher = () => {
  const navigate = useNavigate();
  const teacherschema = object({
    firstname: string().required(),
    middlename: string().nullable(),
    age: number().required("Please Provide Your Age"),
    phone: number().required(),
    address: string().required(),
    email: string().required().email(),
    gender: string().required(),
    dob: number().required(),
    bankaccount: number().required(),
    qualification: string().required(),
    pan: number().required(),
    nationality: string().required(),
    religion: string().required(),
    ethnicity: string().required(),
  });

return (
  <>
    <h1 className="text-gray-800 text-2xl font-bold ">Teacher Details</h1>
    <hr className="my-2" />
    <Formik
      initialValues={{
        firstname: "",
        middlename: "",
        age: "",
        phone: "",
        address: "",
        email: "",
        gender: "",
        dob: "",
        bankaccount: "",
        qualification: "",
        pan: "",
        nationality: "",
        religion: "",
        ethnicity: "",
      }}
      validationSchema={teacherschema}
      onSubmit={(values) => {
        console.log(values);
        // console.log("demo");
        axiosInstance.post("/teachers/store", values).then((res) => {
          alert("added");
          navigate("/teacher");
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
          <div className="grid md:grid-cols-3">
            <div>
              <label htmlFor="firstname" className="block text-gray-900">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                onChange={handleChange}
											onBlur={handleBlur} 
											value={values.firstname}
                className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
              />
              <ErrorMessage
                name="firstname"
                component="div"
                className="text-red-500 text-sm"
              />
              </div>
              <div>
               <label htmlFor="middlename" className="block text-gray-900">
              Middle Name
            </label>
            <input
              type="text"
              name="middlename"
              id="middlename"
              onChange={handleChange}
											onBlur={handleBlur}
											value={values.middlename}
              className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
            />
            <ErrorMessage
              name="middlename"
              component="div"
              className="text-red-500 text-sm"
            />
            </div>
            <div>
            <label htmlFor="age" className="block text-gray-900">
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
            

            
          </div>

          <div className="grid grid-cols-3">
            
              <div>
                <label htmlFor="phone" className="block text-gray-900">
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  onChange={handleChange}
											onBlur={handleBlur}
											value={values.phone}
                  className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm"
                />
                </div>
                
                <div>
                <label htmlFor="address" className="block text-gray-900">
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
                  <label htmlFor="email" className="block text-gray-900">
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
                  <label htmlFor="gender" className="block text-gray-900 py-3">
                    Gender
                  </label>
                  <input type="radio" defaultValue="Male" name="gender" />{" "}
                  <span className="px-2">Male</span>
                  <input
                    type="radio"
                    defaultValue="Female"
                    name="gender"
                  />{" "}
                  <span className="px-2">Female</span>
                  <input type="radio" defaultValue="Other" name="gender" />
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="text-red-500 text-sm"
                  />{" "}
                  Other
                </div>
                <div>
                  <label htmlFor="dob" className="block text-gray-900">
                    Date of birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
                  />
                  <ErrorMessage
                    name="dob"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="bankaccount" className="block text-gray-900">
                    Bank Account No.
                  </label>
                  <input
                    type="number"
                    name="bankaccount"
                    id="bankaccount"
                    className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
                  />
                  <ErrorMessage
                    name="bankaccount"
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
                    type="string"
                    name="qualification"
                    id="qualification"
                    className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
                  />
                  <ErrorMessage
                    name="qualification"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                <label htmlFor="pan" className="block text-gray-900">
                  PAN NO.
                </label>
                <input
                  type="number"
                  name="pan"
                  id="pan"
                  className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
                />
                <ErrorMessage
                  name="pan "
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
                    className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
                  >
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div>
                  <div>
                    <label htmlFor="religion" className="block">
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
                    <label htmlFor="ethnicity" className="block">
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
            
          
        </form>
      )}
    </Formik>
  </>
);
}
export default AddTeacher;
