import mongoose, { Schema, Document } from 'mongoose';

interface IExpenditure extends Document {
    description: string;
    amount: number;
    date: Date;
    category: string;
}

const ExpenditureSchema: Schema = new Schema({
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    category: { type: String, required: true },
});

const Expenditure = mongoose.model<IExpenditure>('Expenditure', ExpenditureSchema);
export default Expenditure;
