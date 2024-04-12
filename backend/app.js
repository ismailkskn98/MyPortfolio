import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import adminRoutes from './routes/admin.js';
import userRoutes from './routes/user.js';

const app = express();
const port = process.env.PORT || 8080;

// middlewares
app.use(express.urlencoded({extended: true})); // from parse
app.use('/admin', adminRoutes); // dashboard
app.use(userRoutes); // client

app.listen(port, () => {
    console.log(`Sunucu ${port} altında çalışıyor.`);
})