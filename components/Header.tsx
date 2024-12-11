'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { storeInfo } from '@/app/data/data'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: 'auto' }
  }

  return (
    <motion.header 
      className="bg-white dark:bg-gray-800 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-orange-500">
            {storeInfo.name}
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-orange-500 transition-colors duration-300">Home</Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-orange-500 transition-colors duration-300">About</Link>
            <Link href="/menu" className="text-gray-700 dark:text-gray-200 hover:text-orange-500 transition-colors duration-300">Menu</Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-orange-500 transition-colors duration-300">Contact</Link>
          </div>
          <div className="flex items-center">
            {mounted && (
              <motion.button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
            )}
            <motion.button 
              className="md:hidden ml-4" 
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden mt-4 space-y-2"
            >
              <Link href="/" className="block text-gray-700 dark:text-gray-200 hover:text-orange-500 transition-colors duration-300">Home</Link>
              <Link href="#about" className="block text-gray-700 dark:text-gray-200 hover:text-orange-500 transition-colors duration-300">About</Link>
              <Link href="#menu" className="block text-gray-700 dark:text-gray-200 hover:text-orange-500 transition-colors duration-300">Menu</Link>
              <Link href="#contact" className="block text-gray-700 dark:text-gray-200 hover:text-orange-500 transition-colors duration-300">Contact</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header

