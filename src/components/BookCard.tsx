import { Book } from '@/types/book'
import { useListStore } from '@/store/useListStore'

export default function BookCard({ book }: { book: Book }) {
  const { addToMyList } = useListStore()

  const handleAddToList = () => {
    addToMyList('book', book)
  }

  return (
    <div className="group relative bg-[#131313] rounded overflow-hidden border border-[#1a1a1a] hover:border-[#333] transition-all duration-300 hover:shadow-lg hover:shadow-black/50">
      {/* Poster Area */}
      <div className="relative w-full h-80 overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-40 bg-[#1a1a1a] border border-[#333] flex items-center justify-center">
            <span className="text-5xl font-bold text-[#8B5CF6]">{book.title.charAt(0)}</span>
          </div>
        </div>
        
        {/* Rating Badge */}
        <div className="absolute top-3 right-3">
          <div className="bg-[#f5c518] text-black font-bold px-2.5 py-1 rounded text-sm flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            {book.rating}
          </div>
        </div>

        {/* Add to List Button */}
        <button
          onClick={handleAddToList}
          className="absolute top-3 left-3 bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#8B5CF6] hover:text-white"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#8B5CF6] transition-colors">
          {book.title}
        </h3>
        
        <p className="text-xs text-gray-400 mb-2">by {book.author}</p>
        
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
          <span>{book.year}</span>
          <span>•</span>
          <span>{book.pages} pages</span>
        </div>

        <div className="mb-2">
          <span className="inline-block bg-[#1a1a1a] text-gray-300 text-xs px-2 py-1 rounded border border-[#333]">
            {book.genre}
          </span>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-3">
          {book.description}
        </p>

        <button className="w-full bg-[#1a1a1a] border border-gray-700 text-white py-2 px-4 rounded text-sm font-medium hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-colors">
          Read More
        </button>
      </div>
    </div>
  )
}
