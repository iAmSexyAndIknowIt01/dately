import { NextResponse } from "next/server"
import { registerUser } from "@/services/authService"

export async function POST(req: Request) {

  const body = await req.json()
  const { name, email, password } = body

  try {

    const user = await registerUser(name, email, password)

    return NextResponse.json({
      success: true,
      user
    })

  } catch (error: any) {

    return NextResponse.json({
      success: false,
      message: error.message
    })

  }
}