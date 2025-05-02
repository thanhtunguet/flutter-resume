
import React from 'react';

interface SummaryProps {
  content: string;
}

const Summary: React.FC<SummaryProps> = ({ content }) => {
  return (
    <div className="resume-section">
      <h2 className="resume-section-title">Professional Summary</h2>
      <p className="text-sm">{content}</p>
    </div>
  );
};

export default Summary;
