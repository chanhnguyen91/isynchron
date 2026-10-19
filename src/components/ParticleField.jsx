import { useEffect, useRef } from 'react';

const COLORS = [
  [61, 123, 255], // electric blue
  [139, 92, 255], // cyber purple
  [42, 245, 152], // neon green
];
const LINK = 140; // px: nodes closer than this are joined
const POINTER = 180; // px: pointer reach

/**
 * Slowly drifting network of nodes with data "packets" hopping along its links — the
 * internet and AI, in the background of the hero. Canvas 2D, paused when off screen or
 * in a background tab, and drawn once without motion for reduced-motion visitors.
 */
export default function ParticleField({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let nodes = [];
    let packets = [];
    let frame = 0;
    let visible = true;
    const pointer = { x: -9999, y: -9999 };

    function seed() {
      const count = Math.max(36, Math.min(110, Math.round((width * height) / 14000)));
      nodes = Array.from({ length: count }, () => {
        const speed = 0.06 + Math.random() * 0.18;
        const angle = Math.random() * Math.PI * 2;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          r: 0.8 + Math.random() * 1.4,
          c: COLORS[Math.floor(Math.random() * COLORS.length)],
        };
      });
      packets = [];
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      if (reduced) draw();
    }

    function neighbourOf(index) {
      const a = nodes[index];
      const near = [];
      for (let i = 0; i < nodes.length; i++) {
        if (i === index) continue;
        const dx = nodes[i].x - a.x;
        const dy = nodes[i].y - a.y;
        if (dx * dx + dy * dy < LINK * LINK) near.push(i);
      }
      return near.length ? near[Math.floor(Math.random() * near.length)] : -1;
    }

    function step() {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = width + 20;
        if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        if (n.y > height + 20) n.y = -20;
      }
      while (packets.length < Math.min(7, nodes.length / 10)) {
        const from = Math.floor(Math.random() * nodes.length);
        const to = neighbourOf(from);
        if (to < 0) break;
        packets.push({ from, to, t: 0, hops: 0 });
      }
      packets = packets.filter((p) => {
        p.t += 0.014;
        if (p.t < 1) return true;
        // Arrived: hop on to a neighbour of the node it reached, a few times.
        const next = neighbourOf(p.to);
        if (next < 0 || p.hops > 5) return false;
        p.from = p.to;
        p.to = next;
        p.t = 0;
        p.hops += 1;
        return true;
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > LINK * LINK) continue;
          const alpha = (1 - Math.sqrt(d2) / LINK) * 0.28;
          ctx.strokeStyle = `rgba(${a.c[0]}, ${a.c[1]}, ${a.c[2]}, ${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
        const pdx = a.x - pointer.x;
        const pdy = a.y - pointer.y;
        const pd = Math.sqrt(pdx * pdx + pdy * pdy);
        if (pd < POINTER) {
          ctx.strokeStyle = `rgba(42, 245, 152, ${(1 - pd / POINTER) * 0.45})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = `rgba(${n.c[0]}, ${n.c[1]}, ${n.c[2]}, 0.85)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      for (const p of packets) {
        const a = nodes[p.from];
        const b = nodes[p.to];
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 9);
        glow.addColorStop(0, 'rgba(180, 255, 220, 0.95)');
        glow.addColorStop(1, 'rgba(42, 245, 152, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, 9, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function loop() {
      if (visible && !document.hidden) {
        step();
        draw();
      }
      frame = requestAnimationFrame(loop);
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();

    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    visibility.observe(canvas);

    function onPointerMove(event) {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    }
    function onPointerLeave() {
      pointer.x = -9999;
      pointer.y = -9999;
    }

    if (!reduced) {
      window.addEventListener('pointermove', onPointerMove, { passive: true });
      document.addEventListener('pointerleave', onPointerLeave);
      frame = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibility.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={`h-full w-full ${className}`} />;
}
