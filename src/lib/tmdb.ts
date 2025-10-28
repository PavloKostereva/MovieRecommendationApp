// TMDb API Configuration
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || 'YOUR_API_KEY_HERE'
const BASE_URL = 'https://api.themoviedb.org/3'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

export interface TMDbMovie {
  id: number
  title: string
  release_date: string
  poster_path: string
  backdrop_path: string
  overview: string
  vote_average: number
  vote_count: number
  genre_ids: number[]
  adult: boolean
}

export interface TMDbSeries {
  id: number
  name: string
  first_air_date: string
  poster_path: string
  backdrop_path: string
  overview: string
  vote_average: number
  vote_count: number
  genre_ids: number[]
  number_of_seasons: number
  number_of_episodes: number
}

export interface VideoResult {
  id: string
  key: string
  name: string
  site: string
  type: string
}

// Get popular movies
export async function getPopularMovies() {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    if (!response.ok) throw new Error('Failed to fetch movies')
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error('Error fetching movies:', error)
    return []
  }
}

// Get popular TV series
export async function getPopularSeries() {
  try {
    const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`)
    if (!response.ok) throw new Error('Failed to fetch series')
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error('Error fetching series:', error)
    return []
  }
}

// Search movies
export async function searchMovies(query: string) {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    if (!response.ok) throw new Error('Failed to search movies')
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error('Error searching movies:', error)
    return []
  }
}

// Search TV series
export async function searchSeries(query: string) {
  try {
    const response = await fetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    if (!response.ok) throw new Error('Failed to search series')
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error('Error searching series:', error)
    return []
  }
}

// Get movie videos/trailers
export async function getMovieVideos(movieId: number): Promise<VideoResult[]> {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`)
    if (!response.ok) throw new Error('Failed to fetch videos')
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error('Error fetching movie videos:', error)
    return []
  }
}

// Get TV series videos/trailers
export async function getSeriesVideos(seriesId: number): Promise<VideoResult[]> {
  try {
    const response = await fetch(`${BASE_URL}/tv/${seriesId}/videos?api_key=${API_KEY}`)
    if (!response.ok) throw new Error('Failed to fetch videos')
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error('Error fetching series videos:', error)
    return []
  }
}

// Get movie details
export async function getMovieDetails(movieId: number) {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
    if (!response.ok) throw new Error('Failed to fetch movie details')
    return await response.json()
  } catch (error) {
    console.error('Error fetching movie details:', error)
    return null
  }
}

// Get TV series details
export async function getSeriesDetails(seriesId: number) {
  try {
    const response = await fetch(`${BASE_URL}/tv/${seriesId}?api_key=${API_KEY}`)
    if (!response.ok) throw new Error('Failed to fetch series details')
    return await response.json()
  } catch (error) {
    console.error('Error fetching series details:', error)
    return null
  }
}

// Get genres
export async function getGenres() {
  try {
    const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
    if (!response.ok) throw new Error('Failed to fetch genres')
    const data = await response.json()
    return data.genres
  } catch (error) {
    console.error('Error fetching genres:', error)
    return []
  }
}

// Helper function to get full image URL
export function getImageUrl(path: string | null): string {
  if (!path) return 'https://via.placeholder.com/500x750?text=No+Image'
  return `${IMAGE_BASE_URL}${path}`
}

// Helper function to get backdrop image URL
export function getBackdropUrl(path: string | null, size: string = 'w1280'): string {
  if (!path) return ''
  return `https://image.tmdb.org/t/p/${size}${path}`
}

