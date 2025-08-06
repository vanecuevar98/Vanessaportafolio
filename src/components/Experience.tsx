import React from 'react';
import { Calendar, MapPin, Award, Users, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "C3.ai",
      position: "Software Engineer, Apps",
      period: "Aug 2024 - Jun 2025",
      location: "Remote",
      type: "Full-time",
      description: "Developing enterprise AI applications and improving data pipeline infrastructure for large-scale deployments.",
      achievements: [
        "Improved data pipelines reducing system regressions by 25%",
        "Developed SDL features enhancing developer productivity",
        "Built prototype companion app with mobile-first design",
        "Created LLM-powered documentation system"
      ],
      technologies: ["C3.ai Platform", "TypeScript", "SDL/C3Type", "Python", "AI/ML"],
      color: "from-blue-600 to-purple-600"
    },
    {
      company: "HP Inc.",
      position: "Software Engineering Intern",
      period: "Feb 2023 - Jul 2023",
      location: "Guadalajara, Mexico",
      type: "Internship",
      description: "Focused on sales data analysis and internal tooling development to support business operations.",
      achievements: [
        "Analyzed sales data patterns improving forecasting accuracy",
        "Developed SQL queries optimizing data retrieval by 40%",
        "Created comprehensive documentation for internal tools",
        "Collaborated with cross-functional teams on data initiatives"
      ],
      technologies: ["SQL", "PostgreSQL", "Python", "Data Analysis", "Documentation"],
      color: "from-green-600 to-blue-600"
    },
    {
      company: "Women For The Future",
      position: "Volunteer & Mentor",
      period: "2022 - Present",
      location: "Mexico",
      type: "Volunteer",
      description: "Supporting diversity in tech through mentoring and educational initiatives for underrepresented groups.",
      achievements: [
        "Mentored 15+ women entering tech careers",
        "Organized coding workshops for beginners",
        "Contributed to diversity and inclusion initiatives",
        "Built supportive community networks"
      ],
      technologies: ["Mentoring", "Community Building", "Education", "Diversity & Inclusion"],
      color: "from-pink-600 to-purple-600"
    },
    {
      company: "Tecnológico de Monterrey",
      position: "Computer Science Student",
      period: "2020 - 2024",
      location: "Monterrey, Mexico",
      type: "Education",
      description: "Bachelor's degree in Computer Science with exceptional academic performance and international exchange experience.",
      achievements: [
        "Graduated with 97.3/100 GPA",
        "Completed exchange program at Karlsruhe Institute of Technology",
        "Led multiple software development projects",
        "Active in student organizations and tech communities"
      ],
      technologies: ["Computer Science", "Software Engineering", "Research", "Leadership"],
      color: "from-purple-600 to-indigo-600"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A timeline of growth, learning, and impact across different roles and organizations
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-violet-600 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full border-4 border-white dark:border-gray-900 hidden md:block"></div>
                  
                  <div className="md:ml-20">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-purple-100 dark:border-purple-900/30">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            {experience.position}
                          </h3>
                          <div className={`text-xl font-semibold bg-gradient-to-r ${experience.color} bg-clip-text text-transparent mb-2`}>
                            {experience.company}
                          </div>
                        </div>
                        <div className="flex flex-col md:items-end space-y-1">
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Calendar size={16} className="mr-2" />
                            <span className="font-medium">{experience.period}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <MapPin size={16} className="mr-2" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Type Badge */}
                      <div className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${experience.color} text-white`}>
                          {experience.type}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <Award size={18} className="mr-2 text-purple-600" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start space-x-3">
                              <TrendingUp size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <Users size={18} className="mr-2 text-purple-600" />
                          Technologies & Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-sm border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-colors duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl">
              <div className="text-3xl font-bold mb-2">2+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-sm opacity-90">People Mentored</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl">
              <div className="text-3xl font-bold mb-2">97.3</div>
              <div className="text-sm opacity-90">GPA Score</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl">
              <div className="text-3xl font-bold mb-2">25%</div>
              <div className="text-sm opacity-90">Regression Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;