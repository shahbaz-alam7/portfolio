'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeIn, staggerContainer } from '../utils/animations'

const Projects = () => {
  const projects = [
    {
      title: 'Energyhire',
      description:
        'Energy Hire is the hiring platform for businesses across all areas of the energy industry, from traditional sectors to renewables.Built in Next.js, Typescript .Net, and PostgresSQL.',
      image: '/assets/energyhire.png?height=400&width=600',
      link: 'https://dev.energyhire.com/job-board',
    },
    {
      title: 'Tava Cloud',
      description:
        'A React-based application to create collections of data, build web hooks and backend tasks, and automatically generate your API documentation. Tava makes it easier than ever.',
      image: '/assets/tava_cloud.png',
      link: 'https://tava.cloud/',
    },
    {
      title: 'Tava Trip',
      description: 'A React-based application to book flight ticket and hotels with ease.',
      image: '/assets/tava_trip.png',
      link: 'https://www.tavatrip.com/',
    },
    {
      title: 'EHS Prints',
      description:
        'EHS PRINTS, help the users to make something new, help of the tools, discovering their creativity, make posters and lot more',
      image: '/assets/ehs_prints.png',
      link: 'https://ehsprints.com/',
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
                className="group relative h-[480px] overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm"
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
                    target="_blank"
                    className="inline-block bg-purple-600 text-center text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
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
