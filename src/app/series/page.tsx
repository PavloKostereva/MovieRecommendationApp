'use client'

import { useState } from 'react'
import SeriesCard from '@/components/SeriesCard'
import { Series } from '@/types/series'

const series: Series[] = [
  {
    id: 1,
    title: 'Stranger Things',
    season: 4,
    episodes: 34,
    genre: 'Sci-Fi Horror',
    rating: 8.7,
    description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments and supernatural forces.',
    year: 2016,
    poster: 'https://images.unsplash.com/photo-1536090833402-c822014512a8?w=400',
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Breaking Bad',
    season: 5,
    episodes: 62,
    genre: 'Crime Drama',
    rating: 9.5,
    description: 'A high school chemistry teacher turned methamphetamine manufacturer partners with a former student.',
    year: 2008,
    poster: 'https://images.unsplash.com/photo-1611117775350-ac3950990985?w=400',
    status: 'Completed',
  },
  {
    id: 3,
    title: 'Game of Thrones',
    season: 8,
    episodes: 73,
    genre: 'Fantasy Drama',
    rating: 9.2,
    description: 'Noble families fight for control of the mythical land of Westeros.',
    year: 2011,
    poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400',
    status: 'Completed',
  },
  {
    id: 4,
    title: 'The Crown',
    season: 6,
    episodes: 60,
    genre: 'Historical Drama',
    rating: 8.7,
    description: 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign.',
    year: 2016,
    poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400',
    status: 'Completed',
  },
  {
    id: 5,
    title: 'The Witcher',
    season: 3,
    episodes: 24,
    genre: 'Fantasy Adventure',
    rating: 8.2,
    description: 'A monster hunter fights for survival in a world where monsters are a common menace.',
    year: 2019,
    poster: 'https://images.unsplash.com/photo-1535189043414-47a3c49a0bed?w=400',
    status: 'Ongoing',
  },
  {
    id: 6,
    title: 'Money Heist',
    season: 5,
    episodes: 41,
    genre: 'Crime Thriller',
    rating: 8.2,
    description: 'A criminal mastermind who goes by "The Professor" plans the biggest heist in Spanish history.',
    year: 2017,
    poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400',
    status: 'Completed',
  },
]

export default function SeriesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState<string>('all')

  const genres = ['all', 'Sci-Fi Horror', 'Crime Drama', 'Fantasy Drama', 'Historical Drama', 'Fantasy Adventure', 'Crime Thriller']

  const filteredSeries = series.filter(show => {
    const matchesSearch = show.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         show.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesGenre = selectedGenre === 'all' || show.genre === selectedGenre
    return matchesSearch && matchesGenre
  })

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">TV Series</h1>
          <p className="text-gray-400">Explore binge-worthy shows</p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search series..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#131313] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-[#8B5CF6] transition-colors"
              />
              <svg className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="px-4 py-2.5 bg-[#131313] border border-gray-800 text-white focus:outline-none focus:border-[#8B5CF6] transition-colors"
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>
                  {genre === 'all' ? 'All Genres' : genre}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredSeries.map(show => (
            <SeriesCard key={show.id} series={show} />
          ))}
        </div>

        {filteredSeries.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No series found. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}

