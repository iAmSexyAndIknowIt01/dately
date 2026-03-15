"use client"

import { Inter } from "next/font/google"
import { useEffect, useState } from "react"
import UserCardList from "@/components/discover/UserCardList"
import CardStack from "@/components/discover/CardStack"

const inter = Inter({ subsets: ["latin"] })

type User = {
  id: number
  name: string
  age: number
  image: string
}

const names = [
  "Anu","Sara","Mika","Nara","Tsetseg",
  "Ari","Solongo","Enji","Namuun","Misheel"
]

function generateUsers(count: number): User[] {

  const users: User[] = []

  for (let i = 1; i <= count; i++) {

    const name = names[Math.floor(Math.random() * names.length)]
    const age = Math.floor(Math.random() * 10) + 20

    users.push({
      id: i,
      name,
      age,
      image: `https://picsum.photos/400/600?random=${i}`
    })
  }

  return users
}

export default function DiscoverPage() {

  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const dummy = generateUsers(100)
    setUsers(dummy)
  }, [])

  return (
    <div className={`${inter.className} min-h-screen bg-gray-50`}>
      <CardStack users={users} />
    </div>
  )
}