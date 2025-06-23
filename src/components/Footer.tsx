import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--background-dark)] border-t border-white/10 pt-12 pb-6 relative overflow-hidden">
      {/* 3D Decorative Element (bottom right) */}
      <div className="absolute right-0 bottom-0 z-0 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-30">
          <defs>
            <radialGradient id="footgrad1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8351f7" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle cx="60" cy="60" r="60" fill="url(#footgrad1)" />
        </svg>
      </div>
      <div className="container mx-auto px-2 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[var(--primary)]">NEONEXUS</h3>
            <p className="text-[var(--foreground-muted)] mb-4">
              A 36-hour national-level hackathon organized by Ballari Institute of Technology and Management, IEEE Student Branch, bringing together innovation and technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Bitmballari15?mibextid=rS40aB7S9Ucbxw6v" className="text-white hover:text-[var(--primary)]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>

              <a href="https://www.linkedin.com/company/ieee-student-branch-bitm/" className="text-white hover:text-[var(--primary)]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.12 20.45H3.55V9h3.57v11.45zM5.34 7.51c-1.14 0-2.07-.93-2.07-2.07 0-1.14.93-2.07 2.07-2.07 1.14 0 2.07.93 2.07 2.07 0 1.14-.93 2.07-2.07 2.07zm15.11 12.94h-3.57v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96v5.7h-3.57V9h3.43v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.65 0 4.32 2.4 4.32 5.52v6.22z"/>
                </svg>
              </a>

              <a href="https://www.instagram.com/bitm_ieee?igsh=MXdpMG16b3UycDVlNw==" className="text-white hover:text-[var(--primary)]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[var(--primary)]">QUICK LINKS</h3>
            <ul className="space-y-2 text-[var(--foreground-muted)]">
              <li><a href="#" className="hover:text-[var(--primary)]">About</a></li>
              <li><a href="#tracks" className="hover:text-[var(--primary)]">Tracks</a></li>
              <li><a href="#prizes" className="hover:text-[var(--primary)]">Prizes</a></li>
              <li><a href="#schedule" className="hover:text-[var(--primary)]">Schedule</a></li>
              <li><a href="#faq" className="hover:text-[var(--primary)]">FAQ</a></li>
              <li><a href="#sponsors" className="hover:text-[var(--primary)]">Sponsors</a></li>
              <li>
                <a
                  href="/developers"
                  className="hover:text-[var(--primary)] transition-colors"
                >
                  Developers
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[var(--primary)]">CONTACT US</h3>
            <ul className="space-y-3 text-[var(--foreground-muted)]">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[var(--primary)] mt-0.5 mr-2" />
                <a href="https://www.google.com/maps/place/Ballari+Institute+of+Technology+%26+Management/@15.1683067,76.8507761,17z/data=!3m1!4b1!4m6!3m5!1s0x3bb712e70b405543:0x31ac9483bd758def!8m2!3d15.1683067!4d76.8507761!16s%2Fg%2F11cm05p6v7?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D" className="hover:text-[var(--primary)]"><span>BITM Campus, Jnana Gangothri, Ballari, Karnataka - 583104</span></a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-[var(--primary)] mr-2" />
                <a href="mailto:abdulbitm@ieee.org" className="hover:text-[var(--primary)]">abdulbitm@ieee.org</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-[var(--primary)] mr-2" />
                <span>+91 9876543210</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-[var(--foreground-muted)] mb-2">
            © 2025 NeoNexus Hackathon. All rights reserved. Organized by Ballari Institute of Technology and Management | IEEE Student Branch.
          </p>
        </div>
      </div>
    </footer>
  );
}
