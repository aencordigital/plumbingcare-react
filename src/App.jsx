import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient"; // FIXED: Changed from "../../supabaseClient" to "./supabaseClient"

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Subscription from "./components/Subscription.jsx";
import NumberLogin from "./components/Auth/NumberLogin.jsx";
import AuthModal from "./components/Auth/AuthModal.jsx";
import UserProfile from "./components/UserProfile.jsx";

import CustomerDashboard from "./components/Customer/CustomerDashboard.jsx";
import AdminDashboard from "./components/Admin/AdminDashboard.jsx";
import AffiliateDashboard from "./components/Affiliate/AffiliateDashboard.jsx";

const checkAndSeedData = async () => {
  try {
    const { count, error } = await supabase
      .from("services")
      .select("*", { count: "exact", head: true });

    if (error) {
      console.error("Error checking services:", error.message, error.details);
      return;
    }

    if (count === 0) {
      const services = [
        { name: "Emergency Plumbing Repair", description: "24/7 emergency plumbing services", price: 150.0, duration_minutes: 60, category: "Emergency" },
        { name: "Drain Cleaning", description: "Professional drain cleaning", price: 99.0, duration_minutes: 45, category: "Maintenance" },
        { name: "Leak Repair", description: "Fix water leaks", price: 125.0, duration_minutes: 90, category: "Repair" },
        { name: "Fixture Installation", description: "Install sinks, toilets, faucets", price: 85.0, duration_minutes: 60, category: "Installation" },
        { name: "Water Heater Service", description: "Water heater repair and installation", price: 200.0, duration_minutes: 120, category: "Repair" },
      ];

      const { error: insertError } = await supabase.from("services").insert(services);
      if (insertError) {
        console.error("Error seeding services:", insertError.message, insertError.details);
      } else {
        console.log("Services seeded successfully!");
      }
    } else {
      console.log("Services table already has data:", count, "rows");
    }
  } catch (err) {
    console.error("Unexpected error in checkAndSeedData:", err);
  }
};

const AppWrapper = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("customer");
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAndSeedData();

    const getSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Session fetch error:", error);
        setLoading(false);
        return;
      }

      if (session) {
        setIsLoggedIn(true);
        setUserId(session.user.id);
        await fetchUserProfile(session.user.id, navigate);
      } else {
        setIsLoggedIn(false);
        resetUser();
      }
      setLoading(false);
    };

    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (session) {
          setIsLoggedIn(true);
          setUserId(session.user.id);
          await fetchUserProfile(session.user.id, navigate);
        } else {
          setIsLoggedIn(false);
          resetUser();
          navigate("/");
        }
        setLoading(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  const resetUser = () => {
    setUserRole("customer");
    setUserName("");
    setUserId(null);
  };

  const fetchUserProfile = async (uid, navigate) => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("first_name, last_name, role")
        .eq("id", uid)
        .single();

      let role = "customer";
      let fullName = "User";

      if (!error && data) {
        fullName = data.first_name && data.last_name
          ? `${data.first_name} ${data.last_name}`
          : "User";
        role = data.role || "customer";
      } else {
        const { data: { user } } = await supabase.auth.getUser();
        fullName = user?.user_metadata?.full_name || user?.email || "User";
        role = user?.user_metadata?.role || "customer";
      }

      setUserName(fullName);
      setUserRole(role);

      if (role === "admin") navigate("/admin/dashboard");
      else if (role === "affiliate") navigate("/affiliate/dashboard");
      else navigate("/dashboard");
    } catch (err) {
      console.error("Profile fetch error:", err);
      resetUser();
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error("Logout error:", error);
  };

  const topTabs = [
    { id: "home", name: "Home", path: "/" },
    { id: "subscription", name: "Subscription", path: "/subscription" },
    { id: "number-login", name: "Number Login", path: "/number-login" },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <nav className="top-tabs shadow sticky top-0 z-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {topTabs.map((tab) => (
              <NavLink
                key={tab.id}
                to={tab.path}
                className={({ isActive }) =>
                  `py-4 font-medium border-b-2 whitespace-nowrap ${
                    isActive
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`
                }
              >
                {tab.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <Header
        isLoggedIn={isLoggedIn}
        userName={userName}
        userRole={userRole}
        handleLogout={handleLogout}
        setShowAuthModal={setShowAuthModal}
        setIsLoginMode={setIsLoginMode}
      />

      <main className="flex-1 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/number-login" element={<NumberLogin />} />
            <Route path="/dashboard/*" element={<CustomerDashboard userId={userId} />} />
            <Route path="/admin/*" element={<AdminDashboard userId={userId} />} />
            <Route path="/affiliate/*" element={<AffiliateDashboard userId={userId} />} />
            <Route path="/profile" element={<UserProfile userId={userId} />} />
          </Routes>
        </div>
      </main>

      {showAuthModal && (
        <AuthModal
          show={showAuthModal}
          isLoginMode={isLoginMode}
          setIsLoginMode={setIsLoginMode}
          setShow={setShowAuthModal}
        />
      )}

      <Footer />
    </div>
  );
};

const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;