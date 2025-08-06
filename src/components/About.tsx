import React from 'react';
import { GraduationCap, Award, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education Excellence",
      description: "ITESM Graduate with 97.3/100 GPA, Karlsruhe Exchange Program"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Technical Mastery",
      description: "Full-stack systems, debugging, maintainability, scaling, automated testing"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership",
      description: "Cross-functional collaboration, mentoring, and project management"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid Innovation",
      description: "Quick ramp-up, initiative-driven development, and continuous learning"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I'm a proactive software engineer who enjoys debugging hard problems and building 
              systems that scale. With a strong foundation in computer science and hands-on experience 
              at leading tech companies, I bring both technical depth and collaborative leadership to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-purple-100 dark:border-purple-900/30"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-purple-100 dark:border-purple-900/30">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              My Journey
            </h3>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                My passion for software engineering began during my studies at Tecnológico de Monterrey, 
                where I achieved a 97.3/100 GPA while participating in an exchange program at Karlsruhe Institute of Technology. 
                This international experience broadened my perspective on global tech practices and collaborative development.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                At C3.ai, I've had the opportunity to work on cutting-edge AI applications, improving data pipelines 
                and developing prototype companion apps that reduced system regressions by 25%. My experience at HP 
                further strengthened my skills in data analysis and internal tooling.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Beyond technical skills, I'm passionate about mentoring others and contributing to diversity in tech 
                through my involvement with Women For The Future and various teaching initiatives. I believe the best 
                software is built by diverse teams who understand their users deeply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;