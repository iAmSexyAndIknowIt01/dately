"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ActionButtons from "./ActionButtons"

type User = {
  id: number
  name: string
  age: number
  image: string
}

export default function CardStack({ users }: { users: User[] }) {

  const [index, setIndex] = useState(0)

  const currentUser = users[index]

  const handleSwipe = (direction: "like" | "pass") => {

    if (direction === "like") {
      console.log("LIKE:", currentUser)
    } else {
      console.log("PASS:", currentUser)
    }

    setIndex((prev) => prev + 1)
  }

  if (!currentUser) {
    return (
      <div className="text-center mt-20 text-gray-500">
        No more users
      </div>
    )
  }

  return (
    <div className="flex justify-center pt-16">

      <div className="relative w-90 h-130">

        <AnimatePresence>

          <motion.div
            key={currentUser.id}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {

              if (info.offset.x > 120) {
                handleSwipe("like")
              }

              if (info.offset.x < -120) {
                handleSwipe("pass")
              }

            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.25 }}
            className="absolute w-full h-full rounded-3xl overflow-hidden shadow-xl bg-white"
          >

            <img
              src={currentUser.image}
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 w-full p-6 bg-linear-to-t from-black/70 to-transparent text-white">

              <div className="flex items-center justify-between">

                <h2 className="text-xl font-semibold">
                  {currentUser.name}, {currentUser.age}
                </h2>

                <ActionButtons
                  onLike={() => handleSwipe("like")}
                  onPass={() => handleSwipe("pass")}
                />

              </div>

            </div>

          </motion.div>

        </AnimatePresence>

      </div>

    </div>
  )
}