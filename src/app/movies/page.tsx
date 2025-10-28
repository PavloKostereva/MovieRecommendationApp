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
    poster: 'https://images.unsplash.com/photo-1535189043414-47a3c49a0bed?w=400',
    duration: '152 min',
  },
  {
    id: 2,
    title: 'Inception',
    year: 2010,
    genre: 'Sci-Fi',
    rating: 8.8,
    description: 'A thief enters people\'s dreams to steal their secrets.',
    poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400',
    duration: '148 min',
  },
  {
    id: 3,
    title: 'Pulp Fiction',
    year: 1994,
    genre: 'Crime',
    rating: 8.9,
    description: 'Interconnected stories of crime and redemption in Los Angeles.',
    poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400',
    duration: '154 min',
  },
  {
    id: 4,
    title: 'The Shawshank Redemption',
    year: 1994,
    genre: 'Drama',
    rating: 9.3,
    description: 'A man\'s journey through decades in Shawshank prison.',
    poster: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400',
    duration: '142 min',
  },
  {
    id: 5,
    title: 'Interstellar',
    year: 2014,
    genre: 'Sci-Fi',
    rating: 8.6,
    description: 'A team of explorers travel through a wormhole in space.',
    poster: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400',
    duration: '169 min',
  },
  {
    id: 6,
    title: 'Fight Club',
    year: 1999,
    genre: 'Drama',
    rating: 8.8,
    description: 'An insomniac office worker and a devil-may-care soapmaker.',
    poster: 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=400',
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
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Movies</h1>
          <p className="text-gray-400">Discover your next favorite movie</p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#131313] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-[#f5c518] transition-colors"
              />
              <svg className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="px-4 py-2.5 bg-[#131313] border border-gray-800 text-white focus:outline-none focus:border-[#f5c518] transition-colors"
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
              className="px-4 py-2.5 bg-[#131313] border border-gray-800 text-white focus:outline-none focus:border-[#f5c518] transition-colors"
            >
              {years.map(year => (
                <option key={year} value={year}>
                  {year === 'all' ? 'All Years' : year}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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

