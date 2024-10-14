import { Request, Response } from 'express';
import Payment from '../models/Payment';

export const createPayment = async (req: Request, res: Response) => {
    const { userId, amount } = req.body;

    const payment = new Payment({ userId, amount });

    try {
        await payment.save();
        res.status(201).json({ message: 'Payment created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating payment', error });
    }
};

export const getPayments = async (req: Request, res: Response) => {
    try {
        const payments = await Payment.find().populate('userId');
        res.json(payments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching payments', error });
    }
};
