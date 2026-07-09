import CountdownTimer from "./CountdownTimer";
import Link from "next/link";
import {
  CheckCircle,
  ShieldCheck,
  Download,
  BookOpen,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden px-6 py-28">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-green-300/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl">

        <div className="rounded-[40px] border border-green-100 bg-white p-10 shadow-xl md:p-16">

          <div className="text-center">

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              Limited Time Offer
            </span>

            <h2 className="mt-6 text-4xl font-extrabold md:text-6xl">
              Ready To Grow Better?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Get instant access to the complete gardening guide
              and start growing healthier plants, stronger roots,
              and bigger harvests.
            </p>

          </div>

          {/* Features */}

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Research-Based Gardening Methods</span>
            </div>

            <div className="flex items-center gap-3">
              <Download className="h-5 w-5 text-green-600" />
              <span>Instant Digital Download</span>
            </div>

            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-green-600" />
              <span>Lifetime Access</span>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-green-600" />
              <span>Beginner Friendly Guide</span>
            </div>

          </div>

          {/* Pricing */}
          <div className="mt-10">
  <CountdownTimer />
</div>
          <div className="mt-12 text-center">

            <p className="text-lg text-gray-500 line-through">
              Regular Price $49
            </p>

            <div className="mt-2 flex items-center justify-center gap-4">

              <span className="text-6xl font-extrabold text-green-600">
                $19
              </span>

              <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-bold text-red-600">
                SAVE 61%
              </span>

            </div>

            <p className="mt-3 text-gray-500">
              One-Time Payment • No Subscription
            </p>

          </div>

          {/* CTA Button */}

          <div className="mt-12 text-center">

            <Link
  href="/register"
  className="
    inline-block
    rounded-2xl
    bg-gradient-to-r
    from-green-600
    to-emerald-500
    px-12
    py-5
    text-xl
    font-bold
    text-white
    shadow-xl
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-2xl
  "
>
  Get Instant Access
</Link>

            <p className="mt-5 text-sm text-gray-500">
              Secure Checkout • Instant Access • Works On All Devices
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}