import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-violet-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20">
        <div
          className="absolute inset-0 hero-background-pattern animate-pulse"
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-violet-600 p-1 animate-pulse">
            <img
              src="/996f0b67-852e-4dc8-a400-045c803d7053.jpeg"
              alt="Vanessa Cuevas Arroyo"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 animate-bounce"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-800 bg-clip-text text-transparent animate-fade-in">
            Hi, I'm Vanessa
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6 animate-fade-in-delay-1">
            Software Engineer
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-2">
            I build scalable systems and interactive web apps powered by{' '}
            <span className="text-purple-600 font-semibold">React</span>,{' '}
            <span className="text-purple-600 font-semibold">Vue</span>,{' '}
            <span className="text-purple-600 font-semibold">TypeScript</span> &{' '}
            <span className="text-purple-600 font-semibold">automated pipelines</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay-3">
            <button
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-violet-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <a
              href="/CV_VaneCuevas_2025.pdf"
              download
              className="border-2 border-purple-600 text-purple-600 dark:text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transform hover:scale-105 transition-all duration-200"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-delay-4">
            <a
              href="https://www.linkedin.com/in/vanecuevar/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 text-purple-600 hover:text-purple-700"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/vanecuevar98"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 text-purple-600 hover:text-purple-700"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:vane.cuevar98@gmail.com"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 text-purple-600 hover:text-purple-700"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-purple-600" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
