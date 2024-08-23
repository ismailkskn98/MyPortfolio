require("express-async-errors");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

require("./startup/routes")(app);
require("./startup/db")();
if (app.get("env") == "production") {
  require("./startup/production")(app);
}

console.log(app.get("env"));
console.log(process.env.NODE_ENV);

app.listen(port, () => {
  console.log(`Sunucu ${port} altında çalışıyor.`);
});
