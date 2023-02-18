import { db } from '../../../infra';

/**
 * Updates a brand
 * @param {Command} cmd The command
 * @throws If no changes have been in db
 */
const updateBrand = async cmd => {
  const { id, ...filters } = cmd;
  await db.connection();
  const doc = await db.models.BrandModel.findByIdAndUpdate(id, filters);

  if (!doc) {
    const error = { error: `The brand with id ${id} not exist` };
    logger.info(error);
    throw error;
  }
};

export { updateBrand };
