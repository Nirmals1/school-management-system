import React from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import { ErrorMessage,Formik } from "formik";
import { string, number, object } from "yup";
import axiosInstance from "../../apiConfigs/axiosInstance";

const AddSubject = () => {
  const subjectschema = object({
    code: string().required(),
    name: string().required(),
    fullmarks_th: number().required(),
    passmarks_th: number().required(),
    fullmarks_pr: number().required(),
    passmarks_pr: number().required(),
    grade_id: number().required(),
    category_id: number().required(),
    teacher_id: number().required(),
  });
  return (
    <div>
      <h1 className="text-gray-800 text-2xl font-bold mt-8 mb-3 ">
        Subject Details
      </h1>
      <hr className="my-2" />
      <Formik
        initialValues={{
          code: "",
          name: "",
          fullmarks_th: "",
          passmarks_th: "",
          fullmarks_pr: "",
          passmarks_pr: "",
          grade_id: "",
          category_id: "",
          teacher_id: "",
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
                <label htmlFor="code" className="block text-gray-900">
                  Subject Code
                </label>
                <input
                  type="text"
                  name="code"
                  id="code"
                  onChange={handleChange}
											onBlur={handleBlur}
											value={values.code}
                  className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
                />
                <ErrorMessage
                  name="code"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-gray-900">
                  Subject Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChange}
											onBlur={handleBlur}
											value={values.name}
                  className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="fullmarks_th" className="block text-gray-900">
                  Full Mark TH
                </label>
                <input
                  type="text"
                  name="fullmarks_th"
                  id="fullmarks_th"
                  onChange={handleChange}
											onBlur={handleBlur}
											value={values.fullmarks_th}
                  className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
                />
                <ErrorMessage
                  name="fullmarks_th"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="passmarks_th" className="block text-gray-900">
                  Pass Mark TH
                </label>
                <input
                  type="text"
                  name="passmarks_th"
                  id="passmarks_th"
                  onChange={handleChange}
											onBlur={handleBlur}
											value={values.passmarks_th}
                  className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
                />
                <ErrorMessage
                  name="passmarks_th"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="fullmarks_pr" className="block text-gray-900">
                  Full Mark PR
                </label>
                <input
                  type="text"
                  name="fullmarks_pr"
                  id="fullmarks_pr"
                  onChange={handleChange}
											onBlur={handleBlur}
											value={values.fullmarks_pr}
                  className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
                />
                <ErrorMessage
                  name="fullmarks_pr"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="passmarks_pr" className="block text-gray-900">
                  Pass Mark PR
                </label>
                <input
                  type="text"
                  name="passmarks_pr"
                  id="passmarks_pr"
                  onChange={handleChange}
											onBlur={handleBlur}
											value={values.passmarks_pr}
                  className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
                />
                <ErrorMessage
                  name="passmarks_pr"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="passmarks_pr" className="block text-gray-900">
                  Category
                </label>
                <select
                  type="text"
                  name="category_id"
                  id="category_id"
                  onChange={handleChange}
											onBlur={handleBlur}
											value={values.category_id}
                  className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
                >
                  <option value="">Select Grade</option>
                </select>
                <ErrorMessage
                  name="category_id"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="passmarks_pr" className="block text-gray-900">
                  Grade
                </label>
                <select
                  type="text"
                  name="grade_id"
                  id="grade_id"
                  onChange={handleChange}
											onBlur={handleBlur}
											value={values.grade_id}
                  className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
                >
                  <option value="">Select Grade</option>
                </select>
                <ErrorMessage
                  name="grade_id"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="passmarks_pr" className="block text-gray-900">
                  Teacher
                </label>
                <select
                  type="text"
                  name="teacher_id"
                  id="teacher_id"
                  onChange={handleChange}
											onBlur={handleBlur}
											value={values.teacher_id}
                  className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
                >
                  <option value="">Select Grade</option>
                </select>
                <ErrorMessage
                  name="teacher_id"
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
