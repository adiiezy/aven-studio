// "use client"

// import { useState, useEffect } from "react"
// import { Menu, X, ChevronDown } from "lucide-react"
// import Link from "next/link"

// export default function Navbar() {
//     const [open, setOpen] = useState(false)
//     useEffect(() => {
//         document.body.style.overflow = open ? "hidden" : "auto"
//     }, [open])

//     return (
//         <>
//             <header className="fixed top-0 left-0 w-full z-50 bg-black">
//                 <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between">
//                     <div className="text-white text-xl font-semibold tracking-wide">
//                         AVEN<span className="text-orange-500 mx-1">✺</span>
//                         {!open || 'Studio'}
//                     </div>

//                     <div className="flex items-center">
//                         <button
//                             onClick={() => setOpen(true)}
//                             className="text-white hover:opacity-70 transition mr-6"
//                         >
//                             <Menu size={22} />
//                         </button>

//                         <button className="bg-white text-black px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition hidden sm:block">
//                             Contact us
//                         </button>

//                     </div>
//                 </div>
//             </header>

//             <div
//                 className={`fixed inset-0 z-40 transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"
//                     }`}
//             >
//                 <div
//                     onClick={() => setOpen(false)}
//                     className="absolute left-0 top-0 h-full w-1/2 bg-black/70 backdrop-blur-md"
//                 />

//                 <div
//                     className={`absolute right-0 top-0 h-full w-1/2 
//           bg-gradient-to-br from-black via-black to-red-900/30
//           text-white transform transition-transform duration-500 ease-in-out
//           ${open ? "translate-x-0" : "translate-x-full"}`}
//                 >
//                     {/* <div className="px-20 py-12 flex flex-col h-full">

//                         <div className="flex justify-end mb-20">
//                             <button
//                                 onClick={() => setOpen(false)}
//                                 className="hover:opacity-70 transition"
//                             >
//                                 <X size={24} />
//                             </button>
//                         </div>

//                         <nav className="flex flex-col gap-8 text-5xl md:text-6xl font-light tracking-tight">
//                             <a href="/" className="hover:opacity-60 transition text-para-l block xs:text-title-xxl text-white hover:text-white/60 duration-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90">Home</a>
//                             <a href="/projects" className="hover:opacity-60 transition text-para-l block xs:text-title-xxl text-white hover:text-white/60 duration-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90">Projects</a>
//                             <a href="/services" className="hover:opacity-60 transition text-para-l block xs:text-title-xxl text-white hover:text-white/60 duration-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90">Services</a>
//                             <a href="/aboutus" className="hover:opacity-60 transition text-para-l block xs:text-title-xxl text-white hover:text-white/60 duration-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90">Studio</a>
//                             <a href="/contact" className="hover:opacity-60 transition text-para-l block xs:text-title-xxl text-white hover:text-white/60 duration-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90">Contact</a>
//                         </nav>

//                         <div className="mt-auto flex gap-24 pt-24 text-sm">
//                             <div>
//                                 <p className="text-orange-500 mb-2">Email</p>
//                                 <p>hello@akis.studiox</p>
//                             </div>

//                             <div>
//                                 <p className="text-orange-500 mb-2">New client</p>
//                                 <p>Let's talk about your project</p>
//                             </div>
//                         </div>

//                     </div>
//                      */}
//                     {/* <div className="px-8 py-24 lg:px-36 lg:py-32 h-full flex flex-col" ><nav className="flex-1 flex items-center" aria-label="Main menu"><ul className="space-y-4"><li className="overflow-hidden"><a data-animate="navLink-menu" className="text-para-l block xs:text-title-xxl text-white hover:text-white/60 duration-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90" href="/en"  style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">Home</a></li> <li className="overflow-hidden"><a data-animate="navLink-menu" className=" block text-para-l xs:text-title-xxl text-white hover:text-white/60 duration-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90" href="/en/projects"  style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">Projects</a></li><li className="overflow-hidden"><a data-animate="navLink-menu" className=" block text-para-l xs:text-title-xxl text-white hover:text-white/60 duration-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90" href="/en/services"  style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">Services</a></li><li className="overflow-hidden"><a data-animate="navLink-menu" className=" block text-para-l xs:text-title-xxl text-white hover:text-white/60 duration-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90" href="/en/about"  style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">Studio</a></li><li className="overflow-hidden"><a data-animate="navLink-menu" className=" block text-para-l xs:text-title-xxl text-white hover:text-white/60 duration-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90" href="/en/contact"  style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">Contact</a></li><!----></ul></nav> <div className="flex items-center gap-x-6 xs:gap-x-12" ><div data-animate="navLink"  style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"><p className="text-para-xs xs:text-title-s text-primary mb-2">Email</p> <a className="text-para-xs xs:text-title-s text-white hover:text-white/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90 plausible-event-name=Nav+Email+Click" href="mailto:hello@akis.studio" >hello@akis.studio</a>x</div> <div data-animate="navLink"  style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"><p className="text-para-xs xs:text-title-s text-primary mb-2">New client</p> <a className="text-para-xs xs:text-title-s text-white hover:text-white/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90" href="/en/contact" >Let's talk about your project</a></div></div></div> */}
//                     <div className="px-8 py-24 lg:px-36 lg:py-32 h-full flex flex-col">

//                         <nav className="flex-1 flex items-center" aria-label="Main menu">
//                             <ul className="space-y-4">

