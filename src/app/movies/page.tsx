'use client'

import { useState } from 'react'
import MovieCard from '@/components/MovieCard'
import { Movie } from '@/types/movie'

const movies: Movie[] = [
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
    title: 'Pulp Fiction',
    year: 1994,
    genre: 'Crime',
    rating: 8.9,
    description: 'Interconnected stories of crime and redemption in Los Angeles.',
    poster: '/api/placeholder/300/450',
    duration: '154 min',
  },
  {
    id: 4,
    title: 'The Shawshank Redemption',
    year: 1994,
    genre: 'Drama',
    rating: 9.3,
    description: 'A man\'s journey through decades in Shawshank prison.',
    poster: '/api/placeholder/300/450',
    duration: '142 min',
  },
  {
    id: 5,
    title: 'Interstellar',
    year: 2014,
    genre: 'Sci-Fi',
    rating: 8.6,
    description: 'A team of explorers travel through a wormhole in space.',
    poster: '/api/placeholder/300/450',
    duration: '169 min',
  },
  {
    id: 6,
    title: 'Fight Club',
    year: 1999,
    genre: 'Drama',
    rating: 8.8,
    description: 'An insomniac office worker and a devil-may-care soapmaker.',
    poster: '/api/placeholder/300/450',
    duration: '139 min',
  },
]

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState<string>('all')
  const [selectedYear, setSelectedYear] = useState<string>('all')

  const genres = ['all', 'Action', 'Sci-Fi', 'Crime', 'Drama']
  const years = ['all', '1994', '1999', '2008', '2010', '2014']

  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         movie.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesGenre = selectedGenre === 'all' || movie.genre === selectedGenre
    const matchesYear = selectedYear === 'all' || movie.year.toString() === selectedYear
    return matchesSearch && matchesGenre && matchesYear
  })

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            Movies
          </h1>
          <p className="text-gray-300 text-lg">Discover your next favorite movie</p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="flex gap-4 flex-wrap">
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>
                  {genre === 'all' ? 'All Genres' : genre}
                </option>
              ))}
            </select>

            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {years.map(year => (
                <option key={year} value={year}>
                  {year === 'all' ? 'All Years' : year}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No movies found. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}

