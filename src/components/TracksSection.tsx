import { Brain, Globe2, Cpu, Leaf, Shield, Lock, RefreshCw, CloudSun, Car, Users, Rocket, ArrowRight, FileText, Bot } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const tracks = [
	{
		title: 'ADVANCED TECHNOLOGY',
		description: '',
		icon: <Cpu className="w-8 h-8 text-[var(--secondary)]" />,
		areas: [
			{ name: 'AI & ML Innovations', icon: <Brain className="w-5 h-5" /> },
			{ name: 'Smart cities & IoT', icon: <Globe2 className="w-5 h-5" /> },
			{ name: 'Future Computing & Robotics', icon: <Bot className="w-5 h-5" /> },
		],
	},
	{
		title: 'SUSTAINABLE ENVIRONMENT',
		description: '',
		icon: <Leaf className="w-8 h-8 text-[var(--accent)]" />,
		areas: [
			{ name: 'Renewable Energy & Climate Solutions', icon: <CloudSun className="w-5 h-5" /> },
			{ name: 'Circular Economy & Waste Managment', icon: <RefreshCw className="w-5 h-5" /> },
			{ name: 'Green Tech for Smart Living', icon: <Globe2 className="w-5 h-5" /> },
		],
	},
	{
		title: 'CYBERSECURITY THREATS',
		description: '',
		icon: <Shield className="w-8 h-8 text-[var(--primary)]" />,
		areas: [
			{ name: 'AI-Driven Cyber Defense', icon: <Brain className="w-5 h-5" /> },
			{ name: 'Blockchain & Digital Security', icon: <Lock className="w-5 h-5" /> },
			{ name: 'Cybercrime & Threat Mitigation', icon: <Shield className="w-5 h-5" /> },
		],
	},
	{
		title: 'MOBILITY',
		description: '',
		icon: <Car className="w-8 h-8 text-[var(--secondary)]" />,
		areas: [
			{ name: 'Intelligent Driving Experience', icon: <Car className="w-5 h-5" /> },
			{ name: 'Smart Coaching & Driver Engagement', icon: <Users className="w-5 h-5" /> },
			{ name: 'AI-Powered Safety & Insurance Insights', icon: <Brain className="w-5 h-5" /> },
		],
	},
];

function HexGrid3D() {
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const handle = (e: MouseEvent) => {
			const { innerWidth, innerHeight } = window;
			const x = (e.clientX / innerWidth - 0.5) * 20;
			const y = (e.clientY / innerHeight - 0.5) * 20;
			el.style.transform = `translate3d(${x}px,${y}px,0)`;
		};
		window.addEventListener('mousemove', handle);
		return () => window.removeEventListener('mousemove', handle);
	}, []);
	return (
		<div ref={ref} className="absolute left-1/2 top-1/2 z-0 pointer-events-none" style={{transform: 'translate(-50%,-50%)'}}>
			<svg width="320" height="120">
				{Array.from({ length: 6 }).map((_, i) => (
					<polygon
						key={i}
						points="30,15 45,25 45,45 30,55 15,45 15,25"
						fill="#8351f7"
						opacity="0.07"
						transform={`translate(${30 + i*45},${30 + (i%2)*20})`}
					/>
				))}
			</svg>
		</div>
	);
}

