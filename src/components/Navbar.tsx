import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const hamburgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      // Prevent background scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll
      document.body.style.overflow = '';
    }
    // Clean up on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handles both in-page scroll and navigation to home
  const handleNavClick = (sectionId?: string) => {
    setIsMobileMenuOpen(false);
    if (!sectionId || sectionId === 'home') {
      navigate('/');
      return;
    }
    // If not on home, navigate to home first, then scroll after navigation
    if (window.location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Glowing navbar styles */}
      <style>
        {`
        .navbar-glow {
          box-shadow:
            0 0 16px 0 var(--shadow-nav),
            0 0 32px 0 var(--shadow-nav),
            0 0 48px 0 var(--shadow-nav);
          border-bottom: 1.5px solid var(--shadow-nav);
        }
        .navbar-title-glow {
          text-shadow:
            0 0 8px var(--shadow-nav),
            0 0 16px var(--shadow-nav),
            0 0 32px var(--shadow-nav);
        }
        .navbar-btn-glow {
          box-shadow:
            0 0 8px 0 var(--shadow-nav),
            0 0 16px 0 var(--shadow-nav);
          border-radius: 0.5rem;
        }
        `}
      </style>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar-glow backdrop-blur-lg ${
          isScrolled ?  'bg-[#080812]/150' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20 relative">
            {/* Left Logos */}
            <div className="flex-shrink-0 flex items-center space-x-4">
              <div className="bg-white p-2 rounded-xl shadow-md navbar-btn-glow">
                <img
                  src="/bitm.png"
                  alt="Ballari Institute of Technology and Management Logo"
                  className="h-16 object-contain"
                />
              </div>
            </div>

            {/* Center Title (absolutely centered) */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Link
                to="/"
                className="text-xl md:text-2xl font-bold neon-text "
                style={{ whiteSpace: 'nowrap' }}
              >
                NEONEXUS 36.0
              </Link>
            </div>

            {/* Right Logos and Hamburger */}
            <div className="flex items-center space-x-4 ml-auto">
              <div className="bg-white p-2 rounded-xl shadow-md navbar-btn-glow hidden md:block">
                <img
                  src="/ieee-removebg.png"
                  alt="IEEE Logo"
                  className="h-14 object-contain"
                />
              </div>
              <div className="bg-white p-2 rounded-xl shadow-md navbar-btn-glow hidden md:block">
                <img
                  src="/sustaina-removebg.png"
                  alt="Sustaina Logo"
                  className="h-14 object-contain"
                />
              </div>
              {/* Hamburger Button (always visible) */}
              <button
                className="text-white navbar-btn-glow"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hamburger Menu (full nav) */}
      {isMobileMenuOpen && (
        <div
          ref={hamburgerRef}
          className="fixed inset-0 z-50 bg-[#080812]/95 backdrop-blur-md flex flex-col pt-24 overflow-y-auto"
          style={{ WebkitOverflowScrolling: 'touch', overscrollBehavior: 'contain' }}
        >
          <div className="flex flex-col items-center space-y-6 pb-12">
            <button
              onClick={() => handleNavClick('home')}
              className="text-white text-xl hover:text-[var(--primary)]"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-white text-xl hover:text-[var(--primary)]"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('tracks')}
              className="text-white text-xl hover:text-[var(--primary)]"
            >
              Tracks
            </button>
            <button
              onClick={() => handleNavClick('prizes')}
              className="text-white text-xl hover:text-[var(--primary)]"
            >
              Prizes
            </button>
            <button
              onClick={() => handleNavClick('schedule')}
              className="text-white text-xl hover:text-[var(--primary)]"
            >
              Schedule
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="text-white text-xl hover:text-[var(--primary)]"
            >
              FAQ
            </button>
            <button
              onClick={() => handleNavClick('phases')}
              className="text-white text-xl hover:text-[var(--primary)]"
            >
              Phases
            </button>
            <button
              onClick={() => handleNavClick('sponsors')}
              className="text-white text-xl hover:text-[var(--primary)]"
            >
              Sponsors
            </button>
            <button
              onClick={() => { setIsMobileMenuOpen(false); navigate('/developers'); }}
              className="text-white text-xl hover:text-[var(--primary)]"
            >
              Developers
            </button>
            <Link
              to="/register"
              className="neon-button text-xl mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Register Now!
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
