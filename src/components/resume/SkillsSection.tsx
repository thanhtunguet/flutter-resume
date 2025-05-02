
import React from 'react';

interface SkillCategory {
  category: string;
  skills: string[];
}

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skillCategories }) => {
  return (
    <div className="resume-section">
      <h2 className="resume-section-title">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {skillCategories.map((category, index) => (
          <div key={index} className="mb-2">
            <h3 className="text-sm font-semibold text-resume-accent">{category.category}</h3>
            <p className="text-xs">{category.skills.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
