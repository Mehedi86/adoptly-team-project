'use client';

import React from 'react';
import { adminDataFetching } from '@/hooks/adminDataFetching/admin';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';
import Image from 'next/image';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { userDataFetching } from '@/hooks/userDataFetching/user';
import { axiosPublic } from '@/lib/axios/axios';
import useAuth from '@/hooks/useAuth';
import { cn } from '@/lib/utils';

// 🌀 Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const AllUserPage = () => {
  const { data: allUsers, isLoading, error ,refetch} = adminDataFetching.useUsers();
  const { user } = useAuth();
  console.log(user.email)

  if (isLoading)
    return (
      <p className="text-center py-10 text-gray-500 text-lg animate-pulse">
        Loading users...
      </p>
    );

  if (error)
    return (
      <p className="text-center py-10 text-red-500 text-lg">
        Failed to load users 😢
      </p>
    );
  
  const handleMakeAdmin = async (email) => {
    const { data } = await axiosPublic.patch(`/user/admin/${email}`)
    console.log(data?.data)
    refetch();
  }

  return (
    <section className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <FaUser className="text-orange-500" />
          All Registered Users
        </h1>
        <span className="text-gray-600 font-medium">
          Total Users: {allUsers?.length || 0}
        </span>
      </div>

      <div className=''>
         {/* Table */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-white shadow-lg rounded-2xl border border-gray-200 p-8 overflow-x-auto"
      >
        <Table>
          <TableCaption>A list of all registered users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[60px] text-black">#</TableHead>
              <TableHead className={'text-black'}>Photo</TableHead>
              <TableHead className={'text-black'}>Name</TableHead>
              <TableHead className={'text-black'}>Email</TableHead>
              <TableHead className={'text-black'}>Role</TableHead>
              <TableHead className="text-center text-black">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {allUsers?.map((user, index) => (
              <motion.tr
                key={user._id}
                variants={rowVariants}
                className="hover:bg-orange-50 transition-colors duration-200"
              >
                <TableCell className="font-medium text-gray-700">
                  {index + 1}
                </TableCell>

                <TableCell>
                  {user.photo ? (
                    <img
                      src={user.photo}
                      alt={user.name}
                 
                      className="rounded-full h-14 w-14 border border-gray-300 object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full text-gray-500">
                      <FaUser />
                    </div>
                  )}
                </TableCell>

                <TableCell className="font-semibold text-gray-800">
                  {user.name || 'Unknown'}
                </TableCell>

                <TableCell className="text-gray-600">
                  {user.email || 'N/A'}
                </TableCell>

                <TableCell className="capitalize text-gray-700 flex items-center gap-1">
                 
               <Button onClick={()=>handleMakeAdmin(user.email)} className={cn('cursor-pointer ')}>   <FaUser size={20}/> {user.role || 'user'}</Button>
                </TableCell>

                <TableCell className="text-center">
                  <button className="px-4 py-1 text-sm rounded-full bg-orange-500 text-white hover:bg-orange-600 transition">
                    Manage
                  </button>
                </TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </motion.div>
     </div>
    </section>
  );
};

export default AllUserPage;
