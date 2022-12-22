import { db } from '../../../infra';
import { Product } from './product.model';

/**
 * Finds products
 * @param {Query} query The query
 * @returns {Object} The products and the total count
 */
const findProducts = async query => {
  const { page, size, ...filters } = query;
  query = JSON.parse(JSON.stringify(filters));
  await db.connection();

  const [result] = await db.models.ProductModel.aggregate([
    { $match: query },
    {
      $facet: {
        products: [{ $skip: page }, { $limit: size }],
        totalCount: [{ $count: 'count' }],
      },
    },
  ]);
  const products = result.products.map(document => new Product(document));
  let totalCount;
  result.totalCount[0]
    ? (totalCount = result.totalCount[0].count)
    : (totalCount = 0);

  return { products, totalCount };
};

/**
 * Finds a product
 * @param {String} id The product id
 * @returns {product} The product
 */
const findProduct = async id => {
  await db.connection();
  const [document] = await db.models.ProductModel.find({ _id: id });

  if (!document) return undefined;

  const product = [new Product(document)];

  return product;
};

export { findProducts, findProduct };
