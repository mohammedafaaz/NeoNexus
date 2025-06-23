import { Bed, Coffee, HeartPulse, PlugZap, Utensils, Wifi } from 'lucide-react';

const facilities = [
	{
		icon: <Wifi className="w-8 h-8 text-[var(--primary)]" />,
		title: 'High-Speed Wi-Fi',
		description:
			'Enterprise-grade connection with redundant backups to ensure uninterrupted coding',
	},
	{
		icon: <Coffee className="w-8 h-8 text-[var(--primary)]" />,
		title: 'Refreshments',
		description:
			'24/7 access to coffee, snacks, and brain food to fuel your innovation',
	},
	{
		icon: <PlugZap className="w-8 h-8 text-[var(--primary)]" />,
		title: 'Power Stations',
		description:
			'Abundant power outlets and charging stations for all your devices',
	},
	{
		icon: <Utensils className="w-8 h-8 text-[var(--primary)]" />,
		title: 'Catered Meals',
		description:
			'Regular meals provided throughout the event to keep you energized',
	},
	{
		icon: <Bed className="w-8 h-8 text-[var(--primary)]" />,
		title: 'Rest Areas',
		description:
			'Designated quiet zones for power naps to recharge your mental batteries',
	},
	{
		icon: <HeartPulse className="w-8 h-8 text-[var(--primary)]" />,
		title: 'Wellness Support',
		description:
			'On-site assistance to ensure your well-being throughout the intense hackathon',
	},
];

export default function FacilitiesSection() {
	return (
		<section id="facilities" className="py-12 sm:py-16 relative">
			{/* 3D Decorative Element (top right) */}
			<div className="absolute right-0 top-0 z-0 pointer-events-none">
				<svg
					width="100"
					height="100"
					viewBox="0 0 100 100"
					className="opacity-30"
				>
					<defs>
						<radialGradient id="facgrad1" cx="50%" cy="50%" r="50%">
							<stop offset="0%" stopColor="#06b6d4" />
							<stop offset="100%" stopColor="transparent" />
						</radialGradient>
					</defs>
					<circle
						cx="50"
						cy="50"
						r="50"
						fill="url(#facgrad1)"
					/>
				</svg>
			</div>
			{/* 3D Decorative Element (bottom left) */}
			<div className="absolute left-0 bottom-0 z-0 pointer-events-none">
				<svg
					width="120"
					height="120"
					viewBox="0 0 120 120"
					className="opacity-30"
				>
					<defs>
						<radialGradient id="facgrad2" cx="50%" cy="50%" r="50%">
							<stop offset="0%" stopColor="#ec4899" />
							<stop offset="100%" stopColor="transparent" />
						</radialGradient>
					</defs>
					<circle
						cx="60"
						cy="60"
						r="60"
						fill="url(#facgrad2)"
					/>
				</svg>
			</div>
			<div className="container mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
				<h2 className="text-3xl font-bold mb-8 neon-text text-center">
					FACILITIES & AMENITIES
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
					{facilities.map((facility, index) => (
						<div
							key={index}
							className="glass-panel p-4 sm:p-6 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
						>
							<div className="flex flex-col items-center text-center">
								<div className="mb-4 p-3 rounded-full bg-[var(--primary)]/10">
									{facility.icon}
								</div>
								<h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
									{facility.title}
								</h3>
								<p className="text-[var(--foreground-muted)] text-sm">
									{facility.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
