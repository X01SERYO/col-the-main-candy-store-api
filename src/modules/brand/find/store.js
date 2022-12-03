import { db } from '../../../infra';
import { Brand } from './brand.model';

/**
 * Finds brands
 * @param {Query} query The query
 * @param {Object} brands The brands and the total count
 */
const findBrand = async query => {
  const { page, size, ...filters } = query;
  query = JSON.parse(JSON.stringify(filters));
  console.log(query, page, size);
  await db.connection();
  const documents = await db.models.BrandModel.find(query)
    .skip(page)
    .limit(size);

  const [result] = await db.models.BrandModel.aggregate([
    { $match: query },
    {
      $facet: {
        brands: [{ $skip: page }, { $limit: size }],
        totalCount: [{ $count: 'count' }],
      },
    },
  ]);

  const brands = documents.map(document => new Brand(document));
  console.log(result);

  return brands;
};

export { findBrand };
