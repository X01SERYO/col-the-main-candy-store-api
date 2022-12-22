import { db, logger } from '../../../infra';

/**
 * Updates a product
 * @param {Command} cmd The command
 * @throws If product id not exist
 */
const updateProduct = async cmd => {
  const { id, ...filters } = cmd;
  await db.connection();
  const doc = await db.models.ProductModel.findByIdAndUpdate(id, filters);

  if (!doc) {
    const error = { error: `The product with id ${id} not exist` };
    logger.info(error);
    throw error;
  }
};

export { updateProduct };
