"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
   <div className="flex items-center justify-center min-h-screen">
      <div className="bg-orange-400 p-3 lg:w-96 rounded-xl shadow-lg ">
      <h2 className="text-2xl text-black font-bold mb-4 text-center">Register</h2>
      <form className=" flex flex-col gap-2">

        <label className="text-black font-semibold">Email</label>
        <input type="email" className="bg-black p-3" placeholder="Email" />

        <label className="text-black font-semibold">Password</label>
        <input type="password" className="bg-black p-3" placeholder="Password" />

        <button type="submit" className=" cursor-pointer  bg-black text-white  p-3 mt-4">Register</button>
        </form>
        <hr  className="border border-white mt-5"/>
        <div className="mt-4 *:flex *:justify-center">
        <p className="text-black text-lg">Already have an account? <Link href="/login" className="text-white underline hover:text-red-500 ml-2  transition">Login</Link></p>
        </div>
    </div>
    </div>
  );
}
