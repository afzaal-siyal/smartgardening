import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Download, BookOpen } from "lucide-react";
export default function EbookMockup() {
  return (
    <section className="relative overflow-hidden py-28 px-6">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-green-200/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-emerald-200/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-green-300/20 blur-3xl" />

              <Image
                src="/ebook-cover.png"
                alt="Smart Gardening Ebook"
                width={420}
                height={580}
                className="
                  relative
                  rounded-2xl
                  shadow-[0_30px_80px_rgba(22,101,52,0.25)]
                  transition-all
                  duration-300
                  hover:scale-105
                "
              />

            </div>

          </div>

          {/* Right Side */}

          <div>

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              Best Selling Gardening Guide
            </span>

            <h2 className="mt-6 text-4xl font-extrabold md:text-5xl">
              The Complete Gardening Guide
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Everything you need to grow healthier plants,
              avoid common mistakes, and harvest more
              throughout the year.
            </p>

            {/* Rating */}

            <div className="mt-6 flex items-center gap-2">
              <span className="text-yellow-500 text-xl">
                ⭐⭐⭐⭐⭐
              </span>

              <span className="font-medium text-gray-700">
                4.9 Reader Rating
              </span>
            </div>

            {/* Features */}

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Instant Download</span>
              </div>

              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-green-600" />
                <span>Lifetime Access</span>
              </div>

              <div className="flex items-center gap-3">
                <Download className="h-5 w-5 text-green-600" />
                <span>Works On Mobile, Tablet & Desktop</span>
              </div>

            </div>

            {/* Pricing */}

            <div className="mt-10 rounded-3xl border border-green-100 bg-white p-6 shadow-lg">

              <p className="text-gray-500 line-through">
                Regular Price $49
              </p>

              <h3 className="mt-2 text-5xl font-extrabold text-green-600">
                $19
              </h3>

              <p className="mt-2 text-gray-600">
                One-Time Payment
              </p>

            </div>

            {/* CTA */}

            <Link
  href="/register"
  className="
    mt-8
    block
    w-full
    rounded-2xl
    bg-gradient-to-r
    from-green-600
    to-emerald-500
    px-8
    py-5
    text-center
    text-lg
    font-semibold
    text-white
    shadow-xl
    transition-all
    duration-300
    hover:scale-[1.02]
    hover:shadow-2xl
  "
>
  Get Instant Access
</Link>s

            <p className="mt-4 text-center text-sm text-gray-500">
              Secure Checkout • Instant Access • Digital Download
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}