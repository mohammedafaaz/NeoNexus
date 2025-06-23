import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard } from 'lucide-react';
import PaymentForm from '../components/PaymentForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Register() {
  const [registrationOpen] = useState(true); // Set to true to enable registration
  const [showProcess, setShowProcess] = useState(false);
  
  return (
    <div className="min-h-screen bg-[var(--background)] cyber-grid flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/" className="neon-button inline-flex items-center mb-8">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-3xl font-bold mb-6 neon-text text-[var(--primary)]">REGISTRATION</h1>
          </div>
          
          {registrationOpen ? (
            <div className="space-y-8">
              <div className="glass-panel p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-[var(--primary)]" />
                  Team Registration
                </h2>
                <div className="glass-panel p-4 mb-6">
                  <span
                    className="mb-4 cursor-pointer neon-text text-white font-semibold hover:underline inline-block"
                    onClick={() => setShowProcess((prev) => !prev)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') setShowProcess(prev => !prev); }}
                  >
                    {showProcess ? 'Hide Registration Process' : 'View Registration Process'}
                  </span>
                  {showProcess && (
                    <div>
                      <div className="flex justify-center mb-8">
                        <ol className="flex items-center w-full max-w-2xl">
                          <li className="flex-1 flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-[var(--primary)] font-bold">1</div>
                            <span className="mt-2 text-xs font-semibold text-white">Submit Details & <center>Abstract</center></span>
                          </li>
                          <div className="flex-1 h-1 bg-[var(--primary)] mx-1" />
                          <li className="flex-1 flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-[var(--primary)] font-bold">2</div>
                            <span className="mt-2 text-xs font-semibold text-white">Selection</span>
                          </li>
                          <div className="flex-1 h-1 bg-[var(--primary)] mx-1" />
                          <li className="flex-1 flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-[var(--primary)] font-bold">3</div>
                            <span className="mt-2 text-xs font-semibold text-white">Payment</span>
                          </li>
                        </ol>
                      </div>
                      <ol className="list-decimal pl-5 space-y-2 text-[var(--foreground-muted)]">
                        <li>
                          <span className="font-semibold">Submit Team Details & Abstract:</span> Fill out the registration form with your team information and project Abstract.
                        </li>
                        <li>
                          <span className="font-semibold">Selection of Top 30 Teams:</span> After review, the top 30 teams will be selected based on their Abstracts.
                          <ul className="list-disc pl-5 mt-1">
                            <li><span className="font-semibold">Top 20 teams</span> will be invited to attend the NeoNexus Hackathon and build their project.</li>
                            <li><span className="font-semibold">Next 10 teams</span> (excluding the top 20) will get a chance for Poster Presentation based on their Abstract topic.</li>
                          </ul>
                        </li>
                        <li>
                          <span className="font-semibold">Registration Fee Payment:</span> If your team is selected, you will be notified to pay the registration fee to confirm your participation.<br/>
                          <br/>
                          The Registration Fee is:<br/>
                          <br/>
                          <strong>For Hackathon Participation:</strong><br/>
                          <ol className="list-decimal pl-5 space-y-2">
                            <li><strong>The Teams Selected for NeoNexus Hackathon</strong>: ₹800 + 18% GST per team (3-4 members per team)</li>
                            <li><strong>IEEE Members</strong>: ₹500 + 18% GST per team (3-4 members per team)</li>
                          </ol>
                          <br/>
                          <strong>For Poster Presentation:</strong><br/>
                          <ol className="list-decimal pl-5 space-y-2">
                            <li><strong>The Teams Selected for NeoNexus Poster Presentation</strong>: ₹200 + 18% GST per team (3-4 members per team)</li>
                            <li><strong>IEEE Members</strong>: ₹100 + 18% GST per team (3-4 members per team)</li>
                          </ol>
                        </li>
                      </ol>
                    </div>
                  )}
                </div>
                <br/>
        
                <p className="mb-6 text-[var(--foreground-muted-dark)]">
                  Complete your Phase-1 registration for NeoNexus 2025 by filling out the form below and submitting your Abstracts.<br/>
                  Click below to Fill and Submit the form 👇.
                </p>
                <button
					className="neon-button"
					onClick={() =>
						window.open(
							'https://forms.gle/QzqqC1dw3dwpdYxc7',
							'_blank'
						)
					}
				>
					Register here!
				</button>
                <br/>
                <br/>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="glass-panel p-4 text-center">
                    <h3 className="font-bold mb-2 text-[var(--secondary)]">IMPORTANT DATES</h3>
                    <p className="text-sm">Abstract Submission Deadline: August 5, 2025</p>
                  </div>
                  <div className="glass-panel p-4 text-center">
                    <h3 className="font-bold mb-2 text-[var(--accent)]">TEAM SIZE</h3>
                    <p className="text-sm">Minimum 3 and Maximum 4 members per team</p>
                  </div>
                </div>
                
                <div className="border-t border-white/10 pt-6">
                  <h3 className="font-bold mb-3">Requirements:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-[var(--foreground-muted)]">
                    <li>Valid college ID for all team members</li>
                    <li>Team name (choose a creative one!)</li>
                    <li>Team Leader's Name and Contact Number</li>
                    <li>Names and Contact Numbers of all team members</li>
                    <li>IEEE Student Branch Membership ID (if applicable)</li>
                    <li>Valid email address for confirmation</li>
                    <li>Detailed Abstract of your project</li>
                  </ul>
                </div>
              </div>
              
              <PaymentForm />
            </div>
          ) : null}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
