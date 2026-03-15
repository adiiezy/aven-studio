"use client";

import { useEffect, useRef } from "react";

const VERT = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;

uniform vec2  u_resolution;
uniform float u_time;
uniform vec2  u_trail[48];
uniform float u_trail_age[48];
uniform int   u_trail_len;
uniform vec2  u_mouse;
uniform float u_mouse_active;

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
    mix(hash(i),                  hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0; float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p  = p * 2.1 + vec2(1.7, 9.2);
    a *= 0.5;
  }
  return v;
}

// ── Corrugated vertical ridges ──────────────────────────────────
// Static — no u_time dependency so ridges never move
float corrugated(vec2 uv, float aspect) {
  float ridgeCount = 28.0;
  float x = uv.x * aspect * ridgeCount;

  // Position within one ridge cycle (0..1)
  float cx = fract(x);

  // Each ridge = smooth cosine bump
  // Peak at cx=0.5, troughs at cx=0 and cx=1
  float ridge = cos((cx - 0.5) * 3.14159 * 1.6);
  ridge = ridge * 0.5 + 0.5; // remap to 0..1

  // Narrow dark groove at the seam (cx near 0 or 1)
  float groove = smoothstep(0.0, 0.12, cx) * smoothstep(1.0, 0.88, cx);

  // Specular highlight — narrow bright line near ridge peak
  float highlight = pow(max(0.0, cos((cx - 0.5) * 3.14159 * 2.8)), 6.0);

  float surface = ridge * groove + highlight * 0.35;

  // Subtle imperfection — vary ridge brightness slightly per column
  float col = floor(x);
  float imperfect = 0.85 + 0.15 * hash(vec2(col, 7.3));
  surface *= imperfect;

  return clamp(surface, 0.0, 1.0);
}

