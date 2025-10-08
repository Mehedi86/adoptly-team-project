'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MdPets } from 'react-icons/md';
import { toast } from 'react-hot-toast';
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { adminDataFetching } from '@/hooks/adminDataFetching/admin';
import useAuth from '@/hooks/useAuth';

// 🌀 Framer Motion Animation Variants
const animationVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
};

const AllPets = () => {
  const { user } = useAuth();
  const { data: allPets, isLoading, error, refetch } = adminDataFetching.useAllPets();

  const [selectedPet, setSelectedPet] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // ✅ Accept Pet
  const handleAccepted = async (id) => {
    setIsProcessing(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/pets/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userEmail: user?.email,
          status: 'accepted',
        }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success('Pet adoption request accepted ✅');
        refetch();
      } else {
        toast.error(data.message || 'Failed to update status');
      }
    } catch {
      toast.error('Something went wrong');
    } finally {
      setIsProcessing(false);
    }
  };

  // ✅ Open Reject Modal
  const handleRejectClick = (pet) => {
    setSelectedPet(pet);
    setOpenAlert(true);
  };

  // ✅ Confirm Reject
  const confirmReject = async () => {
    setIsProcessing(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/pets/${selectedPet._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userEmail: user?.email,
          status: 'rejected',
        }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success('Pet adoption request rejected ❌');
        refetch();
      } else {
        toast.error(data.message || 'Failed to update status');
      }
    } catch {
      toast.error('Something went wrong');
    } finally {
      setIsProcessing(false);
      setOpenAlert(false);
    }
  };

  // ✅ Loading & Error States
  if (isLoading)
    return <p className="text-center py-10 text-gray-500 text-lg animate-pulse">Loading pets...</p>;
  if (error)
    return <p className="text-center py-10 text-red-500 text-lg">Failed to load pets 😢</p>;

  return (
    <div className="p-4 md:p-8">
      {/* Header */}
      <div className="mb-6 flex items-center gap-2">
        <MdPets className="text-3xl text-primary" />
        <h1 className="text-3xl font-bold text-gray-800">All Pets</h1>
      </div>

      {/* Table */}
      <motion.div
        variants={animationVariants.container}
        initial="hidden"
        animate="visible"
        className="overflow-x-auto rounded-xl shadow-md"
      >
        <Table className="min-w-full text-sm md:text-base bg-white">
          <TableCaption>All Pets List Management</TableCaption>

          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="w-[40px] text-center font-semibold">#</TableHead>
              <TableHead className="font-semibold">Image</TableHead>
              <TableHead className="font-semibold">Name</TableHead>
              <TableHead className="font-semibold">Description</TableHead>
              <TableHead className="font-semibold">Age</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="text-center font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {allPets?.data?.map((pet, index) => (
              <motion.tr
                key={pet._id}
                variants={animationVariants.item}
                className="border-b hover:bg-gray-50 transition"
              >
                <TableCell className="text-center">{index + 1}</TableCell>

                <TableCell>
                  <div className="w-12 h-12 relative">
                    <Image
                      src={pet.image}
                      alt={pet.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                </TableCell>

                <TableCell className="font-medium">{pet.name}</TableCell>
                <TableCell className="max-w-xs truncate">{pet.description}</TableCell>
                <TableCell>{pet.age}</TableCell>
                <TableCell>
                  <span
                    className={`px-3 py-1 rounded-full text-xs md:text-sm ${
                      pet.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-600'
                        : pet.status === 'accepted'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-rose-100 text-rose-600'
                    }`}
                  >
                    {pet.status}
                  </span>
                </TableCell>

                <TableCell className="text-center">
                  {pet.status === 'pending' && (
                    <div className="flex flex-col items-center gap-2">
                      <Button
                        onClick={() => handleAccepted(pet._id)}
                        disabled={isProcessing}
                        className="bg-green-200 text-green-600 hover:bg-green-300 text-xs md:text-sm"
                      >
                        {isProcessing ? 'Processing...' : 'Accept'}
                      </Button>
                      <Button
                        onClick={() => handleRejectClick(pet)}
                        disabled={isProcessing}
                        className="bg-rose-200 text-rose-600 hover:bg-rose-300 text-xs md:text-sm"
                      >
                        Reject
                      </Button>
                    </div>
                  )}
                </TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </motion.div>

      {/* 🧩 Reject Confirmation Alert */}
      <AlertDialog open={openAlert} onOpenChange={setOpenAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Rejection</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to reject{' '}
              <span className="font-semibold">{selectedPet?.name}</span>?<br />
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isProcessing}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmReject}
              className="bg-rose-500 hover:bg-rose-600 text-white"
              disabled={isProcessing}
            >
              {isProcessing ? 'Rejecting...' : 'Confirm Reject'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AllPets;
