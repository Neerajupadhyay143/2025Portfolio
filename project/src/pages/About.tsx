import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, MapPin, Heart, Code, Briefcase } from 'lucide-react';
import about_me from "../assets/images/aboutme.png"

const About: React.FC = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', "Advance Javascript", 'PostgreSQL', 'MongoDB', 'Express js'] },
    { category: 'Tools & Others', items: ['Git', 'Github', 'Sanity.io', 'Socket.io', 'BitBucket'] },
  ];

  const experience = [
    {
      title: 'Frontend Developer',
      company: 'MetaBlock Technologies',
      period: '2023 - 2024',
      description: 'Leading development of scalable web applications using modern React and Node.js ecosystem.',
    },
    {
      title: 'Full-Stack Developer',
      company: 'Gradhub',
      period: '2024 - 2025',
      description: 'Designed and implemented the complete UI for Gradhub’s platform, ensuring full responsiveness across devices. Translated product requirements into intuitive, user-friendly interfaces, enhancing the overall user experience for their core product offerings.',
    },
    {
      title: 'Full-Stack Developer',
      company: 'Startup',
      period: '2025 - Present',
      description: 'Leading the development of multiple projects, handling both frontend and backend architecture. Responsible for designing intuitive UIs, ensuring responsiveness, and managing the full-stack implementation to deliver seamless, high-quality user experiences.',
    },
  ];

  const achievements = [
    'Led team of 5 developers on major e-commerce platform',
    'Reduced application load time by 60% through optimization',
    'Successfully delivered 10+ projects on time and within budget',
    'Won 1st place in an MCA Hackathon, demonstrating innovative problem-solving and full-stack development skills under competitive conditions.',
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>

        {/* Personal Info & Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Hello, I'm Neeraj Kumar Sharma
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with over 1+ years of experience creating
              digital solutions that bridge the gap between design and functionality. My journey
              started with a Computer Science degree, but my real education came from building
              real-world applications that solve genuine problems.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community. I believe
              in writing clean, maintainable code and creating user experiences that delight.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Jaipur ,Raj</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="text-blue-600 dark:text-blue-400" size={20} />
                <span className="text-gray-700 dark:text-gray-300">1+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <Briefcase className="text-blue-600 dark:text-blue-400" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Software Developer</span>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="text-blue-600 dark:text-blue-400" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Open Source Contributor</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center items-center"
          >
            <div className="relative">
              <img
                src={about_me}
                alt="Neeraj kumar sharma"
                className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Code size={40} className="text-white" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {job.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {job.company}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    <Calendar size={16} />
                    <span>{job.period}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {job.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Key Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                <div className="flex-shrink-0">
                  <Award className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;