void main() {
  vec2 uv      = gl_FragCoord.xy / u_resolution;
  float aspect = u_resolution.x / u_resolution.y;
  vec2 uvF     = vec2(uv.x, 1.0 - uv.y);

  // ── 1. Corrugated surface ─────────────────────────────────────
  float surf = corrugated(uvF, aspect);

  // Distance from mouse (aspect corrected)
  vec2  dMouse = (uvF - u_mouse) * vec2(aspect, 1.0);
  float mDist  = length(dMouse);
  float reveal = smoothstep(0.42, 0.0, mDist) * u_mouse_active;

  // Dark base — barely visible ridges in the dark
  vec3 darkMetal  = vec3(0.0, 0.0, 0.06) + vec3(0.0, 0.01, 0.04) * surf * 0.25;

  // Lit version — blue metallic when mouse is near
  // Matches the blue corrugated metal in the reference
  vec3 litMetal   = vec3(0.0, 0.12, 0.45) + vec3(0.05, 0.25, 0.65) * surf;
  // Specular pop on the ridge highlights
  litMetal       += vec3(0.1, 0.35, 0.85) * pow(surf, 3.0) * 0.6;

  vec3 metalColor = mix(darkMetal, litMetal, reveal);

  // ── 2. > trail glow ──────────────────────────────────────────
  float glow = 0.0;

  for (int i = 0; i < 48; i++) {
    if (i >= u_trail_len) break;

    vec2  tp  = u_trail[i];
    float age = u_trail_age[i];

    float dx = (uvF.x - tp.x) * aspect;
    float dy = (uvF.y - tp.y);

    // tip at cursor, fans RIGHT
    if (dx < 0.0) continue;

    float distRight = dx;

    float coneAngle = 0.72;
    float maxDY     = distRight * coneAngle;
    float absDY     = abs(dy);
    if (absDY > maxDY + 0.006) continue;

    float edgeDist     = maxDY - absDY;
    float armGlow      = smoothstep(0.0, 0.022, edgeDist);
    float armStrength  = 1.0 - smoothstep(maxDY * 0.3, maxDY * 0.8, absDY);
    float hollowFactor = 1.0 - armStrength * 0.55;

    float tailReach = mix(0.55, 0.10, age);
    float tailFade  = smoothstep(tailReach, tailReach * 0.04, distRight);
    float tipGlow   = pow(smoothstep(tailReach, 0.0, distRight), 1.3);

    float strength = armGlow * hollowFactor * tailFade * tipGlow;

    float wobble = fbm(vec2(uvF.x * 10.0 + float(i) * 0.3, uvF.y * 8.0 - u_time * 0.3));
    strength *= mix(1.0, wobble * 1.6, 0.22 * (1.0 - age));
    strength *= pow(1.0 - age, 1.2);

    glow += strength;
  }

  // Reduce glow by 40%
  glow = clamp(glow * 2.0 * 0.6, 0.0, 1.0);

  // Navy trail color ramp
  vec3 c1 = vec3(0.0,  0.0,  0.0);
  vec3 c2 = vec3(0.0,  0.0,  0.251);
  vec3 c3 = vec3(0.0,  0.0,  0.502);
  vec3 c4 = vec3(0.0,  0.4,  0.8);
  vec3 c5 = vec3(0.65, 0.85, 1.0);

  vec3 trailColor;
  float t = glow;
  if (t < 0.25)      trailColor = mix(c1, c2, t / 0.25);
  else if (t < 0.5)  trailColor = mix(c2, c3, (t - 0.25) / 0.25);
  else if (t < 0.75) trailColor = mix(c3, c4, (t - 0.5)  / 0.25);
  else               trailColor = mix(c4, c5, (t - 0.75) / 0.25);
  trailColor *= 0.9;

  // ── 3. Composite — corrugated always behind glow ─────────────
  // metalColor is the shipping pattern (lit or dark)
  // trailColor sits on top as additive glow
  // This ensures the ridge pattern is always visible beneath the trail
  vec3 color = metalColor + trailColor * (1.0 - glow * 0.4);

  // grain — adds the painted metal texture feel
  float grain = hash(uv * u_resolution * 0.5 + u_time * 100.0);
  color += (grain - 0.5) * 0.03 * max(reveal + glow * 0.5, 0.015);

  gl_FragColor = vec4(color, 1.0);
}
`;

const TRAIL_MAX = 48;

function createShader(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.error("Shader error:", gl.getShaderInfoLog(s));
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
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const trailRef     = useRef<TrailPoint[]>([]);
  const mouseRef     = useRef({ x: 0.5, y: 0.5 });
  const activeRef    = useRef(0);
  const smoothActive = useRef(0);

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

    const uRes         = gl.getUniformLocation(prog, "u_resolution");
    const uTime        = gl.getUniformLocation(prog, "u_time");
    const uTrail       = gl.getUniformLocation(prog, "u_trail");
    const uTrailAge    = gl.getUniformLocation(prog, "u_trail_age");
    const uTrailLen    = gl.getUniformLocation(prog, "u_trail_len");
    const uMouse       = gl.getUniformLocation(prog, "u_mouse");
    const uMouseActive = gl.getUniformLocation(prog, "u_mouse_active");

    const FADE = 4500; // slower fade = more lingering trail
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

      smoothActive.current += (activeRef.current - smoothActive.current) * 0.03;

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
      gl.uniform2f(uMouse, mouseRef.current.x, 1.0 - mouseRef.current.y);
      gl.uniform1f(uMouseActive, smoothActive.current);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      raf = requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x    = (e.clientX - rect.left) / rect.width;
    const y    = (e.clientY - rect.top)  / rect.height;
    mouseRef.current  = { x, y };
    activeRef.current = 1;
    const trail = trailRef.current;
    const last  = trail[0];
    if (!last || Math.hypot(x - last.x, y - last.y) > 0.006) {
      trailRef.current = [{ x, y, t: performance.now() }, ...trail].slice(0, TRAIL_MAX);
    }
  };

  const handleMouseLeave = () => {
    activeRef.current = 0;
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen text-white overflow-hidden"
      style={{ backgroundColor: "#00000f" }}
    >
      {/* WebGL canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10"
        style={{ width: "100%", height: "100%", display: "block" }}
      />

      {/* Left gradient — keeps text readable */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: "linear-gradient(to right, #00000f 0%, #00000f 22%, transparent 50%)",
        }}
      />

      {/* Content */}
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