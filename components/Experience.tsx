'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
      title: 'Software Development Engineer 1',
      company: 'Innostax Software Labs Pvt LTD',
      period: 'Feb 2023 - Present · 2 years',
      logo: 'innostax_logo.jfif',
      location: 'Gurugram, Haryana - On site',
      description:
        'Responsible for the development of Tava Cloud, a software based on React, Node Js, Express Js and MySQL. Optimization of database queries and performance. Implementation of new features focusing on user-friendliness. Application of best practices in software development and code optimization.',
      skills: ['React JS', 'Node JS', 'Express JS', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Web Developer-Intern',
      company: 'Dichroic Labs LLP',
      period: 'Sept 2022 - Jan 2023 · 4 months',
      logo: 'dichroic_labs.png',
      location: 'Remote - Bangalore, India',
      description:
        'Development of responsive websites (HTML, CSS, Bootstrap, Node Js, Mongo DB). Customizations and made responsive. Close collaboration with clients to implement tailored solutions.',
      skills: ['React JS', 'HTML', 'CSS', 'Bootstrap', 'Node JS', 'Mongo Db'],
    },
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
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-8">
              Experience
            </motion.h2>
            <div className="relative space-y-8">
              <div className="absolute left-[7px] top-[6px] bottom-6 w-[2px] bg-blue-600/20" />
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={fadeIn} className="relative pl-8">
                  <div className="absolute left-0 top-[6px] w-4 h-4 rounded-full bg-blue-600" />
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 space-y-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <Image
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-full"
                          src={`/assets/${exp.logo}`}
                          alt="logo"
                        />
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                      </div>
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
      degree: 'Bachelors in Computer Application',
      school: 'GRD group of Colleges, Ropar',
      period: 'Aug 2019 - May 2022',
      percentage: '8.86 CGPA',
      description:
        'Dual education: Theory and practice in Full Stack Development. Focus on modern web technologies and agile software development practices.',
      skills: [],
    },
    {
      degree: 'Intermediate (10 + 2)',
      school: "St Paul's College, Moradabad",
      period: 'June 2017 - May 2019',
      percentage: '72.2%',
      description:
        'French state diploma focusing on network administration, IT security, and web development. Preparation for CISCO certifications (CCNA1 to CCNA4).',
      skills: [],
    },
    {
      degree: 'High School (10)',
      school: 'OFPPT Ouarzazate',
      percentage: '82.3%',
      period: 'June 2016 - May 2017',
      description: 'Comprehensive training in computer development fundamentals and techniques.',
      skills: [],
    },
  ]

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-8">
        Education
      </motion.h2>
      <div className="relative space-y-8">
        <div className="absolute left-[7px] top-[6px] bottom-6 w-[2px] bg-blue-600/20" />
        {education.map((edu, index) => (
          <motion.div key={index} variants={fadeIn} className="relative pl-8">
            <div className="absolute left-0 top-[6px] w-4 h-4 rounded-full bg-blue-600" />
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <div className="flex items-center gap-5">
                  <p className="text-gray-400">{edu.school}</p>
                  <p className="text-gray-400">-{edu.percentage}</p>
                </div>
                <p className="text-sm text-gray-500">{edu.period}</p>
              </div>
              {/* <p className="text-gray-300">{edu.description}</p> */}
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
