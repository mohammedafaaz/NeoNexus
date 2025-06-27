import { useState, useRef, useEffect } from 'react';
import { AlertTriangle, FileDown, Share2, Upload } from 'lucide-react';
import { usePDF } from '../context/PDFContext';
import PDFUploadModal from './PDFUploadModal';

function AnimatedPDFIcon() {
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const handle = (e: MouseEvent) => {
			const { innerWidth, innerHeight } = window;
			const x = (e.clientX / innerWidth - 0.5) * 20;
			const y = (e.clientY / innerHeight - 0.5) * 20;
			el.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
		};
		window.addEventListener('mousemove', handle);
		return () => window.removeEventListener('mousemove', handle);
	}, []);
	return (
		<div ref={ref} className="absolute left-10 bottom-10 z-0 pointer-events-none transition-transform duration-300" style={{width: 60, height: 60}}>
			<svg width="60" height="60" viewBox="0 0 60 60">
				<rect x="8" y="8" width="44" height="44" rx="8" fill="#8351f7" opacity="0.13" />
				<text x="30" y="38" textAnchor="middle" fontSize="18" fill="#fff" opacity="0.25" fontWeight="bold">PDF</text>
			</svg>
		</div>
	);
}

export default function BrochureSection() {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [showAdminControls, setShowAdminControls] = useState(false);
  const [shareMessage, setShareMessage] = useState<string | null>(null);
  const [downloading, setDownloading] = useState(false); // <-- add state
  const { pdfUrl, isAdmin, setIsAdmin } = usePDF();

  // Toggle admin mode with secret key combination (Ctrl + Alt + A)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.ctrlKey && e.altKey && e.key === 'a') {
      setIsAdmin(!isAdmin);
      if (!isAdmin) {
        setShowAdminControls(true);
        setTimeout(() => setShowAdminControls(false), 3000);
      }
    }
  };

  // If no uploaded PDF, fallback to public brochure
  const fallbackPdfUrl = "/NNbrochure.pdf";
  const actualPdfUrl = pdfUrl || fallbackPdfUrl;

  const handleDownload = () => {
    if (!actualPdfUrl) {
      alert('Brochure will be available soon. Please check back later.');
      return;
    }
    setDownloading(true); // Show downloading message
    // Create temporary anchor element
    const link = document.createElement('a');
    link.href = actualPdfUrl;
    link.download = 'NeoNexusBrochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setDownloading(false), 2000); // Hide message after 2s
    // Do NOT open the PDF in a new tab (removes 404 page)
  };

  const handleShare = async () => {
    if (!actualPdfUrl) {
      alert('No brochure available to share.');
      return;
    }

    // Check if Web Share API is available
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'NeoNexus Hackathon Brochure',
          text: 'Check out the NeoNexus Hackathon brochure!',
          url: window.location.origin + actualPdfUrl,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.origin + actualPdfUrl);
      setShareMessage('Link copied to clipboard!');
      setTimeout(() => setShareMessage(null), 3000);
    }
  };

  return (
    <section className="py-12 sm:py-16 relative overflow-hidden" onKeyDown={handleKeyDown} tabIndex={0}>
      <AnimatedPDFIcon />
      {/* 3D Decorative Element (top right) */}
      <div className="absolute right-0 top-0 z-0 pointer-events-none">
        <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-30">
          <defs>
            <radialGradient id="brochuregrad1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8351f7" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="50" fill="url(#brochuregrad1)" />
        </svg>
      </div>
      <div className="container mx-auto px-2 sm:px-4 lg:px-8">
        <div className="glass-panel p-4 sm:p-8 max-w-4xl mx-auto bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">EVENT BROCHURE</h2>
              <p className="mb-6 text-[var(--foreground-muted)] max-w-md">
                Download our comprehensive brochure for complete details about the hackathon, including rules, eligibility criteria, judging parameters, and more.<br/>
                <br/>After clicking the Download Pdf button, the PDF will be downloaded to your device. Check your Downloads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="neon-button flex items-center"
                  onClick={handleDownload}
                >
                  <FileDown className="w-5 h-5 mr-2" />
                  Download PDF
                </button>
                <button 
                  className="neon-button flex items-center"
                  onClick={handleShare}
                  disabled={!actualPdfUrl}
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Share Brochure
                </button>
                
                {isAdmin && (
                  <button 
                    className="neon-button flex items-center bg-[var(--accent)]/20 border-[var(--accent)]"
                    onClick={() => setIsUploadModalOpen(true)}
                  >
                    <Upload className="w-5 h-5 mr-2" />
                    Upload Brochure
                  </button>
                )}
              </div>
              
              {downloading && (
                <div className="mt-4 p-2 bg-[var(--primary)]/20 rounded text-sm flex items-center">
                  PDF is downloading...
                </div>
              )}

              {shareMessage && (
                <div className="mt-4 p-2 bg-[var(--primary)]/20 rounded text-sm flex items-center">
                  {shareMessage}
                </div>
              )}
              
              {showAdminControls && (
                <div className="mt-4 p-2 bg-[var(--accent)]/20 text-[var(--accent)] rounded text-sm flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Admin mode {isAdmin ? 'enabled' : 'disabled'}
                </div>
              )}
            </div>
            
            {/* Replace Preview with Brochure Poster */}
            <div className="relative">
              {/* Animated gradient background */}
              <div className="absolute -inset-1 rounded-lg animate-gradientMove z-0" style={{
                background: "linear-gradient(120deg, var(--primary), var(--accent), #06b6d4, var(--primary))",
                backgroundSize: "300% 300%",
                opacity: 0.7,
                filter: "blur(16px)"
              }}></div>
              <div className="relative bg-[var(--background-dark)] p-2 sm:p-6 rounded-lg z-10">
                <img 
                  src="/brochureposter.png"
                  alt="NeoNexus Brochure Poster"
                  className="w-[200px] sm:w-[250px] h-auto shadow-lg rounded border border-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* PDF Upload Modal */}
      <PDFUploadModal 
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
      />
    </section>
  );
}

/* Add this style globally (e.g., in index.css or via a <style> tag in this component) */
<style>
{`
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-gradientMove {
  animation: gradientMove 0.1s ease-in-out infinite;
}
`}
</style>
