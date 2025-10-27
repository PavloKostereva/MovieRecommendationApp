import { Book } from '@/types/book'
import { useListStore } from '@/store/useListStore'

export default function BookCard({ book }: { book: Book }) {
  const { addToMyList } = useListStore()

  const handleAddToList = () => {
    addToMyList('book', book)
  }

  return (
    <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
      <div className="relative w-full h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg shadow-2xl flex items-center justify-center">
            <span className="text-4xl font-bold text-white">{book.title.charAt(0)}</span>
          </div>
        </div>
        
        <div className="absolute top-4 right-4">
          <div className="bg-yellow-500 text-black font-bold px-3 py-1 rounded-full text-sm">
            {book.rating}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
          {book.title}
        </h3>
        
        <div className="flex items-center gap-3 text-sm text-gray-400 mb-2">
          <span className="text-purple-300">by {book.author}</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
          <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
            {book.genre}
          </span>
          <span>{book.year}</span>
          <span>•</span>
          <span>{book.pages} pages</span>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {book.description}
        </p>

        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300">
            Read Now
          </button>
          <button
            onClick={handleAddToList}
            className="px-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

