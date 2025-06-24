import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function RotatingCube() {
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		let mouseX = 0, mouseY = 0;
		const handle = (e: MouseEvent) => {
			const { innerWidth, innerHeight } = window;
			mouseX = (e.clientX / innerWidth - 0.5) * 60;
			mouseY = (e.clientY / innerHeight - 0.5) * 60;
			el.style.transform = `perspective(600px) rotateX(${-mouseY}deg) rotateY(${mouseX}deg)`;
		};
		window.addEventListener('mousemove', handle);
		return () => window.removeEventListener('mousemove', handle);
	}, []);
	return (
		<div ref={ref} className="absolute right-10 top-10 z-0 pointer-events-none transition-transform duration-300" style={{width: 80, height: 80}}>
			<svg width="80" height="80" viewBox="0 0 80 80">
				<g>
					<rect x="20" y="20" width="40" height="40" fill="#8351f7" opacity="0.13" />
					<rect x="10" y="10" width="40" height="40" fill="#06b6d4" opacity="0.09" />
					<rect x="30" y="30" width="40" height="40" fill="#ec4899" opacity="0.09" />
				</g>
			</svg>
		</div>
	);
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: "Who can participate in NeoNexus 2025?",
      answer: "NeoNexus is open to all college students (undergraduate and postgraduate) from any institution across India. You must have a valid college ID to participate."
    },
    {
      question: "How many members can be in a team?",
      answer: "Each team must have a minimum of 3 and a maximum of 4 members. We encourage diversity in team formation."
    },
    {
      question: "Is there a registration fee?",
      answer: "Yes, there is a nominal registration fee if shortlisted for NeoNexus Hackathon i.e. ₹800 + 18% GST and for IEEE Members ₹500 + 18% GST per team, all team members must be IEEE members. For Poster Presentation a registration fee of ₹200 + 18% GST per team and for IEEE members ₹100 + 18% GST per team, all team members must be IEEE members. This covers participation, meals, and accommodation for the duration of the event."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Participants should bring their college ID, laptops, chargers, and any specialized hardware they wish to work with. Basic components for the hardware track will be provided."
    },
    {
      question: "Will there be food and refreshments?",
      answer: "Absolutely! We will provide meals and refreshments throughout the 36 hours of the hackathon."
    },
    {
      question: "Can I start working on my project before the hackathon?",
      answer: "No, all projects must be started from scratch during the hackathon. You can come prepared with ideas, but the actual development must begin only after the problem statements are revealed."
    }
  ];
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 relative overflow-hidden">
			<RotatingCube />
      {/* 3D Decorative Element (top left) */}
      <div className="absolute left-0 top-0 z-0 pointer-events-none">
        <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-30">
          <defs>
            <radialGradient id="faqgrad1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8351f7" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="50" fill="url(#faqgrad1)" />
        </svg>
      </div>
      <div className="container mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold mb-8 neon-text text-center">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full glass-panel p-3 sm:p-4 flex justify-between items-center ${
                  openIndex === index ? 'border border-[var(--primary)]' : ''
                }`}
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-left font-semibold text-base sm:text-lg">{faq.question}</h3>
                {openIndex === index ? 
                  <ChevronUp className="w-5 h-5 text-[var(--primary)]" /> : 
                  <ChevronDown className="w-5 h-5" />
                }
              </button>
              {openIndex === index && (
                <div className="glass-panel p-3 sm:p-4 mt-1 text-[var(--foreground-muted)] text-sm">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
