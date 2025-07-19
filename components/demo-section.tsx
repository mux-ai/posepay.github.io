'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, Video } from 'lucide-react'

export function DemoSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-white to-orange-50/30" ref={ref}>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Video className="w-4 h-4" />
            Live Demo
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See PosePay in{' '}
            <span className="text-gradient">Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how PosePay transforms the way you take photos. Real-time pose matching, 
            automatic capture, and perfect alignment - all in one seamless experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Video Container with Shadow and Border */}
          <div className="relative bg-white rounded-2xl shadow-2xl border border-orange-200/50 overflow-hidden">
            {/* Decorative Header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-12 flex items-center justify-center relative">
              <div className="flex items-center gap-2 text-white">
                <Play className="w-5 h-5" />
                <span className="font-medium">PosePay Demo</span>
              </div>
              {/* Decorative Dots */}
              <div className="absolute left-4 flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>

            {/* Video Embed */}
            <div className="relative bg-black">
              <div style={{position: 'relative', width: '100%', height: '0px', paddingBottom: '56.250%'}}>
                <iframe 
                  allow="fullscreen" 
                  allowFullScreen 
                  height="100%" 
                  src="https://streamable.com/e/i5r3m8?nocontrols=1" 
                  width="100%" 
                  style={{
                    border: 'none', 
                    width: '100%', 
                    height: '100%', 
                    position: 'absolute', 
                    left: '0px', 
                    top: '0px', 
                    overflow: 'hidden'
                  }}
                  title="PosePay Demo Video"
                />
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div 
            className="absolute -top-4 -right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg hidden md:block"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Play className="w-6 h-6" />
          </motion.div>

          <motion.div 
            className="absolute -bottom-4 -left-4 bg-white border-2 border-orange-300 p-3 rounded-full shadow-lg hidden md:block"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <Video className="w-6 h-6 text-orange-500" />
          </motion.div>
        </motion.div>

        {/* Call to Action Below Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to revolutionize your photo-taking experience?
          </p>
          <motion.button
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Early Access
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}