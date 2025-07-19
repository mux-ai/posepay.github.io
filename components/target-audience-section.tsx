'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Dumbbell, Camera } from 'lucide-react'

const audiences = [
  {
    icon: Camera,
    title: 'Content Creators',
    description: 'Nail that perfect Instagram pose or TikTok dance move every single time.',
    benefits: ['Consistent content quality', 'Faster content creation', 'Professional-looking posts'],
    color: 'from-pink-400 to-orange-400',
  },
  {
    icon: Dumbbell,
    title: 'Fitness Coaches',
    description: 'Help clients master proper form and document their fitness journey accurately.',
    benefits: ['Precise form checking', 'Progress documentation', 'Client engagement'],
    color: 'from-orange-400 to-red-400',
  },
  {
    icon: Users,
    title: 'Social Teams',
    description: 'Create cohesive brand content with consistent poses across team members.',
    benefits: ['Brand consistency', 'Team collaboration', 'Professional results'],
    color: 'from-orange-400 to-yellow-400',
  },
]

export function TargetAudienceSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100/30" ref={ref}>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for{' '}
            <span className="text-gradient">Professionals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're creating content, training clients, or building brand consistency, 
            PosePay adapts to your workflow.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-orange-200/50">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${audience.color} mb-6 flex items-center justify-center shadow-lg`}>
                  <audience.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {audience.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {audience.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  {audience.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mt-16 text-center"
        >
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-4xl font-bold text-orange-500 mb-2">500K+</div>
            <div className="text-gray-600">Photos Perfected</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-4xl font-bold text-orange-500 mb-2">95%</div>
            <div className="text-gray-600">Time Saved</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-4xl font-bold text-orange-500 mb-2">4.9★</div>
            <div className="text-gray-600">User Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}