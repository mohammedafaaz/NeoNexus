import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Static stars background for optimal performance
function StaticBackground() {
  return (
    <div
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      style={{
        background: `
          radial-gradient(ellipse at 50% 60%, #0a0a16 0%, #000000 100%),
          radial-gradient(1px 1px at 20px 30px, #8B5CF6, transparent),
          radial-gradient(1px 1px at 40px 70px, #06B6D4, transparent),
          radial-gradient(1px 1px at 90px 40px, #EC4899, transparent),
          radial-gradient(1px 1px at 130px 80px, #8B5CF6, transparent),
          radial-gradient(1px 1px at 160px 30px, #06B6D4, transparent),
          radial-gradient(1px 1px at 200px 50px, #8B5CF6, transparent),
          radial-gradient(1px 1px at 250px 90px, #06B6D4, transparent),
          radial-gradient(1px 1px at 300px 20px, #EC4899, transparent),
          radial-gradient(1px 1px at 350px 60px, #8B5CF6, transparent),
          radial-gradient(1px 1px at 380px 100px, #06B6D4, transparent),
          radial-gradient(1px 1px at 420px 40px, #EC4899, transparent),
          radial-gradient(1px 1px at 450px 80px, #8B5CF6, transparent),
          radial-gradient(1px 1px at 480px 20px, #06B6D4, transparent),
          radial-gradient(1px 1px at 520px 110px, #EC4899, transparent),
          radial-gradient(1px 1px at 550px 50px, #8B5CF6, transparent),
          radial-gradient(1px 1px at 580px 90px, #06B6D4, transparent),
          radial-gradient(1px 1px at 620px 30px, #EC4899, transparent),
          radial-gradient(1px 1px at 650px 70px, #8B5CF6, transparent),
          radial-gradient(1px 1px at 680px 120px, #06B6D4, transparent),
          radial-gradient(1px 1px at 720px 60px, #EC4899, transparent),
          radial-gradient(1px 1px at 750px 100px, #8B5CF6, transparent),
          radial-gradient(1px 1px at 780px 40px, #06B6D4, transparent),
          radial-gradient(1px 1px at 820px 80px, #EC4899, transparent),
          radial-gradient(1px 1px at 850px 20px, #8B5CF6, transparent),
          radial-gradient(1px 1px at 880px 110px, #06B6D4, transparent),
          radial-gradient(1px 1px at 920px 50px, #EC4899, transparent),
          radial-gradient(1px 1px at 950px 90px, #8B5CF6, transparent),
          radial-gradient(1px 1px at 980px 30px, #06B6D4, transparent),
          radial-gradient(1px 1px at 1020px 70px, #EC4899, transparent),
          radial-gradient(1px 1px at 1050px 120px, #8B5CF6, transparent),
          radial-gradient(1px 1px at 1080px 60px, #06B6D4, transparent),
          radial-gradient(1px 1px at 1120px 100px, #EC4899, transparent),
          radial-gradient(1px 1px at 1150px 40px, #8B5CF6, transparent),
          radial-gradient(1px 1px at 1180px 80px, #06B6D4, transparent),
          radial-gradient(1px 1px at 1220px 20px, #EC4899, transparent),
          radial-gradient(1px 1px at 1250px 110px, #8B5CF6, transparent),
          radial-gradient(1px 1px at 1280px 50px, #06B6D4, transparent),
          radial-gradient(1px 1px at 1320px 90px, #EC4899, transparent),
          radial-gradient(1px 1px at 1350px 30px, #8B5CF6, transparent),
          radial-gradient(1px 1px at 1380px 70px, #06B6D4, transparent),
          radial-gradient(1px 1px at 1420px 120px, #EC4899, transparent),
          radial-gradient(1px 1px at 1450px 60px, #8B5CF6, transparent),
          radial-gradient(1px 1px at 1480px 100px, #06B6D4, transparent),
          radial-gradient(1px 1px at 1520px 40px, #EC4899, transparent),
          radial-gradient(1px 1px at 1550px 80px, #8B5CF6, transparent),
          radial-gradient(1px 1px at 1580px 20px, #06B6D4, transparent),
          radial-gradient(1px 1px at 1620px 110px, #EC4899, transparent),
          radial-gradient(1px 1px at 1650px 50px, #8B5CF6, transparent),
          radial-gradient(1px 1px at 1680px 90px, #06B6D4, transparent),
          radial-gradient(1px 1px at 1720px 30px, #EC4899, transparent),
          radial-gradient(1px 1px at 1750px 70px, #8B5CF6, transparent),
          radial-gradient(1px 1px at 1780px 120px, #06B6D4, transparent),
          radial-gradient(1px 1px at 1820px 60px, #EC4899, transparent),
          radial-gradient(1px 1px at 1850px 100px, #8B5CF6, transparent),
          radial-gradient(1px 1px at 1880px 40px, #06B6D4, transparent),
          radial-gradient(1px 1px at 1920px 80px, #EC4899, transparent)
        `,
        backgroundRepeat: 'repeat',
        backgroundSize: '1920px 150px',
        opacity: 0.6
      }}
    />
  );
}

