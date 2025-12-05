import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            About <span className="text-blue-600">Me</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 shadow-lg"
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Hello! I'm <span className="font-semibold text-blue-600">Tomas Castro</span>, I’m a Full-Stack Developer currently 
                completing my Computer Engineering degree at ULACIT. Throughout my career, I’ve gained experience working with 
                technologies such as <span className="font-semibold">React, TypeScript, JavaScript, C#, .NET, Java, and Python</span>, 
                developing academic, personal, and internship projects.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                I have hands-on experience working with <span className="font-semibold">SQL and NoSQL databases, building APIs, 
                implementing clean architectures, and deploying applications on modern cloud platforms</span>. 
                I’m also preparing for my <span className="font-semibold">AWS Cloud Practitioner</span> certification, 
                as my long-term goal is to specialize in cloud architecture and scalable distributed systems.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                I enjoy working on projects that challenge me to think, design, and build with quality in mind. I’m always looking for 
                opportunities to grow my skills and contribute to meaningful, well-engineered solutions.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-8 pt-8 border-t border-gray-300"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">What I Bring</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    'Strong problem-solving skills',
                    'Clean & maintainable code',
                    'Collaborative team player',
                    'Fast learner & adaptable',
                    'Attention to detail',
                    'Passion for best practices'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-center text-gray-700"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
