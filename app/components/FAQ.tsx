"use client"

import { useState } from "react"

const allowMultiple = false

const faqs = [
  {
    q: "How much does it cost to build a website with AKIS.STUDIO?",
    a: "Every project is different, so we don't do fixed pricing. We first understand your needs, goals, and project scope before providing a custom quote that fits your business."
  },
  {
    q: "Can my business get subsidies for your services?",
    a: "Yes. Some businesses may qualify for digital transformation grants which can reduce the cost of development and consulting."
  },
  {
    q: "I don't have a clear idea yet. Can we still talk?",
    a: "Absolutely. The discovery call is designed exactly for this — to help clarify your goals and see if a project makes sense."
  },
  {
    q: "What are the steps involved in creating a website?",
    a: "The process usually includes discovery, strategy, design, development, and launch. Each stage includes validation and collaboration."
  },
  {
    q: "What kind of businesses work with AKIS.STUDIO?",
    a: "We work with SMEs, startups, entrepreneurs, and established companies looking to build a strong digital presence."
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. All websites include post-launch support and optional long-term maintenance plans."
  },
  {
    q: "Where are your clients from?",
    a: "We work with businesses across Europe and internationally."
  }
]

export default function FAQ() {
  const [open, setOpen] = useState<number[]>([])

  const toggle = (i: number) => {
    if (allowMultiple) {
      setOpen(prev =>
        prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]
      )
    } else {
      setOpen(prev => (prev.includes(i) ? [] : [i]))
    }
  }

  return (
    <section className="w-full bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

        <div>
          <p className="text-orange-500 uppercase text-sm mb-4">FAQ</p>

          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Frequently asked questions
          </h2>

          <p className="text-zinc-400 max-w-md">
            Can't find what you're looking for? Let's talk.
          </p>
        </div>

        <div className="border-t border-zinc-800">
          {faqs.map((faq, i) => {
            const isOpen = open.includes(i)

            return (
              <div
                key={i}
                className="border-b border-zinc-800"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  <span className="text-lg font-medium">
                    {faq.q}
                  </span>

                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 6L8 10L12 6" />
                  </svg>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-6"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden text-zinc-400">
                    {faq.a}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
