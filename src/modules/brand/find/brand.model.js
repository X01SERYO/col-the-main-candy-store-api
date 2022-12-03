/**
 * Represents a brand
 */
class Brand {
  /**
   * Creates a brand model
   * @param {Object} doc The documents retuned by db
   * @param {String} doc._id The brand id
   * @param {String} doc.name The brand name
   * @param {String} doc.code The brand code
   */
  constructor({ _id, name, code }) {
    this.id = String(_id);
    this.name = name;
    this.code = code;
  }
}

export { Brand };
