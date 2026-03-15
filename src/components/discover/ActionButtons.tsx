"use client"

type Props = {
  onLike: () => void
  onPass: () => void
}

export default function ActionButtons({ onLike, onPass }: Props) {
  return (
    <div className="flex items-center gap-3">

      <button
        onClick={onPass}
        className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-sm hover:scale-110 transition"
      >
        ❌
      </button>

      <button
        onClick={onLike}
        className="w-9 h-9 rounded-full bg-[#D70040] text-white flex items-center justify-center text-sm hover:scale-110 transition"
      >
        ❤️
      </button>

    </div>
  )
}