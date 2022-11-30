/**
 * Represents a brand
 */
class Query {
  /**
   * Creates new find brand command
   * @param {String} id The brand id
   * @param {String} name The brand name
   * @param {String} code The brand code
   * @param {Number} page The brand page
   * @param {Number} size The brand size
   */
  constructor({ id, name, code, page, size }) {
    this.id = id;
    this.name = name;
    this.code = code;
    this.page = page;
    this.size = size;
  }
}

export { Query };
