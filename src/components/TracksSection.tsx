import { Brain, Code, Cpu, Layers3, Tablet, Wallet, ArrowRight, FileText, Users, Rocket } from 'lucide-react';
import { useState } from 'react';

const tracks = [
	{
		title: 'Software',
		description: 'Develop innovative software solutions across various domains',
		icon: <Code className="w-8 h-8 text-[var(--secondary)]" />,
		areas: [
			{ name: 'Artificial Intelligence', icon: <Brain className="w-5 h-5" /> },
			{ name: 'Blockchain & Web3', icon: <Wallet className="w-5 h-5" /> },
			{ name: 'XR (AR/VR) Applications', icon: <Layers3 className="w-5 h-5" /> },
		],
	},
	{
		title: 'Hardware',
		description: 'Create physical computing solutions that interact with real world',
		icon: <Cpu className="w-8 h-8 text-[var(--accent)]" />,
		areas: [
			{ name: 'IoT & Smart Devices', icon: <Tablet className="w-5 h-5" /> },
			{ name: 'Embedded Systems', icon: <Cpu className="w-5 h-5" /> },
			{ name: 'Robotics & Automation', icon: <Brain className="w-5 h-5" /> },
		],
	},
];

export default function TracksSection() {
	// Only one phase can be expanded at a time
	const [expandedPhase, setExpandedPhase] = useState<1 | 2 | 3 | null>(null);

	return (
		<>
			<section id="tracks" className="py-16">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold mb-12 neon-text text-center">
						COMPETITION TRACKS
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{tracks.map((track, index) => (
							<div
								key={index}
								className="glass-panel p-8 transition-all duration-300 hover:bg-white/10 group"
							>
								<div className="flex items-center mb-6">
									{track.icon}
									<h3 className="text-2xl font-bold ml-3">{track.title}</h3>
								</div>
								<p className="mb-6 text-[var(--foreground-muted)]">
									{track.description}
								</p>
								<div className="space-y-4">
									<h4 className="font-semibold text-lg mb-3">Focus Areas:</h4>
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
											No problem!
											Present your idea as a poster to the jury and audience.
											
										</p>
									</div>

			</section>
		</>
	);
}
