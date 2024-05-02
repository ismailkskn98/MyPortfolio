const path = require('path');
const dotenv = require('dotenv');
const express = require('express');

const adminRoutes = require('./routes/admin.js');
const userRoutes = require('./routes/user.js');
const authRoutes = require('./routes/auth.js');

// SET NODE_ENV
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.local';
dotenv.config({path: path.resolve(__dirname, envFile)});
const app = express();
const port = process.env.PORT;

// middlewares
app.use(express.json());
app.use('/admin', authRoutes); // authentication
app.use('/admin', adminRoutes); // dashboard
app.use('/api', userRoutes); // client

app.listen(port, () => {
    console.log(`Sunucu ${port} altında çalışıyor.`);
})