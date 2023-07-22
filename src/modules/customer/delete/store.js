import { db, logger } from '../../../infra';

/**
 * Deletes a customer
 * @param {Command} cmd The command
 * @throws If customer do not exist
 */
const deleteCustomer = async cmd => {
  const { id, ...filters } = cmd;
  await db.connection();
  const doc = await db.models.CustomerModel.findByIdAndUpdate(id, filters);

  if (!doc) {
    const error = { error: `The customer with id ${id} not exist` };
    logger.info(error);
    throw error;
  }
};

export { deleteCustomer };
