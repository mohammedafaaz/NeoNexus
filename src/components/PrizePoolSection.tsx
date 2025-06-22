import { Award, Medal, Trophy } from 'lucide-react';

export default function PrizePoolSection() {
  return (
    <section id="prizes" className="py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 neon-text text-center">PRIZE POOL</h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="glass-panel p-8 mb-12 text-center">
            <h3 className="text-4xl font-bold text-[var(--accent)] mb-4">₹50,000+ TOTAL PRIZE POOL</h3>
            <p className="text-xl text-[var(--foreground-muted)]">
              Compete for cash prizes, tech gadgets, internship opportunities, and more!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Prize */}
            <div className="glass-panel p-6 border-2 border-yellow-500/30 relative">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[var(--background-dark)] px-4 py-2">
                <Trophy className="w-8 h-8 text-yellow-500" />
              </div>
              <div className="text-center pt-6">
                <h3 className="text-3xl font-bold mb-2 text-yellow-500">1st PRIZE</h3>
                <p className="text-4xl font-bold mb-4">₹25,000</p>
                <ul className="text-left text-[var(--foreground-muted)] space-y-2">
                  <li>• Cash prize</li>
                  <li>• Internship opportunities</li>
                  <li>• Premium tech gadgets</li>
                  <li>• Fast-track job interviews</li>
                </ul>
              </div>
            </div>
            
            {/* Second Prize */}
            <div className="glass-panel p-6 border-2 border-gray-400/30 relative">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[var(--background-dark)] px-4 py-2">
                <Award className="w-8 h-8 text-gray-400" />
              </div>
              <div className="text-center pt-6">
                <h3 className="text-3xl font-bold mb-2 text-gray-400">2nd PRIZE</h3>
                <p className="text-4xl font-bold mb-4">₹15,000</p>
                <ul className="text-left text-[var(--foreground-muted)] space-y-2">
                  <li>• Cash prize</li>
                  <li>• Tech workshop access</li>
                  <li>• Development kits</li>
                  <li>• Mentorship sessions</li>
                </ul>
              </div>
            </div>
            
            {/* Third Prize */}
            <div className="glass-panel p-6 border-2 border-amber-700/30 relative">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[var(--background-dark)] px-4 py-2">
                <Medal className="w-8 h-8 text-amber-700" />
              </div>
              <div className="text-center pt-6">
                <h3 className="text-3xl font-bold mb-2 text-amber-700">3rd PRIZE</h3>
                <p className="text-4xl font-bold mb-4">₹10,000</p>
                <ul className="text-left text-[var(--foreground-muted)] space-y-2">
                  <li>• Cash prize</li>
                  <li>• Software licenses</li>
                  <li>• Development tools</li>
                  <li>• Cloud credits</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 glass-panel p-6">
            <h3 className="text-xl font-bold mb-1 text-center neon-text text-[var(--certi)]">CERTIFICATE OF PARTICIPATION WILL BE PROVIDED FOR EVERYONE</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
