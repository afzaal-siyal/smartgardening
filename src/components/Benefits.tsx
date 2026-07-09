import {
  Sprout,
  ShieldCheck,
  BookOpen,
} from "lucide-react";

export default function Benefits() {
  return (
    <section className="relative overflow-hidden py-28 px-6">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            Why Readers Love It
          </span>

          <h2 className="mt-6 text-4xl font-extrabold md:text-5xl">
            What You'll Discover Inside
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Practical gardening strategies designed to help
            you grow healthier plants and achieve better results.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {/* Card 1 */}
          <div className="group rounded-3xl border border-green-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
              <Sprout className="h-7 w-7 text-green-700" />
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Bigger Harvests
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Learn proven techniques that help vegetables,
              herbs, and fruits produce more throughout
              the growing season.
            </p>

          </div>

          {/* Card 2 */}
          <div className="group rounded-3xl border border-green-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
              <ShieldCheck className="h-7 w-7 text-green-700" />
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Prevent Common Mistakes
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Avoid watering, fertilizing, and pruning
              mistakes that reduce plant growth and yields.
            </p>

          </div>

          {/* Card 3 */}
          <div className="group rounded-3xl border border-green-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
              <BookOpen className="h-7 w-7 text-green-700" />
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Proven Gardening Methods
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Follow simple step-by-step systems used by
              successful home gardeners.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}