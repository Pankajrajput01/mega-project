import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authslice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authservice from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authservice.login(data);
      if (session) {
        const userData = await authservice.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      } else {
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-100">
      <div
        className={`mx-auto w-full max-w-lg bg-white rounded-2xl p-10 border border-gray-200 shadow-lg`}
      >
        <div className="mb-6 flex justify-center">
          <span className="inline-block w-full max-w-[120px] transition-transform hover:scale-105">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-3xl font-bold leading-tight text-gray-900 mb-2">
          Welcome Back
        </h2>
        <p className="mt-2 text-center text-base text-gray-600 mb-8">
          Don&apos;t have an account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <input
              lable="Email: "
              placeholder="enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              lable="Password: "
              placeholder="enter your Password"
              type="password"
              {...register("password", {
                required: true,
              })}
            />
            <Button
            type="submit"
            className="w-full"
            >Sign in</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
