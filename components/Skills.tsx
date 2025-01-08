'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '../utils/animations'
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, 
  SiMongodb, SiPostgresql, SiHtml5, SiCss3,
  SiTailwindcss, SiRedux, SiGit, 
  SiVisualstudio, SiPostman, SiJira,
} from 'react-icons/si'
import { DiVisualstudio } from "react-icons/di";

const SkillCard = ({ icon: Icon, name }: { icon: any, name: string }) => (
  <motion.div 
    variants={fadeIn}
    className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-colors"
  >
    <Icon className="w-12 h-12 mb-4 text-purple-500" />
    <span className="text-sm font-medium">{name}</span>
  </motion.div>
)

const Skills = () => {
  const technologies = [
    { icon: SiReact, name: 'React' },
    { icon: SiNextdotjs, name: 'Next.js' },
    { icon: SiNodedotjs, name: 'Node.js' },
    { icon: SiExpress, name: 'Express.js' },
    { icon: SiMongodb, name: 'MongoDB' },
    { icon: SiPostgresql, name: 'PostgreSQL' },
    { icon: SiHtml5, name: 'HTML5' },
    { icon: SiCss3, name: 'CSS3' },
    { icon: SiTailwindcss, name: 'Tailwind' },
    { icon: SiRedux, name: 'Redux' }
  ]

  const tools = [
    { icon: SiGit, name: 'Git' },
    { icon: DiVisualstudio, name: 'VS Code' },
    { icon: SiPostman, name: 'Postman' },
    { icon: SiJira, name: 'Jira' }
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-16"
        >
          <div>
            <motion.h2 
              variants={fadeIn}
              className="text-3xl font-bold text-center mb-4"
            >
              Technologies
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {technologies.map((tech, index) => (
                <SkillCard key={index} {...tech} />
              ))}
            </div>
          </div>

          <div>
            <motion.h2 
              variants={fadeIn}
              className="text-3xl font-bold text-center mb-4"
            >
              Tools
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              {tools.map((tool, index) => (
                <SkillCard key={index} {...tool} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

