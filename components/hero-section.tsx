'use client'

import { motion } from 'framer-motion'
import { Camera, Play, ArrowDown } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-orange-100/50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium"
            >
              <Camera className="w-4 h-4" />
              Perfect Poses, Every Time
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Never Guess Your{' '}
              <span className="text-gradient">Pose</span>{' '}
              Again
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Ever tried to recreate a photo pose and spent 20 takes getting it 'close enough'? We built PosePay so creators, fitness coaches, and social teams can match poses accurately in real time—no guessing.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={scrollToWaitlist}
              >
                Join Waitlist
                <ArrowDown className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-orange-300 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg rounded-full"
                onClick={scrollToWaitlist}
              >
                <Play className="mr-2 w-5 h-5" />
                See How It Works
              </Button>
            </motion.div>

            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-8 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">20x</div>
                <div className="text-sm text-gray-500">Faster Setup</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">99%</div>
                <div className="text-sm text-gray-500">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">0</div>
                <div className="text-sm text-gray-500">Wasted Takes</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - App Icon */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main App Icon */}
              <motion.div 
                className="relative z-10 bg-white rounded-3xl shadow-2xl p-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <Image
                    src="/app-icon.png"
                    alt="PosePay Bear Mascot"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <Camera className="w-6 h-6" />
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 -left-4 bg-white border-2 border-orange-300 p-3 rounded-full shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                <Play className="w-6 h-6 text-orange-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={scrollToWaitlist}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-orange-600"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}