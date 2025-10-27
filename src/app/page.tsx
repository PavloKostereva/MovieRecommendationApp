'use client'

import { useState } from 'react'
import { useAuthStore } from '@/store/useAuthStore'
import MovieCard from '@/components/MovieCard'
import BookCard from '@/components/BookCard'
import { Movie } from '@/types/movie'
import { Book } from '@/types/book'

const sampleMovies: Movie[] = [
  {
    id: 1,
    title: 'The Dark Knight',
    year: 2008,
    genre: 'Action',
    rating: 9.0,
    description: 'Batman faces the Joker in a battle for Gotham\'s soul.',
    poster: '/api/placeholder/300/450',
    duration: '152 min',
  },
  {
    id: 2,
    title: 'Inception',
    year: 2010,
    genre: 'Sci-Fi',
    rating: 8.8,
    description: 'A thief enters people\'s dreams to steal their secrets.',
    poster: '/api/placeholder/300/450',
    duration: '148 min',
  },
  {
    id: 3,
    title: 'Interstellar',
    year: 2014,
    genre: 'Sci-Fi',
    rating: 8.6,
    description: 'A team of explorers travel through a wormhole in space.',
    poster: '/api/placeholder/300/450',
    duration: '169 min',
  },
]

const sampleBooks: Book[] = [
  {
    id: 1,
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian Fiction',
    rating: 9.3,
    description: 'A dystopian novel about totalitarian surveillance.',
    year: 1949,
    pages: 328,
  },
  {
    id: 2,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classic Fiction',
    rating: 8.7,
    description: 'A tale of decadence and excess in Jazz Age America.',
    year: 1925,
    pages: 180,
  },
  {
    id: 3,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Classic Fiction',
    rating: 9.1,
    description: 'A story of racial inequality and moral growth in the South.',
    year: 1960,
    pages: 281,
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState<'movies' | 'books'>('movies')
  const { user } = useAuthStore()

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            Welcome to Recommendation Hub
          </h1>
          <p className="text-gray-300 text-lg">
            {user ? `Welcome back, ${user.name}!` : 'Discover your next favorite movie or book'}
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
            🎬 Movies
          </button>
          <button
            onClick={() => setActiveTab('books')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'books'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            📚 Books
          </button>
        </div>

        {/* Content Grid */}
        {activeTab === 'movies' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sampleMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sampleBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

