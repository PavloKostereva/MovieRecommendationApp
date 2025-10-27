'use client'

import Link from 'next/link'
import { useAuthStore } from '@/store/useAuthStore'

export default function Navbar() {
  const { user, logout } = useAuthStore()

  return (
    <nav className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            Recommendation Hub
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/movies" className="text-gray-300 hover:text-white transition-colors">
              Movies
            </Link>
            <Link href="/books" className="text-gray-300 hover:text-white transition-colors">
              Books
            </Link>
            <Link href="/my-list" className="text-gray-300 hover:text-white transition-colors">
              My List
            </Link>
          </div>

          {/* Auth Section */}
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <span className="text-gray-300">Welcome, {user.name}</span>
                <button
                  onClick={() => logout()}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

