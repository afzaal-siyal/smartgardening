import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-green-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-2">

          {/* Left */}

          <div>

            <h3 className="text-2xl font-bold text-green-700">
              Smart Gardening
            </h3>

            <p className="mt-4 max-w-md text-gray-600 leading-7">
              Research-based gardening guides designed to help
              home gardeners grow healthier plants, avoid
              common mistakes, and achieve bigger harvests.
            </p>

          </div>

          {/* Right */}

          <div className="md:text-right">

            <h4 className="font-semibold">
              Quick Links
            </h4>

            <div className="mt-4 flex flex-col gap-3 md:items-end">

              <Link
                href="/privacy-policy"
                className="text-gray-600 hover:text-green-600"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="text-gray-600 hover:text-green-600"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/contact"
                className="text-gray-600 hover:text-green-600"
              >
                Contact
              </Link>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-12 border-t border-green-100 pt-8 text-center text-sm text-gray-500">

          © {new Date().getFullYear()} Smart Gardening.
          All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}