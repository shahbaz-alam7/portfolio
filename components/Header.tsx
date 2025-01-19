'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from './theme-provider'
import { colors } from '../config/theme'
import { Home, FolderGit2, BookOpen, Github, FileText, Moon, Sun, Menu, X } from 'lucide-react'

const Header = () => {
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
    //setIsMenuOpen(false) //Removed as per update 4
  }

  const NavItems = () => (
    <>
      <button
        onClick={() => {
          scrollToSection('home')
          setIsMenuOpen(false)
        }}
        className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
      >
        <Home className="w-5 h-5" />
        <span>Home</span>
      </button>
      <button
        onClick={() => {
          scrollToSection('projects')
          setIsMenuOpen(false)
        }}
        className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
      >
        <FolderGit2 className="w-5 h-5" />
        <span>Projects</span>
      </button>
      <button
        onClick={() => {
          scrollToSection('experience')
          setIsMenuOpen(false)
        }}
        className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
      >
        <BookOpen className="w-5 h-5" />
        <span>Experience</span>
      </button>
      <Link
        href="https://github.com/shahbaz-alam7"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
      >
        <Github className="w-5 h-5" />
        <span>Github</span>
      </Link>
      <a
        href="/assets/MohdShahbazAlamResume.pdf"
        download
        className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
      >
        <FileText className="w-5 h-5" />
        <span>Resume</span>
      </a>
    </>
  )

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-16">
          <div className="hidden md:flex items-center space-x-8">
            <NavItems />
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <button
            onClick={() => {
              setTheme(theme === 'dark' ? 'light' : 'dark')
            }}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } transition-transform duration-300 ease-in-out bg-white dark:bg-gray-900`}
      >
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            <NavItems />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
