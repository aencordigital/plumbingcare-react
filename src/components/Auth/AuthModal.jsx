import { useState } from "react";
import { supabase } from "../../supabaseClient";

export default function AuthModal({ show, isLoginMode, setIsLoginMode, setShow }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (!show) return null;

  const handleSignup = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { role: "customer" } }, // default signup role
    });
    if (error) setError(error.message);
    else setShow(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    else setShow(false);
  };

  const handleDemoLogin = async (role) => {
    const demoAccounts = {
      customer: { email: "customer@demo.com", password: "demo123" },
      admin: { email: "admin@demo.com", password: "demo123" },
      affiliate: { email: "affiliate@demo.com", password: "demo123" },
    };

    const { error } = await supabase.auth.signInWithPassword(demoAccounts[role]);
    if (error) setError(error.message);
    else setShow(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">
          {isLoginMode ? "Login" : "Sign Up"}
        </h2>

        <form onSubmit={isLoginMode ? handleLogin : handleSignup}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-3 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-3 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
            {isLoginMode ? "Login" : "Sign Up"}
          </button>
        </form>

        <p
          className="mt-4 text-sm text-center text-blue-500 cursor-pointer"
          onClick={() => setIsLoginMode(!isLoginMode)}
        >
          {isLoginMode ? "Don't have an account? Sign Up" : "Have an account? Login"}
        </p>

        <div className="mt-6 space-y-2">
          <button
            className="w-full bg-green-500 text-white py-2 rounded"
            onClick={() => handleDemoLogin("customer")}
          >
            Demo Login as Customer
          </button>
          <button
            className="w-full bg-purple-500 text-white py-2 rounded"
            onClick={() => handleDemoLogin("admin")}
          >
            Demo Login as Admin
          </button>
          <button
            className="w-full bg-indigo-500 text-white py-2 rounded"
            onClick={() => handleDemoLogin("affiliate")}
          >
            Demo Login as Affiliate
          </button>
        </div>
      </div>
    </div>
  );
}
