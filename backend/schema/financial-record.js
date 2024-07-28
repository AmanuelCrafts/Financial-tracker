import mongoose from "mongoose";

const financialRecordSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  paymentMethod: { type: String, required: true },
});

const FinancialRecordModel = mongoose.model(
  "FinancialRecord",
  financialRecordSchema
);

export default FinancialRecordModel;
