'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeIn, staggerContainer } from '../utils/animations'

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution built with Next.js, Node.js, and MongoDB.',
      image: '/placeholder.svg?height=400&width=600',
      link: '#',
    },
    {
      title: 'Task Management App',
      description: 'A React-based task management application with Redux for state management.',
      image: '/placeholder.svg?height=400&width=600',
      link: '#',
    },
    {
      title: 'Real-time Chat Application',
      description: 'A real-time chat app built with React, Node.js, and Socket.io.',
      image: '/placeholder.svg?height=400&width=600',
      link: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeIn} className="text-5xl font-bold text-center mb-16">
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-block bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