export default function LandingPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showSkipOption, setShowSkipOption] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [forceSkip, setForceSkip] = useState(false);

  const handleExploreClick = () => {
    // Prevent multiple clicks during animation
    if (isTransitioning || isNavigating) return;

    setIsTransitioning(true);

    // Start the transition animation
    setTimeout(() => {
      setIsNavigating(true);

      // Navigate after the animation completes
      setTimeout(() => {
        navigate('/home');
      }, 1000); // Total animation duration: 1000ms
    }, 100);
  };

  // Fast loading with aggressive timeouts
  useEffect(() => {
    // Faster progress simulation
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 85) return prev; // Stop at 85% until actual load
        return prev + Math.random() * 20;
      });
    }, 150);

    // Show skip option after just 2 seconds
    const skipTimer = setTimeout(() => {
      if (isLoading) {
        setShowSkipOption(true);
      }
    }, 2000);

    // Force skip after 5 seconds to prevent long waits
    const forceSkipTimer = setTimeout(() => {
      if (isLoading) {
        setForceSkip(true);
        setIsLoading(false);
        setShowSkipOption(false);
      }
    }, 5000);

    // Cleanup
    return () => {
      clearInterval(progressInterval);
      clearTimeout(skipTimer);
      clearTimeout(forceSkipTimer);
    };
  }, [isLoading]);

  // Preload Spline domain and resources for faster loading
  useEffect(() => {
    // DNS prefetch and preconnect for faster loading
    const link1 = document.createElement('link');
    link1.rel = 'dns-prefetch';
    link1.href = '//my.spline.design';
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://my.spline.design';
    link2.crossOrigin = 'anonymous';
    document.head.appendChild(link2);

    // Preload the specific Spline scene for faster loading
    const link3 = document.createElement('link');
    link3.rel = 'prefetch';
    link3.href = 'https://my.spline.design/nexbotrobotcharacterconcept-FmcY7zMA9c0sQuXBnq47TG0R/';
    document.head.appendChild(link3);

    return () => {
      try {
        document.head.removeChild(link1);
        document.head.removeChild(link2);
        document.head.removeChild(link3);
      } catch (e) {
        // Links might already be removed
      }
    };
  }, []);

  const handleIframeLoad = () => {
    // Complete the progress and add smooth transition
    setLoadingProgress(100);
    setIframeLoaded(true);

    // Small delay for smooth transition
    setTimeout(() => {
      setIsLoading(false);
      setShowSkipOption(false);
    }, 500);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
    setLoadingProgress(0);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[var(--background)]">
      {/* Static Background for Performance */}
      <StaticBackground />

      <AnimatePresence mode="wait">
        {!isNavigating && (
          <motion.div
            key="landing-content"
            initial={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.8,
              rotateX: 15,
              filter: "blur(10px)"
            }}
            transition={{
              duration: 1,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="absolute inset-0"
          >


      {/* Optimized 3D Spline Background - Only load if not force skipped */}
      {!forceSkip && (
        <motion.div
          className="absolute inset-0 w-full h-full z-10"
          style={{ pointerEvents: 'auto' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.iframe
            src='https://my.spline.design/nexbotrobotcharacterconcept-FmcY7zMA9c0sQuXBnq47TG0R/'
            style={{
              border: 0,
              pointerEvents: 'auto',
              touchAction: 'auto',
              background: 'transparent'
            }}
            width='100%'
            height='100%'
            className="w-full h-full landing-iframe"
            title="NeoNexus 3D Robot"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
            initial={{ opacity: 0 }}
            animate={{
              opacity: iframeLoaded ? 0.9 : 0,
              scale: iframeLoaded ? 1 : 1.01
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut"
            }}
          />
        </motion.div>
      )}

      {/* Fallback message when force skipped */}
      {forceSkip && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center glass-panel p-6 max-w-md mx-4">
            <div className="text-[#8B5CF6] text-4xl mb-4">🚀</div>
            <h3 className="text-lg font-semibold mb-2 text-[var(--primary)]">Ready to Explore!</h3>
            <p className="text-[var(--foreground-muted)] text-sm mb-4">
              Experience optimized for faster loading
            </p>
            <motion.button
              onClick={handleExploreClick}
              disabled={isTransitioning || isNavigating}
              className="neon-button flex items-center justify-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore NeoNexus</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Subtle overlay to help blend 3D model with webapp theme */}
      <div className="absolute inset-0 pointer-events-none z-5"
           style={{
             background: 'linear-gradient(45deg, rgba(131, 81, 247, 0.02) 0%, transparent 100%, rgba(6, 182, 212, 0.02) 100%)',
             mixBlendMode: 'overlay'
           }}>
      </div>

      {/* Subtle loading indicator when waiting for model */}
      {!isLoading && !iframeLoaded && !forceSkip && !hasError && (
        <motion.div
          className="absolute bottom-8 right-8 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 glass-panel px-3 py-2">
            <div className="w-3 h-3 rounded-full bg-[#8B5CF6] animate-pulse"></div>
            <span className="text-[#8B5CF6] text-xs">Loading 3D Model...</span>
          </div>
        </motion.div>
      )}

      {/* Overlay Content - Only show when model is loaded or force skipped */}
      {(iframeLoaded || forceSkip) && !isLoading && !hasError && (
        <div className="absolute inset-0 flex flex-col justify-end items-center pb-16 px-4 z-10 pointer-events-none">
          {/* Optional: Add a subtle gradient overlay for better button visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

          {/* Explore Button */}
          <div className="relative z-20 pointer-events-auto items-center flex flex-col">
            <motion.button
              onClick={handleExploreClick}
              disabled={isTransitioning || isNavigating}
              className="neon-button landing-explore-button flex items-center justify-center gap-1 text-s px-5 py-2 font-semibold transition-all duration-200 hover:scale-105 backdrop-blur-sm bg-black/20 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Explore NeoNexus Application"
              whileHover={{
                scale: isTransitioning ? 1 : 1.05,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)"
              }}
              whileTap={{
                scale: isTransitioning ? 1 : 0.95
              }}
              animate={isTransitioning ? {
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(105, 105, 105, 0.3)",
                  "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)",
                  "0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.3)"
                ]
              } : {}}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                animate={isTransitioning ? { opacity: [1, 0.5, 1] } : {}}
                transition={{ duration: 0.5, repeat: isTransitioning ? Infinity : 0 }}
              >
                {isTransitioning ? "Launching..." : "Explore"}
              </motion.span>
              <motion.div
                animate={isTransitioning ? {
                  rotate: 360,
                  scale: [1, 1.2, 1]
                } : {}}
                transition={{
                  duration: 0.8,
                  repeat: isTransitioning ? Infinity : 0,
                  ease: "linear"
                }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
            <motion.p
              className="text-sm text-[var(--foreground-muted)] mt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <center>
                {iframeLoaded ? "3D Model Implmented from Spline" : forceSkip ? "Experience Optimized" : "3D Model Loaded"}
              </center>
            </motion.p>
          </div>
        </div>
      )}
      
      {/* Enhanced Loading Screen */}
      {isLoading && (
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center z-20"
          style={{
            background: 'radial-gradient(ellipse at 50% 60%, rgba(24, 26, 42, 0.7) 60%, rgba(10, 10, 22, 0.8) 100%)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="items-center justify-center text-center">
            {/* Loading Text with Animation */}
            <motion.div
              className="text-[#8B5CF6] font-medium mb-4 text-lg"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {loadingProgress < 30 ? "Initializing..." :
               loadingProgress < 60 ? "Loading Experience..." :
               loadingProgress < 85 ? "Almost Ready..." :
               "Finalizing..."}
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 h-2 bg-gray-800 rounded-full mb-4 overflow-hidden">
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(loadingProgress, 100)}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>

            {/* Progress Percentage */}
            <div className="text-[#8B5CF6] text-sm mb-4">
              {Math.round(loadingProgress)}%
            </div>

            {/* Skip option after 2 seconds */}
            {showSkipOption && (
              <div className="mt-6">
                <p className="text-[#8B5CF6] text-sm mb-3">Ready to explore?</p>
                <button
                  onClick={handleExploreClick}
                  className="neon-button text-sm px-4 py-2"
                >
                  Continue to NeoNexus
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--background)] z-20"
             style={{
               background: 'radial-gradient(ellipse at 50% 60%, rgba(24, 26, 42, 0.9) 60%, rgba(10, 10, 22, 0.95) 100%)'
             }}>
          <div className="text-center glass-panel p-8 max-w-md mx-4">
            <div className="text-[#8B5CF6] text-6xl mb-4">⚠️</div>
            <h2 className="text-xl font-bold mb-4 text-[var(--primary)]">3D Experience Unavailable</h2>
            <p className="text-[var(--foreground-muted)] mb-6">
              The 3D model couldn't load. Don't worry, you can still explore the full NeoNexus experience!
            </p>
            <button
              onClick={handleExploreClick}
              className="neon-button flex items-center justify-center gap-3 mx-auto"
            >
              <span>Continue to Main Site</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Responsive adjustments */}
      <style>{`
        @media (max-width: 768px) {
          .landing-explore-button {
            font-size: 1rem !important;
            padding: 0.75rem 1.5rem !important;
          }
        }

        @media (max-width: 480px) {
          .landing-explore-button {
            font-size: 0.875rem !important;
            padding: 0.625rem 1.25rem !important;
          }
        }

        /* Optimized iframe for better performance */
        .landing-iframe {
          min-height: 100vh;
          min-width: 100vw;
          object-fit: cover;
          pointer-events: auto !important;
          touch-action: auto !important;
          user-select: none;
          opacity: 0.9;
          will-change: opacity, transform; /* Optimize for animations */
          transform: translateZ(0); /* Force hardware acceleration */
          backface-visibility: hidden; /* Optimize rendering */
        }

        /* Ensure the iframe container allows mouse events */
        .landing-iframe:hover {
          cursor: grab;
          opacity: 1; /* Full opacity on hover for better interaction */
        }

        .landing-iframe:active {
          cursor: grabbing;
        }

        /* Smooth transition for iframe opacity */
        .landing-iframe {
          transition: opacity 0.3s ease-in-out;
        }

        /* Subtle pulse animation for the explore button */
        @keyframes explore-pulse {
          0%, 100% {
            box-shadow: 0 0 5px rgba(139, 92, 246, 0.5), 0 0 10px rgba(139, 92, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 10px rgba(139, 92, 246, 0.7), 0 0 20px rgba(139, 92, 246, 0.5);
          }
        }

        .landing-explore-button {
          animation: explore-pulse 3s ease-in-out infinite;
        }

        /* Cyberpunk transition effects */
        @keyframes cyber-glitch {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          60% { transform: translateX(-1px); }
          80% { transform: translateX(1px); }
        }

        @keyframes portal-expand {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 0.8;
          }
          100% {
            transform: scale(2) rotate(360deg);
            opacity: 0;
          }
        }

        .cyber-transition {
          animation: cyber-glitch 0.1s infinite;
        }

        .portal-effect {
          animation: portal-expand 1s ease-out forwards;
        }

        /* Twinkling stars animation */
        @keyframes twinkle {
          0% { opacity: 0.3; }
          50% { opacity: 0.8; }
          100% { opacity: 0.3; }
        }
      `}</style>
          </motion.div>
        )}

        {/* Portal Effect Overlay */}
        {isTransitioning && (
          <motion.div
            key="portal-effect"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={{
                  scale: [0, 1.5, 3],
                  rotate: [0, 180, 360],
                  opacity: [0, 0.8, 0]
                }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-32 h-32 border-4 border-[var(--primary)] rounded-full"
                style={{
                  boxShadow: "0 0 50px rgba(139, 92, 246, 0.8), inset 0 0 50px rgba(139, 92, 246, 0.3)"
                }}
              />
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={{
                  scale: [0, 1, 2],
                  rotate: [0, -180, -360],
                  opacity: [0, 0.6, 0]
                }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="absolute inset-0 w-32 h-32 border-2 border-[var(--secondary)] rounded-full"
                style={{
                  boxShadow: "0 0 30px rgba(6, 182, 212, 0.6)"
                }}
              />
            </div>
          </motion.div>
        )}

        {/* Transition Loading State */}
        {isNavigating && (
          <motion.div
            key="transition-loading"
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center bg-[var(--background)] z-50"
            style={{
              background: 'linear-gradient(rgba(192, 140, 255, 0.39) 5%, rgba(10, 10, 22, 0.95) 100%)'
            }}
          >
            <div className="text-center">
              <div className="relative flex items-center justify-center w-20 h-20 bg-[#0F0F1A] border border-[#8B5CF6] rounded-full mb-6">
                <div className="absolute h-20 w-20 rounded-full animate-spin bg-gradient-to-b from-[#8B5CF6] to-transparent"></div>
                <div className="absolute flex items-center justify-center bg-[#0F0F1A] rounded-full h-[78px] w-[78px]">
                  <div className="text-[#8B5CF6] text-2xl font-bold">NN</div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-[#8B5CF6] font-medium text-lg"
              >
                Entering NeoNexus...
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                className="h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full mx-auto mt-4"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
