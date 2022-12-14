import { db } from '../../../infra';
import { Brand } from './brand.model';

/**
 * Finds brands
 * @param {Query} query The query
 * @returns {Object} The brands and the total count
 */
const findBrands = async query => {
  const { page, size, ...filters } = query;
  query = JSON.parse(JSON.stringify(filters));
  await db.connection();

  const [result] = await db.models.BrandModel.aggregate([
    { $match: query },
    {
      $facet: {
        brands: [{ $skip: page }, { $limit: size }],
        totalCount: [{ $count: 'count' }],
      },
    },
  ]);
  const brands = result.brands.map(document => new Brand(document));
  let totalCount;
  result.totalCount[0]
    ? (totalCount = result.totalCount[0].count)
    : (totalCount = 0);

  return { brands, totalCount };
};

/**
 * Finds a brand
 * @param {String} id The brand id
 * @returns {Brand} The brand
 */
const findBrand = async id => {
  await db.connection();
  const [document] = await db.models.BrandModel.find({ _id: id });

  if (!document) return undefined;

  const brand = [new Brand(document)];

  return brand;
};

export { findBrands, findBrand };
