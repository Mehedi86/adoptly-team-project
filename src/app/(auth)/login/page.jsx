"use client";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {useForm} from "react-hook-form"
import toast from "react-hot-toast";
export default function LoginPage() {
  const { userLoginSystem } = useAuth();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const location = searchParams.get("redirect") || "/";

  const onSubmit = (data) => {
    userLoginSystem(data?.email, data?.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success("Login successful");
        router.push(location);

      });
  }

  return (
   <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="bg-orange-300 p-5 lg:w-[450px]  shadow-lg ">
      <h2 className="text-2xl text-black font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-2">

         {/* email */} 
          <label className="text-black font-semibold">Email</label>
          <input type="email" className="bg-black p-3" placeholder="Email" {...register("email", { required: true })} />
          {errors.email && <span className="text-red-500">This field is required</span>}

          {/* password */}
        <label className="text-black font-semibold">Password</label>
        <input type="password" className="bg-black p-3" placeholder="Password" {...register("password", { required: true })} />
        {errors.password && <span className="text-red-500">This field is required</span>}

        <button type="submit" className=" cursor-pointer  bg-black text-white  p-3 mt-4">Login</button>
        </form>
        <hr  className="border border-white mt-5"/>
        <div className="mt-4 *:flex *:justify-center">
        <p className="text-black text-lg">Don't have an account? <Link href="/register" className="text-red-500 underline hover:text-red-600 ml-2   transition">Register</Link></p>
        </div>
    </div>
    </div>
  );
}
