"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert(
      "Account created successfully. Check your email."
    );

    setName("");
    setEmail("");
    setPassword("");
  };
  const handleGoogleSignup = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "redirectTo: `${window.location.origin}/dashboard`,",
    },
  });

  if (error) {
    alert(error.message);
  }
};

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">

        <h1 className="mb-8 text-center text-3xl font-bold">
          Create Account
        </h1>

        <form
          onSubmit={handleRegister}
          className="space-y-5"
        >
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full rounded-xl border p-3"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full rounded-xl border p-3"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full rounded-xl border p-3"
            required
          />

          <button
            type="submit"
  className="
    w-full
    rounded-xl
    bg-green-600
    py-3
    font-semibold
    text-white
    shadow-md
    transition-all
    duration-300
    hover:-translate-y-1
    hover:bg-green-700
    hover:shadow-xl
    active:translate-y-0
  "
          >
            Create Account
          </button>
        </form>
        <div className="my-6 flex items-center">
  <div className="h-px flex-1 bg-gray-200"></div>

  <span className="px-4 text-sm text-gray-500">
    OR
  </span>

  <div className="h-px flex-1 bg-gray-200"></div>
</div>

<button
  type="button"
  onClick={handleGoogleSignup}
  className="
    flex
    w-full
    items-center
    justify-center
    gap-3
    rounded-2xl
    border
    border-gray-200
    bg-white
    py-3.5
    font-semibold
    text-gray-700
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:shadow-lg
  "
>
  <img
    src="/googlelogo.webp"
    alt="Google"
    className="h-6 w-6"
  />

  Continue with Google
</button>

<p className="mt-6 text-center text-sm text-gray-600">
  Already have an account?{" "}
  <Link
    href="/login"
    className="font-semibold text-green-600"
  >
    Login
  </Link>
</p>

      </div>
    </div>
  );
}