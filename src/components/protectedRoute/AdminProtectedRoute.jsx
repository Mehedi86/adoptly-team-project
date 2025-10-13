"use client";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";
import useAdmin from "@/hooks/useAdmin/useAdmin";

export default function AdminProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isAdmin, isAdminLoading] = useAdmin();

  useEffect(() => {
    if (!loading && !isAdminLoading) {
      if (!user || isAdmin !== "admin") {
        router.replace("/login");
      }
    }
  }, [user, isAdmin, loading, isAdminLoading, router]); // ✅ Fixed dependency list

  if (loading || isAdminLoading) {
    return (
      <div className="flex items-center justify-center my-12">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (user && isAdmin === "admin") {
    return children;
  }

  return null;
}
