export default function ChiefGuestsSection() {
  // Chief Guest Data
  // TO REPLACE PHOTOS: Simply update the "image" URLs below with the paths to your real photos
  // Recommended photo specs:
  // - Square aspect ratio (1:1)
  // - Minimum 400x400 pixels
  // - Professional headshot style
  // - PNG or JPG format
  // You can use relative paths like "/images/guests/person-name.jpg" after adding photos to the public folder
  const guests = [
    {
      name: "Shiva Kumar B",
      role: "Project Director, Bosch Global Software Technologies",
      // Replace this URL with actual photo path when available
      image: "/shivakumar.png",
      description: "Leads cutting-edge software development projects and digital transformation initiatives at Bosch Global Software Technologies."
    },
    {
      name: "Bhargav A K",
      role: "Senior Architect, Bosch Global Software Technologies",
      // Replace this URL with actual photo path when available
      image: "/bhargav.png",
      description: "Expert in designing scalable software architectures with focus on IoT and AI-driven systems for automotive and industrial applications."
    },
    {
      name: "Chetan D",
      role: "Senior Architect, Bosch Global Software Technologies",
      // Replace this URL with actual photo path when available
      image: "/chetan.png",
      description: "Specializes in cloud architecture and distributed systems with extensive experience in enterprise solution design."
    },
    {
      name: "Kishorekumar Sharma",
      role: "Lead, Bosch Global Software Technologies",
      // Replace this URL with actual photo path when available
      image: "/kishorekumar.png",
      description: "Technical leader focused on embedded systems and firmware development for next-generation hardware-software integration."
    },
    {
      name: "Dr. Riyaz A Rahiman",
      role: "Senior Application Engineer, MathWorks Products",
      // Replace this URL with actual photo path when available
      image: "/riyaz.png",
      description: "Expertise in mathematical modeling, simulation, and computational analysis using MATLAB and Simulink at CoreEL Technologies India Pvt Ltd, Bangalore."
    },
    {
      name: "Dr. Chengappa Munjandira",
      role: "Senior Technologist, Hewlett Packard Enterprises",
      // Replace this URL with actual photo path when available
      image: "/chengappa.png",
      description: "Industry veteran in enterprise technology solutions, also serving as Vice Chair IEEE Bangalore and SIGHT Chair, driving technology for social impact."
    }
  ];

  return (
    <section id="guests" className="py-16 relative overflow-hidden">
      <div className="cyber-grid absolute inset-0 z-0 opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold mb-12 neon-text text-center">CHIEF GUESTS & SPEAKERS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guests.map((guest, index) => (
            <div key={index} className="glass-panel overflow-hidden group">
              {/* Guest photo - circular container with consistent sizing */}
              <div className="aspect-square overflow-hidden rounded-full mx-auto w-48 h-48 border-2 border-[var(--primary)]/20">
                <img 
                  src={guest.image} 
                  alt={guest.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.currentTarget.src = "https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png";
                    console.log(`Image for ${guest.name} failed to load, using fallback`);
                  }}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">{guest.name}</h3>
                <p className="text-[var(--primary)] mb-4">{guest.role}</p>
                <p className="text-[var(--foreground-muted)]">{guest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
