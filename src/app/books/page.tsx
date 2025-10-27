'use client'

import { useState } from 'react'
import BookCard from '@/components/BookCard'
import { Book } from '@/types/book'

const books: Book[] = [
  {
    id: 1,
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian Fiction',
    rating: 9.3,
    description: 'A dystopian novel about totalitarian surveillance and thought control.',
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
    description: 'A story of racial inequality and moral growth in the American South.',
    year: 1960,
    pages: 281,
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    rating: 8.9,
    description: 'A romantic novel about Elizabeth Bennet and Mr. Darcy.',
    year: 1813,
    pages: 432,
  },
  {
    id: 5,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Coming-of-Age',
    rating: 8.5,
    description: 'The story of Holden Caulfield\'s mental breakdown.',
    year: 1951,
    pages: 214,
  },
  {
    id: 6,
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    genre: 'Dystopian Fiction',
    rating: 8.6,
    description: 'A dystopian novel about censorship and book burning.',
    year: 1953,
    pages: 256,
  },
]

export default function BooksPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState<string>('all')

  const genres = ['all', 'Dystopian Fiction', 'Classic Fiction', 'Romance', 'Coming-of-Age']

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesGenre = selectedGenre === 'all' || book.genre === selectedGenre
    return matchesSearch && matchesGenre
  })

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Books
          </h1>
          <p className="text-gray-300 text-lg">Explore your next great read</p>
        </div>

        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {genres.map(genre => (
              <option key={genre} value={genre}>
                {genre === 'all' ? 'All Genres' : genre}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No books found. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}

