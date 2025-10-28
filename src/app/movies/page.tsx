'use client'

import { useState, useEffect } from 'react'
import MovieCardEnhanced from '@/components/MovieCardEnhanced'
import { getPopularMovies, searchMovies } from '@/lib/tmdb'

export default function MoviesPage() {
  const [movies, setMovies] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadMovies()
  }, [])

  const loadMovies = async () => {
    setLoading(true)
    try {
      const data = await getPopularMovies()
      setMovies(data)
    } catch (error) {
      console.error('Error loading movies:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) {
      loadMovies()
      return
    }

    setLoading(true)
    try {
      const results = await searchMovies(searchQuery)
      setMovies(results)
    } catch (error) {
      console.error('Error searching movies:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Movies</h1>
          <p className="text-gray-400">Discover your next favorite movie</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#131313] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-[#4CAF50] transition-colors"
              />
              <svg className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <button
              type="submit"
              className="px-6 py-2.5 bg-[#4CAF50] text-white font-semibold hover:bg-green-500 transition-colors"
            >
              Search
            </button>

            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('')
                  loadMovies()
                }}
                className="px-4 py-2.5 bg-[#1a1a1a] border border-gray-700 text-white hover:border-gray-600 transition-colors"
              >
                Clear
              </button>
            )}
          </form>
        </div>

        {/* Results */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#4CAF50]"></div>
              <p className="text-gray-400 mt-4">Loading movies...</p>
            </div>
          </div>
        ) : movies.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {movies.map(movie => (
              <MovieCardEnhanced key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No movies found. Try a different search.</p>
          </div>
        )}
      </div>
    </div>
  )
}
