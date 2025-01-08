'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeIn, slideIn } from '../utils/animations'

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
      <div className="container mx-auto px-6 pt-40 pb-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <motion.h1 className="text-5xl md:text-7xl font-bold mb-6" variants={slideIn}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Software Developer
              </span>
            </motion.h1>
            <motion.p className="text-xl mb-8 text-gray-300" variants={fadeIn}>
              Crafting digital experiences with modern web technologies
            </motion.p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.a
                href="#contact"
                className="inline-block bg-purple-600 text-white py-3 px-8 rounded-full font-bold hover:bg-purple-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 flex justify-center items-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse" />
              <Image
                src="/assets/image.jpg"
                alt="Profile Picture"
                width={400}
                height={400}
                className="rounded-full relative z-10 object-cover p-1.5"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
