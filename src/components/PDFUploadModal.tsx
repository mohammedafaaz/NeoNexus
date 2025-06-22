import { useState, useRef } from 'react';
import { CircleAlert, Upload, X } from 'lucide-react';
import { usePDF } from '../context/PDFContext';

interface PDFUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PDFUploadModal({ isOpen, onClose }: PDFUploadModalProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { setPDF } = usePDF();

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const validateFile = (file: File): boolean => {
    // Check if it's a PDF
    if (file.type !== 'application/pdf') {
      setError('Please upload a PDF file.');
      return false;
    }
    
    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError('File size should be less than 10MB.');
      return false;
    }
    
    setError(null);
    return true;
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      if (validateFile(droppedFile)) {
        setFile(droppedFile);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (validateFile(selectedFile)) {
        setFile(selectedFile);
      }
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleUpload = () => {
    if (file) {
      setPDF(file);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass-panel max-w-md w-full p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h2 className="text-2xl font-bold mb-6 text-center">Upload Brochure PDF</h2>
        
        <div 
          className={`border-2 border-dashed p-8 rounded-lg text-center mb-6 ${
            isDragging ? 'border-[var(--primary)]' : 'border-gray-600'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="w-12 h-12 mx-auto mb-4 text-[var(--primary)]" />
          
          <p className="mb-4">Drag and drop your PDF here or</p>
          
          <button 
            className="neon-button"
            onClick={handleUploadClick}
          >
            Browse Files
          </button>
          
          <input 
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept=".pdf"
            onChange={handleFileChange}
          />
          
          {file && (
            <div className="mt-4 p-3 bg-[var(--primary)]/10 rounded">
              <p className="truncate">{file.name}</p>
              <p className="text-sm text-[var(--foreground-muted)]">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          )}
          
          {error && (
            <div className="mt-4 p-3 bg-red-500/20 text-red-400 rounded flex items-center">
              <CircleAlert className="w-5 h-5 mr-2 flex-shrink-0" />
              <p>{error}</p>
            </div>
          )}
        </div>
        
        <div className="flex justify-end gap-4">
          <button 
            className="px-4 py-2 rounded text-[var(--foreground-muted)] hover:text-white"
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="neon-button"
            onClick={handleUpload}
            disabled={!file}
          >
            Upload PDF
          </button>
        </div>
      </div>
    </div>
  );
}
