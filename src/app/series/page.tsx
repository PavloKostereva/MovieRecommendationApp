'use client'

import { useState, useEffect } from 'react'
import SeriesCardEnhanced from '@/components/SeriesCardEnhanced'
import { getPopularSeries, searchSeries } from '@/lib/tmdb'

export default function SeriesPage() {
  const [series, setSeries] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadSeries()
  }, [])

  const loadSeries = async () => {
    setLoading(true)
    try {
      const data = await getPopularSeries()
      setSeries(data)
    } catch (error) {
      console.error('Error loading series:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) {
      loadSeries()
      return
    }

    setLoading(true)
    try {
      const results = await searchSeries(searchQuery)
      setSeries(results)
    } catch (error) {
      console.error('Error searching series:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">TV Series</h1>
          <p className="text-gray-400">Explore binge-worthy shows</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex gap-4">
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

            <button
              type="submit"
              className="px-6 py-2.5 bg-[#8B5CF6] text-white font-semibold hover:bg-purple-500 transition-colors"
            >
              Search
            </button>

            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('')
                  loadSeries()
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
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B5CF6]"></div>
              <p className="text-gray-400 mt-4">Loading series...</p>
            </div>
          </div>
        ) : series.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {series.map(show => (
              <SeriesCardEnhanced key={show.id} series={show} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No series found. Try a different search.</p>
          </div>
        )}
      </div>
    </div>
  )
}
