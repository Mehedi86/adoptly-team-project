"use client";

import { Suspense, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import { createUser } from "@/server/userQuery/user";

// 🧩 Separate inner component so we can wrap with Suspense
function LoginContent() {
  const { userLoginSystem, googleAuthSystem, loading, setLoading } = useAuth();
  // const searchParams = useSearchParams();
  // const location = searchParams.get("redirect") || "/";
  const [location, setLocation] = useState("/");
  const router = useRouter();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setLocation(params.get("redirect") || "/");
  }, []);



  const { register, handleSubmit, formState: { errors } } = useForm();


  // 🔐 Email/password login
  const onSubmit = async(data) => {
    const result = await userLoginSystem(data?.email, data?.password);
    try {
      if (result.user) {
        toast.success('user login successful')
        router.push(location)
      }
    } catch (error) {
      console.log('from login page', error);
         toast.error("Invalid email or password")
    setLoading(false)  
    }
  };

  // 🔑 Google login
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
      // toast.error("This email may already exist in the database.");
      router.push(location);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-login px-4">
      <div className="backdrop-blur-xs bg-black/20 border-2 border-[#E76F51] p-5 w-full max-w-md shadow-lg rounded-lg ">
        <h2 className="text-2xl text-white/80 dark:text-muted-foreground font-bold mb-4 text-center">Login</h2>

        {/* 🧾 Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <label className="dark:text-muted-foreground text-white/80  font-semibold">Email</label>
          <input
            type="email"
            className="bg-white/65 text-black dark:bg-black dark:placeholder-muted-foreground p-3 rounded-md"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="text-red-500">Email is required</span>}

          <label className=" dark:text-muted-foreground text-white/80 font-semibold">Password</label>

          <input
            type="password"
            className="bg-white/65 text-black dark:bg-black dark:placeholder-muted-foreground p-3 rounded-md"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && <span className="text-red-500">Password is required</span>}

          <button
            type="submit"
            className="bg-white/65 text-black dark:bg-black dark:text-muted-foreground  py-3 rounded-md mt-3 cursor-pointer transition"
          >
          {  loading ?'Processing...': 'Login'}
          </button>
        </form>

        <hr className="border border-gray-300 mt-6" />

        <p className=" text-lg text-center mt-4  text-white/80  darK:text-muted-foreground ">
          Don&apos;t have an account?
          <Link href="/register" className="text-red-500 underline ml-2 hover:text-red-600">
            Register
          </Link>
        </p>

        {/* 🧭 Google Login */}
        <div className="mt-5 flex justify-center">
          <Button
            onClick={signInWithGoogle}
            className="w-full rounded-md py-4 bg-white/65 text-black dark:bg-black dark:text-muted-foreground items-center justify-center gap-2 hover:bg-gray-900 hover:text-white cursor-pointer transition"
          >
            <FaGoogle size={22} /> Login with Google
          </Button>
        </div>
      </div>
    </div>
  );
}

// 🌀 Main Export (Suspense Wrapper)
export default function LoginPage() {
  return (
    <Suspense fallback={<p className="text-center py-10 text-gray-600">Loading login...</p>}>
      <LoginContent />
    </Suspense>
  );
}
