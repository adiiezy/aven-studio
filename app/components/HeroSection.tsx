
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

// ─── Vertex shader ───────────────────────────────────────────────────────────
const VERT = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

// ─── Fragment shader ─────────────────────────────────────────────────────────
const FRAG = `
precision highp float;

uniform vec2  u_resolution;
uniform float u_time;
uniform vec2  u_trail[48];
uniform float u_trail_age[48];
uniform int   u_trail_len;

float hash(vec2 p) {
  p = fract(p * vec2(127.1, 311.7));
  p += dot(p, p + 19.19);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i),               hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0; float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p  = p * 2.1 + vec2(1.7, 9.2);
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  vec2 uvF = vec2(uv.x, 1.0 - uv.y); // flip y to match mouse

  float glow = 0.0;

  for (int i = 0; i < 48; i++) {
    if (i >= u_trail_len) break;

    vec2  tp  = u_trail[i];
    float age = u_trail_age[i]; // 0=fresh 1=old

    // ── KEY CHANGE: vertical streak shape ──
    // x distance is narrow — makes it a vertical column
    float dx = abs(uvF.x - tp.x);
    // y distance is stretched upward (flame rises)
    float dy = (uvF.y - tp.y);   // signed — only glow ABOVE the point
    float dyDown = (tp.y - uvF.y); // also a little below

    // Column width narrows with age
    float colWidth = mix(0.055, 0.012, age);

    // x falloff — sharp column
    float xFall = smoothstep(colWidth, 0.0, dx);

    // y falloff — long streak upward, short drip downward
    float streakUp   = smoothstep(mix(0.55, 0.12, age), 0.0, max(dy, 0.0));
    float streakDown = smoothstep(0.06, 0.0, max(dyDown, 0.0));
    float yFall = max(streakUp, streakDown * 0.3);

    float strength = xFall * yFall;

    // organic wobble on edges using noise
    float wobbleX = fbm(vec2(uvF.x * 12.0, uvF.y * 8.0 - u_time * 0.6 + float(i) * 0.5));
    float wobbleY = fbm(vec2(uvF.x * 8.0  + float(i), uvF.y * 14.0 - u_time * 1.1));
    strength *= mix(1.0, wobbleX * wobbleY * 3.5, 0.4 * (1.0 - age));

    // fade with age
    strength *= pow(1.0 - age, 1.8);

    glow += strength;
  }

  glow = clamp(glow * 1.4, 0.0, 1.0);

  // ── Navy color ramp ──────────────────────────────────────────────
  // black -> midnight -> navy-dark -> navy -> navy-bright -> near-white
  vec3 c1 = vec3(0.0,   0.0,   0.0);     // black
  vec3 c2 = vec3(0.098, 0.098, 0.435);   // #191970 midnight
  vec3 c3 = vec3(0.0,   0.0,   0.502);   // #000080 navy
  vec3 c4 = vec3(0.0,   0.4,   0.8);     // #0066cc navy-bright
  vec3 c5 = vec3(0.55,  0.78,  1.0);     // light blue near-white

  vec3 color;
  float t = glow;
  if (t < 0.25)      color = mix(c1, c2, t / 0.25);
  else if (t < 0.5)  color = mix(c2, c3, (t - 0.25) / 0.25);
  else if (t < 0.75) color = mix(c3, c4, (t - 0.5)  / 0.25);
  else               color = mix(c4, c5, (t - 0.75) / 0.25);

  // reduce intensity — dimmed as requested
  color *= 0.72;

  // grain overlay
  float grain = hash(uv * u_resolution * 0.5 + u_time * 100.0);
  color += (grain - 0.5) * 0.04 * max(glow, 0.05);

  gl_FragColor = vec4(color, 1.0);
}
`;

const TRAIL_MAX = 48;

function createShader(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(s));
  }
  return s;
}

function createProgram(gl: WebGLRenderingContext) {
  const prog = gl.createProgram()!;
  gl.attachShader(prog, createShader(gl, gl.VERTEX_SHADER,   VERT));
  gl.attachShader(prog, createShader(gl, gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(prog);
  return prog;
}

type TrailPoint = { x: number; y: number; t: number };

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef  = useRef<TrailPoint[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const prog = createProgram(gl);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(prog, "position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uRes      = gl.getUniformLocation(prog, "u_resolution");
    const uTime     = gl.getUniformLocation(prog, "u_time");
    const uTrail    = gl.getUniformLocation(prog, "u_trail");
    const uTrailAge = gl.getUniformLocation(prog, "u_trail_age");
    const uTrailLen = gl.getUniformLocation(prog, "u_trail_len");

    const FADE = 1800; // ms
    let raf: number;
    const start = performance.now();

    const resize = () => {
      canvas.width  = canvas.offsetWidth  * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const render = () => {
      const now = performance.now();
      const t   = (now - start) / 1000;

      trailRef.current = trailRef.current.filter(p => now - p.t < FADE);
      const trail = trailRef.current.slice(0, TRAIL_MAX);
      const len   = trail.length;

      const positions = new Float32Array(TRAIL_MAX * 2).fill(0);
      const ages      = new Float32Array(TRAIL_MAX).fill(1);
      trail.forEach((p, i) => {
        positions[i * 2]     = p.x;
        positions[i * 2 + 1] = p.y;
        ages[i] = Math.min((now - p.t) / FADE, 1.0);
      });

      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, t);
      gl.uniform2fv(uTrail,    positions);
      gl.uniform1fv(uTrailAge, ages);
      gl.uniform1i(uTrailLen,  len);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      raf = requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect  = e.currentTarget.getBoundingClientRect();
    const x     = (e.clientX - rect.left) / rect.width;
    const y     = (e.clientY - rect.top)  / rect.height;
    const trail = trailRef.current;
    const last  = trail[0];
    if (!last || Math.hypot(x - last.x, y - last.y) > 0.003) {
      trailRef.current = [{ x, y, t: performance.now() }, ...trail].slice(0, TRAIL_MAX);
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen text-white overflow-hidden"
      style={{ backgroundColor: "#000010" }}
    >

      {/* ── Shipping container background image ── */}
      {/* Replace /images/container.jpg with your actual asset path */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/container.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          opacity: 0.18,   // dimmed — just enough to read the structure
          filter: "grayscale(60%) brightness(0.7)",
          mixBlendMode: "luminosity",
        }}
      />

      {/* ── WebGL vertical streak canvas ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10"
        style={{ width: "100%", height: "100%", display: "block", mixBlendMode: "screen" }}
      />

      {/* ── Left-side gradient so text stays readable ── */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: "linear-gradient(to right, #000010 0%, #000010 28%, transparent 55%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-30 flex items-center min-h-screen px-8 lg:px-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-4xl lg:text-7xl font-semibold leading-[1.05]">
            A brand that keeps up with your ambition.
          </h1>
        </div>
      </div>

      <div className="absolute bottom-24 right-24 max-w-md text-neutral-400 z-30">
        <p className="text-lg">
          Branding & web agency based in Brussels. We create visual identities
          and websites that truly reflect who you are.
        </p>
      </div>

    </section>
  );
}