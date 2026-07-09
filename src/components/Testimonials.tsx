import Image from "next/image";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Texas, USA",
    image: "/sarah.jpg",
    review:
      "The watering section alone saved me from making the same mistakes every summer. My tomatoes have never looked better.",
  },
  {
    name: "James R.",
    location: "Ontario, Canada",
    image: "/james.jpg",
    review:
      "Simple, practical, and easy to follow. I applied the advice immediately and saw noticeable improvements.",
  },
  {
    name: "Linda P.",
    location: "Manchester, UK",
    image: "/lindap.jpg",
    review:
      "The seasonal gardening calendar is worth the price alone. It keeps me on track all year.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden px-6 py-28">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-green-200/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-emerald-200/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            Trusted By Gardeners
          </span>

          <h2 className="mt-6 text-4xl font-extrabold md:text-5xl">
            What Readers Are Saying
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Helping gardeners grow healthier plants and bigger harvests.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-6">

            <div className="rounded-2xl bg-white px-5 py-3 shadow">
              ⭐ 4.9/5 Rating
            </div>

            <div className="rounded-2xl bg-white px-5 py-3 shadow">
              🌱 1,500+ Readers
            </div>

            <div className="rounded-2xl bg-white px-5 py-3 shadow">
              📥 Instant Download
            </div>

          </div>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
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
              <div className="flex items-center gap-4">

                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />

                <div>
                  <h4 className="font-bold">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {item.location}
                  </p>
                </div>

              </div>

              <div className="mt-5 text-yellow-500">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="mt-5 leading-7 text-gray-600">
                "{item.review}"
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}