// API utility functions for fetching data

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api'

export async function fetchMovies(query?: string, genre?: string, year?: string) {
  try {
    const params = new URLSearchParams()
    if (query) params.append('query', query)
    if (genre) params.append('genre', genre)
    if (year) params.append('year', year)

    const response = await fetch(`${API_BASE_URL}/movies?${params}`)
    if (!response.ok) throw new Error('Failed to fetch movies')
    return await response.json()
  } catch (error) {
    console.error('Error fetching movies:', error)
    return []
  }
}

export async function fetchBooks(query?: string, genre?: string) {
  try {
    const params = new URLSearchParams()
    if (query) params.append('query', query)
    if (genre) params.append('genre', genre)

    const response = await fetch(`${API_BASE_URL}/books?${params}`)
    if (!response.ok) throw new Error('Failed to fetch books')
    return await response.json()
  } catch (error) {
    console.error('Error fetching books:', error)
    return []
  }
}

export async function addToFavorites(type: 'movie' | 'book', id: number) {
  try {
    const response = await fetch(`${API_BASE_URL}/favorites`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, id }),
    })
    if (!response.ok) throw new Error('Failed to add to favorites')
    return await response.json()
  } catch (error) {
    console.error('Error adding to favorites:', error)
    return null
  }
}

export async function removeFromFavorites(type: 'movie' | 'book', id: number) {
  try {
    const response = await fetch(`${API_BASE_URL}/favorites`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, id }),
    })
    if (!response.ok) throw new Error('Failed to remove from favorites')
    return await response.json()
  } catch (error) {
    console.error('Error removing from favorites:', error)
    return null
  }
}

