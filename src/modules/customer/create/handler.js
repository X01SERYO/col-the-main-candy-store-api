import * as store from './store';

/**
 * Handles the create customer command
 * @param {Command} cmd The command
 * @returns {String} The customer id
 */
const handle = async cmd => {
  const customerId = await store.createCustomer(cmd);

  return customerId;
};

export { handle };
