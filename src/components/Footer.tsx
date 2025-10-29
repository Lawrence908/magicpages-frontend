import React from 'react'
import { Accessibility } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Yellow Block */}
          <div className="bg-magic-yellow p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-black mb-4">
              Ready to Create Magic?
            </h3>
            <p className="text-black/80 mb-6">
              Join thousands of families who have made bedtime magical with personalized storybooks.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-black/70">
              <span>✓ Free Shipping</span>
              <span>✓ 30-Day Guarantee</span>
              <span>✓ Made in USA</span>
            </div>
          </div>

          {/* Right Side - Child Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-80 bg-gradient-to-b from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-magic-gray">
                <div className="w-32 h-32 bg-magic-blue/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-16 h-16 bg-magic-blue/40 rounded-full"></div>
                </div>
                <p className="text-sm">Child reading their personalized book</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-magic-blue rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="font-bold text-magic-blue">MAGIC PAGES</span>
              </div>
              <p className="text-sm text-magic-light-gray">
                © 2025 Magic Pages Ltd. All rights reserved.
              </p>
            </div>
            
            {/* Accessibility Button */}
            <button className="flex items-center space-x-2 text-magic-gray hover:text-magic-blue transition-colors">
              <Accessibility className="w-5 h-5" />
              <span className="text-sm">Accessibility</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
