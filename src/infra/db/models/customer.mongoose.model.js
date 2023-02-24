import mongoose, { Schema } from 'mongoose';

const CustomerModel = mongoose.model(
  'customers',
  new Schema({
    name: String,
    phone: String,
    deleted: { type: Boolean, default: false },
  })
);

export { CustomerModel };
