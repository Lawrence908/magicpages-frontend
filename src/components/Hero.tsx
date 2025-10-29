import React from 'react'
import { ArrowRight, Play } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="hero-gradient relative overflow-hidden min-h-[600px] flex items-center">
      {/* Decorative Stars */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="star-decoration top-20 left-20 text-4xl animate-twinkle">✦</div>
        <div className="star-decoration top-32 right-32 text-2xl animate-twinkle" style={{ animationDelay: '0.5s' }}>✦</div>
        <div className="star-decoration top-48 left-1/3 text-3xl animate-twinkle" style={{ animationDelay: '1s' }}>✦</div>
        <div className="star-decoration bottom-32 right-20 text-2xl animate-twinkle" style={{ animationDelay: '1.5s' }}>✦</div>
        <div className="star-decoration bottom-20 left-1/4 text-4xl animate-twinkle" style={{ animationDelay: '2s' }}>✦</div>
        <div className="star-decoration top-1/3 right-1/4 text-xl animate-twinkle" style={{ animationDelay: '0.8s' }}>✦</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Personalized Hardcover<br />
              Bedtime Storybooks
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-8 text-blue-100">
              Capture a child's favorite themes and family memories, weaving them seamlessly into every story to create a calming bedtime routine.
            </p>
            <button className="btn-secondary text-lg px-8 py-4">
              Start Your Book
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Content - Book Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Book Graphic */}
              <div className="relative w-80 h-96 bg-white rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                {/* Book Pages */}
                <div className="absolute inset-2 bg-gradient-to-b from-blue-50 to-blue-100 rounded-md">
                  <div className="p-6">
                    <div className="space-y-3">
                      <div className="h-2 bg-magic-blue rounded w-3/4"></div>
                      <div className="h-2 bg-magic-blue rounded w-1/2"></div>
                      <div className="h-2 bg-magic-blue rounded w-5/6"></div>
                      <div className="h-2 bg-magic-blue rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-magic-yellow rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-black ml-1" />
                  </button>
                </div>
              </div>

              {/* Magic Pages Text */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="text-white text-2xl font-bold tracking-wider">
                  MAGIC PAGES
                </div>
              </div>

              {/* Cloud Decoration */}
              <div className="absolute -bottom-4 left-0 right-0 h-8 bg-white opacity-20 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
