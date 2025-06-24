//ctx, canvas Errors are negligible
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Countdown from 'react-countdown';
import Orb from './Orb';

const eventDate = new Date('2025-09-06T09:00:00');

// DecryptText component for decrypted text effect
function DecryptText({ text, className }: { text: string; className?: string }) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let frame = 0;
    let revealed = '';
    let raf: number;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    function decryptStep() {
      if (frame <= text.length) {
        revealed = text.slice(0, frame);
        let randomPart = '';
        for (let i = 0; i < text.length - frame; i++) {
          const char = text[frame + i];
          randomPart += char === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)];
        }
        setDisplayed(revealed + randomPart);
        frame++;
        raf = window.setTimeout(decryptStep, 120); // time for completing the text effect
      } else {
        setDisplayed(text);
      }
    }
    decryptStep();
    return () => clearTimeout(raf);
  }, [text]);
  return <h1 className={className}>{displayed}</h1>;
}

// CosmicStarfield component: 3D starfield with slow movement
function CosmicStarfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const dpr = window.devicePixelRatio || 1;
    let width = canvas.offsetWidth * dpr;
    let height = canvas.offsetHeight * dpr;
    canvas.width = width;
    canvas.height = height;

    const STAR_COUNT = 80;
    const STAR_SPEED = 0.2; // lower = slower

    function resetStar(star: any) {
      star.x = (Math.random() - 0.5) * width * 1.2;
      star.y = (Math.random() - 0.5) * height * 1.2;
      star.z = Math.random() * width * 0.5 + width * 0.2;
      star.pz = star.z;
      star.size = 0.7 + Math.random() * 1.7;
      star.color = `hsl(${260 + Math.random() * 60}, 100%, ${60 + Math.random() * 30}%)`;
    }

    // Initialize stars
    starsRef.current = Array.from({ length: STAR_COUNT }).map(() => {
      const star: any = {};
      resetStar(star);
      return star;
    });

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (const star of starsRef.current) {
        // Move star forward in z
        star.pz = star.z;
        star.z -= STAR_SPEED * dpr;

        // Project to 2D
        const sx = width / 2 + (star.x / star.z) * width * 0.4;
        const sy = height / 2 + (star.y / star.z) * height * 0.4;
        const px = width / 2 + (star.x / star.pz) * width * 0.4;
        const py = height / 2 + (star.y / star.pz) * height * 0.4;

        // Fade in/out at edges
        let alpha = 1;
        if (star.z < 60 || sx < 0 || sx > width || sy < 0 || sy > height) {
          resetStar(star);
          continue;
        }
        if (star.z > width * 0.6) alpha = 0.2 + 0.8 * (1 - (star.z - width * 0.2) / (width * 0.4));

        // Draw star trail
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = star.color;
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 8;
        ctx.lineWidth = star.size;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.stroke();
        ctx.restore();

        // Draw star point
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(sx, sy, star.size * 0.7, 0, 2 * Math.PI);
        ctx.fillStyle = star.color;
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    function handleResize() {
      if (!canvas) return;
      width = canvas.offsetWidth * dpr;
      height = canvas.offsetHeight * dpr;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-10 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  );
}

