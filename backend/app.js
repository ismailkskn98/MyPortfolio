const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

// Express uygulamasına statik dosyaları sunma
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

// SET NODE_ENV
const envFile = process.env.NODE_ENV === "production" ? ".env.production" : ".env.local";
dotenv.config({ path: path.resolve(__dirname, envFile) });
const port = process.env.PORT || 3000;

// CORS ayarları
const corsOptions = {
  origin: "*", // Herhangi bir domain
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"], // Tüm HTTP metodları
  credentials: true,
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"], // İzin verilen başlıklar
};
app.use(cors(corsOptions));

// JSON formatındaki istek gövdelerini işle
app.use(express.json());

// Rotaları ayarlama
const adminRoutes = require("./routes/admin.js");
const userRoutes = require("./routes/user.js");
const authRoutes = require("./routes/auth.js");

// middlewares
app.use("/api/auth", authRoutes); // authentication
app.use("/api/admin", adminRoutes); // dashboard
app.use("/api", userRoutes); // client

// Sunucuyu belirtilen portta başlatma
app.listen(port, () => {
  console.log(`Sunucu ${port} altında çalışıyor.`);
});
