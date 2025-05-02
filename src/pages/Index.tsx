
import React from 'react';
import ResumeTemplate from '@/components/resume/ResumeTemplate';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-resume-primary">Flutter Resume Craft</h1>
        <p className="text-resume-gray">Professional Software Engineer CV Template</p>
      </header>
      
      <ResumeTemplate />
      
      <footer className="mt-12 text-center text-xs text-resume-gray">
        <p>© {new Date().getFullYear()} Flutter Resume Craft | Professional CV Generator</p>
      </footer>
    </div>
  );
};

export default Index;
