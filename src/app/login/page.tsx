"use client"

import Link from "next/link"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function LoginPage() {
  return (
    <div className={`${inter.className} min-h-screen flex items-center justify-center px-6`}>

      <div className="w-full max-w-md">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold text-[#D70040] tracking-tight"
        >
          Dately
        </Link>

        {/* Card */}
        <div className="mt-10 border rounded-2xl p-10">

          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Нэвтрэх
          </h1>

          <p className="text-gray-500 mb-8">
            Dately аккаунт руугаа нэвтэрнэ үү
          </p>

          <form className="space-y-5">

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-full px-5 py-4 outline-none focus:border-[#D70040]"
            />

            <input
              type="password"
              placeholder="Нууц үг"
              className="w-full border rounded-full px-5 py-4 outline-none focus:border-[#D70040]"
            />

            <button
              type="submit"
              className="w-full bg-[#D70040] text-white py-4 rounded-full font-semibold hover:opacity-90 transition"
            >
              Нэвтрэх
            </button>

          </form>

          <p className="text-sm text-gray-500 mt-6">
            Аккаунт байхгүй юу?{" "}
            <Link
              href="/register"
              className="text-[#D70040] font-semibold"
            >
              Бүртгүүлэх
            </Link>
          </p>

        </div>

      </div>

    </div>
  )
}