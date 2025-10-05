"use client";
import useAuth from "@/hooks/useAuth";
import { createUser } from "@/server/user";
import Link from "next/link";
import { useForm} from "react-hook-form"
import toast from "react-hot-toast";
export default function RegisterPage() {
  const { user, userRegistrationSystem } = useAuth();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      photo: data.profilePic,
      role: "user",
    }
    console.log(userInfo);
    userRegistrationSystem(data?.email, data?.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        // update user profile
        // save user to database
        createUser(userInfo);
        toast.success("User registered successfully!");
        
      });
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="bg-orange-300 p-5 lg:w-[450px]  shadow-lg ">
      <h2 className="text-2xl text-black font-bold mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-2">
          
        {/* name */}  
        <label className="text-black font-semibold">Name</label>
          <input type="text" className="bg-black p-3" placeholder="Name" {...register("name", { required: true })} />
           {errors.name && <span className="text-red-500">This field is required</span>}
          
          {/* email */} 
          <label className="text-black font-semibold">Email</label>
          <input type="email" className="bg-black p-3" placeholder="Email" {...register("email", { required: true })} />
          {errors.email && <span className="text-red-500">This field is required</span>}

          {/* profilePic */}
        <label className="text-black font-semibold">Profile Pic url</label>
        <input type="url" className="bg-black p-3" placeholder="Profile Pic url" {...register("profilePic", { required: true })} />
          {errors.profilePic && <span className="text-red-500">This field is required</span>}

          {/* password */}
        <label className="text-black font-semibold">Password</label>
        <input type="password" className="bg-black p-3" placeholder="Password" {...register("password", { required: true })} />
        {errors.password && <span className="text-red-500">This field is required</span>}

        <button type="submit" className=" cursor-pointer  bg-black text-white  p-3 mt-4">Register</button>
        </form>
        <hr  className="border border-white mt-5"/>
        <div className="mt-4 *:flex *:justify-center">
        <p className="text-black text-lg">Already have an account? <Link href="/login" className="text-red-500 underline hover:text-red-600 ml-2  transition">Login</Link></p>
        </div>
    </div>
    </div>
  );
}
