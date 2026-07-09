import {
  Sprout,
  Droplets,
  Bug,
  Calendar,
  Leaf,
  Award,
} from "lucide-react";

const modules = [
  {
    icon: Sprout,
    title: "Soil Preparation Secrets",
    description:
      "Build healthy soil that supports stronger roots and faster growth.",
  },
  {
    icon: Droplets,
    title: "Watering Strategies",
    description:
      "Know exactly when and how much to water for healthier plants.",
  },
  {
    icon: Bug,
    title: "Natural Pest Control",
    description:
      "Protect your garden without relying on harsh chemicals.",
  },
  {
    icon: Calendar,
    title: "Seasonal Gardening Calendar",
    description:
      "Follow the right tasks at the right time throughout the year.",
  },
  {
    icon: Leaf,
    title: "Fertilizer Timing Guide",
    description:
      "Learn when to feed plants for maximum harvest potential.",
  },
  {
    icon: Award,
    title: "Common Mistakes To Avoid",
    description:
      "Avoid beginner mistakes that waste time and reduce yields.",
  },
];

export default function WhatsInside() {
  return (
    <section className="relative overflow-hidden py-28 px-6">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-green-200/20 blur-3xl" />
        <div className="absolute right-10 bottom-0 h-72 w-72 rounded-full bg-emerald-200/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            Complete Step-By-Step Guide
          </span>

          <h2 className="mt-6 text-4xl font-extrabold md:text-5xl">
            What's Inside The Ebook
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Every chapter is designed to help you grow healthier,
            stronger, and more productive plants.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {modules.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  rounded-3xl
                  border
                  border-green-100
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
                  <Icon className="h-7 w-7 text-green-700" />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* Bonus Box */}

        <div className="mt-14 rounded-3xl border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-8 text-center shadow-sm">

          <span className="font-semibold text-green-700">
            BONUS INCLUDED 🎁
          </span>

          <h3 className="mt-3 text-2xl font-bold">
            Seasonal Gardening Quick Reference Guide
          </h3>

          <p className="mt-3 text-gray-600">
            A printable cheat sheet you can keep beside your garden.
          </p>

        </div>

      </div>
    </section>
  );
}