
import React from 'react';
import ContactInfo from './ContactInfo';
import Summary from './Summary';
import SkillsSection from './SkillsSection';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import PDFExportButton from './PDFExportButton';

const ResumeTemplate: React.FC = () => {
  // Sample resume data
  const resumeData = {
    contactInfo: {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      phone: "(123) 456-7890",
      linkedin: "linkedin.com/in/janedoe",
      github: "github.com/janedoe",
      portfolio: "janedoe.dev"
    },
    summary: "Experienced Software Engineer with expertise in mobile development using Flutter and strong skills in cross-platform development. Proficient in AI/Machine Learning, particularly in Object Detection (YOLO) and AI prompting techniques. Enthusiastic and proactive about process improvement, with a fundamental understanding of security practices and a proven track record of boosting team productivity through internal tool development.",
    skillCategories: [
      {
        category: "Mobile Development",
        skills: ["Flutter (Expert)", "Dart", "State Management (Provider, BLoC/Cubit, Riverpod)", "Native Module Integration (iOS/Android)"]
      },
      {
        category: "Web Frontend",
        skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Design"]
      },
      {
        category: "Cross-Platform",
        skills: ["React Native", "JavaScript (Chrome Extensions)", "Electron", "Progressive Web Apps"]
      },
      {
        category: "AI / Machine Learning",
        skills: ["Object Detection (YOLO)", "AI Prompt Engineering", "AI APIs & Tools", "Computer Vision Basics"]
      },
      {
        category: "Backend/Databases",
        skills: ["Node.js", "Firebase", "MongoDB", "REST API Design"]
      },
      {
        category: "Tools & Platforms",
        skills: ["Git", "Docker", "JIRA", "CI/CD", "VS Code", "Figma"]
      },
      {
        category: "Methodologies",
        skills: ["Agile/Scrum", "Test-Driven Development", "DevOps", "Clean Code Practices"]
      }
    ],
    experiences: [
      {
        title: "Senior Mobile Developer",
        company: "Tech Innovations Inc.",
        location: "San Francisco, CA",
        startDate: "Jan 2021",
        endDate: "Present",
        achievements: [
          "Led the development of a cross-platform mobile application using Flutter, resulting in a 30% reduction in codebase complexity compared to separate native versions",
          "Implemented a YOLO-based object detection module for real-time product recognition, achieving 92% accuracy in varied lighting conditions",
          "Developed internal tools using React and Node.js, improving team deployment time by 25%",
          "Mentored junior developers on effective AI prompting techniques for code generation and debugging"
        ]
      },
      {
        title: "Full Stack Developer",
        company: "Digital Solutions LLC",
        location: "Boston, MA",
        startDate: "Mar 2018",
        endDate: "Dec 2020",
        achievements: [
          "Created reusable web components using React, enhancing frontend development speed by 40%",
          "Developed a Chrome Extension using JavaScript to automate content extraction tasks, saving approximately 15 hours per week for the content team",
          "Proactively identified and addressed performance bottlenecks in the mobile app, improving load times by 35%",
          "Applied security best practices throughout the development lifecycle, reducing vulnerability incidents by 60%"
        ]
      }
    ],
    projects: [
      {
        title: "EcoTrack",
        description: "A Flutter-based mobile application that helps users track their carbon footprint through daily activities and transportation choices",
        technologies: ["Flutter", "Dart", "Firebase", "Google Maps API"],
        link: "github.com/janedoe/ecotrack"
      },
      {
        title: "CodeBuddy Chrome Extension",
        description: "A productivity extension for developers that provides AI-powered code snippets and documentation links based on the current context",
        technologies: ["JavaScript", "Chrome Extension API", "OpenAI API"],
        link: "github.com/janedoe/codebuddy"
      },
      {
        title: "ObjectSense",
        description: "An object detection system using YOLO to identify and categorize items in retail environments for inventory management",
        technologies: ["Python", "YOLO", "TensorFlow", "React Native"],
        link: "github.com/janedoe/objectsense"
      }
    ],
    education: [
      {
        degree: "B.S. Computer Science",
        institution: "University of Technology",
        location: "Cambridge, MA",
        graduationDate: "May 2018"
      }
    ],
    certifications: [
      {
        name: "Google Flutter Certified Developer",
        issuer: "Google",
        date: "2022"
      },
      {
        name: "AWS Certified Developer – Associate",
        issuer: "Amazon Web Services",
        date: "2021"
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-end mb-4">
        <PDFExportButton targetElementId="resume-content" />
      </div>

      <div id="resume-content" className="bg-white border border-resume-border rounded-md shadow-sm print:shadow-none">
        <ContactInfo {...resumeData.contactInfo} />
        
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Summary content={resumeData.summary} />
              <Experience experiences={resumeData.experiences} />
              <Projects projects={resumeData.projects} />
            </div>
            
            <div className="lg:col-span-1">
              <SkillsSection skillCategories={resumeData.skillCategories} />
              <Education 
                educations={resumeData.education} 
                certifications={resumeData.certifications} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate;
