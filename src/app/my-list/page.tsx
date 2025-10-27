'use client'

import { useEffect, useState } from 'react'
import { useAuthStore } from '@/store/useAuthStore'
import { useListStore } from '@/store/useListStore'
import MovieCard from '@/components/MovieCard'
import BookCard from '@/components/BookCard'
import { Movie } from '@/types/movie'
import { Book } from '@/types/book'

export default function MyListPage() {
  const { user } = useAuthStore()
  const { myList } = useListStore()
  const [activeTab, setActiveTab] = useState<'movies' | 'books'>('movies')

  const myMovies = [] as Movie[]
  const myBooks = [] as Book[]

  if (!user) {
    return (
      <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Please Login</h2>
          <p className="text-gray-400 mb-8">You need to be logged in to view your list</p>
          <a
            href="/login"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors"
          >
            Go to Login
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            My List
          </h1>
          <p className="text-gray-300 text-lg">
            Your saved movies and books
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 gap-4">
          <button
            onClick={() => setActiveTab('movies')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'movies'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            🎬 Movies ({myMovies.length})
          </button>
          <button
            onClick={() => setActiveTab('books')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'books'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            📚 Books ({myBooks.length})
          </button>
        </div>

        {/* Content */}
        {activeTab === 'movies' ? (
          myMovies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {myMovies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No movies in your list yet</p>
            </div>
          )
        ) : (
          myBooks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {myBooks.map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No books in your list yet</p>
            </div>
          )
        )}
      </div>
    </div>
  )
}

