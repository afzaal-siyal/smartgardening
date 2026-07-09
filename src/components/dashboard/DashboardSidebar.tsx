"use client";

import Link from "next/link";

export default function DashboardSidebar() {
  return (
    <aside className="w-72 border-r bg-white p-6">
      <h2 className="mb-10 text-2xl font-bold text-green-700">
        Smart Gardening
      </h2>

      <nav className="space-y-2">
        <Link
          href="/dashboard"
          className="block rounded-xl px-4 py-3 transition hover:bg-green-50"
        >
          📊 Overview
        </Link>

        <Link
          href="/dashboard/ebooks"
          className="block rounded-xl px-4 py-3 transition hover:bg-green-50"
        >
          📚 My Ebooks
        </Link>

        <Link
          href="/dashboard/settings"
          className="block rounded-xl px-4 py-3 transition hover:bg-green-50"
        >
          ⚙️ Settings
        </Link>
      </nav>
    </aside>
  );
}