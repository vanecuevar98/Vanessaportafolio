import React from 'react';
import { Heart, Github, Linkedin, Mail, Download } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/vanecuevar/',
      label: 'LinkedIn'
    },
    {
      icon: <Github size={20} />,
      href: 'https://github.com/vanecuevar98',
      label: 'GitHub'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:vane.cuevar98@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-purple-900 via-violet-900 to-purple-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-violet-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">VC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Vanessa Cuevas Arroyo</h3>
                <p className="text-purple-200">Software Engineer</p>
              </div>
            </div>
            <p className="text-purple-100 mb-6 max-w-md leading-relaxed">
              Building scalable systems and interactive web applications with a focus on 
              user experience and technical excellence. Always excited to tackle new challenges 
              and collaborate on innovative projects.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="/CV_VaneCuevas_2025.pdf"
                download
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-purple-200 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-purple-200 hover:text-white transition-colors duration-200"
                >
                  {social.icon}
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
            
            {/* Availability Status */}
            <div className="mt-6 p-3 bg-green-500/20 rounded-lg border border-green-400/30">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-200 text-sm font-medium">Available for hire</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-purple-200 mb-4 md:mb-0">
              <span>© {currentYear} Vanessa Cuevas Arroyo. Made with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span>and lots of pre-workout</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors duration-200"
              title="Back to top"
            >
              <svg
                className="w-5 h-5 transform rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;