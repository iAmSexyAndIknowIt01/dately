import { supabase } from "@/lib/supabase"

export async function registerUser(name: string, email: string, password: string) {

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  })

  if (error) {
    throw new Error(error.message)
  }

  const user = data.user

  await supabase.from("users").insert({
    id: user?.id,
    name,
    email
  })

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