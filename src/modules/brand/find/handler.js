import * as store from './store';

/**
 * Handles the find brand query
 * @param {Query} query The query
 * @returns {Object} The brands and the total count
 */
const handle = async query => {
  const brands = await store.findBrand(query);
  
  return brands;
};

export { handle };
