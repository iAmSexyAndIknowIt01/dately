"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, ShieldCheck, Users, Mail } from "lucide-react"
import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export default function DatelyLandingPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    console.log("waitlist email:", email)

    setSubmitted(true)
    setEmail("")
  }

  return (
    <div className={`${inter.className} min-h-screen bg-white text-gray-900`}>

      {/* NAVBAR */}
      <nav className="w-full flex items-center justify-between px-6 md:px-10 py-5">
        <div className="text-2xl font-bold tracking-tight text-[#D70040]">
          Dately
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#features" className="hover:text-[#D70040] transition">Features</a>
          <a href="#how" className="hover:text-[#D70040] transition">How it works</a>
        </div>

        <div className="flex gap-3">
          <Link
            href="/login"
            className="px-5 py-2 rounded-full text-sm font-medium border hover:border-[#D70040]"
          >
            Нэвтрэх
          </Link>

          <Link
            href="/register"
            className="bg-[#D70040] text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90"
          >
            Бүртгүүлэх
          </Link>
        </div>
      </nav>


      {/* HERO */}
      <section className="relative px-6 py-32 flex flex-col items-center text-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-[#D70040]/10 to-transparent" />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative text-5xl md:text-6xl font-bold tracking-tight max-w-4xl"
        >
          Find a <span className="text-[#D70040]">real relationship</span>
        </motion.h1>

        <p className="relative mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
          Dately бол Монголын баталгаажсан болзооны платформ.
          Fake profile байхгүй. Жинхэнэ харилцаанд зориулагдсан.
        </p>

        <div className="relative mt-10 flex flex-col md:flex-row gap-4">

          <Link
            href="/register"
            className="bg-[#D70040] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90"
          >
            Бүртгүүлэх
          </Link>

          <Link
            href="/login"
            className="border px-8 py-4 rounded-full font-semibold hover:border-[#D70040]"
          >
            Нэвтрэх
          </Link>

        </div>

      </section>


      {/* FEATURES */}
      <section id="features" className="py-24 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Why Dately?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="p-8 rounded-2xl border hover:shadow-lg transition">
            <ShieldCheck className="text-[#D70040] mb-4" size={34} />
            <h3 className="text-xl font-semibold mb-3">Verified Profiles</h3>
            <p className="text-gray-600">
              Бүх хэрэглэгч баталгаажуулалттай. Fake profile болон scam багасна.
            </p>
          </div>

          <div className="p-8 rounded-2xl border hover:shadow-lg transition">
            <Heart className="text-[#D70040] mb-4" size={34} />
            <h3 className="text-xl font-semibold mb-3">Serious Dating</h3>
            <p className="text-gray-600">
              Түр зуурын swipe биш. Жинхэнэ харилцаанд зориулсан.
            </p>
          </div>

          <div className="p-8 rounded-2xl border hover:shadow-lg transition">
            <Users className="text-[#D70040] mb-4" size={34} />
            <h3 className="text-xl font-semibold mb-3">Smart Matching</h3>
            <p className="text-gray-600">
              Сонирхол, үнэт зүйл, зорилгод суурилсан match.
            </p>
          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section id="how" className="bg-gray-50 py-24 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            How it works
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            <div>
              <div className="text-4xl font-bold text-[#D70040] mb-4">01</div>
              <p className="text-gray-600">Профайл үүсгэж баталгаажуулна</p>
            </div>

            <div>
              <div className="text-4xl font-bold text-[#D70040] mb-4">02</div>
              <p className="text-gray-600">Тохирох хүмүүсийг систем санал болгоно</p>
            </div>

            <div>
              <div className="text-4xl font-bold text-[#D70040] mb-4">03</div>
              <p className="text-gray-600">Match болбол чат эхэлнэ</p>
            </div>

          </div>

        </div>

      </section>


      {/* WAITLIST */}
      <section id="waitlist" className="py-28 px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Be first when we launch
        </h2>

        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Email-ээ үлдээгээд Dately launch болоход хамгийн түрүүнд мэдээрэй.
        </p>

        {submitted ? (
          <div className="text-green-600 font-semibold">
            Баярлалаа! Launch үед танд мэдэгдэх болно.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4 justify-center max-w-xl mx-auto"
          >
            <div className="flex items-center border rounded-full px-5 py-4 w-full">
              <Mail className="mr-2 text-gray-400" size={18} />
              <input
                type="email"
                placeholder="your@email.com"
                className="outline-none w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#D70040] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90"
            >
              Join
            </button>

          </form>
        )}

      </section>


      {/* FOOTER */}
      <footer className="border-t py-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Dately. All rights reserved.
      </footer>

    </div>
  )
}
