require("express-async-errors");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

require("./startup/routes")(app);
require("./startup/db")();
if (app.get("env") == "production") {
  require("./startup/production")(app);
}

app.listen(port, () => {
  console.log(`Sunucu ${port} altında çalışıyor.`);
});
