import React, { useEffect, useState } from "react";

const VALID_EMAIL = "admin@devops.local";
const VALID_PASSWORD = "admin123";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  // ki trefreshi, nraja3ou el login mtaak si deja connecté
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAuthenticated") === "true";
    if (isLoggedIn) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.email === VALID_EMAIL && form.password === VALID_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      setError("");
    } else {
      setError("Email ou mot de passe incorrect.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    setForm({ email: "", password: "" });
  };

  // 👉 si l user mahouch connecté → n’afichiw login page
  if (!isAuthenticated) {
    return (
      <main
        style={{
          fontFamily: "Arial, sans-serif",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f172a",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "32px 28px",
            borderRadius: 12,
            width: "100%",
            maxWidth: 360,
            boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
          }}
        >
          <h1 style={{ marginBottom: 8, fontSize: 24, textAlign: "center" }}>
            Login
          </h1>
          <p
            style={{
              marginBottom: 24,
              fontSize: 13,
              color: "#4b5563",
              textAlign: "center",
            }}
          >
            Connectez-vous pour accéder à l&apos;application Agrovera.
          </p>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            <div>
              <label
                htmlFor="email"
                style={{ display: "block", marginBottom: 4, fontSize: 13 }}
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="admin@devops.local"
                style={{
                  width: "100%",
                  padding: "8px 10px",
                  borderRadius: 8,
                  border: "1px solid #d1d5db",
                  fontSize: 14,
                }}
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                style={{ display: "block", marginBottom: 4, fontSize: 13 }}
              >
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="admin123"
                style={{
                  width: "100%",
                  padding: "8px 10px",
                  borderRadius: 8,
                  border: "1px solid #d1d5db",
                  fontSize: 14,
                }}
                required
              />
            </div>

            {error && (
              <p style={{ color: "#b91c1c", fontSize: 13, marginTop: -6 }}>
                {error}
              </p>
            )}

            <button
              type="submit"
              style={{
                marginTop: 4,
                width: "100%",
                padding: "10px 12px",
                borderRadius: 999,
                border: "none",
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
                background:
                  "linear-gradient(135deg, #2563eb 0%, #22c55e 50%, #eab308 100%)",
                color: "white",
              }}
            >
              Se connecter
            </button>
          </form>

          <p
            style={{
              marginTop: 18,
              fontSize: 12,
              color: "#9ca3af",
              textAlign: "center",
            }}
          >
            Demo credentials : <br />
            <strong>admin@devops.local</strong> / <strong>admin123</strong>
          </p>
        </div>
      </main>
    );
  }

  // 👉 si connecté → n’affichiw l’app el asliyya + bouton logout
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: 40,
      }}
    >
      <button
        onClick={handleLogout}
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          padding: "6px 10px",
          borderRadius: 999,
          border: "1px solid #d1d5db",
          background: "white",
          fontSize: 12,
          cursor: "pointer",
        }}
      >
        Déconnexion
      </button>

      <h1>React CI Project</h1>
      <p>Simple app for the DevOps project — smoke test checks /</p>
      <p style={{ marginTop: 12, fontSize: 14, color: "#4b5563" }}>
        Vous êtes connecté. Cette zone simulera plus tard votre application
        réelle (Dashbord, tâches, etc.).
      </p>
    </main>
  );
}
