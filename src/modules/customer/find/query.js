/**
 * Represents a customer query
 */
class Query {
  /**
   * Creates new find customer query
   * @param {Object} query The request query
   * @param {String} query.id The customer id
   * @param {String} query.name The customer name
   * @param {String} query.phone The customer phone
   * @param {Boolean} query.deleted The condition if customers are deleted
   */
  constructor({ id, name, phone, deleted = false, page, size }) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.deleted = deleted;
    this.page = page * size - size;
    this.size = size;
  }
}

export { Query };
