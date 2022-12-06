import * as store from './store';

/**
 * Handles the find brand query
 * @param {Query} query The query
 * @returns {Object} The brands and the total count
 */
const handle = async query => {
  if (!query.id) {
    const { brands, totalCount } = await store.findBrands(query);

    return { brands, totalCount };
  } else {
    const brands = await store.findBrand(query.id);

    return { brands };
  }
};

export { handle };
