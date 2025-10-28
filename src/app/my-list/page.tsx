'use client'

import { useEffect, useState } from 'react'
import { useAuthStore } from '@/store/useAuthStore'
import { useListStore } from '@/store/useListStore'
import MovieCard from '@/components/MovieCard'
import SeriesCard from '@/components/SeriesCard'
import { Movie } from '@/types/movie'
import { Series } from '@/types/series'

export default function MyListPage() {
  const { user } = useAuthStore()
  const { myList } = useListStore()
  const [activeTab, setActiveTab] = useState<'movies' | 'series'>('movies')

  const myMovies = [] as Movie[]
  const mySeries = [] as Series[]

  if (!user) {
    return (
      <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Please Login</h2>
            <p className="text-gray-400 mb-8">You need to be logged in to view your watchlist</p>
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
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">My Watchlist</h1>
          <p className="text-gray-400">Your saved movies and TV series</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-start mb-8 gap-4">
          <button
            onClick={() => setActiveTab('movies')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'movies'
                ? 'text-[#4CAF50] border-b-2 border-[#4CAF50]'
                : 'text-gray-400 hover:text-white border-b-2 border-transparent'
            }`}
          >
            🎬 Movies ({myMovies.length})
          </button>
          <button
            onClick={() => setActiveTab('series')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'series'
                ? 'text-[#8B5CF6] border-b-2 border-[#8B5CF6]'
                : 'text-gray-400 hover:text-white border-b-2 border-transparent'
            }`}
          >
            📺 TV Series ({mySeries.length})
          </button>
        </div>

        {/* Content */}
        {activeTab === 'movies' ? (
          myMovies.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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
          mySeries.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {mySeries.map(series => (
                <SeriesCard key={series.id} series={series} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No series in your list yet</p>
            </div>
          )
        )}
      </div>
    </div>
  )
}

