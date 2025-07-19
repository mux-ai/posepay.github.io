'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Smartphone, Download, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function PlatformSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Coming to{' '}
            <span className="text-gradient">Your Device</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PosePay will be available on both iOS and Android platforms, 
            bringing precision pose matching to your mobile workflow.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Platform Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-8 border border-orange-200/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Native Mobile Experience</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                    <Star className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">iOS App Store</h4>
                    <p className="text-gray-600">Optimized for iPhone cameras with advanced ARKit integration</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                    <Star className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Google Play Store</h4>
                    <p className="text-gray-600">Full Android support with advanced camera API utilization</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                    <Star className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cross-Platform Sync</h4>
                    <p className="text-gray-600">Your poses and settings sync across all your devices</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-6 text-center border border-blue-200/50">
                <div className="text-3xl font-bold text-blue-600 mb-2">iOS 15+</div>
                <div className="text-gray-600">Minimum Version</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-6 text-center border border-green-200/50">
                <div className="text-3xl font-bold text-green-600 mb-2">Android 8+</div>
                <div className="text-gray-600">Minimum Version</div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center lg:text-left"
          >
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Download className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold mb-4">Get Early Access</h3>
                <p className="text-orange-100 mb-6 text-lg">
                  Be among the first to experience perfect pose matching. 
                  Join our waitlist for exclusive early access.
                </p>
                
                <Button 
                  size="lg"
                  variant="secondary"
                  className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg rounded-full shadow-lg"
                  onClick={scrollToWaitlist}
                >
                  Join Waitlist Now
                  <Download className="ml-2 w-5 h-5" />
                </Button>
                
                <div className="mt-6 text-orange-200 text-sm">
                  ✓ Free during beta • ✓ No payment required • ✓ Instant updates
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}