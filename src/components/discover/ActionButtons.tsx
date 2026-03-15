"use client"

type Props = {
  onLike: () => void
  onPass: () => void
}

export default function ActionButtons({ onLike, onPass }: Props) {
  return (
    <div className="flex gap-2">

      <button
        onClick={onPass}
        className="w-9 h-9 flex items-center justify-center bg-white/90 text-red-500 rounded-full text-lg shadow"
      >
        ❌
      </button>

      <button
        onClick={onLike}
        className="w-9 h-9 flex items-center justify-center bg-white/90 text-green-500 rounded-full text-lg shadow"
      >
        ❤️
      </button>

    </div>
  )
}