export default function SponsorsSection() {
  const organizers = [
    { name: "BITM", logo: "/bitm-removebg.png", url: "#" },
    { name: "IEEE Student Branch", logo: "/ieee-removebg.png", url: "#" }

  ];

  const sponsors = [
    { name: "MathWorks", logo: "/mathworks-removebg.png", url: "#" },
    { name: "CoreEl", logo: "/CoreEL-removebg.png", url: "#" },
    { name: "labteach", logo: "/labteach-removebg.png", url: "#" },
    { name: "amd", logo: "/amdlogo.png", url: "#" },
    { name: "IeeeBlr", logo: "/ieeeblr.jpg", url: "#" },
    { name: "IMatiz", logo: "/imatiz.jpg", url: "#" }
  ];

  return (
    <section id="sponsors" className="py-12 sm:py-16 relative">
      {/* 3D Decorative Element (top left) */}
      <div className="absolute left-0 top-0 z-0 pointer-events-none">
        <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-30">
          <defs>
            <radialGradient id="sponsgrad1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8351f7" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="50" fill="url(#sponsgrad1)" />
        </svg>
      </div>
      <div className="container mx-auto px-2 sm:px-4 lg:px-8">
        
        {/* Organized By */}
        <div className="text-center mb-6">
          <p className="text-lg text-gray-300">Organized By</p>
          <h3 className="text-2xl font-bold text-white mt-1">
            Ballari Institute of Technology and Management, IEEE Student Branch &<br/> BITM Sustaina
          </h3>
        </div>

        <div className="flex justify-center gap-12 mb-12">
          {organizers.map((org, index) => (
            <a
              key={index}
              href={org.url}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={org.logo} 
                alt={org.name} 
                className="h-20 object-contain"
              />
            </a>
          ))}
        </div>

        {/* In Association With */}
        <div className="text-center mb-6">
          <p className="text-lg text-gray-300">In Association With</p>
        </div>
        <div className="flex justify-center gap-12 mb-12">
          <a
            href="#"
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/sight-removebg.png"
              alt="IEEE Sight"
              className="h-20 object-contain"
            />
          </a>
          <a
            href="#"
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/sustaina-removebg.png"
              alt="IEEE Sustaina"
              className="h-20 object-contain"
            />
          </a>
        </div>

        {/* Sponsors */}
        <h2 className="text-3xl font-bold mb-12 neon-text text-center">TECHNICAL SPONSORS</h2>
        <div className="glass-panel p-8 flex flex-wrap justify-center gap-8 items-center">
          {sponsors.map((sponsor) => (
            <a 
              key={sponsor.name} 
              href={sponsor.url} 
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="h-20 object-contain"
              />
            </a>

          ))}
        </div>
      </div>
    </section>
  );
}
