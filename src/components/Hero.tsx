import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-green-300/30 blur-3xl" />
        <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-green-200/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <div>

            <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
              🌱 Trusted By Home Gardeners
            </div>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl lg:text-7xl">
              Grow Bigger Harvests
              <span className="block bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Without Guesswork
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
              Discover proven gardening methods that help you
              avoid costly mistakes, improve yields, and grow
              healthier plants season after season.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

               
              <Link
  href="/register"
  className="
    rounded-xl
    bg-gradient-to-r
    from-green-600
    to-emerald-500
    px-8
    py-4
    text-center
    text-lg
    font-semibold
    text-white
    shadow-lg
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-xl
  "
>
  Get Instant Access
</Link>

              <button
                className="
                  rounded-xl
                  border
                  border-green-200
                  bg-white
                  px-8
                  py-4
                  text-lg
                  font-semibold
                  text-gray-700
                  hover:bg-green-50
                "
              >
                View What's Inside
              </button>

            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-600">

              <div>⭐ 4.9 Reader Rating</div>

              <div>📥 Instant Download</div>

              <div>🌎 US • UK • Canada</div>

            </div>

          </div>

          {/* Right Side */}
          <div className="relative flex justify-center">

            <div className="absolute h-96 w-96 rounded-full bg-green-300/20 blur-3xl" />

            <Image
              src="/ebook-cover.png"
              alt="Smart Gardening Ebook"
              width={420}
              height={600}
              className="
                relative
                rounded-2xl
                shadow-[0_30px_80px_rgba(22,101,52,0.25)]
                transition
                hover:scale-105
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
}