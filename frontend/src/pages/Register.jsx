import { useState } from "react";
import { API } from "../api/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", {
        name,
        email,
        password,
      });

      alert("Registration Successful 🎉");
      window.location.href = "/";
    } catch (err) {
      alert("Registration Failed ❌");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Create Account 🚀</h2>

        <input
          type="text"
          placeholder="Name"
          style={styles.input}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button} onClick={handleRegister}>
          Sign Up
        </button>

        <p style={{ marginTop: "10px" }}>
          Already have an account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => (window.location.href = "/")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

// 🎨 Styles
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #43e97b, #38f9d7)",
  },

  card: {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    width: "300px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },

  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    background: "#28a745",
    color: "white",
    cursor: "pointer",
  },
};