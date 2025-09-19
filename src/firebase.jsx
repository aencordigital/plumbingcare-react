import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: window.__ENV__.AIzaSyDFrzVXH-teRjIPKDghYFioIBxbatxpn9g,
  authDomain: window.__ENV__.plumbingcare1.firebaseapp.com,
  projectId: window.__ENV__.plumbingcare1,
  storageBucket: window.__ENV__.plumbingcare1.firebasestorage.app,
  messagingSenderId: window.__ENV__.132862243011,
  appId: window.__ENV__.1:132862243011:web:0d94c94d8cac841d5bf276,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



$headers = @{
    "apikey" = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsYmxpZ21wbGZyeW5manRhdmlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwNzA3MjMsImV4cCI6MjA3MzY0NjcyM30.iF-_v5gaYmDnETLCTk5g0xw3pCuw8Th2C2UCNcMID5A"
    "Content-Type" = "application/json"
}

$body = @{
    "email" = "test@example.com"
    "password" = "password123"
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri "https://ulbligmplfrynfjtavio.supabase.co/auth/v1/signup" `
    -Method Post `
    -Headers $headers `
    -Body $body

$response













