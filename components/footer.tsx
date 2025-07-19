import { Camera } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/app-icon.png"
                  alt="PosePay"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold">PosePay</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Perfect poses every time with AI-powered pose detection and real-time alignment technology.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Camera className="w-4 h-4" />
              posepay.app
            </div>
          </div>

          {/* Company Info */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Features</li>
              <li>Use Cases</li>
              <li>Pricing</li>
              <li>Beta Program</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Join Waitlist</li>
              <li>Community</li>
              <li>Support</li>
              <li>Updates</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2025 PosePay. Perfect poses, every time.</p>
        </div>
      </div>
    </footer>
  )
}