import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

// function Signup() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [error, setError] = useState("");
//   const { register, handleSubmit } = useForm();

//   const create = async (data) => {
//     setError("");
//     try {
//       const userData = await authservice.createAccount(data);
//       if (userData) {
//         const userData = await authservice.getCurrentUser();
//         if (userData) {
//           dispatch(login(userData));
//           navigate("/");
//         }
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center">
//       <div
//         className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
//       >
//         <div className="mb-2 flex justify-center">
//           <span className="inline-block w-full max-w-[100px]">
//             <Logo width="100%" />
//           </span>
//         </div>
//         <h2 className="text-center text-2xl font-bold leading-tight">
//           Sign up to create account
//         </h2>
//         <p className="mt-2 text-center text-base text-black/60">
//           Already have an account?&nbsp;
//           <Link
//             to="/login"
//             className="font-medium text-primary transition-all duration-200 hover:underline"
//           >
//             Sign In
//           </Link>
//         </p>
//         {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

//         <form onSubmit={handleSubmit(create)}>
//           <div className="space-y-5">
//             <Input
//               label="Full Name: "
//               placeholder="Enter your full name"
//               {...register("name", {
//                 required: true,
//               })}
//             />
//             <Input
//               label="Email: "
//               placeholder="Enter your email"
//               type="email"
//               {...register("email", {
//                 required: true,
//                 validate: {
//                   matchPatern: (value) =>
//                     /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
//                     "Email address must be a valid address",
//                 },
//               })}
//             />
//             <Input
//               label="Password: "
//               type="password"
//               placeholder="Enter your password"
//               {...register("password", {
//                 required: true,
//               })}
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <div className="auth-logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/11284/11284777.png"
            alt="signup-icon"
            className="w-20 h-20 object-contain"
          />
        </div>
        <h2 className="auth-title">Create Account</h2>
        <p className="auth-sub">Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-500 mt-3 text-center text-sm font-medium bg-red-50 px-4 py-2 rounded-lg">{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-4">
            <input
              placeholder="Enter your full name"
              className="auth-input"
              type="text"
              {...register("name", { required: true })}
            />
            <input
              placeholder="Enter your email"
              className="auth-input"
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
            <input
              placeholder="Enter your password"
              className="auth-input"
              type="password"
              {...register("password", { required: true })}
            />
            <button type="submit" className="auth-cta">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
