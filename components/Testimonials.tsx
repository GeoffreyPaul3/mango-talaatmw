'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { testimonials } from '@/app/data/data'


const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          What Our Customers Say
        </motion.h2>
        <div className="relative h-[400px] max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-full flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    width={300}
                    height={300}
                    className="rounded-lg object-cover w-full h-[300px]"
                  />
                </div>
                <div className="md:w-1/2 md:pl-6 flex flex-col justify-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg italic">&quot;{testimonials[currentTestimonial].comment}&quot;</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{testimonials[currentTestimonial].name}</h3>
                      <p className="text-gray-500 dark:text-gray-400">{testimonials[currentTestimonial].location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-2 transition-colors duration-300 ${
                currentTestimonial === index ? 'bg-orange-500' : 'bg-gray-300 dark:bg-gray-600'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

