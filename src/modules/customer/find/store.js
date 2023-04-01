import { db } from '../../../infra';
import { Customer } from './customer.model';

/**
 * Finds customers
 * @param {Query} query The query
 * @returns {Object} The customer and the total count
 */
const findCustomers = async query => {
  const { page, size, ...filters } = query;
  query = JSON.parse(JSON.stringify(filters));
  await db.connection();

  const [result] = await db.models.CustomerModel.aggregate([
    { $match: query },
    {
      $facet: {
        customers: [{ $skip: page }, { $limit: size }],
        totalCount: [{ $count: 'count' }],
      },
    },
  ]);
  const customers = result.customers.map(document => new Customer(document));
  let totalCount;
  result.totalCount[0]
    ? (totalCount = result.totalCount[0].count)
    : (totalCount = 0);

  return { customers, totalCount };
};

/**
 * Finds a customer
 * @param {String} id The customer id
 * @returns {Customer} The customer
 */
const findCustomer = async (id, deleted) => {
  await db.connection();
  const [document] = await db.models.CustomerModel.find({ _id: id, deleted });

  if (!document) return undefined;

  const customer = [new Customer(document)];

  return customer;
};

export { findCustomers, findCustomer };
