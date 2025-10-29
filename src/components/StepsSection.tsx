import React from 'react'
import { ArrowRight } from 'lucide-react'

const StepsSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Personalize the Details",
      description: "Enter your child's name, family members' names, and even special memories to make the stories feel truly personal. Our system weaves these details into every tale, making bedtime a magical experience."
    },
    {
      number: "02", 
      title: "Choose Your Child's Adventure",
      description: "Select from our wide range of themes including dinosaurs, superheroes, enchanted castles, deep-sea adventures, and more. Each theme is carefully crafted to spark imagination and wonder."
    },
    {
      number: "03",
      title: "Let the Magic Happen", 
      description: "Our AI-powered system creates unique, personalized stories that incorporate your child's details and chosen themes. Every story is original and tailored specifically for your little one."
    },
    {
      number: "04",
      title: "Receive Your Hardcover Keepsake",
      description: "Get a beautifully printed, hardcover book delivered to your door. Each book is a treasured keepsake that will be cherished for years to come, creating lasting memories."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-magic-gray mb-6">
              Your Book In 4 Steps
            </h2>
            <p className="text-lg text-magic-light-gray leading-relaxed mb-8">
              Make bedtime magical with Magic Pages, your go-to destination for personalized children's bedtime story books! 
              Designed to capture your child's imagination, each book is custom-made based on the topics your little one loves the most. 
              Whether it's dinosaurs, superheroes, enchanted castles, or deep-sea adventures, these custom books are crafted to bring 
              your child's favorite themes to life in an engaging, educational, and unforgettable way.
            </p>
            <button className="btn-primary text-lg px-8 py-4">
              Start Your Book
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Content - Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-magic-blue text-white rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">{step.number}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-magic-blue mb-3">
                    {step.title}
                  </h3>
                  <p className="text-magic-light-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-8 mt-16 w-0.5 h-8 bg-magic-yellow"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StepsSection
