"use client"

import { useState } from "react"
import Link from "next/link"
import { Inter } from "next/font/google"
import StatusModal from "@/components/StatusModal"

const inter = Inter({ subsets: ["latin"] })

export default function RegisterPage() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState<"success" | "error">("success")
  const [modalMessage, setModalMessage] = useState("")

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })

    const data = await res.json()

    if (data.success) {
      setModalType("success")
      setModalMessage("Бүртгэл амжилттай боллоо.")
    } else {
      setModalType("error")
      setModalMessage(data.message || "Бүртгэл амжилтгүй.")
    }
    setModalOpen(true)
  }

  return (
    <>
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
                Бүртгүүлэх
            </h1>

            <p className="text-gray-500 mb-8">
                Dately дээр шинэ аккаунт үүсгэнэ
            </p>

            <form className="space-y-5" onSubmit={handleRegister}>

                <input
                type="text"
                placeholder="Нэр"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-full px-5 py-4 outline-none focus:border-[#D70040]"
                />

                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-full px-5 py-4 outline-none focus:border-[#D70040]"
                />

                <input
                type="password"
                placeholder="Нууц үг"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-full px-5 py-4 outline-none focus:border-[#D70040]"
                />

                <button
                type="submit"
                className="w-full bg-[#D70040] text-white py-4 rounded-full font-semibold hover:opacity-90 transition"
                >
                Бүртгүүлэх
                </button>

            </form>

            <p className="text-sm text-gray-500 mt-6">
                Аль хэдийн аккаунттай юу?{" "}
                <Link
                href="/login"
                className="text-[#D70040] font-semibold"
                >
                Нэвтрэх
                </Link>
            </p>

            </div>

        </div>

        </div>
        <StatusModal 
            isOpen={modalOpen}
            type={modalType}
            message={modalMessage}
            onClose={() => setModalOpen(false)}
        />
    </>
  )
  
}
