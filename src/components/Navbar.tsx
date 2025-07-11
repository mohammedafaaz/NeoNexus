import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const [pendingSection, setPendingSection] = useState<string | null>(null);

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
      navigate('/home');
      return;
    }
    if (window.location.pathname !== '/home') {
      setPendingSection(sectionId);
      navigate('/home', { replace: false });
    } else {
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // After navigation to home, scroll to the pending section
  useEffect(() => {
    if (pendingSection && location.pathname === '/') {
      setTimeout(() => {
        const section = document.getElementById(pendingSection);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
        setPendingSection(null);
      }, 200); // Delay to ensure DOM is ready
    }
  }, [location, pendingSection]);

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
            <div className="flex-shrink-0 flex items-center space-x-2 sm:space-x-4">
              <div className="bg-white p-1 rounded-xl shadow-md navbar-btn-glow">
                <img
                  src="/bitm.png"
                  alt="Ballari Institute of Technology and Management Logo"
                  className="h-7 sm:h-12 object-contain"
                />
              </div>
              <div className="bg-white p-1 rounded-xl shadow-md navbar-btn-glow">
                <img
                  src="/ieeeblr.jpg"
                  alt="IEEE Bangalore Logo"
                  className="h-7 sm:h-1.5rem object-contain"
                />
              </div>
            </div>

            {/* Center Title (absolutely centered, hidden on mobile) */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden sm:block">
              <Link
                to="/"
                className="text-xl font-bold neon-text "
                style={{ whiteSpace: 'nowrap' }}
              >
                NEONEXUS 36.0
              </Link>
            </div>

            {/* Right Logos and Hamburger */}
            <div className="flex items-center space-x-2 sm:space-x-4 ml-auto">
              <div className="bg-white p-1 rounded-xl shadow-md navbar-btn-glow">
                <img
                  src="/ieee-removebg.png"
                  alt="IEEE Logo"
                  className="h-7 sm:h-10 md:h-14 object-contain"
                />
              </div>
              <div className="bg-white p-1 rounded-xl shadow-md navbar-btn-glow">
                <img
                  src="/sustaina-removebg.png"
                  alt="Sustaina Logo"
                  className="h-7 sm:h-10 md:h-14 object-contain"
                />
              </div>
              {/* Hamburger Button (always visible) */}
              <button
                className="text-white navbar-btn-glow p-2 sm:p-0"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Open navigation menu"
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
          <div className="flex flex-col items-center space-y-6 pb-12 px-4 pt-8">
            {/* Close (X) icon top right */}
            <div className="absolute top-6 right-6 z-50">
              <button
                className="p-2 rounded-full focus:outline-none bg-[var(--background)]/80 hover:bg-[var(--primary)]/20 transition"
                aria-label="Close menu"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate('/home');
                }}
                type="button"
              >
                <X size={28} className="text-[var(--primary)]" />
              </button>
            </div>
            <button
              onClick={() => handleNavClick('about')}
              className="w-full max-w-xs py-3 text-white text-xl rounded-lg hover:text-[var(--primary)] focus:outline-none"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('tracks')}
              className="w-full max-w-xs py-3 text-white text-xl rounded-lg hover:text-[var(--primary)] focus:outline-none"
            >
              Domains
            </button>
            <button
              onClick={() => handleNavClick('phases')}
              className="w-full max-w-xs py-3 text-white text-xl rounded-lg hover:text-[var(--primary)] focus:outline-none"
            >
            Bonus Tracks
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="w-full max-w-xs py-3 text-white text-xl rounded-lg hover:text-[var(--primary)] focus:outline-none"
            >
              Event Phases
            </button>
            <button
              onClick={() => handleNavClick('prizes')}
              className="w-full max-w-xs py-3 text-white text-xl rounded-lg hover:text-[var(--primary)] focus:outline-none"
            >
              Prizes
            </button>
            <button
              onClick={() => handleNavClick('schedule')}
              className="w-full max-w-xs py-3 text-white text-xl rounded-lg hover:text-[var(--primary)] focus:outline-none"
            >
              Schedule
            </button>
            <button
              onClick={() => handleNavClick('sponsors')}
              className="w-full max-w-xs py-3 text-white text-xl rounded-lg hover:text-[var(--primary)] focus:outline-none"
            >
              Sponsors
            </button>
            <button
              onClick={() => { setIsMobileMenuOpen(false); navigate('/developers'); }}
              className="w-full max-w-xs py-3 text-white text-xl rounded-lg hover:text-[var(--primary)] focus:outline-none"
            >
              Developers
            </button>
            <button
              onClick={() => handleNavClick('bonus-tracks')}
              className="w-full max-w-xs py-3 text-white text-xl rounded-lg hover:text-[var(--primary)] focus:outline-none"
            >
              FAQ
            </button>
            <Link
              to="/Register"
              className="neon-button text-xl mt-4 w-full max-w-xs text-center py-3"
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
