import * as store from './store';

/**
 * Handles the find customers query
 * @param {Query} query The query
 * @returns {Object} The customers and the total count
 */
const handle = async query => {
  if (!query.id) {
    const { customers, totalCount } = await store.findCustomers(query);

    return { customers, totalCount };
  } else {
    const customer = await store.findCustomer(query.id, query.deleted);

    return { customer };
  }
};

export { handle };
