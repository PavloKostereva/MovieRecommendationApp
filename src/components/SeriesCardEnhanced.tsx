'use client'

import { useState } from 'react'
import TrailerModal from './TrailerModal'
import { getImageUrl } from '@/lib/tmdb'
import { getSeriesVideos } from '@/lib/tmdb'

interface SeriesCardEnhancedProps {
  series: {
    id: number
    name: string
    first_air_date: string
    poster_path: string
    vote_average: number
    overview: string
    number_of_seasons?: number
    number_of_episodes?: number
    [key: string]: any
  }
}

export default function SeriesCardEnhanced({ series }: SeriesCardEnhancedProps) {
  const [showTrailer, setShowTrailer] = useState(false)
  const [trailerKey, setTrailerKey] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleWatchTrailer = async () => {
    setLoading(true)
    try {
      const videos = await getSeriesVideos(series.id)
      const trailer = videos.find(v => v.type === 'Trailer' && v.site === 'YouTube')
      
      if (trailer) {
        setTrailerKey(trailer.key)
        setShowTrailer(true)
      } else {
        alert('No trailer available')
      }
    } catch (error) {
      console.error('Error fetching trailer:', error)
      alert('Failed to load trailer')
    } finally {
      setLoading(false)
    }
  }

  const year = new Date(series.first_air_date).getFullYear()
  const rating = series.vote_average.toFixed(1)

  return (
    <>
      <div className="group relative bg-[#131313] rounded overflow-hidden border border-[#1a1a1a] hover:border-[#8B5CF6] transition-all duration-300 hover:shadow-lg hover:shadow-[#8B5CF6]/20">
        {/* Poster Area */}
        <div className="relative w-full h-80 overflow-hidden bg-black">
          <img 
            src={getImageUrl(series.poster_path)} 
            alt={series.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Rating Badge */}
          <div className="absolute top-3 right-3">
            <div className="bg-[#8B5CF6] text-white font-bold px-2.5 py-1 rounded text-sm flex items-center gap-1 backdrop-blur-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              {rating}
            </div>
          </div>

          {/* Info Badge */}
          {series.number_of_seasons && (
            <div className="absolute top-3 left-3">
              <div className="bg-green-500/80 text-white px-2 py-1 rounded text-xs font-bold backdrop-blur-sm">
                {series.number_of_seasons} Seasons
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#8B5CF6] transition-colors line-clamp-1">
            {series.name}
          </h3>
          
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
            <span>{year}</span>
            {series.number_of_episodes && (
              <>
                <span>•</span>
                <span>{series.number_of_episodes} episodes</span>
              </>
            )}
          </div>

          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-3">
            {series.overview || 'No description available'}
          </p>

          <button 
            onClick={handleWatchTrailer}
            disabled={loading}
            className="w-full bg-[#1a1a1a] border border-gray-700 text-white py-2 px-4 rounded text-sm font-medium hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-colors disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Watch Trailer'}
          </button>
        </div>
      </div>

      {trailerKey && (
        <TrailerModal
          isOpen={showTrailer}
          onClose={() => setShowTrailer(false)}
          videoKey={trailerKey}
          title={series.name}
        />
      )}
    </>
  )
}

