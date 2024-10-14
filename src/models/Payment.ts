import mongoose, { Schema, Document } from 'mongoose';

interface IPayment extends Document {
    userId: string;
    amount: number;
    date: Date;
    status: 'paid' | 'pending';
}

const PaymentSchema: Schema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    status: { type: String, enum: ['paid', 'pending'], default: 'pending' },
});

const Payment = mongoose.model<IPayment>('Payment', PaymentSchema);
export default Payment;
