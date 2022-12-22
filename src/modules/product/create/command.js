/**
 * Represents a product
 */
class Command {
  /**
   * Creates new create product command
   * @param {Object} body The request body
   * @param {String} body.name The product name
   * @param {Number} body.boxUnits The products per box
   * @param {Number} body.productUnits The units per product
   * @param {Number} body.profitRate The product profit rate
   * @param {Number} body.buyPrice The product buy price
   * @param {Number} body.salePrice The product sale price
   * @param {String} body.brandId The product brand id
   */
  constructor({
    name,
    boxUnits,
    productUnits,
    profitRate,
    buyPrice,
    salePrice,
    brandId,
  }) {
    this.name = name;
    this.boxUnits = boxUnits;
    this.productUnits = productUnits;
    this.profitRate = profitRate;
    this.buyPrice = buyPrice;
    this.salePrice = salePrice;
    this.brandId = brandId;
  }
}

export { Command };
