import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Smart Gardening"
            width={48}
            height={48}
            className="rounded-full"
          />

          <div>
            <h2 className="text-2xl font-bold text-green-700">
              Smart Gardening
            </h2>

            <p className="text-xs text-gray-500">
              Research-Based Gardening
            </p>
          </div>
        </div>

        {/* CTA */}
        <Link
  href="/register"
  className="
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
    hover:scale-105
    hover:shadow-xl
  "
>
  Get Ebook
</Link>

      </div>
    </header>
  );
}