'use client'

import { useState } from 'react'
import { useAuthStore } from '@/store/useAuthStore'
import MovieCard from '@/components/MovieCard'
import SeriesCard from '@/components/SeriesCard'
import { Movie } from '@/types/movie'
import { Series } from '@/types/series'

const sampleMovies: Movie[] = [
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
    title: 'Interstellar',
    year: 2014,
    genre: 'Sci-Fi',
    rating: 8.6,
    description: 'A team of explorers travel through a wormhole in space.',
    poster: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400',
    duration: '169 min',
  },
]

const sampleSeries: Series[] = [
  {
    id: 1,
    title: 'Stranger Things',
    season: 4,
    episodes: 34,
    genre: 'Sci-Fi Horror',
    rating: 8.7,
    description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments.',
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
    description: 'A high school chemistry teacher turned methamphetamine manufacturer.',
    year: 2008,
    poster: 'https://images.unsplash.com/photo-1611117775350-ac3950990985?w=400',
    status: 'Completed',
  },
  {
    id: 3,
    title: 'The Witcher',
    season: 3,
    episodes: 24,
    genre: 'Fantasy Adventure',
    rating: 8.2,
    description: 'A monster hunter fights for survival in a world where monsters are common.',
    year: 2019,
    poster: 'https://images.unsplash.com/photo-1535189043414-47a3c49a0bed?w=400',
    status: 'Ongoing',
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState<'movies' | 'series'>('movies')
  const { user } = useAuthStore()

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-white">
            Discover Your Next
            <span className="text-[#4CAF50] block mt-2">Favorite Entertainment</span>
          </h1>
          <p className="text-gray-400 text-lg">
            {user ? `Welcome back, ${user.name}!` : 'Explore the best movies and TV series'}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 gap-4">
          <button
            onClick={() => setActiveTab('movies')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'movies'
                ? 'text-[#4CAF50] border-b-2 border-[#4CAF50]'
                : 'text-gray-400 hover:text-white border-b-2 border-transparent'
            }`}
          >
            🎬 Movies
          </button>
          <button
            onClick={() => setActiveTab('series')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'series'
                ? 'text-[#8B5CF6] border-b-2 border-[#8B5CF6]'
                : 'text-gray-400 hover:text-white border-b-2 border-transparent'
            }`}
          >
            📺 TV Series
          </button>
        </div>

        {/* Content Grid */}
        {activeTab === 'movies' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleSeries.map(series => (
              <SeriesCard key={series.id} series={series} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

