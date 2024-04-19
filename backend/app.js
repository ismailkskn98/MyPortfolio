const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const adminRouter = require('./routes/admin.js');
const frontendRouter = require('./routes/frontend.js');

// SET NODE_ENV
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.dev';
dotenv.config({path: path.resolve(__dirname, envFile)});

const app = express();
const port = process.env.PORT;

// middlewares
app.use(express.json()); // gelen isteğin gövdesindeki JSON verilerini ayrıştırır ve bu verileri JavaScript nesnelerine dönüştürür
app.use('/admin', adminRouter); // dashboard
app.use(frontendRouter); // client

app.listen(port, () => {
    console.log(`Sunucu ${port} altında çalışıyor.`);
})