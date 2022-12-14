/**
 * Represents a product
 */
class Query {
  /**
   * Creates new find product query
   * @param {Object} query The request query
   * @param {String} query.id The product id
   * @param {String} query.name The product name
   * @param {Number} query.boxUnits The products per box
   * @param {Number} query.productUnits The units per product
   * @param {Number} query.profitRate The product profit rate
   * @param {Number} query.buyPrice The product buy price
   * @param {Number} query.salePrice The product sale price
   * @param {String} query.brandId The product brand id
   * @param {Number} query.page The brand page
   * @param {Number} query.size The brand size
   */
  constructor({
    id,
    name,
    boxUnits,
    productUnits,
    profitRate,
    buyPrice,
    salePrice,
    brandId,
    page,
    size,
  }) {
    this.id = id;
    this.name = name;
    this.boxUnits = boxUnits;
    this.productUnits = productUnits;
    this.profitRate = profitRate;
    this.buyPrice = buyPrice;
    this.salePrice = salePrice;
    this.brandId = brandId;
    this.page = page * size - size;
    this.size = size;
  }
}

export { Query };