//                                 <li className="overflow-hidden">
//                                     <Link
//                                         href="/en"
//                                         className="block text-para-l xs:text-title-xxl text-white hover:text-white/60 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90"
//                                     >
//                                         Home
//                                     </Link>
//                                 </li>

//                                 <li className="overflow-hidden">
//                                     <Link
//                                         href="/en/projects"
//                                         className="block text-para-l xs:text-title-xxl text-white hover:text-white/60 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90"
//                                     >
//                                         Projects
//                                     </Link>
//                                 </li>

//                                 <li className="overflow-hidden">
//                                     <Link
//                                         href="/en/services"
//                                         className="block text-para-l xs:text-title-xxl text-white hover:text-white/60 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90"
//                                     >
//                                         Services
//                                     </Link>
//                                 </li>

//                                 <li className="overflow-hidden">
//                                     <Link
//                                         href="/en/about"
//                                         className="block text-para-l xs:text-title-xxl text-white hover:text-white/60 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90"
//                                     >
//                                         Studio
//                                     </Link>
//                                 </li>

//                                 <li className="overflow-hidden">
//                                     <Link
//                                         href="/en/contact"
//                                         className="block text-para-l xs:text-title-xxl text-white hover:text-white/60 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90"
//                                     >
//                                         Contact
//                                     </Link>
//                                 </li>

//                             </ul>
//                         </nav>

//                         <div className="flex items-center gap-x-6 xs:gap-x-12 mt-12">

//                             <div>
//                                 <p className="text-para-xs xs:text-title-s text-primary mb-2">
//                                     Email
//                                 </p>
//                                 <a
//                                     href="mailto:hello@akis.studio"
//                                     className="text-para-xs xs:text-title-s text-white hover:text-white/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90"
//                                 >
//                                     hello@akis.studio
//                                 </a>
//                             </div>

//                             <div>
//                                 <p className="text-para-xs xs:text-title-s text-primary mb-2">
//                                     New client
//                                 </p>
//                                 <Link
//                                     href="/en/contact"
//                                     className="text-para-xs xs:text-title-s text-white hover:text-white/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90"
//                                 >
//                                     Let&apos;s talk about your project
//                                 </Link>
//                             </div>

//                         </div>
//                     </div>


//                 </div>
//             </div>
//         </>
//     )
// }

"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const line1 = useRef<HTMLSpanElement>(null)
  const line2 = useRef<HTMLSpanElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const navItems = useRef<HTMLLIElement[]>([])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"
    if (open) {
      gsap.to(line1.current, { rotate: 45, y: 4, duration: 0.3 })
      gsap.to(line2.current, { rotate: -45, y: -4, duration: 0.3 })

      gsap.fromTo(
        panelRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.6, ease: "power3.out" }
      )

      gsap.fromTo(
        navItems.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
        }
      )
    } else {
      gsap.to(line1.current, { rotate: 0, y: 0, duration: 0.3 })
      gsap.to(line2.current, { rotate: 0, y: 0, duration: 0.3 })

      gsap.to(panelRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      })
    }
  }, [open])

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black">
        <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between">
          <div className="text-white text-xl font-semibold tracking-wide">
            AVEN<span className="text-orange-500 mx-1">✺</span>
            {!open || "Studio"}
          </div>

          <div className="flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="relative w-8 h-8 mr-6"
            >
              <span
                ref={line1}
                className="absolute left-1/2 -translate-x-1/2 w-6 h-[2px] bg-white"
                style={{ top: "10px" }}
              />
              <span
                ref={line2}
                className="absolute left-1/2 -translate-x-1/2 w-6 h-[2px] bg-white"
                style={{ top: "18px" }}
              />
            </button>

            <button className="bg-white text-black px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition hidden sm:block">
              Contact us
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 ${open ? "visible" : "invisible"}`}>
        
        <div
          onClick={() => setOpen(false)}
          className="absolute left-0 top-0 h-full w-1/2 bg-black/70 backdrop-blur-md"
        />

        <div
          ref={panelRef}
          className="absolute right-0 top-0 h-full w-1/2 
          bg-gradient-to-br from-black via-black to-red-900/30
          text-white"
        >
          <div className="px-8 py-24 lg:px-36 lg:py-32 h-full flex flex-col">

            <nav className="flex-1 flex items-center">
              <ul className="space-y-6">

                {[
                  { name: "Home", href: "/en" },
                  { name: "Projects", href: "/en/projects" },
                  { name: "Services", href: "/en/services" },
                  { name: "Studio", href: "/en/about" },
                  { name: "Contact", href: "/en/contact" },
                ].map((item, i) => (
                  <li
                    key={i}
                    ref={(el) => {
                      if (el) navItems.current[i] = el
                    }}
                    className="opacity-0"
                  >
                    <Link
                      href={item.href}
                      className="block text-2xl text-white hover:text-white/60 transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}

              </ul>
            </nav>

            <div className="flex items-center gap-x-12 mt-12">
              <div>
                <p className="text-xs text-orange-500 mb-2">Email</p>
                <a
                  href="mailto:hello@akis.studio"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  hello@akis.studio
                </a>
              </div>

              <div>
                <p className="text-xs text-orange-500 mb-2">New client</p>
                <Link
                  href="/en/contact"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  Let&apos;s talk about your project
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
