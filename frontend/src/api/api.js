import axios from "axios";

export const API = axios.create({
  baseURL: "https://golf-charity-subscription-platform-h98e.onrender.com",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  console.log("TOKEN SENT:", token); // 🔥 DEBUG

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});
