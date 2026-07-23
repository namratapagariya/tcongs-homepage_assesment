import { useEffect, useRef } from "react";

export default function MouseTrail() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -100, y: -100 });
  const coreRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let animationId;

    function resize() {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    function handleMove(e) {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // spawn a small wisp of dispersing air particles
      const count = 2 + Math.floor(Math.random() * 2);
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.15 + Math.random() * 0.5;
        particlesRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 10,
          y: e.clientY + (Math.random() - 0.5) * 10,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.25,
          wobble: Math.random() * Math.PI * 2,
          wobbleSpeed: 0.03 + Math.random() * 0.03,
          life: 1,
          decay: 0.006 + Math.random() * 0.008,
          size: 6 + Math.random() * 10,
          hue: 195 + Math.random() * 35, // cyan → blue range
        });
      }
      if (particlesRef.current.length > 200) {
        particlesRef.current.splice(0, particlesRef.current.length - 200);
      }
    }
    window.addEventListener("pointermove", handleMove);

    function loop() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // soft glowing core, lags gently behind the real cursor
      coreRef.current.x += (mouseRef.current.x - coreRef.current.x) * 0.14;
      coreRef.current.y += (mouseRef.current.y - coreRef.current.y) * 0.14;

      const glow = ctx.createRadialGradient(
        coreRef.current.x,
        coreRef.current.y,
        0,
        coreRef.current.x,
        coreRef.current.y,
        34
      );
      glow.addColorStop(0, "rgba(103,232,249,0.35)");
      glow.addColorStop(0.5, "rgba(103,232,249,0.14)");
      glow.addColorStop(1, "rgba(103,232,249,0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(coreRef.current.x, coreRef.current.y, 34, 0, Math.PI * 2);
      ctx.fill();

      // dispersing air wisps
      particlesRef.current.forEach((p) => {
        p.wobble += p.wobbleSpeed;
        p.x += p.vx + Math.sin(p.wobble) * 0.3;
        p.y += p.vy + Math.cos(p.wobble * 0.7) * 0.15;
        p.vy -= 0.004; // gentle upward rise like air
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.life -= p.decay;
      });
      particlesRef.current = particlesRef.current.filter((p) => p.life > 0);

      particlesRef.current.forEach((p) => {
        const eased = 1 - Math.pow(1 - p.life, 2);
        const alpha = Math.max(eased, 0) * 0.22;
        const r = p.size * (1 + (1 - p.life) * 3.5); // expands as it dissolves
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
        grad.addColorStop(0, `hsla(${p.hue}, 90%, 75%, ${alpha})`);
        grad.addColorStop(0.5, `hsla(${p.hue}, 90%, 70%, ${alpha * 0.4})`);
        grad.addColorStop(1, `hsla(${p.hue}, 90%, 70%, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
      style={{ mixBlendMode: "screen", filter: "blur(3px)" }}
    />
  );
}