import { db, logger } from '../../../infra';

/**
 * Deletes a product
 * @param {Command} cmd The command
 * @throws If product id not exist
 */
const deleteProduct = async cmd => {
  const { id, deleted } = cmd;
  await db.connection();
  const doc = await db.models.ProductModel.findByIdAndUpdate(id, { deleted });

  if (!doc) {
    const error = { error: `The product with id ${id} not exist` };
    logger.info(error);
    throw error;
  }
};

export { deleteProduct };
