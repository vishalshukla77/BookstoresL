import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuth } from '../context/Addcontext'; // 🔁 Update path as per your project

function Register() {
  const [message, setMessage] = useState("");
  const { registerUser } = useAuth(); // ✅ useAuth hook

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await registerUser(data.email, data.password); // ✅ fixed password access
      alert("User registered successfully");
      reset(); // ✅ clear the form
    } catch (error) {
      setMessage(error.message || "Registration failed");
    }
  };

  const handlegoogle = () => {
    // Google Auth logic (implement this in your AuthProvider)
    console.log("Google Signup triggered");
  };

  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
      <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-xl font-semibold mb-4'>Please Register</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
              Email
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              id="email"
              placeholder='Email Address'
              className='shadow appearance-none border rounded w-full py-2 px-2 leading-tight focus:outline-none focus:shadow'
            />
            {errors.email && (
              <p className='text-red-500 text-xs italic'>{errors.email.message}</p>
            )}
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
              Password
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              id="password"
              placeholder='Password'
              className='shadow appearance-none border rounded w-full py-2 px-2 leading-tight focus:outline-none focus:shadow'
            />
            {errors.password && (
              <p className='text-red-500 text-xs italic'>{errors.password.message}</p>
            )}
          </div>

          {message && (
            <p className='text-red-500 text-sm mb-2 font-medium'>{message}</p>
          )}

          <div>
            <button
              type="submit"
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 py-2 rounded focus:outline-none'>
              Register
            </button>
          </div>
        </form>

        <p className='text-sm font-medium mt-4'>
          Already have an account?{" "}
          <Link to="/login" className='text-blue-500 hover:underline'>Login</Link>
        </p>

        <div className='mt-4'>
          <button
            onClick={handlegoogle}
            className='w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none'>
            <FaGoogle />
            Sign up with Google
          </button>
        </div>

        <p className='mt-5 text-center text-gray-500 text-sm'>
          © 2025 Book Store. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Register;