export default function HeroSection() {
  const navigate = useNavigate();

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      return <span className="text-[var(--accent)]">Event has started!</span>;
    } else {
      return (
        <div className="grid grid-cols-4 gap-6 max-w-lg mx-auto">
          {[
            { value: days, label: "DAYS" },
            { value: hours, label: "HOURS" },
            { value: minutes, label: "MINUTES" },
            { value: seconds, label: "SECONDS" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="glass-panel w-full py-4 text-3xl md:text-5xl font-bold neon-text text-[var(--primary)]">
                {item.value < 10 ? `0${item.value}` : item.value}
              </div>
              <span className="mt-2 text-xs md:text-sm font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <section className="py-16 flex flex-col justify-center items-center relative overflow-hidden">
      {/* CosmicStarfield as background */}
      <CosmicStarfield />
      {/* Neon text animation styles */}
      <style>
        {`
        @keyframes neonPulse {
          0%, 100% {
            /* Removed text-shadow glow */
            filter: brightness(1.1);
            transform: translateX(0px) scale(1);
          }
          50% {
            /* Removed text-shadow glow */
            filter: brightness(1.25);
            transform: translateX(3px) scale(1.03);
          }
        }
        .neon-animated-text {
          animation: neonPulse 2.8s infinite cubic-bezier(.4,0,.2,1);
          will-change: filter, transform;
          transition: color 0.2s;
        }
        `}
      </style>
      {/* Orb background with centered logo and top margin */}
      <div
        style={{
          width: '100%',
          height: '155px',
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          marginTop: '7rem',
          marginBottom: '3rem', 
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          <img
            src="/neonexus.png"
            alt="NeoNexus Logo"
            className="h-24 w-auto drop-shadow-[0_0_16px_rgba(139,92,246,0.8)]"
            draggable={false}
          />
        </div>
        <Orb
          hoverIntensity={1}
          rotateOnHover={true}  
          hue={300}
          forceHoverState={true}
        />
      </div>
      <div className="absolute inset-0 bg-[var(--background-dark)] opacity-0 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center mt-24">
        <div className="mb-4">
          {/* Remove logo from here */}
          <DecryptText
            text="NEONEXUS  36.0"
            className="neon-animated-text text-5xl md:text-8xl font-bold mb-2 mt-32 mr-1 neon-text text-[var(--primary)]"
          />
          <p className="text-xl md:text-2xl mb-4 text-[var(--foreground-muted)]">
            Bridging reality and digital frontiers
          </p>

          {/* Announcement Box with white glowing marquee and clickable text */}
          <div
            className="announcement-box bg-[var(--primary)]/10 border border-[var(--primary)]/30 py-1.5 px-2 rounded-md max-w-md sm:max-w-xl mx-auto mb-6 flex items-center justify-center overflow-hidden relative"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
            }}
          >
            <div
              className="announcement-marquee"
              style={{
                display: 'flex',
                whiteSpace: 'nowrap',
                minWidth: '100%',
                willChange: 'transform'
              }}
            >
              <a
                href="https://forms.gle/QzqqC1dw3dwpdYxc7"
                target="_blank"
                rel="noopener noreferrer"
                className="announcement-text neon-text"
                style={{ cursor: 'pointer', textDecoration: 'none' }}
              >
                Call for Abstract - Click here to Submit - Deadline 5th August 2025 
              </a>
              {/* Duplicate for seamless marquee */}
              <a
                href="https://forms.gle/QzqqC1dw3dwpdYxc7"
                target="_blank"
                rel="noopener noreferrer"
                className="announcement-text neon-text"
                style={{ cursor: 'pointer', textDecoration: 'none' }}
                aria-hidden="true"
                tabIndex={-1}
              >
                Call for Abstract - Click here to Submit - Deadline 5th August 2025 
              </a>
            </div>
            <style>
              {`
                .announcement-marquee {
                  animation: announcement-marquee-scroll 15s linear infinite;
                }
                @keyframes announcement-marquee-scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .announcement-text {
                  color:rgb(222, 222, 222);
                  font-family: 'Cinzel', serif;
                  font-weight: 300;
                  font-size: 1.05rem;
                  margin: 0 1.2rem;
                  display: inline-block;
                  opacity: 0.96;
                  transition: opacity 2s;
                }
                @media (max-width: 640px) {
                  .announcement-box {
                    max-width: 95vw !important;
                    padding-left: 0.5rem !important;
                    padding-right: 0.5rem !important;
                  }
                  .announcement-text {
                    font-size: 0.93rem;
                    margin: 0 0.5rem;
                  }
                }
                .announcement-box {
                  position: relative;
                  overflow: hidden;
                }
                .announcement-box::before,
                .announcement-box::after {
                  content: '';
                  position: absolute;
                  top: 0;
                  width: 28px;
                  height: 100%;
                  z-index: 2;
                  pointer-events: none;
                }
                .announcement-box::before {
                  left: 0;
                  background: linear-gradient(to right, #111 0%, transparent 100%);
                }
                .announcement-box::after {
                  right: 0;
                  background: linear-gradient(to left, #111 0%, transparent 100%);
                }
              `}
            </style>
          </div>

          <h2 className="text-xl md:text-2xl mb-4 font-semibold">
            September 6-7, 2025
          </h2>
          <div className="mb-8">
            <Countdown date={eventDate} renderer={renderer} />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              className="neon-button flex items-center justify-center gap-2"
              onClick={() => navigate('/Register')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shimmer-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth={1}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Register Now
            </button>
            <button
              className="neon-button flex items-center justify-center gap-2 font-semibold"
              onClick={() => window.open('/AbstractTemplate.pdf', '_blank')}
            >
              <span className="w-full text-center">Abstract Template</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shimmer-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth={1}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
            </button>
          </div>
          {/* Venue neon-text */}
          <div className="flex justify-center mt-3">
            <span className="flex items-center text-sm neon-text text-white font-semibold drop-shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
              </svg>
              Venue: BITM College, Ballari, Karnataka
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
