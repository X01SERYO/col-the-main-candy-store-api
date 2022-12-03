import { db } from '../../../infra';

/**
 * Updates a brand
 * @param {Command} cmd The command
 */
const updateBrand = async cmd => {
  const { id, ...filters } = cmd;
  await db.connection();
  await db.models.BrandModel.updateOne({ id }, filters);
};

export { updateBrand };
