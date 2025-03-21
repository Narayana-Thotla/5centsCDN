"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import React from "react";
import { useState } from "react";
const Signup = () => {
  const [loading, setloading] = useState(false);
  // const { setauthUser } = UseAuthContext();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("jwt-5centCDN");

    if (token) {
      // console.log("JWT Token:", token);
      router.push("/dashboard");
    } else {
      router.push("/");
      alert("Unauthorized , please Login!!");
      // console.log("No token found in localStorage");
    }
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // console.log(formData);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      alert("fill empty fields");
      // toast.error("fill empty fields");
      return false;
    }
    if (formData.password.length < 6) {
      // toast.error("Password should > 6 characters");
      alert("password should > 6 characters");
      return false;
    }

    try {
      setloading(true);

      // Call the API to get the JWT token
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }

      // Store the JWT token in localStorage
      localStorage.setItem("jwt-5centCDN", data.token);
      router.push("/dashboard");
    } catch (error: any) {
      alert("catch" + error.message);
      // toast.error(error.message);
    } finally {
      // setloading(false);
    }
  };

  return (
    //
    <div className="text-white flex justify-center  ">
      <div className="mt-7 w-[35%] h-[40vw]  glass-effect bg-slate-800 rounded-lg ">
        <h1 className="mb-2 mt-20  text-center text-2xl font-bold text-gray-300 capitalize lg:text-3xl dark:text-white">
          Login In
        </h1>
        <div className="flex justify-center ">
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-left mb-2 text-sm text-gray-200 dark:text-gray-200"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                id="email"
                onChange={handleChange}
                placeholder="Enter Email"
                className="block w-72 px-4 py-2 mb-2 text-gray-300 placeholder-gray-400 bg-gray-800 border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900  dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 "
              />
            </div>

            <div className="mt-2">
              <div className="flex justify-between mb-2">
                <label
                  htmlFor="password"
                  className="text-sm text-gray-200 dark:text-gray-200"
                >
                  Password
                </label>
              </div>

              <input
                type="password"
                name="password"
                value={formData.password}
                id="password"
                onChange={handleChange}
                placeholder="Enter Password"
                className="block w-72 px-4 py-2 mt-2 text-gray-300 placeholder-gray-400 bg-gray-800 border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-72 px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 flex justify-center items-center"
              >
                {!loading ? (
                  <p>Log In</p>
                ) : (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
