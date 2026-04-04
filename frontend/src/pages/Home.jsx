import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* NAVBAR */}
      <div style={styles.navbar}>
        <h2>GolfCharity ⛳</h2>
        <div>
          <button style={styles.navBtn} onClick={() => window.location="/"}>
            Login
          </button>
          <button style={styles.navBtn} onClick={() => window.location="/register"}>
            Sign Up
          </button>
        </div>
      </div>

      {/* HERO */}
      <div style={styles.hero}>
        <h1>Play Golf. Win Rewards. Change Lives ❤️</h1>
        <p>
          Track your scores, win monthly prizes, and support charities.
        </p>
        <button
          style={styles.cta}
          onClick={() => navigate("/dashboard")}
        >
          Get Started 🚀
        </button>
      </div>

      {/* FEATURES */}
      <div style={styles.section}>
        <h2>Why Choose Us?</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            🎯 <h3>Monthly Draw</h3>
            <p>Win exciting prizes every month</p>
          </div>

          <div style={styles.card}>
            📊 <h3>Track Scores</h3>
            <p>Keep your last 5 performances</p>
          </div>

          <div style={styles.card}>
            ❤️ <h3>Support Charity</h3>
            <p>Your subscription helps others</p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={styles.footer}>
        <p>© 2026 GolfCharity. All rights reserved.</p>
        <p>Contact: support@golfcharity.com</p>
      </div>
    </div>
  );
}

// 🎨 STYLES
const styles = {
  container: {
    fontFamily: "Arial",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    background: "#111",
    color: "#fff"
  },

  navBtn: {
    marginLeft: "10px",
    padding: "8px 12px",
    background: "#ff7eb3",
    border: "none",
    color: "#fff",
    cursor: "pointer"
  },

  hero: {
    textAlign: "center",
    padding: "100px 20px",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "#fff"
  },

  cta: {
    marginTop: "20px",
    padding: "12px 20px",
    background: "#ff7eb3",
    border: "none",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer"
  },

  section: {
    padding: "50px 20px",
    textAlign: "center"
  },

  grid: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    marginTop: "20px"
  },

  card: {
    padding: "20px",
    background: "#f5f5f5",
    borderRadius: "10px",
    width: "200px"
  },

  footer: {
    textAlign: "center",
    padding: "20px",
    background: "#111",
    color: "#fff"
  }
};