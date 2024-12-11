'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'
import { featuredProducts } from '@/app/data/data'

// Define a type for Product
interface Product {
  id: number
  name: string
  description: string
  price: string
  image: string
  nutrition?: {
    calories?: number
    protein?: string
    fat?: string
    carbs?: string
  }
}

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const openModal = (product: Product) => {
    setSelectedProduct(product)
  }

  const closeModal = () => {
    setSelectedProduct(null)
  }

  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-yellow-50 dark:from-green-900 dark:to-yellow-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Featured Refreshments
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product: Product, index) => (
            <motion.div
              key={product.id.toString()}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={product.image || '/images/placeholder-product.jpg'}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{product.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-500">{product.price}</span>
                  <motion.button
                    onClick={() => openModal(product)}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-2xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{selectedProduct.name}</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mb-4 md:mb-0">
                  <Image
                    src={selectedProduct.image || '/images/placeholder-product.jpg'}
                    alt={selectedProduct.name}
                    width={300}
                    height={300}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <div className="md:w-1/2 md:pl-4">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedProduct.description}</p>
                  <p className="text-xl font-bold text-orange-500 mb-4">{selectedProduct.price}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Nutrition Information</h4>
                    <p>Calories: {selectedProduct.nutrition?.calories || 'N/A'}</p>
                    <p>Protein: {selectedProduct.nutrition?.protein || 'N/A'}</p>
                    <p>Fat: {selectedProduct.nutrition?.fat || 'N/A'}</p>
                    <p>Carbs: {selectedProduct.nutrition?.carbs || 'N/A'}</p>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default FeaturedProducts
