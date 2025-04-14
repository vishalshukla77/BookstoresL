import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuth } from '../context/Addcontext';
import AdminLogin from './AdminLogin';
// import { AdminLogin } from "../components/AdminLogin"; // ✅ Update path if needed

function Login() {
  const [message, setMessage] = useState("");
  const [isAdmin, setIsAdmin] = useState(false); // 👈 Toggle for admin login
  const navigate = useNavigate();
  const { loginuser, signInWithgoogle } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await loginuser(data.email, data.password);
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      setMessage(error.message || "Login failed");
    }
  };

  const handlegoogle = async () => {
    try {
      await signInWithgoogle();
      alert("Logged in with Google");
      navigate("/");
    } catch (error) {
      setMessage(error.message || "Google Login failed");
    }
  };

  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
      <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        
        {/* Heading + Toggle */}
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-semibold'>
            {isAdmin ? 'Admin Login' : 'Please Login'}
          </h2>
          <button
            onClick={() => setIsAdmin(!isAdmin)}
            className='text-blue-500 text-sm hover:underline'>
            {isAdmin ? 'User Login?' : 'Admin Login?'}
          </button>
        </div>

        {/* Render based on isAdmin */}
        {isAdmin ? (
          <AdminLogin />
        ) : (
          <>
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
                  Login
                </button>
              </div>
            </form>

            <p className='text-sm font-medium mt-4'>
              Haven't an account? Please{" "}
              <Link to="/register" className='text-blue-500 hover:underline'>Register</Link>
            </p>

            <div className='mt-4'>
              <button
                onClick={handlegoogle}
                className='w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none'>
                <FaGoogle />
                Login with Google
              </button>
            </div>
          </>
        )}

        <p className='mt-5 text-center text-gray-500 text-sm'>
          © 2025 Book Store. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Login;
