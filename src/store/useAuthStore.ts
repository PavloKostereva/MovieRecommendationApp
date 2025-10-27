import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface User {
  id: number
  name: string
  email: string
}

interface AuthState {
  user: User | null
  login: (email: string, password: string) => void
  register: (name: string, email: string, password: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login: (email: string, password: string) => {
        // In a real app, you would make an API call here
        // For demo purposes, we'll just create a mock user
        set({
          user: {
            id: 1,
            name: 'Demo User',
            email: email,
          },
        })
      },
      register: (name: string, email: string, password: string) => {
        // In a real app, you would make an API call here
        set({
          user: {
            id: Date.now(),
            name: name,
            email: email,
          },
        })
      },
      logout: () => {
        set({ user: null })
      },
    }),
    {
      name: 'auth-storage',
    }
  )
)

