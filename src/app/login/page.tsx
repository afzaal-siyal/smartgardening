"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/dashboard");
  };
  const handleGoogleLogin = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "redirectTo: `${window.loacation.origin}/dashboard`,",
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
          Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
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
  Login
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
  src="googlelogo.webp"
  alt="Google"
  className="h-6 w-6"
/>

  Continue with Google
</button>

<p className="mt-6 text-center text-sm text-gray-600">
  Don't have an account?{" "}
  <Link
    href="/register"
    className="font-semibold text-green-600"
  >
    Create Account
  </Link>
</p>

      </div>
    </div>
  );
}