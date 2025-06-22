import { Bed, Coffee, HeartPulse, PlugZap, Utensils, Wifi } from 'lucide-react';

const facilities = [
  {
    icon: <Wifi className="w-8 h-8 text-[var(--primary)]" />,
    title: "High-Speed Wi-Fi",
    description: "Enterprise-grade connection with redundant backups to ensure uninterrupted coding"
  },
  {
    icon: <Coffee className="w-8 h-8 text-[var(--primary)]" />,
    title: "Unlimited Refreshments",
    description: "24/7 access to energy drinks, coffee, snacks, and brain food to fuel your innovation"
  },
  {
    icon: <PlugZap className="w-8 h-8 text-[var(--primary)]" />,
    title: "Power Stations",
    description: "Abundant power outlets and charging stations for all your devices"
  },
  {
    icon: <Utensils className="w-8 h-8 text-[var(--primary)]" />,
    title: "Catered Meals",
    description: "Regular meals provided throughout the event to keep you energized"
  },
  {
    icon: <Bed className="w-8 h-8 text-[var(--primary)]" />,
    title: "Rest Areas",
    description: "Designated quiet zones for power naps to recharge your mental batteries"
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-[var(--primary)]" />,
    title: "Wellness Support",
    description: "On-site assistance to ensure your well-being throughout the intense hackathon"
  }
];

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 neon-text text-center">FACILITIES & AMENITIES</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-[var(--primary)]/10">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{facility.title}</h3>
                <p className="text-[var(--foreground-muted)]">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
