import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import app from "./app.js";
import ConnectDB from "./config/DB.js";
import "./service/cron.js";

const PORT = process.env.PORT || 5000;
app.use(cors({
  origin: ["http://localhost:5173",
  "https://sunsirse-admin-fd.onrender.com",
 
 ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS","PATCH"],
}))
ConnectDB(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Server start failed:", error.message);
  });