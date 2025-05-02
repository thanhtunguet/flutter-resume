
import React from 'react';
import { Mail, Phone, Linkedin, Github, Globe } from 'lucide-react';

interface ContactInfoProps {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  portfolio?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  name,
  email,
  phone,
  linkedin,
  github,
  portfolio
}) => {
  return (
    <div className="bg-resume-primary text-white p-6 rounded-t-md">
      <h1 className="text-2xl font-bold mb-2">{name}</h1>
      <p className="text-sm mb-4 italic">Software Engineer</p>
      
      <div className="flex flex-wrap gap-4 text-xs">
        <div className="flex items-center">
          <Mail className="h-4 w-4 mr-1" />
          <span>{email}</span>
        </div>
        <div className="flex items-center">
          <Phone className="h-4 w-4 mr-1" />
          <span>{phone}</span>
        </div>
        <div className="flex items-center">
          <Linkedin className="h-4 w-4 mr-1" />
          <span>{linkedin}</span>
        </div>
        <div className="flex items-center">
          <Github className="h-4 w-4 mr-1" />
          <span>{github}</span>
        </div>
        {portfolio && (
          <div className="flex items-center">
            <Globe className="h-4 w-4 mr-1" />
            <span>{portfolio}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactInfo;
