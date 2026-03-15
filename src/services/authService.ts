import { supabase } from "@/lib/supabase"
import { image } from "framer-motion/client"

export async function registerUser(name: string, email: string, password: string) {

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  })

  if (error) {
    throw new Error(error.message)
  }

  const user = data.user

    if (!user) {
      throw new Error("User creation failed")
    }

  // users table insert
  const { error: userError } = await supabase
    .from("users")
    .insert({
      id: user.id,
      name,
      email
    })

  if (userError) {
    throw new Error(userError.message)
  }

    // users table insert
  const { error: profileError } = await supabase
    .from("profiles")
    .insert({
      id: user.id,
      name,
      age: null,
      image: null,
    })
  
  if (profileError) {
    throw new Error(profileError.message)
  }  
  return user
}

export async function loginUser(email: string, password: string) {

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    throw new Error(error.message)
  }

  return data.user
}