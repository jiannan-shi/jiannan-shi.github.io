import React from 'react';
import { Twitter, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: Twitter,
      href: 'https://x.com/jnan_shi',
      label: 'Twitter'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/jnan.shi/',
      label: 'Instagram'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/jiannanshi/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:chiennan.shih@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Jiannan Shi. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
