import * as store from './store';

/**
 * Handles the find brand query
 * @param {Query} query The query
 */
const handle = async query => {
  await store.findBrand(query);
};

export { handle };
