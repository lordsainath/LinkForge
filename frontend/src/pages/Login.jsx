import React from "react";
import Logo from "../components/ui/Logo";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      {/* Page wrapper */}

      <div className="w-full max-w-md mx-auto space-y-6 bg-white rounded-xl shadow-sm px-6 py-8">
        {/* Logo */}
        <div className="flex justify-center">
          <Logo />
        </div>

        {/* Heading */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-semibold">Welcome back</h1>
          <p className="text-gray-600">Login to your LinkForge account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              required
              {...register("email")}
              placeholder="you@example.com"
              className="
                  w-full px-4 py-3 rounded-lg
                  border border-gray-200 bg-gray-50
                  text-gray-900 placeholder-gray-400
                  focus:outline-none focus:ring-2
                  focus:ring-blue-500 focus:border-blue-500
                "
            />
          </div>

          {/* Password */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              placeholder="••••••••"
              {...register("password")}
              className="
                  w-full px-4 py-3 rounded-lg
                  border border-gray-200 bg-gray-50
                  text-gray-900 placeholder-gray-400
                  focus:outline-none focus:ring-2
                  focus:ring-blue-500 focus:border-blue-500
                "
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="
                w-full text-white cursor-pointer px-5 py-3 rounded-lg
                bg-linear-to-r from-blue-500 to-teal-400
                hover:from-blue-600 hover:to-teal-500
                transition
              "
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>

          {/* Register link */}
          <div className="text-center text-sm">
            <span>
              Don’t have an account?{" "}
              <Link to="/register" className="text-[#275bfe]">
                Create one
              </Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
