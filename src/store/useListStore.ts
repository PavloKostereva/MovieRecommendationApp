import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ListItem {
  id: number
  type: 'movie' | 'book'
  data: any
}

interface ListState {
  myList: ListItem[]
  addToMyList: (type: 'movie' | 'book', item: any) => void
  removeFromMyList: (id: number) => void
  isInMyList: (id: number) => boolean
}

export const useListStore = create<ListState>()(
  persist(
    (set, get) => ({
      myList: [],
      addToMyList: (type: 'movie' | 'book', item: any) => {
        const currentList = get().myList
        const exists = currentList.some((listItem) => listItem.id === item.id)
        
        if (!exists) {
          set({
            myList: [...currentList, { id: item.id, type, data: item }],
          })
        }
      },
      removeFromMyList: (id: number) => {
        set({
          myList: get().myList.filter((item) => item.id !== id),
        })
      },
      isInMyList: (id: number) => {
        return get().myList.some((item) => item.id === id)
      },
    }),
    {
      name: 'list-storage',
    }
  )
)

