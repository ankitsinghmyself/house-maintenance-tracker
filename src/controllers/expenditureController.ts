import { Request, Response } from 'express';
import Expenditure from '../models/Expenditure';

export const createExpenditure = async (req: Request, res: Response) => {
    const { description, amount, category } = req.body;

    const expenditure = new Expenditure({ description, amount, category });

    try {
        await expenditure.save();
        res.status(201).json({ message: 'Expenditure created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating expenditure', error });
    }
};

export const getExpenditures = async (req: Request, res: Response) => {
    try {
        const expenditures = await Expenditure.find();
        res.json(expenditures);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching expenditures', error });
    }
};
