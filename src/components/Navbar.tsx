'use client'

import Link from 'next/link'
import { useAuthStore } from '@/store/useAuthStore'
import { useState } from 'react'

export default function Navbar() {
  const { user, logout } = useAuthStore()
  const [showSearch, setShowSearch] = useState(false)

  return (
    <nav className="bg-black/95 border-b border-gray-900 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#4CAF50] flex items-center gap-2">
            <span className="bg-black text-[#4CAF50] px-2 py-1 border border-[#4CAF50]">
              CINEMA
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-white hover:text-[#4CAF50] transition-colors font-medium">
              Home
            </Link>
            <Link href="/movies" className="text-white hover:text-[#4CAF50] transition-colors font-medium">
              Movies
            </Link>
            <Link href="/series" className="text-white hover:text-[#8B5CF6] transition-colors font-medium">
              TV Series
            </Link>
            <Link href="/my-list" className="text-white hover:text-[#4CAF50] transition-colors font-medium flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              Watchlist
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search titles..."
                className="bg-[#131313] border border-gray-800 text-white px-4 py-2 rounded w-64 focus:outline-none focus:border-[#4CAF50] transition-colors"
              />
              <svg className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Auth Section */}
            {user ? (
              <>
                <span className="text-gray-400 text-sm">Hi, {user.name}</span>
                <button
                  onClick={() => logout()}
                  className="text-white hover:text-[#f5c518] transition-colors font-medium"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-white hover:text-[#f5c518] transition-colors font-medium"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="bg-[#131313] border border-gray-700 text-white px-4 py-2 rounded hover:border-[#4CAF50] transition-colors"
                >
                  Create Account
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

