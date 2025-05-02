
import React from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <div className="resume-section">
      <h2 className="resume-section-title">Professional Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="resume-subsection">
          <div className="resume-subsection-title">
            <span className="font-medium">
              <span className="font-semibold">{exp.title}</span>, {exp.company}
            </span>
            <span className="text-xs text-resume-gray">
              {exp.startDate} - {exp.endDate}
            </span>
          </div>
          <div className="text-xs text-resume-gray mb-1">{exp.location}</div>
          <ul className="mt-1">
            {exp.achievements.map((achievement, idx) => (
              <li key={idx} className="resume-bullet">{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
