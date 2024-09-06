const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const error = require("../middlewares/error");
//
const admin = require("../routes/admin");
const auth = require("../routes/auth");
const client = require("../routes/client");

module.exports = (app) => {
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "..", "public")));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const corsOptions = {
    origin: ["http://localhost:3000", "https://hismailkeskin.vercel.app", "https://www.hismailkeskin.net", "https://hismailkeskin.net"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true, // Cookie'lerin cross-origin isteklerde gönderilmesini sağlar
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
    exposedHeaders: ["set-cookie"], // 'set-cookie' header'ını erişilebilir yapar
  };
  app.use(cors(corsOptions));

  app.use("/api/auth", auth);
  app.use("/api/admin", admin);
  app.use("/api", client);
  app.use(error);
};
