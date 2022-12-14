import * as store from './store';

/**
 * Handles the create product command
 * @param {Command} cmd The command
 * @returns {String} The product id
 */
const handle = async cmd => {
  const productId = await store.createProduct(cmd);

  return productId;
};

export { handle };
