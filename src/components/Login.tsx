const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-700">
          Log in
        </h1>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="email"
              id="userName"
              name="userName"
              required
              placeholder="Enter your email"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
