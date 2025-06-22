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

  const handleDownload = () => {
    if (!pdfUrl) {
      alert('Brochure will be available soon. Please check back later.');
      return;
    }

    // Create temporary anchor element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfName || 'neonexus-brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    if (!pdfUrl) {
      alert('No brochure available to share.');
      return;
    }

    // Check if Web Share API is available
    if (navigator.share) {
      try {
        // For actual deployment, you'd want to have a real URL to the PDF
        // For this demo, we'll just share the title and description
        await navigator.share({
          title: 'NeoNexus Hackathon Brochure',
          text: 'Check out the NeoNexus Hackathon brochure!',
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support the Web Share API
      // Copy the URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      setShareMessage('Link copied to clipboard!');
      setTimeout(() => setShareMessage(null), 3000);
    }
  };

  return (
    <section className="py-16 relative" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 max-w-4xl mx-auto bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
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
                  {pdfUrl ? 'Download PDF' : 'Brochure Coming Soon'}
                </button>
                <button 
                  className="neon-button flex items-center"
                  onClick={handleShare}
                  disabled={!pdfUrl}
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
                {pdfUrl ? (
                  <div className="w-[200px] sm:w-[250px] h-[300px] overflow-hidden border border-white/20 rounded">
                    <embed 
                      src={pdfUrl} 
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
