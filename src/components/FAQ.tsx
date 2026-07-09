"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this ebook suitable for beginners?",
    answer:
      "Yes. The guide is written in simple language and includes step-by-step instructions that beginners can follow easily.",
  },
  {
    question: "How will I receive the ebook?",
    answer:
      "Immediately after purchase you'll get instant access to download the ebook on your phone, tablet, or computer.",
  },
  {
    question: "Does it work for vegetable and flower gardens?",
    answer:
      "Yes. The principles cover vegetables, herbs, flowers, and many common backyard plants.",
  },
  {
    question: "Can I read it on my mobile phone?",
    answer:
      "Absolutely. The ebook is delivered as a digital file that works on phones, tablets, laptops, and desktops.",
  },
  {
    question: "Do I get lifetime access?",
    answer:
      "Yes. Once purchased, the ebook is yours and you can access it anytime.",
  },
  {
    question: "What if I'm not satisfied?",
    answer:
      "Contact support and we'll help resolve any issues related to accessing your purchase.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden px-6 py-28">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-green-200/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-emerald-200/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl">

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            Got Questions?
          </span>

          <h2 className="mt-6 text-4xl font-extrabold md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Everything you need to know before getting instant access.
          </p>

        </div>

        <div className="mt-14 space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-green-100
                  bg-white
                  shadow-sm
                  transition-all
                "
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    p-6
                    text-left
                    font-semibold
                    text-lg
                  "
                >
                  {faq.question}

                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "max-h-40 px-6 pb-6"
                        : "max-h-0"
                    }
                  `}
                >
                  <p className="leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}