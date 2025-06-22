import React from "react";
import { Mail, Linkedin, Instagram } from "lucide-react";

const developers = [
  {
    name: "Ananda A",
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
  return (
    <section className="py-16 relative overflow-hidden min-h-screen bg-[var(--background)]">
      <div className="cyber-grid absolute inset-0 z-0 opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold mb-12 neon-text text-center">DEVELOPERS</h2>
        <div className="flex flex-col items-center">
          {/* 2x2 grid for 4 developers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
            {developers.map((dev, idx) => (
              <div key={idx} className="glass-panel overflow-hidden group flex flex-col items-center">
                <div className="aspect-square overflow-hidden rounded-full w-40 h-40 border-2 border-[var(--primary)]/20 mb-4">
                  <img
                    src={dev.image}
                    alt={dev.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = "https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png";
                    }}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold mb-1">{dev.name}</h3>
                  <p className="text-[var(--primary)] mb-2">{dev.dept}</p>
                  <div className="flex justify-center gap-4 mt-2">
                    <a href={dev.mail || "#"} target="_blank" rel="noopener noreferrer" aria-label="Mail">
                      <Mail className="w-5 h-5 hover:text-[var(--primary)]" />
                    </a>
                    <a href={dev.linkedin || "#"} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="w-5 h-5 hover:text-[var(--primary)]" />
                    </a>
                    <a href={dev.instagram || "#"} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <Instagram className="w-5 h-5 hover:text-[var(--primary)]" />
                    </a>
                  </div>
                  <div className="mt-2 text-xs text-[var(--foreground-muted)] break-all">
                    {dev.mail.replace('mailto:', '')}
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
