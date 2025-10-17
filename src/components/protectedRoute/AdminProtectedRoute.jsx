"use client";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";
import useAdmin from "@/hooks/useAdmin/useAdmin";

export default function AdminProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAdminLoading) {

      console.log(isAdmin);
      if (!user || !isAdmin) {
        router.replace("/login");
      }
    }
  }, [user, isAdmin, loading, isAdminLoading, router]);

 

  if (user && isAdmin) {
    return children;
  }

  return null;
}
