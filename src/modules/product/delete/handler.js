import * as store from './store';

/**
 * Handles a delete brand command
 * @param {Command} cmd The command
 */
const handle = async cmd => {
  await store.deleteProduct(cmd);
};

export { handle };
