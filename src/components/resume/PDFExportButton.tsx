
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { generatePDF } from '@/utils/pdfExport';
import { useToast } from '@/components/ui/use-toast';

interface PDFExportButtonProps {
  targetElementId: string;
  filename?: string;
}

const PDFExportButton: React.FC<PDFExportButtonProps> = ({ 
  targetElementId, 
  filename = 'software-engineer-resume.pdf' 
}) => {
  const { toast } = useToast();

  const handleExport = async () => {
    try {
      toast({
        title: "Generating PDF...",
        description: "Please wait while we create your resume PDF.",
      });
      
      await generatePDF(targetElementId, filename);
      
      toast({
        title: "Success!",
        description: "Your resume has been downloaded as a PDF.",
      });
    } catch (error) {
      console.error('PDF generation failed:', error);
      toast({
        title: "PDF Generation Failed",
        description: "There was an error creating your PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Button onClick={handleExport} className="bg-resume-accent hover:bg-resume-primary">
      <Download className="h-4 w-4 mr-2" />
      Download PDF
    </Button>
  );
};

export default PDFExportButton;
