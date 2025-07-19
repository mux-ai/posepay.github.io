'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { WaitlistForm } from '@/components/waitlist-form'
import { Mail, Users, Zap } from 'lucide-react'

export function WaitlistSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-orange-50 via-orange-100/30 to-white" ref={ref}>
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the{' '}
            <span className="text-gradient">PosePay</span>{' '}
            Waitlist
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Be the first to experience perfect pose matching. Get exclusive early access 
            and special launch pricing when we go live.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              What You'll Get:
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Early Access</h4>
                  <p className="text-gray-600">Get the app before public launch and help shape its development</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Exclusive Community</h4>
                  <p className="text-gray-600">Join a community of creators, coaches, and professionals</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Launch Updates</h4>
                  <p className="text-gray-600">Get notified the moment PosePay becomes available</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-100 rounded-xl p-6 mt-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="font-semibold text-orange-800">100% Free</span>
              </div>
              <p className="text-orange-700 text-sm">
                No payment required. Just your email to keep you updated on our progress.
              </p>
            </div>
          </motion.div>

          {/* Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <WaitlistForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}