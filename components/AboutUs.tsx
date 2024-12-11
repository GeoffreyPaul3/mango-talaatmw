'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Our Juicy Story
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <Image
              src="/images/pic9.jpg"
              alt="Fresh fruits and smoothie preparation"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2 md:pl-8"
          >
            <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
              Mango Taalat Mw was born out of a passion for bringing the vibrant flavors of Malawi to life through our delicious juices and smoothies. Nestled in the heart of Blantyre, we&apos;re proud to be a local favorite and a must-visit destination for tourists seeking authentic Malawian refreshments.
            </p>
            <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
              Our commitment to using only the finest, locally-sourced ingredients ensures that every sip is a burst of natural flavor and goodness. From classic Malawian fruits to innovative superfood blends, we offer a wide variety of options to suit every taste and dietary need.
            </p>
            <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
              At Mango Taalat Mw, we&apos;re not just serving drinks – we&lsquo;re serving a slice of Malawian culture. Our recipes are inspired by traditional flavors and modern nutrition science, creating a perfect blend of taste and health.
            </p>
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Come experience the difference that fresh, quality ingredients make. Your taste buds and your body will thank you!
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs

