import * as store from './store';

/**
 * Handles the find products query
 * @param {Query} query The query
 * @returns {Object} The products and the total count
 */
const handle = async query => {
  if (!query.id) {
    const { products, totalCount } = await store.findProducts(query);

    return { products, totalCount };
  } else {
    const products = await store.findProduct(query.id, query.deleted);

    return { products };
  }
};

export { handle };
