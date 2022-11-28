import { Formik } from "formik";
import { string, object } from "yup";

function Login() {
  const loginSchema = object({
    email: string().required().email(),
    password: string().required(),
  });
  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Sign in
          </h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values) => {
              fetch("http://192.168.1.64:8000/api/login", {
                method: "POST",
                body: JSON.stringify(values),
              }).then((res) => {
                res.json().then((data) => {
                  console.log(data);
                });
              });
              console.log(values);
            }}
          >
            {({ values, errors, handleChange, handleSubmit }) => {
              return (
                <form className="mt-6" onSubmit={handleSubmit}>
                  <div className="mb-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      onChange={handleChange}
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  </div>
                  <a
                    href="#"
                    className="text-xs text-purple-600 hover:underline"
                  >
                    Forget Password?
                  </a>
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                    >
                      Login
                    </button>
                  </div>
                </form>
              );
            }}
          </Formik>
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <a href="#" className="font-medium text-purple-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
