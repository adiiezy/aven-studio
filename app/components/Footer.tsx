"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";

const currentYear = new Date().getFullYear();

const LogoSVG = ({
    cogRef,
    onCogClick,
}: {
    cogRef: React.RefObject<SVGPathElement | null>;
    onCogClick: () => void;
}) => (
    <svg
        className="w-full cursor-pointer"
        viewBox="0 0 372.78 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onCogClick}
    >

        {/* A */}
        <path className="fill-white" d="M21.9474 26.8859H9.5935L7.3761 33.5380H0.4525L12.1729 0.5490H19.6848L31.0884 33.5380H24.1195ZM20.0921 21.2293 15.7931 8.3324 11.4941 21.2293Z"/>
        {/* V */}
        <path className="fill-white" d="M49.3251 33.5380H43.5781L32.4460 0.5490H39.2791L46.6100 25.3926L53.8051 0.5490H60.6382Z"/>
        {/* E */}
        <path className="fill-white" d="M71.9513 19.3287V27.8814H89.8260V33.5380H65.1635V0.5490H89.0115V6.2056H71.9513V13.6722H87.7444V19.3287Z"/>
        {/* N */}
        <path className="fill-white" d="M115.3031 33.5380 102.0442 10.7308V33.5380H95.2563V0.5490H102.2252L115.3031 22.9942V0.5490H122.0910V33.5380Z"/>

        {/* COG — shifted by 43.78 to match original gap between last letter and cog */}
        <path
            ref={cogRef}
            className="fill-orange-500"
            transform="translate(43.78, 0)"
            d="M140.894 12.926C142.532 11.8583 145.036 11.1687 148.866 11.707C149.268 8.94428 146.922 6.47515 144.111 6.80882C140.619 7.22256 138.106 8.61506 136.355 10.3279C136.748 8.43266 138.025 6.19932 141.124 3.90371C139.428 1.67037 135.999 1.55915 134.248 3.75689C132.078 6.48405 131.298 9.22011 131.289 11.6492C130.206 10.0343 129.506 7.56068 130.052 3.78359C127.25 3.38764 124.746 5.70105 125.085 8.4727C125.504 11.9161 126.917 14.3941 128.654 16.1203C126.732 15.7333 124.462 14.4742 122.139 11.4179C119.874 13.0906 119.761 16.4718 121.985 18.1979C124.751 20.3378 127.526 21.1075 129.989 21.1208C128.351 22.1886 125.847 22.8737 122.012 22.3354C121.615 25.0892 123.939 27.5539 126.736 27.2425C130.842 26.7798 133.17 25.0181 134.532 23.6656C134.153 25.5742 132.881 27.8297 129.754 30.1432C131.469 32.3987 134.921 32.461 136.671 30.2366C138.95 27.3448 139.572 24.5554 139.563 22.3532C140.659 23.9681 141.381 26.4506 140.826 30.2633C143.655 30.6637 146.141 28.3013 145.785 25.5074C145.325 21.8727 143.759 19.4659 142.171 17.9177C144.106 18.2914 146.394 19.5459 148.74 22.629C151.005 20.9562 151.118 17.5751 148.894 15.8489C146.128 13.709 143.353 12.9394 140.89 12.9305L140.894 12.926Z"
        />

        {/* STUDIO — same shift as cog, preserving original 9.2px gap between cog and S */}
        <g transform="translate(43.78, 0)">
            <path className="fill-white" d="M160.318 28.3505L164.474 23.1675C168.44 26.4686 171.787 27.9278 175.753 27.9278C179.719 27.9278 182.349 26.4197 182.349 24.0618C182.349 21.8952 180.87 20.8586 177.093 20.2001L170.258 19.0701C164.618 18.0825 161.609 14.9727 161.609 10.1635C161.609 3.94395 166.675 0.0778809 174.941 0.0778809C179.818 0.0778809 185.12 1.82184 188.801 4.74475L184.881 10.0701C181.343 7.38293 178.045 6.15504 174.413 6.15504C170.781 6.15504 168.489 7.47636 168.489 9.59847C168.489 11.5293 169.825 12.4724 173.028 12.993L179.53 14.0785C186.171 15.1151 189.519 18.2738 189.519 23.3588C189.519 29.8631 183.974 34.0094 175.23 34.0094C169.829 34.0094 164.379 31.9363 160.318 28.3505Z"/>
            <path className="fill-white" d="M201.889 6.91121H190.709V0.549316H220.338V6.91121H209.203V33.5377H201.889V6.91121Z"/>
            <path className="fill-white" d="M259.238 0.549316H246.176V19.2568C246.176 24.204 243.212 27.3627 238.578 27.3627C233.945 27.3627 230.931 24.2084 230.931 19.2568V0.549316H223.617V19.2568C223.617 28.3058 229.397 34.0093 238.529 34.0093C247.661 34.0093 253.485 28.2124 253.485 19.2568L253.499 6.96014H259.139C264.873 6.96014 269.367 11.3868 269.367 17.1392C269.367 22.8916 264.873 27.1313 259.139 27.1313H255.434C253.986 30.3123 252.664 31.8338 250.435 33.5422H259.238C269.227 33.5422 276.919 26.3305 276.919 17.1436C276.919 7.95669 269.182 0.549316 259.238 0.549316Z"/>
            <path className="fill-white" d="M281.549 0.549316H288.862V33.5377H281.549V0.549316Z"/>
            <path className="fill-white" d="M293.492 17.0413C293.492 7.52071 301.284 0.0288086 311.269 0.0288086C321.253 0.0288086 329 7.52071 329 17.0413C329 26.5619 321.208 34.0538 311.269 34.0538C301.329 34.0538 293.492 26.5619 293.492 17.0413ZM321.497 17.0413C321.497 11.1021 317.053 6.67543 311.269 6.67543C305.485 6.67543 300.995 11.1021 300.995 17.0413C300.995 22.9806 305.439 27.4116 311.269 27.4116C317.098 27.4116 321.497 22.9361 321.497 17.0413Z"/>
        </g>

        {/* Bottom bar — year, socials, legal links */}
        <text fontSize="3.2" fill="#6b7280" fontFamily="inherit" y="53">
            <tspan x="0">{currentYear} © All rights reserved</tspan>
        </text>

        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <text fontSize="3.2" fill="#6b7280" fontFamily="inherit" x="148" y="53" className="hover:fill-white transition-colors">Linkedin</text>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <text fontSize="3.2" fill="#6b7280" fontFamily="inherit" x="178" y="53" className="hover:fill-white transition-colors">Instagram</text>
        </a>

        <a href="/terms">
            <text fontSize="3.2" fill="#6b7280" fontFamily="inherit" x="220" y="53" className="hover:fill-white transition-colors">Terms and conditions</text>
        </a>
        <a href="/privacy">
            <text fontSize="3.2" fill="#6b7280" fontFamily="inherit" x="284" y="53" className="hover:fill-white transition-colors">Privacy policy</text>
        </a>
        <a href="/cookies">
            <text fontSize="3.2" fill="#6b7280" fontFamily="inherit" x="330" y="53" className="hover:fill-white transition-colors">Cookies Policy</text>
        </a>

    </svg>
);

