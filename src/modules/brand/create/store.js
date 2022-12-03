import { db } from '../../../infra';

/**
 * Creates new brand
 * @param {Command} cmd The command
 * @returns {String} The brand id
 */
const createBrand = async cmd => {
  await db.connection();
  const brandId = (await new db.models.BrandModel(cmd).save())._id;

  return brandId;
};

export { createBrand };
