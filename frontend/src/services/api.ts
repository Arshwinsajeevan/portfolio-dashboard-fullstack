import axios from "axios";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:5000/api";

export const getDashboardData = async () => {
  const res = await axios.get(`${API_BASE}/portfolio/dashboard`);
  return res.data;
};
