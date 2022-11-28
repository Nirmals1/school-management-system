import React from "react";
import { number, string } from "yup";
import AdminLayout from "../../../Layouts/AdminLayout";

const AddGrade = () => {
  const gradeschema=object({
    gradeid:number().required(),
    gradename:string().required(),
  })
  return (
    <div>
      <AdminLayout>
        <h1 className="text-gray-800 text-2xl font-bold mt-8 mb-3 ">
          Grade Details
        </h1>
        <hr className="my-2" />
        <form>
          <div className="grid grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-gray-900">
                Grade id
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="rounded-md shadow-md border border-gray-300 hover:border-gray-400 px-4 my-2 py-2"
              />
              <label htmlFor="mname" className="block text-gray-900">
                Grade Name
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
      </AdminLayout>
    </div>
  );
};

export default AddGrade;
