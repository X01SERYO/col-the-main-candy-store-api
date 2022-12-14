/**
 * Represents a product
 */
class Product {
  /**
   * Creates new create product command
   * @param {Object} doc The documents retuned by db
   * @param {String} doc._id The brand id
   * @param {String} doc.name The product name
   * @param {Number} doc.boxUnits The products per box
   * @param {Number} doc.productUnits The units per product
   * @param {Number} doc.profitRate The product profit rate
   * @param {Number} doc.buyPrice The product buy price
   * @param {Number} doc.salePrice The product sale price
   * @param {String} doc.brandId The product brand id
   */
  constructor({
    _id,
    name,
    boxUnits,
    productUnits,
    profitRate,
    buyPrice,
    salePrice,
    brandId,
  }) {
    this.id = String(_id);
    this.name = name;
    this.boxUnits = boxUnits;
    this.productUnits = productUnits;
    this.profitRate = profitRate;
    this.buyPrice = buyPrice;
    this.salePrice = salePrice;
    this.brandId = brandId;
  }
}

export { Product };
