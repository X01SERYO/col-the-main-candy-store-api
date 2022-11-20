import * as store from './store';

/**
 * Handles the create brand command
 * @param {Object} cmd The command
 */
const handle = async cmd => {
  await store.createBrand(cmd);
};

export { handle };
