// "use client";

// import { useEffect, useRef } from "react";

// type Position = {
//   x: number;
//   y: number;
// };

// export default function HeroSection() {
//   const glowRef = useRef<HTMLDivElement>(null);

//   const mouse = useRef<Position>({ x: 70, y: 50 });
//   const current = useRef<Position>({ x: 70, y: 50 });

//   useEffect(() => {
//     let time = 0;

//     const animate = () => {
//       time += 0.01;

//       // smooth follow
//       current.current.x += (mouse.current.x - current.current.x) * 0.06;
//       current.current.y += (mouse.current.y - current.current.y) * 0.06;

//       const waveX = Math.sin(time) * 6;
//       const waveY = Math.cos(time) * 4;

//       if (glowRef.current) {
//         glowRef.current.style.background = `

//         radial-gradient(
//           ellipse at ${current.current.x + waveX}% ${current.current.y + waveY}%,
//           var(--color-navy-bright) 0%,
//           var(--color-navy-midnight) 25%,
//           var(--color-navy) 45%,
//           transparent 70%
//         ),

//         radial-gradient(
//           ellipse at ${current.current.x + 15}% ${current.current.y + 10}%,
//           var(--color-navy-bright),
//           transparent 75%
//         )

//         `;
//       }

//       requestAnimationFrame(animate);
//     };

//     animate();
//   }, []);

//   const handleMove = (e: React.MouseEvent<HTMLElement>) => {
//     const rect = e.currentTarget.getBoundingClientRect();

//     mouse.current.x = ((e.clientX - rect.left) / rect.width) * 100;
//     mouse.current.y = ((e.clientY - rect.top) / rect.height) * 100;
//   };

//   return (
//     <section
//       onMouseMove={handleMove}
//       className="relative min-h-screen bg-black text-white overflow-hidden"
//     >
//       {/* Glow */}
//       <div
//         ref={glowRef}
//         className="absolute right-0 top-0 w-[70%] h-full pointer-events-none"
//         style={{
//           filter: "blur(120px)",
//           transform: "rotate(-10deg) scale(1.4)",
//           background: `
//             radial-gradient(
//               ellipse at 70% 50%,
//               var(--color-navy-bright),
//               var(--color-navy-midnight),
//               transparent 60%
//             )
//           `,
//         }}
//       />

//       {/* Grain texture */}
//       <div
//         className="absolute inset-0 opacity-[0.06] mix-blend-screen pointer-events-none"
//         style={{
//           backgroundImage: "url('/noise.png')",
//         }}
//       />

//       {/* Content */}
//       <div className="relative z-10 flex items-center min-h-screen px-10">
//         <div className="max-w-3xl">
//           <h1 className="text-6xl font-semibold leading-[1.05]">
//             A brand that keeps up with your ambition.
//           </h1>
//         </div>
//       </div>

//       <div className="absolute bottom-24 right-24 max-w-md text-neutral-300">
//         <p className="text-lg">
//           Branding & web agency based in Brussels. We create visual identities
//           and websites that truly reflect who you are.
//         </p>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef } from "react";

type Position = {
  x: number;
  y: number;
};

export default function HeroSection() {
  const glowRef = useRef<HTMLDivElement>(null);

  const mouse = useRef<Position>({ x: 70, y: 50 });
  const current = useRef<Position>({ x: 70, y: 50 });

  useEffect(() => {
    let time = 0;

    const animate = () => {
      time += 0.01;

      // smooth follow
      current.current.x += (mouse.current.x - current.current.x) * 0.06;
      current.current.y += (mouse.current.y - current.current.y) * 0.06;

      const waveX = Math.sin(time) * 6;
      const waveY = Math.cos(time) * 4;

      if (glowRef.current) {
        glowRef.current.style.background = `

        radial-gradient(
          ellipse at ${current.current.x + waveX}% ${current.current.y + waveY}%,
          var(--color-navy-bright) 0%,
          var(--color-navy-midnight) 25%,
          var(--color-navy) 45%,
          transparent 70%
        ),

        radial-gradient(
          ellipse at ${current.current.x + 15}% ${current.current.y + 10}%,
          var(--color-navy-bright),
          transparent 75%
        )

        `;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouse.current.x = ((e.clientX - rect.left) / rect.width) * 100;
    mouse.current.y = ((e.clientY - rect.top) / rect.height) * 100;
  };

  return (
    <section
      onMouseMove={handleMove}
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Glow */}
      <div
        ref={glowRef}
        className="absolute right-0 top-0 w-[70%] h-full pointer-events-none"
        style={{
          filter: "blur(120px)",
          transform: "rotate(-10deg) scale(1.4)",
          background: `
            radial-gradient(
              ellipse at 70% 50%,
              var(--color-navy-bright),
              var(--color-navy-midnight),
              transparent 60%
            )
          `,
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: "url('/noise.png')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen px-10">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-semibold leading-[1.05]">
            A brand that keeps up with your ambition.
          </h1>
        </div>
      </div>

      <div className="absolute bottom-24 right-24 max-w-md text-neutral-300">
        <p className="text-lg">
          Branding & web agency based in Brussels. We create visual identities
          and websites that truly reflect who you are.
        </p>
      </div>
    </section>
  );
}
