
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface ProjectsProps {
  projects: ProjectItem[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="resume-section">
      <h2 className="resume-section-title">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="resume-subsection">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-resume-primary">{project.title}</h3>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs flex items-center text-resume-accent hover:underline"
              >
                <span>View Project</span>
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            )}
          </div>
          <p className="text-xs mb-1">{project.description}</p>
          <p className="text-xs italic text-resume-accent">
            Technologies: {project.technologies.join(', ')}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
