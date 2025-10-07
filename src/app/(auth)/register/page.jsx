"use client";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import { createUser } from "@/server/userQuery/user";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
export default function RegisterPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const location = searchParams.get("redirect") || "/";
  const { user, userRegistrationSystem, googleAuthSystem } = useAuth();
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

  const signInWithGoogle = async () => {
    try {
      const result = await googleAuthSystem();
       const loggedUser = result.user;
        console.log(loggedUser);
        const userInfo = {
          name: loggedUser.displayName,
          email: loggedUser.email,
          photo: loggedUser.photoURL,
          role: "user",
        }
        await createUser(userInfo);
        router.push(location);
        toast.success("Login successful");
    } catch (error) {
      console.error("Google sign-in failed:", error);
      toast.error("This email already exists into Database.");
      router.push(location);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-register">
      <div className="border-2 border-black backdrop-blur-xs p-5 lg:w-[450px]  shadow-lg ">
        <h2 className="text-2xl text-black font-bold mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-2">

          {/* name */}
          <label className="text-gray-700 font-semibold">Name</label>
          <input type="text" className="bg-black p-3" placeholder="Name" {...register("name", { required: true })} />
          {errors.name && <span className="text-red-500">This field is required</span>}

          {/* email */}
          <label className="text-gray-700 font-semibold">Email</label>
          <input type="email" className="bg-black p-3" placeholder="Email" {...register("email", { required: true })} />
          {errors.email && <span className="text-red-500">This field is required</span>}

          {/* profilePic */}
          <label className="text-gray-700 font-semibold">Profile Pic url</label>
          <input type="url" className="bg-black p-3" placeholder="Profile Pic url" {...register("profilePic", { required: true })} />
          {errors.profilePic && <span className="text-red-500">This field is required</span>}

          {/* password */}
          <label className="text-gray-700 font-semibold">Password</label>
          <input type="password" className="bg-black p-3" placeholder="Password" {...register("password", { required: true })} />
          {errors.password && <span className="text-red-500">This field is required</span>}

          <button type="submit" className=" cursor-pointer  bg-black text-white  p-3 mt-4">Register</button>
        </form>
        <hr className="border border-white mt-5" />
        <div className="mt-4 *:flex *:justify-center">
          <p className="text-gray-700 text-lg">Already have an account? <Link href="/login" className="text-red-500 underline hover:text-red-600 ml-2  transition">Login</Link></p>
        </div>
        {/* Google login */}
        <div className="mt-4 *:flex *:justify-center">
          <Button onClick={() => signInWithGoogle()} className="w-full rounded-none py-6 bg-black text-white border-none text-lg cursor-pointer" >
            <FaGoogle size={24} /> Login with Google
          </Button>

        </div>
      </div>
    </div>
  );
}
