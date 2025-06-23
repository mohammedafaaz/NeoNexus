// Ignore ctx, canvas errors
import { FaLinkedin } from "react-icons/fa";
import { useRef, useEffect } from "react";

// CosmicParticles component: interactive cosmic effect with mouse
function CosmicParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const particles = useRef<any[]>([]);

  useEffect(() => {
    // Safe canvas/ctx logic
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    // Responsive resize
    function handleResize() {
      if (!canvas) return;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", handleResize);

    // Mouse move
    function handleMouseMove(e: MouseEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    }
    canvas.addEventListener("mousemove", handleMouseMove);

    // Particle system
    const PARTICLE_COUNT = 32;
    particles.current = Array.from({ length: PARTICLE_COUNT }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.5, // Increased speed
      vy: (Math.random() - 0.5) * 1.5, // Increased speed
      r: 1.5 + Math.random() * 2.5,
      color: `hsla(${260 + Math.random() * 60}, 100%, 70%, 0.8)`
    }));

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Animate and draw particles
      for (const p of particles.current) {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Mouse interaction: attract/repel
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80) {
          // Repel
          p.vx += dx / dist * 0.04;
          p.vy += dy / dist * 0.04;
        } else {
          // Gentle return to normal
          p.vx *= 0.98;
          p.vy *= 0.98;
        }

        // Boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.8;
        ctx.fill();
        ctx.restore();
      }

      // Draw lines between close particles
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const a = particles.current[i];
          const b = particles.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 60) {
            ctx.save();
            ctx.strokeStyle = "#a78bfa";
            ctx.globalAlpha = 0.15 + 0.25 * (1 - dist / 60);
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-auto"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}

// Add this component above export default
function FloatingSpheres() {
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const handle = (e: MouseEvent) => {
			const { innerWidth, innerHeight } = window;
			const x = (e.clientX / innerWidth - 0.5) * 30;
			const y = (e.clientY / innerHeight - 0.5) * 30;
			el.style.transform = `translate3d(${x}px,${y}px,0)`;
		};
		window.addEventListener('mousemove', handle);
		return () => window.removeEventListener('mousemove', handle);
	}, []);
	return (
		<div ref={ref} className="pointer-events-none absolute left-1/2 top-1/3 z-0" style={{transform: 'translate(-50%,0)'}}>
			<svg width="180" height="180">
				<defs>
					<radialGradient id="sphere1" cx="50%" cy="50%" r="50%">
						<stop offset="0%" stopColor="#8351f7" />
						<stop offset="100%" stopColor="transparent" />
					</radialGradient>
				</defs>
				<circle cx="90" cy="90" r="80" fill="url(#sphere1)" opacity="0.22" />
			</svg>
		</div>
	);
}

