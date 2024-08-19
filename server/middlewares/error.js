const logger = require("../helper/logger");

module.exports = (err, req, res, next) => {
  // logging
  // logger.log("error", err.message);
  logger.error(err.message);
  res.status(500).send({
    data: "Sunucuda bir hata oluştu. Lütfen daha sonra tekrar deneyin veya yöneticiye başvurun.",
    error: true,
    success: false,
  });
};
