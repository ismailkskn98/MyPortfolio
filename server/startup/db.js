const config = require("config");
const mongoose = require("mongoose");
const logger = require("../helper/logger");
//
const username = config.get("db.username");
const password = config.get("db.password");
const database = config.get("db.database");

module.exports = () => {
  async function databaseConnect() {
    try {
      await mongoose.connect(
        `mongodb+srv://${username}:${password}@cluster.845oj.mongodb.net/${database}?retryWrites=true&w=majority&appName=Cluster`
      );
      logger.info("mongodb bağlantısı başarıyla kuruldu.");
    } catch (error) {
      logger.error(error);
    }
  }
  databaseConnect();
};
