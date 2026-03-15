"use client"

import UserCard from "./UserCard"

type User = {
  name: string
  age: number
  image: string
}

export default function UserCardList({ users }: { users: User[] }) {

  return (
    <div className="flex justify-center pt-8">

      <div className="w-full max-w-sm">

        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            age={user.age}
            image={user.image}
          />
        ))}

      </div>

    </div>
  )
}