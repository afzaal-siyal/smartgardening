"use client";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      setUser(user);
    };

    getUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-7xl p-6">
<DashboardHeader
  user={user}
  onLogout={handleLogout}
/>
        {/* Welcome Banner */}
        <div className="mb-8 rounded-3xl bg-gradient-to-r from-green-600 to-emerald-500 p-8 text-white shadow-xl">

          <h2 className="text-4xl font-bold">
            Welcome Back,{" "}
            {user.user_metadata?.full_name || "Gardener"} 👋
          </h2>

          <p className="mt-3 text-green-100 text-lg">
            Access your gardening guides, ebooks,
            and premium resources all in one place.
          </p>

        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <p className="text-sm text-gray-500">
              My Ebooks
            </p>

            <h3 className="mt-3 text-4xl font-bold text-green-600">
              1
            </h3>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <p className="text-sm text-gray-500">
              Downloads
            </p>

            <h3 className="mt-3 text-4xl font-bold text-blue-600">
              0
            </h3>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <p className="text-sm text-gray-500">
              Account Status
            </p>

            <h3 className="mt-3 text-2xl font-bold text-emerald-600">
              Active
            </h3>
          </div>

        </div>

        {/* User Profile + Ebook Library */}
        <div className="grid gap-6 lg:grid-cols-2">

          {/* Profile Card */}
          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <h3 className="mb-6 text-2xl font-bold">
              Profile Information
            </h3>

            <div className="space-y-4">

              <div>
                <p className="text-sm text-gray-500">
                  Full Name
                </p>

                <p className="font-semibold">
                  {user.user_metadata?.full_name}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Email Address
                </p>

                <p className="font-semibold">
                  {user.email}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  User ID
                </p>

                <p className="break-all text-sm">
                  {user.id}
                </p>
              </div>

            </div>

          </div>

          {/* Ebook Card */}
          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <h3 className="mb-6 text-2xl font-bold">
              My Ebook Library
            </h3>

            <div className="rounded-2xl border border-green-100 bg-green-50 p-6">

              <h4 className="text-xl font-bold">
                Complete Gardening Guide
              </h4>

              <p className="mt-3 text-gray-600">
                Learn proven gardening methods,
                avoid common mistakes, and grow
                healthier plants season after season.
              </p>

              <button
                className="
                  mt-6
                  rounded-xl
                  bg-gradient-to-r
                  from-green-600
                  to-emerald-500
                  px-6
                  py-3
                  font-semibold
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                Download Ebook
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}