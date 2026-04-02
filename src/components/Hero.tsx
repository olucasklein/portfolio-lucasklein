'use client';

import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Dot {
  bx: number; by: number;  // base position
  x: number;  y: number;   // current (displaced) position
  r: number;               // radius
  a: number;               // alpha
}

interface AuroraBlob {
  xFactor: number;
  yFactor: number;
  rx: number;
  ry: number;
  rotation: number;
  color: [number, number, number];
  phaseOffset: number;
  speedMult: number;
}

// ─── Aurora Canvas ─────────────────────────────────────────────────────────────

function AuroraCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Store mouse in a ref so it's always fresh inside rAF without re-renders
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let raf = 0;
    let t = 0;
    let dots: Dot[] = [];

    // ── Config ──────────────────────────────────────────────────────────────
    const DOT_GAP    = 26;
    const DOT_BASE_R = 1.0;
    const GRAVITY_R  = 160;   // black hole radius of influence
    const GRAV_STR   = 0.72;  // max pull factor (0=none, 1=fully snapped to cursor)

    // Aurora blobs — positioned lower half, sweeping diagonally
    const blobs: AuroraBlob[] = [
      // Giant violet bottom-left anchor
      { xFactor: 0.08, yFactor: 0.88, rx: 0.68, ry: 0.28, rotation: -0.20,
        color: [120, 40, 230], phaseOffset: 0.0, speedMult: 1.0 },
      // Purple center ribbon
      { xFactor: 0.42, yFactor: 0.92, rx: 0.60, ry: 0.22, rotation: -0.12,
        color: [180, 40, 220], phaseOffset: 1.1, speedMult: 0.85 },
      // Cyan/teal right
      { xFactor: 0.82, yFactor: 0.84, rx: 0.52, ry: 0.24, rotation: -0.08,
        color: [20, 200, 200], phaseOffset: 2.3, speedMult: 0.95 },
      // Blue-indigo left bridge
      { xFactor: 0.26, yFactor: 0.96, rx: 0.48, ry: 0.18, rotation: -0.18,
        color: [80, 80, 240], phaseOffset: 0.6, speedMult: 1.1 },
      // Magenta accent mid-right
      { xFactor: 0.62, yFactor: 0.90, rx: 0.38, ry: 0.16, rotation: -0.10,
        color: [210, 30, 180], phaseOffset: 1.8, speedMult: 0.78 },
      // Deep emerald far-right
      { xFactor: 0.95, yFactor: 0.93, rx: 0.30, ry: 0.14, rotation: -0.05,
        color: [10, 180, 120], phaseOffset: 3.0, speedMult: 0.90 },
    ];

    // ── Build dot grid ────────────────────────────────────────────────────────
    const buildDots = (w: number, h: number) => {
      dots = [];
      for (let bx = DOT_GAP / 2; bx < w; bx += DOT_GAP) {
        for (let by = DOT_GAP / 2; by < h; by += DOT_GAP) {
          dots.push({ bx, by, x: bx, y: by, r: DOT_BASE_R, a: 0.10 });
        }
      }
    };

    // ── Resize ────────────────────────────────────────────────────────────────
    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      buildDots(canvas.width, canvas.height);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // ── Mouse — listen on window so canvas pointer-events:none still works ────
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => { mouse.current = { x: -9999, y: -9999 }; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);

    // ── Draw aurora layer ─────────────────────────────────────────────────────
    const drawBlob = (
      w: number, h: number,
      blob: AuroraBlob,
      time: number
    ) => {
      const { xFactor, yFactor, rx, ry, rotation, color, phaseOffset, speedMult } = blob;
      const p  = time * 0.0018 * speedMult + phaseOffset;

      // Organic positional drift (amplified for visible movement)
      const cx = (xFactor + Math.sin(p * 0.8) * 0.18) * w;
      const cy = (yFactor + Math.cos(p * 0.9) * 0.12) * h;
      
      // Dynamic rotation and pulsating size
      const rot = rotation + Math.sin(p * 0.5) * 0.4;
      const rX  = rx * w * (1 + Math.sin(p * 1.2) * 0.15);
      const rY  = ry * h * (1 + Math.cos(p * 1.1) * 0.15);

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);

      // Soft outer halo — very subtle
      ctx.filter = 'blur(70px)';
      const outerGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, Math.max(rX, rY) * 1.4);
      outerGrad.addColorStop(0,   `rgba(${color[0]},${color[1]},${color[2]},0.22)`);
      outerGrad.addColorStop(0.5, `rgba(${color[0]},${color[1]},${color[2]},0.07)`);
      outerGrad.addColorStop(1,   `rgba(${color[0]},${color[1]},${color[2]},0)`);
      ctx.fillStyle = outerGrad;
      ctx.beginPath();
      ctx.ellipse(0, 0, rX * 1.4, rY * 1.4, 0, 0, Math.PI * 2);
      ctx.fill();

      // Inner core — atmospheric glow
      ctx.filter = 'blur(28px)';
      const innerGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, Math.max(rX, rY) * 0.75);
      innerGrad.addColorStop(0,   `rgba(${color[0]},${color[1]},${color[2]},0.38)`);
      innerGrad.addColorStop(0.55,`rgba(${color[0]},${color[1]},${color[2]},0.14)`);
      innerGrad.addColorStop(1,   `rgba(${color[0]},${color[1]},${color[2]},0)`);
      ctx.fillStyle = innerGrad;
      ctx.beginPath();
      ctx.ellipse(0, 0, rX, rY, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.filter = 'none';
      ctx.restore();
    };

    // ── Render loop ───────────────────────────────────────────────────────────
    const render = () => {
      t++;
      const w = canvas.width;
      const h = canvas.height;
      const mx = mouse.current.x;
      const my = mouse.current.y;

      ctx.clearRect(0, 0, w, h);

      // Dark base
      ctx.fillStyle = '#07070a';
      ctx.fillRect(0, 0, w, h);

      // ── Aurora — blended with 'screen' for luminous color mixing ──
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      blobs.forEach(blob => drawBlob(w, h, blob, t));
      ctx.restore();

      // ── Top gradient mask — keeps aurora in lower half ──
      ctx.save();
      const topMask = ctx.createLinearGradient(0, 0, 0, h * 0.65);
      topMask.addColorStop(0,   'rgba(7,7,10,1)');
      topMask.addColorStop(0.6, 'rgba(7,7,10,0.6)');
      topMask.addColorStop(1,   'rgba(7,7,10,0)');
      ctx.fillStyle = topMask;
      ctx.fillRect(0, 0, w, h * 0.65);
      ctx.restore();

      // ── Interactive dots — black hole gravity well ──
      ctx.save();
      ctx.globalCompositeOperation = 'source-over';

      dots.forEach(d => {
        const ddx  = mx - d.bx;
        const ddy  = my - d.by;
        const dist = Math.sqrt(ddx * ddx + ddy * ddy);

        if (dist < GRAVITY_R && mx > 0) {
          // Normalised distance 0 (at cursor) → 1 (edge of radius)
          const t = dist / GRAVITY_R;
          // Pull factor: strong near center, zero at edge — eased with (1-t)²
          const pull = GRAV_STR * (1 - t) * (1 - t);

          // Displace dot TOWARD the cursor
          d.x = d.bx + ddx * pull;
          d.y = d.by + ddy * pull;

          // Void in the center: dots very close fully disappear
          // t=0 → a=0 (invisible), t=1 → a=baseA (full)
          d.a = 0.10 * Math.pow(t, 0.6);
          d.r = DOT_BASE_R * (0.3 + t * 0.7);
        } else {
          // Snap back smoothly
          d.x += (d.bx - d.x) * 0.12;
          d.y += (d.by - d.y) * 0.12;
          d.a += (0.10   - d.a) * 0.10;
          d.r += (DOT_BASE_R - d.r) * 0.10;
        }

        ctx.fillStyle = `rgba(255,255,255,${d.a})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();

      raf = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ background: '#07070a' }}
    >
      <AuroraCanvas />

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="max-w-2xl">

          {/* Main heading */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="text-sm md:text-base font-light text-white/50 mb-3 tracking-wide">
              {t('hero.greeting')}
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.95] mb-6 tracking-tight">
              Lucas
              <br />
              <span className="italic">Klein</span>
            </h1>
          </div>

          {/* Role */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="text-lg md:text-xl text-white/65 font-light mb-8 max-w-md leading-relaxed">
              {t('hero.role')}
              <span className="block text-sm mt-2 opacity-50">
                {t('hero.experience')} · React · Next.js · Angular · TypeScript
              </span>
            </p>
          </div>

          {/* CTAs */}
          <div className={`flex flex-wrap gap-4 mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <a href="#projetos" className="btn-primary group">
              {t('hero.viewProjects')}
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#contato" className="btn-outline">
              {t('hero.contactMe')}
            </a>
          </div>

          {/* Social */}
          <div className={`flex items-center gap-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <a href="https://github.com/olucasklein" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/olucasklein/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="mailto:olucasklein@hotmail.com" className="social-icon" aria-label="Email">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a href="https://wa.me/5522999165664" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-white/80 text-[10px] tracking-[0.3em] uppercase font-medium">{t('hero.scroll')}</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/70 to-transparent" />
      </div>
    </section>
  );
}
