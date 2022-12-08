/**
 * Represents a brand
 */
class Query {
  /**
   * Creates new find brand command
   * @param {Object} query The request query
   * @param {String} query.id The brand id
   * @param {String} query.name The brand name
   * @param {String} query.code The brand code
   * @param {Number} query.page The brand page
   * @param {Number} query.size The brand size
   */
  constructor({ id, name, code, page, size }) {
    this._id = id;
    this.name = name;
    this.code = code;
    this.page = page * size - size;
    this.size = size;
  }
}

export { Query };
