require("dotenv").config();
require("express-async-errors");
const config = require("config");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const error = require("./middlewares/error");

const app = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: ["http://localhost:3000", "https://your-production-domain.com"], // Herhangi bir domain
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"], // Tüm HTTP metodları
  credentials: true,
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"], // İzin verilen başlıklar
};
app.use(cors(corsOptions));

const admin = require("./routes/admin");
const auth = require("./routes/auth");
const client = require("./routes/client");

app.use("/api/auth", auth);
app.use("/api/admin", admin);
app.use("/api", client);

app.use(error);

const username = config.get("db.username");
const password = config.get("db.password");
const database = config.get("db.database");
async function databaseConnect() {
  try {
    await mongoose.connect(
      `mongodb+srv://${username}:${password}@cluster.845oj.mongodb.net/${database}?retryWrites=true&w=majority&appName=Cluster`
    );
  } catch (error) {
    console.log(error);
  }
}
databaseConnect();

// console.log(config.get("name"));
// console.log(app.get("env"));

app.listen(port, () => {
  console.log(`Sunucu ${port} altında çalışıyor.`);
});
