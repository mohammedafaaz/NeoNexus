import { useState } from 'react';
import { AlertTriangle, FileDown, Share2, Upload } from 'lucide-react';
import { usePDF } from '../context/PDFContext';
import PDFUploadModal from './PDFUploadModal';

export default function BrochureSection() {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [showAdminControls, setShowAdminControls] = useState(false);
  const [shareMessage, setShareMessage] = useState<string | null>(null);
  const { pdfUrl, pdfName, isAdmin, setIsAdmin } = usePDF();

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
  const fallbackPdfUrl = "/Brochure.pdf";
  const actualPdfUrl = pdfUrl || fallbackPdfUrl;
  const actualPdfName = pdfName || "Brochure.pdf";

  const handleDownload = () => {
    if (!actualPdfUrl) {
      alert('Brochure will be available soon. Please check back later.');
      return;
    }
    // Create temporary anchor element
    const link = document.createElement('a');
    link.href = actualPdfUrl;
    link.download = actualPdfName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
    <section className="py-12 sm:py-16 relative" onKeyDown={handleKeyDown} tabIndex={0}>
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
                Download our comprehensive brochure for complete details about the hackathon, including rules, eligibility criteria, judging parameters, and more.
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
            
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] opacity-70 blur-md rounded-lg"></div>
              <div className="relative bg-[var(--background-dark)] p-6 rounded-lg">
                {actualPdfUrl ? (
                  <div className="w-[200px] sm:w-[250px] h-[300px] overflow-hidden border border-white/20 rounded">
                    <embed 
                      src={actualPdfUrl} 
                      type="application/pdf"
                      width="100%"
                      height="100%"
                    />
                  </div>
                ) : (
                  <img 
                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=300&auto=format&fit=crop" 
                    alt="Brochure Preview" 
                    className="w-[200px] sm:w-[250px] h-auto shadow-lg rounded border border-white/20"
                  />
                )}
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
