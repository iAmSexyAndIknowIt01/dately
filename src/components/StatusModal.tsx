"use client"

import { Inter } from "next/font/google"

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

  if (!isOpen) return null

  const isSuccess = type === "success"

  return (
    <div
      className={`${inter.className} fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50`}
    >

      <div className="bg-white w-full max-w-sm rounded-2xl p-8 text-center shadow-xl">

        {/* icon */}
        <div className="text-4xl mb-4">
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
        <p className="text-gray-500 mb-6">
          {message}
        </p>

        {/* button */}
        <button
          onClick={onClose}
          className="w-full bg-[#D70040] text-white py-3 rounded-full font-semibold hover:opacity-90 transition"
        >
          OK
        </button>

      </div>

    </div>
  )
}