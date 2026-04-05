import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, isFirebaseConfigured } from "../firebase";

export default function Dashboard() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!auth) return;

    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsub();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!isFirebaseConfigured || !auth) {
      setMessage("Firebase is not configured.");
      return;
    }

    try {
      if (mode === "login") {
        await signInWithEmailAndPassword(auth, email, password);
        setMessage("Welcome back.");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        setMessage("Account created successfully.");
      }
      setPassword("");
    } catch (error) {
      setMessage(error.message);
    }
  }

  async function handleLogout() {
    try {
      await signOut(auth);
      setMessage("You have been logged out.");
    } catch (error) {
      setMessage(error.message);
    }
  }

  return (
    <main className="page-wrap dashboard-page">
      <motion.section
        className="glass-card dashboard-card"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <span className="section-kicker">Member Dashboard</span>
        <h1>{user ? "Welcome inside" : "Secure access portal"}</h1>
        <p className="muted-text">
          {user
            ? "Your Firebase login is active and ready for protected pages."
            : "Sign in or create an account to access the protected area."}
        </p>

        <div className="status-row">
          <div className={isFirebaseConfigured ? "status-pill online" : "status-pill offline"}>
            {isFirebaseConfigured ? "Firebase connected" : "Firebase not connected"}
          </div>
          {user && <div className="status-pill user-pill">{user.email}</div>}
        </div>

        {!user ? (
          <>
            <div className="toggle-row">
              <button
                type="button"
                className={mode === "login" ? "toggle-btn active" : "toggle-btn"}
                onClick={() => setMode("login")}
              >
                Login
              </button>

              <button
                type="button"
                className={mode === "signup" ? "toggle-btn active" : "toggle-btn"}
                onClick={() => setMode("signup")}
              >
                Sign Up
              </button>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
              <label>
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </label>

              <label>
                Password
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </label>

              <button type="submit" className="button-link submit-btn">
                {mode === "login" ? "Access Account" : "Create My Account"}
              </button>
            </form>
          </>
        ) : (
          <div className="signed-in-box">
            <div className="glass-card" style={{ marginTop: "1rem" }}>
              <h2 style={{ marginTop: 0 }}>Account Active</h2>
              <p className="muted-text">
                You are logged in and your Firebase authentication is working.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gap: "1rem",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                marginTop: "1rem",
              }}
            >
              <div className="glass-card">
                <h3 style={{ marginTop: 0 }}>Auth Status</h3>
                <p className="muted-text">Connected and verified.</p>
              </div>

              <div className="glass-card">
                <h3 style={{ marginTop: 0 }}>Next Step</h3>
                <p className="muted-text">Add Firestore data and private content.</p>
              </div>

              <div className="glass-card">
                <h3 style={{ marginTop: 0 }}>User</h3>
                <p className="muted-text">{user.email}</p>
              </div>
            </div>

            <button
              type="button"
              className="ghost-button logout-btn"
              onClick={handleLogout}
              style={{ marginTop: "1rem" }}
            >
              Logout
            </button>
          </div>
        )}

        {message && <p className="message-box">{message}</p>}
      </motion.section>
    </main>
  );
}