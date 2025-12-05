import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: 'Computer Engineering Student',
      company: 'ULACIT — Academic Projects',
      period: 'January 2023 - April 2026',
      location: 'Costa Rica',
      description: 'As part of my Computer Engineering degree, I have developed multiple end-to-end projects using modern development stacks, cloud fundamentals, and software architecture best practices.',
      achievements: [
        'Built full-stack applications using Python/Django, C#/.NET, Java, and JavaScript',
        'Implemented REST APIs and structured systems using MVC and MVVM architectures',
        'Developed cross-platform apps with .NET MAUI, applying MVVM for state management',
        'Designed and managed relational and NoSQL databases: Oracle, MySQL, SQL Server, MongoDB, and Firebase'
      ],
      technologies: ['Python', 'Django', 'C#', '.NET', 'Java', 'MAUI', 'Oracle', 'MongoDB', 'Firebase']
    },
    {
      title: 'Software Engineering Intern',
      company: 'Capris S.A.',
      period: 'September 2025 - December 2025',
      location: 'Costa Rica',
      description: 'Contributed to backend development, database integrations, and production-level improvements using enterprise tools and workflows. Collaborated with senior engineers and worked with real systems used by clients.',
      achievements: [
        'Developed backend features using C# and .NET for internal business services',
        'Created and optimized PL/SQL procedures and integrated them with .NET services',
        'Built Oracle HTP web reports, generating dynamic HTML responses directly from PL/SQL',
        'Debugged and refactored existing components to improve system reliability and performance',
        'Followed professional GitLab workflows using branches, merge requests, and code reviews'
      ],
      technologies: ['C#', '.NET', 'PL/SQL', 'Oracle', 'GitLab']
    },
    {
      title: 'Next Chapter Loading...',
      company: 'To Be Continued 🚀',
      period: 'Coming Soon',
      location: 'Somewhere Exciting',
      description: 'The story continues... Stay tuned for the next adventure in my professional journey!',
      achievements: [
        'New challenges await',
        'More technologies to master',
        'Exciting projects on the horizon'
      ],
      technologies: ['???', '🎯', '💡', '⚡']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-16 text-lg">
            My professional journey
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content card */}
                  <div className="md:w-1/2">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                            <Briefcase size={18} />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                            <span className="text-gray-400">•</span>
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200 text-sm rounded-full font-medium shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: index * 0.2 + 0.3, duration: 0.3 }}
                      className="w-4 h-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"
                    ></motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Download Resume Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mt-16"
          >
            <a
              href="/resume.pdf"
              download="Tomas_Castro_Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
