import { createClient } from '@supabase/supabase-js'

// Use environment variables (recommended)
const supabaseUrl = "https://hvznupnztxjddwazeovl.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2em51cG56dHhqZGR3YXplb3ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxMzUyMjIsImV4cCI6MjA3MzcxMTIyMn0.Hutsi6ZZ4vepiG0bO7PtJCr8s6F-bHhN-bq2MG8sjuw";

// Debug log to verify values
console.log('Supabase URL:', supabaseUrl)
console.log('Supabase Key loaded:', !!supabaseAnonKey)

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})