"use client";

import { Suspense, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import { createUser } from "@/server/userQuery/user";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

// 🧩 Inner component (we wrap with Suspense outside)
function RegisterContent() {
  // const searchParams = useSearchParams();
  // const location = searchParams.get("redirect") || "/";
   const [location, setLocation] = useState("/");
  const router = useRouter();
  const { userRegistrationSystem, googleAuthSystem } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setLocation(params.get("redirect") || "/");
  }, []);

  // 🧠 Handle email-password registration
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      photo: data.profilePic,
      role: "user",
    };

    try {
      const result = await userRegistrationSystem(data.email, data.password);
      if (result.user) {
        await createUser(userInfo);
        toast.success("User registered successfully!");
        router.push("/login");
      }
    } catch (err) {
      console.error(err);
      toast.error("Registration failed. Try again.");
    }
  };

  // 🔑 Google registration/login
  const signInWithGoogle = async () => {
    try {
      const result = await googleAuthSystem();
      const loggedUser = result.user;

      const userInfo = {
        name: loggedUser.displayName,
        email: loggedUser.email,
        photo: loggedUser.photoURL,
        role: "user",
      };

      await createUser(userInfo);
      toast.success("Login successful");
      router.push(location);
    } catch (error) {
      console.error("Google sign-in failed:", error);
      // toast.error("This email already exists in the database.");
      router.push(location);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-register py-12 px-4">
      <div className="border-2 border-black backdrop-blur-xs p-6 w-full max-w-md shadow-lg rounded-lg">
        <h2 className="text-2xl text-black font-bold mb-4 text-center">
          Create an Account
        </h2>

        {/* 🧾 Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          {/* Name */}
          <label className="text-gray-700 font-semibold">Full Name</label>
          <input
            type="text"
            className="bg-black text-white p-3 rounded-md"
            placeholder="Your Name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500">Name is required</span>
          )}

          {/* Email */}
          <label className="text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            className="bg-black text-white p-3 rounded-md"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}

          {/* Profile Pic */}
          <label className="text-gray-700 font-semibold">Profile Pic URL</label>
          <input
            type="url"
            className="bg-black text-white p-3 rounded-md"
            placeholder="Profile Pic URL"
            {...register("profilePic", { required: true })}
          />
          {errors.profilePic && (
            <span className="text-red-500">Profile pic URL is required</span>
          )}

          {/* Password */}
          <label className="text-gray-700 font-semibold">Password</label>
          <input
            type="password"
            className="bg-black text-white p-3 rounded-md"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500">Password is required</span>
          )}

          <button
            type="submit"
            className="bg-black text-white py-3 rounded-md mt-4 hover:bg-gray-900 transition"
          >
            Register
          </button>
        </form>

        <hr className="border border-gray-300 mt-6" />

        <p className="text-gray-700 text-lg text-center mt-4">
          Already have an account?
          <Link
            href="/login"
            className="text-red-500 underline hover:text-red-600 ml-2 transition"
          >
            Login
          </Link>
        </p>

        {/* 🔑 Google Login */}
        <div className="mt-5 flex justify-center">
          <Button
            onClick={signInWithGoogle}
            className="w-full rounded-md py-4 bg-black text-white text-lg flex items-center justify-center gap-2 hover:bg-gray-900 transition"
          >
            <FaGoogle size={22} /> Login with Google
          </Button>
        </div>
      </div>
    </div>
  );
}

// 🌀 Main Export — wrapped in Suspense
export default function RegisterPage() {
  return (
    <Suspense fallback={<p className="text-center py-10 text-gray-600">Loading register...</p>}>
      <RegisterContent />
    </Suspense>
  );
}
