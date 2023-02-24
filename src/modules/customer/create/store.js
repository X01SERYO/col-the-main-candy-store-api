import { db } from '../../../infra';

/**
 * Creates new customer
 * @param {Command} cmd The command
 * @returns {String} The customer id
 */
const createCustomer = async cmd => {
  await db.connection();
  const customerId = (await new db.models.CustomerModel(cmd).save())._id;

  return customerId;
};

export { createCustomer };
