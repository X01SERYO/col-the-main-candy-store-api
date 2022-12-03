import * as store from './store';

/**
 * Handles the create brand command
 * @param {Command} cmd The command
 * @returns {String} The brand id
 */
const handle = async cmd => {
  const brandId = await store.createBrand(cmd);

  return brandId;
};

export { handle };
