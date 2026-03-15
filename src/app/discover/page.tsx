"use client"

import { Inter } from "next/font/google"
import UserCardList from "@/components/discover/UserCardList"

const inter = Inter({ subsets: ["latin"] })

export default function DiscoverPage() {

  const users = [
    {
      name: "Anu",
      age: 24,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      name: "Sara",
      age: 26,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    },
    {
      name: "Mika",
      age: 22,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
    }
  ]

  return (
    <div className={`${inter.className} min-h-screen bg-gray-50`}>

      <UserCardList users={users} />

    </div>
  )
}