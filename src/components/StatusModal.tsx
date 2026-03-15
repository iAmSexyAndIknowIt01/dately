"use client"

import { Inter } from "next/font/google"
import { useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

type Props = {
  isOpen: boolean
  type: "success" | "error"
  message: string
  onClose: () => void
}

export default function StatusModal({
  isOpen,
  type,
  message,
  onClose
}: Props) {

  const isSuccess = type === "success"

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose()
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className={`${inter.className} fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50`}
    >

      <div
        className="bg-white w-full max-w-sm rounded-2xl p-8 text-center shadow-xl 
        animate-[popup_.25s_ease-out]"
      >

        {/* icon */}
        <div
          className={`text-5xl mb-4 ${
            isSuccess ? "text-[#D70040]" : "text-red-500"
          } animate-bounce`}
        >
          {isSuccess ? "✔" : "✖"}
        </div>

        {/* title */}
        <h2
          className={`text-xl font-semibold mb-2 ${
            isSuccess ? "text-[#D70040]" : "text-red-500"
          }`}
        >
          {isSuccess ? "Амжилттай" : "Алдаа"}
        </h2>

        {/* message */}
        <p className="text-gray-500">
          {message}
        </p>

      </div>

    </div>
  )
}