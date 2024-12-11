import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { storeInfo } from '@/app/data/data'

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">{storeInfo.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{storeInfo.address}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{storeInfo.phone}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{storeInfo.email}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500">Home</Link></li>
              <li><Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500">About</Link></li>
              <li><Link href="/menu" className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500">Menu</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Opening Hours</h4>
            <ul className="space-y-2">
              {Object.entries(storeInfo.hours).map(([day, hours]) => (
                <li key={day} className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="capitalize">{day}:</span> {hours}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href={storeInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">
                <Facebook size={24} />
              </a>
              <a href={storeInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">
                <Instagram size={24} />
              </a>
              <a href={storeInfo.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} {storeInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

