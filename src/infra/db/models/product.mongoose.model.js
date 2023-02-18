import mongoose, { Schema } from 'mongoose';

const ProductModel = mongoose.model(
  'products',
  new Schema({
    name: String,
    boxUnits: Number,
    productUnits: Number,
    profitRate: Number,
    buyPrice: Number,
    salePrice: Number,
    brandId: String,
    deleted: { type: Boolean, default: false },
  })
);

export { ProductModel };
