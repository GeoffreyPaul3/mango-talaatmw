'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { BananaIcon as Fruit, Carrot, Apple, CitrusIcon as Lemon, Banana } from 'lucide-react'

const fruitIcons = [Fruit, Carrot, Apple, Lemon, Banana]

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const bubbleControls = useAnimation()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    bubbleControls.start({
      x: mousePosition.x,
      y: mousePosition.y,
      transition: { type: 'spring', damping: 3 }
    })
  }, [mousePosition, bubbleControls])

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-orange-400 to-yellow-200 dark:from-orange-700 dark:to-yellow-900">
      {/* Animated fruit background */}
      {[...Array(20)].map((_, i) => {
        const Icon = fruitIcons[i % fruitIcons.length]
        return (
          <motion.div
            key={i}
            className="absolute text-white/20 dark:text-gray-700/20"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: -50,
              rotate: 0,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: window.innerHeight + 50,
              rotate: 360,
              transition: {
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                ease: 'linear'
              }
            }}
          >
            <Icon size={48} />
          </motion.div>
        )
      })}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg"
        >
          Refresh Your Day
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 text-white max-w-2xl drop-shadow"
        >
          Indulge in nature&apos;s finest blends at Mango Taalat. Experience the burst of flavors in every sip!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="#menu">
            <motion.span
              className="bg-white text-orange-500 hover:bg-orange-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-block cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Menu
            </motion.span>
          </Link>
        </motion.div>
      </div>

      {/* Animated juice splash */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <motion.path 
          fill="#FFA500" 
          fillOpacity="0.8"
          initial={{ d: "M0,320L1440,320L1440,320L0,320Z" }}
          animate={{ 
            d: [
              "M0,320L1440,320L1440,320L0,320Z",
              "M0,320L1440,320L1440,280L0,320Z",
              "M0,320L1440,320L1440,300L0,280Z",
              "M0,320L1440,320L1440,320L0,320Z"
            ]
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut"
          }}
        />
      </svg>

      {/* Interactive bubble */}
      <motion.div
        className="absolute w-20 h-20 rounded-full bg-white/30 backdrop-blur-md"
        style={{ left: -40, top: -40 }}
        animate={bubbleControls}
      />
    </section>
  )
}

export default Hero

