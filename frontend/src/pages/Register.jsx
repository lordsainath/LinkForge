import React from "react";
import Logo from "../components/ui/Logo";
import { Link } from "react-router-dom";

const Register = () => {
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
          <h1 className="text-2xl font-semibold">Create your account</h1>
          <p className="text-gray-600">Start shortening links in seconds</p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Full Name */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="
                  w-full px-4 py-3 rounded-lg
                  border border-gray-200 bg-gray-50
                  text-gray-900 placeholder-gray-400
                  focus:outline-none focus:ring-2
                  focus:ring-blue-500 focus:border-blue-500
                "
            />
          </div>

          {/* Email */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
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
              type="password"
              name="password"
              placeholder="••••••••"
              className="
                  w-full px-4 py-3 rounded-lg
                  border border-gray-200 bg-gray-50
                  text-gray-900 placeholder-gray-400
                  focus:outline-none focus:ring-2
                  focus:ring-blue-500 focus:border-blue-500
                "
            />
            <span className="text-xs text-gray-500">
              Must be at least 8 characters
            </span>
          </div>

          {/* Button */}
          <button
            className="
                w-full text-white cursor-pointer px-5 py-3 rounded-lg
                bg-gradient-to-r from-blue-500 to-teal-400
                hover:from-blue-600 hover:to-teal-500
                transition
              "
          >
            Create Account
          </button>

          {/* Login */}
          <div className="text-center text-sm">
            <span>
              Already have an account?{" "}
              <Link to="/login" className="text-[#275bfe]">
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