export default function TracksSection() {
	// Only one phase can be expanded at a time
	const [expandedPhase, setExpandedPhase] = useState<1 | 2 | 3 | null>(null);

	return (
		<>
			<section id="tracks" className="py-12 sm:py-16 relative overflow-hidden">
				<HexGrid3D />
        {/* 3D Decorative Element (top right) */}
        <div className="absolute right-0 top-0 z-0 pointer-events-none">
          <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-30">
            <defs>
              <radialGradient id="trackgrad1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#8351f7" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="50" fill="url(#trackgrad1)" />
          </svg>
        </div>
        {/* 3D Decorative Element (bottom left) */}
        <div className="absolute left-0 bottom-0 z-0 pointer-events-none">
          <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-30">
            <defs>
              <radialGradient id="trackgrad2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <circle cx="60" cy="60" r="60" fill="url(#trackgrad2)" />
          </svg>
        </div>
				<div className="container mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
					<h2 className="text-3xl font-bold mb-8 neon-text text-center">
						DOMAINS
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
						{tracks.map((track, index) => (
							<div
								key={index}
								className="glass-panel p-5 sm:p-8 transition-all duration-300 hover:bg-white/10 group"
							>
								<div className="flex items-center mb-4 sm:mb-6">
									{track.icon}
									<h3 className="text-xl sm:text-2xl font-bold ml-3">{track.title}</h3>
								</div>
								<div className="space-y-3 sm:space-y-4">
									{track.areas.map((area, idx) => (
										<div key={idx} className="flex items-center">
											<div className="p-2 rounded-full bg-[var(--primary)]/10 mr-3">
												{area.icon}
											</div>
											<span>{area.name}</span>
										</div>
									))}
								</div>
								<br />
							</div>
						))}
					</div>
				</div>
			</section>

			{/* PHASES SECTION */}
			<section id="phases" className="py-16">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold mb-12 neon-text text-center">
						EVENT PHASES
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Phase 1 */}
						<div className="glass-panel p-8 flex flex-col items-left text-left relative min-h-[420px]">
							<div className="flex items-center mb-4">
								<div className="w-12 h-12 rounded-full bg-[var(--primary)]/20 flex items-center justify-center mr-3">
									<FileText className="w-7 h-7 text-[var(--primary)]" />
								</div>
								<span className="text-2xl font-bold text-[var(--primary)]">PHASE:1</span>
							</div>
							<h3 className="text-xl font-bold mb-8">
								LAUNCHPAD : <br />
								<span className="font-normal">Ideate & Initiate</span>
							</h3>
							<p className="mb-4 text-[var(--foreground-muted)]">
								Submit your team’s idea based on a problem statement in your chosen domain.
								<br />
								<br />
								📅 Deadline: August 5, 2025
							</p>
							{expandedPhase === 1 ? (
								<div className="mt-4 text-[var(--foreground-muted)] flex flex-col flex-grow justify-between h-full">
									<div>
										<ul className="list-disc pl-5 mb-4">
											<li>🎯 Choose a Domain</li>
											<li>🧠 Select a Problem Statement from the List</li>
										</ul>
										<p className="mb-2">📄 Submit an Abstract (Max 250 words) describing:</p>
										<ul className="list-disc pl-5 mb-4">
											<li>🔍 Problem Overview</li>
											<li>💡 Your Proposed Solution</li>
											<li>🚀 Innovation or Tech Stack to be Used</li>
											<li>👥 Mention Full Team and College Details</li>
										</ul>
									</div>
									<div className="flex gap-4 justify-center mt-6">
										<button
											className="neon-button"
											onClick={() =>
												window.open(
													'https://forms.gle/QzqqC1dw3dwpdYxc7',
													'_blank'
												)
											}
										>
											Register
										</button>
										<button
											className="neon-button"
											onClick={() => setExpandedPhase(null)}
										>
											Read less
										</button>
									</div>
								</div>
							) : (
								<div className="absolute bottom-6 right-6">
									<button
										className="flex items-center neon-button px-4 py-2"
										onClick={() => setExpandedPhase(1)}
									>
										Read more <ArrowRight className="ml-2 w-4 h-4" />
									</button>
								</div>
							)}
						</div>
						{/* Phase 2 */}
						<div className="glass-panel p-8 flex flex-col items-left text-left relative min-h-[420px]">
							<div className="flex items-center mb-4">
								<div className="w-12 h-12 rounded-full bg-[var(--secondary)]/20 flex items-center justify-center mr-3">
									<Users className="w-7 h-7 text-[var(--secondary)]" />
								</div>
								<span className="text-2xl font-bold text-[var(--secondary)]">PHASE:2</span>
							</div>
							<h3 className="text-xl font-bold mb-8">
								ORBIT SYNC : <br />
								<span className="font-normal">Confirm & GearUp</span>
							</h3>
							<p className="mb-4 text-[var(--foreground-muted)]">
								Shortlisted teams confirm participation for the final offline hackathon.
							</p>
							{expandedPhase === 2 ? (
								<div className="mt-4 text-[var(--foreground-muted)] flex flex-col flex-grow justify-between h-full">
									<div>
										<ul className="list-disc pl-5 mb-2">
											<li>✅ Reconfirm Your Team and Domain</li>
											<li>👥 Submit Full Team Member Details Again</li>
											<li>💰 Share Payment Details for Registration Fee</li>
											<li>🏨 Select Accommodation and Food Preferences</li>
											<li>📞 Provide Emergency Contact Info, T-Shirt Sizes, etc.</li>
											<li>🆔 Upload College IDs</li>
											<li>🔢 IEEE Student Branch Membership Number (if applicable)</li>
										</ul>
									</div>
									<div className="flex gap-4 justify-center mt-6">
										<span className="neon-button opacity-60 cursor-not-allowed">Coming Soon</span>
										<button
											className="neon-button"
											onClick={() => setExpandedPhase(null)}
										>
											Read less
										</button>
									</div>
								</div>
							) : (
								<div className="absolute bottom-6 right-6">
									<button
										className="flex items-center neon-button px-4 py-2"
										onClick={() => setExpandedPhase(2)}
									>
										Read more <ArrowRight className="ml-2 w-4 h-4" />
									</button>
								</div>
							)}
						</div>
						{/* Phase 3 */}
						<div className="glass-panel p-8 flex flex-col items-left text-left relative min-h-[420px]">
							<div className="flex items-center mb-4">
								<div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 flex items-center justify-center mr-3">
									<Rocket className="w-7 h-7 text-[var(--accent)]" />
								</div>
								<span className="text-2xl font-bold text-[var(--accent)]">PHASE:3</span>
							</div>
							<h3 className="text-xl font-bold mb-8">
								CODE-X CORE :<br />
								<span className="font-normal">Innovate & Execute</span>
							</h3>
							<p className="mb-4 text-[var(--foreground-muted)]">
								Build the Future
							</p>
							{expandedPhase === 3 ? (
								<div className="mt-4 text-[var(--foreground-muted)] flex flex-col flex-grow justify-between h-full">
									<div>
										<p className="font-semibold mb-2">🛠 What to Expect:</p>
										<ul className="list-disc pl-5 mb-4">
											<li>🎒 Arrive on Campus and set up your team workspace.</li>
											<li>💻 Build Hands-On: Work day and night on your prototype or solution.</li>
											<li>💬 Mentoring Sessions with industry experts and domain specialists.</li>
											<li>🎯 Face Evaluation Rounds judged by tech professionals and innovators.</li>
											<li>🏆 Compete for exciting cash prizes, exclusive goodies, certificates, and glory.</li>
										</ul>
										<hr className="my-4 border-[var(--primary)]/30" />
										<p className="font-semibold mb-2 text-lg">🎁 What You'll Get:</p>
										<ul className="list-disc pl-5 mb-4">
											<li>🍽 Delicious Food</li>
											<li>🛏 Comfortable Accommodation</li>
											<li>🧢 Cool Swags</li>
											<li>🤝 Networking Opportunities</li>
											<li>🌐 A stage to showcase your innovation and impact the world</li>
										</ul>
										<p className="font-semibold mt-6 mb-2 text-lg">🎟 Abstract = Your Entry Ticket</p>
										<p className="mb-2">
											Only selected abstracts will qualify for the final on-campus hackathon.<br />
											Phase 1 → Submit your idea & abstract<br />
											Phase 2 → Get shortlisted → Enter the Hackathon
										</p>
										<hr className="my-4 border-[var(--primary)]/30" />
									</div>
									<div className="flex gap-4 justify-center mt-6">
										<button
											className="neon-button"
											onClick={() => setExpandedPhase(null)}
										>
											Read less
										</button>
									</div>
								</div>
                
							) : (
								<div className="absolute bottom-6 right-6">
									<button
										className="flex items-center neon-button px-4 py-2"
										onClick={() => setExpandedPhase(3)}
									>
										Read more <ArrowRight className="ml-2 w-4 h-4" />
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
        <div className="mt-12 glass-panel p-6 flex flex-col items-center neon-text text-white">
                    <p className="font-semibold mb-2 text-lg">📌 Poster Presentation Opportunity</p>
										<p>
											<center>Not shortlisted for the NeoNexus Hackathon?</center>
											<center>No problem!
											Present your idea as a poster to the jury and audience, and win exciting goodies and certificates.</center>
											
										</p>
									</div>

			</section>
		</>
	);
}
