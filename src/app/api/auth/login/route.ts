import { NextResponse } from "next/server"
import { loginUser } from "@/services/authService"

export async function POST(req: Request) {

  const body = await req.json()
  const { email, password } = body

  try {

    const user = await loginUser(email, password)

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