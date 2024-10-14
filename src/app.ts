import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';
import paymentRoutes from './routes/paymentRoutes';
import expenditureRoutes from './routes/expenditureRoutes';

const app = express();

// Middleware
app.use(express.json()); // for parsing application/json

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/expenditures', expenditureRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/house-maintenance')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });

export default app;
