import React from 'react'
import { User, ShoppingCart, Search, ArrowRight } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-magic-blue rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-4 h-4 bg-magic-blue rounded-sm"></div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-magic-yellow rounded-full"></div>
                </div>
              </div>
              <div className="text-magic-blue font-bold text-lg">
                <div className="leading-tight">MAGIC</div>
                <div className="leading-tight">PAGES</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-magic-gray hover:text-magic-blue transition-colors">
              How It Works
            </a>
            <a href="#gift-card" className="text-magic-gray hover:text-magic-blue transition-colors">
              Gift Card
            </a>
            <a href="#testimonials" className="text-magic-gray hover:text-magic-blue transition-colors">
              Testimonials
            </a>
            <a href="#gallery" className="text-magic-gray hover:text-magic-blue transition-colors">
              Gallery
            </a>
            <a href="#faqs" className="text-magic-gray hover:text-magic-blue transition-colors">
              FAQs
            </a>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-magic-gray hover:text-magic-blue transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 text-magic-gray hover:text-magic-blue transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button className="p-2 text-magic-gray hover:text-magic-blue transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="btn-primary">
              Start Your Book
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
