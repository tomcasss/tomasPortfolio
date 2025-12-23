import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
        { name: 'TypeScript', icon: '🔷', color: 'from-blue-500 to-blue-700' },
        { name: 'JavaScript', icon: '🟨', color: 'from-yellow-400 to-yellow-600' },
        { name: 'HTML5', icon: '🌐', color: 'from-orange-500 to-red-500' },
        { name: 'CSS3', icon: '🎨', color: 'from-blue-400 to-blue-600' },
        { name: 'Tailwind CSS', icon: '💨', color: 'from-cyan-400 to-cyan-600' },
        { name: 'Vite', icon: '⚡', color: 'from-purple-500 to-purple-700' },
        { name: 'MAUI', icon: '📱', color: 'from-indigo-500 to-purple-600' },
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'C# / .NET', icon: '🟣', color: 'from-purple-500 to-purple-700' },
        { name: 'Java', icon: '☕', color: 'from-red-500 to-orange-600' },
        { name: 'Python', icon: '🐍', color: 'from-blue-500 to-yellow-500' },
        { name: 'Django', icon: '🎸', color: 'from-green-700 to-green-900' },
        { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-700' },
        { name: 'REST API', icon: '🔌', color: 'from-teal-500 to-teal-700' },
        { name: 'MVC & MVVM', icon: '🏗️', color: 'from-indigo-400 to-indigo-600' },
        { name: 'PL/SQL', icon: '📊', color: 'from-red-700 to-red-900' },
      ]
    },
    {
      category: 'Databases',
      items: [
        { name: 'SQL Server', icon: '🗄️', color: 'from-red-600 to-red-800' },
        { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-600 to-indigo-700' },
        { name: 'Oracle DB', icon: '🔴', color: 'from-red-700 to-red-900' },
        { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-green-800' },
        { name: 'Firebase', icon: '🔥', color: 'from-yellow-500 to-orange-600' },
      ]
    },
    {
      category: 'Cloud & Tools',
      items: [
        { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-orange-600' },
        { name: 'Vercel', icon: '▲', color: 'from-gray-300 to-gray-500' },
        { name: 'Git & GitHub', icon: '📦', color: 'from-gray-400 to-gray-600' },
        { name: 'GitLab', icon: '🦊', color: 'from-orange-600 to-red-600' },
        { name: 'Postman', icon: '📮', color: 'from-orange-500 to-orange-700' },
        { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-blue-700' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-16 text-lg">
            Technologies I work with
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent dark:border-gray-600"
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 text-center border-b-2 border-blue-600 dark:border-blue-400 pb-2">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      transition={{ duration: 0.15 }}
                      className={`flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r ${skill.color} dark:opacity-90 cursor-pointer`}
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-semibold text-gray-800 dark:text-white">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Summary */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
                <span className="font-bold text-blue-600">Full-Stack Proficiency</span> with modern technologies
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Relational DB', 'NoSQL', 'Agile', 'CI/CD', 'Responsive Design'].map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
