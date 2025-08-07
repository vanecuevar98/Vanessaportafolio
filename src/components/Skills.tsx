import React, { useState } from 'react';
import { Code, Database, Settings, Palette, ChevronRight } from 'lucide-react';

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      color: "from-purple-600 to-violet-600",
      skills: [
        { name: "React", level: "Expert", impact: "Built 10+ production apps with 99.9% uptime" },
        { name: "Next.js", level: "Advanced", impact: "Improved SEO performance by 40%" },
        { name: "TypeScript", level: "Expert", impact: "Reduced runtime errors by 60%" },
        { name: "Tailwind CSS", level: "Advanced", impact: "Accelerated development by 50%" },
        { name: "JavaScript", level: "Expert", impact: "5+ years of production experience" }
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend & Data",
      color: "from-violet-600 to-purple-600",
      skills: [
        { name: "Node.js", level: "Advanced", impact: "Built scalable APIs serving 10k+ users" },
        { name: "PostgreSQL", level: "Advanced", impact: "Optimized queries reducing load time by 70%" },
        { name: "Python", level: "Intermediate", impact: "Automated data pipelines processing 1M+ records" },
        { name: "SQL", level: "Advanced", impact: "Designed efficient database schemas" },
      ]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "DevOps & Testing",
      color: "from-indigo-600 to-purple-600",
      skills: [
        { name: "GitHub Actions", level: "Advanced", impact: "Automated CI/CD reducing deployment time by 80%" },
        { name: "Jest", level: "Advanced", impact: "Achieved 90%+ test coverage on critical features" },
        { name: "Docker", level: "Intermediate", impact: "Containerized applications for consistent deployments" },
        { name: "AWS", level: "Intermediate", impact: "Deployed scalable cloud infrastructure" },
        { name: "Git", level: "Expert", impact: "Managed complex branching strategies for large teams" }
      ]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UX & Design",
      color: "from-pink-600 to-purple-600",
      skills: [
        { name: "Figma", level: "Advanced", impact: "Designed user-centered interfaces with 95% satisfaction" },
        { name: "User Research", level: "Intermediate", impact: "Conducted interviews improving UX by 40%" },
        { name: "Prototyping", level: "Advanced", impact: "Created high-fidelity prototypes reducing dev time" },
        { name: "Responsive Design", level: "Expert", impact: "Built mobile-first applications" },
        { name: "Accessibility", level: "Intermediate", impact: "Ensured WCAG compliance across projects" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive toolkit built through hands-on experience and continuous learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} text-white rounded-lg mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group cursor-pointer"
                      onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}></div>
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                            {skill.level}
                          </span>
                        </div>
                        <ChevronRight 
                          size={16} 
                          className={`text-purple-600 transform transition-transform duration-200 ${
                            hoveredSkill === `${categoryIndex}-${skillIndex}` ? 'rotate-90' : ''
                          }`}
                        />
                      </div>
                      
                      {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                        <div className="mt-2 p-3 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-lg border-l-4 border-purple-600 animate-fade-in">
                          <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                            💡 {skill.impact}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-lg opacity-90 mb-6">
                With expertise across the full stack and a passion for user-centered design, 
                I'm equipped to tackle complex challenges and deliver exceptional results.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white/20 px-3 py-1 rounded-full">5+ Years Experience</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">20+ Technologies</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">10+ Projects Delivered</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;