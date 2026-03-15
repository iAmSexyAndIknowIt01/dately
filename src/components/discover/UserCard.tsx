"use client"

type Props = {
  name: string
  age: number
  image: string
}

export default function UserCard({ name, age, image }: Props) {
  return (
    <div className="relative mb-6 rounded-3xl overflow-hidden shadow-lg">

      <img
        src={image}
        className="w-full h-[420px] object-cover"
      />

      <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent text-white">

        <h2 className="text-xl font-semibold">
          {name}, {age}
        </h2>

      </div>

    </div>
  )
}