import { useEffect, useState } from "react";
import { API } from "../api/api";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [scores, setScores] = useState([]);
  const [newScore, setNewScore] = useState("");
  const [draw, setDraw] = useState([]);

  useEffect(() => {
    fetchUser();
    fetchScores();
  }, []);

  // 👤 GET USER PROFILE
  const fetchUser = async () => {
  try {
    const res = await API.get("/user");
    setUser(res.data);
  } catch (err) {
    console.log(err);
  }
};

  // 📊 GET SCORES
  const fetchScores = async () => {
    try {
      const res = await API.get("/score");
      setScores(res.data?.scores || []);
    } catch (err) {
      console.log(err);
    }
  };

 const addScore = async () => {
  try {
    const res = await API.post("/score", {
      value: Number(newScore),
    });

    console.log("SCORE RESPONSE:", res.data);

    setNewScore("");
    fetchScores();

  } catch (err) {
    console.log("ERROR:", err.response?.data);
    alert(err.response?.data || "Error adding score");
  }
};
  // 🎯 RUN DRAW
  const runDraw = async () => {
    const res = await API.get("/draw");
    setDraw(res.data.draw);
  };

 const selectCharity = async (e) => {
  try {
    await API.put("/user/charity", {
      charityId: e.target.value,
    });
    fetchUser();
  } catch (err) {
    alert("Charity update failed");
  }
};

  const subscribe = async () => {
  try {
    await API.put("/user/subscribe");
    fetchUser(); // refresh UI
  } catch (err) {
    alert("Subscription failed");
  }
};


  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div style={styles.container}>
      {/* HEADER */}
      <div style={styles.header}>
        <h1>Dashboard ⛳</h1>
        <button onClick={logout} style={styles.logout}>Logout</button>
      </div>

      {/* USER INFO */}
      <div style={styles.card}>
        <h3>👤 Welcome {user?.name}</h3>
        <p>Email: {user?.email || "Loading..."}</p>
      </div>

      {/* SUBSCRIPTION */}
      <div style={styles.card}>
        <h3>💳 Subscription</h3>
        <p>Status: <b>{user?.subscription?.status || "inactive"}</b></p>
        <button style={styles.button} onClick={subscribe}>
          Activate Subscription
        </button>
      </div>

      {/* CHARITY */}
      <div style={styles.card}>
        <h3>❤️ Select Charity</h3>
        <select onChange={selectCharity} style={styles.input}>
          <option value="">Choose charity</option>
          <option value="65f123abc123">Save Children</option>
          <option value="65f456abc456">Education Fund</option>
        </select>
      </div>

      {/* ADD SCORE */}
      <div style={styles.card}>
        <h3>📊 Add Score</h3>
        <input
          type="number"
          placeholder="Score (1-45)"
          value={newScore}
          onChange={(e) => setNewScore(e.target.value)}
          style={styles.input}
        />
        <button onClick={addScore} style={styles.button}>
          Add Score
        </button>
      </div>

      {/* SCORES */}
      <div style={styles.card}>
        <h3>📈 Scores</h3>
        {scores.map((s, i) => (
          <p key={i}>
            {s.value} → {new Date(s.date).toLocaleDateString()}
          </p>
        ))}
      </div>

      {/* DRAW */}
      <div style={styles.card}>
        <h3>🎯 Draw</h3>
        <button onClick={runDraw} style={styles.button}>
          Run Draw
        </button>
        {draw.length > 0 && <p>{draw.join(" - ")}</p>}
      </div>

      {/* WINNINGS */}
      <div style={styles.card}>
        <h3>🏆 Winnings</h3>
        <p>₹ {user?.winnings || 0}</p>
      </div>
    </div>
  );
}

// 🎨 STYLES
const styles = {
  container: {
    padding: "20px",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #74ebd5, #9face6)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  logout: {
    background: "red",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "8px",
  },
  card: {
    background: "white",
    padding: "15px",
    borderRadius: "10px",
    marginTop: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
  },
  button: {
    marginTop: "10px",
    padding: "10px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
  },
};