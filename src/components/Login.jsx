import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
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
    <div className="auth-bg">
      <div className="auth-card">
        <div className="auth-logo">
          <img src="https://cdn-icons-png.flaticon.com/512/11284/11284777.png" alt="login-icon" className="w-20 h-20 object-contain" />
        </div>
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-sub">Don't have an account?&nbsp;<Link to="/signup" className="text-[var(--primary-700)] font-medium">Sign Up</Link></p>
        {error && <p className="text-red-600 mt-2 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-4">
          <div className="space-y-4">
            <input placeholder="Email" className="auth-input" type="email" {...register("email", { required: true })} />
            <input placeholder="Password" className="auth-input" type="password" {...register("password", { required: true })} />
            <button type="submit" className="auth-cta">Sign in</button>
            <div className="auth-ghost">By signing in you agree to our terms.</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
