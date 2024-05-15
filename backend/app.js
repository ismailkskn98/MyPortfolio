const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

const adminRoutes = require('./routes/admin.js');
const userRoutes = require('./routes/user.js');
const authRoutes = require('./routes/auth.js');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

// SET NODE_ENV
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.local';
dotenv.config({path: path.resolve(__dirname, envFile)});
const port = process.env.PORT;

// CORS ayarları
const corsOptions = {
    origin: ["http://localhost:3000", "http://127.0.0.1:5500"], // İzin verilen domainlerin listesi
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // İzin verilen HTTP metodları
    credentials: true, // Tarayıcıya çerez gönderme izni
    secure: false, // Geliştirme aşamasında HTTP bağlantıları için izin ver
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'] // İzin verilen başlıklar
};

app.use(cors(corsOptions))

// middlewares
app.use(express.json()); // JSON formatındaki istek gövdelerini işle
app.use('/admin', authRoutes); // authentication
app.use('/admin', adminRoutes); // dashboard
app.use('/api', userRoutes); // client

app.listen(port, () => {
    console.log(`Sunucu ${port} altında çalışıyor.`);
})