export default function Footer() {

    const cogRef = useRef<SVGPathElement>(null);
    const spinTween = useRef<gsap.core.Tween | null>(null);
    const spinning = useRef(false);

    const spinSpeed = 3.3;

    const handleCogClick = () => {
        if (!cogRef.current) return;

        if (!spinning.current) {

            spinTween.current = gsap.to(cogRef.current, {
                rotation: "+=360",
                duration: spinSpeed,
                ease: "none",
                repeat: -1,
                transformOrigin: "50% 50%",
            });

            spinning.current = true;

        } else {

            spinTween.current?.kill();
            spinning.current = false;

        }
    };

    return (
        <footer className="pt-12 pb-4 max-w-7xl px-6 w-full mx-auto lg:flex lg:flex-col">

            <div className="mb-20 lg:mb-0 lg:mt-20 lg:order-3">
                <LogoSVG cogRef={cogRef} onCogClick={handleCogClick} />
            </div>

            <div className="lg:order-2 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-20">

                <div>
                    <div className="text-2xl lg:text-3xl font-bold mb-6">
                        <p>
                            You have a project idea ?<br />
                            Lets talk about it!
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded text-xs lg:text-sm inline-flex items-center transition-colors"
                    >
                        Contact us
                    </Link>
                </div>

                <div>
                    <p className="text-orange-500 text-xs mb-4 font-medium">Pages</p>

                    <ul className="flex flex-col gap-3">
                        <li><Link href="/projects">Projects</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/about">Studio</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <p className="text-orange-500 text-xs mb-4 font-medium">Email</p>

                    <Link href="mailto:hello@akis.studio">
                        hello@akis.studio
                    </Link>
                </div>

            </div>



        </footer>
    );
}