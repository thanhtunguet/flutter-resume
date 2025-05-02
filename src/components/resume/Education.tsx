
import React from 'react';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  graduationDate: string;
}

interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
}

interface EducationProps {
  educations: EducationItem[];
  certifications?: CertificationItem[];
}

const Education: React.FC<EducationProps> = ({ educations, certifications }) => {
  return (
    <div className="resume-section">
      <h2 className="resume-section-title">Education</h2>
      {educations.map((edu, index) => (
        <div key={index} className="resume-subsection">
          <div className="resume-subsection-title">
            <span>{edu.degree}</span>
            <span className="text-xs text-resume-gray">{edu.graduationDate}</span>
          </div>
          <p className="text-xs text-resume-gray">{edu.institution}, {edu.location}</p>
        </div>
      ))}

      {certifications && certifications.length > 0 && (
        <>
          <h3 className="text-sm font-semibold mt-4 mb-2">Certifications</h3>
          {certifications.map((cert, index) => (
            <div key={index} className="mb-2">
              <div className="flex justify-between">
                <span className="text-sm">{cert.name}</span>
                <span className="text-xs text-resume-gray">{cert.date}</span>
              </div>
              <p className="text-xs text-resume-gray">{cert.issuer}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Education;
