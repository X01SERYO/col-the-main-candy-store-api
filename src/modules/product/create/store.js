import { db } from '../../../infra';

/**
 * Creates new product
 * @param {Command} cmd The command
 * @returns {String} The product id
 */
const createProduct = async cmd => {
  await db.connection();
  const productId = (await new db.models.ProductModel(cmd).save())._id;

  return productId;
};

export { createProduct };
