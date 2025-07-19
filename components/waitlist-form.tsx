'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, User, CheckCircle, Loader } from 'lucide-react'

interface FormData {
  name: string
  email: string
}

export function WaitlistForm() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.email || !formData.name) {
      alert('Please fill in both your name and email address.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/mjkogvgn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: 'New PosePay Waitlist Signup',
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error('Failed to join waitlist')
      }
    } catch (error) {
      console.error('Waitlist signup error:', error)
      alert('Signup failed. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl p-8 shadow-xl border border-orange-200"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-8 h-8 text-green-600" />
          </motion.div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            You're on the list!
          </h3>
          <p className="text-gray-600 mb-6">
            Thank you for joining the PosePay waitlist. We'll send you updates 
            and let you know as soon as the app is ready.
          </p>
          
          <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
            <p className="text-orange-700 text-sm">
              <strong>What's next?</strong> Look out for our emails with exclusive updates, 
              beta testing opportunities, and your early access link.
            </p>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-8 shadow-xl border border-orange-200"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Get Early Access
          </h3>
          <p className="text-gray-600">
            Join thousands of creators waiting for PosePay
          </p>
        </div>

        {/* Name Field */}
        <div className="relative">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleInputChange('name')}
              className="pl-10 h-12 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="relative">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleInputChange('email')}
              className="pl-10 h-12 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting || !formData.email || !formData.name}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {isSubmitting ? (
            <>
              <Loader className="mr-2 w-5 h-5 animate-spin" />
              Joining Waitlist...
            </>
          ) : (
            <>
              Join Waitlist
              <Mail className="ml-2 w-5 h-5" />
            </>
          )}
        </Button>

        {/* Privacy Notice */}
        <p className="text-xs text-gray-500 text-center">
          We respect your privacy. No spam, just updates about PosePay.
        </p>
      </form>
    </motion.div>
  )
}