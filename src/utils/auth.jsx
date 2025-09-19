import { supabase } from '../supabase'

// Sign up with email
export const signUp = async (email, password, userData) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: userData
    }
  })
  return { data, error }
}

// Sign in with email
export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  return { data, error }
}

// Sign out
export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

// Get current user
export const getCurrentUser = () => {
  return supabase.auth.getUser()
}

// Update user profile
export const updateProfile = async (updates) => {
  const { data, error } = await supabase.auth.updateUser(updates)
  return { data, error }
}