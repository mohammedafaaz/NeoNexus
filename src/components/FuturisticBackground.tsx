import { useEffect, useRef } from 'react';

export default function FuturisticBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Responsive resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext('2d');
    };
    window.addEventListener('resize', handleResize);

    // Particle system
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 1,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      hue: 260 + Math.random() * 80,
    }));

    function drawGrid() {
      if (!ctx) return;
      ctx.save();
      ctx.globalAlpha = 0.18;
      ctx.strokeStyle = 'rgba(139,92,246,0.7)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();
    }

    function drawParticles() {
      if (!ctx) return;
      for (const p of particles) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.shadowColor = `hsl(${p.hue}, 100%, 70%)`;
        ctx.shadowBlur = 16;
        ctx.fillStyle = `hsl(${p.hue}, 100%, 60%)`;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.restore();

        // Move
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      drawGrid();
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -10,
        pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 50% 60%, #181a2a 60%, #0a0a16 100%)',
      }}
      aria-hidden="true"
    />
  );
}
