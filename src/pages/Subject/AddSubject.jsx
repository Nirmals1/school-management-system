import React from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import { ErrorMessage,Formik } from "formik";
import { string, number, object } from "yup";
import axiosInstance from "../../apiConfigs/axiosInstance";

const AddSubject = () => {
  const subjectschema = object({
    subjectid: string().required(),
    subjectname: string().required(),
    fullmarkth: number().required(),
    passmarkth: number().required(),
    fullmarkpr: number().required(),
    passmarkpr: number().required(),
  });
  return (
    <div>
      <h1 className="text-gray-800 text-2xl font-bold mt-8 mb-3 ">
        Subject Details
      </h1>
      <hr className="my-2" />
      <Formik
        initialValues={{
          subjectid: "",
          subjectname: "",
          fullmarkth: "",
          passmarkth: "",
          fullmarkpr: "",
          passmarkpr: "",
        }}
        validationSchema={subjectschema}
        onSubmit={(values) => {
          console.log(values);
          // console.log("demo");
          axiosInstance.post("/subjects/store", values).then((res) => {
            alert("added");
            navigate("/subjects");
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
            <div className="grid grid-cols-2 ">
              <div>
                <label htmlFor="subjectid" className="block text-gray-900">
                  Subject ID
                </label>
                <input
                  type="text"
                  name="subjectid"
                  id="subjectid"
                  onChange={handleChange}
											onBlur={handleBlur}
											value={values.subjectid}
                  className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
                />
                <ErrorMessage
                  name="subjectid"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="subjectname" className="block text-gray-900">
                  Subject Name
                </label>
                <input
                  type="text"
                  name="subjectname"
                  id="subjectname"
                  onChange={handleChange}
											onBlur={handleBlur}
											value={values.subjectname}
                  className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
                />
                <ErrorMessage
                  name="subjectname"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="fullmarkth" className="block text-gray-900">
                  Full Mark TH
                </label>
                <input
                  type="text"
                  name="fullmarkth"
                  id="fullmarkth"
                  onChange={handleChange}
											onBlur={handleBlur}
											value={values.fullmarkth}
                  className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
                />
                <ErrorMessage
                  name="fullmarkth"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="passmarkth" className="block text-gray-900">
                  Pass Mark TH
                </label>
                <input
                  type="text"
                  name="passmarkth"
                  id="passmarkth"
                  onChange={handleChange}
											onBlur={handleBlur}
											value={values.passmarkth}
                  className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
                />
                <ErrorMessage
                  name="passmarkth"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="fullmarkpr" className="block text-gray-900">
                  Full Mark PR
                </label>
                <input
                  type="text"
                  name="fullmarkpr"
                  id="fullmarkpr"
                  onChange={handleChange}
											onBlur={handleBlur}
											value={values.fullmarkpr}
                  className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
                />
                <ErrorMessage
                  name="fullmarkpr"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="passmarkpr" className="block text-gray-900">
                  Pass Mark PR
                </label>
                <input
                  type="text"
                  name="passmarkpr"
                  id="passmarkpr"
                  onChange={handleChange}
											onBlur={handleBlur}
											value={values.passmarkpr}
                  className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
                />
                <ErrorMessage
                  name="passmarkpr"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="my-3 flex justify-end">
                <button className="px-5 py-2 rounded-full bg-teal-500 text-white shadow-sm hover:bg-teal-600">
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddSubject;
