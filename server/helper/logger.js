const winston = require("winston"); // Loglama için
const config = require("config");
require("winston-mongodb");

const username = config.get("db.username");
const password = config.get("db.password");
const database = config.get("db.database");

/*
    error: Kritik hatalar ve uygulamanın çalışmasını engelleyen problemler
    warn: Uyarılar ve olası problemler
    info: Genel bilgi mesajları
    http: HTTP istekleriyle ilgili loglar
    verbose: Ayrıntılı bilgi
    debug: Hata ayıklama sırasında kullanılan loglar
    silly: En düşük seviye, tüm loglar
*/

const logger = winston.createLogger({
  level: "debug", // logger'ın hangi seviyedeki mesajları loglayacağını belirler
  // log mesajlarının formatını belirler
  format: winston.format.combine(
    winston.format.timestamp({
      format: "MM-DD-YYYY HH:mm:ss",
    }), // zaman damgası
    winston.format.prettyPrint(),
    winston.format.json()
  ),
  // transports ayarı, log mesajlarının nereye gönderileceğini belirler
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs.log", level: "error" }),
    new winston.transports.MongoDB({
      level: "error",
      db: `mongodb+srv://${username}:${password}@cluster.845oj.mongodb.net/${database}?retryWrites=true&w=majority&appName=Cluster`,
      options: {
        useUnifiedTopology: true,
      },
      collection: "server_logs",
    }),
  ],
});

module.exports = logger;
