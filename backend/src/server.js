require("dotenv").config();

const express = require("express");
const cors = require("cors");

const portfolioRoutes = require("./routes/portfolioRoutes");

const app = express();

// ✅ CORS Setup (Dev + Vercel Production)
app.use(cors({
  origin: [
    "http://localhost:3000",
    /\.vercel\.app$/
  ],
  credentials: true
}));

app.use(express.json());

app.use("/api/portfolio", portfolioRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

// ✅ IMPORTANT: Use ENV PORT for deployment
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
