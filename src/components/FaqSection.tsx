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
      answer: "Yes, there is a nominal registration fee of ₹1000 per team. This covers participation, meals, and accommodation for the duration of the event."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Participants should bring their college ID, laptops, chargers, and any specialized hardware they wish to work with. Basic components for the hardware track will be provided."
    },
    {
      question: "Will accommodation be provided?",
      answer: "Yes, accommodation will be provided for all participants in the BITM campus for the duration of the event."
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
    <section id="faq" className="py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 neon-text text-center">FREQUENTLY ASKED QUESTIONS</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full glass-panel p-4 flex justify-between items-center ${
                  openIndex === index ? 'border border-[var(--primary)]' : ''
                }`}
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-left font-semibold text-lg">{faq.question}</h3>
                {openIndex === index ? 
                  <ChevronUp className="w-5 h-5 text-[var(--primary)]" /> : 
                  <ChevronDown className="w-5 h-5" />
                }
              </button>
              
              {openIndex === index && (
                <div className="glass-panel p-4 mt-1 text-[var(--foreground-muted)]">
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
