export interface Series {
  id: number
  title: string
  season: number
  episodes: number
  genre: string
  rating: number
  description: string
  year: number
  poster: string
  status: 'Ongoing' | 'Completed'
}

