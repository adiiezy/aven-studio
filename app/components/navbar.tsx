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
//                     {/* <div className="px-8 py-24 lg:px-36 lg:py-32 h-full flex flex-col" ><nav className="flex-1 flex items-center" aria-label="Main menu"><ul className="space-y-4"><li className="overflow-hidden"><a data-animate="navLink-menu" className="text-para-l block xs:text-title-xxl text-white hover:text-white/60 duration-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90" href="/en"  style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">Home</a></li> <li className="overflow-hidden"><a data-animate="navLink-menu" className=" block text-para-l xs:text-title-xxl text-white hover:text-white/60 duration-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90" href="/projects"  style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">Projects</a></li><li className="overflow-hidden"><a data-animate="navLink-menu" className=" block text-para-l xs:text-title-xxl text-white hover:text-white/60 duration-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90" href="/services"  style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">Services</a></li><li className="overflow-hidden"><a data-animate="navLink-menu" className=" block text-para-l xs:text-title-xxl text-white hover:text-white/60 duration-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90" href="/about"  style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">Studio</a></li><li className="overflow-hidden"><a data-animate="navLink-menu" className=" block text-para-l xs:text-title-xxl text-white hover:text-white/60 duration-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90" href="/contact"  style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">Contact</a></li><!----></ul></nav> <div className="flex items-center gap-x-6 xs:gap-x-12" ><div data-animate="navLink"  style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"><p className="text-para-xs xs:text-title-s text-primary mb-2">Email</p> <a className="text-para-xs xs:text-title-s text-white hover:text-white/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90 plausible-event-name=Nav+Email+Click" href="mailto:hello@akis.studio" >hello@akis.studio</a>x</div> <div data-animate="navLink"  style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"><p className="text-para-xs xs:text-title-s text-primary mb-2">New client</p> <a className="text-para-xs xs:text-title-s text-white hover:text-white/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90" href="/contact" >Let's talk about your project</a></div></div></div> */}
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
//                                         href="/projects"
//                                         className="block text-para-l xs:text-title-xxl text-white hover:text-white/60 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90"
//                                     >
//                                         Projects
//                                     </Link>
//                                 </li>

//                                 <li className="overflow-hidden">
//                                     <Link
//                                         href="/services"
//                                         className="block text-para-l xs:text-title-xxl text-white hover:text-white/60 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90"
//                                     >
//                                         Services
//                                     </Link>
//                                 </li>

//                                 <li className="overflow-hidden">
//                                     <Link
//                                         href="/about"
//                                         className="block text-para-l xs:text-title-xxl text-white hover:text-white/60 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90"
//                                     >
//                                         Studio
//                                     </Link>
//                                 </li>

//                                 <li className="overflow-hidden">
//                                     <Link
//                                         href="/contact"
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
//                                     href="/contact"
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
                    <div className="text-white text-xl font-semibold tracking-wide flex"  >
                        AVEN<span className="text-navy-bright mx-1">✺</span>
                        {!open ||
                            <svg className="opacity-100 translate-x-0 transition-all duration-300 ease-in-out" width="89" height="18" viewBox="0 0 119 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.667969 19.919L3.56237 16.2738C6.32478 18.5954 8.65664 19.6217 11.419 19.6217C14.1814 19.6217 16.0136 18.561 16.0136 16.9027C16.0136 15.3789 14.9828 14.6499 12.3524 14.1868L7.59126 13.392C3.66293 12.6974 1.56678 10.5103 1.56678 7.12794C1.56678 2.7537 5.09599 0.034668 10.8534 0.034668C14.2506 0.034668 17.9432 1.26121 20.5076 3.31691L17.7767 7.06223C15.3128 5.17236 13.0155 4.30878 10.4857 4.30878C7.95582 4.30878 6.35934 5.23807 6.35934 6.73056C6.35934 8.08852 7.28957 8.75185 9.52087 9.11793L14.0495 9.88139C18.6755 10.6104 21.0073 12.832 21.0073 16.4083C21.0073 20.9828 17.145 23.899 11.0545 23.899C7.29272 23.899 3.49637 22.4409 0.667969 19.919Z" fill="white"></path><path d="M29.6254 4.84057H21.8379V0.366211H42.4758V4.84057H34.7197V23.5672H29.6254V4.84057Z" fill="white"></path><path d="M85.1113 0.366211H90.2056V23.5672H85.1113V0.366211Z" fill="white"></path><path d="M93.4316 11.965C93.4316 5.26911 98.859 0 105.814 0C112.768 0 118.164 5.26911 118.164 11.965C118.164 18.6609 112.737 23.93 105.814 23.93C98.8905 23.93 93.4316 18.6609 93.4316 11.965ZM112.938 11.965C112.938 7.78789 109.843 4.67461 105.814 4.67461C101.785 4.67461 98.6579 7.78789 98.6579 11.965C98.6579 16.1421 101.753 19.2585 105.814 19.2585C109.874 19.2585 112.938 16.1108 112.938 11.965Z" fill="white"></path><path d="M69.5711 0.366211H60.4731V13.5233C60.4731 17.0027 58.4084 19.2242 55.1808 19.2242C51.9533 19.2242 49.854 17.0058 49.854 13.5233V0.366211H44.7598V13.5233C44.7598 19.8876 48.7855 23.8988 55.1463 23.8988C61.507 23.8988 65.5642 19.8219 65.5642 13.5233L65.5736 4.87499H69.502C73.4963 4.87499 76.6264 7.98827 76.6264 12.034C76.6264 16.0797 73.4963 19.0615 69.502 19.0615H66.9219C65.9131 21.2987 64.9923 22.3688 63.4398 23.5703H69.5711C76.529 23.5703 81.8872 18.4983 81.8872 12.0371C81.8872 5.57587 76.4976 0.366211 69.5711 0.366211Z" fill="white"></path></svg>
                        }
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
                    className="fixed top-0 right-0 w-full sm:w-2/3 lg:w-7/12 h-screen bg-black/90 backdrop-blur-md transform transition-transform duration-500 ease-out z-901 translate-x-0"
                >
                    <div className="px-8 py-24 lg:px-36 lg:py-32 h-full flex flex-col">

                        <nav className="flex-1 flex items-center">
                            <ul className="space-y-6">

                                {[
                                    { name: "Home", href: "/en" },
                                    { name: "Projects", href: "/projects" },
                                    { name: "Services", href: "/services" },
                                    { name: "Studio", href: "/about" },
                                    { name: "Contact", href: "/contact" },
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
                                            className="block text-5xl text-white hover:text-white/60 transition-colors duration-300"
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
                                    href="/contact"
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
