"use client";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form"
import {FaGoogle} from "react-icons/fa"
import toast from "react-hot-toast";
import { createUser } from "@/server/user";
export default function LoginPage() {
  const { userLoginSystem, googleAuthSystem } = useAuth();
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


   const signInWithGoogle = () => {
      googleAuthSystem()
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          const userInfo = {
            name: loggedUser.displayName,
            email: loggedUser.email,
            photo: loggedUser.photoURL,
            role: "user",
          }
          createUser(userInfo);
          router.push(location);
          toast.success("Login successful");
        });
    }

  return (
   <div className="flex items-center justify-center min-h-screen bg-login ">
      <div className="backdrop-blur-xs border-2 border-black p-5 lg:w-[450px]  shadow-lg ">
      <h2 className="text-2xl text-black font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-2">

         {/* email */} 
          <label className="text-gray-800 font-semibold">Email</label>
          <input type="email" className="bg-black p-3" placeholder="Email" {...register("email", { required: true })} />
          {errors.email && <span className="text-red-500">This field is required</span>}

          {/* password */}
        <label className="text-gray-800 font-semibold">Password</label>
        <input type="password" className="bg-black p-3" placeholder="Password" {...register("password", { required: true })} />
        {errors.password && <span className="text-red-500">This field is required</span>}

        <button type="submit" className=" cursor-pointer  bg-black text-white  p-3 mt-4">Login</button>
        </form>
        <hr  className="border border-white mt-5"/>
        <div className="mt-4 *:flex *:justify-center">
        <p className="text-gray-800 text-lg">Don't have an account? <Link href="/register" className="text-red-500 underline hover:text-red-600 ml-2   transition">Register</Link></p>

          <div className="mt-4 *:flex *:justify-center">
            <Button onClick={() => signInWithGoogle()} className="w-full rounded-none py-6 bg-black text-white border-none text-lg" >
             <FaGoogle size={24}/> Login with Google
            </Button>

          </div>
        </div>
    </div>
    </div>
  );
}
