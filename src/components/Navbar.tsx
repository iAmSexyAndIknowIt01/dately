"use client"

import Link from "next/link"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Navbar() {
  return (
    <div
      className={`${inter.className} w-full border-b bg-white px-8 py-4 flex items-center justify-between`}
    >

      {/* Logo */}
      <Link
        href="/discover"
        className="text-2xl font-bold text-[#D70040]"
      >
        Dately
      </Link>

      {/* Navigation */}
      <div className="flex items-center gap-8 text-sm font-medium">

        <Link
          href="/discover"
          className="hover:text-[#D70040] transition"
        >
          Discover
        </Link>

        <Link
          href="/matches"
          className="hover:text-[#D70040] transition"
        >
          Matches
        </Link>

        <Link
          href="/profile"
          className="hover:text-[#D70040] transition"
        >
          Profile
        </Link>

      </div>

    </div>
  )
}