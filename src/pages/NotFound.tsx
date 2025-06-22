import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--background)] cyber-grid flex flex-col items-center justify-center p-4">
      <div className="glass-panel max-w-md w-full p-8 text-center">
        <div className="flex justify-center mb-6">
          <AlertTriangle className="w-16 h-16 text-[var(--accent)]" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4 neon-text text-[var(--primary)]">404</h1>
        <h2 className="text-xl mb-6">PAGE NOT FOUND</h2>
        
        <p className="mb-8 text-[var(--foreground-muted)]">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link to="/" className="neon-button inline-flex items-center">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
