import mongoose, { Schema } from 'mongoose';

const BrandModel = mongoose.model('brands', new Schema({ name: String }));

export { BrandModel };
