import React from "react";
import { Mail, Linkedin, Instagram, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const developers = [
	{
		name: "A Ananda",
		dept: "Dept. of EEE",
		image: "/Anand.jpg",
		mail: "mailto:ananda.a@ieee.org",
		linkedin: "https://www.linkedin.com/in/ananda-a-63111a222/",
		instagram: "https://www.instagram.com/ananda_a_007?igsh=MWRraTdqcmtxdjVocA==",
	},
	{
		name: "Mohammed Afaaz",
		dept: "Dept. of AIML",
		image: "/afaaz.jpg",
		mail: "mailto:mohammedafaaz433@gmail.com",
		linkedin: "https://www.linkedin.com/in/md-afaaz-19b11b316/",
		instagram: "https://www.instagram.com/mohammedafaaz?igsh=MWJuaXRlemdlaHk2dg==",
	},
	{
		name: "Mohammed Shoaib",
		dept: "Dept. of AIML",
		image: "/shoaib.jpg",
		mail: "mailto:shoaib12006@gmail.com",
		linkedin: "http://www.linkedin.com/in/mohammad-shoaib-aa684a278",
		instagram: "https://www.instagram.com/shoaib_ashrafi_/profilecard/?igsh=MWs1cmdzaDEzZ2hjMg==",
	},
	{
		name: "Mohammed Irfan",
		dept: "Dept. of AIML",
		image: "/irfan.jpg",
		mail: "mailto:chirfan636393@gmail.com",
		linkedin: "https://www.linkedin.com/in/mohammad-irfan-114667364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
		instagram: "https://www.instagram.com/irffu.zx/profilecard/?igsh=MTJxY3Nzc3NwMWxzcg==",
	},
];

export default function DevelopersSection() {
	const navigate = useNavigate();
	return (
		<section className="py-16 relative overflow-hidden min-h-screen bg-[var(--background)]">
			{/* Cosmic effect: animated stars */}
			<style>
				{`
        .cosmic-star {
          position: absolute;
          border-radius: 9999px;
          background: white;
          opacity: 0.7;
          pointer-events: none;
          animation: cosmic-twinkle 2s infinite alternate;
        }
        .cosmic-star1 { width: 4px; height: 4px; top: 10%; left: 20%; animation-delay: 0s;}
        .cosmic-star2 { width: 3px; height: 3px; top: 30%; left: 70%; animation-delay: 0.5s;}
        .cosmic-star3 { width: 5px; height: 5px; top: 60%; left: 40%; animation-delay: 1s;}
        .cosmic-star4 { width: 2px; height: 2px; top: 80%; left: 80%; animation-delay: 1.5s;}
        .cosmic-star5 { width: 3px; height: 3px; top: 50%; left: 10%; animation-delay: 0.8s;}
        .cosmic-star6 { width: 2.5px; height: 2.5px; top: 20%; left: 85%; animation-delay: 1.2s;}
        .cosmic-star7 { width: 4px; height: 4px; top: 75%; left: 55%; animation-delay: 0.3s;}
        @keyframes cosmic-twinkle {
          0% { opacity: 0.4; box-shadow: 0 0 6px 2px #fff6, 0 0 12px 4px #fff3; }
          100% { opacity: 1; box-shadow: 0 0 12px 4px #fff9, 0 0 24px 8px #fff5; }
        }
        `}
			</style>
			<span className="cosmic-star cosmic-star1"></span>
			<span className="cosmic-star cosmic-star2"></span>
			<span className="cosmic-star cosmic-star3"></span>
			<span className="cosmic-star cosmic-star4"></span>
			<span className="cosmic-star cosmic-star5"></span>
			<span className="cosmic-star cosmic-star6"></span>
			<span className="cosmic-star cosmic-star7"></span>
			{/* X mark at top-right */}
			<button
				className="absolute top-4 right-4 z-20 bg-[var(--background)]/80 rounded-full p-2 hover:bg-[var(--primary)]/20 transition"
				onClick={() => navigate("/")}
				aria-label="Close and return to home"
				type="button"
			>
				<X className="w-7 h-7 text-[var(--primary)]" />
			</button>
			<div className="cyber-grid absolute inset-0 z-0 opacity-30"></div>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<h2 className="text-3xl font-bold mb-12 neon-text text-center">
					DEVELOPERS
				</h2>
				<div className="flex flex-col items-center">
					{/* 2x2 grid for 4 developers */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
						{developers.map((dev, idx) => (
							<div
								key={idx}
								className="glass-panel overflow-hidden group flex flex-col items-center"
							>
								<div className="aspect-square overflow-hidden rounded-full w-40 h-40 border-2 border-[var(--primary)]/20 mb-4">
									<img
										src={dev.image}
										alt={dev.name}
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
										onError={(e) => {
											e.currentTarget.src =
												"https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png";
										}}
									/>
								</div>
								<div className="p-4 text-center">
									<h3 className="text-lg font-bold mb-1">{dev.name}</h3>
									<p className="text-[var(--primary)] mb-2">
										{dev.dept}
									</p>
									<div className="flex justify-center gap-4 mt-2">
										<a
											href={dev.mail || "#"}
											target="_blank"
											rel="noopener noreferrer"
											aria-label="Mail"
										>
											<Mail className="w-5 h-5 hover:text-[var(--primary)]" />
										</a>
										<a
											href={dev.linkedin || "#"}
											target="_blank"
											rel="noopener noreferrer"
											aria-label="LinkedIn"
										>
											<Linkedin className="w-5 h-5 hover:text-[var(--primary)]" />
										</a>
										<a
											href={dev.instagram || "#"}
											target="_blank"
											rel="noopener noreferrer"
											aria-label="Instagram"
										>
											<Instagram className="w-5 h-5 hover:text-[var(--primary)]" />
										</a>
									</div>
									<div className="mt-2 text-xs text-[var(--foreground-muted)] break-all">
										{dev.mail.replace("mailto:", "")}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
