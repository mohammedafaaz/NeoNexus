import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface PDFContextType {
  pdfUrl: string | null;
  pdfName: string | null;
  setPDF: (file: File) => void;
  resetPDF: () => void;
  isAdmin: boolean;
  setIsAdmin: (status: boolean) => void;
}

const PDFContext = createContext<PDFContextType | undefined>(undefined);

export function PDFProvider({ children }: { children: ReactNode }) {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [pdfName, setPdfName] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  // Load PDF from localStorage on initial render
  useEffect(() => {
    const savedPdfUrl = localStorage.getItem('neonexus_pdf_url');
    const savedPdfName = localStorage.getItem('neonexus_pdf_name');
    
    if (savedPdfUrl) setPdfUrl(savedPdfUrl);
    if (savedPdfName) setPdfName(savedPdfName);
  }, []);

  // Save PDF to localStorage and state
  const setPDF = (file: File) => {
    // Create a blob URL for the file
    const url = URL.createObjectURL(file);
    setPdfUrl(url);
    setPdfName(file.name);
    
    // Store in localStorage (just the name, blob URLs can't be stored)
    localStorage.setItem('neonexus_pdf_name', file.name);
    
    // For localStorage, we'll actually need to convert to base64
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64data = reader.result as string;
      localStorage.setItem('neonexus_pdf_url', base64data);
    };
  };

  const resetPDF = () => {
    if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    setPdfUrl(null);
    setPdfName(null);
    localStorage.removeItem('neonexus_pdf_url');
    localStorage.removeItem('neonexus_pdf_name');
  };

  return (
    <PDFContext.Provider value={{ pdfUrl, pdfName, setPDF, resetPDF, isAdmin, setIsAdmin }}>
      {children}
    </PDFContext.Provider>
  );
}

export function usePDF() {
  const context = useContext(PDFContext);
  if (context === undefined) {
    throw new Error('usePDF must be used within a PDFProvider');
  }
  return context;
}