export default function ChiefGuestsSection() {
  // Chief Guest Data
  // TO REPLACE PHOTOS: Simply update the "image" URLs below with the paths to your real photos
  // Recommended photo specs:
  // - Square aspect ratio (1:1)
  // - Minimum 400x400 pixels
  // - Professional headshot style
  // - PNG or JPG format
  // You can use relative paths like "/images/guests/person-name.jpg" after adding photos to the public folder
  const guests = [
    {
      name: "Shiva Kumar B",
      role: "Project Director, Bosch Global Software Technologies",
      // Replace this URL with actual photo path when available
      image: "/shivakumar.png",
      description: "Leads cutting-edge software development projects and digital transformation initiatives at Bosch Global Software Technologies.",
      linkedin: "https://www.linkedin.com/in/bshiva05/?originalSubdomain=in"
    },
    {
      name: "Bhargav A K",
      role: "Senior Architect, Bosch Global Software Technologies",
      // Replace this URL with actual photo path when available
      image: "/bhargav.png",
      description: "Expert in designing scalable software architectures with focus on IoT and AI-driven systems for automotive and industrial applications.",
      linkedin: "https://www.linkedin.com/in/b-ak/"
    },
    {
      name: "Chetan D",
      role: "Senior Architect, Bosch Global Software Technologies",
      // Replace this URL with actual photo path when available
      image: "/chetan.png",
      description: "Specializes in cloud architecture and distributed systems with extensive experience in enterprise solution design.",
      linkedin: "https://www.linkedin.com/in/chetan-dayananda-161ba995/?originalSubdomain=in"
    },
    {
      name: "Kishorekumar Sharma",
      role: "Lead, Bosch Global Software Technologies",
      // Replace this URL with actual photo path when available
      image: "/kishorekumar.png",
      description: "Technical leader focused on embedded systems and firmware development for next-generation hardware-software integration.",
      linkedin: "https://www.linkedin.com/in/kishore-kumar-sharma-o-912a9481/"
    },
    {
      name: "Dr. Riyaz A Rahiman",
      role: "Senior Application Engineer, MathWorks Products",
      // Replace this URL with actual photo path when available
      image: "/riyaz.png",
      description: "Expertise in mathematical modeling, simulation, and computational analysis using MATLAB and Simulink at CoreEL Technologies India Pvt Ltd, Bangalore.",
      linkedin: "https://www.linkedin.com/in/dr-riyaz-a-rahiman-4b685595/"
    },
    {
      name: "Dr. Chengappa Munjandira",
      role: "Senior Technologist, Hewlett Packard Enterprises",
      // Replace this URL with actual photo path when available
      image: "/chengappa.png",
      description: "Industry veteran in enterprise technology solutions, also serving as Vice Chair IEEE Bangalore and SIGHT Chair, driving technology for social impact.",
      linkedin: "https://www.linkedin.com/in/chengappa-munjandira-vice-chair-ieeeblrsection/"
    }
  ];

  // Split into chief guests and jury
  const chiefGuests = guests.filter(
    g => g.name === "Shiva Kumar B" || g.name === "Dr. Chengappa Munjandira"
  );
  const jury = guests.filter(
    g => g.name !== "Shiva Kumar B" && g.name !== "Dr. Chengappa Munjandira"
  );

  return (
    <section id="guests" className="py-12 sm:py-16 relative overflow-hidden">
      <FloatingSpheres />
      {/* Cosmic interactive background */}
      <div className="absolute inset-0 z-0">
        <CosmicParticles />
      </div>
      <div className="cyber-grid absolute inset-0 z-0 opacity-30"></div>
      <div className="container mx-auto px-2 sm:px-4 lg:px-8 relative z-10">

        {/* Chief Guests Section */}
        <h3 className="text-3xl font-bold mb-8 neon-text text-center">CHIEF GUESTS</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-12">
          {chiefGuests.map((guest, index) => (
            <div key={index} className="glass-panel overflow-hidden group flex flex-col items-center">
              <div className="aspect-square overflow-hidden rounded-full mx-auto w-32 h-32 sm:w-44 sm:h-44 border-2 border-[var(--primary)]/20 shadow-lg bg-white/10">
                <img 
                  src={guest.image} 
                  alt={guest.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png";
                  }}
                />
              </div>
              <div className="p-4 sm:p-6 text-center w-full">
                <h3 className="text-lg sm:text-xl font-bold mb-1 flex items-center justify-center gap-2">
                  {guest.name}
                  {guest.linkedin && (
                    <a
                      href={guest.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block align-middle text-[#0077b5] hover:text-[#005983]"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={20} className="sm:size-[22px]" />
                    </a>
                  )}
                </h3>
                <p className="text-[var(--primary)] mb-2 sm:mb-4 text-sm sm:text-base">{guest.role}</p>
                <p className="text-[var(--foreground-muted)] text-xs sm:text-sm">{guest.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Eminent Jury Section */}
        <h3 className="text-3xl font-bold mb-8 neon-text text-center">OUR EMINENT JURY'S</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {jury.map((guest, index) => (
            <div
              key={index}
              className={
                "glass-panel overflow-hidden group flex flex-col items-center" +
                (guest.name === "Dr. Riyaz A Rahiman" ? " md:col-start-2" : "")
              }
            >
              <div className="aspect-square overflow-hidden rounded-full mx-auto w-32 h-32 sm:w-44 sm:h-44 border-2 border-[var(--primary)]/20 shadow-lg bg-white/10">
                <img 
                  src={guest.image} 
                  alt={guest.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png";
                  }}
                />
              </div>
              <div className="p-4 sm:p-6 text-center w-full">
                <h3 className="text-lg sm:text-xl font-bold mb-1 flex items-center justify-center gap-2">
                  {guest.name}
                  {guest.linkedin && (
                    <a
                      href={guest.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block align-middle text-[#0077b5] hover:text-[#005983]"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={20} className="sm:size-[22px]" />
                    </a>
                  )}
                </h3>
                <p className="text-[var(--primary)] mb-2 sm:mb-4 text-sm sm:text-base">{guest.role}</p>
                <p className="text-[var(--foreground-muted)] text-xs sm:text-sm">{guest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
