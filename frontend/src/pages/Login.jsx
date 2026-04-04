import { useState } from "react";
import { API } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate(); // ✅ use React navigation

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      console.log("TOKEN:", res.data.token); // 🔥 DEBUG

      // ✅ SAVE TOKEN
      localStorage.setItem("token", res.data.token);

      alert("Login Successful 🚀");

      // ✅ USE NAVIGATE (NOT window.location)
      navigate("/dashboard");

    } catch (err) {
      console.log(err);
      alert(err.response?.data || "Login failed ❌");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back 👋</h2>
        <p style={styles.subtitle}>Login to continue</p>

        <input
          type="email"
          placeholder="Enter email"
          style={styles.input}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          style={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button} onClick={handleLogin}>
          Login
        </button>

        <p style={styles.signupText}>
          Don't have an account?{" "}
          <span
            style={styles.signupLink}
            onClick={() => navigate("/register")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
  },

  card: {
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    padding: "40px",
    borderRadius: "15px",
    width: "320px",
    textAlign: "center",
    color: "#fff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },

  title: {
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "14px",
    marginBottom: "20px",
    color: "#ddd",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
  },

  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#ff7eb3",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },

  signupText: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#ddd",
  },

  signupLink: {
    color: "#ffd700",
    cursor: "pointer",
    fontWeight: "bold",
  },
};