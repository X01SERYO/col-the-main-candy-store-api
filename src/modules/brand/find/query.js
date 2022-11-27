/**
 * Represents a brand
 */
class Query {
  /**
   * Creates new find brand command
   * /**
   * Creates new create brand command
   * @param {String} id The brand id
   * @param {String} name The brand name
   * @param {String} code The brand code
   * @param {Number} page The brand page
   * @param {Number} sizeThe brand size
   */
  constructor({ id, name, code, page, size }) {
    this.name = name;
    this.code = code;
    this.id = id;
    this.page = page;
    this.size = size;
  }
}
export { Query };
