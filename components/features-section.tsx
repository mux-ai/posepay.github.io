'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Zap, Lightbulb, Eye } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Live Overlay Alignment',
    description: 'See your reference pose overlaid on your camera in real-time. Line up perfectly without guessing.',
    color: 'from-orange-400 to-red-400',
  },
  {
    icon: Zap,
    title: 'Auto Snap Technology',
    description: 'Automatic capture when your pose matches the threshold. No more missed shots or awkward timers.',
    color: 'from-orange-400 to-yellow-400',
  },
  {
    icon: Lightbulb,
    title: 'Smart Lighting Hints',
    description: 'Get real-time lighting suggestions before you shoot. Perfect exposure every time.',
    color: 'from-yellow-400 to-orange-400',
  },
  {
    icon: Eye,
    title: 'Blink Detection',
    description: 'Eye-open and blink detection prevents wasted takes. Only captures when your eyes are open.',
    color: 'from-orange-400 to-pink-400',
  },
]

export function FeaturesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="features" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for{' '}
            <span className="text-gradient">Perfect Poses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered technology makes pose matching effortless and accurate, 
            saving you time and frustration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-8 h-full border border-orange-200/50 hover:border-orange-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                {/* Icon Container */}
                <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} mb-6 flex items-center justify-center shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-2xl p-8 border border-orange-200/50"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Why Waste Time on Guesswork?
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Traditional photo shoots involve endless retakes and frustration. 
            PosePay eliminates the guesswork with precise AI technology that ensures 
            you get the perfect shot every time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}