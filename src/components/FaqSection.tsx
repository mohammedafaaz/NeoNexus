import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
      answer: "Yes, there is a nominal registration fee of ₹800 + 18% GST and ₹500 + 18% GST per team. This covers participation, meals, and accommodation for the duration of the event."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Participants should bring their college ID, laptops, chargers, and any specialized hardware they wish to work with. Basic components for the hardware track will be provided."
    },
    {
      question: "What if I don't have a team?",
      answer: "Don't worry! We will have a team formation session before the event where solo participants can find teammates with complementary skills."
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
    <section id="faq" className="py-12 sm:py-16 relative">
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
