'use client'

import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../utils/animations'

interface SkillBadgeProps {
  skill: string
}

const SkillBadge = ({ skill }: SkillBadgeProps) => (
  <span className="inline-block px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300">
    {skill}
  </span>
)

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'ePhilos AG',
      period: 'Aug 2021 - Present · 2 years 8 months',
      location: 'Bremen, Germany · Hybrid',
      description: 'Responsible for the further development of Comfortmarkt (CM), a software based on PHP, Ext JS, Webix, and MySQL. Optimization of database queries and performance. Implementation of new features focusing on user-friendliness. Application of best practices in software development and code optimization. Conducting unit tests and collaborating on CI/CD processes.',
      skills: ['PHP', 'Ext JS', 'Webix', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Unit Testing']
    },
    {
      title: 'Web Developer',
      company: 'Freelancer',
      period: 'Mar 2020 - Jun 2021 · 1 year 4 months',
      location: 'Remote - Morocco',
      description: 'Development of responsive websites (HTML, CSS, Bootstrap, jQuery, WordPress). Customizations and SEO optimization. Close collaboration with clients to implement tailored solutions.',
      skills: ['HTML', 'CSS', 'Bootstrap', 'jQuery', 'WordPress', 'SEO']
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl font-bold mb-8"
            >
              Experience
            </motion.h2>
            <div className="relative space-y-8">
              <div className="absolute left-[7px] top-[6px] bottom-6 w-[2px] bg-blue-600/20" />
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="relative pl-8"
                >
                  <div className="absolute left-0 top-[6px] w-4 h-4 rounded-full bg-blue-600" />
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-gray-400">{exp.company}</p>
                      <p className="text-sm text-gray-500">{exp.period}</p>
                      <p className="text-sm text-gray-500">{exp.location}</p>
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <SkillBadge key={skillIndex} skill={skill} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <Education />
        </div>
      </div>
    </section>
  )
}

const Education = () => {
  const education = [
    {
      degree: 'Vocational Training in Application Development',
      school: 'Schulzentrum SII Utbremen Bremen',
      period: 'Aug 2021 - May 2024',
      description: 'Dual education: Theory and practice in Full Stack Development. Focus on modern web technologies and agile software development practices.',
      skills: ['JavaScript', 'React', 'Node.js', 'SQL', 'Agile Methodologies']
    },
    {
      degree: 'Bachelor in Networks and Telecommunications',
      school: 'Université du Littoral Côte d\'Opale',
      period: 'Oct 2018 - Nov 2019',
      description: 'French state diploma focusing on network administration, IT security, and web development. Preparation for CISCO certifications (CCNA1 to CCNA4).',
      skills: ['Network Administration', 'IT Security', 'PHP', 'MySQL', 'Project Management', 'CISCO CCNA']
    },
    {
      degree: 'Training in Computer Development Techniques',
      school: 'OFPPT Ouarzazate',
      period: 'Sep 2016 - Jul 2018',
      description: 'Comprehensive training in computer development fundamentals and techniques.',
      skills: []
    }
  ]

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.h2 
        variants={fadeIn}
        className="text-3xl font-bold mb-8"
      >
        Education
      </motion.h2>
      <div className="relative space-y-8">
        <div className="absolute left-[7px] top-[6px] bottom-6 w-[2px] bg-blue-600/20" />
        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="relative pl-8"
          >
            <div className="absolute left-0 top-[6px] w-4 h-4 rounded-full bg-blue-600" />
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-gray-400">{edu.school}</p>
                <p className="text-sm text-gray-500">{edu.period}</p>
              </div>
              <p className="text-gray-300">{edu.description}</p>
              {edu.skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, skillIndex) => (
                    <SkillBadge key={skillIndex} skill={skill} />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Experience

