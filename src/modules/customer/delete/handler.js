import * as store from './store';

/**
 * Handles a delete customer command
 * @param {Command} cmd The command
 */
const handle = async cmd => {
  await store.deleteCustomer(cmd);
};
export { handle };
