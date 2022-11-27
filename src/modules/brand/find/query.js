class Query {
  /**
   * Creates new find brand command
   * @param {*} id
   * @param {*} name
   * @param {*} code
   * @param {*} page
   * @param {*} size
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
