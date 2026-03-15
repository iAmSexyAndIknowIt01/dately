"use client"

import ActionButtons from "./ActionButtons"

type Props = {
  name: string
  age: number
  image: string
}

export default function UserCard({ name, age, image }: Props) {

  const handleLike = () => {
    console.log("Liked:", name)
  }

  const handlePass = () => {
    console.log("Passed:", name)
  }

  return (
    <div className="relative mb-6 rounded-3xl overflow-hidden shadow-lg">

      <img
        src={image}
        className="w-full h-[420px] object-cover"
      />

      <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent text-white">

        <div className="flex items-center justify-between">

          <h2 className="text-xl font-semibold">
            {name}, {age}
          </h2>

          <ActionButtons
            onLike={handleLike}
            onPass={handlePass}
          />

        </div>

      </div>

    </div>
  )
}